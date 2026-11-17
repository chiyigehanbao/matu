import {webAdvanced} from './web-advanced.mjs';
const lessons=[
 {id:'web-heading',title:'HTML：标题与段落',subtitle:'用标签组织页面内容',explain:'HTML 用元素描述页面结构。开始标签和结束标签包住内容；这里展示的是页面片段。',output:'页面包含标题“今日学习”和一段“先认识代码”。',question:'h1 在示例中表示什么？',options:['一级标题','数据库表','网络请求'],answer:0,explanation:'h1 是一级标题元素，p 是段落元素。',vocab:'heading · 标题；paragraph · 段落',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<h1>今日学习</h1>\n<p>先认识代码。</p>',notes:['h1（一级标题）包住页面标题。','p（段落）包住一段文字。']}
 ]},
 {id:'web-link',title:'HTML：链接',subtitle:'让用户进入另一个页面',explain:'a 元素可以创建链接，href 指定目标地址。本例只展示相对路径，不会在阅读时发起请求。',output:'页面显示一个“课程目录”链接，目标是 /lessons。',question:'href 在这里保存什么？',options:['链接目标地址','用户密码','数据库数据'],answer:0,explanation:'href 指定链接目标；/lessons 是示例站点中的相对路径。',vocab:'link · 链接；href · 链接目标',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<a href="/lessons">课程目录</a>',notes:['a（链接）元素的 href（链接目标）指向 /lessons（课程目录）这个相对路径。']}
 ]},
 {id:'web-list',title:'HTML：列表',subtitle:'把一组内容排成清单',explain:'ul 表示无序列表，li 表示一个列表项；它们只负责页面结构，具体样式可以由 CSS 调整。',output:'页面依次显示两个列表项：阅读、复习。',question:'li 表示什么？',options:['一个列表项','一个图片文件','一次网络请求'],answer:0,explanation:'li 表示列表中的一个项目，ul 是无序列表容器。',vocab:'list · 列表；item · 项目',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<ul>\n  <li>阅读</li>\n  <li>复习</li>\n</ul>',notes:['ul（无序列表）开始包含一组列表项。','li（列表项）显示“阅读”。','li（列表项）显示“复习”。','结束 ul（无序列表）。']}
 ]},
 {id:'web-css-color',title:'CSS：颜色',subtitle:'让标题有不同的颜色',explain:'CSS 选择器找到需要设置样式的元素，声明用属性和值描述样式。HTML 与 CSS 分属不同文件时需要正确关联。',output:'示意效果：标题“今日学习”显示为绿色。',question:'color 在这里设置什么？',options:['文字颜色','文件名称','网络地址'],answer:0,explanation:'color 是 CSS 中设置文字颜色的属性；green 是颜色值。',vocab:'color · 颜色；green · 绿色',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<h1>今日学习</h1>',notes:['h1（一级标题）显示“今日学习”。']},
  {label:'页面样式 · CSS',language:'CSS',commentPrefix:'/*',commentSuffix:' */',code:'h1 {\n  color: green;\n}',notes:['h1（一级标题）选择器匹配对应的 HTML 标题。','color（文字颜色）设置为 green（绿色）。','右花括号结束 h1（一级标题）的样式规则。']}
 ]},
 {id:'web-css-class',title:'CSS：类选择器',subtitle:'给特定元素应用样式',explain:'class 可以给元素标记一个或多个类名；CSS 中以点开头的类选择器匹配对应类名。',output:'示意效果：“开始学习”按钮的文字为绿色。',question:'.start 匹配什么？',options:['class 包含 start 的元素','所有数据库','所有页面图片'],answer:0,explanation:'.start 是类选择器，匹配 class 中包含 start 的元素。',vocab:'class · 类名；start · 开始',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<button class="start">开始学习</button>',notes:['button（按钮）的 class（类名）设置为 start（开始）。']},
  {label:'页面样式 · CSS',language:'CSS',commentPrefix:'/*',commentSuffix:' */',code:'.start {\n  color: green;\n}',notes:['.start（开始类选择器）匹配 class（类名）包含 start 的元素。','color（文字颜色）设置为 green（绿色）。','右花括号结束 .start（开始类选择器）的样式规则。']}
 ]}
,
 {id:'web-form-help',title:'表单标签与输入提示',subtitle:'让输入框的用途和说明更清楚',explain:'label 的 for 可以关联输入框的 id，aria-describedby 可以把输入说明关联到控件。required 提供浏览器端必填约束；真实服务端仍需检查输入。',output:'示意效果：显示课程标题输入框、说明和提交按钮。',question:'aria-describedby 在这里关联什么？',options:['输入框的说明文字','服务器地址','数据库密码'],answer:0,explanation:'aria-describedby 指向说明元素的 id，辅助技术可以据此读取该说明。',vocab:'label · 标签；required · 必填；describe · 描述',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<form>\n  <label for="title">课程标题</label>\n  <input id="title" name="title" aria-describedby="title-help" required>\n  <p id="title-help">请输入课程名称。</p>\n  <button type="submit">提交</button>\n</form>',notes:['form（表单）包住输入项和提交按钮。','label（标签）的 for（关联控件）指向 title（标题）输入框的 id。','input（输入框）的 id（标识）和 name（字段名）为 title（标题），aria-describedby（关联说明）指向 title-help（标题说明），required（必填）启用浏览器端约束。','p（段落）的 id（标识）为 title-help（标题说明），显示输入提示。','button（按钮）的 type（类型）为 submit（提交），用于提交表单。','结束 form（表单）。']}
 ]}
