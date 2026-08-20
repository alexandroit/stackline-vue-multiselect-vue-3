import { cp, mkdir, rm } from 'node:fs/promises';

const source = new URL('../src/', import.meta.url);
const target = new URL('../public/source/', import.meta.url);

await rm(target, { force: true, recursive: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

console.log('Synced playground source to public/source.');
