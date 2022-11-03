import { isJsFile, getJsExt, jsts } from './validator.js';
import { parse, format, join } from 'node:path';
import { stat, rename, mkdir, cp, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

function createTsName(path: string): string {
  if (isJsFile(path)) {
    const extention = getJsExt(path);
    const parsedTsPath = {
      ...parse(path),
      ext: jsts[extention],
      base: undefined,
    };
    const tsPath = format(parsedTsPath);
    return tsPath;
  }
  throw new Error('not js file');
}

export async function createTsFileFromJsFile(
  src: string,
  dist: string
): Promise<void> {
  const fileOrDir = await readdir(src);

  for (const name of fileOrDir) {
    const target = join(src, name);
    const result = join(dist, name);

    const isDir = (await stat(target)).isDirectory();

    if (isDir) {
      console.log(`${target} -> ${result}`);

      if (!existsSync(result)) await mkdir(result);
      await createTsFileFromJsFile(target, result);
    } else {
      if (isJsFile(target)) {
        const tsPath = createTsName(result);
        console.log(`${target} -> ${tsPath}`);
        cp(target, tsPath);
      } else {
        console.log(`${target} -> ${result}`);
        cp(target, result);
      }
    }
  }
}

export async function renameJs2Ts(path: string): Promise<void> {
  const fileOrDir = await readdir(path);

  for (const name of fileOrDir) {
    const target = join(path, name);

    const isDir = (await stat(target)).isDirectory();

    if (isDir) {
      await renameJs2Ts(target);
    } else {
      if (isJsFile(target)) {
        // 拡張子をtsに書き換え
        const tsPath = createTsName(target);
        rename(target, tsPath);
        console.log(`${target} -> ${tsPath}`);
      }
    }
  }
}
