export const webAdvanced = [
  {
    "id": "web-semantic",
    "title": "HTML：页面主体",
    "subtitle": "用语义元素组织内容",
    "explain": "main 表示文档的主要内容区域；标题与段落可以放在其中，帮助浏览器和辅助技术理解结构。",
    "output": "页面主体包含“学习记录”标题和一段说明。",
    "question": "main 在示例中表示什么？",
    "options": [
      "页面主要内容区域",
      "数据库表",
      "图片文件"
    ],
    "answer": 0,
    "explanation": "main 表示文档的主要内容区域；它不负责存储数据。",
    "vocab": "main · 主要内容；heading · 标题",
    "blocks": [
      {
        "label": "页面结构 · HTML",
        "language": "HTML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<main>\n  <h1>学习记录</h1>\n  <p>这里是今天的学习内容。</p>\n</main>",
        "notes": [
          "main（主要内容区域）开始包住页面主体。",
          "h1（一级标题）显示“学习记录”。",
          "p（段落）显示一段说明。",
          "结束 main（主要内容区域）。"
        ]
      }
    ]
  },
  {
    "id": "web-form",
    "title": "HTML：标签与输入框",
    "subtitle": "让输入字段有清楚的名称",
    "explain": "label 可通过 for 与输入框的 id 关联。示例只展示页面结构，不提交数据到服务器。",
    "output": "页面包含“姓名”标签、文字输入框和一个“查看”按钮。",
    "question": "label 的 for 与输入框什么属性关联？",
    "options": [
      "id",
      "数据库密码",
      "服务器端口"
    ],
    "answer": 0,
    "explanation": "label 的 for 值与输入控件的 id 值一致时建立关联。",
    "vocab": "label · 标签；input · 输入；id · 标识",
    "blocks": [
      {
        "label": "页面结构 · HTML",
        "language": "HTML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<label for=\"name\">姓名</label>\n<input id=\"name\" name=\"name\" type=\"text\">\n<button type=\"button\">查看</button>",
        "notes": [
          "label（标签）的 for（关联目标）指定 name（名字）这一输入框标识。",
          "input（输入框）的 id（标识）和 name（字段名）都为 name（名字），type（类型）为 text（文字）。",
          "button（按钮）的 type（类型）为 button（普通按钮），本例不自动提交表单。"
        ]
      }
    ]
  },
  {
    "id": "web-image",
    "title": "HTML：图片与替代文字",
    "subtitle": "描述图片无法显示时的信息",
    "explain": "img 元素用 src 指定图片地址，alt 提供替代文字。示例使用相对路径；图片文件是否存在取决于实际项目。",
    "output": "示意：如果 cat.png 存在则显示图片；图片无法显示时提供“一只猫”的替代文字。",
    "question": "alt 在这里用于什么？",
    "options": [
      "提供图片替代文字",
      "自动上传图片",
      "保存用户密码"
    ],
    "answer": 0,
    "explanation": "alt 为图片提供替代文字，可在图片无法显示时或辅助技术使用时提供说明。",
    "vocab": "image · 图片；source · 来源；alternative · 替代文字",
    "blocks": [
      {
        "label": "页面结构 · HTML",
        "language": "HTML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<img src=\"cat.png\" alt=\"一只猫\">",
        "notes": [
          "img（图片）元素的 src（来源）指向 cat.png（猫的图片文件），alt（替代文字）为“一只猫”。"
        ]
      }
    ]
  },
  {
    "id": "web-spacing",
    "title": "CSS：内边距与外边距",
    "subtitle": "理解元素周围的空间",
    "explain": "padding 是内容与边框之间的空间，margin 是元素边框外侧的空间。实际尺寸也会受到其他样式和盒模型设置影响。",
    "output": "示意：卡片四周有 12px 内边距和 8px 外边距。",
    "question": "padding 位于哪里？",
    "options": [
      "内容和边框之间",
      "元素边框之外",
      "数据库连接内部"
    ],
    "answer": 0,
    "explanation": "padding 是内容与边框之间的内边距；margin 是边框外的外边距。",
    "vocab": "padding · 内边距；margin · 外边距",
    "blocks": [
      {
        "label": "页面结构 · HTML",
        "language": "HTML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<div class=\"card\">学习记录</div>",
        "notes": [
          "div（容器）的 class（类名）为 card（卡片），用于匹配样式。"
        ]
      },
      {
        "label": "页面样式 · CSS",
        "language": "CSS",
        "commentPrefix": "/*",
        "commentSuffix": " */",
        "code": ".card {\n  padding: 12px;\n  margin: 8px;\n}",
        "notes": [
          ".card（卡片类选择器）匹配 class（类名）包含 card 的元素。",
          "padding（内边距）设置为 12px（12 个 CSS 像素）。",
          "margin（外边距）设置为 8px（8 个 CSS 像素）。",
          "右花括号结束 .card（卡片类选择器）的样式规则。"
        ]
      }
    ]
  },
  {
    "id": "web-flex",
    "title": "CSS：弹性布局",
    "subtitle": "让多个项目横向排列",
    "explain": "display: flex 将元素设为弹性容器。默认主轴方向是行；gap 可设置项目之间的间距。",
    "output": "示意：两个标签在容器中横向排列，间距为 8px。",
    "question": "gap 在这里控制什么？",
    "options": [
      "项目之间的间距",
      "用户密码长度",
      "网络连接数"
    ],
    "answer": 0,
    "explanation": "gap 控制弹性布局中项目之间的间距。",
    "vocab": "flex · 弹性布局；gap · 间距",
    "blocks": [
      {
        "label": "页面结构 · HTML",
        "language": "HTML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<div class=\"row\">\n  <span>阅读</span>\n  <span>复习</span>\n</div>",
        "notes": [
          "div（容器）的 class（类名）为 row（行），用于匹配样式。",
          "span（行内元素）显示“阅读”。",
          "span（行内元素）显示“复习”。",
          "结束 div（容器）。"
        ]
      },
      {
        "label": "页面样式 · CSS",
        "language": "CSS",
        "commentPrefix": "/*",
        "commentSuffix": " */",
        "code": ".row {\n  display: flex;\n  gap: 8px;\n}",
        "notes": [
          ".row（行类选择器）匹配 class（类名）包含 row 的元素。",
          "display（显示方式）设置为 flex（弹性布局）。",
          "gap（间距）设置为 8px（8 个 CSS 像素）。",
          "右花括号结束 .row（行类选择器）的样式规则。"
        ]
      }
    ]
  }
,
 {
  id:'web-checkbox-group',title:'选择多个学习主题',subtitle:'复选框与分组说明',
  explain:'fieldset 和 legend 为复选框提供分组说明；同名复选框可以同时选择，提交时带上所有选中的值。此示例没有配置提交服务器。',
  output:'页面示意：显示“学习主题”，可同时选择 Python 和 Java。',question:'同时选中两个复选框会怎样？',options:['两个选中值都可以提交','只能保留最后一项','自动保存到数据库'],answer:0,
  explanation:'同名复选框允许多选，表单数据中可以出现多个 topic 值；未选中的复选框不会提交。',vocab:'checkbox · 复选框；fieldset · 表单分组；legend · 分组标题；topic · 主题',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<form>\n  <fieldset>\n    <legend>学习主题</legend>\n    <label><input type="checkbox" name="topic" value="python"> Python</label>\n    <label><input type="checkbox" name="topic" value="java"> Java</label>\n  </fieldset>\n</form>',notes:['form（表单）包住输入内容。','fieldset（表单分组）开始相关选项的分组。','legend（分组标题）说明这一组选项用于选择学习主题。','label（标签）包住 input（输入控件），type（类型）为 checkbox（复选框），name（名称）为 topic（主题），value（提交值）为 python（Python 主题）。','label（标签）包住 input（输入控件），type（类型）为 checkbox（复选框），name（名称）为 topic（主题），value（提交值）为 java（Java 主题）。','结束 fieldset（表单分组）。','结束 form（表单）。']}
  ]
 }
