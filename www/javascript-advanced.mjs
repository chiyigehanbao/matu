export const javascriptAdvanced = [
  {
    "id": "js-map",
    "title": "映射：把每一项变成新值",
    "subtitle": "从已有数组产生新数组",
    "explain": "map 会对数组的每个元素调用函数，并把返回值组成新数组。",
    "code": "const numbers = [1, 2, 3]\nconst doubled = numbers.map(number => number * 2)\nconsole.log(doubled)",
    "output": "[ 2, 4, 6 ]",
    "question": "map 在示例中得到什么？",
    "options": [
      "每个数字乘 2 的新数组",
      "自动删除原数组",
      "数据库连接"
    ],
    "answer": 0,
    "explanation": "map 根据回调的结果构造新数组，不会因本例自动删除原数组。",
    "vocab": "map · 映射；doubled · 翻倍后的",
    "notes": [
      "const（声明）创建 numbers（数字数组），包含 1、2、3。",
      "const（声明）创建 doubled（翻倍后的数组）；numbers（数字数组）的 map（映射）让 number（当前数字）乘 2。",
      "console（控制台）的 log（记录/输出）显示 doubled（翻倍后的数组）。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "map 会对数组的每个元素调用函数，并把返回值组成新数组。",
      "map 根据回调的结果构造新数组，不会因本例自动删除原数组。"
    ],
    "advanced": true
  },
  {
    "id": "js-filter",
    "title": "筛选数组",
    "subtitle": "只保留符合条件的元素",
    "explain": "filter 会根据回调函数的真假结果生成新数组。",
    "code": "const numbers = [1, 2, 3]\nconst passed = numbers.filter(number => number > 1)\nconsole.log(passed)",
    "output": "[ 2, 3 ]",
    "question": "哪些数字会留下？",
    "options": [
      "2 和 3",
      "只有 1",
      "所有数字"
    ],
    "answer": 0,
    "explanation": "条件 number > 1 只对 2 和 3 成立。",
    "vocab": "filter · 筛选；passed · 通过的",
    "notes": [
      "const（声明）创建 numbers（数字数组）。",
      "const（声明）创建 passed（通过筛选的数组）；numbers（数字数组）的 filter（筛选）只保留 number（当前数字）大于 1 的值。",
      "console（控制台）的 log（记录/输出）显示 passed（通过筛选的数组）。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "filter 会根据回调函数的真假结果生成新数组。",
      "条件 number > 1 只对 2 和 3 成立。"
    ],
    "advanced": true
  },
  {
    "id": "js-destructure",
    "title": "对象解构",
    "subtitle": "一次取得对象中的多个属性",
    "explain": "解构赋值可以按属性名从对象中取值，并保存到对应变量。",
    "code": "const user = { name: \"小明\", age: 18 }\nconst { name, age } = user\nconsole.log(name, age)",
    "output": "小明 18",
    "question": "name 从哪里取得？",
    "options": [
      "user 的 name 属性",
      "网络地址",
      "数据库自动生成"
    ],
    "answer": 0,
    "explanation": "解构语句从 user 对象中按名字读取 name 和 age。",
    "vocab": "destructure · 解构；age · 年龄",
    "notes": [
      "const（声明）创建 user（用户）对象，name（名字）和 age（年龄）是属性。",
      "const（声明）通过解构从 user（用户）取出 name（名字）和 age（年龄）。",
      "console（控制台）的 log（记录/输出）显示 name（名字）和 age（年龄）。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "解构赋值可以按属性名从对象中取值，并保存到对应变量。",
      "解构语句从 user 对象中按名字读取 name 和 age。"
    ],
    "advanced": true
  },
  {
    "id": "js-spread",
    "title": "展开运算符",
    "subtitle": "创建包含旧内容的新数组",
    "explain": "展开运算符 ... 可以把可迭代对象的元素展开。示例创建新数组，原数组仍然存在。",
    "code": "const original = [1, 2]\nconst updated = [...original, 3]\nconsole.log(original.length, updated.length)",
    "output": "2 3",
    "question": "updated 有几项？",
    "options": [
      "3 项",
      "2 项",
      "0 项"
    ],
    "answer": 0,
    "explanation": "updated 包含 original 的两项以及新加的 3，共三项。",
    "vocab": "spread · 展开；original · 原来的",
    "notes": [
      "const（声明）创建 original（原数组），包含 1 和 2。",
      "const（声明）创建 updated（更新后的数组）；...original（展开原数组）后再加入 3。",
      "console（控制台）的 log（记录/输出）分别显示 original（原数组）和 updated（更新后的数组）的 length（长度）。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "展开运算符 ... 可以把可迭代对象的元素展开。示例创建新数组，原数组仍然存在。",
      "updated 包含 original 的两项以及新加的 3，共三项。"
    ],
    "advanced": true
  },
  {
    "id": "js-try",
    "title": "处理异常",
    "subtitle": "给可能失败的步骤准备提示",
    "explain": "try 中发生异常时，匹配的 catch 可以接收错误并处理。本例主动创建示例错误，没有访问网络。",
    "code": "try {\n  throw new Error(\"示例错误\")\n} catch (error) {\n  console.log(error.message)\n}",
    "output": "示例错误",
    "question": "catch 接收到的 error 是什么？",
    "options": [
      "抛出的错误对象",
      "用户密码",
      "网络连接"
    ],
    "answer": 0,
    "explanation": "throw 抛出 Error 对象，catch 的 error 参数接收该错误。",
    "vocab": "throw · 抛出；error · 错误",
    "notes": [
      "try（尝试）开始可能发生错误的代码块。",
      "throw（抛出）通过 new（创建）Error（错误对象）生成的示例错误。",
      "catch（捕获）接收 error（错误对象）。",
      "console（控制台）的 log（记录/输出）显示 error（错误对象）的 message（消息）。",
      "右花括号结束 catch（捕获）代码块。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "try 中发生异常时，匹配的 catch 可以接收错误并处理。本例主动创建示例错误，没有访问网络。",
      "throw 抛出 Error 对象，catch 的 error 参数接收该错误。"
    ],
    "advanced": true
  },
  {
    "id": "js-async",
    "title": "async 与 await",
    "subtitle": "等待异步结果后继续",
    "explain": "async 函数返回 Promise；await 可以在异步函数内等待 Promise 完成。示例使用本地完成的结果。",
    "code": "async function read() {\n  const value = await Promise.resolve(\"完成\")\n  return value\n}\nconsole.log(await read())",
    "output": "完成",
    "question": "这个例子会请求网络吗？",
    "options": [
      "不会",
      "会请求真实服务器",
      "会自动上传文件"
    ],
    "answer": 0,
    "explanation": "Promise.resolve 只创建一个已完成的 Promise，本例没有网络请求。",
    "vocab": "async · 异步；await · 等待",
    "notes": [
      "async（异步）function（函数）定义 read（读取）异步函数。",
      "const（声明）创建 value（值），通过 await（等待）取得 Promise（异步结果对象）的 resolve（以成功值完成）的结果。",
      "return（返回）把 value（值）交回去。",
      "右花括号结束 read（读取）函数。",
      "console（控制台）的 log（记录/输出）显示 await（等待）read（读取）得到的结果。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "async 函数返回 Promise；await 可以在异步函数内等待 Promise 完成。示例使用本地完成的结果。",
      "Promise.resolve 只创建一个已完成的 Promise，本例没有网络请求。"
    ],
    "advanced": true
  },
  {
    "id": "js-module",
    "title": "模块导出",
    "subtitle": "把功能提供给其他文件",
    "explain": "export 可以把模块中的声明提供给其他模块导入。本例同时在同一文件中调用函数以展示结果。",
    "code": "export function double(value) {\n  return value * 2\n}\nconsole.log(double(3))",
    "output": "6",
    "question": "export 的作用是什么？",
    "options": [
      "让其他模块可以导入声明",
      "自动把代码上传互联网",
      "运行数据库迁移"
    ],
    "answer": 0,
    "explanation": "export 提供模块导出；它不会自动上传代码或访问数据库。",
    "vocab": "export · 导出；double · 翻倍",
    "notes": [
      "export（导出）function（函数）定义 double（翻倍），接收 value（值）参数。",
      "return（返回）将 value（值）乘 2 的结果交给调用方。",
      "右花括号结束 double（翻倍）函数。",
      "console（控制台）的 log（记录/输出）显示 double（翻倍）处理数字 3 的结果。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "export 可以把模块中的声明提供给其他模块导入。本例同时在同一文件中调用函数以展示结果。",
      "export 提供模块导出；它不会自动上传代码或访问数据库。"
    ],
    "advanced": true
  },
  {
    "id": "js-fetch",
    "title": "读取接口数据",
    "subtitle": "理解网络成功与失败的分支",
    "explain": "fetch 可发起网络请求；示例使用占位地址并检查状态与数据类型。阅读页面不会执行请求，真实使用需替换成可用服务。",
    "code": "async function loadLessons() {\n  try {\n    const response = await fetch(\"https://example.com/api/lessons\")\n    if (!response.ok) { throw new Error(\"请求失败\") }\n    const lessons = await response.json()\n    if (!Array.isArray(lessons)) { throw new Error(\"格式错误\") }\n    console.log(lessons.length)\n  } catch (error) {\n    console.log(\"读取失败\")\n  }\n}\nloadLessons()",
    "output": "假设接口返回一条课程：控制台显示 1。请求或格式失败时显示“读取失败”。",
    "question": "阅读此课程页面会发起示例请求吗？",
    "options": [
      "不会",
      "会自动访问真实服务器",
      "会上传用户数据"
    ],
    "answer": 0,
    "explanation": "示例中的 example.com 是占位域名；阅读课程不会自动访问网络。",
    "vocab": "fetch · 获取；response · 响应；error · 错误",
    "notes": [
      "async（异步）function（函数）定义 loadLessons（加载课程）函数。",
      "try（尝试）开始可能失败的请求流程。",
      "const（声明）创建 response（响应），await（等待）fetch（获取）请求 https（加密传输协议）下的 example.com（示例域名），api（接口）和 lessons（课程）是示例路径。",
      "if（如果）response（响应）的 ok（成功状态）不为真，throw（抛出）通过 new（创建）Error（错误对象）生成的请求错误。",
      "const（声明）创建 lessons（课程数据），await（等待）response（响应）的 json（解析 JSON 数据）方法。",
      "if（如果）Array（数组类型）的 isArray（是否数组）检查 lessons（课程数据）不为真，throw（抛出）通过 new（创建）Error（错误对象）生成的格式错误。",
      "console（控制台）的 log（记录/输出）显示 lessons（课程数组）的 length（长度）。",
      "catch（捕获）接收 error（错误对象），处理请求或解析失败。",
      "console（控制台）的 log（记录/输出）显示“读取失败”。",
      "右花括号结束 catch（捕获）代码块。",
      "右花括号结束 loadLessons（加载课程）函数。",
      "loadLessons（加载课程）调用示例函数。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "fetch 可发起网络请求；示例使用占位地址并检查状态与数据类型。阅读页面不会执行请求，真实使用需替换成可用服务。",
      "示例中的 example.com 是占位域名；阅读课程不会自动访问网络。"
    ],
    "advanced": true,
    "needsMockNetwork": true,
    "outputLabel": "示例结果（模拟）",
    "notice": "example.com 是占位域名，本页面不会访问它；运行时还需按服务约定检查每条数据的字段。"
  },
  {
    "id": "js-find",
    "title": "查找数组中的一项",
    "subtitle": "找到匹配项，也处理找不到的情况",
    "explain": "find 返回第一个满足条件的元素；没有匹配项时返回 undefined。可选链和空值合并可以在找不到时显示备用文字。",
    "code": "const tasks = [{ id: 1, title: \"阅读\" }, { id: 2, title: \"复习\" }]\nconst result = tasks.find(task => task.id === 2)\nconsole.log(result?.title ?? \"未找到\")",
    "output": "复习",
    "question": "找不到编号 2 时显示什么？",
    "options": [
      "未找到",
      "自动创建任务",
      "访问数据库"
    ],
    "answer": 0,
    "explanation": "find 找不到时返回 undefined；可选链和 ?? 让示例显示备用文字。",
    "vocab": "find · 查找；result · 结果；title · 标题",
    "notes": [
      "const（声明）创建 tasks（任务数组）；每项的 id（编号）和 title（标题）是示例属性。",
      "const（声明）创建 result（结果）；tasks（任务数组）的 find（查找）依次检查 task（当前任务）的 id（编号）是否严格等于 2。",
      "console（控制台）的 log（记录/输出）读取 result（结果）的 title（标题）；?.（可选链）在结果为空时避免继续读取，??（空值合并）提供“未找到”。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "find 返回第一个满足条件的元素；没有匹配项时返回 undefined。可选链和空值合并可以在找不到时显示备用文字。",
      "find 找不到时返回 undefined；可选链和 ?? 让示例显示备用文字。"
    ],
    "advanced": true
  },
  {
    "id": "js-reduce",
    "title": "汇总数组中的数值",
    "subtitle": "用初始值累加学习时间",
    "explain": "reduce 可以把数组逐项归并成一个结果。示例以 0 为初始值累加分钟数；空数组也会得到 0。",
    "code": "const minutes = [20, 15, 10]\nconst total = minutes.reduce((sum, item) => sum + item, 0)\nconsole.log(total)",
    "output": "45",
    "question": "如果 minutes 为空数组，示例得到什么？",
    "options": [
      "0",
      "必然报错",
      "自动访问服务器"
    ],
    "answer": 0,
    "explanation": "示例明确提供了初始值 0，空数组没有其他项目可累加，所以结果是 0。",
    "vocab": "reduce · 归并；sum · 总和；item · 项目",
    "notes": [
      "const（声明）创建 minutes（分钟数数组），保存三次示例学习时长。",
      "const（声明）创建 total（总计）；minutes（分钟数数组）的 reduce（归并）把 sum（累计值）与 item（当前项）相加，初始值是 0。",
      "console（控制台）的 log（记录/输出）显示 total（总计）。"
    ],
    "language": "JavaScript",
    "commentPrefix": "//",
    "guide": [
      "reduce 可以把数组逐项归并成一个结果。示例以 0 为初始值累加分钟数；空数组也会得到 0。",
      "示例明确提供了初始值 0，空数组没有其他项目可累加，所以结果是 0。"
    ],
    "advanced": true
  }
,
 {
  id:'js-sort-copy',title:'数字排序与保留原数组',subtitle:'先复制，再按数字大小排序',
  explain:'sort 默认会修改调用它的数组，默认比较也会把元素转成字符串。示例先用展开语法复制，再用比较函数按数字升序排列。',
  code:'const minutes = [10, 2, 30]\nconst sorted = [...minutes].sort((a, b) => a - b)\nconsole.log("排序后：", sorted.join(","))\nconsole.log("原数组：", minutes.join(","))',
  output:'排序后： 2,10,30\n原数组： 10,2,30',question:'为什么先写 [...minutes]？',options:['复制数组，避免 sort 改变原数组','自动连接数据库','把数字转成日期'],answer:0,
  explanation:'展开语法创建一个新的数组；sort 修改的是这个副本，原数组顺序保持不变。',vocab:'sort · 排序；minutes · 分钟数；join · 连接',
  notes:['const（声明）创建 minutes（分钟数数组），包含 10、2、30。','const（声明）创建 sorted（排序结果）；...minutes（展开分钟数数组）生成副本，sort（排序）通过 a（第一个比较值）减 b（第二个比较值）按数字升序排列。','console（控制台）的 log（记录/输出）显示 sorted（排序结果）通过 join（连接）用逗号连接后的文字。','console（控制台）的 log（记录/输出）显示 minutes（原分钟数数组）通过 join（连接）用逗号连接后的文字。'],
  language:'JavaScript',commentPrefix:'//',guide:['sort 会原地修改调用它的数组；复制后排序可以保留原数组的顺序。','数字比较函数返回负数、零或正数，决定两个元素的先后关系。'],advanced:true
 }
,
 {
  id:'js-unique-topics',title:'为学习主题去重',subtitle:'用 Set 保留不重复的文字',
  explain:'Set 可以保存不重复的值，并按首次插入的顺序遍历。示例把主题数组放入 Set，再展开成新数组；原数组不会改变。',
  code:'const topics = ["Python", "Java", "Python"]\nconst unique = [...new Set(topics)]\nconsole.log("主题：", unique.join(","))\nconsole.log("原数量：", topics.length)',
  output:'主题： Python,Java\n原数量： 3',question:'去重后主题的顺序是什么？',options:['Python、Java，按首次出现顺序','Java、Python，自动按字母排序','随机顺序'],answer:0,
  explanation:'Set 保留值首次插入的顺序；重复的 Python 不会再添加，原数组仍有三项。',vocab:'set · 集合；unique · 唯一；topics · 主题',
  notes:['const（声明）创建 topics（主题数组），Python、Java 是示例主题。','const（声明）创建 unique（去重结果）；new（新建）Set（不重复值集合）接收 topics（主题数组），展开语法生成新数组。','console（控制台）的 log（记录/输出）显示 unique（去重结果）通过 join（连接）用逗号连接的文字。','console（控制台）的 log（记录/输出）显示 topics（原主题数组）的 length（长度）。'],
  language:'JavaScript',commentPrefix:'//',guide:['这个例子对字符串值去重，原数组顺序和数量不变。','对象在 Set 中按引用区分；内容相同但分别创建的对象不会自动合并。'],advanced:true
 }
,
 {
  id:'js-update-task',title:'更新列表中的指定任务',subtitle:'生成新数组并保留原始任务',
  explain:'map 可以根据编号生成更新后的任务列表。示例只为匹配项创建新对象，其他项沿用原对象；原任务的完成状态不会被改写。',
  code:'const tasks = [{ id: 1, done: false }, { id: 2, done: false }]\nconst updated = tasks.map(task => task.id === 2 ? { ...task, done: true } : task)\nconsole.log("更新后：", updated[1].done)\nconsole.log("原状态：", tasks[1].done)\nconsole.log("其他任务：", updated[0].done)',
  output:'更新后： true\n原状态： false\n其他任务： false',question:'哪一项会得到新的完成状态？',options:['编号为 2 的任务','所有任务','原数组中的所有对象'],answer:0,
  explanation:'map 检查每项 id，只为编号 2 创建 done 为 true 的新对象；原数组中该任务仍为 false。',vocab:'task · 任务；updated · 更新后的；done · 完成状态',
  notes:['const（声明）创建 tasks（任务数组），每项有 id（编号）与 done（完成状态），false（假）表示未完成。','const（声明）创建 updated（更新后的数组），tasks（任务数组）的 map（映射）检查 task（当前任务）的 id（编号）；编号为 2 时复制 task 并把 done（完成状态）设为 true（真），否则返回 task。','console（控制台）的 log（记录/输出）显示 updated（更新后的数组）第二项的 done（完成状态）。','console（控制台）的 log（记录/输出）显示 tasks（原任务数组）第二项的 done（完成状态）。','console（控制台）的 log（记录/输出）显示 updated（更新后的数组）第一项的 done（完成状态）。'],
  language:'JavaScript',commentPrefix:'//',guide:['map 创建新数组，匹配项通过对象展开创建新对象。','未匹配项仍沿用原对象引用；需要修改嵌套数据时，还要考虑相应层级的复制。'],advanced:true
 }
,
 {
  id:'js-some-every',title:'判断任务是否完成',subtitle:'用 some 和 every 检查列表',
  explain:'some 判断是否至少有一项满足条件，every 判断是否所有项都满足。空数组的 every 返回 true，因此业务上可能还需单独检查是否有任务。',
  code:'const tasks = [{ done: true }, { done: false }]\nconst hasPending = tasks.some(task => !task.done)\nconst allDone = tasks.every(task => task.done)\nconst empty = []\nconsole.log("有待办：", hasPending)\nconsole.log("全部完成：", allDone)\nconsole.log("空列表全部满足：", empty.every(task => task.done))',
  output:'有待办： true\n全部完成： false\n空列表全部满足： true',question:'空数组调用 every 的结果是什么？',options:['true','false','自动新增一项'],answer:0,
  explanation:'空数组没有违反条件的元素，因此 every 返回 true；若业务要求至少一项，需要另加长度判断。',vocab:'some · 至少一项；every · 每一项；pending · 待完成',
  notes:['const（声明）创建 tasks（任务数组），done（完成状态）为 true（真）表示完成，false（假）表示未完成。','const（声明）创建 hasPending（是否有待办），tasks（任务数组）的 some（至少一项满足）检查 task（当前任务）的 done（完成状态）是否为假。','const（声明）创建 allDone（是否全部完成），tasks（任务数组）的 every（每一项满足）检查 task（当前任务）的 done（完成状态）。','const（声明）创建 empty（空数组）。','console（控制台）的 log（记录/输出）显示 hasPending（是否有待办）。','console（控制台）的 log（记录/输出）显示 allDone（是否全部完成）。','console（控制台）的 log（记录/输出）显示 empty（空数组）的 every（每一项满足）结果；task（当前任务）的 done（完成状态）是检查条件。'],
  language:'JavaScript',commentPrefix:'//',guide:['some 在空数组上返回 false；every 在空数组上返回 true。','是否将空列表视为“全部完成”取决于业务，可以先检查 length 是否大于 0。'],advanced:true
 }
,
 {
  id:'js-delete-task',title:'按编号移除任务',subtitle:'用 filter 创建新数组并保留原数组',
  explain:'filter 可以保留编号不等于目标编号的任务，从而得到移除后的新数组。原数组不会被 filter 修改；示例只使用内存数据。',
  code:'function removeTask(tasks, id) {\n  return tasks.filter(task => task.id !== id)\n}\nconst tasks = [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }]\nconst remaining = removeTask(tasks, 2)\nconsole.log("剩余：", remaining.map(task => task.title).join(","))\nconsole.log("原数量：", tasks.length)\nconsole.log("不存在时：", removeTask(tasks, 9).length)',
  output:'剩余： 阅读\n原数量： 2\n不存在时： 2',question:'目标编号不存在时，新数组包含多少项？',options:['2 项','0 项','自动连接服务器'],answer:0,
  explanation:'所有任务编号都不等于 9，因此 filter 保留两项；原数组始终不变。',vocab:'remove · 移除；remaining · 剩余；filter · 筛选；id · 编号',
  notes:['function（函数）定义 removeTask（移除任务），接收 tasks（任务数组）和 id（目标编号）。','return（返回）tasks（任务数组）经 filter（筛选）保留 task（当前任务）的 id（编号）不等于目标 id 的新数组。','右花括号结束 removeTask（移除任务）函数。','const（声明）创建 tasks（任务数组），每项有 id（编号）和 title（标题）。','const（声明）创建 remaining（剩余任务），由 removeTask（移除任务）处理 tasks（任务数组）和编号 2 得到。','console（控制台）的 log（输出）显示 remaining（剩余任务）的标题：map（映射）取得 task（当前任务）的 title（标题），join（连接）组成文字。','console（控制台）的 log（输出）显示 tasks（原任务数组）的 length（长度）。','console（控制台）的 log（输出）显示 removeTask（移除任务）处理 tasks（任务数组）与编号 9 后的新数组 length（长度）。'],
  language:'JavaScript',commentPrefix:'//',guide:['filter 创建新数组，但保留项仍引用原来的任务对象；它不是深拷贝。','编号不存在时所有项都会保留；实际项目可另行判断是否需要提示。'],advanced:true
 }
,
 {
  id:'js-parse-minutes',title:'检查输入的学习分钟数',subtitle:'先检查文字，再转换数字',
  explain:'输入框通常提供字符串。示例先去掉首尾空格，只接受十进制数字字符，再检查转换结果是否为安全整数；不保存或发送数据。',
  code:'function showMinutes(input) {\n  const text = input.trim()\n  if (!/^[0-9]+$/.test(text)) return "请输入非负整数"\n  const minutes = Number(text)\n  if (!Number.isSafeInteger(minutes)) return "请输入非负整数"\n  return "分钟：" + minutes\n}\nconsole.log(showMinutes("0"))\nconsole.log(showMinutes(" 25 "))\nconsole.log(showMinutes("   "))\nconsole.log(showMinutes("-1"))\nconsole.log(showMinutes("1.5"))',
  output:'分钟：0\n分钟：25\n请输入非负整数\n请输入非负整数\n请输入非负整数',question:'为什么先检查空白输入？',options:['避免 Number 将空字符串转成 0','自动保存分钟数','让所有输入变成负数'],answer:0,
  explanation:'Number("") 会得到 0；示例先检查文字内容，避免把没有输入误认为 0 分钟。',vocab:'input · 输入；trim · 去除首尾空格；integer · 整数；minutes · 分钟数',
  notes:['function（函数）定义 showMinutes（显示分钟数），接收 input（输入文字）。','const（声明）创建 text（整理后的文字），对 input（输入文字）调用 trim（去除首尾空格）。','if（如果）正则表达式不匹配，return（返回）输入提示；test（测试）检查 text（整理后的文字）是否只包含至少一个 0 到 9 的数字字符；^ 表示开头，$ 表示结尾，+ 表示至少一个。','const（声明）创建 minutes（分钟数），由 Number（转数字）处理 text（整理后的文字）。','if（如果）Number（数字工具）的 isSafeInteger（是否为安全整数）检查 minutes（分钟数）为假，return（返回）输入提示。','return（返回）分钟提示与 minutes（分钟数）。','右花括号结束 showMinutes（显示分钟数）函数。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理 0 的结果。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理带空格的 25 的结果。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理空格的结果。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理负数文字的结果。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理小数文字的结果。'],
  language:'JavaScript',commentPrefix:'//',guide:['正则表达式要求至少一个十进制数字字符，不接受负号或小数点。','Number.isSafeInteger 排除超出安全整数范围的结果；真实服务端仍需独立校验。'],advanced:true
 }
,
 {
  id:'js-validate-summary',title:'检查接口汇总数据',subtitle:'先验证对象和分钟数再使用',
  explain:'示例模拟接口返回的学习汇总对象：先检查 totals 是否为对象，再验证每个分钟数是否为非负安全整数。这里只检查固定数据，不发起网络请求。',
  code:'function showSummary(data) {\n  if (!data || typeof data !== "object" || Array.isArray(data)) return "数据无效"\n  const totals = data.totals\n  if (!totals || typeof totals !== "object" || Array.isArray(totals)) return "数据无效"\n  const values = Object.values(totals)\n  if (!values.every(value => Number.isSafeInteger(value) && value >= 0)) return "数据无效"\n  return "主题数：" + values.length\n}\nconsole.log(showSummary({ totals: { Python: 35, Java: 0 } }))\nconsole.log(showSummary({ totals: {} }))\nconsole.log(showSummary(null))\nconsole.log(showSummary({ totals: [] }))\nconsole.log(showSummary({ totals: { Python: "35" } }))',
  output:'主题数：2\n主题数：0\n数据无效\n数据无效\n数据无效',question:'空的 totals 对象在这个示例中是否有效？',options:['有效，主题数为 0','无效，必须至少一个主题','自动从服务器填充'],answer:0,
  explanation:'空对象的 values 是空数组，every 返回 true，因此示例将它视为有效的空汇总。',vocab:'summary · 汇总；totals · 总计；values · 值；every · 每一项',
  notes:['function（函数）定义 showSummary（显示汇总），接收 data（待检查的数据）。','if（如果）data（数据）为空、typeof（查看类型）的结果不是 object（对象），或 Array（数组工具）的 isArray（是否为数组）检查 data 为真，return（返回）无效提示。','const（声明）创建 totals（总计对象），读取 data（数据）的 totals（总计字段）。','if（如果）totals（总计对象）为空、typeof（查看类型）的结果不是 object（对象），或 Array（数组工具）的 isArray（是否为数组）检查 totals 为真，return（返回）无效提示。','const（声明）创建 values（值数组），Object（对象工具）的 values（获取值）读取 totals（总计对象）的值。','if（如果）values（值数组）的 every（每一项满足）检查失败，return（返回）无效提示；每个 value（当前值）必须满足 Number（数字工具）的 isSafeInteger（是否为安全整数）并且大于或等于 0。','return（返回）主题数量提示与 values（值数组）的 length（长度）。','右花括号结束 showSummary（显示汇总）函数。','console（控制台）的 log（输出）显示 showSummary（显示汇总）处理 totals（总计对象）的结果；Python、Java 是示例主题。','console（控制台）的 log（输出）显示 showSummary（显示汇总）处理空 totals（总计对象）的结果。','console（控制台）的 log（输出）显示 showSummary（显示汇总）处理 null（空值）的结果。','console（控制台）的 log（输出）显示 showSummary（显示汇总）处理数组形式的 totals（总计字段）的结果。','console（控制台）的 log（输出）显示 showSummary（显示汇总）处理 totals（总计对象）中 Python（示例主题）对应字符串数字的结果。'],
  language:'JavaScript',commentPrefix:'//',guide:['先判断外层和 totals 是非 null 的对象且不是数组，再检查每个值；空对象允许通过。','本例假设数据来自 JSON；真实项目还需按业务验证主题名称、记录数量和总数范围。'],advanced:true
 }
,
 {
  id:'js-minute-batch-summary',title:'批量检查并汇总学习分钟',subtitle:'统计有效和无效输入',
  explain:'示例接收一组字符串，逐个检查是否为非负安全整数，并累计有效条数、总分钟和无效条数。为避免总和超出安全范围，超出时抛出错误；示例不保存数据。',
  code:'function summarizeMinutes(inputs) {\n  let count = 0\n  let total = 0\n  let invalid = 0\n  for (const input of inputs) {\n    const text = input.trim()\n    const value = Number(text)\n    if (!/^[0-9]+$/.test(text) || !Number.isSafeInteger(value)) {\n      invalid += 1\n      continue\n    }\n    if (!Number.isSafeInteger(total + value)) throw new Error("总分钟超出安全范围")\n    count += 1\n    total += value\n  }\n  return `有效：${count}，总分钟：${total}，无效：${invalid}`\n}\nconsole.log(summarizeMinutes(["0", " 25 ", "-1", "abc"]))\nconsole.log(summarizeMinutes([]))',
  output:'有效：2，总分钟：25，无效：2\n有效：0，总分钟：0，无效：0',question:'输入“0”会计入哪一类？',options:['有效输入，分钟数为 0','无效输入','自动上传服务器'],answer:0,
  explanation:'0 符合非负安全整数条件，会计入有效数量，但不增加总分钟。空字符串不会通过正则检查。',vocab:'summarize · 汇总；input · 输入；count · 数量；total · 总计；invalid · 无效的',
  notes:['function（函数）定义 summarizeMinutes（汇总分钟数），接收 inputs（输入字符串列表）。','let（可重新赋值的声明）创建 count（有效数量），初始为 0。','let（可重新赋值的声明）创建 total（总分钟），初始为 0。','let（可重新赋值的声明）创建 invalid（无效数量），初始为 0。','for（循环）让 const（声明）的 input（当前输入）依次取自 of（来自）inputs（输入列表）。','const（声明）创建 text（整理后的文字），input（当前输入）的 trim（去除首尾空格）处理输入。','const（声明）创建 value（数值），Number（转数字）处理 text（整理后的文字）。','if（如果）正则表达式的 test（测试）检查 text（整理后的文字）不是至少一个十进制数字（^ 表示开头、$ 表示结尾、+ 表示至少一个），或 Number（数字工具）的 isSafeInteger（是否为安全整数）检查 value（数值）失败，进入无效分支。','invalid（无效数量）增加 1。','continue（继续下一轮）跳过当前输入的后续计算。','右花括号结束 if（如果）分支。','if（如果）Number（数字工具）的 isSafeInteger（是否为安全整数）检查 total（总分钟）加 value（数值）失败，throw（抛出）new（新建）Error（错误对象）。','count（有效数量）增加 1。','total（总分钟）加上 value（数值）。','右花括号结束 for（循环）。','return（返回）模板字符串，${count}（插入有效数量）、${total}（插入总分钟）、${invalid}（插入无效数量）组成结果。','右花括号结束 summarizeMinutes（汇总分钟数）函数。','console（控制台）的 log（输出）显示 summarizeMinutes（汇总分钟数）处理四个输入的结果，abc 是无效文字。','console（控制台）的 log（输出）显示 summarizeMinutes（汇总分钟数）处理空列表的结果。'],
  language:'JavaScript',commentPrefix:'//',guide:['先检查输入文字格式，再确认数值和累计结果都在安全整数范围。','此例假设列表中的每一项都是字符串；来自外部的数据还需先检查类型。'],advanced:true
 }
,
 {
  id:'js-topic-safe-summary',title:'检查并按主题汇总记录',subtitle:'筛掉无效数据并保留零分钟',
  explain:'示例逐条检查固定学习记录，整理主题后按主题累加分钟数；无效项计入跳过数量。Map 可以安全地使用任意主题字符串作为键，不会保存数据。',
  code:'function summarize(records) {\n  const totals = new Map()\n  let skipped = 0\n  for (const record of records) {\n    if (!record || typeof record.topic !== "string" || !record.topic.trim() || !Number.isSafeInteger(record.minutes) || record.minutes < 0) {\n      skipped += 1\n      continue\n    }\n    const topic = record.topic.trim()\n    const total = (totals.get(topic) ?? 0) + record.minutes\n    if (!Number.isSafeInteger(total)) throw new Error("总分钟超出安全范围")\n    totals.set(topic, total)\n  }\n  for (const [topic, total] of totals) {\n    console.log(`${topic}：${total}`)\n  }\n  console.log(`跳过：${skipped}`)\n}\nsummarize([{ topic: " Python ", minutes: 20 }, { topic: "Python", minutes: 15 }, { topic: "Java", minutes: 0 }, null, { topic: "", minutes: 10 }])\nsummarize([{ topic: "__proto__", minutes: 2 }])\ntry {\n  summarize([{ topic: "A", minutes: Number.MAX_SAFE_INTEGER }, { topic: "A", minutes: 1 }])\n} catch (error) {\n  console.log(error.message)\n}',
  output:'Python：35\nJava：0\n跳过：2\n__proto__：2\n跳过：0\n总分钟超出安全范围',question:'Java 的 0 分钟记录会怎样？',options:['有效，汇总结果保留 0','作为无效项跳过','自动删除主题'],answer:0,
  explanation:'0 是非负安全整数，所以保留；主题为空和 null 记录不符合要求。',vocab:'summarize · 汇总；record · 记录；topic · 主题；minutes · 分钟数；skipped · 跳过数量；map · 映射',
  notes:['function（函数）定义 summarize（汇总），接收 records（记录列表）。','const（声明）创建 totals（总计映射），new（新建）Map（映射）。','let（可重新赋值声明）创建 skipped（跳过数量），初始为 0。','for（循环）让 const（声明）的 record（当前记录）依次取自 of（来自）records（记录列表）。','if（如果）record（当前记录）为空，或 typeof（查看类型）检查 topic（主题）不是 string（字符串）、trim（去除首尾空格）后为空，或 Number（数字工具）的 isSafeInteger（是否为安全整数）检查 minutes（分钟数）失败，或 minutes 小于 0，进入无效分支。','skipped（跳过数量）增加 1。','continue（继续下一轮）跳过当前无效记录。','右花括号结束 if（如果）分支。','const（声明）创建 topic（主题），record（当前记录）的 topic 经 trim（去除首尾空格）整理。','const（声明）创建 total（总计），totals（总计映射）的 get（获取）读取 topic（主题）；?? 在缺失时使用 0，再加上 record（当前记录）的 minutes（分钟数）。','if（如果）Number（数字工具）的 isSafeInteger（是否为安全整数）检查 total（总计）失败，throw（抛出）new（新建）Error（错误对象）。','totals（总计映射）的 set（设置）将 topic（主题）对应的值设为 total（总计）。','右花括号结束 for（循环）。','for（循环）使用 const（声明）解构 topic（主题）和 total（总计），依次取自 of（来自）totals（总计映射）。','console（控制台）的 log（输出）通过模板字符串的 ${topic}（插入主题）和 ${total}（插入总计）显示结果。','右花括号结束 for（循环）。','console（控制台）的 log（输出）通过 ${skipped}（插入跳过数量）显示结果。','右花括号结束 summarize（汇总）函数。','summarize（汇总）处理固定记录；topic（主题）、minutes（分钟数）、Python 和 Java 是示例字段与主题，null（空值）模拟无效记录。','summarize（汇总）处理特殊主题 __proto__（示例主题），topic（主题）和 minutes（分钟数）为字段。','try（尝试）开始处理可能溢出的汇总。','summarize（汇总）处理 topic（主题）为 A 的两条记录；minutes（分钟数）分别是 Number（数字工具）的 MAX_SAFE_INTEGER（最大安全整数）和 1。','catch（捕获）接收 error（错误对象）。','console（控制台）的 log（输出）显示 error（错误对象）的 message（消息）。','右花括号结束 catch（捕获）分支。'],
  language:'JavaScript',commentPrefix:'//',guide:['逐条跟踪主题整理、有效分钟数累加，以及无效项计数。','观察 __proto__ 作为 Map 键的结果，以及累计超出安全整数时抛出的错误；外层 records 假设为数组。'],advanced:true
 }
 ,
 {
  id:'js-task-pagination',title:'分页显示学习任务',subtitle:'用 slice 取出当前页',
  explain:'任务较多时可以按页展示。示例先检查页码和每页数量，再用 slice 取出固定数组的一部分；页码从 1 开始，超出末页返回空列表。',
  code:'function showPage(tasks, page, size) {\n  if (!Number.isSafeInteger(page) || page < 1 || !Number.isSafeInteger(size) || size < 1) return "分页参数无效"\n  const start = (page - 1) * size\n  if (!Number.isSafeInteger(start)) return "分页参数无效"\n  const items = tasks.slice(start, start + size)\n  return `第 ${page} 页：${items.length ? items.join("、") : "暂无任务"}`\n}\nconst tasks = ["阅读", "复习", "练习"]\nconsole.log(showPage(tasks, 1, 2))\nconsole.log(showPage(tasks, 2, 2))\nconsole.log(showPage(tasks, 3, 2))\nconsole.log(showPage(tasks, 0, 2))',
  output:'第 1 页：阅读、复习\n第 2 页：练习\n第 3 页：暂无任务\n分页参数无效',question:'每页两项时，第二页为什么只有一个任务？',options:['三条任务中前两条已在第一页','分页自动删除了一条任务','程序连接了服务器'],answer:0,
  explanation:'第一页取前两条；第二页从索引 2 开始，只剩最后一条。slice 不修改原数组。',vocab:'page · 页码；size · 数量；start · 起始位置；slice · 切片；items · 项目',
  notes:['function（函数）定义 showPage（显示分页），接收 tasks（任务列表）、page（页码）和 size（每页数量）。','if（如果）Number（数字工具）的 isSafeInteger（是否为安全整数）检查 page（页码）或 size（每页数量）失败，或其中任意值小于 1，return（返回）参数无效。','const（声明）创建 start（起始索引），由 page（页码）减 1 后乘 size（每页数量）得到。','if（如果）Number（数字工具）的 isSafeInteger（是否为安全整数）检查 start（起始索引）失败，return（返回）参数无效。','const（声明）创建 items（本页项目），tasks（任务列表）的 slice（切片）从 start（起始索引）取到 start 加 size（每页数量）之前。','return（返回）模板字符串，用 ${page}（插入页码）显示页码，items（本页项目）的 length（长度）非零时通过 join（连接）显示，否则提示暂无任务。','右花括号结束 showPage（显示分页）函数。','const（声明）创建 tasks（任务列表），包含三条固定任务。','console（控制台）的 log（输出）显示 showPage（显示分页）处理 tasks（任务列表）第 1 页、每页 2 条的结果。','console（控制台）的 log（输出）显示 showPage（显示分页）处理 tasks（任务列表）第 2 页、每页 2 条的结果。','console（控制台）的 log（输出）显示 showPage（显示分页）处理 tasks（任务列表）第 3 页、每页 2 条的结果。','console（控制台）的 log（输出）显示 showPage（显示分页）处理 tasks（任务列表）无效页码 0 的结果。'],
  language:'JavaScript',commentPrefix:'//',guide:['先算起始索引，再理解 slice 的结束位置不包含在结果里。','示例假设 tasks 是可信数组；真实接口还需限制每页最大数量并校验外部数据。']
 }
];
