import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {posix} from 'node:path';
import { files } from '../scripts/build-matu.mjs';
test('新版安装包只包含课程所需的网页资源', () => {
 for (const name of ['index.html','course-app.mjs','course.mjs','course-guidance.mjs','course-annotations.mjs','python-advanced.mjs','fastapi-lessons.mjs','course-tracks.mjs','javascript-lessons.mjs','javascript-advanced.mjs','node-lessons.mjs','java-lessons.mjs','typescript-lessons.mjs','react-lessons.mjs','vue-lessons.mjs','wechat-lessons.mjs','android-lessons.mjs','web-lessons.mjs']) assert.ok(files.includes(name), name);
 assert.ok(!files.includes('legacy-index.html'));
 assert.ok(!files.some(name => name.startsWith('audio/')));
});
test('打包清单覆盖所有课程模块的本地依赖',()=>{
 const set=new Set(files);
 for(const file of files.filter(name=>name.endsWith('.mjs'))){
  const content=readFileSync(new URL(`../www/${file}`,import.meta.url),'utf8');
  for(const match of content.matchAll(/(?:from\s*|import\s*)['"](\.\/.+?)['"]/g)){
   const target=posix.normalize(posix.join(posix.dirname(file),match[1]));
   assert.ok(set.has(target),`${file} 缺少依赖 ${target}`);
  }
 }
});