,
 {
  id:'web-select-level',title:'选择学习阶段',subtitle:'下拉框、标签与提交值',
  explain:'select 提供一个下拉选择框，option 分别设置显示文字和提交值。label 通过 for 与控件的 id 关联；示例没有配置服务器。',
  output:'页面示意：显示“学习阶段”，可以选择入门或进阶。',question:'选择“进阶”时，表单中的 level 值是什么？',options:['advanced','进阶','自动生成的编号'],answer:0,
  explanation:'浏览器显示 option 内的文字，提交该选项的 value 值；本例进阶对应 advanced。',vocab:'select · 选择；option · 选项；level · 阶段；advanced · 进阶',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<form>\n  <label for="level">学习阶段</label>\n  <select id="level" name="level">\n    <option value="beginner">入门</option>\n    <option value="advanced">进阶</option>\n  </select>\n</form>',notes:['form（表单）包住选择控件。','label（标签）的 for（关联目标）指向 level（阶段控件编号）。','select（下拉选择框）的 id（编号）为 level（阶段），name（提交名称）也为 level。','option（选项）的 value（提交值）为 beginner（入门），显示文字为“入门”。','option（选项）的 value（提交值）为 advanced（进阶），显示文字为“进阶”。','结束 select（下拉选择框）。','结束 form（表单）。']}
  ]
 }
