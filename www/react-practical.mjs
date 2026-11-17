export const reactPractical = [
  {
    "id": "react-filter-tasks",
    "title": "筛选待完成任务",
    "subtitle": "根据任务状态决定显示哪些项目",
    "explain": "组件可以先从传入的任务中筛选未完成项目，再把筛选结果渲染成列表。示例只使用固定数据，不读取数据库或请求服务器。",
    "code": "function TaskList({ tasks }) {\n  const remaining = tasks.filter(task => !task.done)\n  return <ul>{remaining.map(task => <li key={task.id}>{task.title}</li>)}</ul>\n}",
    "output": "复习",
    "question": "为什么示例只显示“复习”？",
    "options": [
      "它的 done 为 false",
      "第一项被删除",
      "数据自动上传服务器"
    ],
    "answer": 0,
    "explanation": "filter 保留 done 为 false 的任务；原数组不会因此被删除，也没有上传。",
    "vocab": "filter · 筛选；remaining · 剩余；done · 完成状态",
    "notes": [
      "function（函数）定义 TaskList（任务列表）组件，接收 tasks（任务数组）属性。",
      "const（声明）创建 remaining（剩余任务），tasks（任务数组）的 filter（筛选）保留 task（当前任务）的 done（是否完成）为假的项。",
      "return（返回）ul（无序列表）；remaining（剩余任务）的 map（映射）将 task（当前任务）转换成 li（列表项），key（键）使用 task 的 id（编号），显示 task 的 title（标题）。",
      "右花括号结束 TaskList（任务列表）组件。"
    ],
    "component": "TaskList",
    "props": {
      "tasks": [
        {
          "id": 1,
          "title": "阅读",
          "done": true
        },
        {
          "id": 2,
          "title": "复习",
          "done": false
        }
      ]
    },
    "language": "JavaScript · React JSX",
    "outputLabel": "页面初始效果（示意）",
    "notice": "示例展示组件主体，需在配置 React 和 JSX 的项目中导入 React 后使用；本页面只展示效果，不会运行组件。",
    "commentPrefix": "//",
    "guide": [
      "组件可以先从传入的任务中筛选未完成项目，再把筛选结果渲染成列表。示例只使用固定数据，不读取数据库或请求服务器。",
      "filter 保留 done 为 false 的任务；原数组不会因此被删除，也没有上传。"
    ]
  },
  {
    "id": "react-empty-tasks",
    "title": "为空列表显示提示",
    "subtitle": "让读者知道当前没有任务",
    "explain": "可以在渲染列表之前检查数组长度。本例数据只存在于传入的属性中，不访问网络。",
    "code": "function TaskStatus({ tasks }) {\n  if (tasks.length === 0) {\n    return <p>暂无任务</p>\n  }\n  return <p>有任务</p>\n}",
    "output": "暂无任务",
    "question": "tasks 为空数组时显示什么？",
    "options": [
      "暂无任务",
      "有任务",
      "自动访问网络"
    ],
    "answer": 0,
    "explanation": "空数组的 length 为 0，所以 if 分支返回“暂无任务”。",
    "vocab": "task · 任务；length · 长度；status · 状态",
    "notes": [
      "function（函数）定义 TaskStatus（任务状态）组件，接收 tasks（任务数组）属性。",
      "if（如果）tasks（任务数组）的 length（长度）严格等于 0，进入空列表分支。",
      "return（返回）p（段落）元素，显示“暂无任务”。",
      "右花括号结束 if（如果）分支。",
      "return（返回）p（段落）元素，在列表非空时显示“有任务”。",
      "右花括号结束 TaskStatus（任务状态）组件。"
    ],
    "component": "TaskStatus",
    "props": {
      "tasks": []
    },
    "language": "JavaScript · React JSX",
    "outputLabel": "页面初始效果（示意）",
    "notice": "示例展示组件主体，需在配置 React 和 JSX 的项目中导入 React 后使用；本页面只展示效果，不会运行组件。",
    "commentPrefix": "//",
    "guide": [
      "可以在渲染列表之前检查数组长度。本例数据只存在于传入的属性中，不访问网络。",
      "空数组的 length 为 0，所以 if 分支返回“暂无任务”。"
    ]
  }
,
 {
  id:'react-toggle-task',title:'点击切换任务状态',subtitle:'用布尔状态控制按钮文字',
  explain:'组件用 useState 保存任务是否完成。点击按钮时根据上一状态取反，React 随状态变化重新渲染；示例只保存在当前页面内存中。',
  code:'function TaskToggle() {\n  const [done, setDone] = React.useState(false)\n  function toggle() {\n    setDone(previous => !previous)\n  }\n  return <button onClick={toggle}>{done ? "已完成" : "未完成"}</button>\n}',
  output:'未完成',question:'点击一次后按钮显示什么？',options:['已完成','未完成','自动保存到服务器'],answer:0,
  explanation:'初始 done 是 false；点击后把上一状态取反，变为 true，因此显示“已完成”。',vocab:'toggle · 切换；done · 已完成；previous · 上一个',
  notes:['function（函数）定义 TaskToggle（任务状态切换）组件。','const（声明）创建 done（完成状态）和 setDone（更新完成状态），React（界面库）的 useState（状态钩子）以 false（假）为初始值。','function（函数）定义 toggle（切换）点击处理函数。','setDone（更新完成状态）根据 previous（上一状态）取反；! 表示取反。','右花括号结束 toggle（切换）函数。','return（返回）button（按钮），onClick（点击时）调用 toggle（切换）；根据 done（完成状态）选择按钮文字。','右花括号结束 TaskToggle（任务状态切换）组件。'],
  component:'TaskToggle',props:{},language:'JavaScript · React JSX',outputLabel:'页面初始效果（示意）',notice:'示例展示组件主体；本页面只展示代码与初始效果，实际交互需在 React 项目中运行。',commentPrefix:'//',guide:['状态只保存在当前组件中，页面重新加载后会回到初始值。','使用上一状态计算新状态，可以清楚表达切换操作。']
 }
,
 {
  id:'react-parent-child-state',title:'子组件通知父组件更新',subtitle:'通过回调把点击传回状态持有者',
  explain:'父组件保存计数，并把更新函数作为属性传给子组件。子组件按钮调用该函数，父组件重新渲染；示例只在页面内存中计数。',
  code:'function AddButton({ onAdd }) {\n  return <button onClick={onAdd}>加一</button>\n}\nfunction StudyCounter() {\n  const [count, setCount] = React.useState(0)\n  function add() {\n    setCount(previous => previous + 1)\n  }\n  return <div><p>次数：{count}</p><AddButton onAdd={add} /></div>\n}',
  output:'次数：0加一',question:'计数状态保存在哪个组件？',options:['StudyCounter 父组件','AddButton 子组件','服务器'],answer:0,
  explanation:'StudyCounter 调用 useState 保存 count，并通过 onAdd 属性将 add 函数传给 AddButton。',vocab:'parent · 父组件；child · 子组件；count · 计数',
  notes:['function（函数）定义 AddButton（加一按钮）子组件，接收 onAdd（增加回调）属性。','return（返回）button（按钮），onClick（点击时）调用 onAdd（增加回调）。','右花括号结束 AddButton（加一按钮）组件。','function（函数）定义 StudyCounter（学习计数）父组件。','const（声明）创建 count（计数）与 setCount（更新计数），React（界面库）的 useState（状态钩子）设置初始值 0。','function（函数）定义 add（增加）方法。','setCount（更新计数）根据 previous（上一计数）加 1。','右花括号结束 add（增加）函数。','return（返回）div（容器），其中 p（段落）显示 count（计数）；AddButton（加一按钮）接收 onAdd（增加回调），其值为 add（增加方法）。','右花括号结束 StudyCounter（学习计数）组件。'],
  component:'StudyCounter',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例展示组件代码；本页面只展示初始效果，实际交互需要在 React 项目中运行。',guide:['状态由父组件持有；子组件通过调用传入的函数通知父组件。','计数只保存在当前组件内存中，刷新后恢复初始值。']
 }
,
 {
  id:'react-input-name',title:'输入框与页面文字联动',subtitle:'用状态管理输入的名字',
  explain:'受控输入框的 value 来自组件状态，onChange 在输入变化时更新状态。示例只在当前页面显示文字，不保存或发送数据。',
  code:'function GreetingInput() {\n  const [name, setName] = React.useState("")\n  return <div><input value={name} onChange={event => setName(event.target.value)} /><p>你好，{name || "朋友"}</p></div>\n}',
  output:'你好，朋友',question:'输入文字后哪个函数更新状态？',options:['setName','自动上传到服务器','读取通讯录'],answer:0,
  explanation:'onChange 读取 event.target.value，并调用 setName 更新 name，组件随之重新渲染。',vocab:'input · 输入框；change · 改变；name · 名字',
  notes:['function（函数）定义 GreetingInput（问候输入）组件。','const（声明）创建 name（名字）和 setName（更新名字），React（界面库）的 useState（状态钩子）以空字符串为初始值。','return（返回）div（容器）：input（输入框）的 value（值）来自 name（名字），onChange（变化时）通过 event（事件）的 target（目标元素）的 value（值）调用 setName（更新名字）；p（段落）显示 name 或备用文字。','右花括号结束 GreetingInput（问候输入）组件。'],
  component:'GreetingInput',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例展示组件代码；本页面只展示初始效果，实际交互需要在 React 项目中运行。',guide:['value 由状态控制，输入变化通过 onChange 更新状态。','空字符串时使用备用称呼；刷新页面后恢复初始值。']
 }
,
 {
  id:'react-toggle-list',title:'切换列表中指定任务',subtitle:'组合状态、列表渲染和按编号更新',
  explain:'组件保存任务数组，点击时根据编号生成新数组，只切换对应任务的状态。示例数据只在页面内存中，不保存到服务器。',
  code:'function TaskBoard() {\n  const [tasks, setTasks] = React.useState([{ id: 1, title: "阅读", done: false }, { id: 2, title: "复习", done: false }])\n  function toggle(id) {\n    setTasks(previous => previous.map(task => task.id === id ? { ...task, done: !task.done } : task))\n  }\n  return <div>{tasks.map(task => <button key={task.id} onClick={() => toggle(task.id)}>{task.title}：{task.done ? "已完成" : "未完成"}</button>)}</div>\n}',
  output:'阅读：未完成复习：未完成',question:'点击编号 2 的按钮会怎样？',options:['只切换编号 2 的状态','同时切换所有任务','自动保存到服务器'],answer:0,
  explanation:'map 根据编号只为匹配任务创建更新后的对象，其他任务保持原状态。',vocab:'task · 任务；toggle · 切换；previous · 之前的状态',
  notes:['function（函数）定义 TaskBoard（任务面板）组件。','const（声明）创建 tasks（任务列表）和 setTasks（更新任务列表），React（界面库）的 useState（状态钩子）提供初始数据；id（编号）、title（标题）、done（完成状态）是字段，false（假）表示未完成。','function（函数）定义 toggle（切换），接收 id（编号）。','setTasks（更新任务列表）使用 previous（之前的任务列表）的 map（映射）；task（当前任务）的 id（编号）匹配时复制 task 并将 done（完成状态）取反，否则保留 task。','右花括号结束 toggle（切换）函数。','return（返回）div（容器），tasks（任务列表）的 map（映射）生成 button（按钮）；task（当前任务）的 id（编号）用作 key（标识），onClick（点击时）调用 toggle（切换），并显示 title（标题）和 done（完成状态）。','右花括号结束 TaskBoard（任务面板）组件。'],
  component:'TaskBoard',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例展示组件代码；本页面只展示初始效果，实际交互需要在 React 项目中运行。',guide:['使用上一状态计算新列表，匹配项创建新对象。','刷新页面后状态恢复初始值；示例没有持久化。']
 }
,
 {
  id:'react-count-done',title:'显示已完成任务数量',subtitle:'从属性计算显示结果',
  explain:'组件接收任务列表，通过 filter 筛选已完成项目，再用 length 计算数量。示例数据由调用方提供，不连接数据库。',
  code:'function DoneCount({ tasks }) {\n  const count = tasks.filter(task => task.done).length\n  return <p>已完成：{count}</p>\n}',
  output:'已完成：1',question:'任务列表为空时显示多少？',options:['0','1','自动从服务器获取'],answer:0,
  explanation:'空数组筛选后仍为空，length 为 0。',vocab:'count · 数量；filter · 筛选；done · 完成状态',
  notes:['function（函数）定义 DoneCount（已完成数量）组件，接收 tasks（任务列表）属性。','const（声明）创建 count（数量），tasks（任务列表）的 filter（筛选）保留 task（当前任务）的 done（完成状态）为真的项，再读取 length（长度）。','return（返回）p（段落）显示 count（数量）。','右花括号结束 DoneCount（已完成数量）组件。'],
  component:'DoneCount',props:{tasks:[{done:true},{done:false}]},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例展示组件代码；本页面只展示初始效果，实际运行需要 React 项目提供属性。',guide:['数量直接从传入的任务列表计算，列表变化时会随新的属性重新计算。','示例不保存任务，也不连接网络。']
 }
,
 {
  id:'react-submit-title',title:'提交前检查课程标题',subtitle:'受控输入与表单提交',
  explain:'组件将输入保存在状态中。提交时阻止浏览器默认提交，去除首尾空格并检查空值；示例只显示提示，不保存或发送数据。',
  code:'function TitleForm() {\n  const [title, setTitle] = React.useState("")\n  const [message, setMessage] = React.useState("")\n  function submit(event) {\n    event.preventDefault()\n    const clean = title.trim()\n    setMessage(clean ? "已输入：" + clean : "请输入标题")\n  }\n  return <form onSubmit={submit}><input value={title} onChange={event => setTitle(event.target.value)} /><button type="submit">提交</button><p>{message}</p></form>\n}',
  output:'提交',question:'只输入空格并提交时会显示什么？',options:['请输入标题','已保存到服务器','自动生成标题'],answer:0,
  explanation:'trim 去除首尾空格，纯空格变成空字符串，因此显示提示。',vocab:'submit · 提交；title · 标题；trim · 去除首尾空格',
  notes:['function（函数）定义 TitleForm（标题表单）组件。','const（声明）创建 title（标题）和 setTitle（更新标题），React（界面库）的 useState（状态钩子）初始为空字符串。','const（声明）创建 message（提示信息）和 setMessage（更新提示），React（界面库）的 useState（状态钩子）初始为空字符串。','function（函数）定义 submit（提交）处理方法，接收 event（事件）。','event（事件）的 preventDefault（阻止默认行为）阻止浏览器默认表单提交。','const（声明）创建 clean（整理后的标题），由 title（标题）调用 trim（去除首尾空格）得到。','setMessage（更新提示）根据 clean（整理后的标题）是否为空，选择显示内容。','右花括号结束 submit（提交）函数。','return（返回）form（表单），onSubmit（提交时）调用 submit（提交）；input（输入框）的 value（值）为 title（标题），onChange（变化时）通过 event（事件）的 target（目标元素）的 value（值）调用 setTitle（更新标题）；button（按钮）的 type（类型）为 submit（提交）；p（段落）显示 message（提示信息）。','右花括号结束 TitleForm（标题表单）组件。'],
  component:'TitleForm',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例展示组件代码；本页面只展示初始效果，实际交互需要在 React 项目中运行。',guide:['输入状态和提示状态分开保存，提交时才检查整理后的标题。','浏览器端检查不能替代真实服务端的输入验证。']
 }
,
 {
  id:'react-batch-increment',title:'一次点击连续更新状态',subtitle:'根据前一个数值累加',
  explain:'React 可能把同一事件中的状态更新一起处理。需要根据前一次结果计算新值时，可以传入更新函数；本例每次点击增加 2，仅在页面内保存状态。',
  code:'function StepCounter() {\n  const [count, setCount] = React.useState(0)\n  function addTwo() {\n    setCount(previous => previous + 1)\n    setCount(previous => previous + 1)\n  }\n  return <button onClick={addTwo}>次数：{count}</button>\n}',
  output:'次数：0',question:'初始为 0，点击一次后显示多少？',options:['2','1','自动保存到服务器'],answer:0,
  explanation:'两个更新函数依次接收前一个结果：先从 0 变成 1，再从 1 变成 2。',vocab:'previous · 上一次的；count · 计数；increment · 递增',
  notes:['function（函数）定义 StepCounter（步进计数器）组件。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 count（计数）和 setCount（更新计数），初始值为 0。','function（函数）定义 addTwo（加二）点击处理函数。','setCount（更新计数）接收更新函数，previous（前一次的值）加 1 作为新值。','setCount（更新计数）再次接收更新函数，previous（前一次更新的结果）再加 1。','右花括号结束 addTwo（加二）函数。','return（返回）button（按钮），onClick（点击时）调用 addTwo（加二），并显示 count（计数）。','右花括号结束 StepCounter（步进计数器）组件。'],
  component:'StepCounter',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面展示代码和初始效果；点击交互需要在 React 项目中运行。示例不连接网络，也不持久保存数据。',guide:['更新函数接收排队处理中前一次得到的状态，因此适合连续基于旧值计算。','计数只保存在组件状态中，重新加载页面后会回到初始值。']
 }
,
 {
  id:'react-loading-state',title:'根据加载状态显示课程',subtitle:'在组件中处理加载、成功和失败',
  explain:'组件根据调用方传入的状态选择界面。示例用固定属性模拟加载结果，没有发起请求或保存数据。',
  code:'function CourseStatus({ status, title, message }) {\n  if (status === "loading") return <p>加载中</p>\n  if (status === "success") return <p>课程：{title}</p>\n  if (status === "error") return <p>错误：{message}</p>\n  return <p>未知状态</p>\n}',
  output:'加载中',question:'status 为 success 时显示什么？',options:['课程标题','始终显示加载中','自动从服务器获取内容'],answer:0,
  explanation:'success 分支返回显示 title 的段落；状态和标题由调用组件的一方提供。',vocab:'status · 状态；loading · 加载中；success · 成功；error · 错误',
  notes:['function（函数）定义 CourseStatus（课程状态）组件，从属性中取得 status（状态）、title（标题）和 message（错误消息）。','if（如果）status（状态）为 loading（加载中），return（返回）p（段落）显示加载提示。','if（如果）status（状态）为 success（成功），return（返回）p（段落）显示 title（标题）。','if（如果）status（状态）为 error（错误），return（返回）p（段落）显示 message（错误消息）。','return（返回）p（段落）显示未知状态提示，处理未识别的值。','右花括号结束 CourseStatus（课程状态）组件。'],
  component:'CourseStatus',props:{status:'loading'},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例展示组件代码和模拟属性；本页面不会发起请求，实际运行需配置 React 和 JSX。',guide:['调用方可以传入不同属性来展示各状态；组件本身不负责请求数据。','未知状态有单独提示；真实数据进入组件前仍应进行验证。']
 }
,
 {
  id:'react-remove-tasks',title:'删除任务并显示空状态',subtitle:'根据编号更新列表状态',
  explain:'组件使用本地状态保存任务。点击删除时按编号生成新列表；当列表为空时显示提示。示例不连接服务器，刷新后会恢复初始任务。',
  code:'function TaskManager() {\n  const [tasks, setTasks] = React.useState([{ id: 1, title: "阅读" }, { id: 2, title: "复习" }])\n  function removeTask(id) {\n    setTasks(previous => previous.filter(task => task.id !== id))\n  }\n  if (tasks.length === 0) return <p>暂无任务</p>\n  return <ul>{tasks.map(task => <li key={task.id}>{task.title}<button onClick={() => removeTask(task.id)}>删除</button></li>)}</ul>\n}',
  output:'阅读删除\n复习删除',question:'删除所有任务后显示什么？',options:['暂无任务','自动恢复所有任务','自动从服务器下载'],answer:0,
  explanation:'列表长度为 0 时，组件返回空状态提示；每次删除只筛掉匹配编号的任务。',vocab:'remove · 移除；previous · 前一次状态；filter · 筛选；length · 长度',
  notes:['function（函数）定义 TaskManager（任务管理）组件。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 tasks（任务列表）和 setTasks（更新列表），任务包含 id（编号）与 title（标题）。','function（函数）定义 removeTask（移除任务），接收 id（目标编号）。','setTasks（更新列表）接收 previous（前一次状态），通过 filter（筛选）保留 task（当前任务）的 id（编号）不等于目标 id 的项目。','右花括号结束 removeTask（移除任务）函数。','if（如果）tasks（任务列表）的 length（长度）为 0，return（返回）p（段落）显示空状态。','return（返回）ul（无序列表），tasks（任务列表）的 map（映射）把 task（当前任务）变成 li（列表项），key（标识）使用 task.id（编号），显示 task.title（标题）；button（按钮）的 onClick（点击时）调用 removeTask（移除任务）并传入 task.id（编号）。','右花括号结束 TaskManager（任务管理）组件。'],
  component:'TaskManager',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面展示组件代码与初始效果；交互需在 React 项目中运行，示例不连接网络或持久化。',guide:['使用上一次状态计算新列表，避免依赖可能过期的状态值。','列表为空时显示提示；示例数据只在组件内存中，刷新后恢复初始值。']
 }
,
 {
  id:'react-minutes-form',title:'提交前检查学习分钟数',subtitle:'从输入文字到页面提示',
  explain:'组件将输入文字保存在状态中，提交时去除首尾空格并检查非负安全整数。示例只更新页面提示，不保存或发送数据。',
  code:'function MinutesForm() {\n  const [text, setText] = React.useState("")\n  const [message, setMessage] = React.useState("")\n  function submit(event) {\n    event.preventDefault()\n    const clean = text.trim()\n    const minutes = Number(clean)\n    if (!/^[0-9]+$/.test(clean) || !Number.isSafeInteger(minutes)) {\n      setMessage("请输入非负整数")\n      return\n    }\n    setMessage("分钟：" + minutes)\n  }\n  return <form onSubmit={submit}><label>学习分钟数<input value={text} onChange={event => setText(event.target.value)} /></label><button type="submit">提交</button><p>{message}</p></form>\n}',
  output:'学习分钟数提交',question:'只输入空格时为什么不会显示 0 分钟？',options:['先检查整理后的文字是否包含数字','自动从服务器读取','浏览器把空格变成 1'],answer:0,
  explanation:'虽然 Number 可以把空字符串转为 0，但正则检查会先排除空输入。',vocab:'submit · 提交；minutes · 分钟数；trim · 去除首尾空格；value · 值',
  notes:['function（函数）定义 MinutesForm（分钟表单）组件。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 text（输入文字）和 setText（更新输入），初始为空。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 message（提示信息）和 setMessage（更新提示），初始为空。','function（函数）定义 submit（提交）方法，接收 event（事件）。','event（事件）的 preventDefault（阻止默认行为）阻止浏览器默认表单提交。','const（声明）创建 clean（整理后的文字），对 text（输入文字）调用 trim（去除首尾空格）。','const（声明）创建 minutes（分钟数），通过 Number（转数字）转换 clean（整理后的文字）。','if（如果）正则表达式的 test（测试）发现 clean（整理后的文字）不是至少一个数字字符，或 Number（数字工具）的 isSafeInteger（是否为安全整数）检查 minutes（分钟数）为假，就进入提示分支；^ 表示开头，$ 表示结尾，+ 表示至少一个。','setMessage（更新提示）显示输入错误。','return（返回）结束本次提交。','右花括号结束 if（如果）分支。','setMessage（更新提示）显示 minutes（分钟数）。','右花括号结束 submit（提交）函数。','return（返回）form（表单），onSubmit（提交时）调用 submit（提交）；label（标签）包住 input（输入框），value（值）为 text（输入文字），onChange（变化时）从 event（事件）的 target（目标元素）的 value（值）调用 setText（更新输入）；button（按钮）的 type（类型）为 submit（提交）；p（段落）显示 message（提示信息）。','右花括号结束 MinutesForm（分钟表单）组件。'],
  component:'MinutesForm',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面展示代码和初始效果；交互需在 React 项目中运行。示例不连接网络或保存数据。',guide:['先检查文本格式，再检查数字范围；0 是有效输入。','前端校验用于改善提示，真实服务端仍需独立校验。']
 }
,
 {
  id:'react-topic-summary',title:'显示各主题的学习时间',subtitle:'把汇总对象转换成列表',
  explain:'组件接收主题到分钟数的汇总对象，用 Object.entries 转成项目列表。示例属性由调用方提供，不请求接口；空对象显示提示。',
  code:'function TopicSummary({ totals }) {\n  const entries = Object.entries(totals)\n  if (entries.length === 0) return <p>暂无记录</p>\n  return <ul>{entries.map(([topic, minutes]) => <li key={topic}>{topic}：{minutes} 分钟</li>)}</ul>\n}',
  output:'Python：35 分钟\nJava：10 分钟',question:'totals 为空对象时显示什么？',options:['暂无记录','自动创建主题','自动请求服务器'],answer:0,
  explanation:'空对象转换后的 entries 长度为 0，因此组件返回空状态提示。',vocab:'topic · 主题；totals · 总计；entries · 键值项；minutes · 分钟数',
  notes:['function（函数）定义 TopicSummary（主题汇总）组件，接收 totals（总计对象）属性。','const（声明）创建 entries（键值项数组），由 Object（对象工具）的 entries（获取键值项）转换 totals（总计对象）得到。','if（如果）entries（键值项数组）的 length（长度）为 0，return（返回）p（段落）显示提示。','return（返回）ul（无序列表）；entries（键值项数组）的 map（映射）将每项解构为 topic（主题）与 minutes（分钟数），生成 li（列表项）；key（标识）使用 topic（主题），并显示主题与分钟数。','右花括号结束 TopicSummary（主题汇总）组件。'],
  component:'TopicSummary',props:{totals:{Python:35,Java:10}},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用固定属性模拟汇总数据；阅读页面不会发起请求，实际运行需要配置 React 和 JSX。',guide:['Object.entries 将对象转换为键值对数组，map 为每对数据生成列表项。','这里假设调用方提供已验证的汇总对象；真实接口数据需要先校验，并按需要明确排序。']
 }
,
 {
  id:'react-effect-timer',title:'计时器与副作用清理',subtitle:'组件离开时停止定时任务',
  explain:'useEffect 可在组件显示后启动定时器，并返回清理函数。示例每秒请求将计数加一；组件卸载时清除定时器，计数只保存在当前页面。',
  code:'function StudyTimer() {\n  const [seconds, setSeconds] = React.useState(0)\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setSeconds(previous => previous + 1)\n    }, 1000)\n    return () => clearInterval(timer)\n  }, [])\n  return <p>学习秒数：{seconds}</p>\n}',
  output:'学习秒数：0',question:'组件卸载时清理函数做什么？',options:['停止这个定时器','保存到数据库','关闭手机'],answer:0,
  explanation:'useEffect 返回的函数会在组件卸载等清理时机执行，clearInterval 停止对应定时器。',vocab:'effect · 副作用；interval · 间隔；clear · 清除；seconds · 秒数',
  notes:['function（函数）定义 StudyTimer（学习计时器）组件。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 seconds（秒数）和 setSeconds（更新秒数），初始值为 0。','React（界面库）的 useEffect（副作用钩子）接收一个函数，在组件提交到界面后运行。','const（声明）创建 timer（计时器标识），setInterval（按间隔重复执行）注册回调。','setSeconds（更新秒数）使用更新函数，将 previous（前一次秒数）加 1。','结束 setInterval（按间隔重复执行）的回调，1000 表示间隔 1000 毫秒。','return（返回）清理函数，调用 clearInterval（清除定时器）停止 timer（计时器标识）。','结束 useEffect（副作用钩子）调用；空数组 [] 表示副作用不依赖组件中的响应式值。','return（返回）p（段落）显示 seconds（秒数）。','右花括号结束 StudyTimer（学习计时器）组件。'],
  component:'StudyTimer',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'本页面只展示代码和初始效果；实际计时需在 React 项目运行，不会持久保存或连接网络。',guide:['定时器建立在副作用中；返回清理函数可避免组件离开后继续计时。','浏览器可能延迟定时器，计数不保证精确经过时间；需要精确时应依据时间差计算。'],advanced:true
 }
,
 {
  id:'react-task-progress-filter',title:'任务进度与待办筛选',subtitle:'从同一份任务状态计算界面',
  explain:'组件维护任务和筛选开关；完成数和可见任务都从当前状态计算，进度条随完成数变化。点击任务切换完成状态，开启只看待办后可看到空结果。示例数据只保存在当前页面。',
  code:'function TaskProgress() {\n  const [tasks, setTasks] = React.useState([{ id: 1, title: "阅读", done: false }, { id: 2, title: "复习", done: false }])\n  const [pendingOnly, setPendingOnly] = React.useState(false)\n  const count = tasks.filter(task => task.done).length\n  const visible = pendingOnly ? tasks.filter(task => !task.done) : tasks\n  function toggle(id) {\n    setTasks(previous => previous.map(task => task.id === id ? { ...task, done: !task.done } : task))\n  }\n  return <section>\n    <p>已完成：{count} / {tasks.length}</p>\n    <progress aria-label="任务完成进度" value={count} max={tasks.length} />\n    <button onClick={() => setPendingOnly(previous => !previous)}>{pendingOnly ? "显示全部" : "只看待办"}</button>\n    {visible.length === 0 ? <p>暂无待办</p> : <ul>{visible.map(task => <li key={task.id}><button onClick={() => toggle(task.id)}>{task.title}：{task.done ? "已完成" : "未完成"}</button></li>)}</ul>}\n  </section>\n}',
  output:'阅读：未完成\n复习：未完成',question:'为什么不单独保存已完成数量？',options:['可以从任务状态计算，避免数量不同步','因为 React 不能保存数字','因为会自动上传服务器'],answer:0,
  explanation:'count 由当前 tasks 筛选计算，切换任务后随渲染更新；visible 也根据筛选开关和任务状态计算。',vocab:'pending · 待办；only · 仅；visible · 可见；previous · 前一次状态；count · 数量',
  notes:['function（函数）定义 TaskProgress（任务进度）组件。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 tasks（任务列表）和 setTasks（更新任务列表）；id（编号）、title（标题）、done（完成状态）为字段，false（假）表示未完成。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 pendingOnly（仅看待办）和 setPendingOnly（更新筛选开关），初始为 false（假）。','const（声明）创建 count（完成数量），tasks（任务列表）的 filter（筛选）保留 task（当前任务）中 done（完成状态）为真的项，再读取 length（长度）。','const（声明）创建 visible（可见任务）；pendingOnly（仅看待办）为真时用 filter（筛选）从 tasks（任务列表）中保留 task（当前任务）的 done（完成状态）为假的项，否则使用 tasks。','function（函数）定义 toggle（切换），接收 id（编号）。','setTasks（更新任务列表）接收 previous（前一次列表），用 map（映射）遍历 task（当前任务）；id（编号）匹配时复制 task 并将 done（完成状态）取反。','右花括号结束 toggle（切换）函数。','return（返回）section（区域容器）。','p（段落）显示 count（完成数量）和 tasks（任务列表）的 length（长度）。','progress（进度条）的 aria-label（无障碍名称）为任务完成进度，value（当前值）取 count（完成数量），max（最大值）取 tasks（任务列表）的 length（长度）。','button（按钮）的 onClick（点击时）调用 setPendingOnly（更新筛选开关），将 previous（前一次状态）取反；根据 pendingOnly（仅看待办）决定按钮文字。','visible（可见任务）的 length（长度）为 0 时显示 p（段落）；否则用 ul（无序列表）和 map（映射）生成 li（列表项），key（标识）取 task（当前任务）的 id（编号），button（按钮）的 onClick（点击时）调用 toggle（切换），显示 title（标题）和 done（完成状态）。','结束 section（区域容器）。','右花括号结束 TaskProgress（任务进度）组件。'],
  component:'TaskProgress',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用页面内的固定数据；刷新后恢复初始状态，不连接服务器。',guide:['先完成一个任务，观察进度条和完成数，再切换“只看待办”，比较可见列表。','全部完成后显示空状态；点击“显示全部”可以再次看到已完成任务。']
 }
,
 {
  id:'react-add-unique-task',title:'添加任务并检查重复',subtitle:'受控表单与列表状态更新',
  explain:'用户提交任务标题后，先去掉首尾空格，拒绝空白和已有标题；有效时创建新列表并清空输入框。示例只在页面内存中保存，不连接服务器。',
  code:'function TaskForm() {\n  const [title, setTitle] = React.useState("")\n  const [tasks, setTasks] = React.useState(["阅读"])\n  const [message, setMessage] = React.useState("")\n  function submit(event) {\n    event.preventDefault()\n    const clean = title.trim()\n    if (!clean) { setMessage("请输入任务"); return }\n    if (tasks.includes(clean)) { setMessage("任务已存在"); return }\n    setTasks(previous => [...previous, clean])\n    setTitle("")\n    setMessage("已添加")\n  }\n  return <div><form onSubmit={submit}><label>任务标题<input value={title} onChange={event => setTitle(event.target.value)} /></label><button type="submit">添加</button><p>{message}</p></form><ul>{tasks.map(task => <li key={task}>{task}</li>)}</ul></div>\n}',
  output:'阅读',question:'输入“ 阅读 ”并提交会怎样？',options:['去除首尾空格后发现重复，显示提示','再添加一个相同任务','自动保存到服务器'],answer:0,
  explanation:'trim 后得到“阅读”，includes 发现已有相同标题，因此不更新任务列表。示例按区分大小写的字符串比较。',vocab:'submit · 提交；title · 标题；clean · 整理后的文字；includes · 包含；previous · 前一次状态',
  notes:['function（函数）定义 TaskForm（任务表单）组件。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 title（标题）和 setTitle（更新标题），初始为空文字。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 tasks（任务列表）和 setTasks（更新任务列表），初始包含“阅读”。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 message（提示信息）和 setMessage（更新提示），初始为空文字。','function（函数）定义 submit（提交）处理方法，接收 event（事件）。','event（事件）的 preventDefault（阻止默认行为）阻止浏览器默认提交。','const（声明）创建 clean（整理后的标题），title（标题）的 trim（去除首尾空格）得到结果。','if（如果）clean（整理后的标题）为空，setMessage（更新提示）显示输入提示，return（返回）结束提交。','if（如果）tasks（任务列表）的 includes（包含）检查 clean（整理后的标题）发现重复，setMessage（更新提示）显示提示，return（返回）结束提交。','setTasks（更新任务列表）接收 previous（前一次列表），通过展开 previous 并加入 clean（整理后的标题）创建新列表。','setTitle（更新标题）将输入清空。','setMessage（更新提示）显示添加成功。','右花括号结束 submit（提交）函数。','return（返回）div（容器）；form（表单）的 onSubmit（提交时）调用 submit（提交），label（标签）包含 input（输入框），value（值）为 title（标题），onChange（变化时）根据 event（事件）的 target（目标元素）的 value（值）调用 setTitle（更新标题）；button（按钮）的 type（类型）为 submit（提交），p（段落）显示 message（提示信息）；ul（无序列表）用 tasks（任务列表）的 map（映射）为 task（当前任务）生成 li（列表项），key（标识）使用 task。','右花括号结束 TaskForm（任务表单）组件。'],
  component:'TaskForm',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例数据只在页面内存中，刷新后恢复初始状态；实际运行需要配置 React 和 JSX。',guide:['依次提交空白、已有的“阅读”和新的“练习”，观察提示和列表。','此例仅比较整理后的标题，区分大小写；真实应用还需服务端验证及稳定编号。']
 }
,
 {
  id:'react-search-tasks',title:'按关键词搜索任务',subtitle:'受控输入与派生列表',
  explain:'组件保存搜索文字，根据整理后的关键词从固定任务中筛选。找不到匹配项时显示提示；清空关键词后恢复全部任务。示例不发起网络请求。',
  code:'function TaskSearch() {\n  const [query, setQuery] = React.useState("")\n  const tasks = [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }]\n  const keyword = query.trim()\n  const visible = tasks.filter(task => task.title.includes(keyword))\n  return <div><label>搜索任务<input value={query} onChange={event => setQuery(event.target.value)} /></label>{visible.length === 0 ? <p>没有匹配任务</p> : <ul>{visible.map(task => <li key={task.id}>{task.title}</li>)}</ul>}</div>\n}',
  output:'阅读\n复习',question:'清空搜索框后为什么显示全部任务？',options:['空字符串会匹配每个标题','自动从服务器下载','删除了筛选代码'],answer:0,
  explanation:'整理后的 keyword 为空字符串时，每个标题的 includes 都返回 true，因此显示全部任务。',vocab:'search · 搜索；query · 查询文字；keyword · 关键词；visible · 可见；filter · 筛选',
  notes:['function（函数）定义 TaskSearch（任务搜索）组件。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 query（查询文字）和 setQuery（更新查询文字），初始为空文字。','const（声明）创建 tasks（任务列表），每项包含 id（编号）和 title（标题）。','const（声明）创建 keyword（关键词），由 query（查询文字）的 trim（去除首尾空格）得到。','const（声明）创建 visible（可见任务），tasks（任务列表）的 filter（筛选）检查 task（当前任务）的 title（标题）是否 includes（包含）keyword（关键词）。','return（返回）div（容器）；label（标签）包含 input（输入框），value（值）为 query（查询文字），onChange（变化时）通过 event（事件）的 target（目标元素）的 value（值）调用 setQuery（更新查询文字）；visible（可见任务）的 length（长度）为 0 时显示 p（段落），否则用 ul（无序列表）和 map（映射）为 task（当前任务）生成 li（列表项），key（标识）使用 id（编号），显示 title（标题）。','右花括号结束 TaskSearch（任务搜索）组件。'],
  component:'TaskSearch',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用固定数据，实际交互需在 React 项目运行；不会连接服务器。',guide:['输入“阅读”只显示匹配任务；输入不存在的文字会显示空结果。','示例比较区分大小写；真实数据需要明确搜索规则、数据量和服务端查询方式。']
 }
,
 {
  id:'react-average-display',title:'展示学习时长统计',subtitle:'区分零分钟与没有记录',
  explain:'组件接收模拟的统计结果，用记录数决定是否显示平均值。零是有效数据，不能简单地用真假判断来代替空值判断；此例不请求服务器。',
  code:'function StudyStats({ stats }) {\n  if (stats.count === 0) {\n    return <p>暂无学习记录</p>\n  }\n  return <p>平均：{stats.average} 分钟</p>\n}',
  output:'平均：0 分钟',question:'记录数为 1、平均分钟数为 0 时应该显示什么？',options:['平均：0 分钟','暂无学习记录','自动读取服务器'],answer:0,
  explanation:'count 为 1 表示存在记录；即使平均值为 0，也应展示这个有效结果。',vocab:'stats · 统计数据；count · 记录数；average · 平均值；return · 返回',
  notes:['function（函数）定义 StudyStats（学习统计）组件，从属性中取出 stats（统计数据）。','if（如果）stats（统计数据）的 count（记录数）等于 0，进入空状态分支。','return（返回）p（段落）显示暂无学习记录。','右花括号结束 if（如果）分支。','return（返回）p（段落）显示 stats（统计数据）的 average（平均值）和分钟单位。','右花括号结束 StudyStats（学习统计）组件。'],
  component:'StudyStats',props:{stats:{count:1,average:0}},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'这是传入固定数据的组件示例，阅读页面不会发起请求；实际项目应先验证接口数据。',guide:['把 count 为 1、average 为 0 与 count 为 0、average 为 null 的情况对照阅读。','示例假设传入的数据有效；真实接口的加载、错误及字段校验需要另外处理。']
 }
,
 {
  id:'react-effect-request',title:'切换课程时处理异步结果',subtitle:'用副作用清理避免旧结果覆盖',
  explain:'组件根据课程编号模拟加载标题。编号变化或组件离开时，清理函数让旧操作的结果失效；示例不发起网络请求。',
  code:'function mockLoad(id) {\n  return Promise.resolve(id === 1 ? "阅读" : "复习")\n}\nfunction CourseLoader({ courseId, load = mockLoad }) {\n  const [state, setState] = React.useState({ status: "loading", title: "" })\n  React.useEffect(() => {\n    let active = true\n    setState({ status: "loading", title: "" })\n    load(courseId).then(\n      title => { if (active) setState({ status: "success", title }) },\n      () => { if (active) setState({ status: "error", title: "" }) }\n    )\n    return () => { active = false }\n  }, [courseId, load])\n  if (state.status === "loading") return <p>加载中</p>\n  if (state.status === "error") return <p>加载失败</p>\n  return <p>课程：{state.title}</p>\n}',
  output:'加载中',question:'旧请求在课程编号切换后返回时会怎样？',options:['清理函数让旧结果不再更新界面','自动覆盖新课程','自动写入数据库'],answer:0,
  explanation:'每次副作用都有自己的 active 标记；清理后旧回调不会更新状态。请求本身没有被取消。',vocab:'effect · 副作用；active · 有效；load · 加载；status · 状态；cleanup · 清理',
  notes:['function（函数）定义 mockLoad（模拟加载），接收 id（编号）。','return（返回）Promise（异步结果）的 resolve（以成功值完成），根据 id（编号）选择固定标题。','右花括号结束 mockLoad（模拟加载）函数。','function（函数）定义 CourseLoader（课程加载组件），从属性中读取 courseId（课程编号）和 load（加载函数）；未提供 load 时使用 mockLoad（模拟加载）。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 state（状态）和 setState（更新状态）；status（状态）初始为 loading（加载中），title（标题）为空。','React（界面库）的 useEffect（副作用钩子）接收处理函数。','let（可重新赋值声明）创建 active（有效标记），初始为 true（真）。','setState（更新状态）将 status（状态）设为 loading（加载中），title（标题）清空。','load（加载函数）接收 courseId（课程编号），then（完成后处理）接收成功和失败回调。','title（标题）为成功结果；if（如果）active（有效标记）为真，setState（更新状态）将 status（状态）设为 success（成功）并保存 title（标题）。','失败回调中 if（如果）active（有效标记）为真，setState（更新状态）将 status（状态）设为 error（错误）并清空 title（标题）。','结束 then（完成后处理）调用。','return（返回）清理函数，将 active（有效标记）设为 false（假）。','结束 useEffect（副作用钩子）调用；依赖数组包含 courseId（课程编号）和 load（加载函数）。','if（如果）state（状态）的 status（状态）为 loading（加载中），return（返回）p（段落）显示提示。','if（如果）state（状态）的 status（状态）为 error（错误），return（返回）p（段落）显示加载失败。','return（返回）p（段落）显示 state（状态）的 title（标题）。','右花括号结束 CourseLoader（课程加载组件）函数。'],
  component:'CourseLoader',props:{courseId:1},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用模拟加载函数，不连接服务器；实际项目需配合请求取消、数据校验和错误处理。',guide:['先观察加载状态，再比较编号变化后旧结果与新结果的处理。','load 应保持稳定的函数引用；变化时副作用会重新运行。清理函数只阻止旧回调更新界面，不会取消底层请求。'],advanced:true
 }
 ,
 {
  id:'react-topic-filter',title:'按学习主题筛选任务',subtitle:'受控下拉框与空结果',
  explain:'使用下拉框选择主题，再根据选择筛选固定任务；选择全部时显示所有任务，没有匹配时显示提示。示例数据只保存在组件中。',
  code:'function TopicFilter() {\n  const [topic, setTopic] = React.useState("all")\n  const tasks = [{ id: 1, title: "阅读", topic: "Python" }, { id: 2, title: "练习", topic: "React" }]\n  const visible = tasks.filter(task => topic === "all" || task.topic === topic)\n  return <div><label>学习主题<select value={topic} onChange={event => setTopic(event.target.value)}><option value="all">全部</option><option value="Python">Python</option><option value="React">React</option><option value="Java">Java</option></select></label>{visible.length === 0 ? <p>暂无任务</p> : <ul>{visible.map(task => <li key={task.id}>{task.title}</li>)}</ul>}</div>\n}',
  output:'阅读\n练习',question:'选择 Java 后为什么显示暂无任务？',options:['示例中没有 Java 任务','任务被永久删除','服务器拒绝访问'],answer:0,
  explanation:'固定列表没有 topic 为 Java 的任务，筛选结果为空；原始任务列表没有被修改。',vocab:'topic · 主题；filter · 筛选；visible · 可见；select · 下拉框；option · 选项',
  notes:['function（函数）定义 TopicFilter（主题筛选）组件。','const（声明）通过 React（界面库）的 useState（状态钩子）创建 topic（当前主题）和 setTopic（更新主题），初始 all（全部）。','const（声明）创建 tasks（任务列表）；id（编号）、title（标题）和 topic（主题）分别描述任务，Python 和 React 是示例主题。','const（声明）创建 visible（可见任务）；tasks（任务列表）的 filter（筛选）检查当前 topic（主题）是否为 all（全部），或者 task（当前任务）的 topic（主题）是否与之相同。','return（返回）div（容器）；label（标签）包含 select（下拉框），value（值）是 topic（主题），onChange（变化时）通过 event（事件）的 target（目标元素）的 value（值）调用 setTopic（更新主题）；option（选项）提供 all（全部）、Python、React、Java 主题。visible（可见任务）的 length（数量）为 0 时显示 p（段落），否则用 ul（无序列表）和 map（映射）为 task（任务）生成 li（列表项），key（标识）使用 id（编号），显示 title（标题）。','右花括号结束 TopicFilter（主题筛选）组件。'],
  component:'TopicFilter',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'使用本地固定数据，实际交互需在 React 项目运行；不会连接服务器或保存筛选条件。',guide:['依次选择 Python、Java、全部，观察筛选结果和空状态。','筛选只产生新数组，不会修改或删除原任务；主题值需要与数据中的值一致。']
 }
 ,
 {
  id:'react-combined-filter',title:'组合主题和关键词筛选',subtitle:'两个条件同时生效并可重置',
  explain:'在主题筛选的基础上加入关键词，两个条件都满足才显示任务。重置按钮会清空关键词并恢复全部主题；示例不连接服务器。',
  code:'function CombinedFilter() {\n  const [topic, setTopic] = React.useState("all")\n  const [query, setQuery] = React.useState("")\n  const tasks = [{ id: 1, title: "Python 阅读", topic: "Python" }, { id: 2, title: "Python 练习", topic: "Python" }, { id: 3, title: "React 练习", topic: "React" }]\n  const keyword = query.trim()\n  const visible = tasks.filter(task => (topic === "all" || task.topic === topic) && task.title.includes(keyword))\n  function reset() {\n    setTopic("all")\n    setQuery("")\n  }\n  return <div><label>主题<select value={topic} onChange={event => setTopic(event.target.value)}><option value="all">全部</option><option value="Python">Python</option><option value="React">React</option></select></label><label>关键词<input value={query} onChange={event => setQuery(event.target.value)} /></label><button onClick={reset}>重置</button>{visible.length === 0 ? <p>没有匹配任务</p> : <ul>{visible.map(task => <li key={task.id}>{task.title}</li>)}</ul>}</div>\n}',
  output:'Python 阅读\nPython 练习\nReact 练习',question:'主题为 Python，关键词为练习时显示什么？',options:['Python 练习','全部练习','所有 Python 任务'],answer:0,
  explanation:'筛选使用 && 同时检查主题和标题，只有 Python 练习同时满足两个条件。',vocab:'combined · 组合；filter · 筛选；topic · 主题；query · 查询文字；keyword · 关键词；reset · 重置',
  notes:['function（函数）定义 CombinedFilter（组合筛选）组件。','const（声明）使用 React（界面库）的 useState（状态钩子）创建 topic（主题）与 setTopic（更新主题），初始为 all（全部）。','const（声明）使用 React（界面库）的 useState（状态钩子）创建 query（查询文字）与 setQuery（更新查询文字），初始为空。','const（声明）创建 tasks（任务列表），每项包含 id（编号）、title（标题）和 topic（主题）；Python 和 React 是示例主题。','const（声明）创建 keyword（关键词），用 query（查询文字）的 trim（去除首尾空格）得到。','const（声明）创建 visible（可见任务）；tasks（任务列表）的 filter（筛选）逐个检查 task（任务）；topic（主题）为 all（全部）或与 task.topic（任务主题）相同时，再检查 title（标题）是否 includes（包含）keyword（关键词）。','function（函数）定义 reset（重置）操作。','setTopic（更新主题）恢复 all（全部）。','setQuery（更新查询文字）清空输入。','右花括号结束 reset（重置）函数。','return（返回）div（容器）；label（标签）包含 select（下拉框）和 input（输入框），value（值）分别绑定 topic（主题）和 query（查询文字），onChange（变化时）通过 event（事件）的 target（目标元素）的 value（值）调用 setTopic（更新主题）或 setQuery（更新查询文字）；option（选项）提供 all（全部）、Python 和 React。button（按钮）的 onClick（点击时）调用 reset（重置）。visible（可见任务）的 length（长度）为 0 时显示 p（段落），否则用 ul（无序列表）和 map（映射）为 task（任务）生成 li（列表项），key（标识）使用 id（编号），显示 title（标题）。','右花括号结束 CombinedFilter（组合筛选）组件。'],
  component:'CombinedFilter',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用固定数据；实际交互需在 React 项目运行，不连接服务器。',guide:['先选 Python，再输入“练习”，观察只有同时符合两个条件的任务出现。','关键词会去除首尾空格；重置只改变筛选条件，不会修改任务。']
 }
 ,
 {
  id:'react-task-pages',title:'分页浏览学习任务',subtitle:'页码状态与首末页按钮',
  explain:'页面每次显示两条固定任务。上一页和下一页在边界处禁用；如果传入空列表，显示暂无任务。示例不请求服务器，也不保存页码。',
  code:'const sampleTasks = [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }, { id: 3, title: "练习" }]\nfunction TaskPages({ tasks = sampleTasks }) {\n  const [page, setPage] = React.useState(1)\n  const size = 2\n  const totalPages = Math.max(1, Math.ceil(tasks.length / size))\n  const current = Math.min(page, totalPages)\n  const visible = tasks.slice((current - 1) * size, current * size)\n  return <section>{visible.length === 0 ? <p>暂无任务</p> : <ul>{visible.map(task => <li key={task.id}>{task.title}</li>)}</ul>}<p>第 {current} / {totalPages} 页</p><button disabled={current === 1} onClick={() => setPage(current - 1)}>上一页</button><button disabled={current === totalPages} onClick={() => setPage(current + 1)}>下一页</button></section>\n}',
  output:'阅读\n复习',question:'最后一页为什么不能继续点击下一页？',options:['按钮在当前页等于总页数时禁用','任务自动从服务器删除','浏览器关闭了页面'],answer:0,
  explanation:'当 current 等于 totalPages 时，下一页按钮的 disabled 为真；空列表按一页空结果展示。',vocab:'page · 页码；size · 每页数量；total · 总数；current · 当前；visible · 可见；disabled · 禁用',
  notes:['const（声明）创建 sampleTasks（示例任务列表），每项包含 id（编号）和 title（标题）。','function（函数）定义 TaskPages（任务分页）组件，接收 tasks（任务列表）属性，未提供时使用 sampleTasks（示例任务列表）。','const（声明）使用 React（界面库）的 useState（状态钩子）创建 page（页码）和 setPage（设置页码），初始为 1。','const（声明）创建 size（每页数量），固定为 2。','const（声明）创建 totalPages（总页数），Math（数学工具）的 ceil（向上取整）计算 tasks（任务列表）的 length（长度）除以 size（每页数量）；Math 的 max（取较大值）使空列表也显示一页。','const（声明）创建 current（当前页），Math（数学工具）的 min（取较小值）确保 page（页码）不超过 totalPages（总页数）。','const（声明）创建 visible（可见任务），tasks（任务列表）的 slice（切片）按 current（当前页）与 size（每页数量）计算范围。','return（返回）section（区域）；visible（可见任务）的 length（长度）为 0 时显示 p（段落），否则通过 ul（无序列表）和 map（映射）为 task（任务）生成 li（列表项），key（标识）取 id（编号），显示 title（标题）。p（段落）显示 current（当前页）与 totalPages（总页数）；button（按钮）的 disabled（禁用）限制边界，onClick（点击时）调用 setPage（设置页码）。','右花括号结束 TaskPages（任务分页）组件。'],
  component:'TaskPages',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例使用本地固定数据，实际交互需在 React 项目运行；不连接服务器。',guide:['点击下一页、上一页，观察列表与按钮的变化。','空列表按第 1 / 1 页显示；数据缩短时 current 会限制在可显示范围内，本例不实现服务端分页。']
 }
 ,
 {
  id:'react-accessible-title',title:'让表单错误提示更清楚',subtitle:'关联输入框与错误说明',
  explain:'提交空白标题时显示错误，并用 aria-invalid 与 aria-describedby 将错误状态和说明关联到输入框；修正后再次提交会清除错误。示例只更新页面状态。',
  code:'function TitleForm() {\n  const [title, setTitle] = React.useState("")\n  const [error, setError] = React.useState("")\n  const [message, setMessage] = React.useState("")\n  function submit(event) {\n    event.preventDefault()\n    const clean = title.trim()\n    if (!clean) { setError("请输入标题"); setMessage(""); return }\n    setError("")\n    setMessage("已提交：" + clean)\n  }\n  return <form onSubmit={submit}><label htmlFor="title">课程标题</label><input id="title" value={title} onChange={event => setTitle(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "title-error" : undefined} />{error && <p id="title-error" role="alert">{error}</p>}<button type="submit">提交</button><p>{message}</p></form>\n}',
  output:'课程标题提交',question:'为什么输入错误时要设置 aria-describedby？',options:['将输入框关联到错误说明','自动把数据保存到数据库','自动修改用户输入'],answer:0,
  explanation:'aria-describedby 指向错误提示的 id，辅助技术可关联输入框与说明；aria-invalid 表示当前值无效。',vocab:'accessible · 无障碍；invalid · 无效；describe · 描述；submit · 提交；error · 错误',
  notes:['function（函数）定义 TitleForm（标题表单）组件。','const（声明）使用 React（界面库）的 useState（状态钩子）创建 title（标题）和 setTitle（更新标题），初始为空。','const（声明）使用 React（界面库）的 useState（状态钩子）创建 error（错误信息）和 setError（更新错误），初始为空。','const（声明）使用 React（界面库）的 useState（状态钩子）创建 message（提示信息）和 setMessage（更新提示），初始为空。','function（函数）定义 submit（提交），接收 event（事件）。','event（事件）的 preventDefault（阻止默认行为）阻止浏览器默认表单提交。','const（声明）创建 clean（整理后的标题），title（标题）经 trim（去除首尾空格）得到。','if（如果）clean（整理后的标题）为空，setError（更新错误）显示提示，setMessage（更新提示）清空旧结果，return（返回）结束提交。','setError（更新错误）清空错误信息。','setMessage（更新提示）显示提交结果和 clean（整理后的标题）。','右花括号结束 submit（提交）函数。','return（返回）form（表单）的 onSubmit（提交时）调用 submit（提交）；label（标签）的 htmlFor（关联控件）指向 title（标题）输入框；input（输入框）的 id（标识）为 title，value（值）绑定 title，onChange（变化时）通过 event（事件）的 target（目标元素）value（值）调用 setTitle（更新标题）；aria-invalid（无效状态）由 Boolean（转布尔值）检查 error（错误），aria-describedby（关联说明）在有错误时指向 title-error（标题错误），否则为 undefined（未定义）；p（段落）的 id 为 title-error，role（角色）为 alert（提醒），显示 error；button（按钮）的 type（类型）为 submit（提交）；最后的 p 显示 message（提示）。','右花括号结束 TitleForm（标题表单）组件。'],
  component:'TitleForm',props:{},language:'JavaScript · React JSX',commentPrefix:'//',outputLabel:'页面初始效果（示意）',notice:'示例只更新页面状态，不保存数据；实际辅助技术效果需要在目标设备上验证。',guide:['先提交空白标题，再输入有效标题并提交，观察错误和提示的变化。','aria 属性帮助表达状态和关联说明；仍需结合真实浏览器和辅助技术测试。']
 }
];