,
 {id:'web-number-input',title:'输入学习分钟数',subtitle:'使用数字输入与基本范围约束',explain:'number 输入框可设置 min 和 step，浏览器会进行基本约束检查。示例要求非负整数；实际服务端仍需独立验证。',output:'示意效果：显示一个必填的学习分钟数输入框和提交按钮。',question:'min="0" 的作用是什么？',options:['要求数字不小于 0','自动保存 0 分钟','把输入上传服务器'],answer:0,explanation:'min 指定允许的最小值，低于 0 的数字不满足浏览器约束。',vocab:'number · 数字；min · 最小值；step · 步长',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<form>\n  <label for="minutes">学习分钟数</label>\n  <input id="minutes" name="minutes" type="number" min="0" step="1" required>\n  <button type="submit">提交</button>\n</form>',notes:['form（表单）包住输入项和提交按钮。','label（标签）的 for（关联控件）指向 minutes（分钟数）输入框的 id。','input（输入框）的 id（标识）和 name（字段名）为 minutes（分钟数），type（类型）为 number（数字），min（最小值）为 0，step（步长）为 1，required（必填）启用必填约束。','button（按钮）的 type（类型）为 submit（提交）。','结束 form（表单）。']}
 ]}
,
 {id:'web-radio-group',title:'选择一种学习方式',subtitle:'用单选按钮和分组标题说明选项',explain:'fieldset 和 legend 为相关选项提供分组及标题；相同 name 的单选按钮属于一组，同一时间只能选择一项。示例只展示表单结构，不连接服务器。',output:'示意效果：显示“学习方式”一组单选项，默认选择“阅读”。',question:'两个单选项为什么使用相同的 name？',options:['让它们属于同一单选组','自动提交到服务器','让两个选项同时选中'],answer:0,explanation:'同一表单中相同 name 的单选按钮互斥；value 是提交该选项时使用的值。',vocab:'radio · 单选按钮；legend · 分组标题；value · 值',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<form>\n  <fieldset>\n    <legend>学习方式</legend>\n    <label><input type="radio" name="mode" value="read" checked>阅读</label>\n    <label><input type="radio" name="mode" value="practice">练习</label>\n  </fieldset>\n  <button type="submit">提交</button>\n</form>',notes:['form（表单）包住选择项与提交按钮。','fieldset（字段组）为相关控件建立分组。','legend（分组标题）说明这一组选择的是学习方式。','label（标签）包住 input（输入控件）；type（类型）为 radio（单选），name（名称）为 mode（方式），value（提交值）为 read（阅读），checked（默认选中）表示初始选择。','label（标签）包住 input（输入控件）；type（类型）为 radio（单选），name（名称）同为 mode（方式），value（提交值）为 practice（练习）。','结束 fieldset（字段组）。','button（按钮）的 type（类型）为 submit（提交），用于提交表单。','结束 form（表单）。']}
 ]}
,
 {id:'web-study-date',title:'选择学习日期',subtitle:'日期输入与范围约束',explain:'日期输入框允许选择日期；min、max 和 required 为浏览器提供基本约束。这里的 2026 年仅为固定示例，真实应用应根据业务设置范围并在服务端再次验证。',output:'示意效果：显示学习日期输入框，允许选择 2026 年内的日期。',question:'选择 2027 年的日期会怎样？',options:['不满足示例设置的最大日期约束','自动保存到服务器','浏览器自动改为 2026 年'],answer:0,explanation:'max 限定允许的最大日期；表单有效性检查会报告超出范围，服务端仍需独立校验。',vocab:'date · 日期；min · 最小值；max · 最大值；required · 必填',blocks:[
  {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<form>\n  <label for="study-date">学习日期</label>\n  <input id="study-date" name="study_date" type="date" min="2026-01-01" max="2026-12-31" required>\n  <button type="submit">提交</button>\n</form>',notes:['form（表单）包住输入项和提交按钮。','label（标签）的 for（关联控件）指向 study-date（学习日期）输入框的 id（标识）。','input（输入框）的 id（标识）为 study-date（学习日期），name（字段名）为 study_date（学习日期），type（类型）为 date（日期），min（最小值）和 max（最大值）限定日期范围，required（必填）启用必填约束。','button（按钮）的 type（类型）为 submit（提交），用于提交表单。','结束 form（表单）。']}
 ],guide:['依次选择范围内日期、范围外日期及空值，观察浏览器的有效性检查。','示例范围固定为 2026 年，仅用于教学；实际日期范围应根据业务维护，服务端也要验证。']}

];
const order=['web-heading','web-semantic','web-link','web-list','web-form','web-form-help','web-number-input','web-study-date','web-radio-group','web-image','web-css-color','web-css-class','web-spacing','web-flex','web-checkbox-group','web-select-level','web-textarea-note','web-form-reset','web-study-table','web-table-style','web-flex-wrap','web-details-tip','web-study-progress'];
const position=id=>{const index=order.indexOf(id);return index<0?order.length:index};
export const webLessons=[...lessons,...webAdvanced].sort((a,b)=>position(a.id)-position(b.id)).map(l=>({...l,code:l.blocks[0].code,notes:l.blocks[0].notes,language:'HTML · CSS',outputLabel:l.outputLabel||'页面效果（示意）',notice:l.notice||'这是教学页面片段和预期效果；本阅读页不会加载或打开示例链接。',guide:l.guide||[l.explain,l.explanation]}));