,
 {
  id:'web-textarea-note',title:'填写多行学习笔记',subtitle:'标签、输入框与补充说明',
  explain:'textarea 用于输入多行文字；label 关联输入框，aria-describedby 指向补充说明。示例没有配置提交服务器。',
  output:'页面示意：显示学习笔记输入框和说明文字。',question:'aria-describedby 在这里指向什么？',options:['输入框的补充说明','数据库地址','自动生成的密码'],answer:0,
  explanation:'aria-describedby 引用说明文字的 id，帮助辅助技术将说明与输入框关联。',vocab:'textarea · 多行输入框；note · 笔记；help · 帮助；rows · 显示行数',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<form>\n  <label for="note">学习笔记</label>\n  <textarea id="note" name="note" rows="4" aria-describedby="note-help"></textarea>\n  <p id="note-help">可以记录今天的收获。</p>\n</form>',notes:['form（表单）包住输入内容。','label（标签）的 for（关联目标）指向 note（笔记输入框编号）。','textarea（多行输入框）的 id（编号）和 name（提交名称）为 note（笔记），rows（显示行数）为 4，aria-describedby（补充说明关联）指向 note-help（笔记说明编号）。','p（段落）的 id（编号）为 note-help（笔记说明），显示补充提示。','结束 form（表单）。']}
  ]
 }
,
 {
  id:'web-form-reset',title:'恢复表单默认值',subtitle:'认识 reset 按钮',
  explain:'输入框可以设置初始值；表单中的 reset 按钮会将控件恢复到默认状态。示例没有配置提交服务器。',
  output:'页面示意：输入框初始为“阅读”，修改后点击重置会恢复“阅读”。',question:'将文字改为“复习”后点击重置，显示什么？',options:['阅读','复习','空白'],answer:0,
  explanation:'reset 恢复输入框的默认值；这里默认值由 value 属性设为“阅读”。',vocab:'reset · 重置；value · 值；task · 任务；button · 按钮',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<form>\n  <label for="task">学习任务</label>\n  <input id="task" name="task" value="阅读">\n  <button type="reset">重置</button>\n</form>',notes:['form（表单）包住输入框和按钮。','label（标签）的 for（关联目标）指向 task（任务输入框编号）。','input（输入框）的 id（编号）和 name（提交名称）为 task（任务），value（默认值）为“阅读”。','button（按钮）的 type（类型）为 reset（重置），点击后恢复表单控件默认状态。','结束 form（表单）。']}
  ]
 }
