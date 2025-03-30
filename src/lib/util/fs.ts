import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

export const readdirRecursive = async (baseDir: string): Promise<string[]> => {
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
