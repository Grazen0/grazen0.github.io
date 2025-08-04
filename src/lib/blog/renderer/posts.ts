import { dev } from '$app/environment';
import { readdirRecursive as readdirRecursiveSync } from '$lib/common/server/fs';
import { removeExtension } from '../../common/path';
import { Post } from '../schemas';
import { default as matter } from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

export const contentDir = path.join(process.cwd(), '/content');
export const postsDir = path.join(contentDir, '/posts');

const isPostPublished = (post: Post) => !!post.createdAt;

const comparePosts = (a: Post, b: Post) => {
  if (!a.createdAt && !b.createdAt) return a.title.localeCompare(b.title);
  if (!a.createdAt) return -1;
  if (!b.createdAt) return 1;

  return b.createdAt.getTime() - a.createdAt.getTime();
};

export const readPostFile = (filePath: string): Post => {
  const contents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(contents);

  const slug = removeExtension(path.basename(filePath));
  return Post.parse({ ...data, slug, content });
};

export const getPublishedPosts = (): Post[] => {
  const files = readdirRecursiveSync(postsDir);
  let posts = files.map(readPostFile);

  if (!dev) {
    // Keep only published posts
    posts = posts.filter(isPostPublished);
  }

  return posts.sort(comparePosts);
};
