export const vuePractical = [
  {
    "id": "vue-filter",
    "title": "筛选待完成任务",
    "subtitle": "用计算属性整理要显示的列表",
    "explain": "计算属性可以根据已有数据得到筛选后的列表。示例只处理页面内的固定数据，不读取数据库或请求服务器。",
    "code": "const app = Vue.createApp({\n  data() { return { tasks: [{ id: 1, title: \"阅读\", done: true }, { id: 2, title: \"复习\", done: false }] } },\n  computed: { remaining() { return this.tasks.filter(task => !task.done) } },\n  template: '<ul><li v-for=\"task in remaining\" :key=\"task.id\">{{ task.title }}</li></ul>'\n})\napp.mount(\"#app\")",
    "output": "复习",
    "question": "为什么页面只显示“复习”？",
    "options": [
      "它的 done 为 false",
      "因为已经上传服务器",
      "因为第一项被删除"
    ],
    "answer": 0,
    "explanation": "filter 保留 done 为 false 的任务；原数组没有被删除或上传。",
    "vocab": "filter · 筛选；remaining · 剩余；done · 完成状态",
    "notes": [
      "const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置对象。",
      "data（数据）方法通过 return（返回）提供 tasks（任务数组）；每项含 id（编号）、title（标题）、done（是否完成），true（真）表示已完成，false（假）表示未完成。",
      "computed（计算属性）定义 remaining（剩余任务），return（返回）this（当前组件）的 tasks（任务数组）经过 filter（筛选）的结果；task（当前任务）的 done（是否完成）为假时保留。",
      "template（模板）使用 ul（无序列表）和 li（列表项）；v-for（循环）让 task（当前任务）取自 in（在）remaining（剩余任务），key（键）使用 task（当前任务）的 id（编号），并显示 task 的 title（标题）。",
      "结束 createApp（创建应用）的配置和调用。",
      "app（应用）的 mount（挂载）将页面放入 app（应用容器）选择器对应的元素。"
    ],
    "language": "JavaScript · Vue",
    "commentPrefix": "//",
    "outputLabel": "页面初始效果（示意）",
    "notice": "示例需要已引入 Vue 的页面和对应容器；本页面仅展示效果，不会运行示例。",
    "guide": [
      "计算属性可以根据已有数据得到筛选后的列表。示例只处理页面内的固定数据，不读取数据库或请求服务器。",
      "filter 保留 done 为 false 的任务；原数组没有被删除或上传。"
    ]
  },
  {
    "id": "vue-empty",
    "title": "没有数据时显示空状态",
    "subtitle": "让读者知道当前没有任务",
    "explain": "当列表为空时，可以显示说明文字；列表有内容时显示另一条提示。示例数据只在页面内存中。",
    "code": "const app = Vue.createApp({\n  data() { return { tasks: [] } },\n  template: '<p v-if=\"tasks.length === 0\">暂无任务</p><p v-else>有任务</p>'\n})\napp.mount(\"#app\")",
    "output": "暂无任务",
    "question": "tasks 为空时显示什么？",
    "options": [
      "暂无任务",
      "有任务",
      "自动访问网络"
    ],
    "answer": 0,
    "explanation": "空数组的 length 为 0，因此 v-if 分支显示“暂无任务”。",
    "vocab": "empty · 空的；length · 长度；else · 否则",
    "notes": [
      "const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置对象。",
      "data（数据）方法通过 return（返回）提供 tasks（任务数组），初始为空。",
      "template（模板）使用 p（段落）；v-if（条件显示）检查 tasks（任务数组）的 length（长度）是否严格等于 0，v-else（否则）显示另一条内容。",
      "结束 createApp（创建应用）的配置和调用。",
      "app（应用）的 mount（挂载）将页面放入 app（应用容器）选择器对应的元素。"
    ],
    "language": "JavaScript · Vue",
    "commentPrefix": "//",
    "outputLabel": "页面初始效果（示意）",
    "notice": "示例需要已引入 Vue 的页面和对应容器；本页面仅展示效果，不会运行示例。",
    "guide": [
      "当列表为空时，可以显示说明文字；列表有内容时显示另一条提示。示例数据只在页面内存中。",
      "空数组的 length 为 0，因此 v-if 分支显示“暂无任务”。"
    ]
  }
,
 {
  id:'vue-toggle-task',title:'点击切换任务状态',subtitle:'用响应式数据更新按钮文字',
  explain:'Vue 的 data 保存完成状态，点击时通过方法切换它；模板会根据最新状态更新。示例仅修改页面内存，没有保存或联网。',
  code:'const app = Vue.createApp({\n  data() { return { done: false } },\n  methods: { toggle() { this.done = !this.done } },\n  template: \'<button @click="toggle">{{ done ? "已完成" : "未完成" }}</button>\'\n})\napp.mount("#app")',
  output:'未完成',question:'点击一次后按钮显示什么？',options:['已完成','未完成','自动保存到服务器'],answer:0,
  explanation:'初始 done 为 false；toggle 把它取反为 true，模板随之显示“已完成”。',vocab:'toggle · 切换；done · 完成状态；methods · 方法集合',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 done（是否完成），初始为 false（假）。','methods（方法集合）定义 toggle（切换），将 this（当前组件）的 done（完成状态）取反；! 表示取反。','template（模板）使用 button（按钮），click（点击事件）调用 toggle（切换），根据 done（完成状态）选择文字。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将页面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例需要已引入 Vue 的页面和对应容器；本页面仅展示效果，不会运行示例。',guide:['状态只在当前页面内存中；刷新页面会回到初始值。','点击两次会先完成、再恢复未完成。']
 }
,
 {
  id:'vue-child-emit',title:'子组件通知父组件更新',subtitle:'用自定义事件连接按钮与父组件状态',
  explain:'子组件通过 $emit 发出自定义事件，父组件监听事件并更新自己的计数。示例只修改当前页面内存，不保存数据。',
  code:'const AddButton = {\n  emits: ["add"],\n  template: `<button @click="$emit(\'add\')">加一</button>`\n}\nconst app = Vue.createApp({\n  components: { AddButton },\n  data() { return { count: 0 } },\n  methods: { add() { this.count++ } },\n  template: \'<div><p>次数：{{ count }}</p><AddButton @add="add" /></div>\'\n})\napp.mount("#app")',
  output:'次数：0加一',question:'计数状态由谁保存？',options:['父组件','AddButton 子组件','服务器'],answer:0,
  explanation:'父组件的 data 保存 count；子组件发出 add 事件后，父组件的 add 方法更新它。',vocab:'emit · 发出事件；add · 增加；count · 计数',
  notes:['const（声明）创建 AddButton（加一按钮）子组件配置。','emits（声明事件）列出 add（增加）自定义事件。','template（模板）使用 button（按钮），click（点击时）通过 $emit（发出事件）发出 add（增加）事件。','右花括号结束 AddButton（加一按钮）配置。','const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收父组件配置。','components（组件集合）注册 AddButton（加一按钮）。','data（数据）方法通过 return（返回）提供初始 count（计数）0。','methods（方法集合）定义 add（增加），this（当前组件）的 count（计数）加 1。','template（模板）用 div（容器）和 p（段落）显示 count（计数），AddButton（加一按钮）的 add（增加事件）由 add（增加方法）处理。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将页面放进 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例需要已引入 Vue 的页面和对应容器；本页面仅展示效果，不会运行示例。',guide:['子组件不直接修改父组件的 count，而是发出事件。','刷新页面后计数恢复初始值；本例没有持久化。']
 }
,
 {
  id:'vue-toggle-list',title:'切换列表中指定任务',subtitle:'用列表渲染与事件更新单项状态',
  explain:'Vue 页面保存任务数组，按钮将当前任务传给方法，方法切换该项状态。示例只修改当前页面内存，不保存到服务器。',
  code:'const app = Vue.createApp({\n  data() { return { tasks: [{ id: 1, title: "阅读", done: false }, { id: 2, title: "复习", done: false }] } },\n  methods: { toggle(task) { task.done = !task.done } },\n  template: \'<div><button v-for="task in tasks" :key="task.id" @click="toggle(task)">{{ task.title }}：{{ task.done ? "已完成" : "未完成" }}</button></div>\'\n})\napp.mount("#app")',
  output:'阅读：未完成复习：未完成',question:'点击“复习”后，“阅读”的状态怎样？',options:['保持未完成','也变为已完成','自动删除'],answer:0,
  explanation:'toggle 接收被点击的任务，只更改这个对象的 done 属性。',vocab:'toggle · 切换；task · 任务；done · 完成状态',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 tasks（任务列表），每项包含 id（编号）、title（标题）和 done（完成状态）；false（假）表示未完成。','methods（方法集合）定义 toggle（切换），接收 task（当前任务）并将它的 done（完成状态）取反；! 表示取反。','template（模板）使用 div（容器）和 button（按钮）；v-for（循环）使 task（当前任务）取自 in（来自）tasks（任务列表），key（标识）使用 task.id（编号），click（点击事件）调用 toggle（切换），并显示 title（标题）和 done（完成状态）。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将页面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例需要已引入 Vue 的页面和对应容器；本页面仅展示效果，不会运行示例。',guide:['Vue 的响应式数据变化后，界面会更新。','刷新页面后恢复初始数据；本例没有持久化。']
 }
,
 {
  id:'vue-count-done',title:'显示已完成任务数量',subtitle:'用计算属性统计列表',
  explain:'计算属性根据任务列表筛选已完成项目并计算数量。任务数据变化时，依赖它的显示会更新；示例只使用页面内存数据。',
  code:'const app = Vue.createApp({\n  data() { return { tasks: [{ done: true }, { done: false }] } },\n  computed: { count() { return this.tasks.filter(task => task.done).length } },\n  template: \'<p>已完成：{{ count }}</p>\'\n})\napp.mount("#app")',
  output:'已完成：1',question:'任务列表为空时显示多少？',options:['0','1','自动从服务器读取'],answer:0,
  explanation:'空数组筛选后仍为空，length 为 0。',vocab:'computed · 计算属性；count · 数量；done · 完成状态',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 tasks（任务列表），done（完成状态）为 true（真）表示完成、false（假）表示未完成。','computed（计算属性）定义 count（数量），return（返回）this（当前组件）的 tasks（任务列表）通过 filter（筛选）保留 task（当前任务）的 done（完成状态）为真的项，再读取 length（长度）。','template（模板）使用 p（段落）显示 count（数量）。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将页面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例需要已引入 Vue 的页面和对应容器；本页面仅展示效果，不会运行示例。',guide:['count 由 tasks 计算，不需要单独维护一个可变计数。','示例数据只保存在当前页面内存中。']
 }
,
 {
  id:'vue-submit-title',title:'提交前检查课程标题',subtitle:'使用 v-model 与表单提交事件',
  explain:'输入框用 v-model 关联标题。提交时阻止默认行为，去除首尾空格并检查空值；示例只显示提示，不保存或发送数据。',
  code:'const app = Vue.createApp({\n  data() { return { title: "", message: "" } },\n  methods: { submit() { const clean = this.title.trim(); this.message = clean ? "已输入：" + clean : "请输入标题" } },\n  template: \'<form @submit.prevent="submit"><input v-model="title"><button type="submit">提交</button><p>{{ message }}</p></form>\'\n})\napp.mount("#app")',
  output:'提交',question:'只输入空格并提交时显示什么？',options:['请输入标题','已保存到服务器','自动生成标题'],answer:0,
  explanation:'trim 去除首尾空格，纯空格变成空字符串，因此显示提示。',vocab:'submit · 提交；title · 标题；trim · 去除首尾空格',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 title（标题）与 message（提示信息），初始均为空字符串。','methods（方法集合）定义 submit（提交），const（声明）创建 clean（整理后的标题），由 this（当前组件）的 title（标题）调用 trim（去除首尾空格）得到；this.message（提示信息）根据 clean 是否为空选择内容。','template（模板）使用 form（表单），submit.prevent（提交时阻止默认行为）调用 submit（提交）；input（输入框）的 v-model（表单绑定）关联 title（标题），button（按钮）的 type（类型）为 submit（提交），p（段落）显示 message（提示信息）。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将页面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例需要已引入 Vue 的页面和对应容器；本页面仅展示效果，不会运行示例。',guide:['v-model 更新标题，提交时再检查整理后的值。','浏览器端检查不能替代真实服务端的输入验证。']
 }
,
 {
  id:'vue-toggle-done-count',title:'切换任务并更新完成数量',subtitle:'用计算属性保持数字与任务一致',
  explain:'点击按钮切换第一条任务的完成状态；计算属性从任务列表重新得到完成数量。示例使用页面内存中的固定数据，不保存到服务器。',
  code:'const app = Vue.createApp({\n  data() { return { tasks: [{ title: "阅读", done: false }, { title: "复习", done: false }] } },\n  computed: { count() { return this.tasks.filter(task => task.done).length } },\n  methods: { toggle() { this.tasks[0].done = !this.tasks[0].done } },\n  template: \'<div><button @click="toggle">切换阅读</button><p>已完成：{{ count }}</p></div>\'\n})\napp.mount("#app")',
  output:'切换阅读已完成：0',question:'第一次点击后完成数量是多少？',options:['1','0','自动从服务器获取'],answer:0,
  explanation:'第一条任务从未完成变为完成，计算属性筛选出一条已完成任务，数量因此变为 1。',vocab:'toggle · 切换；count · 数量；filter · 筛选；done · 完成状态',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 tasks（任务列表），每个任务有 title（标题）和 done（完成状态），false（假）表示未完成。','computed（计算属性）定义 count（数量），return（返回）this（当前组件）的 tasks（任务列表）通过 filter（筛选）保留 task（当前任务）的 done（完成状态）为真的项，再读取 length（长度）。','methods（方法集合）定义 toggle（切换），将 this（当前组件）的 tasks（任务列表）索引 0 的 done（完成状态）取反。','template（模板）使用 div（容器）、button（按钮）和 p（段落）；click（点击）调用 toggle（切换），count（数量）显示已完成任务数。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面展示代码和初始效果；交互需要在已引入 Vue 的页面中运行。示例不连接网络，也不持久保存数据。',guide:['状态变化后，依赖任务列表的计算属性会更新，界面显示新的完成数量。','这里为了突出计算属性而固定切换第一条任务，真实列表通常通过稳定的编号选择任务。']
 }
,
 {
  id:'vue-loading-state',title:'根据加载状态切换页面',subtitle:'用条件渲染展示三种结果',
  explain:'页面初始处于加载中。两个按钮分别模拟成功与失败，模板根据状态显示提示；示例不发送网络请求。',
  code:'const app = Vue.createApp({\n  data() { return { status: "loading", title: "变量" } },\n  methods: { succeed() { this.status = "success" }, fail() { this.status = "error" } },\n  template: \'<div><button @click="succeed">模拟成功</button><button @click="fail">模拟失败</button><p v-if="status === &quot;loading&quot;">加载中</p><p v-else-if="status === &quot;success&quot;">课程：{{ title }}</p><p v-else>读取失败</p></div>\'\n})\napp.mount("#app")',
  output:'模拟成功模拟失败加载中',question:'点击“模拟成功”后显示什么？',options:['课程：变量','读取失败','自动连接服务器'],answer:0,
  explanation:'按钮调用 succeed，把 status 改成 success；模板的对应分支显示 title。',vocab:'status · 状态；loading · 加载中；success · 成功；fail · 失败',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 status（状态），初始为 loading（加载中），以及 title（标题）。','methods（方法集合）定义 succeed（模拟成功）和 fail（模拟失败）；this（当前组件）的 status（状态）分别设置为 success（成功）和 error（错误）。','template（模板）用 div（容器）包含 button（按钮），click（点击）调用 succeed（模拟成功）或 fail（模拟失败）；p（段落）用 v-if（如果）、v-else-if（否则如果）与 v-else（否则）根据 status（状态）选择 loading（加载中）、success（成功）或失败提示，title（标题）插入成功分支；quot 是 HTML 的引号实体。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用按钮模拟状态变化；本页面不会运行组件或发送网络请求。',guide:['条件分支根据响应式 status 更新界面；示例按钮只改变本地状态。','真实请求还需处理数据验证、错误与重复请求等情况。']
 }
,
 {
  id:'vue-remove-tasks',title:'删除任务并显示空状态',subtitle:'按编号更新响应式列表',
  explain:'页面使用固定任务初始化数据。点击删除时按编号筛选出其余任务；列表为空时显示提示。示例不连接服务器，刷新后恢复初始任务。',
  code:'const app = Vue.createApp({\n  data() { return { tasks: [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }] } },\n  methods: { removeTask(id) { this.tasks = this.tasks.filter(task => task.id !== id) } },\n  template: \'<div><p v-if="tasks.length === 0">暂无任务</p><ul v-else><li v-for="task in tasks" :key="task.id">{{ task.title }}<button @click="removeTask(task.id)">删除</button></li></ul></div>\'\n})\napp.mount("#app")',
  output:'阅读删除\n复习删除',question:'删除所有任务后显示什么？',options:['暂无任务','自动恢复所有任务','自动从服务器下载'],answer:0,
  explanation:'tasks 的长度为 0 时，v-if 分支显示空状态；每次删除只筛掉匹配编号的任务。',vocab:'remove · 移除；filter · 筛选；length · 长度；task · 任务',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 tasks（任务列表），每项包含 id（编号）和 title（标题）。','methods（方法集合）定义 removeTask（移除任务），接收 id（目标编号）；this（当前组件）的 tasks（任务列表）通过 filter（筛选）保留 task（当前任务）的 id（编号）不等于目标 id 的项，并赋值为新列表。','template（模板）用 div（容器）包含 p（段落）的 v-if（如果）判断 tasks（任务列表）的 length（长度）是否为 0；v-else（否则）的 ul（无序列表）中，li（列表项）用 v-for（循环）让 task（当前任务）取自 in（来自）tasks，key（标识）用 task 的 id（编号），显示 task 的 title（标题）；button（按钮）的 click（点击）调用 removeTask（移除任务）并传入 task.id。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面展示代码与初始效果；交互需在已引入 Vue 的页面中运行。示例不连接网络或持久化。',guide:['filter 创建新数组，再将它赋给响应式 tasks，界面随数据变化。','列表为空时显示提示；示例只在页面内存中保存任务。']
 }
,
 {
  id:'vue-minutes-form',title:'提交前检查学习分钟数',subtitle:'用 v-model 连接输入和校验',
  explain:'输入框通过 v-model 关联文字。提交时去除首尾空格并检查非负安全整数；示例只显示提示，不保存或发送数据。',
  code:'const app = Vue.createApp({\n  data() { return { text: "", message: "" } },\n  methods: {\n    submit() {\n      const clean = this.text.trim()\n      const minutes = Number(clean)\n      if (!/^[0-9]+$/.test(clean) || !Number.isSafeInteger(minutes)) {\n        this.message = "请输入非负整数"\n        return\n      }\n      this.message = "分钟：" + minutes\n    }\n  },\n  template: \'<form @submit.prevent="submit"><label>学习分钟数<input v-model="text"></label><button type="submit">提交</button><p>{{ message }}</p></form>\'\n})\napp.mount("#app")',
  output:'学习分钟数提交',question:'只输入空格时显示什么？',options:['请输入非负整数','分钟：0','自动上传服务器'],answer:0,
  explanation:'trim 后为空字符串，正则检查不通过，因此不会把空输入误认为 0。',vocab:'submit · 提交；minutes · 分钟数；trim · 去除首尾空格；model · 绑定',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 text（输入文字）和 message（提示信息），初始均为空字符串。','methods（方法集合）开始定义页面方法。','submit（提交）定义表单处理方法。','const（声明）创建 clean（整理后的文字），对 this（当前组件）的 text（输入文字）调用 trim（去除首尾空格）。','const（声明）创建 minutes（分钟数），通过 Number（转数字）转换 clean（整理后的文字）。','if（如果）正则表达式的 test（测试）发现 clean（整理后的文字）不是至少一个数字字符，或 Number（数字工具）的 isSafeInteger（是否为安全整数）检查 minutes（分钟数）为假，则进入提示分支；^ 表示开头，$ 表示结尾，+ 表示至少一个。','this（当前组件）的 message（提示信息）设为输入提示。','return（返回）结束本次提交。','右花括号结束 if（如果）分支。','this（当前组件）的 message（提示信息）显示 minutes（分钟数）。','右花括号结束 submit（提交）方法。','右花括号结束 methods（方法集合）。','template（模板）使用 form（表单），submit.prevent（提交时阻止默认行为）调用 submit（提交）；label（标签）包住 input（输入框），v-model（表单绑定）关联 text（输入文字）；button（按钮）的 type（类型）为 submit（提交），p（段落）显示 message（提示信息）。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将页面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面展示代码与初始效果；交互需在已引入 Vue 的页面中运行。示例不连接网络或持久化。',guide:['先检查整理后的文字，再检查转换结果是否为安全整数；0 是有效值。','前端提示不能代替服务端校验；实际业务还可能需要设置上限。']
 }
,
 {
  id:'vue-topic-summary',title:'显示各主题的学习时间',subtitle:'遍历汇总对象并处理空结果',
  explain:'示例使用固定汇总对象，计算其中的主题数量，再用模板遍历并显示分钟数。空对象显示提示；示例不请求接口。',
  code:'const app = Vue.createApp({\n  data() { return { totals: { Python: 35, Java: 10 } } },\n  computed: { count() { return Object.keys(this.totals).length } },\n  template: \'<div><p v-if="count === 0">暂无记录</p><ul v-else><li v-for="(minutes, topic) in totals" :key="topic">{{ topic }}：{{ minutes }} 分钟</li></ul></div>\'\n})\napp.mount("#app")',
  output:'Python：35 分钟\nJava：10 分钟',question:'汇总对象为空时显示什么？',options:['暂无记录','自动创建主题','自动请求服务器'],answer:0,
  explanation:'Object.keys 得到的数组为空，count 为 0，因此显示空状态提示。',vocab:'topic · 主题；totals · 总计；minutes · 分钟数；count · 数量',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 totals（总计对象），Python 和 Java 是示例主题。','computed（计算属性）定义 count（数量），return（返回）Object（对象工具）的 keys（获取键）读取 this（当前组件）的 totals（总计对象）后得到的 length（长度）。','template（模板）使用 div（容器），p（段落）的 v-if（如果）检查 count（数量）是否为 0；v-else（否则）的 ul（无序列表）中，li（列表项）用 v-for（循环）让 minutes（分钟数）和 topic（主题）取自 in（来自）totals（总计对象），key（标识）使用 topic，并显示 topic 与 minutes。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面展示模拟数据和代码；不会请求接口，实际运行需在已引入 Vue 的页面中。',guide:['Object.keys 取得主题名称，计算属性由对象推导数量。','示例假设汇总数据已验证；实际接口数据应先校验，并根据需要明确排序。']
 }
,
 {
  id:'vue-lifecycle-timer',title:'计时器与生命周期清理',subtitle:'页面卸载前停止定时任务',
  explain:'mounted 在组件挂载后启动定时器，beforeUnmount 在组件卸载前清理。示例的计数只在页面内存中，不连接服务器。',
  code:'const app = Vue.createApp({\n  data() { return { seconds: 0, timer: null } },\n  mounted() {\n    this.timer = setInterval(() => {\n      this.seconds += 1\n    }, 1000)\n  },\n  beforeUnmount() {\n    clearInterval(this.timer)\n  },\n  template: \'<p>学习秒数：{{ seconds }}</p>\'\n})\napp.mount("#app")',
  output:'学习秒数：0',question:'组件卸载前为什么调用 clearInterval？',options:['停止已启动的定时器','自动保存到服务器','重启手机'],answer:0,
  explanation:'clearInterval 停止此前注册的定时器，避免组件离开后继续执行。',vocab:'mounted · 已挂载；beforeUnmount · 卸载前；interval · 间隔；seconds · 秒数',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）方法通过 return（返回）提供 seconds（秒数）和 timer（计时器标识），null（空值）表示初始没有计时器。','mounted（挂载后）定义组件挂载后的处理方法。','this（当前组件）的 timer（计时器标识）保存 setInterval（按间隔重复执行）注册的计时器。','this（当前组件）的 seconds（秒数）增加 1。','结束 setInterval（按间隔重复执行）调用；1000 表示间隔 1000 毫秒。','右花括号结束 mounted（挂载后）方法。','beforeUnmount（卸载前）定义组件卸载前的处理方法。','clearInterval（清除定时器）停止 this（当前组件）的 timer（计时器标识）。','右花括号结束 beforeUnmount（卸载前）方法。','template（模板）使用 p（段落）显示 seconds（秒数）。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面只展示代码和初始效果；实际计时需要在已引入 Vue 的页面运行。',guide:['组件挂载后创建计时器，卸载前停止它。','浏览器可能延迟计时器；需要精确经过时间时应根据时间差计算。'],advanced:true
 }
,
 {
  id:'vue-task-progress-filter',title:'任务进度与待办筛选',subtitle:'用计算属性推导数量和列表',
  explain:'组件维护任务列表与筛选开关；计算属性根据当前状态得到完成数和可见列表，并让进度条随完成数更新。点击任务可切换状态，筛选后没有待办时显示提示。数据只存在当前页面。',
  code:'const app = Vue.createApp({\n  data() { return { tasks: [{ id: 1, title: "阅读", done: false }, { id: 2, title: "复习", done: false }], pendingOnly: false } },\n  computed: {\n    count() { return this.tasks.filter(task => task.done).length },\n    visible() { return this.pendingOnly ? this.tasks.filter(task => !task.done) : this.tasks }\n  },\n  methods: {\n    toggle(task) { task.done = !task.done }\n  },\n  template: \'<section><p>已完成：{{ count }} / {{ tasks.length }}</p><progress aria-label="任务完成进度" :value="count" :max="tasks.length"></progress><button @click="pendingOnly = !pendingOnly">{{ pendingOnly ? "显示全部" : "只看待办" }}</button><p v-if="visible.length === 0">暂无待办</p><ul v-else><li v-for="task in visible" :key="task.id"><button @click="toggle(task)">{{ task.title }}：{{ task.done ? "已完成" : "未完成" }}</button></li></ul></section>\'\n})\napp.mount("#app")',
  output:'阅读：未完成\n复习：未完成',question:'为什么完成数量会随任务切换更新？',options:['计算属性依赖任务的完成状态','自动从服务器读取','数量是随机生成的'],answer:0,
  explanation:'count 计算属性筛选已完成任务；任务状态变化时，Vue 会更新依赖该状态的计算结果和界面。',vocab:'computed · 计算属性；pending · 待办；visible · 可见；toggle · 切换；count · 数量',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）通过 return（返回）提供 tasks（任务列表）与 pendingOnly（仅看待办）；id（编号）、title（标题）、done（完成状态）为字段，false（假）表示未完成。','computed（计算属性）开始定义由数据推导的值。','count（完成数量）通过 return（返回）this（当前组件）的 tasks（任务列表）经 filter（筛选）保留 task（当前任务）的 done（完成状态）为真的项，再读取 length（长度）。','visible（可见任务）通过 return（返回）判断 this（当前组件）的 pendingOnly（仅看待办）；为真时用 tasks（任务列表）的 filter（筛选）保留 task（当前任务）的 done（完成状态）为假的项，否则使用 tasks。','右花括号结束 computed（计算属性）。','methods（方法集合）开始定义操作。','toggle（切换）接收 task（任务），将它的 done（完成状态）取反。','右花括号结束 methods（方法集合）。','template（模板）使用 section（区域）和 p（段落）显示 count（完成数量）与 tasks（任务列表）的 length（长度）；progress（进度条）的 aria-label（无障碍名称）说明用途，value（当前值）绑定 count，max（最大值）绑定 tasks 的 length；button（按钮）的 click（点击）切换 pendingOnly（仅看待办）；v-if（如果）检查 visible（可见任务）的 length（长度），v-else（否则）用 ul（无序列表）、li（列表项）和 v-for（循环）让 task（任务）取自 in（来自）visible，key（标识）使用 id（编号），button 的 click 调用 toggle（切换），显示 title（标题）和 done（完成状态）。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用页面内的固定数据；刷新后恢复初始状态，不连接服务器。',guide:['先完成一个任务，观察进度条和完成数量，再开启“只看待办”，比较可见列表。','全部完成后显示空状态；点击“显示全部”可再次看到已完成任务。']
 }
,
 {
  id:'vue-add-unique-task',title:'添加任务并检查重复',subtitle:'表单双向绑定与列表更新',
  explain:'输入任务标题并提交后，先去除首尾空格，拒绝空白与已有标题；有效时添加到列表并清空输入框。示例数据只保存在页面内存，不连接服务器。',
  code:'const app = Vue.createApp({\n  data() { return { title: "", tasks: ["阅读"], message: "" } },\n  methods: {\n    submit() {\n      const clean = this.title.trim()\n      if (!clean) { this.message = "请输入任务"; return }\n      if (this.tasks.includes(clean)) { this.message = "任务已存在"; return }\n      this.tasks.push(clean)\n      this.title = ""\n      this.message = "已添加"\n    }\n  },\n  template: \'<div><form @submit.prevent="submit"><label>任务标题<input v-model="title" /></label><button type="submit">添加</button><p>{{ message }}</p></form><ul><li v-for="task in tasks" :key="task">{{ task }}</li></ul></div>\'\n})\napp.mount("#app")',
  output:'阅读',question:'输入“ 阅读 ”并提交会怎样？',options:['去除首尾空格后发现重复，显示提示','再添加一个相同任务','自动保存到服务器'],answer:0,
  explanation:'trim 后得到“阅读”，includes 发现已有相同标题，因此不添加。示例按区分大小写的字符串比较。',vocab:'submit · 提交；title · 标题；clean · 整理后的文字；includes · 包含；message · 提示信息',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）通过 return（返回）提供 title（标题）、tasks（任务列表）和 message（提示信息）。','methods（方法集合）开始定义操作。','submit（提交）定义表单提交方法。','const（声明）创建 clean（整理后的标题），this（当前组件）的 title（标题）经 trim（去除首尾空格）得到。','if（如果）clean（整理后的标题）为空，this（当前组件）的 message（提示信息）显示输入提示，return（返回）结束提交。','if（如果）this（当前组件）的 tasks（任务列表）通过 includes（包含）发现 clean（整理后的标题）重复，message（提示信息）显示提示，return（返回）结束提交。','this（当前组件）的 tasks（任务列表）通过 push（追加）加入 clean（整理后的标题）。','this（当前组件）的 title（标题）设为空文字。','this（当前组件）的 message（提示信息）显示添加成功。','右花括号结束 submit（提交）方法。','右花括号结束 methods（方法集合）。','template（模板）使用 div（容器）和 form（表单），submit（提交事件）的 prevent（阻止默认行为）修饰符调用 submit（提交方法）；label（标签）包含 input（输入框），v-model（双向绑定）连接 title（标题）；button（按钮）的 type（类型）为 submit（提交），p（段落）显示 message（提示信息）；ul（无序列表）内的 li（列表项）用 v-for（循环）让 task（任务）取自 in（来自）tasks（任务列表），key（标识）使用 task。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例数据只保存在页面内存；刷新后恢复初始状态，不连接服务器。',guide:['依次提交空白、已有的“阅读”和新的“练习”，观察提示与列表。','此例按整理后的标题比较，区分大小写；真实应用还需服务端校验及稳定编号。']
 }
,
 {
  id:'vue-search-tasks',title:'按关键词搜索任务',subtitle:'输入绑定与计算属性筛选',
  explain:'示例保存搜索文字，计算属性根据整理后的关键词筛选固定任务。找不到匹配时显示提示；清空关键词后恢复全部任务。示例不请求网络。',
  code:'const app = Vue.createApp({\n  data() { return { query: "", tasks: [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }] } },\n  computed: {\n    visible() {\n      const keyword = this.query.trim()\n      return this.tasks.filter(task => task.title.includes(keyword))\n    }\n  },\n  template: \'<div><label>搜索任务<input v-model="query" /></label><p v-if="visible.length === 0">没有匹配任务</p><ul v-else><li v-for="task in visible" :key="task.id">{{ task.title }}</li></ul></div>\'\n})\napp.mount("#app")',
  output:'阅读\n复习',question:'清空搜索框后为什么显示全部任务？',options:['空字符串会匹配每个标题','自动从服务器下载','删除了筛选代码'],answer:0,
  explanation:'整理后的 keyword 为空字符串时，每个标题的 includes 都返回 true，因此显示全部任务。',vocab:'search · 搜索；query · 查询文字；keyword · 关键词；visible · 可见；filter · 筛选',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）通过 return（返回）提供 query（查询文字）和 tasks（任务列表）；id（编号）、title（标题）为字段。','computed（计算属性）开始定义由数据推导的值。','visible（可见任务）定义计算属性。','const（声明）创建 keyword（关键词），this（当前组件）的 query（查询文字）经 trim（去除首尾空格）得到。','return（返回）this（当前组件）的 tasks（任务列表）通过 filter（筛选）保留 task（当前任务）的 title（标题）includes（包含）keyword（关键词）的项。','右花括号结束 visible（可见任务）计算属性。','右花括号结束 computed（计算属性）。','template（模板）使用 div（容器）、label（标签）和 input（输入框），v-model（双向绑定）连接 query（查询文字）；p（段落）用 v-if（条件渲染）检查 visible（可见任务）的 length（长度）；v-else（否则）显示 ul（无序列表），li（列表项）用 v-for（循环）让 task（当前任务）取自 in（来自）visible，key（标识）使用 id（编号），显示 title（标题）。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用固定数据；实际交互需要在已引入 Vue 的页面运行，不连接服务器。',guide:['输入“阅读”只显示匹配任务；输入不存在的文字会显示空结果。','示例比较区分大小写；真实数据需要明确搜索规则、数据量和服务端查询方式。']
 }
,
 {
  id:'vue-combined-filter',title:'组合主题与关键词筛选',subtitle:'计算属性与条件重置',
  explain:'在关键词搜索的基础上加入主题选择。只有同时满足主题与关键词的任务才会显示；重置后恢复全部任务，示例不连接服务器。',
  code:'const app = Vue.createApp({\n  data() { return { topic: "all", query: "", tasks: [{ id: 1, title: "Python 阅读", topic: "Python" }, { id: 2, title: "Python 练习", topic: "Python" }, { id: 3, title: "React 练习", topic: "React" }] } },\n  computed: {\n    visible() {\n      const keyword = this.query.trim()\n      return this.tasks.filter(task => (this.topic === "all" || task.topic === this.topic) && task.title.includes(keyword))\n    }\n  },\n  methods: {\n    reset() { this.topic = "all"; this.query = "" }\n  },\n  template: \'<div><label>主题<select v-model="topic"><option value="all">全部</option><option value="Python">Python</option><option value="React">React</option></select></label><label>关键词<input v-model="query" /></label><button @click="reset">重置</button><p v-if="visible.length === 0">没有匹配任务</p><ul v-else><li v-for="task in visible" :key="task.id">{{ task.title }}</li></ul></div>\'\n})\napp.mount("#app")',
  output:'Python 阅读\nPython 练习\nReact 练习',question:'主题选 Python，关键词填“练习”时会显示什么？',options:['Python 练习','所有练习','所有 Python 任务'],answer:0,
  explanation:'两个条件通过 && 连接，只有 Python 练习同时满足主题和关键词。',vocab:'topic · 主题；query · 查询；keyword · 关键词；visible · 可见；reset · 重置；filter · 筛选',
  notes:['const（声明）创建 app（应用）；Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）通过 return（返回）提供 topic（主题）、query（查询文字）与 tasks（任务列表）；all（全部）为初始主题，id（编号）、title（标题）、topic（主题）描述任务；Python 和 React 是示例主题。','computed（计算属性）开始定义派生结果。','visible（可见任务）定义计算属性。','const（声明）创建 keyword（关键词），由 this（当前组件）的 query（查询文字）通过 trim（去除首尾空格）得到。','return（返回）this（当前组件）的 tasks（任务列表）通过 filter（筛选）保留 task（任务）：topic（主题）为 all（全部）或与任务主题相同，并且 title（标题）includes（包含）keyword（关键词）。','右花括号结束 visible（可见任务）计算属性。','右花括号结束 computed（计算属性）。','methods（方法集合）开始定义操作。','reset（重置）将 this（当前组件）的 topic（主题）恢复 all（全部），query（查询文字）清空。','右花括号结束 methods（方法集合）。','template（模板）中 div（容器）包含 label（标签）、select（下拉框）和 input（输入框）；v-model（双向绑定）连接 topic（主题）与 query（查询文字），option（选项）的 value（值）分别为 all（全部）、Python 和 React；button（按钮）在 click（点击）时调用 reset（重置）。p（段落）通过 v-if（条件渲染）检查 visible（可见任务）的 length（长度）；v-else（否则）显示 ul（无序列表），li（列表项）用 v-for（循环）让 task（当前任务）取自 in（来自）visible，key（标识）使用 id（编号），显示 title（标题）。','结束 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用固定数据；实际交互需要在已引入 Vue 的页面运行，不连接服务器。',guide:['先选 Python，再输入“练习”，观察两个条件如何一起筛选。','关键词会去除首尾空格；重置改变筛选条件，不修改原任务。']
 }
,
 {
  id:'vue-local-note',title:'在浏览器保存学习提示',subtitle:'输入检查、本地读取与失败反馈',
  explain:'页面加载后尝试从浏览器本地存储读取提示；保存时先去除首尾空格，空内容不写入。存储可能不可用；读取失败时不允许保存，避免覆盖未知内容。',
  code:'const app = Vue.createApp({\n  data() { return { text: "", message: "还没有提示", ready: false } },\n  mounted() {\n    try {\n      const saved = localStorage.getItem("study_tip")\n      if (saved) this.message = "已保存：" + saved\n      this.ready = true\n    } catch (error) {\n      this.message = "读取失败"\n    }\n  },\n  methods: {\n    save() {\n      if (!this.ready) { this.message = "读取失败，请重新加载"; return }\n      const clean = this.text.trim()\n      if (!clean) { this.message = "请输入提示"; return }\n      try {\n        localStorage.setItem("study_tip", clean)\n        this.message = "已保存：" + clean\n      } catch (error) {\n        this.message = "保存失败"\n      }\n    }\n  },\n  template: \'<div><label>学习提示<input v-model="text" /></label><button @click="save">保存</button><p>{{ message }}</p></div>\'\n})\napp.mount("#app")',
  output:'学习提示保存还没有提示',question:'保存空白内容时会怎样？',options:['显示输入提示，不写入存储','自动删除旧提示','上传到服务器'],answer:0,
  explanation:'trim 后为空时方法提前返回，不会调用 setItem，已有内容保持不变。',vocab:'mounted · 已挂载；localStorage · 浏览器本地存储；saved · 已保存；trim · 去除首尾空格；catch · 捕获错误',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）通过 return（返回）提供 text（输入文字）、message（提示信息）和 ready（读取成功标记）；false（假）为初始值。','mounted（挂载完成）定义组件进入页面后的处理。','try（尝试）开始可能失败的读取操作。','const（声明）创建 saved（已保存文字），localStorage（浏览器本地存储）的 getItem（读取）取得 study_tip（学习提示）键。','if（如果）saved（已保存文字）非空，将 this（当前组件）的 message（提示信息）设为已保存内容。','this（当前组件）的 ready（读取成功标记）设为 true（真）。','catch（捕获）接收 error（错误对象）。','this（当前组件）的 message（提示信息）设为读取失败。','右花括号结束 catch（捕获）分支。','右花括号结束 mounted（挂载完成）方法。','methods（方法集合）开始定义操作。','save（保存）定义保存方法。','if（如果）this（当前组件）的 ready（读取成功标记）为假，设置 message（提示信息）并 return（返回），避免覆盖未知内容。','const（声明）创建 clean（整理后的文字），this（当前组件）的 text（输入文字）经 trim（去除首尾空格）处理。','if（如果）clean（整理后的文字）为空，this（当前组件）的 message（提示信息）显示输入提示，return（返回）结束方法。','try（尝试）开始可能失败的保存操作。','localStorage（浏览器本地存储）的 setItem（写入）将 clean（整理后的文字）保存到 study_tip（学习提示）键。','this（当前组件）的 message（提示信息）显示 clean（整理后的文字）。','catch（捕获）接收 error（错误对象）。','this（当前组件）的 message（提示信息）设为保存失败。','右花括号结束 catch（捕获）分支。','右花括号结束 save（保存）方法。','右花括号结束 methods（方法集合）。','template（模板）使用 div（容器）、label（标签）和 input（输入框），v-model（双向绑定）连接 text（输入文字）；button（按钮）的 click（点击）调用 save（保存）；p（段落）显示 message（提示信息）。','结束传给 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'这是浏览器本地存储示例；阅读页面不会执行代码或跨设备同步。实际行为取决于浏览器存储权限。',guide:['页面挂载后读取；如果读取失败，重新加载页面后再试，避免覆盖未知内容。','示例只保存一条提示；实际应用应考虑数据迁移和隐私需求。']
 }
,
 {
  id:'vue-latest-request',title:'切换课程时忽略旧结果',subtitle:'用请求序号管理页面状态',
  explain:'页面切换课程时启动模拟加载。每次加载分配新序号，只有最新请求能更新页面；页面卸载时序号也会变化，避免旧结果更新界面。示例不联网。',
  code:'function mockLoad(id) {\n  return Promise.resolve(id === 1 ? "阅读" : "复习")\n}\nconst app = Vue.createApp({\n  data() { return { courseId: 1, version: 0, status: "loading", title: "" } },\n  mounted() { this.loadCourse() },\n  beforeUnmount() { this.version++ },\n  methods: {\n    switchCourse() {\n      this.courseId = this.courseId === 1 ? 2 : 1\n      this.loadCourse()\n    },\n    async loadCourse() {\n      const current = ++this.version\n      this.status = "loading"\n      try {\n        const title = await mockLoad(this.courseId)\n        if (current !== this.version) return\n        this.title = title\n        this.status = "success"\n      } catch (error) {\n        if (current !== this.version) return\n        this.status = "error"\n      }\n    }\n  },\n  template: \'<div><button @click="switchCourse">切换课程</button><p v-if="status === &quot;loading&quot;">加载中</p><p v-else-if="status === &quot;error&quot;">加载失败</p><p v-else>课程：{{ title }}</p></div>\'\n})\napp.mount("#app")',
  output:'切换课程加载中',question:'较早的请求在切换课程后才返回，会怎样？',options:['序号不再匹配，不更新界面','覆盖最新课程','自动取消网络请求'],answer:0,
  explanation:'新加载会增加 version；旧请求完成时 current 不等于最新 version，因此提前返回。序号不会取消请求。',vocab:'version · 版本序号；current · 当前；switch · 切换；status · 状态；unmount · 卸载',
  notes:['function（函数）定义 mockLoad（模拟加载），接收 id（编号）。','return（返回）Promise（异步结果）的 resolve（以成功值完成），根据 id（编号）选择固定标题。','右花括号结束 mockLoad（模拟加载）函数。','const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）通过 return（返回）提供 courseId（课程编号）、version（请求序号）、status（状态）和 title（标题）；loading（加载中）为初始状态。','mounted（挂载完成）通过 this（当前组件）的 loadCourse（加载课程）开始加载。','beforeUnmount（卸载前）将 this（当前组件）的 version（请求序号）加一，让旧操作失效。','methods（方法集合）开始定义操作。','switchCourse（切换课程）定义按钮处理方法。','this（当前组件）的 courseId（课程编号）在 1 和 2 之间切换。','this（当前组件）的 loadCourse（加载课程）开始新的加载。','右花括号结束 switchCourse（切换课程）方法。','async（异步）loadCourse（加载课程）定义异步方法。','const（声明）创建 current（本次序号），将 this（当前组件）的 version（请求序号）加一后赋值。','this（当前组件）的 status（状态）设为 loading（加载中）。','try（尝试）开始可能失败的操作。','const（声明）创建 title（标题），await（等待）mockLoad（模拟加载）处理 this（当前组件）的 courseId（课程编号）。','if（如果）current（本次序号）不等于 this（当前组件）的 version（最新序号），return（返回）结束旧操作。','this（当前组件）的 title（标题）设为 title（加载结果）。','this（当前组件）的 status（状态）设为 success（成功）。','catch（捕获）接收 error（错误对象）。','if（如果）current（本次序号）不等于 this（当前组件）的 version（最新序号），return（返回）忽略旧错误。','this（当前组件）的 status（状态）设为 error（错误）。','右花括号结束 catch（捕获）分支。','右花括号结束 loadCourse（加载课程）方法。','右花括号结束 methods（方法集合）。','template（模板）包含 div（容器）和 button（按钮），click（点击）调用 switchCourse（切换课程）；p（段落）通过 v-if（条件渲染）、v-else-if（否则如果）和 v-else（否则）根据 status（状态）的 loading（加载中）、error（错误）显示内容；quot（引号实体）表示引号，title（标题）显示结果。','结束 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'这是模拟加载示例，阅读页面不会连接服务器；实际项目还需取消请求和校验响应。',guide:['比较两次请求的序号：旧请求无论成功还是失败，都不会覆盖最新状态；最新请求失败则显示加载失败。','序号只阻止旧结果更新界面，不会取消底层操作；卸载前递增序号同样使旧回调失效。'],advanced:true
 }
 ,
 {
  id:'vue-task-pages',title:'分页浏览学习任务',subtitle:'计算属性与首末页按钮',
  explain:'页面每次显示两条固定任务，通过计算属性得到总页数和当前列表；首末页按钮会禁用，空列表显示提示。示例不访问服务器。',
  code:'const app = Vue.createApp({\n  data() { return { page: 1, size: 2, tasks: [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }, { id: 3, title: "练习" }] } },\n  computed: {\n    totalPages() { return Math.max(1, Math.ceil(this.tasks.length / this.size)) },\n    current() { return Math.min(this.page, this.totalPages) },\n    visible() { return this.tasks.slice((this.current - 1) * this.size, this.current * this.size) }\n  },\n  template: \'<section><p v-if="visible.length === 0">暂无任务</p><ul v-else><li v-for="task in visible" :key="task.id">{{ task.title }}</li></ul><p>第 {{ current }} / {{ totalPages }} 页</p><button :disabled="current === 1" @click="page = current - 1">上一页</button><button :disabled="current === totalPages" @click="page = current + 1">下一页</button></section>\'\n})\napp.mount("#app")',
  output:'阅读\n复习',question:'为什么第一页不能点击上一页？',options:['当前页为 1 时按钮被禁用','任务被删除','页面自动连接服务器'],answer:0,
  explanation:'当前页为 1 时 disabled 为真；空列表按一页空结果展示，两个按钮都禁用。',vocab:'page · 页码；size · 每页数量；total · 总数；current · 当前；visible · 可见；disabled · 禁用',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）通过 return（返回）提供 page（页码）、size（每页数量）和 tasks（任务列表）；id（编号）与 title（标题）描述任务。','computed（计算属性）开始定义派生值。','totalPages（总页数）通过 return（返回）Math（数学工具）的 max（取较大值）和 ceil（向上取整）计算 this（当前组件）的 tasks（任务列表）length（长度）除以 size（每页数量），至少为 1。','current（当前页）通过 return（返回）Math（数学工具）的 min（取较小值），限制 this（当前组件）的 page（页码）不超过 totalPages（总页数）。','visible（可见任务）通过 return（返回）this（当前组件）的 tasks（任务列表）调用 slice（切片），用 current（当前页）和 size（每页数量）计算范围。','右花括号结束 computed（计算属性）。','template（模板）使用 section（区域），p（段落）的 v-if（条件渲染）检查 visible（可见任务）的 length（长度）；v-else（否则）显示 ul（无序列表），li（列表项）的 v-for（循环）让 task（任务）取自 in（来自）visible，key（标识）使用 id（编号），显示 title（标题）。p（段落）显示 current（当前页）和 totalPages（总页数）；button（按钮）的 disabled（禁用）限制边界，click（点击）更新 page（页码）。','结束 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用本地固定数据；实际交互需在已引入 Vue 的页面运行，不连接服务器。',guide:['点击下一页、上一页，观察任务和按钮状态。','空列表按第 1 / 1 页显示；数据缩短时 current 限制显示范围，示例不实现服务端分页。']
 }
 ,
 {
  id:'vue-accessible-title',title:'让表单错误提示更清楚',subtitle:'关联输入框与错误说明',
  explain:'提交空白标题时显示错误，并通过 aria-invalid 与 aria-describedby 将错误状态和说明关联到输入框；修正后再次提交会清除错误。示例只更新页面状态。',
  code:'const app = Vue.createApp({\n  data() { return { title: "", error: "", message: "" } },\n  methods: {\n    submit() {\n      const clean = this.title.trim()\n      if (!clean) { this.error = "请输入标题"; this.message = ""; return }\n      this.error = ""\n      this.message = "已提交：" + clean\n    }\n  },\n  template: \'<form @submit.prevent="submit"><label for="title">课程标题</label><input id="title" v-model="title" :aria-invalid="Boolean(error)" :aria-describedby="error ? &quot;title-error&quot; : null"><p v-if="error" id="title-error" role="alert">{{ error }}</p><button type="submit">提交</button><p>{{ message }}</p></form>\'\n})\napp.mount("#app")',
  output:'课程标题提交',question:'aria-describedby 在错误出现时关联什么？',options:['输入框对应的错误说明','数据库地址','浏览器版本'],answer:0,
  explanation:'aria-describedby 指向错误提示的 id；aria-invalid 表示当前值无效。',vocab:'invalid · 无效；describe · 描述；submit · 提交；error · 错误；alert · 提醒',
  notes:['const（声明）创建 app（应用），Vue（界面框架）的 createApp（创建应用）接收配置。','data（数据）通过 return（返回）提供 title（标题）、error（错误信息）和 message（提示信息），初始均为空。','methods（方法集合）开始定义操作。','submit（提交）定义表单处理方法。','const（声明）创建 clean（整理后的标题），this（当前组件）的 title（标题）经 trim（去除首尾空格）得到。','if（如果）clean（整理后的标题）为空，将 this（当前组件）的 error（错误信息）设为提示，message（提示信息）清空，return（返回）结束方法。','this（当前组件）的 error（错误信息）清空。','this（当前组件）的 message（提示信息）显示 clean（整理后的标题）。','右花括号结束 submit（提交）方法。','右花括号结束 methods（方法集合）。','template（模板）使用 form（表单）的 submit（提交事件）和 prevent（阻止默认行为）调用 submit（提交）；label（标签）的 for（关联控件）指向 title（标题）输入框；input（输入框）的 id（标识）为 title，v-model（双向绑定）连接 title；aria-invalid（无效状态）使用 Boolean（转布尔值）检查 error（错误），quot（引号的 HTML 实体）用于在属性值中表达引号；aria-describedby（关联说明）在有错误时指向 title-error（标题错误），否则为 null（空值）；p（段落）用 v-if（条件渲染）显示 error，id 为 title-error，role（角色）为 alert（提醒）；button（按钮）的 type（类型）为 submit（提交），最后的 p 显示 message（提示信息）。','结束 createApp（创建应用）的配置和调用。','app（应用）的 mount（挂载）将界面放入 app（应用容器）选择器对应的元素。'],
  language:'JavaScript · Vue',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例只更新页面状态，不保存数据；实际辅助技术效果需要在目标设备上验证。',guide:['先提交空白标题，再输入有效标题并提交，观察错误和提示的变化。','aria 属性帮助表达状态和关联说明；仍需结合真实浏览器和辅助技术测试。']
 }
];
