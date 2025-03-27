import matter from 'gray-matter';
import type { PathLike } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

export const Image = z.object({
  url: z.string(),
  alt: z.string().optional(),
});

export type Image = z.infer<typeof Image>;

export const Post = z.object({
  title: z.string(),
  summary: z.string(),
  slug: z.string(),
  content: z.string(),
  image: Image.optional(),
  tags: z.array(z.string()).default([]),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  draft: z.boolean().default(false),
});

export type Post = z.infer<typeof Post>;

export const contentDir = path.join(process.cwd(), '/content');
export const postsDir = path.join(contentDir, '/posts');

const readdirRecursive = async (baseDir: string): Promise<string[]> => {
  const out: string[] = [];
  const stack = [baseDir];
  let curPath: string | undefined;

  while ((curPath = stack.pop())) {
    const stat = await fs.stat(curPath);

    if (stat.isDirectory()) {
      const items = await fs.readdir(curPath);
      stack.push(...items.map((item) => path.join(curPath!, item)));
    } else {
      out.push(curPath);
    }
  }
  return out;
};

export const readPostFile = async (path: PathLike): Promise<Post> => {
  const contents = await fs.readFile(path, 'utf-8');
  const { data, content } = matter(contents);
  return await Post.parseAsync({ ...data, content });
};

export const getPublicPosts = async (): Promise<Post[]> => {
  const files = await readdirRecursive(postsDir);
  const posts = await Promise.all(files.map(readPostFile));

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};
