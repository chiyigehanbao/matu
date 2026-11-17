import { lessons as pythonLessons } from './course.mjs';
import { apiLessons } from './fastapi-lessons.mjs';
import { javascriptLessons } from './javascript-lessons.mjs';
import { nodeLessons } from './node-lessons.mjs';
import { javaLessons } from './java-lessons.mjs';
import { typeScriptLessons } from './typescript-lessons.mjs';
import { androidLessons } from './android-lessons.mjs';
import { reactLessons } from './react-lessons.mjs';
import { vueLessons } from './vue-lessons.mjs';
import { wechatLessons } from './wechat-lessons.mjs';
import { webLessons } from './web-lessons.mjs';
import { sqlLessons } from './sql-lessons.mjs';
import { kotlinLessons } from './kotlin-lessons.mjs';
import { kotlinAndroidLessons } from './android-kotlin-lessons.mjs';
import { springLessons } from './spring-lessons.mjs';
export const tracks=[{id:'python',name:'Python 从入门到进阶',short:'Python',icon:'Py',description:'先认识代码，再学会组织数据和函数。',lessons:pythonLessons},{id:'fastapi',name:'FastAPI 接口入门',short:'FastAPI',icon:'API',description:'FastAPI 是 Python 接口开发框架；学习如何接收请求和返回数据。',lessons:apiLessons},{id:'javascript',name:'JavaScript 从零开始',short:'JavaScript',icon:'JS',description:'为网页、Node.js 和前端框架打好基础。',lessons:javascriptLessons},{id:'node',name:'Node.js 运行环境',short:'Node.js',icon:'N',description:'Node.js 可以在浏览器之外运行 JavaScript；先学习 JavaScript，再了解服务、文件和异步。',lessons:nodeLessons},{id:'java',name:'Java 从零开始',short:'Java',icon:'J',description:'认识类型、方法和面向对象语言的基础。',lessons:javaLessons},{id:'typescript',name:'TypeScript 类型入门',short:'TypeScript',icon:'TS',description:'TypeScript 在 JavaScript 基础上增加类型检查；先了解 JavaScript，再学习类型与数据结构。',lessons:typeScriptLessons},{id:'android',name:'Android 页面入门',short:'Android',icon:'安',description:'学习安卓应用的页面、控件和事件，案例包括 Java 与 Kotlin 写法。',lessons:[...androidLessons,...kotlinAndroidLessons]},{id:'react',name:'React 界面入门',short:'React',icon:'R',description:'React 用于构建交互界面；先了解 JavaScript，再学习组件、属性和状态。',lessons:reactLessons},{id:'vue',name:'Vue 界面入门',short:'Vue',icon:'V',description:'Vue 用于构建交互界面；先了解 JavaScript，再学习数据、模板和事件。',lessons:vueLessons},{id:'wechat',name:'微信小程序入门',short:'小程序',icon:'微',description:'学习微信小程序的页面、数据和交互，示例包含页面逻辑与界面结构。',lessons:wechatLessons},{id:'web',name:'HTML 与 CSS 入门',short:'HTML / CSS',icon:'网页',description:'认识页面结构、链接与基本样式。',lessons:webLessons},{id:'sql',name:'SQL 数据库入门',short:'SQL',icon:'DB',description:'认识查询、表、筛选和事务；以 SQLite 为例。',lessons:sqlLessons},{id:'kotlin',name:'Kotlin（安卓开发语言）入门',short:'Kotlin',icon:'K',description:'Kotlin 是一门常用于安卓开发的编程语言；这里先学语法，再衔接安卓页面。',lessons:kotlinLessons},{id:'spring',name:'Spring Boot 接口入门',short:'Spring Boot',icon:'S',description:'Spring Boot 是 Java 应用开发框架；这里学习如何编写接口和处理请求。',lessons:springLessons}];
export const chapterStarts={
 python:{hello:'01 · 第一次读懂代码',operators:'02 · 条件与选择',lists:'03 · 列表与数据', 'for-loop':'04 · 循环与重复',functions:'05 · 函数与错误',project:'06 · 基础小项目','py-tuple':'07 · 数据结构进阶','py-default':'08 · 函数进阶','py-typing':'09 · 类型与对象','py-modules':'10 · 模块、日期与文件','py-json':'11 · JSON 数据处理','py-csv-read':'12 · CSV 与数据校验','py-sqlite':'13 · SQLite 数据库','py-task-summary':'14 · 学习任务综合案例','py-async':'15 · 异步与接口前置'},
 fastapi:{'api-first':'01 · 请求与响应','api-body':'02 · 数据与错误','api-depends':'03 · 组织接口','api-sqlite-memory':'04 · 数据与课程接口','api-study-summary':'05 · 汇总、查询与分页','api-trim-title':'06 · 标题校验与任务筛选','api-task-status':'07 · 任务更新、删除与校验','api-sqlite-conflict':'08 · 数据库冲突处理','api-partial-note':'09 · 局部更新与事务'},
 web:{'web-heading':'01 · 页面结构','web-css-color':'02 · 页面样式','web-checkbox-group':'03 · 表单选择与输入','web-study-table':'04 · 表格结构与样式','web-flex-wrap':'05 · 弹性布局与换行'},
 javascript:{'js-console':'01 · 语法基础','js-map':'02 · 数组、对象与异常','js-async':'03 · 异步、模块与接口','js-find':'04 · 数组与任务案例'},
 typescript:{'ts-types':'01 · 类型基础','ts-alias':'02 · 类型进阶','ts-unknown-validation':'03 · 未知数据与错误','ts-update-task':'04 · 任务与状态案例','ts-partial-update':'05 · 类型工具与完整状态处理'},
 node:{'node-intro':'01 · 认识运行环境','node-events':'02 · 事件与监听','node-async':'03 · 异步处理','node-http':'04 · 服务与文件','node-stream-read':'05 · 数据流与流水线'},
 java:{'java-first':'01 · 语法基础','java-class':'02 · 对象与数据','java-interface':'03 · 接口与继承','java-topic-count':'04 · 数据处理与任务案例','java-reader-lines':'05 · 资源管理与数据处理','java-search-case':'06 · 列表搜索与处理','java-executor-future':'07 · 线程池与后台任务'},
 kotlin:{'kt-first':'01 · 语法基础','kt-function':'02 · 函数与对象','kt-parse-minutes':'03 · 输入校验与任务案例','kt-partition-tasks':'04 · 集合分组与统计'},
 spring:{'spring-first':'01 · 控制器与请求','spring-query-validation':'02 · 校验与汇总','spring-filter-pagination':'03 · 分页与任务综合接口'},
 android:{'android-screen':'01 · 页面和控件','android-state':'02 · 页面状态与本地存储','kt-android-screen':'03 · 使用 Kotlin 编写页面','kt-android-save-tip':'04 · 本地存储综合案例','kt-android-persist-tasks':'05 · 本地任务列表'},
 react:{'react-component':'01 · 组件与状态','react-compose':'02 · 组合与数据传递','react-filter-tasks':'03 · 任务与组件交互','react-topic-summary':'04 · 汇总与综合交互','react-topic-filter':'05 · 筛选与组合查询'},
 vue:{'vue-first':'01 · 数据、模板与事件','vue-computed':'02 · 计算与组件','vue-filter':'03 · 任务与组件交互','vue-topic-summary':'04 · 汇总与综合交互','vue-local-note':'05 · 浏览器本地存储'},
 wechat:{'wx-data':'01 · 页面与数据','wx-lifecycle':'02 · 页面能力','wx-request':'03 · 网络请求示例','wx-storage-read':'04 · 本地数据读取与保存','wx-lifecycle-timer':'05 · 生命周期与任务综合案例','wx-persist-tasks':'06 · 本地任务列表'},
 sql:{'sql-select':'01 · 查询与表','sql-order':'02 · 排序与更新','sql-join':'03 · 连接与事务','sql-group-having':'04 · 分组与关联统计','sql-pagination':'05 · 分页、汇总与空值','sql-update-task':'06 · 任务更新、删除与约束','sql-completed-topic-totals':'07 · 条件汇总与保存点','sql-conditional-count':'08 · 条件统计','sql-check-task-status':'09 · 约束、默认值与更新'}
};
export const findTrack=id=>tracks.find(track=>track.id===id);
export const allLessons=tracks.flatMap(track=>track.lessons.map((lesson,index)=>({...lesson,trackId:track.id,trackIndex:index})));
export const findLesson=id=>allLessons.find(lesson=>lesson.id===id);
export function trackProgress(track,done){const set=new Set(done);return {done:track.lessons.filter(item=>set.has(item.id)).length,total:track.lessons.length};}
export function trackNext(track,done){return track.lessons.find(item=>!done.includes(item.id))||track.lessons[track.lessons.length-1];}
export function recommendTrack(track,done){
 const next={python:'fastapi',web:'javascript',javascript:'typescript',typescript:'node',node:'react',react:'vue',vue:'wechat',java:'spring',kotlin:'android'};
 const preferred=findTrack(next[track.id]);
 if(preferred && trackProgress(preferred,done).done<preferred.lessons.length)return preferred;
 return tracks.find(item=>trackProgress(item,done).done<item.lessons.length)||track;
}