,
 {
  id:'web-study-table',title:'用表格展示学习记录',subtitle:'表格标题、列标题和数据行',
  explain:'table 组织行列数据；caption 说明表格用途，th 的 scope 表示列标题。示例数据是固定内容。',
  output:'页面示意：学习记录表包含主题与分钟两列，列出阅读 20 分钟和复习 15 分钟。',question:'caption 在这个示例中有什么作用？',options:['说明表格的用途','保存数据到服务器','自动计算分钟总数'],answer:0,
  explanation:'caption 为表格提供标题；th 的 scope="col" 表示它是列标题。',vocab:'table · 表格；caption · 表格标题；scope · 范围；column · 列',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<table>\n  <caption>学习记录</caption>\n  <thead>\n    <tr><th scope="col">主题</th><th scope="col">分钟</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>阅读</td><td>20</td></tr>\n    <tr><td>复习</td><td>15</td></tr>\n  </tbody>\n</table>',notes:['table（表格）开始组织行列数据。','caption（表格标题）说明表格用途。','thead（表头）开始表头区域。','tr（表格行）包含两个 th（标题单元格），scope（范围）为 col（列），分别说明主题和分钟。','结束 thead（表头）区域。','tbody（表格主体）开始数据区域。','tr（表格行）包含两个 td（数据单元格），显示阅读和 20 分钟。','tr（表格行）包含两个 td（数据单元格），显示复习和 15 分钟。','结束 tbody（表格主体）。','结束 table（表格）。']}
  ]
 }
,
 {
  id:'web-table-style',title:'让学习记录表格更易读',subtitle:'边框合并与单元格内边距',
  explain:'表格使用 border-collapse 合并相邻边框，再为标题和单元格设置内边距。示例使用固定内容。',
  output:'页面示意：表格有合并边框，单元格内容周围留有空间。',question:'padding 在这里控制什么？',options:['单元格内容与边框之间的空间','表格的数据来源','自动排序方式'],answer:0,
  explanation:'padding 设置内容与边框之间的内边距；border-collapse 控制表格边框如何合并。',vocab:'border · 边框；collapse · 合并；padding · 内边距；solid · 实线',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<table>\n  <caption>学习记录</caption>\n  <thead><tr><th scope="col">主题</th><th scope="col">分钟</th></tr></thead>\n  <tbody><tr><td>阅读</td><td>20</td></tr></tbody>\n</table>',notes:['table（表格）开始组织数据。','caption（表格标题）说明用途。','thead（表头）包含 tr（表格行）和 th（标题单元格），scope（范围）为 col（列）。','tbody（表格主体）包含 tr（表格行）和 td（数据单元格）。','结束 table（表格）。']},
   {label:'页面样式 · CSS',language:'CSS',commentPrefix:'/*',commentSuffix:' */',code:'table {\n  border-collapse: collapse;\n}\nth, td {\n  border: 1px solid #888;\n  padding: 8px;\n}',notes:['table（表格选择器）匹配表格元素。','border-collapse（边框合并方式）设为 collapse（合并）。','右花括号结束 table（表格选择器）规则。','th（标题单元格）和 td（数据单元格）选择器匹配两类单元格。','border（边框）设置为 1px（一个 CSS 像素）、solid（实线）和颜色 #888。','padding（内边距）设置为 8px（8 个 CSS 像素）。','右花括号结束 th 和 td 选择器规则。']}
  ]
 }
,
 {
  id:'web-flex-wrap',title:'让任务卡片自动换行',subtitle:'弹性布局与间距',
  explain:'容器使用 flex 布局，空间不足时允许项目换行；gap 设置项目之间的间距。最终效果取决于容器宽度和内容大小。',
  output:'页面示意：任务卡片横向排列，空间不足时换到下一行。',question:'flex-wrap: wrap 的作用是什么？',options:['允许项目在空间不足时换行','自动保存任务','强制所有文字变大'],answer:0,
  explanation:'wrap 允许弹性项目换行；gap 设置行和列之间的间距。',vocab:'flex · 弹性布局；wrap · 换行；gap · 间距；card · 卡片',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<div class="tasks">\n  <div class="card">阅读</div>\n  <div class="card">复习</div>\n</div>',notes:['div（容器）的 class（类名）为 tasks（任务列表）。','div（容器）的 class（类名）为 card（卡片），显示阅读。','div（容器）的 class（类名）为 card（卡片），显示复习。','结束 div（容器）。']},
   {label:'页面样式 · CSS',language:'CSS',commentPrefix:'/*',commentSuffix:' */',code:'.tasks {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.card {\n  padding: 12px;\n}',notes:['.tasks（任务列表类选择器）匹配 class（类名）包含 tasks 的元素。','display（显示方式）设置为 flex（弹性布局）。','flex-wrap（弹性换行）设置为 wrap（允许换行）。','gap（间距）设置为 8px（8 个 CSS 像素）。','右花括号结束 .tasks（任务列表类选择器）规则。','.card（卡片类选择器）匹配 class（类名）包含 card 的元素。','padding（内边距）设置为 12px（12 个 CSS 像素）。','右花括号结束 .card（卡片类选择器）规则。']}
  ]
 }
