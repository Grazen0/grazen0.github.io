import fs from 'node:fs';
import path from 'node:path';

export const readdirRecursive = (baseDir: string): string[] => {
  const out: string[] = [];
  const stack = [baseDir];
  let curPath: string | undefined;

  while ((curPath = stack.pop())) {
    const statResult = fs.statSync(curPath);

    if (statResult.isDirectory()) {
      const items = fs.readdirSync(curPath);
      stack.push(...items.map((item) => path.join(curPath!, item)));
    } else {
      out.push(curPath);
    }
  }
  return out;
};
