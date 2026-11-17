import test from 'node:test';
import assert from 'node:assert/strict';
import { tracks, findTrack, trackProgress, trackNext, recommendTrack, allLessons, chapterStarts } from '../www/course-tracks.mjs';
import { annotatedPython } from '../www/course-annotations.mjs';
import { guidance } from '../www/course-guidance.mjs';
test('Kotlin 路线简介说明用途',()=>{
 const track=tracks.find(item=>item.id==='kotlin');assert.match(track.name,/安卓/);assert.match(track.description,/编程语言/);assert.match(track.description,/安卓/);
});
test('后端框架路线简介说明语言和用途',()=>{
 for(const [id,language] of [['fastapi','Python'],['spring','Java']]){
  const track=tracks.find(item=>item.id===id);assert.match(track.description,new RegExp(language));assert.match(track.description,/接口/);assert.match(track.description,/框架/);
 }
});
test('前端路线简介说明界面用途和 JavaScript 基础',()=>{
 for(const id of ['react','vue']){
  const track=tracks.find(item=>item.id===id);assert.match(track.description,/JavaScript/);assert.match(track.description,/界面/);
 }
});
test('Node.js 和 TypeScript 简介说明与 JavaScript 的关系',()=>{
 const node=tracks.find(item=>item.id==='node'),ts=tracks.find(item=>item.id==='typescript');
 assert.match(node.description,/JavaScript/);assert.match(node.description,/运行/);assert.match(ts.description,/JavaScript/);assert.match(ts.description,/类型/);
});
test('移动开发路线简介说明目标平台',()=>{
 assert.match(tracks.find(item=>item.id==='wechat').description,/微信/);
 assert.match(tracks.find(item=>item.id==='android').description,/安卓/);
});
test('不同路线按各自的课程顺序和完成记录计算进度', () => {
 const python=findTrack('python');
 const api=findTrack('fastapi');
 const javascript=findTrack('javascript');
 const wechat=findTrack('wechat');
 assert.ok(python.lessons.length>=30);
 assert.ok(api.lessons.length>=10);
 assert.ok(javascript.lessons.length>=7);
 assert.ok(wechat.lessons.length>=3);
 assert.ok(wechat.lessons[0].blocks.length>=2);
 assert.equal(new Set(tracks.flatMap(t=>t.lessons.map(l=>l.id))).size, tracks.flatMap(t=>t.lessons).length);
 const done=[python.lessons[0].id,api.lessons[0].id];
 assert.equal(trackProgress(python,done).done,1);
 assert.equal(trackProgress(api,done).done,1);
 assert.equal(trackNext(api,done).id,api.lessons[1].id);
 assert.equal(recommendTrack(python,python.lessons.map(l=>l.id)).id,'fastapi');
});
test('课程章节入口属于对应路线，且每条路线从第一课开始分章',()=>{
 for(const track of tracks){
  const starts=chapterStarts[track.id];assert.ok(starts?.[track.lessons[0].id],track.id);
  for(const id of Object.keys(starts))assert.ok(track.lessons.some(l=>l.id===id),`${track.id}: ${id}`);
 }
});
test('所有课程均有可展示的讲解、答案与逐行注释',()=>{
 for(const lesson of allLessons){
  assert.ok(lesson.title&&lesson.explain&&lesson.output&&lesson.question&&lesson.explanation,lesson.id);
  assert.ok(lesson.options?.[lesson.answer],`${lesson.id} 答案无效`);
  assert.ok((lesson.guide||guidance[lesson.id])?.length>=2,`${lesson.id} 缺少解释`);
  for(const block of lesson.blocks||[lesson])assert.ok(annotatedPython({...block,id:lesson.id}).length>block.code.length,`${lesson.id} 缺少注释`);
 }
});
