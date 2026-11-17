export const kotlinLessons = [
  {
    "id": "kt-first",
    "title": "Kotlin 第一段程序",
    "subtitle": "认识入口和输出",
    "explain": "Kotlin 可以用于 Android 开发。main 是常见的程序入口，println 用于输出并换行。",
    "code": "fun main() {\n    println(\"你好，Kotlin\")\n}",
    "output": "你好，Kotlin",
    "question": "println 在这里做什么？",
    "options": [
      "输出文字并换行",
      "打开数据库",
      "上传文件"
    ],
    "answer": 0,
    "explanation": "println 输出括号中的内容并换行。",
    "vocab": "fun · 函数；println · 打印并换行",
    "notes": [
      "fun（函数）定义 main（主入口）函数。",
      "println（打印并换行）输出文字；Kotlin 是编程语言名。",
      "右花括号结束 main（主入口）函数。"
    ],
    "language": "Kotlin",
    "commentPrefix": "//",
    "guide": [
      "Kotlin 可以用于 Android 开发。main 是常见的程序入口，println 用于输出并换行。",
      "println 输出括号中的内容并换行。"
    ]
  },
  {
    "id": "kt-values",
    "title": "val 与 var",
    "subtitle": "给数据起名字",
    "explain": "val 声明的引用不能重新赋值；var 声明的变量可以重新赋值。对象内部是否可变是另一回事。",
    "code": "fun main() {\n    val name = \"小明\"\n    var count = 1\n    count += 1\n    println(name)\n    println(count)\n}",
    "output": "小明\n2",
    "question": "count 为什么可以增加？",
    "options": [
      "它通过 var 声明",
      "所有 val 都可以重新赋值",
      "程序访问了网络"
    ],
    "answer": 0,
    "explanation": "count 通过 var 声明，因此可以重新赋值。",
    "vocab": "val · 只读引用；var · 可重新赋值变量",
    "notes": [
      "fun（函数）定义 main（主入口）函数。",
      "val（只读引用声明）创建 name（名字），保存“小明”。",
      "var（可重新赋值声明）创建 count（计数），初始值为 1。",
      "count（计数）通过 += 增加 1。",
      "println（打印并换行）显示 name（名字）。",
      "println（打印并换行）显示 count（计数）。",
      "右花括号结束 main（主入口）函数。"
    ],
    "language": "Kotlin",
    "commentPrefix": "//",
    "guide": [
      "val 声明的引用不能重新赋值；var 声明的变量可以重新赋值。对象内部是否可变是另一回事。",
      "count 通过 var 声明，因此可以重新赋值。"
    ]
  },
  {
    "id": "kt-types",
    "title": "类型与类型推断",
    "subtitle": "理解数字和文字",
    "explain": "Kotlin 可以根据初始值推断类型，也可以显式写出类型。Int 表示整数，String 表示字符串。",
    "code": "fun main() {\n    val count: Int = 3\n    val title: String = \"课程\"\n    println(title)\n    println(count)\n}",
    "output": "课程\n3",
    "question": "Int 表示什么？",
    "options": [
      "整数类型",
      "网络地址",
      "数据库名称"
    ],
    "answer": 0,
    "explanation": "Int 是 Kotlin 的整数类型。",
    "vocab": "Int · 整数；String · 字符串",
    "notes": [
      "fun（函数）定义 main（主入口）函数。",
      "val（只读引用声明）创建 count（数量），显式标注 Int（整数类型），值为 3。",
      "val（只读引用声明）创建 title（标题），显式标注 String（字符串类型）。",
      "println（打印并换行）显示 title（标题）。",
      "println（打印并换行）显示 count（数量）。",
      "右花括号结束 main（主入口）函数。"
    ],
    "language": "Kotlin",
    "commentPrefix": "//",
    "guide": [
      "Kotlin 可以根据初始值推断类型，也可以显式写出类型。Int 表示整数，String 表示字符串。",
      "Int 是 Kotlin 的整数类型。"
    ]
  },
  {
    "id": "kt-if",
    "title": "if 表达式",
    "subtitle": "根据条件得到一个值",
    "explain": "Kotlin 的 if 可以作为表达式返回某个分支的结果。示例根据分数决定显示的文字。",
    "code": "fun main() {\n    val score = 75\n    val result = if (score >= 60) \"及格\" else \"继续加油\"\n    println(result)\n}",
    "output": "及格",
    "question": "score 为 75 时 result 是什么？",
    "options": [
      "及格",
      "继续加油",
      "自动连接数据库"
    ],
    "answer": 0,
    "explanation": "75 大于等于 60，因此 if 表达式选择“及格”。",
    "vocab": "if · 如果；else · 否则",
    "notes": [
      "fun（函数）定义 main（主入口）函数。",
      "val（只读引用声明）创建 score（分数），保存 75。",
      "val（只读引用声明）创建 result（结果）；if（如果）score（分数）大于或等于 60 返回“及格”，else（否则）返回“继续加油”。",
      "println（打印并换行）显示 result（结果）。",
      "右花括号结束 main（主入口）函数。"
    ],
    "language": "Kotlin",
    "commentPrefix": "//",
    "guide": [
      "Kotlin 的 if 可以作为表达式返回某个分支的结果。示例根据分数决定显示的文字。",
      "75 大于等于 60，因此 if 表达式选择“及格”。"
    ]
  },
  {
    "id": "kt-list",
    "title": "列表与循环",
    "subtitle": "依次读取一组数据",
    "explain": "listOf 创建只读列表接口；for 可以依次访问其中的元素。只读接口不等于对所有底层对象都具有深度不可变保证。",
    "code": "fun main() {\n    val tasks = listOf(\"阅读\", \"复习\")\n    for (task in tasks) {\n        println(task)\n    }\n}",
    "output": "阅读\n复习",
    "question": "for 循环输出几行？",
    "options": [
      "两行",
      "一行",
      "无限行"
    ],
    "answer": 0,
    "explanation": "tasks 有两个元素，循环对每个元素输出一行。",
    "vocab": "list · 列表；task · 任务",
    "notes": [
      "fun（函数）定义 main（主入口）函数。",
      "val（只读引用声明）创建 tasks（任务列表），listOf（创建只读列表）提供两条示例文字。",
      "for（循环）让 task（当前任务）依次取自 in（在）tasks（任务列表）中的值。",
      "println（打印并换行）显示当前 task（任务）。",
      "右花括号结束 for（循环）代码块。",
      "右花括号结束 main（主入口）函数。"
    ],
    "language": "Kotlin",
    "commentPrefix": "//",
    "guide": [
      "listOf 创建只读列表接口；for 可以依次访问其中的元素。只读接口不等于对所有底层对象都具有深度不可变保证。",
      "tasks 有两个元素，循环对每个元素输出一行。"
    ]
  },
  {
    "id": "kt-function",
    "title": "函数与返回值",
    "subtitle": "把计算过程收起来",
    "explain": "函数可以接收参数并声明返回类型。return 把结果交还给调用方。",
    "code": "fun add(a: Int, b: Int): Int {\n    return a + b\n}\nfun main() {\n    println(add(2, 3))\n}",
    "output": "5",
    "question": "add(2, 3) 返回什么？",
    "options": [
      "5",
      "23",
      "没有返回值"
    ],
    "answer": 0,
    "explanation": "add 返回两个整数参数的和，结果为 5。",
    "vocab": "add · 相加；return · 返回",
    "notes": [
      "fun（函数）定义 add（相加）；a 和 b 是 Int（整数）参数，返回类型也是 Int（整数）。",
      "return（返回）把 a 和 b 的和交给调用方。",
      "右花括号结束 add（相加）函数。",
      "fun（函数）定义 main（主入口）函数。",
      "println（打印并换行）显示 add（相加）处理 2 和 3 的结果。",
      "右花括号结束 main（主入口）函数。"
    ],
    "language": "Kotlin",
    "commentPrefix": "//",
    "guide": [
      "函数可以接收参数并声明返回类型。return 把结果交还给调用方。",
      "add 返回两个整数参数的和，结果为 5。"
    ]
  },
  {
    "id": "kt-null",
    "title": "可空类型与默认值",
    "subtitle": "显式处理值可能不存在的情况",
    "explain": "类型后面的 ? 表示可以保存 null。?: 可在左侧为 null 时选择右侧的默认值。",
    "code": "fun main() {\n    val name: String? = null\n    println(name ?: \"未填写\")\n}",
    "output": "未填写",
    "question": "name 为 null 时显示什么？",
    "options": [
      "未填写",
      "null 的长度",
      "自动读取通讯录"
    ],
    "answer": 0,
    "explanation": "?: 在左侧是 null 时使用右侧默认值；本例不读取通讯录。",
    "vocab": "null · 空；String · 字符串",
    "notes": [
      "fun（函数）定义 main（主入口）函数。",
      "val（只读引用声明）创建 name（名字），String（字符串）后面的 ? 表示可空，初始为 null（空）。",
      "println（打印并换行）显示 name（名字）；?: 在它为 null（空）时选择“未填写”。",
      "右花括号结束 main（主入口）函数。"
    ],
    "language": "Kotlin",
    "commentPrefix": "//",
    "guide": [
      "类型后面的 ? 表示可以保存 null。?: 可在左侧为 null 时选择右侧的默认值。",
      "?: 在左侧是 null 时使用右侧默认值；本例不读取通讯录。"
    ]
  },
  {
    "id": "kt-data-class",
    "title": "数据类",
    "subtitle": "用字段描述一条记录",
    "explain": "data class 适合表达以数据为主的对象。编译器会根据主构造函数中的属性生成常见方法。",
    "code": "data class Book(val title: String, val pages: Int)\nfun main() {\n    val book = Book(\"入门\", 120)\n    println(book.title)\n}",
    "output": "入门",
    "question": "Book(\"入门\", 120) 在做什么？",
    "options": [
      "创建一条 Book 对象",
      "下载一本书",
      "自动写入数据库"
    ],
    "answer": 0,
    "explanation": "这里在内存中创建 Book 对象，没有下载或数据库操作。",
    "vocab": "data · 数据；book · 书；title · 标题",
    "notes": [
      "data class（数据类）定义 Book（书），val（只读属性）title（标题）为 String（字符串），val（只读属性）pages（页数）为 Int（整数）。",
      "fun（函数）定义 main（主入口）函数。",
      "val（只读引用声明）创建 book（书），使用 Book（书类）生成示例对象。",
      "println（打印并换行）显示 book（书）的 title（标题）属性。",
      "右花括号结束 main（主入口）函数。"
    ],
    "language": "Kotlin",
    "commentPrefix": "//",
    "guide": [
      "data class 适合表达以数据为主的对象。编译器会根据主构造函数中的属性生成常见方法。",
      "这里在内存中创建 Book 对象，没有下载或数据库操作。"
    ]
  }
,
 {
  id:'kt-parse-minutes',title:'把输入文字转换成分钟数',subtitle:'处理无法转换的文字',
  explain:'toIntOrNull 尝试将字符串转为整数，失败时返回 null。示例使用 ?: 在转换失败时显示提示；输入是固定的本地演示数据。',
  code:'fun showMinutes(text: String): String {\n    val minutes = text.trim().toIntOrNull()\n    return minutes?.let { "学习分钟：$it" } ?: "请输入整数"\n}\n\nfun main() {\n    println(showMinutes(" 25 "))\n    println(showMinutes("abc"))\n}',
  output:'学习分钟：25\n请输入整数',question:'abc 转换失败时会得到什么？',options:['null，并显示请输入整数','自动变成 0','自动提交到服务器'],answer:0,
  explanation:'toIntOrNull 无法解析 abc 时返回 null；?. 跳过 let，?: 选择右侧提示。',vocab:'minutes · 分钟数；trim · 去除首尾空格；null · 空值',
  notes:['fun（函数）定义 showMinutes（显示分钟数），text（文字）是 String（字符串），返回 String（字符串）。','val（只读引用声明）创建 minutes（分钟数），对 text（文字）调用 trim（去除首尾空格）和 toIntOrNull（尝试转整数，失败返回空值）。','return（返回）结果：minutes（分钟数）不为 null 时，let（对值执行代码）用 it（当前值）组成文字，$it（插入当前值）显示数字；?: 在空值时选择“请输入整数”。','右花括号结束 showMinutes（显示分钟数）函数。','fun（函数）定义 main（主入口）。','println（打印并换行）显示 showMinutes（显示分钟数）处理带空格的 25 后的结果。','println（打印并换行）显示 showMinutes（显示分钟数）处理 abc（示例无效文字）后的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['先去掉首尾空格，再尝试转换；这是文字格式检查。','如果业务要求分钟数不能为负，还需要另外判断范围。']
 }
,
 {
  id:'kt-filter-tasks',title:'筛选待完成任务',subtitle:'用 filter 查找还未完成的项目',
  explain:'filter 根据条件生成新列表。示例从固定任务中筛选未完成项目；如果结果为空，显示提示，不读写数据库。',
  code:'data class Task(val title: String, val done: Boolean)\n\nfun showPending(tasks: List<Task>) {\n    val pending = tasks.filter { task -> !task.done }\n    if (pending.isEmpty()) {\n        println("暂无待办")\n    } else {\n        for (task in pending) println(task.title)\n    }\n}\n\nfun main() {\n    showPending(listOf(Task("阅读", true), Task("复习", false)))\n    showPending(listOf(Task("阅读", true)))\n}',
  output:'复习\n暂无待办',question:'filter 在示例中保留哪些任务？',options:['done 为 false 的任务','所有任务','自动从服务器读取的任务'],answer:0,
  explanation:'!task.done 表示完成状态取反，因此保留尚未完成的任务。',vocab:'filter · 筛选；pending · 待完成；done · 已完成',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）title（标题）为 String（字符串），done（是否完成）为 Boolean（布尔值）。','fun（函数）定义 showPending（显示待办），tasks（任务列表）为 List（列表），元素为 Task（任务）。','val（只读引用声明）创建 pending（待完成列表），tasks（任务列表）的 filter（筛选）保留 task（当前任务）的 done（是否完成）为假的项目。','if（如果）pending（待完成列表）的 isEmpty（是否为空）为真，则显示提示。','println（打印并换行）显示“暂无待办”。','else（否则）处理有待完成任务的情况。','for（循环）使 task（当前任务）依次来自 in（在）pending（待完成列表），println（打印并换行）显示 task 的 title（标题）。','右花括号结束 else（否则）分支。','右花括号结束 showPending（显示待办）函数。','fun（函数）定义 main（主入口）。','showPending（显示待办）接收 listOf（创建列表）得到的两个 Task（任务），true（真）表示完成，false（假）表示未完成。','showPending（显示待办）接收 listOf（创建列表）得到的一个 Task（任务），true（真）表示完成。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['filter 创建新的结果列表；原任务列表不会被筛选操作删除。','第二组数据全部完成，因此结果为空并显示提示。']
 }
,
 {
  id:'kt-update-task',title:'更新指定任务并保留原数据',subtitle:'使用数据类 copy 创建更新后的对象',
  explain:'数据类提供 copy 方法。示例通过 map 生成新列表，只为匹配编号的任务创建完成状态更新后的副本；原任务不变。',
  code:'data class Task(val id: Int, val done: Boolean)\n\nfun main() {\n    val tasks = listOf(Task(1, false), Task(2, false))\n    val updated = tasks.map { task -> if (task.id == 2) task.copy(done = true) else task }\n    println("更新后：${updated[1].done}")\n    println("原状态：${tasks[1].done}")\n    println("其他任务：${updated[0].done}")\n}',
  output:'更新后：true\n原状态：false\n其他任务：false',question:'编号 2 的原任务会改变吗？',options:['不会，copy 创建新对象','会自动变为完成','原列表被清空'],answer:0,
  explanation:'copy 创建匹配任务的新对象，并把新对象的 done 设为 true；原任务仍为 false。',vocab:'copy · 复制；updated · 更新后的；done · 完成状态',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）id（编号）为 Int（整数），done（完成状态）为 Boolean（布尔值）。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供两个 Task（任务），false（假）表示未完成。','val（只读引用声明）创建 updated（更新后的列表），tasks（任务列表）的 map（映射）逐项处理 task（当前任务）；if（如果）task.id（编号）等于 2，用 copy（复制）创建 done（完成状态）为 true（真）的新任务，else（否则）保留 task。','println（打印并换行）使用 ${...}（字符串模板）显示 updated（更新后的列表）索引 1 的 done（完成状态）。','println（打印并换行）使用 ${...}（字符串模板）显示 tasks（原任务列表）索引 1 的 done（完成状态）。','println（打印并换行）使用 ${...}（字符串模板）显示 updated（更新后的列表）索引 0 的 done（完成状态）。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['map 创建新列表；匹配项用数据类的 copy 创建新对象。','copy 是浅复制；如果字段包含可变对象，仍需考虑共享引用。']
 }
,
 {
  id:'kt-any-all',title:'判断任务完成情况',subtitle:'用 any 和 all 检查列表',
  explain:'any 判断是否至少有一项满足条件，all 判断是否所有项都满足。空列表的 all 返回 true；是否把它视为全部完成需要业务判断。',
  code:'data class Task(val done: Boolean)\n\nfun main() {\n    val tasks = listOf(Task(true), Task(false))\n    val hasPending = tasks.any { task -> !task.done }\n    val allDone = tasks.all { task -> task.done }\n    val empty = emptyList<Task>()\n    println("有待办：$hasPending")\n    println("全部完成：$allDone")\n    println("空列表全部满足：${empty.all { task -> task.done }}")\n}',
  output:'有待办：true\n全部完成：false\n空列表全部满足：true',question:'空列表的 all 返回什么？',options:['true','false','自动创建任务'],answer:0,
  explanation:'空列表没有违反条件的元素，all 返回 true；需要至少有一项时应另行检查列表是否为空。',vocab:'any · 任一；all · 全部；pending · 待完成',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）done（完成状态）为 Boolean（布尔值）。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供两个 Task（任务），true（真）表示完成，false（假）表示未完成。','val（只读引用声明）创建 hasPending（是否有待办），tasks（任务列表）的 any（任一满足）检查 task（当前任务）的 done（完成状态）是否为假。','val（只读引用声明）创建 allDone（是否全部完成），tasks（任务列表）的 all（全部满足）检查 task（当前任务）的 done（完成状态）。','val（只读引用声明）创建 empty（空列表），emptyList（创建空列表）以 Task（任务）为元素类型。','println（打印并换行）显示 $hasPending（插入是否有待办）。','println（打印并换行）显示 $allDone（插入是否全部完成）。','println（打印并换行）通过 ${...}（字符串模板）显示 empty（空列表）的 all（全部满足）检查 task（当前任务）的 done（完成状态）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['空列表的 any 返回 false，all 返回 true。','如果业务要求至少有一个任务，应先检查列表是否为空。']
 }
,
 {
  id:'kt-find-task',title:'按编号查找任务',subtitle:'找到任务，或在不存在时显示提示',
  explain:'firstOrNull 查找第一个符合条件的任务；找不到时返回 null。安全调用和默认值一起处理空结果。示例使用本地固定数据。',
  code:'data class Task(val id: Int, val title: String)\n\nfun findTitle(tasks: List<Task>, id: Int): String {\n    return tasks.firstOrNull { task -> task.id == id }?.title ?: "未找到"\n}\n\nfun main() {\n    val tasks = listOf(Task(1, "阅读"), Task(2, "复习"))\n    println(findTitle(tasks, 2))\n    println(findTitle(tasks, 9))\n}',
  output:'复习\n未找到',question:'如果编号不存在，程序显示什么？',options:['未找到','自动创建任务','程序必须崩溃'],answer:0,
  explanation:'firstOrNull 找不到匹配项时返回 null，?: 提供“未找到”作为默认值。',vocab:'firstOrNull · 查找第一个或返回空；title · 标题；id · 编号',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）id（编号）为 Int（整数），title（标题）为 String（字符串）。','fun（函数）定义 findTitle（查找标题），接收 tasks（任务列表，List 表示列表，Task 表示任务）和 id（编号，Int 表示整数），返回 String（字符串）。','return（返回）tasks（任务列表）中 firstOrNull（第一个匹配项或空）：逐个比较 task（当前任务）的 id（编号）与目标 id；?.title（安全读取标题）在结果为空时返回空，?:（空时使用默认值）提供“未找到”。','右花括号结束 findTitle（查找标题）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供两个 Task（任务）。','println（打印并换行）调用 findTitle（查找标题），从 tasks（任务列表）查找编号 2。','println（打印并换行）调用 findTitle（查找标题），从 tasks（任务列表）查找编号 9。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['firstOrNull 返回首个匹配项；列表为空或没有匹配项时返回 null。','?. 避免对空值读取属性，?: 在左侧为空时使用右侧默认值。']
 }
,
 {
  id:'kt-validate-title',title:'检查学习标题是否可用',subtitle:'清理空格并处理空值',
  explain:'函数接收可能为空的文字，先安全地去除首尾空格，再检查结果是否为空。示例只处理固定数据，不保存或联网。',
  code:'fun showTitle(input: String?): String {\n    val title = input?.trim()\n    if (title.isNullOrEmpty()) return "请输入标题"\n    return "标题：$title"\n}\n\nfun main() {\n    println(showTitle("  阅读  "))\n    println(showTitle("   "))\n    println(showTitle(null))\n}',
  output:'标题：阅读\n请输入标题\n请输入标题',question:'输入只有空格时会显示什么？',options:['请输入标题','标题后保留空格','自动从网络获取标题'],answer:0,
  explanation:'trim 去掉首尾空格，纯空格变成空字符串；isNullOrEmpty 检查空值或空字符串。',vocab:'input · 输入；title · 标题；trim · 去除首尾空格；null · 空值',
  notes:['fun（函数）定义 showTitle（显示标题），input（输入）为可空 String（字符串），返回 String（字符串）。','val（只读引用声明）创建 title（标题），input（输入）不为 null 时通过 ?. 安全调用 trim（去除首尾空格），否则结果为空值。','if（如果）title（标题）的 isNullOrEmpty（为空值或空字符串）为真，return（返回）输入提示。','return（返回）标题文字，其中 $title（插入标题）显示整理后的值。','右花括号结束 showTitle（显示标题）函数。','fun（函数）定义 main（主入口）。','println（打印并换行）显示 showTitle（显示标题）处理带首尾空格文字的结果。','println（打印并换行）显示 showTitle（显示标题）处理纯空格的结果。','println（打印并换行）显示 showTitle（显示标题）处理 null（空值）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['?. 让空值跳过 trim；isNullOrEmpty 同时识别 null 和空字符串。','trim 后再检查，因此全空格的输入也会被视为空；实际业务还可增加长度等限制。']
 }
,
 {
  id:'kt-remove-task',title:'按编号移除任务',subtitle:'用 filterNot 生成新列表',
  explain:'filterNot 保留不满足条件的项目。示例按编号排除任务，返回新列表；原列表不变，数据只存在内存中。',
  code:'data class Task(val id: Int, val title: String)\n\nfun removeTask(tasks: List<Task>, id: Int): List<Task> {\n    return tasks.filterNot { task -> task.id == id }\n}\n\nfun main() {\n    val tasks = listOf(Task(1, "阅读"), Task(2, "复习"))\n    val remaining = removeTask(tasks, 2)\n    println("剩余：${remaining.joinToString { task -> task.title }}")\n    println("原数量：${tasks.size}")\n    println("不存在时：${removeTask(tasks, 9).size}")\n}',
  output:'剩余：阅读\n原数量：2\n不存在时：2',question:'编号 9 不存在时，新列表有多少项？',options:['2 项','0 项','自动从服务器读取'],answer:0,
  explanation:'没有任务满足编号等于 9，因此 filterNot 保留全部任务；原列表不受筛选影响。',vocab:'remove · 移除；filterNot · 排除匹配项；remaining · 剩余；size · 数量',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）id（编号）为 Int（整数），title（标题）为 String（字符串）。','fun（函数）定义 removeTask（移除任务），接收 tasks（任务列表，List 表示列表，Task 表示任务）和 id（编号，Int 表示整数），返回 Task（任务）的 List（列表）。','return（返回）tasks（任务列表）的 filterNot（排除满足条件的项）结果；task（当前任务）的 id（编号）等于目标 id 时被排除。','右花括号结束 removeTask（移除任务）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供两个 Task（任务）。','val（只读引用声明）创建 remaining（剩余任务），由 removeTask（移除任务）处理 tasks（任务列表）和编号 2 得到。','println（打印并换行）使用 ${...}（字符串模板）显示 remaining（剩余任务）经 joinToString（连接成文字）转换 task（当前任务）的 title（标题）后的结果。','println（打印并换行）使用 ${...}（字符串模板）显示 tasks（原任务列表）的 size（数量）。','println（打印并换行）使用 ${...}（字符串模板）显示 removeTask（移除任务）处理 tasks（任务列表）和编号 9 后的 size（数量）。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['filterNot 返回新列表；没有匹配项时保留所有项目。','新列表中的元素仍是原来的对象引用；示例的数据类字段不可重新赋值。']
 }
,
 {
  id:'kt-topic-summary',title:'按主题汇总学习时间',subtitle:'将记录分组并计算每组分钟数',
  explain:'示例将内存中的学习记录按主题分组，对每组分钟数求和并按主题排序显示；空列表会给出提示。',
  code:'data class StudyRecord(val topic: String, val minutes: Int)\n\nfun showSummary(records: List<StudyRecord>) {\n    val groups = records.groupBy { record -> record.topic }.toSortedMap()\n    if (groups.isEmpty()) println("暂无记录")\n    for ((topic, items) in groups) {\n        val total = items.sumOf { item -> item.minutes.toLong() }\n        println("$topic：$total")\n    }\n}\n\nfun main() {\n    val records = listOf(StudyRecord("Python", 20), StudyRecord("Java", 10), StudyRecord("Python", 15))\n    showSummary(records)\n    showSummary(emptyList())\n}',
  output:'Java：10\nPython：35\n暂无记录',question:'为什么使用 groupBy？',options:['把相同主题的记录放到一组','自动保存到数据库','按分钟数删除记录'],answer:0,
  explanation:'groupBy 根据 topic 分组，sumOf 汇总每组的 minutes；排序后按主题依次输出。',vocab:'group · 分组；topic · 主题；minutes · 分钟数；total · 总计',
  notes:['data class（数据类）定义 StudyRecord（学习记录），val（只读属性）topic（主题）为 String（字符串），minutes（分钟数）为 Int（整数）。','fun（函数）定义 showSummary（显示汇总），接收 records（记录列表），List（列表）的元素类型为 StudyRecord（学习记录）。','val（只读引用声明）创建 groups（分组映射），records（记录列表）的 groupBy（分组）按 record（当前记录）的 topic（主题）分组，再用 toSortedMap（按键排序的映射）排序。','if（如果）groups（分组映射）的 isEmpty（是否为空）为真，println（打印并换行）显示提示。','for（循环）将 groups（分组映射）中的每项解构为 topic（主题）和 items（该组记录），in（来自）表示遍历来源。','val（只读引用声明）创建 total（总计），items（该组记录）的 sumOf（求和）将 item（当前记录）的 minutes（分钟数）通过 toLong（转换成长整数）后相加。','println（打印并换行）使用 $topic（插入主题）和 $total（插入总计）显示结果。','右花括号结束 for（循环）。','右花括号结束 showSummary（显示汇总）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 records（记录列表），listOf（创建列表）提供三个 StudyRecord（学习记录），Python 和 Java 是示例主题。','showSummary（显示汇总）处理 records（记录列表）。','showSummary（显示汇总）处理 emptyList（空列表）。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['groupBy 得到主题到记录列表的映射，再逐组计算总数。','示例先转为 Long 再求和；实际应用仍需要校验分钟范围并考虑总和上限。']
 }
,
 {
  id:'kt-parse-minute-list',title:'解析一组学习分钟数',subtitle:'过滤无效输入并保留零',
  explain:'示例接收文字列表，去除首尾空格并尝试转换整数，再过滤负数。mapNotNull 只保留成功转换且符合条件的值；数据来自固定列表，不读取文件。',
  code:'fun parseMinutes(values: List<String>): List<Int> {\n    return values.mapNotNull { text ->\n        val minutes = text.trim().toIntOrNull()\n        minutes?.takeIf { value -> value >= 0 }\n    }\n}\n\nfun main() {\n    val values = listOf(" 0 ", "25", "-1", "abc")\n    val valid = parseMinutes(values)\n    println("有效分钟：${valid.joinToString()}")\n    println("有效数量：${valid.size}")\n    println("空输入：${parseMinutes(emptyList()).size}")\n}',
  output:'有效分钟：0, 25\n有效数量：2\n空输入：0',question:'文字“0”为什么会保留？',options:['它能转换为非负整数','它会自动变成 1','它由服务器校验'],answer:0,
  explanation:'0 是合法的非负整数；负数和无法转换的文字返回 null，因此被 mapNotNull 排除。',vocab:'parse · 解析；minutes · 分钟；valid · 有效的；value · 值；null · 空值',
  notes:['fun（函数）定义 parseMinutes（解析分钟数），接收 values（文字列表），List（列表）元素为 String（字符串），返回 Int（整数）的 List（列表）。','return（返回）values（文字列表）的 mapNotNull（转换并过滤空值）结果；text（当前文字）是每次转换的输入。','val（只读引用声明）创建 minutes（分钟数），text（当前文字）经 trim（去除首尾空格）和 toIntOrNull（尝试转整数）处理。','minutes（分钟数）不为 null 时调用 takeIf（满足条件时保留）；value（当前值）大于等于 0 才保留，否则返回 null（空值）。','右花括号结束 mapNotNull（转换并过滤空值）。','右花括号结束 parseMinutes（解析分钟数）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 values（文字列表），listOf（创建列表）提供示例输入，abc 是无法转换的文字。','val（只读引用声明）创建 valid（有效分钟数），由 parseMinutes（解析分钟数）处理 values（文字列表）得到。','println（打印并换行）使用 ${...}（字符串模板）显示 valid（有效分钟数）通过 joinToString（连接成文字）的结果。','println（打印并换行）使用 ${...}（字符串模板）显示 valid（有效分钟数）的 size（数量）。','println（打印并换行）使用 ${...}（字符串模板）显示 parseMinutes（解析分钟数）处理 emptyList（空列表）后的 size（数量）。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['比较 0、负数和非数字文本：只有可转换的非负整数被保留。','toIntOrNull 也会拒绝超出 Int 范围的文字；实际业务还应设置分钟上限。']
 }
,
 {
  id:'kt-partition-tasks',title:'按完成状态分组任务',subtitle:'用 partition 一次分成两组',
  explain:'partition 根据条件把列表分为满足和不满足的两组。示例按任务完成状态分组，并展示空列表的结果；数据只保存在内存中。',
  code:'data class Task(val title: String, val done: Boolean)\n\nfun showGroups(tasks: List<Task>) {\n    val (completed, pending) = tasks.partition { task -> task.done }\n    println("已完成：${completed.size}")\n    println("待办：${pending.size}")\n}\n\nfun main() {\n    val tasks = listOf(Task("阅读", true), Task("复习", false), Task("练习", false))\n    showGroups(tasks)\n    val (_, pending) = emptyList<Task>().partition { task -> task.done }\n    println("空列表待办：${pending.size}")\n}',
  output:'已完成：1\n待办：2\n空列表待办：0',question:'partition 返回的第一组是什么？',options:['满足条件的任务','不满足条件的任务','自动从服务器获取的数据'],answer:0,
  explanation:'partition 返回一对列表：第一组满足条件，第二组不满足；空输入时两组都为空。',vocab:'partition · 分组；completed · 已完成；pending · 待办；tasks · 任务；size · 数量',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）title（标题）为 String（字符串），done（完成状态）为 Boolean（布尔值）。','fun（函数）定义 showGroups（显示分组），接收 List（列表）中 Task（任务）组成的 tasks（任务列表）。','val（只读引用声明）将 tasks（任务列表）的 partition（按条件分成两组）结果解构为 completed（已完成）和 pending（待办）；task（当前任务）的 done（完成状态）作为条件。','println（打印并换行）使用 ${...}（字符串模板）显示 completed（已完成列表）的 size（数量）。','println（打印并换行）使用 ${...}（字符串模板）显示 pending（待办列表）的 size（数量）。','右花括号结束 showGroups（显示分组）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供三个 Task（任务）；true（真）为已完成，false（假）为未完成。','showGroups（显示分组）处理 tasks（任务列表）。','val（只读引用声明）将 emptyList（空列表）的 Task（任务）按 partition（分组）结果解构；_ 忽略第一组，pending（待办）接收第二组，task（当前任务）的 done（完成状态）为判断条件。','println（打印并换行）使用 ${...}（字符串模板）显示 pending（待办列表）的 size（数量）。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['第一组满足 done 为 true，第二组为 false；解构可以分别给两组命名。','示例只处理固定数据；真实应用还需考虑数据来源、存储和界面更新。']
 }
,
 {
  id:'kt-distinct-topics',title:'学习主题去重',subtitle:'保留首次出现的顺序',
  explain:'distinct 返回去重后的新列表，保留元素首次出现的顺序；原列表不变。示例只处理内存中的文字。',
  code:'fun main() {\n    val topics = listOf("Java", "Kotlin", "Java")\n    val unique = topics.distinct()\n    println("去重：$unique")\n    println("原列表：$topics")\n    println("空列表：${emptyList<String>().distinct()}")\n}',
  output:'去重：[Java, Kotlin]\n原列表：[Java, Kotlin, Java]\n空列表：[]',question:'第二次出现的 Java 会怎样？',options:['去重结果中不再出现','排到列表开头','自动保存到服务器'],answer:0,
  explanation:'distinct 根据元素相等关系去重，保留第一次出现的 Java；原列表不变。',vocab:'distinct · 去重；topics · 主题列表；unique · 去重结果；empty · 空的',
  notes:['fun（函数）定义 main（主入口）。','val（只读引用声明）创建 topics（主题列表），listOf（创建列表）提供 Java 和 Kotlin 两个示例主题。','val（只读引用声明）创建 unique（去重结果），topics（主题列表）的 distinct（去重）返回新列表。','println（打印并换行）使用 $unique（插入去重结果）显示新列表。','println（打印并换行）使用 $topics（插入主题列表）显示原列表。','println（打印并换行）使用 ${...}（字符串模板）显示 emptyList（空列表）中 String（字符串）类型调用 distinct（去重）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['对比去重结果和原列表，注意首次出现的顺序被保留。','此例按字符串相等关系比较，大小写不同不会自动合并。']
 }
,
 {
  id:'kt-duplicate-ids',title:'找出重复的任务编号',subtitle:'使用集合识别重复并保留发现顺序',
  explain:'任务编号都是整数也可能发生重复。示例使用集合记录已经见过的编号，并按首次发现重复的顺序返回冲突；相同编号重复多次也只报告一次。',
  code:'fun duplicateIds(ids: List<Int>): List<Int> {\n    val seen = mutableSetOf<Int>()\n    val duplicates = linkedSetOf<Int>()\n    for (id in ids) {\n        if (!seen.add(id)) duplicates.add(id)\n    }\n    return duplicates.toList()\n}\n\nfun main() {\n    println("重复：${duplicateIds(listOf(1, 2, 2, 1, 2))}")\n    println("无重复：${duplicateIds(listOf(1, 2))}")\n    println("空列表：${duplicateIds(emptyList())}")\n}',
  output:'重复：[2, 1]\n无重复：[]\n空列表：[]',question:'编号 2 重复出现多次时，结果里会出现几次？',options:['一次','两次','三次'],answer:0,
  explanation:'duplicates 是集合，同一个编号只保留一次；linkedSetOf 按首次发现重复的顺序保存。',vocab:'duplicate · 重复；id · 编号；seen · 已见过；set · 集合；add · 添加',
  notes:['fun（函数）定义 duplicateIds（重复编号），接收 Int（整数）的 List（列表）ids（编号列表），返回 Int 的 List。','val（只读引用声明）创建 seen（已见编号），mutableSetOf（创建可变集合）保存 Int（整数）。','val（只读引用声明）创建 duplicates（重复编号），linkedSetOf（创建保留插入顺序的集合）保存 Int（整数）。','for（循环）让 id（当前编号）依次取自 in（来自）ids（编号列表）。','if（如果）seen（已见编号）的 add（添加）编号 id（当前编号）返回假，则向 duplicates（重复编号）add（添加）该 id。','右花括号结束 for（循环）。','return（返回）duplicates（重复编号）通过 toList（转成列表）得到的结果。','右花括号结束 duplicateIds（重复编号）函数。','fun（函数）定义 main（主入口）。','println（打印并换行）通过 ${...}（字符串模板）显示 duplicateIds（重复编号）处理 listOf（创建列表）提供的编号的结果。','println（打印并换行）通过 ${...}（字符串模板）显示 duplicateIds（重复编号）处理 listOf（创建列表）提供的不重复编号的结果。','println（打印并换行）通过 ${...}（字符串模板）显示 duplicateIds（重复编号）处理 emptyList（空列表）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['先观察 seen 记录哪些编号，再看 duplicates 何时添加编号。','示例只处理内存中的编号；真实应用还要验证数据来源，并用数据库约束防止持久化冲突。']
 }
,
 {
  id:'kt-clean-unique-titles',title:'整理并去重任务标题',subtitle:'组合 map、filter 和 distinct',
  explain:'示例先去除每个标题的首尾空白，再过滤空标题并去重，保留首次出现顺序；原列表不变。',
  code:'fun cleanTitles(titles: List<String>): List<String> {\n    return titles.map { title -> title.trim() }.filter { title -> title.isNotEmpty() }.distinct()\n}\n\nfun main() {\n    println(cleanTitles(listOf(" 阅读 ", "", "阅读", "练习")))\n    println(cleanTitles(emptyList()))\n}',
  output:'[阅读, 练习]\n[]',question:'为什么带空格的“阅读”和“阅读”只保留一项？',options:['整理空格后相同，再进行去重','自动查询了数据库','所有任务都被删除'],answer:0,
  explanation:'trim 先去除首尾空格，distinct 再按字符串相等关系去重。',vocab:'clean · 整理；titles · 标题列表；map · 映射；filter · 筛选；distinct · 去重',
  notes:['fun（函数）定义 cleanTitles（整理标题），接收元素为 String（字符串）的 List（列表）titles（标题列表），返回 String（字符串）的 List（列表）。','return（返回）titles（标题列表）的 map（映射）结果，title（当前标题）通过 trim（去除首尾空格）整理，再经 filter（筛选）保留 title 的 isNotEmpty（是否非空）为真的项，最后调用 distinct（去重）。','右花括号结束 cleanTitles（整理标题）函数。','fun（函数）定义 main（主入口）。','println（打印并换行）显示 cleanTitles（整理标题）处理 listOf（创建列表）提供的示例文字的结果。','println（打印并换行）显示 cleanTitles（整理标题）处理 emptyList（空列表）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['按从左到右的顺序观察：整理文字、过滤空项、去重。','此例区分大小写，且假设每项都是非空引用；实际输入需明确比较规则。']
 }
,
 {
  id:'kt-count-completed',title:'统计已完成任务',subtitle:'用 count 计算符合条件的数量',
  explain:'count 可以接收条件，只统计满足条件的元素。示例根据完成状态统计任务数量，并展示空列表结果。',
  code:'data class Task(val title: String, val done: Boolean)\n\nfun countCompleted(tasks: List<Task>): Int {\n    return tasks.count { task -> task.done }\n}\n\nfun main() {\n    val tasks = listOf(Task("阅读", true), Task("复习", false))\n    println("已完成：${countCompleted(tasks)}")\n    println("空列表：${countCompleted(emptyList())}")\n}',
  output:'已完成：1\n空列表：0',question:'空列表中有多少项满足完成条件？',options:['0','1','自动从服务器获取'],answer:0,
  explanation:'空列表没有元素，count 返回 0。',vocab:'count · 数量；completed · 已完成；tasks · 任务；done · 完成状态',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）title（标题）为 String（字符串），done（完成状态）为 Boolean（布尔值）。','fun（函数）定义 countCompleted（统计已完成），接收 Task（任务）的 List（列表）tasks（任务列表），返回 Int（整数）。','return（返回）tasks（任务列表）的 count（统计数量）结果；task（当前任务）的 done（完成状态）为条件。','右花括号结束 countCompleted（统计已完成）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供两个 Task（任务）；true（真）为已完成，false（假）为未完成。','println（打印并换行）使用 ${...}（字符串模板）显示 countCompleted（统计已完成）处理 tasks（任务列表）的结果。','println（打印并换行）使用 ${...}（字符串模板）显示 countCompleted（统计已完成）处理 emptyList（空列表）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['count 的条件为真时，该元素才计入数量。','空列表返回 0；示例只统计内存数据，不读取数据库。']
 }
,
 {
  id:'kt-sum-minutes',title:'计算学习时间总和',subtitle:'使用 sumOf 汇总记录',
  explain:'sumOf 根据指定表达式对每条记录求和。示例先把分钟数转换为 Long，再求总和；空列表得到 0。',
  code:'data class StudyRecord(val minutes: Int)\n\nfun totalMinutes(records: List<StudyRecord>): Long {\n    return records.sumOf { record -> record.minutes.toLong() }\n}\n\nfun main() {\n    val records = listOf(StudyRecord(20), StudyRecord(15))\n    println("总分钟：${totalMinutes(records)}")\n    println("空列表：${totalMinutes(emptyList())}")\n}',
  output:'总分钟：35\n空列表：0',question:'空列表的总分钟数是多少？',options:['0','1','自动查询服务器'],answer:0,
  explanation:'空列表没有需要累加的记录，因此 sumOf 返回 0。',vocab:'sum · 求和；total · 总计；minutes · 分钟；records · 记录列表；long · 长整数',
  notes:['data class（数据类）定义 StudyRecord（学习记录），val（只读属性）minutes（分钟数）为 Int（整数）。','fun（函数）定义 totalMinutes（总分钟数），接收 StudyRecord（学习记录）的 List（列表）records（记录列表），返回 Long（长整数）。','return（返回）records（记录列表）的 sumOf（按表达式求和）结果；record（当前记录）的 minutes（分钟数）通过 toLong（转换成长整数）转换。','右花括号结束 totalMinutes（总分钟数）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 records（记录列表），listOf（创建列表）提供两条 StudyRecord（学习记录）。','println（打印并换行）使用 ${...}（字符串模板）显示 totalMinutes（总分钟数）处理 records（记录列表）的结果。','println（打印并换行）使用 ${...}（字符串模板）显示 totalMinutes（总分钟数）处理 emptyList（空列表）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['sumOf 对每条记录运行表达式，再将结果相加。','Long 仍有范围限制；实际业务应验证分钟数和总数上限。']
 }
,
 {
  id:'kt-max-minutes',title:'查找最长学习时间',subtitle:'使用 maxOrNull 处理空列表',
  explain:'maxOrNull 返回列表中的最大值；列表为空时返回 null。示例据此显示最长时间或无记录提示。',
  code:'fun showLongest(minutes: List<Int>): String {\n    val longest = minutes.maxOrNull()\n    return if (longest == null) "暂无记录" else "最长：$longest"\n}\n\nfun main() {\n    println(showLongest(listOf(10, 25, 15)))\n    println(showLongest(emptyList()))\n}',
  output:'最长：25\n暂无记录',question:'空列表调用 maxOrNull 会返回什么？',options:['null','0','自动查询服务器'],answer:0,
  explanation:'空列表没有最大值，maxOrNull 返回 null；示例将其显示为“暂无记录”。',vocab:'max · 最大值；longest · 最长；minutes · 分钟；null · 空值',
  notes:['fun（函数）定义 showLongest（显示最长时间），接收 Int（整数）的 List（列表）minutes（分钟列表），返回 String（字符串）。','val（只读引用声明）创建 longest（最长时间），minutes（分钟列表）的 maxOrNull（最大值或空值）返回结果。','return（返回）if（如果）longest（最长时间）为 null（空值）时的提示，else（否则）用 $longest（插入最长时间）显示结果。','右花括号结束 showLongest（显示最长时间）函数。','fun（函数）定义 main（主入口）。','println（打印并换行）显示 showLongest（显示最长时间）处理 listOf（创建列表）提供的分钟数的结果。','println（打印并换行）显示 showLongest（显示最长时间）处理 emptyList（空列表）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['maxOrNull 返回可空结果，使用前应处理空列表。','本例假设输入已经过验证；真实应用需要检查分钟数范围。']
 }
,
 {
  id:'kt-sort-title-length',title:'按标题长度排序',subtitle:'使用 sortedBy 创建排序结果',
  explain:'sortedBy 按指定键返回排序后的新列表。示例按标题长度升序排列，原列表不变。',
  code:'fun main() {\n    val titles = listOf("阅读笔记", "读", "阅读")\n    val sorted = titles.sortedBy { title -> title.length }\n    println("排序：$sorted")\n    println("原列表：$titles")\n}',
  output:'排序：[读, 阅读, 阅读笔记]\n原列表：[阅读笔记, 读, 阅读]',question:'sortedBy 会修改原列表吗？',options:['不会，返回新列表','会删除原列表','自动保存到服务器'],answer:0,
  explanation:'sortedBy 返回排序结果，titles 仍保留原顺序。',vocab:'sorted · 已排序；title · 标题；length · 长度；list · 列表',
  notes:['fun（函数）定义 main（主入口）。','val（只读引用声明）创建 titles（标题列表），listOf（创建列表）提供示例标题。','val（只读引用声明）创建 sorted（排序结果），titles（标题列表）的 sortedBy（按键排序）使用 title（当前标题）的 length（长度）作为排序键。','println（打印并换行）使用 $sorted（插入排序结果）显示新列表。','println（打印并换行）使用 $titles（插入标题列表）显示原列表。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['比较排序后的列表与原列表，确认原顺序没有改变。','字符串 length 以 UTF-16 代码单元计数，并不总等于用户看到的字符数量。']
 }
,
 {
  id:'kt-task-index',title:'查找任务所在位置',subtitle:'使用 indexOfFirst 处理未找到',
  explain:'indexOfFirst 返回第一个满足条件的元素索引；没有匹配时返回 -1。示例按任务编号查找，不修改列表。',
  code:'data class Task(val id: Int, val title: String)\n\nfun showIndex(tasks: List<Task>, id: Int): String {\n    val index = tasks.indexOfFirst { task -> task.id == id }\n    return if (index == -1) "未找到" else "位置：$index"\n}\n\nfun main() {\n    val tasks = listOf(Task(1, "阅读"), Task(2, "复习"))\n    println(showIndex(tasks, 2))\n    println(showIndex(tasks, 9))\n}',
  output:'位置：1\n未找到',question:'没有匹配任务时 indexOfFirst 返回什么？',options:['-1','0','自动查询服务器'],answer:0,
  explanation:'indexOfFirst 没有找到符合条件的元素时返回 -1；索引从 0 开始。',vocab:'index · 索引；first · 第一个；task · 任务；id · 编号',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）id（编号）为 Int（整数），title（标题）为 String（字符串）。','fun（函数）定义 showIndex（显示索引），接收 Task（任务）的 List（列表）tasks（任务列表）和 Int（整数）类型的 id（目标编号），返回 String（字符串）。','val（只读引用声明）创建 index（索引），tasks（任务列表）的 indexOfFirst（查找首个匹配索引）比较 task（当前任务）的 id（编号）和目标 id。','return（返回）if（如果）index（索引）为 -1 时的提示，else（否则）用 $index（插入索引）显示位置。','右花括号结束 showIndex（显示索引）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供两个 Task（任务）。','println（打印并换行）显示 showIndex（显示索引）处理 tasks（任务列表）和编号 2 的结果。','println（打印并换行）显示 showIndex（显示索引）处理 tasks（任务列表）和编号 9 的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['索引从 0 开始，第二项的索引为 1。','-1 表示未找到；使用索引访问列表前应先检查结果。']
 }
,
 {
  id:'kt-last-pending',title:'查找最后一条待办',subtitle:'使用 lastOrNull 处理无结果',
  explain:'lastOrNull 可以从列表中找到最后一个满足条件的元素；没有匹配时返回 null。示例使用固定的内存任务列表。',
  code:'data class Task(val title: String, val done: Boolean)\n\nfun lastPending(tasks: List<Task>): String {\n    val task = tasks.lastOrNull { item -> !item.done }\n    return task?.title ?: "暂无待办"\n}\n\nfun main() {\n    val tasks = listOf(Task("阅读", false), Task("复习", true), Task("练习", false))\n    println(lastPending(tasks))\n    println(lastPending(emptyList()))\n}',
  output:'练习\n暂无待办',question:'空列表中找不到待办时显示什么？',options:['暂无待办','自动创建任务','显示第一条任务'],answer:0,
  explanation:'lastOrNull 找不到匹配项时返回 null，?: 提供备用提示。',vocab:'last · 最后；pending · 待办；item · 当前项；null · 空值',
  notes:['data class（数据类）定义 Task（任务），val（只读属性）title（标题）为 String（字符串），done（完成状态）为 Boolean（布尔值）。','fun（函数）定义 lastPending（最后一条待办），接收 Task（任务）的 List（列表）tasks（任务列表），返回 String（字符串）。','val（只读引用声明）创建 task（找到的任务），tasks（任务列表）的 lastOrNull（最后匹配项或空值）检查 item（当前项）的 done（完成状态）是否为假。','return（返回）task（找到的任务）的 title（标题）；?. 在空值时跳过访问，?: 提供“暂无待办”作为备用。','右花括号结束 lastPending（最后一条待办）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供三个 Task（任务），false（假）表示待办，true（真）表示已完成。','println（打印并换行）显示 lastPending（最后一条待办）处理 tasks（任务列表）的结果。','println（打印并换行）显示 lastPending（最后一条待办）处理 emptyList（空列表）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['lastOrNull 按列表顺序寻找最后一个满足条件的任务。','使用可空访问和备用值处理未找到的情况。']
 }
,
 {
  id:'kt-take-tasks',title:'取出前几条任务',subtitle:'使用 take 处理数量不足',
  explain:'take 返回列表开头最多指定数量的元素。列表数量不足时返回现有元素，空列表返回空列表；原列表不变。',
  code:'fun firstTasks(tasks: List<String>): List<String> {\n    return tasks.take(3)\n}\n\nfun main() {\n    println(firstTasks(listOf("阅读", "复习")))\n    println(firstTasks(emptyList()))\n}',
  output:'[阅读, 复习]\n[]',question:'只有两条任务时，take(3) 返回几条？',options:['两条','三条并自动补一条','报错'],answer:0,
  explanation:'take 最多返回指定数量；只有两条时返回现有的两条。',vocab:'take · 取出；first · 前面的；tasks · 任务；empty · 空的',
  notes:['fun（函数）定义 firstTasks（前几条任务），接收 String（字符串）的 List（列表）tasks（任务列表），返回 String 的 List。','return（返回）tasks（任务列表）的 take（取前几项）结果，最多取 3 项。','右花括号结束 firstTasks（前几条任务）函数。','fun（函数）定义 main（主入口）。','println（打印并换行）显示 firstTasks（前几条任务）处理 listOf（创建列表）提供的两条任务的结果。','println（打印并换行）显示 firstTasks（前几条任务）处理 emptyList（空列表）的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['take 不会补齐缺少的项目，也不会修改原列表。','本例的数量为固定的非负数；实际程序应先验证外部输入。']
 }
,
 {
  id:'kt-drop-tasks',title:'跳过前面的任务',subtitle:'用 drop 获取剩余列表',
  explain:'drop 返回跳过前面指定数量后的新列表。数量不足时返回空列表，原列表不变。',
  code:'fun remaining(tasks: List<String>): List<String> {\n    return tasks.drop(2)\n}\n\nfun main() {\n    println(remaining(listOf("阅读", "复习", "练习")))\n    println(remaining(listOf("阅读")))\n}',
  output:'[练习]\n[]',question:'只有一条任务时跳过两条会得到什么？',options:['空列表','报错','自动补充任务'],answer:0,
  explanation:'drop 跳过最多指定数量的元素；数量不足时结果为空。',vocab:'drop · 跳过；remaining · 剩余；tasks · 任务列表；list · 列表',
  notes:['fun（函数）定义 remaining（剩余任务），接收 String（字符串）的 List（列表）tasks（任务列表），返回 String 的 List。','return（返回）tasks（任务列表）的 drop（跳过前几项）结果，跳过 2 项。','右花括号结束 remaining（剩余任务）函数。','fun（函数）定义 main（主入口）。','println（打印并换行）显示 remaining（剩余任务）处理 listOf（创建列表）提供的三条任务的结果。','println（打印并换行）显示 remaining（剩余任务）处理 listOf（创建列表）提供的一条任务的结果。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['drop 不会修改原列表；跳过数量超过列表长度时得到空列表。','示例中的跳过数量固定为非负数，实际程序应先验证外部输入。']
 }
,
 {
  id:'kt-task-pages',title:'分页读取学习任务',subtitle:'用 chunked 分组并安全读取页码',
  explain:'chunked 将列表按指定数量分组，最后一组可以不足指定数量。示例先检查参数，再用 getOrNull 安全读取页码；超出已有页数时返回空列表。',
  code:'fun pageTasks(tasks: List<String>, page: Int, size: Int): List<String> {\n    require(page > 0 && size > 0) { "分页参数无效" }\n    return tasks.chunked(size).getOrNull(page - 1) ?: emptyList()\n}\n\nfun main() {\n    val tasks = listOf("阅读", "复习", "练习")\n    println("第 1 页：${pageTasks(tasks, 1, 2)}")\n    println("第 2 页：${pageTasks(tasks, 2, 2)}")\n    println("第 3 页：${pageTasks(tasks, 3, 2)}")\n    try {\n        pageTasks(tasks, 0, 2)\n    } catch (error: IllegalArgumentException) {\n        println(error.message)\n    }\n}',
  output:'第 1 页：[阅读, 复习]\n第 2 页：[练习]\n第 3 页：[]\n分页参数无效',question:'为什么读取不存在的第三页不会发生索引异常？',options:['getOrNull 返回空值，随后使用空列表','自动创建了一条任务','程序连接服务器补齐数据'],answer:0,
  explanation:'getOrNull 在索引不存在时返回 null；?: 使用 emptyList 作为备用结果。无效页码则由 require 提前拒绝。',vocab:'page · 页码；size · 每页数量；chunked · 分块；require · 要求；empty · 空的',
  notes:['fun（函数）定义 pageTasks（任务分页），接收 String（字符串）的 List（列表）tasks（任务列表）、Int（整数）page（页码）和 size（每页数量），返回 String 的 List。','require（要求）检查 page（页码）和 size（每页数量）都大于 0，否则抛出参数异常。','return（返回）tasks（任务列表）通过 chunked（分块）按 size（每页数量）分组，再用 getOrNull（安全读取）取得 page（页码）减 1 的位置；?: 在空值时使用 emptyList（空列表）。','右花括号结束 pageTasks（任务分页）函数。','fun（函数）定义 main（主入口）。','val（只读引用声明）创建 tasks（任务列表），listOf（创建列表）提供三个任务。','println（打印并换行）通过 ${...}（字符串模板）显示 pageTasks（任务分页）处理 tasks（任务列表）第 1 页、每页 2 条的结果。','println（打印并换行）通过 ${...}（字符串模板）显示 pageTasks（任务分页）处理 tasks（任务列表）第 2 页、每页 2 条的结果。','println（打印并换行）通过 ${...}（字符串模板）显示 pageTasks（任务分页）处理 tasks（任务列表）第 3 页、每页 2 条的结果。','try（尝试）开始处理可能抛出的异常。','pageTasks（任务分页）处理 tasks（任务列表）的无效页码 0。','catch（捕获）接收 IllegalArgumentException（参数异常）类型的 error（错误对象）。','println（打印并换行）显示 error（错误对象）的 message（消息）。','右花括号结束 catch（捕获）分支。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['先检查页码和每页数量，再观察分块结果和安全读取。','chunked 会先创建全部分组，适合示例中的小列表；大型数据通常应在数据源中分页。']
 }
,
 {
  id:'kt-goal-result',title:'给学习目标返回明确结果',subtitle:'区分空输入、格式错误和范围错误',
  explain:'输入分钟数时，不同错误需要不同提示。示例使用密封接口表示四种结果，再用 when 逐一处理；示例只输出文字，不保存数据。',
  code:'sealed interface GoalResult {\n    data class Valid(val minutes: Int) : GoalResult\n    object Empty : GoalResult\n    object NotNumber : GoalResult\n    object OutOfRange : GoalResult\n}\n\nfun parseGoal(input: String): GoalResult {\n    val text = input.trim()\n    if (text.isEmpty()) return GoalResult.Empty\n    val minutes = text.toIntOrNull() ?: return GoalResult.NotNumber\n    if (minutes !in 1..1440) return GoalResult.OutOfRange\n    return GoalResult.Valid(minutes)\n}\n\nfun describe(result: GoalResult): String = when (result) {\n    is GoalResult.Valid -> "目标：${result.minutes} 分钟"\n    GoalResult.Empty -> "请输入分钟数"\n    GoalResult.NotNumber -> "请输入有效整数"\n    GoalResult.OutOfRange -> "请输入 1 到 1440 的整数"\n}\n\nfun main() {\n    for (input in listOf(" ", "abc", "999999999999", "0", "1", "1440", "1441", "30")) {\n        println(describe(parseGoal(input)))\n    }\n}',
  output:'请输入分钟数\n请输入有效整数\n请输入有效整数\n请输入 1 到 1440 的整数\n目标：1 分钟\n目标：1440 分钟\n请输入 1 到 1440 的整数\n目标：30 分钟',question:'输入 0 时会得到哪种结果？',options:['范围错误','格式错误','自动保存目标'],answer:0,
  explanation:'0 是可以解析的整数，但不在本例允许的 1 到 1440 范围内，因此返回 OutOfRange。',vocab:'goal · 目标；result · 结果；valid · 有效；empty · 空；range · 范围；parse · 解析',
  notes:['sealed（密封）interface（接口）定义 GoalResult（学习目标结果）的有限类型集合。','data class（数据类）定义 Valid（有效结果），val（只读属性）minutes（分钟数）类型为 Int（整数），实现 GoalResult（学习目标结果）。','object（单例对象）Empty（空输入）实现 GoalResult（学习目标结果）。','object（单例对象）NotNumber（不是整数）实现 GoalResult（学习目标结果）。','object（单例对象）OutOfRange（范围错误）实现 GoalResult（学习目标结果）。','右花括号结束 GoalResult（学习目标结果）定义。','fun（函数）定义 parseGoal（解析目标），接收 String（字符串）类型的 input（输入），返回 GoalResult（学习目标结果）。','val（只读声明）创建 text（整理后的文字），input（输入）经 trim（去除首尾空格）处理。','if（如果）text（整理后的文字）的 isEmpty（是否为空）为真，return（返回）GoalResult（学习目标结果）的 Empty（空输入）。','val（只读声明）创建 minutes（分钟数），text（整理后的文字）的 toIntOrNull（尝试转整数）失败时通过 ?: 和 return（返回）交回 GoalResult（学习目标结果）的 NotNumber（不是整数）。','if（如果）minutes（分钟数）不 in（在范围内）1 到 1440，return（返回）GoalResult（学习目标结果）的 OutOfRange（范围错误）。','return（返回）GoalResult（学习目标结果）的 Valid（有效结果），包含 minutes（分钟数）。','右花括号结束 parseGoal（解析目标）函数。','fun（函数）定义 describe（描述结果），接收 GoalResult（学习目标结果）类型的 result（结果），返回 String（字符串）；when（条件分支）检查 result。','is（类型判断）检查 GoalResult（学习目标结果）的 Valid（有效结果），${result.minutes}（插入结果的分钟数）组成提示。','GoalResult（学习目标结果）的 Empty（空输入）对应输入提示。','GoalResult（学习目标结果）的 NotNumber（不是整数）对应格式提示。','GoalResult（学习目标结果）的 OutOfRange（范围错误）对应范围提示。','右花括号结束 when（条件分支）。','fun（函数）定义 main（主入口）。','for（循环）让 input（当前输入）依次取自 in（来自）listOf（创建列表）提供的示例值，abc 是无效文字。','println（打印并换行）显示 describe（描述结果）处理 parseGoal（解析目标）解析 input（当前输入）的结果。','右花括号结束 for（循环）。','右花括号结束 main（主入口）函数。'],
  language:'Kotlin',commentPrefix:'//',guide:['先检查空文字，再尝试转换，最后检查业务范围。1 和 1440 是有效边界，0 和 1441 超出范围；过大的整数无法转换为 Int，也会返回解析失败。','密封结果类型便于界面根据原因显示提示；这里没有实现安卓界面或持久化。'],advanced:true
 }
];
