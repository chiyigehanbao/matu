import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
import {tracks,chapterStarts,allLessons} from '../www/course-tracks.mjs';
test('React 主题筛选与组合筛选相邻并有章节入口',()=>{
 const lessons=tracks.find(track=>track.id==='react').lessons;const index=lessons.findIndex(item=>item.id==='react-topic-filter');
 assert.ok(chapterStarts.react['react-topic-filter']);assert.equal(lessons[index+1]?.id,'react-combined-filter');
});
test('异步和本地保存案例有独立章节入口',()=>{
 for(const [track,id] of [['java','java-executor-future'],['android','kt-android-persist-tasks'],['wechat','wx-persist-tasks'],['vue','vue-local-note']]){
  assert.ok(chapterStarts[track][id],`${track} 缺少 ${id} 章节`);
  assert.ok(tracks.find(item=>item.id===track).lessons.some(item=>item.id===id));
 }
});
test('课程章节按学习顺序排列且网页路线从基础开始',()=>{
 for(const track of tracks){
  const numbers=track.lessons.map(lesson=>chapterStarts[track.id]?.[lesson.id]).filter(Boolean).map(label=>Number(label.slice(0,2)));
  assert.deepEqual(numbers,[...numbers].sort((a,b)=>a-b),`${track.id} 的章节顺序错误`);
 }
 assert.equal(tracks.find(track=>track.id==='web').lessons[0].id,'web-heading');
});
test('Spring Boot 综合接口案例有章节入口',()=>{
 assert.ok(chapterStarts.spring['spring-filter-pagination']);
 assert.ok(tracks.find(item=>item.id==='spring').lessons.some(item=>item.id==='spring-filter-pagination'));
});
test('Java 列表搜索与处理案例有章节入口',()=>{
 assert.ok(chapterStarts.java['java-search-case']);
 assert.ok(tracks.find(item=>item.id==='java').lessons.some(item=>item.id==='java-search-case'));
});
test('Kotlin 集合统计案例有章节入口',()=>{
 assert.ok(chapterStarts.kotlin['kt-partition-tasks']);
 assert.ok(tracks.find(item=>item.id==='kotlin').lessons.some(item=>item.id==='kt-partition-tasks'));
});
test('SQL 约束和条件统计案例有章节入口',()=>{
 for(const id of ['sql-check-task-status','sql-conditional-count']){
  assert.ok(chapterStarts.sql[id],`缺少 ${id} 章节入口`);
  assert.ok(tracks.find(item=>item.id==='sql').lessons.some(item=>item.id===id));
 }
});
test('网页课程的表单和表格有独立章节入口',()=>{
 for(const id of ['web-checkbox-group','web-study-table','web-flex-wrap']){
  assert.ok(chapterStarts.web[id],`缺少 ${id} 章节入口`);
  assert.ok(tracks.find(item=>item.id==='web').lessons.some(item=>item.id===id));
 }
});

test('新增进阶案例有对应主题章节且入口指向实际课程',()=>{
 for(const [track,id] of [['node','node-stream-read'],['typescript','ts-partial-update'],['java','java-reader-lines'],['react','react-topic-summary'],['vue','vue-topic-summary'],['wechat','wx-lifecycle-timer'],['fastapi','api-partial-note'],['android','kt-android-save-tip'],['sql','sql-completed-topic-totals']]){
  assert.ok(chapterStarts[track][id],`${track} 缺少 ${id} 的章节入口`);
  assert.ok(tracks.find(item=>item.id===track).lessons.some(item=>item.id===id),`${id} 课程不存在`);
 }
});
test('较长路线将数据、接口和综合案例分成可找到的章节',()=>{
 for(const [track,ids] of [['python',['py-json','py-csv-read','py-sqlite','py-task-summary','py-async']],['typescript',['ts-unknown-validation','ts-update-task']],['node',['node-events','node-async','node-http']]]){
  const course=tracks.find(item=>item.id===track);let previous=-1;
  for(const id of ids){assert.ok(chapterStarts[track][id],`${track} 缺少 ${id} 章节`);const index=course.lessons.findIndex(item=>item.id===id);assert.ok(index>previous,`${track} 章节顺序错误`);previous=index}
 }
});
test('接口和任务案例有对应的章节入口',()=>{
 for(const [track,ids] of [['fastapi',['api-study-summary','api-trim-title','api-task-status','api-sqlite-conflict']],['javascript',['js-async','js-find']],['java',['java-topic-count']],['kotlin',['kt-parse-minutes']],['wechat',['wx-storage-read']],['sql',['sql-pagination','sql-update-task']]]){
  const course=tracks.find(item=>item.id===track);for(const id of ids){assert.ok(chapterStarts[track][id],`${track} 缺少 ${id} 章节`);assert.ok(course.lessons.some(item=>item.id===id),`${id} 课程不存在`)}
 }
});

test('课程编号唯一，综合示例有对应章节',()=>{
 assert.equal(new Set(allLessons.map(lesson=>lesson.id)).size,allLessons.length);
 for(const [track,id] of [['spring','spring-query-validation'],['sql','sql-group-having'],['react','react-filter-tasks'],['vue','vue-filter']]){
  assert.ok(chapterStarts[track][id],`${track} 缺少综合章节`);
  assert.ok(tracks.find(item=>item.id===track).lessons.some(lesson=>lesson.id===id));
 }
});

test('每条路线的每一课都能打开并展示注释、示例和练习',async()=>{
 const dom=new JSDOM(readFileSync(new URL('../www/index.html',import.meta.url),'utf8'),{url:'http://localhost/'});
 global.window=dom.window;global.document=dom.window.document;global.localStorage=dom.window.localStorage;dom.window.scrollTo=()=>{};
 await import(`../www/course-app.mjs?catalog=${Date.now()}`);const d=dom.window.document;
 for(const track of tracks){
  d.querySelector('[data-nav="catalog"]').click();const trackButton=d.querySelector(`[data-track="${track.id}"]`);assert.ok(trackButton,track.id);trackButton.click();
  for(const l of track.lessons){
   const link=d.querySelector(`[data-lesson="${l.id}"]`);assert.ok(link,l.id);link.click();
   assert.equal(d.querySelector('h1').textContent,l.title,l.id);assert.equal(d.querySelectorAll('.code-card pre').length,l.blocks?.length||1,l.id);
   assert.ok(d.querySelector('.code-comment'),`${l.id} 缺少可见注释`);assert.ok(d.querySelector('.quiz'),`${l.id} 缺少可选练习`);
   d.querySelector('button.crumb').click();
  }
 }
 dom.window.close();
});
