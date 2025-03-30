import matter from 'gray-matter';
import { readdir, readFile, stat } from 'node:fs/promises';
import path, { basename } from 'node:path';
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
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Post = z.infer<typeof Post>;

export interface PublishedPost extends Post {
  createdAt: Date;
}

export const isPublishedPost = (post: Post): post is PublishedPost => post.createdAt !== undefined;

export const contentDir = path.join(process.cwd(), '/content');
export const postsDir = path.join(contentDir, '/posts');

const readdirRecursive = async (baseDir: string): Promise<string[]> => {
  const out: string[] = [];
  const stack = [baseDir];
  let curPath: string | undefined;

  while ((curPath = stack.pop())) {
    const statResult = await stat(curPath);

    if (statResult.isDirectory()) {
      const items = await readdir(curPath);
      stack.push(...items.map((item) => path.join(curPath!, item)));
    } else {
      out.push(curPath);
    }
  }
  return out;
};

const removeExtension = (file: string) => file.replace(/\.\w+$/, '');

export const readPostFile = async (path: string): Promise<Post> => {
  const contents = await readFile(path, 'utf-8');
  const { data, content } = matter(contents);
  const slug = removeExtension(basename(path.toString()));
  return await Post.parseAsync({ ...data, slug, content });
};

export const getPublicPosts = async (): Promise<PublishedPost[]> => {
  const files = await readdirRecursive(postsDir);
  const posts = await Promise.all(files.map(readPostFile));

  return posts
    .filter(isPublishedPost)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};
