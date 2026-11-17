import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
export const files=['index.html','course.css','course-app.mjs','course.mjs','course-guidance.mjs','course-annotations.mjs','python-advanced.mjs','python-practical.mjs','fastapi-lessons.mjs','fastapi-summary.mjs','course-tracks.mjs','javascript-lessons.mjs','javascript-advanced.mjs','node-lessons.mjs','java-lessons.mjs','java-advanced.mjs','typescript-lessons.mjs','typescript-advanced.mjs','android-lessons.mjs','react-lessons.mjs','react-practical.mjs','vue-lessons.mjs','vue-practical.mjs','wechat-lessons.mjs','wechat-advanced.mjs','web-lessons.mjs','web-advanced.mjs','sql-lessons.mjs','kotlin-lessons.mjs','android-kotlin-lessons.mjs','spring-lessons.mjs'];
export async function build(){
 const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
 for(const file of files){const dest=resolve(root,'matu-web',file);await mkdir(dirname(dest),{recursive:true});await copyFile(resolve(root,'www',file),dest)}
 console.log(`Prepared ${files.length} course assets`);
}
if(process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)) await build();
