import { extname } from 'path';

export const jsts = {
  '.js': '.ts',
  '.jsx': 'tsx',
  '.cjs': '.cts',
  '.mjs': '.mts',
};

type JsTsKey = keyof typeof jsts;

type JsFilePath = `${string}${JsTsKey}`;

export function isJsExt(ext: string): ext is JsTsKey {
  return Object.keys(jsts).includes(ext);
}

export function getJsExt(path: JsFilePath): JsTsKey {
  return extname(path) as JsTsKey;
}

export function isJsFile(path: string): path is JsFilePath {
  return isJsExt(extname(path));
}
