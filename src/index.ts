import { existsSync } from 'fs';
import { mkdir } from 'fs/promises';
import { renameJs2Ts, createTsFileFromJsFile } from './util/index.js';

const src: string = process.argv[2];
const dist: string = process.argv[3];

if (src || dist) {
  if (dist) {
    console.log(`create new ts files in ${dist}...`);
    if (!existsSync(dist)) await mkdir(dist)
    createTsFileFromJsFile(src, dist);
  } else {
    console.log(`rename all js files in ${src}...`);
    renameJs2Ts(src);
  }
} else {
  console.error('At least 1 argments must be passed');
  process.exit(1);
}