,
 {
  id:'web-details-tip',title:'展开学习提示',subtitle:'使用 details 与 summary',
  explain:'details 提供可展开的说明区域，summary 是可见的标题。没有 open 属性时初始关闭；点击标题可切换显示。',
  output:'页面示意：初始显示“学习提示”；展开后显示具体说明。',question:'没有 open 属性时，说明区域初始是什么状态？',options:['关闭','始终展开','自动请求服务器'],answer:0,
  explanation:'details 默认关闭；添加 open 属性可让它初始展开。',vocab:'details · 详情；summary · 摘要；open · 展开',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<details>\n  <summary>学习提示</summary>\n  <p>先阅读示例，再观察输出。</p>\n</details>',notes:['details（可展开详情）开始说明区域，未设置 open（展开）时初始关闭。','summary（摘要）提供可见的展开标题。','p（段落）显示展开后的学习提示。','结束 details（可展开详情）区域。']}
  ]
 }
,
 {
  id:'web-study-progress',title:'展示课程学习进度',subtitle:'用原生进度条和文字说明',
  explain:'progress 可以表示已完成的比例。label 为进度条提供名称，旁边的文字让数值更容易理解；本例使用固定数据，不会自动记录进度。',
  output:'页面示意：显示“课程进度”，进度条为 3 / 5，旁边文字显示“已完成 3 / 5 课”。',
  question:'为什么除了进度条还显示完成课数？',options:['让读者能直接看到具体数值','让浏览器自动保存学习进度','让进度条自动读取数据库'],answer:0,
  explanation:'进度条表示比例，文字补充具体完成数；这段静态页面没有读取或保存进度。',vocab:'progress · 进度；label · 标签；value · 当前值；max · 最大值；width · 宽度',
  blocks:[
   {label:'页面结构 · HTML',language:'HTML',commentPrefix:'<!--',commentSuffix:' -->',code:'<section class="study-progress">\n  <label for="course-progress">课程进度</label>\n  <progress id="course-progress" value="3" max="5">3 / 5</progress>\n  <p>已完成 3 / 5 课</p>\n</section>',notes:['section（区域）的 class（类名）为 study-progress（学习进度），包住进度组件。','label（标签）的 for（关联目标）指向 course-progress（课程进度）控件。','progress（进度条）的 id（标识）为 course-progress（课程进度），value（当前值）为 3，max（最大值）为 5；标签内文字为兼容内容。','p（段落）显示已完成课数，让读者直接看到数值。','结束 section（区域）。']},
   {label:'页面样式 · CSS',language:'CSS',commentPrefix:'/*',commentSuffix:' */',code:'.study-progress {\n  padding: 16px;\n  background: #eef6ea;\n}\n.study-progress progress {\n  display: block;\n  width: 100%;\n}',notes:['.study-progress（学习进度类选择器）匹配相应区域。','padding（内边距）设置为 16px（16 个 CSS 像素）。','background（背景）设置为 #eef6ea（浅绿色）。','右花括号结束 .study-progress（学习进度）规则。','.study-progress（学习进度）中的 progress（进度条）选择器匹配组件内的进度条。','display（显示方式）设为 block（块级），让进度条独占一行。','width（宽度）设为 100%，随可用空间变化。','右花括号结束 progress（进度条）规则。']}
  ],
  notice:'这是固定数据的页面示例；阅读课程不会运行页面或保存学习进度。',guide:['先找到 label 与 progress，通过 for 和 id 理解它们如何关联。','value 和 max 表示当前值与最大值；要展示真实进度，需要另外实现数据读取与更新。']
 }
];
