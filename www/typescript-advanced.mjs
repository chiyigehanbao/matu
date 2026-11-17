export const typeScriptAdvanced = [
  {
    "id": "ts-alias",
    "title": "类型别名与字面量",
    "subtitle": "给一组允许的值起名字",
    "explain": "type 可以给类型起别名。字符串字面量联合类型可以约束值只能是指定文字。",
    "code": "type Status = \"ready\" | \"done\"\nconst status: Status = \"ready\"\nconsole.log(status)",
    "output": "ready",
    "question": "Status 允许什么值？",
    "options": [
      "ready 或 done",
      "任意字符串",
      "任何数据库连接"
    ],
    "answer": 0,
    "explanation": "这个 Status 类型只允许 ready 或 done；它是编译期约束。",
    "vocab": "type · 类型；status · 状态",
    "notes": [
      "type（类型别名）定义 Status（状态），允许 ready（准备好）或 done（完成）两种文字。",
      "const（声明）创建 status（状态），使用 Status（状态类型），值为 ready（准备好）。",
      "console（控制台）的 log（记录/输出）显示 status（状态）。"
    ],
    "language": "TypeScript",
    "commentPrefix": "//",
    "guide": [
      "type 可以给类型起别名。字符串字面量联合类型可以约束值只能是指定文字。",
      "这个 Status 类型只允许 ready 或 done；它是编译期约束。"
    ],
    "advanced": true
  },
  {
    "id": "ts-unknown",
    "title": "unknown：先检查再使用",
    "subtitle": "处理类型尚不确定的值",
    "explain": "unknown 表示值的类型尚不明确。使用具体操作前应先检查或缩小类型范围；它不会自动验证外部数据结构。",
    "code": "function describe(value: unknown): string {\n  if (typeof value === \"string\") {\n    return value.toUpperCase()\n  }\n  return \"不是文字\"\n}\nconsole.log(describe(\"api\"))",
    "output": "API",
    "question": "为什么先判断 typeof？",
    "options": [
      "确定 value 是字符串后再调用字符串方法",
      "自动登录服务器",
      "让编译器忽略所有错误"
    ],
    "answer": 0,
    "explanation": "typeof 判断帮助缩小 unknown 的类型，再安全使用字符串方法。",
    "vocab": "unknown · 未知；upper case · 大写",
    "notes": [
      "function（函数）定义 describe（描述），value（值）标注为 unknown（未知类型），返回 string（字符串）。",
      "if（如果）typeof（查看类型）得到的 value（值）类型严格等于 string（字符串）。",
      "return（返回）value（值）调用 toUpperCase（转为大写）的结果。",
      "右花括号结束 if（如果）分支。",
      "return（返回）文字“不是文字”。",
      "右花括号结束 describe（描述）函数。",
      "console（控制台）的 log（记录/输出）显示 describe（描述）处理 api（应用接口缩写示例文字）的结果。"
    ],
    "language": "TypeScript",
    "commentPrefix": "//",
    "guide": [
      "unknown 表示值的类型尚不明确。使用具体操作前应先检查或缩小类型范围；它不会自动验证外部数据结构。",
      "typeof 判断帮助缩小 unknown 的类型，再安全使用字符串方法。"
    ],
    "advanced": true
  },
  {
    "id": "ts-generic-array",
    "title": "泛型数组与可能不存在的值",
    "subtitle": "读取第一项之前考虑空列表",
    "explain": "泛型可以表达不同元素类型，返回值的联合类型可以明确表示空数组时可能得到 undefined。",
    "code": "function first<T>(items: T[]): T | undefined {\n  return items[0]\n}\nconsole.log(first<number>([10, 20]))",
    "output": "10",
    "question": "为什么返回类型包含 undefined？",
    "options": [
      "数组可能为空",
      "所有数字都一定不存在",
      "表示自动连接服务器"
    ],
    "answer": 0,
    "explanation": "当数组为空时，读取索引 0 会得到 undefined。",
    "vocab": "first · 第一项；undefined · 未定义",
    "notes": [
      "function（函数）定义 first（第一项），T（类型参数）表示元素类型，items（项目数组）为 T 类型数组；返回 T 或 undefined（未定义）。",
      "return（返回）items（项目数组）索引 0 的值。",
      "右花括号结束 first（第一项）函数。",
      "console（控制台）的 log（记录/输出）显示 first（第一项）处理 number（数字）数组的结果。"
    ],
    "language": "TypeScript",
    "commentPrefix": "//",
    "guide": [
      "泛型可以表达不同元素类型，返回值的联合类型可以明确表示空数组时可能得到 undefined。",
      "当数组为空时，读取索引 0 会得到 undefined。"
    ],
    "advanced": true
  },
  {
    "id": "ts-extends",
    "title": "扩展接口",
    "subtitle": "在已有对象结构上增加字段",
    "explain": "interface 可以通过 extends 基于已有接口扩展字段。它描述类型结构，不会自动创建用户或保存数据。",
    "code": "interface User {\n  name: string\n}\ninterface Admin extends User {\n  level: number\n}\nconst admin: Admin = { name: \"小明\", level: 2 }\nconsole.log(admin.name, admin.level)",
    "output": "小明 2",
    "question": "Admin 除 level 外还需要什么？",
    "options": [
      "name",
      "手机号",
      "数据库密码"
    ],
    "answer": 0,
    "explanation": "Admin 扩展 User，因此也需要 User 中声明的 name。",
    "vocab": "extends · 扩展；admin · 管理员",
    "notes": [
      "interface（接口）定义 User（用户）结构。",
      "name（名字）字段为 string（字符串）。",
      "右花括号结束 User（用户）接口。",
      "interface（接口）定义 Admin（管理员），extends（扩展）User（用户）接口。",
      "level（等级）字段为 number（数字）。",
      "右花括号结束 Admin（管理员）接口。",
      "const（声明）创建 admin（管理员），类型为 Admin（管理员接口），包含 name（名字）和 level（等级）。",
      "console（控制台）的 log（记录/输出）显示 admin（管理员）的 name（名字）与 level（等级）。"
    ],
    "language": "TypeScript",
    "commentPrefix": "//",
    "guide": [
      "interface 可以通过 extends 基于已有接口扩展字段。它描述类型结构，不会自动创建用户或保存数据。",
      "Admin 扩展 User，因此也需要 User 中声明的 name。"
    ],
    "advanced": true
  },
  {
    "id": "ts-readonly",
    "title": "只读属性",
    "subtitle": "表达不应通过该属性重新赋值",
    "explain": "readonly 表达类型检查时不允许通过该属性重新赋值。它本身不保证对象在运行时被冻结。",
    "code": "interface Book {\n  readonly title: string\n}\nconst book: Book = { title: \"入门\" }\nconsole.log(book.title)",
    "output": "入门",
    "question": "readonly 是否自动冻结运行时对象？",
    "options": [
      "不会，它主要是类型检查约束",
      "一定冻结所有嵌套对象",
      "会把数据自动上传"
    ],
    "answer": 0,
    "explanation": "readonly 是 TypeScript 类型层面的约束，本身不会自动执行 Object.freeze。",
    "vocab": "readonly · 只读；title · 标题",
    "notes": [
      "interface（接口）定义 Book（书籍）结构。",
      "readonly（只读）标记 title（标题）属性，string（字符串）表示它的类型。",
      "右花括号结束 Book（书籍）接口。",
      "const（声明）创建 book（书籍），类型为 Book（书籍接口），title（标题）为“入门”。",
      "console（控制台）的 log（记录/输出）显示 book（书籍）的 title（标题）。"
    ],
    "language": "TypeScript",
    "commentPrefix": "//",
    "guide": [
      "readonly 表达类型检查时不允许通过该属性重新赋值。它本身不保证对象在运行时被冻结。",
      "readonly 是 TypeScript 类型层面的约束，本身不会自动执行 Object.freeze。"
    ],
    "advanced": true
  },
  {
    "id": "ts-result-union",
    "title": "用联合类型表示成功与失败",
    "subtitle": "根据标记读取对应字段",
    "explain": "可辨识联合类型用共同字段区分不同结构。这里通过 ok 判断结果分支，再读取对应字段；示例数据写在本地，没有请求接口。",
    "code": "type Result = { ok: true; value: string } | { ok: false; error: string }\nfunction describe(result: Result): string {\n  if (result.ok) {\n    return result.value\n  }\n  return result.error\n}\nconsole.log(describe({ ok: true, value: \"完成\" }))",
    "output": "完成",
    "question": "ok 为 false 时应读取哪个字段？",
    "options": [
      "error",
      "value",
      "手机通讯录"
    ],
    "answer": 0,
    "explanation": "在该类型中，ok 为 false 的分支包含 error；示例没有访问通讯录或网络。",
    "vocab": "result · 结果；value · 值；error · 错误",
    "notes": [
      "type（类型别名）定义 Result（结果）：ok（是否成功）为 true（真）时有 value（值）字符串，为 false（假）时有 error（错误）字符串；string（字符串）表示字段类型。",
      "function（函数）定义 describe（描述），result（结果）为 Result（结果类型），返回 string（字符串）。",
      "if（如果）result（结果）的 ok（是否成功）为真，进入成功分支。",
      "return（返回）result（结果）的 value（值）。",
      "右花括号结束 if（如果）分支。",
      "return（返回）result（结果）的 error（错误）。",
      "右花括号结束 describe（描述）函数。",
      "console（控制台）的 log（记录/输出）显示 describe（描述）的结果；传入的 ok（是否成功）为 true（真），value（值）为“完成”。"
    ],
    "language": "TypeScript",
    "commentPrefix": "//",
    "guide": [
      "可辨识联合类型用共同字段区分不同结构。这里通过 ok 判断结果分支，再读取对应字段；示例数据写在本地，没有请求接口。",
      "在该类型中，ok 为 false 的分支包含 error；示例没有访问通讯录或网络。"
    ],
    "advanced": true
  },
  {
    "id": "ts-record",
    "title": "Record：描述键值类型",
    "subtitle": "用类型描述一组学习时长",
    "explain": "Record 可以描述一组键和值的类型。本例使用固定示例数据；类型标注本身不会验证从网络或文件取得的内容。",
    "code": "const minutes: Record<string, number> = { reading: 20, review: 15 }\nconst total = minutes.reading + minutes.review\nconsole.log(total)",
    "output": "35",
    "question": "Record<string, number> 在这里描述什么？",
    "options": [
      "字符串键和数字值",
      "自动保存数据库",
      "网络连接状态"
    ],
    "answer": 0,
    "explanation": "Record<string, number> 描述字符串键对应数字值；外部数据仍需在运行时验证。",
    "vocab": "record · 键值结构；reading · 阅读；review · 复习",
    "notes": [
      "const（声明）创建 minutes（分钟数字典）；Record（键值类型）以 string（字符串）为键、number（数字）为值；reading（阅读）和 review（复习）是示例键。",
      "const（声明）创建 total（总计），把 minutes（分钟数字典）中的 reading（阅读）与 review（复习）相加。",
      "console（控制台）的 log（记录/输出）显示 total（总计）。"
    ],
    "language": "TypeScript",
    "commentPrefix": "//",
    "guide": [
      "Record 可以描述一组键和值的类型。本例使用固定示例数据；类型标注本身不会验证从网络或文件取得的内容。",
      "Record<string, number> 描述字符串键对应数字值；外部数据仍需在运行时验证。"
    ],
    "advanced": true
  }
,
 {
  id:'ts-unknown-validation',title:'读取未知数据前先检查',subtitle:'在运行时确认对象和字段类型',
  explain:'来自外部的数据不能仅靠类型标注保证正确。本例用 unknown 表示尚未确认的值，再检查它是非空对象，且 title 字段是字符串；示例数据是本地模拟的。',
  code:'function readTitle(data: unknown): string {\n  if (typeof data === "object" && data !== null && "title" in data && typeof data.title === "string") {\n    return data.title\n  }\n  return "数据无效"\n}\nconst input: unknown = { title: "阅读" }\nconsole.log(readTitle(input))',
  output:'阅读',question:'为什么读取 title 前要检查数据？',options:['外部数据可能为空或字段类型不正确','TypeScript 会自动修复所有数据','检查会自动发送网络请求'],answer:0,
  explanation:'unknown 要求使用前缩小类型范围；运行时检查能识别 null、缺少字段和非字符串等情况。',vocab:'unknown · 未知；title · 标题；typeof · 查看类型',
  notes:['function（函数）定义 readTitle（读取标题），data（数据）为 unknown（未知类型），返回 string（字符串）。','if（如果）typeof（查看类型）确认 data（数据）是 object（对象），且 data 不等于 null（空值），title（标题）in（存在于）data 中，且 data.title（标题）的 typeof 是 string（字符串）。','return（返回）data（数据）的 title（标题）。','右花括号结束 if（如果）分支。','return（返回）提示“数据无效”。','右花括号结束 readTitle（读取标题）函数。','const（声明）创建 input（输入），类型为 unknown（未知），模拟包含 title（标题）的对象。','console（控制台）的 log（记录/输出）显示 readTitle（读取标题）处理 input（输入）的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['接口类型帮助编写和检查代码，但运行时仍应验证来自网络或文件的数据。','本例是精简的字段检查；复杂数据可以使用适合项目的验证方案。'],advanced:true
 }
,
 {
  id:'ts-type-guard',title:'用类型守卫检查课程数据',subtitle:'把运行时检查封装成可复用函数',
  explain:'类型守卫是返回类型谓词的函数。这里逐项检查未知值，再让 TypeScript 在检查通过的分支中识别 Course；数据都是本地模拟的。',
  code:'interface Course { title: string }\nfunction isCourse(value: unknown): value is Course {\n  return typeof value === "object" && value !== null && "title" in value && typeof value.title === "string"\n}\nfunction showCourse(value: unknown): string {\n  if (isCourse(value)) return "课程：" + value.title\n  return "无效课程"\n}\nconsole.log(showCourse({ title: "变量" }))\nconsole.log(showCourse({ title: 12 }))\nconsole.log(showCourse(null))',
  output:'课程：变量\n无效课程\n无效课程',question:'isCourse 返回 true 后，分支中 value 被识别为什么？',options:['Course','自动连接的数据库','永远是 null'],answer:0,
  explanation:'value is Course 是类型谓词；TypeScript 会在判断成立的分支中将 value 缩小为 Course。',vocab:'guard · 守卫；course · 课程；value · 值',
  notes:['interface（接口）定义 Course（课程）形状，title（标题）是 string（字符串）。','function（函数）定义 isCourse（是否为课程），value（值）是 unknown（未知类型）；value is Course（值是课程）为类型谓词。','return（返回）检查结果：typeof（查看类型）确认 value（值）是 object（对象）且不是 null（空值），title（标题）in（存在于）value，且标题是 string（字符串）。','右花括号结束 isCourse（是否为课程）函数。','function（函数）定义 showCourse（显示课程），value（值）为 unknown（未知类型），返回 string（字符串）。','if（如果）isCourse（是否为课程）检查 value（值）通过，return（返回）“课程：”与 value 的 title（标题）。','return（返回）“无效课程”。','右花括号结束 showCourse（显示课程）函数。','console（控制台）的 log（记录/输出）显示 showCourse（显示课程）处理 title（标题）为文字的结果。','console（控制台）的 log（记录/输出）显示 showCourse（显示课程）处理 title（标题）为数字的结果。','console（控制台）的 log（记录/输出）显示 showCourse（显示课程）处理 null（空值）的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['类型谓词告诉编译器判断成立时的类型；实际安全性依赖函数确实检查了所声明的字段。','本例只检查 title；如果接口结构更复杂，需要检查更多字段。'],advanced:true
 }
,
 {
  id:'ts-catch-unknown',title:'安全读取捕获到的错误',subtitle:'先判断错误类型，再读取消息',
  explain:'JavaScript 可以抛出不同类型的值。TypeScript 中把捕获值视为 unknown，使用 instanceof 检查后再读取 Error 的 message。示例错误均为本地模拟。',
  code:'function showFailure(value: unknown): void {\n  try {\n    throw value\n  } catch (error: unknown) {\n    if (error instanceof Error) {\n      console.log(error.message)\n    } else {\n      console.log("未知错误")\n    }\n  }\n}\nshowFailure(new Error("读取失败"))\nshowFailure("模拟异常")',
  output:'读取失败\n未知错误',question:'为什么读取 message 前先检查 instanceof Error？',options:['抛出的值可能不是 Error 对象','它会自动重试网络','TypeScript 会修改输入值'],answer:0,
  explanation:'throw 可以抛出字符串等其他值；只有确认 error 是 Error 后，才能安全读取其 message。',vocab:'catch · 捕获；error · 错误；message · 消息',
  notes:['function（函数）定义 showFailure（显示失败），value（值）为 unknown（未知类型），返回 void（无返回值）。','try（尝试）开始可能抛错的代码。','throw（抛出）value（值）。','catch（捕获）接收 error（错误值），类型为 unknown（未知类型）。','if（如果）error（错误值）instanceof（属于）Error（错误对象），则进入对应分支。','console（控制台）的 log（记录/输出）显示 error（错误对象）的 message（消息）。','else（否则）处理其他类型的抛出值。','console（控制台）的 log（记录/输出）显示“未知错误”。','右花括号结束 else（否则）分支。','右花括号结束 catch（捕获）代码块。','右花括号结束 showFailure（显示失败）函数。','showFailure（显示失败）接收 new（新建）Error（错误对象），消息为“读取失败”。','showFailure（显示失败）接收模拟异常字符串。'],
  language:'TypeScript',commentPrefix:'//',guide:['在读取属性之前先缩小 unknown 的类型范围。','本例只展示错误信息，不连接网络，也不自动重试。'],advanced:true
 }
,
 {
  id:'ts-update-task',title:'带类型地更新任务',subtitle:'用接口描述数据并生成更新后的列表',
  explain:'接口描述任务字段，函数接收任务列表和目标编号，返回新列表。示例只为匹配项创建新对象，不修改原任务的完成状态。',
  code:'interface Task { id: number; done: boolean }\nfunction completeTask(tasks: Task[], id: number): Task[] {\n  return tasks.map(task => task.id === id ? { ...task, done: true } : task)\n}\nconst tasks: Task[] = [{ id: 1, done: false }, { id: 2, done: false }]\nconst updated = completeTask(tasks, 2)\nconsole.log("更新后：", updated[1].done)\nconsole.log("原状态：", tasks[1].done)\nconsole.log("其他任务：", updated[0].done)',
  output:'更新后： true\n原状态： false\n其他任务： false',question:'完成状态保存在什么类型的字段中？',options:['boolean','string','自动生成的数据库'],answer:0,
  explanation:'Task 接口把 done 声明为 boolean；true 表示完成，false 表示未完成。',vocab:'task · 任务；complete · 完成；boolean · 布尔值',
  notes:['interface（接口）定义 Task（任务）形状：id（编号）为 number（数字），done（完成状态）为 boolean（布尔值）。','function（函数）定义 completeTask（完成任务），接收 Task（任务）数组 tasks（任务列表）和 number（数字）类型的 id（编号），返回 Task（任务）数组。','return（返回）tasks（任务列表）的 map（映射）结果：task（当前任务）的 id（编号）匹配时复制 task 并把 done（完成状态）设为 true（真），否则保留 task。','右花括号结束 completeTask（完成任务）函数。','const（声明）创建 Task（任务）数组 tasks（任务列表），包含 id（编号）和 done（完成状态）；false（假）表示未完成。','const（声明）创建 updated（更新后的列表），调用 completeTask（完成任务）处理 tasks（任务列表）和编号 2。','console（控制台）的 log（记录/输出）显示 updated（更新后的列表）第二项的 done（完成状态）。','console（控制台）的 log（记录/输出）显示 tasks（原列表）第二项的 done（完成状态）。','console（控制台）的 log（记录/输出）显示 updated（更新后的列表）第一项的 done（完成状态）。'],
  language:'TypeScript',commentPrefix:'//',guide:['类型标注帮助检查字段和函数调用；外部输入仍需要运行时验证。','map 创建新数组；未匹配项沿用原对象引用。'],advanced:true
 }
,
 {
  id:'ts-filter-tasks',title:'带类型地筛选待办',subtitle:'定义任务结构并处理空结果',
  explain:'接口定义任务字段，函数筛选未完成任务并返回标题。示例只处理内存中的固定数据，不访问服务器。',
  code:'interface Task { title: string; done: boolean }\nfunction showPending(tasks: Task[]): string {\n  const pending = tasks.filter(task => !task.done)\n  if (pending.length === 0) return "暂无待办"\n  return pending.map(task => task.title).join("、")\n}\nconsole.log(showPending([{ title: "阅读", done: true }, { title: "复习", done: false }]))\nconsole.log(showPending([{ title: "阅读", done: true }]))',
  output:'复习\n暂无待办',question:'所有任务都完成时返回什么？',options:['暂无待办','所有标题','自动连接服务器'],answer:0,
  explanation:'filter 没有保留任何任务时，pending.length 为 0，函数返回空结果提示。',vocab:'pending · 待完成；filter · 筛选；title · 标题',
  notes:['interface（接口）定义 Task（任务），title（标题）为 string（字符串），done（完成状态）为 boolean（布尔值）。','function（函数）定义 showPending（显示待办），tasks（任务列表）为 Task（任务）数组，返回 string（字符串）。','const（声明）创建 pending（待完成列表），tasks（任务列表）的 filter（筛选）保留 task（当前任务）的 done（完成状态）为假的项。','if（如果）pending（待完成列表）的 length（长度）等于 0，return（返回）“暂无待办”。','return（返回）pending（待完成列表）通过 map（映射）取得 task（当前任务）的 title（标题），再通过 join（连接）组成文字。','右花括号结束 showPending（显示待办）函数。','console（控制台）的 log（记录/输出）显示 showPending（显示待办）处理两个任务的结果；title（标题）、done（完成状态）是字段，true（真）表示完成、false（假）表示未完成。','console（控制台）的 log（记录/输出）显示 showPending（显示待办）处理已完成任务的结果；title（标题）、done（完成状态）是字段，true（真）表示完成。'],
  language:'TypeScript',commentPrefix:'//',guide:['类型标注约束任务字段，filter 不会删除原数组的项目。','空结果单独显示提示；示例不持久化数据。'],advanced:true
 }
,
 {
  id:'ts-nullish-zero',title:'默认值与有效的零',subtitle:'区分未填写和零分钟',
  explain:'可选字段可能是 undefined。空值合并运算符 ?? 只在左边为 null 或 undefined 时使用右边默认值，因此会保留有效数字 0。',
  code:'interface RecordEntry { minutes?: number }\nfunction showMinutes(entry: RecordEntry): number | string {\n  return entry.minutes ?? "未填写"\n}\nconsole.log(showMinutes({ minutes: 0 }))\nconsole.log(showMinutes({}))',
  output:'0\n未填写',question:'minutes 为 0 时为什么不显示“未填写”？',options:['0 不是 null 或 undefined','0 会自动变成 1','因为访问了数据库'],answer:0,
  explanation:'?? 仅在左侧为 null 或 undefined 时使用默认值，0 会原样返回。',vocab:'minutes · 分钟数；entry · 记录；nullish · 空值',
  notes:['interface（接口）定义 RecordEntry（记录），minutes（分钟数）是可选的 number（数字）字段。','function（函数）定义 showMinutes（显示分钟数），entry（记录）为 RecordEntry（记录接口），返回 number（数字）或 string（字符串）。','return（返回）entry（记录）的 minutes（分钟数）；?? 在 null（空值）或 undefined（未定义）时使用“未填写”。','右花括号结束 showMinutes（显示分钟数）函数。','console（控制台）的 log（记录/输出）显示 showMinutes（显示分钟数）处理 minutes（分钟数）为 0 的结果。','console（控制台）的 log（记录/输出）显示 showMinutes（显示分钟数）处理缺少字段的记录的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['?? 会保留 0、false 和空字符串；逻辑或 || 会把它们视为假值。','示例仅展示默认值处理，外部数据仍需要运行时验证。'],advanced:true
 }
,
 {
  id:'ts-find-task',title:'按编号查找任务',subtitle:'处理 find 可能返回的 undefined',
  explain:'数组的 find 返回第一个匹配项；没有匹配项时返回 undefined。函数检查结果后再读取标题，示例只使用内存中的固定任务。',
  code:'interface Task { id: number; title: string }\nfunction findTitle(tasks: Task[], id: number): string {\n  const found = tasks.find(task => task.id === id)\n  if (found === undefined) return "未找到"\n  return found.title\n}\nconst tasks: Task[] = [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }]\nconsole.log(findTitle(tasks, 2))\nconsole.log(findTitle(tasks, 9))',
  output:'复习\n未找到',question:'find 没有找到任务时返回什么？',options:['undefined','自动创建的任务','服务器上的全部任务'],answer:0,
  explanation:'find 找不到匹配项时返回 undefined；检查后，剩下的分支可以安全读取任务标题。',vocab:'find · 查找；found · 找到的；undefined · 未定义；title · 标题',
  notes:['interface（接口）定义 Task（任务）：id（编号）为 number（数字），title（标题）为 string（字符串）。','function（函数）定义 findTitle（查找标题），接收 tasks（任务数组，Task 表示任务）和 id（编号，number 表示数字），返回 string（字符串）。','const（声明）创建 found（查找结果）；tasks（任务数组）的 find（查找）比较 task（当前任务）的 id（编号）与目标 id。','if（如果）found（查找结果）严格等于 undefined（未定义），return（返回）“未找到”。','return（返回）found（找到的任务）的 title（标题）。','右花括号结束 findTitle（查找标题）函数。','const（声明）创建 tasks（任务数组），类型为 Task（任务）数组；每项包含 id（编号）和 title（标题）。','console（控制台）的 log（输出）显示 findTitle（查找标题）从 tasks（任务数组）查找编号 2 的结果。','console（控制台）的 log（输出）显示 findTitle（查找标题）从 tasks（任务数组）查找编号 9 的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['find 在匹配多个项目时只返回第一个；无匹配或数组为空时返回 undefined。','检查 undefined 后，TypeScript 可以缩小类型范围，识别出后续的 found 是任务。'],advanced:true
 }
,
 {
  id:'ts-loading-state',title:'用联合类型描述加载状态',subtitle:'分别处理加载中、成功和失败',
  explain:'接口界面常有加载中、成功和失败三种状态。示例用固定对象模拟这些状态，根据 status 判断后再读取对应字段；没有发起网络请求。',
  code:'type LoadState =\n  | { status: "loading" }\n  | { status: "success"; title: string }\n  | { status: "error"; message: string }\nfunction describe(state: LoadState): string {\n  switch (state.status) {\n    case "loading": return "加载中"\n    case "success": return "课程：" + state.title\n    case "error": return "错误：" + state.message\n  }\n}\nconsole.log(describe({ status: "loading" }))\nconsole.log(describe({ status: "success", title: "变量" }))\nconsole.log(describe({ status: "error", message: "读取失败" }))',
  output:'加载中\n课程：变量\n错误：读取失败',question:'哪种状态包含 title 字段？',options:['success','loading','所有状态都一定包含'],answer:0,
  explanation:'success 分支定义了 title；检查 status 后，TypeScript 可以识别该分支包含的字段。',vocab:'status · 状态；loading · 加载中；success · 成功；error · 错误',
  notes:['type（类型别名）定义 LoadState（加载状态），以下用联合类型列出不同状态。','status（状态）为 loading（加载中）时不需要其他字段。','status（状态）为 success（成功）时包含 title（标题），类型为 string（字符串）。','status（状态）为 error（错误）时包含 message（消息），类型为 string（字符串）。','function（函数）定义 describe（描述），接收 LoadState（加载状态）类型的 state（状态），返回 string（字符串）。','switch（分支选择）根据 state（状态）的 status（状态标识）选择分支。','case（分支）匹配 loading（加载中），return（返回）加载提示。','case（分支）匹配 success（成功），return（返回）课程文字和 state（状态）的 title（标题）。','case（分支）匹配 error（错误），return（返回）错误文字和 state（状态）的 message（消息）。','右花括号结束 switch（分支选择）。','右花括号结束 describe（描述）函数。','console（控制台）的 log（输出）显示 describe（描述）处理 status（状态）为 loading（加载中）的结果。','console（控制台）的 log（输出）显示 describe（描述）处理 status（状态）为 success（成功）及 title（标题）的结果。','console（控制台）的 log（输出）显示 describe（描述）处理 status（状态）为 error（错误）及 message（消息）的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['status 是各分支共同的标识，判断它后可以安全访问该分支特有的字段。','示例对象是手工构造的；真实网络数据仍需在运行时验证。'],advanced:true
 }
,
 {
  id:'ts-remove-task-result',title:'删除任务并描述处理结果',subtitle:'用联合类型区分成功与未找到',
  explain:'函数先按编号查找任务，成功时返回新数组，未找到时返回原因。示例仅处理内存数据，原数组保持不变。',
  code:'interface Task { id: number; title: string }\ntype Result = { ok: true; tasks: Task[] } | { ok: false; reason: string }\nfunction removeTask(tasks: readonly Task[], id: number): Result {\n  if (!tasks.some(task => task.id === id)) return { ok: false, reason: "未找到" }\n  return { ok: true, tasks: tasks.filter(task => task.id !== id) }\n}\nfunction show(result: Result): string {\n  if (!result.ok) return result.reason\n  return "已删除：" + result.tasks.map(task => task.title).join(",")\n}\nconst tasks: Task[] = [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }]\nconsole.log(show(removeTask(tasks, 2)))\nconsole.log(show(removeTask(tasks, 9)))\nconsole.log("原数量：" + tasks.length)',
  output:'已删除：阅读\n未找到\n原数量：2',question:'目标编号不存在时返回哪种结果？',options:['ok 为 false，并说明未找到','自动创建任务','返回服务器地址'],answer:0,
  explanation:'some 找不到目标时返回 false，函数返回含 reason 的失败结果；成功时 filter 创建新数组。',vocab:'remove · 移除；result · 结果；reason · 原因；readonly · 只读',
  notes:['interface（接口）定义 Task（任务），id（编号）为 number（数字），title（标题）为 string（字符串）。','type（类型别名）定义 Result（结果）：ok（是否成功）为 true（真）时包含 tasks（任务数组）与 Task（任务类型），为 false（假）时包含 string（字符串）类型的 reason（原因）。','function（函数）定义 removeTask（移除任务），接收 readonly（只读）Task（任务）数组 tasks（任务列表）与 number（数字）类型的 id（编号），返回 Result（结果）。','if（如果）tasks（任务列表）的 some（是否有匹配项）找不到 id（编号）相等的 task（当前任务），return（返回）ok（是否成功）为 false（假）和 reason（原因）。','return（返回）ok（是否成功）为 true（真）及 tasks（任务数组）；tasks（原列表）的 filter（筛选）保留 task（当前任务）的 id（编号）不等于目标 id 的项。','右花括号结束 removeTask（移除任务）函数。','function（函数）定义 show（显示），接收 Result（结果）类型的 result（结果），返回 string（字符串）。','if（如果）result（结果）的 ok（是否成功）为假，return（返回）result 的 reason（原因）。','return（返回）提示文字与 result（结果）的 tasks（任务数组）经 map（映射）取得 task（当前任务）的 title（标题），再由 join（连接）组成的文字。','右花括号结束 show（显示）函数。','const（声明）创建 tasks（任务数组），元素类型为 Task（任务），每项包含 id（编号）与 title（标题）。','console（控制台）的 log（输出）显示 show（显示）处理 removeTask（移除任务）对 tasks（任务数组）与编号 2 的结果。','console（控制台）的 log（输出）显示 show（显示）处理 removeTask（移除任务）对 tasks（任务数组）与编号 9 的结果。','console（控制台）的 log（输出）显示 tasks（原任务数组）的 length（长度）。'],
  language:'TypeScript',commentPrefix:'//',guide:['ok 是区分成功和失败的标识；检查后可以读取对应的 tasks 或 reason。','readonly 限制函数通过该参数修改数组；filter 创建新数组，但保留的对象仍共享引用。'],advanced:true
 }
,
 {
  id:'ts-valid-minutes',title:'检查未知的学习分钟数',subtitle:'在运行时确认类型与范围',
  explain:'外部数据可以先视为 unknown。函数检查值是否为非负安全整数；示例使用固定数据，不访问网络。',
  code:'function showMinutes(value: unknown): string {\n  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0) {\n    return "输入无效"\n  }\n  return "分钟：" + value\n}\nconsole.log(showMinutes(0))\nconsole.log(showMinutes(20))\nconsole.log(showMinutes(-1))\nconsole.log(showMinutes("20"))\nconsole.log(showMinutes(true))',
  output:'分钟：0\n分钟：20\n输入无效\n输入无效\n输入无效',question:'输入字符串 "20" 时会怎样？',options:['提示输入无效','自动转成数字 20','自动上传服务器'],answer:0,
  explanation:'示例要求输入本身是数字，不做字符串转换；0 是非负安全整数，因此有效。',vocab:'unknown · 未知；value · 值；integer · 整数；safe · 安全的',
  notes:['function（函数）定义 showMinutes（显示分钟数），value（值）为 unknown（未知类型），返回 string（字符串）。','if（如果）typeof（查看类型）得到的 value（值）不是 number（数字），或 Number（数字工具）的 isSafeInteger（是否为安全整数）为假，或 value 小于 0，则进入错误分支。','return（返回）“输入无效”。','右花括号结束 if（如果）分支。','return（返回）分钟提示和 value（已确认的数字值）。','右花括号结束 showMinutes（显示分钟数）函数。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理 0 的结果。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理数字 20 的结果。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理负数的结果。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理字符串 20 的结果。','console（控制台）的 log（输出）显示 showMinutes（显示分钟数）处理 true（布尔真值）的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['先用 typeof 缩小类型范围，再检查安全整数和非负条件。','Number.isSafeInteger 会排除小数、无穷大和超出安全整数范围的值；真实业务还可以增加上限。'],advanced:true
 }
,
 {
  id:'ts-topic-summary',title:'按主题汇总学习时间',subtitle:'用 Map 保存各主题的分钟总数',
  explain:'函数遍历固定学习记录，用 Map 按主题累加分钟数，再按主题排序显示。空列表显示提示；示例不连接数据库。',
  code:'interface StudyRecord { topic: string; minutes: number }\nfunction showSummary(records: readonly StudyRecord[]): void {\n  const totals = new Map<string, number>()\n  for (const record of records) {\n    totals.set(record.topic, (totals.get(record.topic) ?? 0) + record.minutes)\n  }\n  if (totals.size === 0) console.log("暂无记录")\n  for (const topic of [...totals.keys()].sort()) {\n    console.log(topic + "：" + totals.get(topic))\n  }\n}\nconst records: StudyRecord[] = [{ topic: "Python", minutes: 20 }, { topic: "Java", minutes: 10 }, { topic: "Python", minutes: 15 }]\nshowSummary(records)\nshowSummary([])',
  output:'Java：10\nPython：35\n暂无记录',question:'主题首次出现时为什么用 0？',options:['还没有总数，从 0 开始累加','自动读取数据库','将分钟数清空'],answer:0,
  explanation:'Map.get 找不到主题时返回 undefined，?? 提供 0 作为起始值。',vocab:'topic · 主题；minutes · 分钟数；totals · 总计；map · 映射',
  notes:['interface（接口）定义 StudyRecord（学习记录），topic（主题）为 string（字符串），minutes（分钟数）为 number（数字）。','function（函数）定义 showSummary（显示汇总），接收 readonly（只读）StudyRecord（学习记录）数组 records（记录列表），返回 void（无返回值）。','const（声明）创建 totals（总计映射），new（新建）Map（映射）以 string（字符串）为键、number（数字）为值。','for（循环）让 const（声明）的 record（当前记录）依次取自 of（来自）records（记录列表）。','totals（总计映射）的 set（设置）以 record（当前记录）的 topic（主题）为键，读取 get（获取）的已有值；?? 在空值时提供 0，再加上 record 的 minutes（分钟数）。','右花括号结束 for（循环）。','if（如果）totals（总计映射）的 size（数量）为 0，console（控制台）的 log（输出）显示提示。','for（循环）让 const（声明）的 topic（主题）依次取自 of（来自）totals（总计映射）的 keys（键）展开为数组后由 sort（排序）得到的结果。','console（控制台）的 log（输出）显示 topic（主题）和 totals（总计映射）通过 get（获取）读取该主题的总数。','右花括号结束 for（循环）。','右花括号结束 showSummary（显示汇总）函数。','const（声明）创建 StudyRecord（学习记录）数组 records（记录列表），每项有 topic（主题）和 minutes（分钟数）；Python、Java 为示例主题。','showSummary（显示汇总）处理 records（记录列表）。','showSummary（显示汇总）处理空数组。'],
  language:'TypeScript',commentPrefix:'//',guide:['Map.get 在键不存在时返回 undefined，?? 让首次累加从 0 开始。','示例使用固定且有效的数据；类型标注不会在运行时验证外部输入，实际总数也需要考虑安全整数范围。'],advanced:true
 }
,
 {
  id:'ts-summary-guard',title:'检查未知的主题汇总',subtitle:'用类型守卫验证分钟数',
  explain:'示例把待检查的汇总数据视为 unknown，通过类型守卫确认它是非数组对象，且各值都是非负安全整数。数据是固定示例，不请求网络。',
  code:'function isSummary(value: unknown): value is Record<string, number> {\n  if (value === null || typeof value !== "object" || Array.isArray(value)) return false\n  return Object.values(value).every(item => typeof item === "number" && Number.isSafeInteger(item) && item >= 0)\n}\nfunction show(value: unknown): string {\n  if (!isSummary(value)) return "数据无效"\n  return "主题数：" + Object.keys(value).length\n}\nconsole.log(show({ Python: 35, Java: 0 }))\nconsole.log(show({}))\nconsole.log(show({ Python: "35" }))\nconsole.log(show({ Python: -1 }))',
  output:'主题数：2\n主题数：0\n数据无效\n数据无效',question:'空对象在本例中是否有效？',options:['有效，主题数为 0','无效，必须有一个主题','自动请求服务器'],answer:0,
  explanation:'空对象的值数组为空，every 返回 true；本例将空汇总视为有效。',vocab:'summary · 汇总；guard · 守卫；unknown · 未知；value · 值',
  notes:['function（函数）定义 isSummary（是否为汇总）的类型守卫，value（值）为 unknown（未知类型）；value is Record<string, number> 表示通过时视为以 string（字符串）为键、number（数字）为值的 Record（键值类型）。','if（如果）value（值）为 null（空值）、typeof（查看类型）不是 object（对象），或 Array（数组工具）的 isArray（是否为数组）为真，return（返回）false（假）。','return（返回）Object（对象工具）的 values（获取值）对 value（值）的结果是否 every（每项满足）：item（当前项）经 typeof（查看类型）检查为 number（数字），并通过 Number（数字工具）的 isSafeInteger（是否为安全整数）检查，且不小于 0。','右花括号结束 isSummary（是否为汇总）函数。','function（函数）定义 show（显示），value（值）为 unknown（未知类型），返回 string（字符串）。','if（如果）isSummary（是否为汇总）检查 value（值）为假，return（返回）无效提示。','return（返回）主题数提示和 Object（对象工具）的 keys（获取键）对 value（已确认的汇总）的结果的 length（长度）。','右花括号结束 show（显示）函数。','console（控制台）的 log（输出）显示 show（显示）处理 Python、Java 两个示例主题的结果。','console（控制台）的 log（输出）显示 show（显示）处理空对象的结果。','console（控制台）的 log（输出）显示 show（显示）处理 Python（示例主题）对应字符串的结果。','console（控制台）的 log（输出）显示 show（显示）处理 Python（示例主题）对应负数的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['类型守卫在运行时检查数据，返回 true 后 TypeScript 可以将值视为指定类型。','本例用于普通 JSON 对象；实际项目还需验证主题名称、数据量以及业务上限。'],advanced:true
 }
,
 {
  id:'ts-partial-update',title:'更新部分学习记录',subtitle:'用 Partial 描述可省略的字段',
  explain:'Partial 将类型的属性变成可选。函数根据更新对象创建新记录；示例中 ?? 保留有效的 0，数据只在内存中。',
  code:'interface StudyRecord { topic: string; minutes: number }\nfunction updateRecord(record: StudyRecord, changes: Partial<StudyRecord>): StudyRecord {\n  return { topic: changes.topic ?? record.topic, minutes: changes.minutes ?? record.minutes }\n}\nconst original: StudyRecord = { topic: "阅读", minutes: 20 }\nconst updated = updateRecord(original, { minutes: 0 })\nconsole.log("更新：" + updated.minutes)\nconsole.log("原值：" + original.minutes)',
  output:'更新：0\n原值：20',question:'只更新 minutes 时，topic 会怎样？',options:['保留原主题','自动变为空','从服务器读取'],answer:0,
  explanation:'changes 未提供 topic 时，?? 使用 record.topic；minutes 为 0 时则保留 0。',vocab:'partial · 部分的；changes · 更改；original · 原始的；minutes · 分钟数',
  notes:['interface（接口）定义 StudyRecord（学习记录），topic（主题）为 string（字符串），minutes（分钟数）为 number（数字）。','function（函数）定义 updateRecord（更新记录），record（原记录）为 StudyRecord（学习记录），changes（更改）为 Partial（所有字段可选）的 StudyRecord，返回 StudyRecord。','return（返回）新对象；topic（主题）从 changes（更改）取值，空值时使用 record（原记录）的 topic；minutes（分钟数）同理，?? 表示空值时使用备用值。','右花括号结束 updateRecord（更新记录）函数。','const（声明）创建 StudyRecord（学习记录）类型的 original（原记录），包含 topic（主题）和 minutes（分钟数）。','const（声明）创建 updated（更新后的记录），由 updateRecord（更新记录）处理 original（原记录）及 minutes（分钟数）为 0 的更改。','console（控制台）的 log（输出）显示 updated（更新后的记录）的 minutes（分钟数）。','console（控制台）的 log（输出）显示 original（原记录）的 minutes（分钟数）。'],
  language:'TypeScript',commentPrefix:'//',guide:['Partial 是类型工具，让属性可以省略；它不自动检查外部输入。','?? 保留 0；函数返回新对象，原记录不被修改。'],advanced:true
 }
,
 {
  id:'ts-pick-public',title:'构造公开用户信息',subtitle:'用 Pick 描述选出的字段',
  explain:'Pick 可以从已有类型选择属性，描述需要公开的数据形状。示例显式创建新对象，只放入名称；类型标注本身不会删除运行时字段。',
  code:'interface User { name: string; note: string }\ntype PublicUser = Pick<User, "name">\nfunction toPublic(user: User): PublicUser {\n  return { name: user.name }\n}\nconst user: User = { name: "小明", note: "内部备注" }\nconst visible = toPublic(user)\nconsole.log("名称：" + visible.name)\nconsole.log("包含备注：" + Object.hasOwn(visible, "note"))',
  output:'名称：小明\n包含备注：false',question:'为什么函数显式创建只含 name 的对象？',options:['确保返回对象不包含 note','Pick 会自动删除属性','自动加密备注'],answer:0,
  explanation:'Pick 只在类型层面描述字段；示例通过创建新对象，实际只返回 name。',vocab:'pick · 选择；public · 公开的；visible · 可见的；note · 备注',
  notes:['interface（接口）定义 User（用户），name（名称）和 note（备注）均为 string（字符串）。','type（类型别名）定义 PublicUser（公开用户），Pick（选择字段）从 User（用户）选择 name（名称）。','function（函数）定义 toPublic（转换为公开信息），接收 User（用户）类型的 user（用户），返回 PublicUser（公开用户）。','return（返回）新对象，其 name（名称）来自 user（用户）的 name（名称）。','右花括号结束 toPublic（转换为公开信息）函数。','const（声明）创建 User（用户）类型的 user（用户），包含 name（名称）和 note（备注）。','const（声明）创建 visible（公开信息），由 toPublic（转换为公开信息）处理 user（用户）得到。','console（控制台）的 log（输出）显示 visible（公开信息）的 name（名称）。','console（控制台）的 log（输出）显示 Object（对象工具）的 hasOwn（是否有自身属性）检查 visible（公开信息）是否包含 note（备注）的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['Pick 选择类型中的字段，不会改变或过滤运行时对象。','显式构造响应对象才能决定实际包含哪些字段；真实项目还需服务端授权和数据检查。'],advanced:true
 }
,
 {
  id:'ts-save-result-exhaustive',title:'完整处理保存结果',subtitle:'联合类型与 never 穷尽检查',
  explain:'示例用 status 区分保存成功、输入无效和保存失败。switch 分支处理每种情况，default 中的 never 让类型检查器在新增状态却遗漏处理时报告错误。示例只显示预设结果，不执行实际保存。',
  code:'type SaveResult =\n  | { status: "saved"; title: string }\n  | { status: "invalid" }\n  | { status: "failed"; message: string }\nfunction describe(result: SaveResult): string {\n  switch (result.status) {\n    case "saved": return "已保存：" + result.title\n    case "invalid": return "输入无效"\n    case "failed": return "保存失败：" + result.message\n    default: {\n      const unexpected: never = result\n      throw new Error("未处理的保存状态")\n    }\n  }\n}\nconsole.log(describe({ status: "saved", title: "阅读" }))\nconsole.log(describe({ status: "invalid" }))\nconsole.log(describe({ status: "failed", message: "磁盘不可用" }))',
  output:'已保存：阅读\n输入无效\n保存失败：磁盘不可用',question:'新增一种 status 却忘记添加分支时，never 的作用是什么？',options:['让类型检查器报告遗漏','自动保存到磁盘','自动添加缺失分支'],answer:0,
  explanation:'当所有联合类型成员都已处理时，default 中的 result 被缩小为 never；新增成员后若未处理，赋值会产生类型错误。类型检查不会验证未知外部数据。',vocab:'status · 状态；saved · 已保存；invalid · 无效；failed · 失败；never · 不可能的值',
  notes:['type（类型别名）定义 SaveResult（保存结果）。','status（状态）为 saved（已保存）时，title（标题）是 string（字符串）。','status（状态）为 invalid（无效）表示输入未通过检查。','status（状态）为 failed（失败）时，message（消息）是 string（字符串）。','function（函数）定义 describe（描述结果），接收 SaveResult（保存结果）类型的 result（结果），返回 string（字符串）。','switch（分支选择）检查 result（结果）的 status（状态）。','case（分支）为 saved（已保存）时，return（返回）提示与 result（结果）的 title（标题）。','case（分支）为 invalid（无效）时，return（返回）输入无效提示。','case（分支）为 failed（失败）时，return（返回）提示与 result（结果）的 message（消息）。','default（默认分支）处理不应出现的其他情况。','const（声明）创建 never（不可能的值）类型的 unexpected（未预料结果），赋值为 result（结果）以触发穷尽检查。','throw（抛出）new（新建）Error（错误对象）；意外数据在运行时进入这里时会抛出错误。','右花括号结束 default（默认分支）。','右花括号结束 switch（分支选择）。','右花括号结束 describe（描述结果）函数。','console（控制台）的 log（输出）显示 describe（描述结果）处理 status（状态）为 saved（已保存）及 title（标题）的结果。','console（控制台）的 log（输出）显示 describe（描述结果）处理 status（状态）为 invalid（无效）的结果。','console（控制台）的 log（输出）显示 describe（描述结果）处理 status（状态）为 failed（失败）及 message（消息）的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['逐个观察 status 如何决定可以读取的字段：成功读取 title，失败读取 message。','never 检查需要运行 TypeScript 类型检查；运行时对外部数据仍需要单独验证。'],advanced:true
 }
,
 {
  id:'ts-parse-records',title:'解析并检查学习记录',subtitle:'区分格式错误和数据不符合要求',
  explain:'JSON.parse 只负责解析文字，不保证字段符合业务要求。示例将解析结果视为 unknown，再检查数组、标题和分钟数；数据是固定文字，不发起网络请求。',
  code:'function isRecord(value: unknown): boolean {\n  if (value === null || typeof value !== "object" || Array.isArray(value)) return false\n  if (!("title" in value) || !("minutes" in value)) return false\n  return typeof value.title === "string" && value.title.trim().length > 0 && typeof value.minutes === "number" && Number.isSafeInteger(value.minutes) && value.minutes >= 0\n}\nfunction showRecords(text: string): string {\n  let data: unknown\n  try {\n    data = JSON.parse(text)\n  } catch (error) {\n    return "格式错误"\n  }\n  if (!Array.isArray(data) || !data.every(isRecord)) return "数据无效"\n  return "记录数：" + data.length\n}\nconsole.log(showRecords(\'[{"title":"阅读","minutes":0}]\'))\nconsole.log(showRecords("[]"))\nconsole.log(showRecords(\'[{"title":"阅读","minutes":-1}]\'))\nconsole.log(showRecords("{"))',
  output:'记录数：1\n记录数：0\n数据无效\n格式错误',question:'JSON 格式正确但 minutes 为负数时显示什么？',options:['数据无效','格式错误','自动保存'],answer:0,
  explanation:'JSON.parse 可以解析负数，但本例业务规则只接受非负安全整数，因此返回数据无效；空数组则是有效的空记录。',vocab:'parse · 解析；record · 记录；unknown · 未知；minutes · 分钟数；length · 长度',
  notes:['function（函数）定义 isRecord（是否为记录），接收 unknown（未知类型）的 value（值），返回 boolean（布尔值）。','if（如果）value（值）为 null（空值）、typeof（查看类型）的结果不是 object（对象），或 Array（数组工具）的 isArray（是否为数组）检查为真，return（返回）false（假）。','if（如果）title（标题）或 minutes（分钟数）不 in（在）value（值）中，return（返回）false（假）。','return（返回）检查结果：typeof（查看类型）确认 value（值）的 title（标题）为 string（字符串）且 trim（去除首尾空格）后的 length（长度）大于 0；minutes（分钟数）为 number（数字），通过 Number（数字工具）的 isSafeInteger（是否为安全整数）检查且不小于 0。','右花括号结束 isRecord（是否为记录）函数。','function（函数）定义 showRecords（显示记录），接收 string（字符串）类型的 text（文字），返回 string（字符串）。','let（可重新赋值的声明）创建 unknown（未知类型）的 data（数据）。','try（尝试）开始解析可能不合法的文字。','data（数据）保存 JSON（数据交换格式）的 parse（解析）处理 text（文字）的结果。','catch（捕获）接收 error（错误对象）。','return（返回）格式错误提示。','右花括号结束 catch（捕获）分支。','if（如果）Array（数组工具）的 isArray（是否为数组）检查 data（数据）失败，或 data 的 every（每项满足）用 isRecord（是否为记录）检查失败，return（返回）数据无效提示。','return（返回）记录数提示与 data（数组）的 length（长度）。','右花括号结束 showRecords（显示记录）函数。','console（控制台）的 log（输出）显示 showRecords（显示记录）处理 title（标题）、minutes（分钟数）为 0 的记录。','console（控制台）的 log（输出）显示 showRecords（显示记录）处理空数组文字的结果。','console（控制台）的 log（输出）显示 showRecords（显示记录）处理 title（标题）和负数 minutes（分钟数）的结果。','console（控制台）的 log（输出）显示 showRecords（显示记录）处理不完整 JSON 文字的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['先尝试解析，只有格式正确后才检查数组和每条记录。','空数组通过 every 检查；此例只返回记录数量，真实项目还需限制数据量和业务范围。'],advanced:true
 }
,
 {
  id:'ts-duplicate-task-ids',title:'检查任务编号是否重复',subtitle:'用 Set 发现类型正确但编号冲突的数据',
  explain:'任务编号虽然都是数字，仍可能重复。示例用两个集合记录见过的编号和重复编号；每个重复编号只报告一次，空列表没有重复。',
  code:'interface Task { id: number; title: string }\nfunction duplicateIds(tasks: Task[]): number[] {\n  const seen = new Set<number>()\n  const duplicates = new Set<number>()\n  for (const task of tasks) {\n    if (seen.has(task.id)) duplicates.add(task.id)\n    seen.add(task.id)\n  }\n  return [...duplicates]\n}\nfunction show(tasks: Task[]): void {\n  const ids = duplicateIds(tasks)\n  console.log(ids.length ? "重复编号：" + ids.join("、") : "无重复编号")\n}\nshow([{ id: 1, title: "阅读" }, { id: 2, title: "复习" }, { id: 2, title: "练习" }, { id: 2, title: "总结" }])\nshow([{ id: 1, title: "阅读" }, { id: 2, title: "复习" }])\nshow([])',
  output:'重复编号：2\n无重复编号\n无重复编号',question:'编号 2 出现三次时会报告几次？',options:['一次','两次','三次'],answer:0,
  explanation:'duplicates 是 Set，重复添加相同编号不会产生多个元素。',vocab:'duplicate · 重复；id · 编号；seen · 已见过；set · 集合；has · 是否包含；add · 添加',
  notes:['interface（接口）定义 Task（任务）结构，id（编号）为 number（数字），title（标题）为 string（字符串）。','function（函数）定义 duplicateIds（重复编号），接收 Task（任务）数组 tasks（任务列表），返回 number（数字）数组。','const（声明）创建 seen（已见编号），new（新建）Set（集合）保存 number（数字）。','const（声明）创建 duplicates（重复编号集合），new（新建）Set（集合）保存 number（数字）。','for（循环）让 const（只读声明）的 task（当前任务）依次取自 of（来自）tasks（任务列表）。','if（如果）seen（已见编号）的 has（包含）发现 task（当前任务）的 id（编号），就向 duplicates（重复编号集合）add（添加）该 id。','seen（已见编号）用 add（添加）记录 task（当前任务）的 id（编号）。','右花括号结束 for（循环）。','return（返回）将 duplicates（重复编号集合）展开为数组。','右花括号结束 duplicateIds（重复编号）函数。','function（函数）定义 show（显示结果），接收 Task（任务）数组 tasks（任务列表），void（无返回值）。','const（声明）创建 ids（编号列表），接收 duplicateIds（重复编号）处理 tasks（任务列表）的结果。','console（控制台）的 log（输出）检查 ids（编号列表）的 length（长度），非空时用 join（连接）显示编号，否则显示无重复。','右花括号结束 show（显示结果）函数。','show（显示结果）接收任务数组；id（编号）2 出现三次，title（标题）表示任务名称。','show（显示结果）接收 id（编号）不同的任务数组，title（标题）表示任务名称。','show（显示结果）接收空数组。'],
  language:'TypeScript',commentPrefix:'//',guide:['先比较已见集合与重复集合各自的作用；编号重复多次仍只显示一次。','此例假定传入的数据已经符合 Task 结构；真实接口还需要在运行时检查字段和编号的有效范围。'],advanced:true
 }
,
 {
  id:'ts-filter-unknown-tasks',title:'从未知数据筛选有效任务',subtitle:'类型守卫与数组 filter',
  explain:'示例把输入视为 unknown 数组，用类型守卫检查每项的标题和完成状态。filter 保留有效任务并让 TypeScript 识别其类型；示例只处理固定数据。',
  code:'type Task = { title: string; done: boolean }\nfunction isTask(value: unknown): value is Task {\n  if (value === null || typeof value !== "object" || Array.isArray(value)) return false\n  if (!("title" in value) || !("done" in value)) return false\n  return typeof value.title === "string" && value.title.trim().length > 0 && typeof value.done === "boolean"\n}\nfunction show(inputs: unknown[]): void {\n  const tasks = inputs.filter(isTask)\n  const pending = tasks.filter(task => !task.done).map(task => task.title)\n  console.log("有效：" + tasks.length + "，无效：" + (inputs.length - tasks.length))\n  console.log("待办：" + (pending.join("、") || "暂无"))\n}\nshow([{ title: "阅读", done: false }, { title: "", done: true }, null])\nshow([])',
  output:'有效：1，无效：2\n待办：阅读\n有效：0，无效：0\n待办：暂无',question:'空标题的对象为什么被排除？',options:['类型守卫要求标题去空格后非空','filter 自动修复标题','它被上传到服务器'],answer:0,
  explanation:'isTask 在运行时检查字段类型和标题内容；只有返回 true 的项被 filter 保留。',vocab:'guard · 守卫；unknown · 未知；filter · 筛选；pending · 待办；length · 数量',
  notes:['type（类型别名）定义 Task（任务）：title（标题）为 string（字符串），done（完成状态）为 boolean（布尔值）。','function（函数）定义 isTask（是否为任务），接收 unknown（未知类型）的 value（值）；value is Task（值符合任务类型）是类型守卫。','if（如果）value（值）为 null（空值）、typeof（查看类型）结果不是 object（对象），或 Array（数组工具）的 isArray（是否为数组）检查为真，return（返回）false（假）。','if（如果）title（标题）或 done（完成状态）不 in（在）value（值）中，return（返回）false（假）。','return（返回）检查结果：typeof（查看类型）确认 value（值）的 title（标题）是 string（字符串），trim（去除首尾空格）后的 length（长度）大于 0，done（完成状态）为 boolean（布尔值）。','右花括号结束 isTask（是否为任务）函数。','function（函数）定义 show（显示），接收 unknown（未知类型）数组 inputs（输入列表），返回 void（无返回值）。','const（声明）创建 tasks（有效任务），inputs（输入列表）的 filter（筛选）使用 isTask（是否为任务）检查每项。','const（声明）创建 pending（待办标题），tasks（有效任务）的 filter（筛选）保留 task（当前任务）的 done（完成状态）为假的项，map（映射）取得 title（标题）。','console（控制台）的 log（输出）显示 tasks（有效任务）的 length（数量）和 inputs（输入列表）的 length（数量）减去有效数量。','console（控制台）的 log（输出）将 pending（待办标题）通过 join（连接）显示；空结果时用 || 显示“暂无”。','右花括号结束 show（显示）函数。','show（显示）处理示例数组；title（标题）、done（完成状态）、false（假）、true（真）、null（空值）分别代表任务字段和示例值。','show（显示）处理空数组。'],
  language:'TypeScript',commentPrefix:'//',guide:['先检查对象和字段，再把类型守卫交给 filter；后续访问 task.done 和 task.title 时具有明确类型。','此例选择跳过无效项并统计数量；实际接口需根据业务决定拒绝整批还是部分接受。'],advanced:true
 }
,
 {
  id:'ts-task-validation-position',title:'检查任务并指出错误位置',subtitle:'类型守卫与联合结果',
  explain:'外部数据可能不是数组，也可能有无效任务。示例先检查整体，再逐项检查标题；发现无效项时用从 1 开始的位置给出提示，全部通过后返回整理后的标题。',
  code:'type Result = { ok: true; titles: string[] } | { ok: false; message: string }\nfunction isTask(value: unknown): value is { title: string } {\n  return value !== null && typeof value === "object" && !Array.isArray(value) && "title" in value && typeof value.title === "string" && value.title.trim().length > 0\n}\nfunction checkTasks(input: unknown): Result {\n  if (!Array.isArray(input)) return { ok: false, message: "数据无效" }\n  const titles: string[] = []\n  for (let index = 0; index < input.length; index++) {\n    const task: unknown = input[index]\n    if (!isTask(task)) return { ok: false, message: `第 ${index + 1} 项无效` }\n    titles.push(task.title.trim())\n  }\n  return { ok: true, titles }\n}\nfunction show(input: unknown): string {\n  const result = checkTasks(input)\n  if (!result.ok) return result.message\n  return "标题：" + result.titles.join("、")\n}\nconsole.log(show([{ title: " 阅读 " }, { title: "练习" }]))\nconsole.log(show([{ title: "阅读" }, { title: " " }]))\nconsole.log(show([null]))\nconsole.log(show("不是数组"))',
  output:'标题：阅读、练习\n第 2 项无效\n第 1 项无效\n数据无效',question:'为什么提示中使用 index + 1？',options:['数组索引从 0 开始，提示位置从 1 开始','自动修复无效数据','把任务上传到服务器'],answer:0,
  explanation:'代码使用从 0 开始的数组索引读取数据，提示时加 1 更符合用户阅读习惯。',vocab:'task · 任务；validation · 校验；position · 位置；index · 索引；title · 标题',
  notes:['type（类型别名）定义 Result（结果）：成功时 ok（成功标志）为 true（真），titles（标题列表）为 string（字符串）数组；失败时 ok 为 false（假），message（消息）为 string。','function（函数）定义 isTask（是否为任务）类型守卫，接收 unknown（未知类型）value（值），成功时声明 value is（是）含 string（字符串）title（标题）的对象。','return（返回）检查结果：value（值）不为 null（空值）、typeof（查看类型）为 object（对象）、Array（数组工具）的 isArray（是否为数组）为假，且 title（标题）in（存在于）value 中，title 的 typeof 为 string（字符串），经 trim（去除首尾空格）后 length（长度）大于 0。','右花括号结束 isTask（是否为任务）函数。','function（函数）定义 checkTasks（检查任务），接收 unknown（未知类型）input（输入），返回 Result（结果）。','if（如果）Array（数组工具）的 isArray（是否为数组）检查 input（输入）失败，return（返回）ok（成功标志）为 false（假）和 message（消息）组成的结果。','const（声明）创建 string（字符串）数组 titles（标题列表），初始为空。','for（循环）使用 let（可重新赋值声明）创建 index（索引），从 0 到 input（输入数组）的 length（长度）之前，每次递增。','const（声明）创建 unknown（未知类型）的 task（当前任务），读取 input（输入数组）的 index（索引）位置。','if（如果）isTask（是否为任务）检查 task（当前任务）失败，return（返回）ok（成功标志）为 false（假）和 message（消息）；${index + 1}（插入从 1 开始的位置）。','titles（标题列表）的 push（追加）加入 task（当前任务）的 title（标题）经 trim（去除首尾空格）后的结果。','右花括号结束 for（循环）。','return（返回）ok（成功标志）为 true（真）和 titles（标题列表）组成的结果。','右花括号结束 checkTasks（检查任务）函数。','function（函数）定义 show（显示），接收 unknown（未知类型）input（输入），返回 string（字符串）。','const（声明）创建 result（结果），由 checkTasks（检查任务）处理 input（输入）。','if（如果）result（结果）的 ok（成功标志）为假，return（返回）result 的 message（消息）。','return（返回）标题提示和 result（结果）的 titles（标题列表）经 join（连接）得到的文字。','右花括号结束 show（显示）函数。','console（控制台）的 log（输出）显示 show（显示）处理有效标题的结果；title（标题）是字段。','console（控制台）的 log（输出）显示 show（显示）处理空白 title（标题）的结果。','console（控制台）的 log（输出）显示 show（显示）处理 null（空值）的结果。','console（控制台）的 log（输出）显示 show（显示）处理非数组的结果。'],
  language:'TypeScript',commentPrefix:'//',guide:['从整体检查开始，再按索引逐个验证；发现第一处错误时立即返回。','示例允许空数组并区分大小写；实际接口应根据业务决定数量限制及重复规则。'],advanced:true
 }
,
 {
  id:'ts-parse-api-tasks',title:'检查接口返回的任务列表',subtitle:'从未知数据得到可靠结果',
  explain:'接口返回的内容不能仅靠类型标注保证正确。示例检查对象中的 tasks 是否为字符串数组，拒绝空标题，再用结果类型区分成功和无效数据；数据来自固定示例。',
  code:'type Result = { ok: true; tasks: string[] } | { ok: false }\nfunction parseTasks(value: unknown): Result {\n  if (value === null || typeof value !== "object" || Array.isArray(value)) return { ok: false }\n  if (!("tasks" in value) || !Array.isArray(value.tasks)) return { ok: false }\n  const tasks: string[] = []\n  for (const item of value.tasks) {\n    if (typeof item !== "string" || !item.trim()) return { ok: false }\n    tasks.push(item.trim())\n  }\n  return { ok: true, tasks }\n}\nfunction show(value: unknown): string {\n  const result = parseTasks(value)\n  if (!result.ok) return "数据无效"\n  return result.tasks.length ? "任务：" + result.tasks.join("、") : "暂无任务"\n}\nconsole.log(show({ tasks: [" 阅读 ", "复习"] }))\nconsole.log(show({ tasks: [] }))\nconsole.log(show({ tasks: ["阅读", "  "] }))\nconsole.log(show({ tasks: "阅读" }))',
  output:'任务：阅读、复习\n暂无任务\n数据无效\n数据无效',question:'为什么不能只给接口结果写一个类型标注？',options:['类型标注不会自动检查运行时数据','类型标注会自动联网','类型标注会保存任务'],answer:0,
  explanation:'来自外部的数据可能与预期不同；需要在运行时检查后，才能安全地按所需结构使用。',vocab:'result · 结果；parse · 解析；unknown · 未知；tasks · 任务列表；item · 当前项；trim · 去除首尾空格',
  notes:['type（类型别名）定义 Result（结果）：ok（是否成功）为 true（真）时包含 string（字符串）数组 tasks（任务）；ok 为 false（假）时表示无效。','function（函数）定义 parseTasks（解析任务），接收 unknown（未知类型）的 value（值），返回 Result（结果）。','if（如果）value（值）为 null（空值）、typeof（查看类型）不是 object（对象），或 Array（数组工具）的 isArray（是否为数组）为真，return（返回）ok（是否成功）为 false（假）。','if（如果）tasks（任务列表）不 in（在）value（值）中，或者 Array（数组工具）的 isArray（是否为数组）检查 value.tasks 失败，return（返回）ok（是否成功）为 false（假）。','const（声明）创建 tasks（任务列表），类型为 string（字符串）数组，初始为空。','for（循环）让 const（声明）的 item（当前项）依次取自 of（来自）value（值）的 tasks（任务列表）。','if（如果）typeof（查看类型）显示 item（当前项）不是 string（字符串），或 trim（去除首尾空格）后为空，return（返回）ok（是否成功）为 false（假）。','tasks（任务列表）的 push（追加）加入 item（当前项）经 trim（去除首尾空格）后的值。','右花括号结束 for（循环）。','return（返回）ok（是否成功）为 true（真）和 tasks（任务列表）。','右花括号结束 parseTasks（解析任务）函数。','function（函数）定义 show（显示），接收 unknown（未知类型）的 value（值），返回 string（字符串）。','const（声明）创建 result（结果），调用 parseTasks（解析任务）处理 value（值）。','if（如果）result（结果）的 ok（是否成功）为假，return（返回）数据无效提示。','return（返回）result（结果）的 tasks（任务列表）按 length（长度）判断是否为空；有内容时用 join（连接）显示，没有则显示空状态。','右花括号结束 show（显示）函数。','console（控制台）的 log（输出）调用 show（显示），传入 tasks（任务列表）中的两条标题。','console（控制台）的 log（输出）调用 show（显示），传入空的 tasks（任务列表）。','console（控制台）的 log（输出）调用 show（显示），传入包含空白标题的 tasks（任务列表）。','console（控制台）的 log（输出）调用 show（显示），传入不是数组的 tasks（任务列表）。'],
  language:'TypeScript',commentPrefix:'//',guide:['先判断外层是不是对象、tasks 是不是数组，再逐项检查并整理标题。','ok 用于区分成功和失败；空数组是有效结果。示例不发起网络请求，真实数据还需确定大小限制。'],advanced:true
 }
,
 {
  id:'ts-mock-api-load',title:'处理异步接口的不同结果',subtitle:'模拟请求、校验数据与错误反馈',
  explain:'示例把请求函数作为参数传入，依次处理服务错误、数据格式错误和读取异常。这里使用模拟响应，不发起网络请求。',
  code:'type Reply = { ok: boolean; json: () => Promise<unknown> }\nasync function load(request: () => Promise<Reply>): Promise<string> {\n  try {\n    const response = await request()\n    if (!response.ok) return "服务错误"\n    const data: unknown = await response.json()\n    if (!Array.isArray(data) || !data.every(item => typeof item === "string" && item.trim())) return "数据无效"\n    return data.length ? "任务：" + data.join("、") : "暂无任务"\n  } catch (error) {\n    return "读取失败"\n  }\n}\nasync function demo(): Promise<void> {\n  console.log(await load(async () => ({ ok: true, json: async () => ["阅读"] })))\n  console.log(await load(async () => ({ ok: false, json: async () => [] })))\n  console.log(await load(async () => ({ ok: true, json: async () => [null] })))\n  console.log(await load(async () => { throw new Error("网络错误") }))\n}\ndemo()',
  output:'任务：阅读\n服务错误\n数据无效\n读取失败',question:'为什么 response.ok 为 false 时不继续读取数据？',options:['先处理服务返回的失败状态','自动修复服务','数据已经写入数据库'],answer:0,
  explanation:'ok 表示本例模拟响应是否成功；失败时提前返回。真实接口还需要按状态码和数据约定处理。',vocab:'reply · 响应；request · 请求；response · 响应；await · 等待；unknown · 未知；error · 错误',
  notes:['type（类型别名）定义 Reply（响应），ok（是否成功）为 boolean（布尔值），json（读取数据）是返回 Promise（异步结果）且结果为 unknown（未知类型）的函数。','async（异步）function（函数）定义 load（加载），request（请求函数）返回 Promise（异步结果）和 Reply（响应）；本函数返回 string（字符串）的 Promise。','try（尝试）开始处理可能失败的异步操作。','const（声明）创建 response（响应），await（等待）request（请求函数）的结果。','if（如果）response（响应）的 ok（是否成功）为假，return（返回）服务错误。','const（声明）创建 unknown（未知类型）的 data（数据），await（等待）response（响应）的 json（读取数据）结果。','if（如果）Array（数组工具）的 isArray（是否为数组）检查 data（数据）失败，或者 every（每项满足）检查 item（当前项）的 typeof（查看类型）不是 string（字符串）或 trim（去除首尾空格）后为空，return（返回）数据无效。','return（返回）根据 data（数组）的 length（长度）判断：有内容时用 join（连接）显示任务，否则显示暂无任务。','catch（捕获）接收 error（错误对象）。','return（返回）读取失败提示。','右花括号结束 catch（捕获）分支。','右花括号结束 load（加载）函数。','async（异步）function（函数）定义 demo（演示），返回 void（无返回值）的 Promise（异步结果）。','console（控制台）的 log（输出）显示 await（等待）load（加载）的结果；模拟 async（异步）响应的 ok（是否成功）为 true（真），json（读取数据）返回任务数组。','console（控制台）的 log（输出）显示 await（等待）load（加载）的结果；模拟 async（异步）响应的 ok（是否成功）为 false（假），json（读取数据）返回空数组。','console（控制台）的 log（输出）显示 await（等待）load（加载）的结果；模拟 async（异步）响应的 ok（是否成功）为 true（真），json（读取数据）返回含 null（空值）的数组。','console（控制台）的 log（输出）显示 await（等待）load（加载）的结果；模拟 async（异步）请求用 throw（抛出）new（新建）Error（错误对象）。','右花括号结束 demo（演示）函数。','demo（演示）调用异步演示函数。'],
  language:'TypeScript',commentPrefix:'//',guide:['先判断响应状态，再将解析后的数据视为 unknown 并检查结构。','四个请求都是模拟函数；真实网络请求还需考虑超时、取消及接口约定。'],advanced:true
 }
,
 {
  id:'ts-latest-request',title:'避免旧请求覆盖新结果',subtitle:'用序号识别过时的异步响应',
  explain:'连续搜索时，先发出的请求可能后返回。示例给每次请求分配递增序号，仅接受最新请求的结果；使用手动控制的模拟数据，不联网。',
  code:'let latest = 0\nasync function load(request: () => Promise<string>): Promise<string> {\n  const id = ++latest\n  try {\n    const value = await request()\n    if (id !== latest) return "已忽略旧结果"\n    return "最新：" + value\n  } catch (error) {\n    if (id !== latest) return "已忽略旧结果"\n    return "读取失败"\n  }\n}\nasync function demo(): Promise<void> {\n  let finish!: (value: string) => void\n  const slow = new Promise<string>(resolve => { finish = resolve })\n  const oldResult = load(() => slow)\n  const newResult = load(async () => "复习")\n  console.log(await newResult)\n  finish("阅读")\n  console.log(await oldResult)\n  const oldFailure = load(async () => { throw new Error("旧错误") })\n  const newer = load(async () => "练习")\n  console.log(await newer)\n  console.log(await oldFailure)\n  console.log(await load(async () => { throw new Error("最新错误") }))\n}\ndemo()',
  output:'最新：复习\n已忽略旧结果\n最新：练习\n已忽略旧结果\n读取失败',question:'旧请求在新请求之后返回时，为什么不显示它的内容？',options:['它的序号已经不是最新','它自动取消了网络请求','它已经保存到数据库'],answer:0,
  explanation:'每次 load 都更新 latest；请求结束时比较自己的 id 与 latest，旧请求不作为最新结果。',vocab:'latest · 最新；request · 请求；resolve · 完成异步结果；slow · 较慢；result · 结果',
  notes:['let（可重新赋值声明）创建 latest（最新请求序号），初始为 0。','async（异步）function（函数）定义 load（加载），request（请求函数）返回 string（字符串）的 Promise（异步结果），本函数也返回 string 的 Promise。','const（声明）创建 id（本次序号），将 latest（最新请求序号）加一后赋值。','try（尝试）开始等待可能失败的操作。','const（声明）创建 value（返回值），await（等待）request（请求函数）的结果。','if（如果）id（本次序号）不等于 latest（最新请求序号），return（返回）忽略旧结果的提示。','return（返回）最新结果文字和 value（返回值）。','catch（捕获）接收 error（错误对象）。','if（如果）id（本次序号）不等于 latest（最新请求序号），return（返回）忽略旧结果的提示，避免旧错误覆盖新状态。','return（返回）读取失败提示。','右花括号结束 catch（捕获）分支。','右花括号结束 load（加载）函数。','async（异步）function（函数）定义 demo（演示），返回 void（无返回值）的 Promise（异步结果）。','let（可重新赋值声明）创建 finish（完成函数）；value（值）为 string（字符串），void（无返回值），感叹号表示随后会赋值。','const（声明）创建 slow（较慢请求）的 string（字符串）类型 Promise（异步结果），new（新建）时把 resolve（完成异步结果）赋给 finish（完成函数）。','const（声明）创建 oldResult（旧结果），调用 load（加载）并传入返回 slow（较慢请求）的函数。','const（声明）创建 newResult（新结果），调用 load（加载）并传入返回固定文字的 async（异步）函数。','console（控制台）的 log（输出）显示 await（等待）newResult（新结果）的结果。','finish（完成函数）让较慢请求以“阅读”完成。','console（控制台）的 log（输出）显示 await（等待）oldResult（旧结果）的结果。','const（声明）创建 oldFailure（旧请求失败结果），load（加载）接收 async（异步）函数，throw（抛出）new（新建）Error（错误对象）。','const（声明）创建 newer（更新请求），load（加载）接收返回固定文字的 async（异步）函数。','console（控制台）的 log（输出）显示 await（等待）newer（更新请求）的结果。','console（控制台）的 log（输出）显示 await（等待）oldFailure（旧请求失败结果），旧错误会被忽略。','console（控制台）的 log（输出）显示 await（等待）load（加载）的结果；async（异步）请求通过 throw（抛出）new（新建）Error（错误对象）模拟最新请求失败。','右花括号结束 demo（演示）函数。','demo（演示）调用异步演示函数。'],
  language:'TypeScript',commentPrefix:'//',guide:['先启动旧请求，再启动并完成新请求，最后让旧请求返回。','旧请求的成功和失败都要忽略；最新请求失败才显示错误。序号不会取消请求。'],advanced:true
 }
,
 {
  id:'ts-abort-request',title:'取消尚未完成的请求',subtitle:'传递取消信号并清理监听器',
  explain:'示例用定时器模拟请求，将 AbortSignal 传入操作；取消时清理定时器并返回取消错误，成功时移除监听器。这里不访问网络。',
  code:'function mockRequest(signal: AbortSignal): Promise<string> {\n  return new Promise((resolve, reject) => {\n    if (signal.aborted) { reject(new DOMException("取消", "AbortError")); return }\n    const timer = setTimeout(() => {\n      signal.removeEventListener("abort", onAbort)\n      resolve("阅读")\n    }, 10)\n    function onAbort(): void {\n      clearTimeout(timer)\n      reject(new DOMException("取消", "AbortError"))\n    }\n    signal.addEventListener("abort", onAbort, { once: true })\n  })\n}\nasync function demo(): Promise<void> {\n  const first = new AbortController()\n  console.log("完成：" + await mockRequest(first.signal))\n  const second = new AbortController()\n  const pending = mockRequest(second.signal)\n  second.abort()\n  try {\n    await pending\n  } catch (error) {\n    if (error instanceof Error && error.name === "AbortError") console.log("请求已取消")\n    else throw error\n  }\n  const third = new AbortController()\n  third.abort()\n  try {\n    await mockRequest(third.signal)\n  } catch (error) {\n    if (error instanceof Error && error.name === "AbortError") console.log("开始前已取消")\n    else throw error\n  }\n}\ndemo()',
  output:'完成：阅读\n请求已取消\n开始前已取消',question:'取消信号发出后，这个模拟请求如何停止定时器？',options:['监听 abort 并调用 clearTimeout','自动保存任务','继续等待后再显示完成'],answer:0,
  explanation:'onAbort 清除尚未完成的定时器并让 Promise 失败；真实请求能否取消取决于所用 API 是否支持该信号。',vocab:'abort · 取消；signal · 信号；pending · 等待中的操作；listener · 监听器；timeout · 定时器',
  notes:['function（函数）定义 mockRequest（模拟请求），接收 AbortSignal（取消信号）类型的 signal（信号），返回 string（字符串）的 Promise（异步结果）。','return（返回）new（新建）Promise（异步结果），接收 resolve（成功）和 reject（失败）回调。','if（如果）signal（信号）的 aborted（已取消）为真，reject（失败）使用 new（新建）DOMException（浏览器异常），AbortError（取消错误）为错误名，return（返回）结束回调。','const（声明）创建 timer（定时器标识），setTimeout（延时执行）注册回调。','signal（信号）的 removeEventListener（移除事件监听器）移除 abort（取消事件）对应的 onAbort（取消处理函数）。','resolve（成功）以“阅读”完成异步结果。','结束 setTimeout（延时执行）调用，延迟 10 毫秒。','function（函数）定义 onAbort（取消处理函数），void（无返回值）。','clearTimeout（清除定时器）取消 timer（定时器标识）。','reject（失败）使用 new（新建）DOMException（浏览器异常），AbortError（取消错误）为错误名。','右花括号结束 onAbort（取消处理函数）。','signal（信号）的 addEventListener（添加事件监听器）为 abort（取消事件）注册 onAbort（取消处理函数）；once（仅一次）为 true（真）。','结束 Promise（异步结果）调用。','右花括号结束 mockRequest（模拟请求）函数。','async（异步）function（函数）定义 demo（演示），返回 void（无返回值）的 Promise（异步结果）。','const（声明）创建 first（第一个控制器），new（新建）AbortController（取消控制器）。','console（控制台）的 log（输出）显示 await（等待）mockRequest（模拟请求）接收 first（第一个控制器）的 signal（信号）后的结果。','const（声明）创建 second（第二个控制器），new（新建）AbortController（取消控制器）。','const（声明）创建 pending（等待中的操作），mockRequest（模拟请求）接收 second（第二个控制器）的 signal（信号）。','second（第二个控制器）的 abort（取消）发出信号。','try（尝试）开始等待可能失败的操作。','await（等待）pending（等待中的操作）。','catch（捕获）接收 error（错误对象）。','if（如果）error（错误对象）instanceof（属于）Error（错误类型），且 name（名称）为 AbortError（取消错误），console（控制台）的 log（输出）显示取消提示。','else（否则）throw（抛出）error（错误对象），不把其他错误当作取消。','右花括号结束 catch（捕获）分支。','const（声明）创建 third（第三个控制器），new（新建）AbortController（取消控制器）。','third（第三个控制器）的 abort（取消）先发出信号。','try（尝试）开始等待可能失败的操作。','await（等待）mockRequest（模拟请求）接收 third（第三个控制器）的 signal（信号）。','catch（捕获）接收 error（错误对象）。','if（如果）error（错误对象）instanceof（属于）Error（错误类型），且 name（名称）为 AbortError（取消错误），console（控制台）的 log（输出）显示开始前已取消。','else（否则）throw（抛出）error（错误对象），保留其他错误。','右花括号结束 catch（捕获）分支。','右花括号结束 demo（演示）函数。','demo（演示）调用异步演示函数。'],
  language:'TypeScript',commentPrefix:'//',guide:['先看正常完成和进行中取消，再看开始前已取消的信号如何被识别。','取消需要操作主动支持；成功后移除监听器，避免继续持有不再需要的回调。'],advanced:true
 }
 ,
 {
  id:'ts-generic-pagination',title:'为不同数据类型分页',subtitle:'泛型与结果联合类型',
  explain:'分页函数使用泛型保留数组元素的类型，并用联合类型区分成功与参数错误。类型标注不能限制所有数字的范围，因此仍需运行时检查；示例不请求服务器。',
  code:'type PageResult<T> = { ok: true; total: number; items: T[] } | { ok: false; message: string }\nfunction paginate<T>(items: T[], page: number, size: number): PageResult<T> {\n  if (!Number.isSafeInteger(page) || page < 1 || !Number.isSafeInteger(size) || size < 1) return { ok: false, message: "分页参数无效" }\n  const start = (page - 1) * size\n  if (!Number.isSafeInteger(start)) return { ok: false, message: "分页参数无效" }\n  return { ok: true, total: items.length, items: items.slice(start, start + size) }\n}\nfunction show(result: PageResult<string>): void {\n  if (!result.ok) { console.log(result.message); return }\n  console.log(`总数：${result.total}，本页：${result.items.join("、") || "暂无"}`)\n}\nconst tasks = ["阅读", "复习", "练习"]\nshow(paginate(tasks, 1, 2))\nshow(paginate(tasks, 2, 2))\nshow(paginate(tasks, 3, 2))\nshow(paginate(tasks, 0, 2))\nconst numbers = paginate([10, 20, 30], 2, 2)\nif (numbers.ok) console.log("数字：" + numbers.items.join("、"))',
  output:'总数：3，本页：阅读、复习\n总数：3，本页：练习\n总数：3，本页：暂无\n分页参数无效\n数字：30',question:'为什么还要检查页码是否大于零？',options:['number 类型本身不能保证取值范围','TypeScript 会自动联网','数组不能保存文字'],answer:0,
  explanation:'number 表明它是数字，但零、小数和过大的数字仍可能传入；示例在运行时拒绝不合法的参数。',vocab:'page · 页码；result · 结果；total · 总数；items · 项目；size · 每页数量；paginate · 分页',
  notes:['type（类型别名）定义泛型 PageResult（分页结果），T（元素类型）表示任意类型；成功分支 ok（是否成功）为 true（真），total（总数）为 number（数字），items（项目列表）为 T 数组；失败分支 ok 为 false（假），message（消息）为 string（字符串）。','function（函数）定义泛型 paginate（分页），T（元素类型）表示数组元素；items（项目列表）为 T 数组，page（页码）和 size（每页数量）为 number（数字），返回 PageResult（分页结果）中的 T 类型。','if（如果）Number（数字工具）的 isSafeInteger（是否为安全整数）检查 page（页码）或 size（每页数量）失败，或任意值小于 1，return（返回）ok（成功标志）为 false（假）和 message（消息）组成的错误结果。','const（声明）创建 start（起始索引），由 page（页码）减 1 后乘 size（每页数量）得到。','if（如果）Number（数字工具）的 isSafeInteger（是否为安全整数）检查 start（起始索引）失败，return（返回）ok（成功标志）为 false（假）和 message（消息）组成的错误结果。','return（返回）成功结果：ok（成功标志）为 true（真），total（总数）是 items（项目列表）的 length（长度），items 通过 slice（切片）从 start（起始索引）取到 start 加 size（每页数量）之前。','右花括号结束 paginate（分页）函数。','function（函数）定义 show（显示结果），接收 string（字符串）元素的 PageResult（分页结果）result（结果），返回 void（无返回值）。','if（如果）result（结果）的 ok（成功标志）为假，console（控制台）的 log（输出）显示 message（消息），return（返回）结束函数。','console（控制台）的 log（输出）显示 result（结果）的 total（总数）和 items（项目列表）经 join（连接）得到的内容，空文字时显示暂无；${...} 为字符串插值。','右花括号结束 show（显示结果）函数。','const（声明）创建 tasks（任务列表），包含三条固定任务。','show（显示结果）调用 paginate（分页）处理 tasks（任务列表）的第 1 页，每页 2 项。','show（显示结果）调用 paginate（分页）处理 tasks（任务列表）的第 2 页，每页 2 项。','show（显示结果）调用 paginate（分页）处理 tasks（任务列表）的第 3 页，每页 2 项。','show（显示结果）调用 paginate（分页）处理 tasks（任务列表）的无效页码 0，每页 2 项。','const（声明）创建 numbers（数字分页结果），调用 paginate（分页）处理数字数组的第 2 页，每页 2 项。','if（如果）numbers（数字分页结果）的 ok（成功标志）为真，console（控制台）的 log（输出）显示 numbers 的 items（项目列表）通过 join（连接）得到的内容。'],
  language:'TypeScript',commentPrefix:'//',guide:['对比成功分支与错误分支；检查 ok 后才能安全读取对应字段。','泛型保留元素类型；示例假设输入已是数组，真实接口还需验证外部数据并限制每页最大数量。'],advanced:true
 }
];
