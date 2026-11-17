export const sqlLessons = [
  {
    "id": "sql-select",
    "title": "第一条查询",
    "subtitle": "看懂 SELECT 与结果列",
    "explain": "SELECT 可以查询表达式或表中的数据。这里直接查询一段文字，不需要建立表。",
    "code": "SELECT '你好' AS greeting;",
    "output": "你好",
    "question": "AS greeting 的作用是什么？",
    "options": [
      "给结果列起别名",
      "创建用户账号",
      "发送网络请求"
    ],
    "answer": 0,
    "explanation": "AS 为结果列设置别名；greeting 是这里为结果列取的名字。",
    "vocab": "select · 查询；greeting · 问候",
    "notes": [
      "SELECT（查询）返回文字“你好”；AS（作为）给结果列起别名 greeting（问候）。"
    ],
    "language": "SQL · SQLite",
    "commentPrefix": "--",
    "outputLabel": "查询结果",
    "notice": "示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。",
    "guide": [
      "SELECT 可以查询表达式或表中的数据。这里直接查询一段文字，不需要建立表。",
      "AS 为结果列设置别名；greeting 是这里为结果列取的名字。"
    ]
  },
  {
    "id": "sql-create",
    "title": "创建表并添加数据",
    "subtitle": "理解表、列和记录",
    "explain": "表由列和记录组成。示例在内存 SQLite 数据库中创建课程表、插入一条记录，再查询标题。",
    "code": "CREATE TABLE lessons (id INTEGER PRIMARY KEY, title TEXT NOT NULL);\nINSERT INTO lessons (id, title) VALUES (1, '变量');\nSELECT title FROM lessons;",
    "output": "变量",
    "question": "title 是什么？",
    "options": [
      "表中的一列",
      "自动生成的网站",
      "数据库密码"
    ],
    "answer": 0,
    "explanation": "title 是 lessons 表的文字列；示例数据库只存在于内存。",
    "vocab": "table · 表；title · 标题",
    "notes": [
      "CREATE TABLE（创建表）lessons（课程表）；id（编号）为 INTEGER（整数）PRIMARY KEY（主键），title（标题）为 TEXT（文本）且 NOT NULL（不允许空值）。",
      "INSERT INTO（插入到）lessons（课程表）的 id（编号）和 title（标题）列，VALUES（值）为 1 和“变量”。",
      "SELECT（查询）title（标题）FROM（从）lessons（课程表）。"
    ],
    "language": "SQL · SQLite",
    "commentPrefix": "--",
    "outputLabel": "查询结果",
    "notice": "示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。",
    "guide": [
      "表由列和记录组成。示例在内存 SQLite 数据库中创建课程表、插入一条记录，再查询标题。",
      "title 是 lessons 表的文字列；示例数据库只存在于内存。"
    ]
  },
  {
    "id": "sql-where",
    "title": "按条件查询",
    "subtitle": "只查看符合要求的记录",
    "explain": "WHERE 可以限制查询结果。示例使用固定数据，WHERE 条件只保留指定编号。",
    "code": "CREATE TABLE lessons (id INTEGER, title TEXT);\nINSERT INTO lessons (id, title) VALUES (1, '变量'), (2, '循环');\nSELECT title FROM lessons WHERE id = 2;",
    "output": "循环",
    "question": "WHERE id = 2 的作用是什么？",
    "options": [
      "只保留编号为 2 的记录",
      "删除编号为 2 的记录",
      "修改全部记录"
    ],
    "answer": 0,
    "explanation": "WHERE 在这里用于筛选，SELECT 不会删除或修改记录。",
    "vocab": "where · 条件；id · 编号",
    "notes": [
      "CREATE TABLE（创建表）lessons（课程表），包含 id（编号）INTEGER（整数）和 title（标题）TEXT（文本）。",
      "INSERT INTO（插入到）lessons（课程表）的 id（编号）与 title（标题）列，VALUES（值）包含两条示例记录。",
      "SELECT（查询）title（标题）FROM（从）lessons（课程表）WHERE（条件）id（编号）等于 2。"
    ],
    "language": "SQL · SQLite",
    "commentPrefix": "--",
    "outputLabel": "查询结果",
    "notice": "示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。",
    "guide": [
      "WHERE 可以限制查询结果。示例使用固定数据，WHERE 条件只保留指定编号。",
      "WHERE 在这里用于筛选，SELECT 不会删除或修改记录。"
    ]
  },
  {
    "id": "sql-count",
    "title": "统计记录数量",
    "subtitle": "使用聚合函数",
    "explain": "COUNT(*) 可以统计查询结果中的记录数量。过滤条件会影响参与统计的记录。",
    "code": "CREATE TABLE lessons (id INTEGER);\nINSERT INTO lessons (id) VALUES (1), (2), (3);\nSELECT COUNT(*) AS total FROM lessons;",
    "output": "3",
    "question": "COUNT(*) 在示例中返回什么？",
    "options": [
      "记录数量",
      "所有标题",
      "网络响应"
    ],
    "answer": 0,
    "explanation": "COUNT(*) 统计 lessons 表中的记录，本例有三条。",
    "vocab": "count · 计数；total · 总计",
    "notes": [
      "CREATE TABLE（创建表）lessons（课程表），包含 id（编号）INTEGER（整数）列。",
      "INSERT INTO（插入到）lessons（课程表）的 id（编号）列，VALUES（值）为 1、2、3。",
      "SELECT（查询）COUNT（计数）全部记录，AS（作为）total（总计）列，FROM（从）lessons（课程表）。"
    ],
    "language": "SQL · SQLite",
    "commentPrefix": "--",
    "outputLabel": "查询结果",
    "notice": "示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。",
    "guide": [
      "COUNT(*) 可以统计查询结果中的记录数量。过滤条件会影响参与统计的记录。",
      "COUNT(*) 统计 lessons 表中的记录，本例有三条。"
    ]
  },
  {
    "id": "sql-order",
    "title": "排序与取前几项",
    "subtitle": "让结果按需要的顺序展示",
    "explain": "ORDER BY 控制排序；DESC 表示降序。LIMIT 在 SQLite 中限制返回的记录数量。",
    "code": "CREATE TABLE lessons (id INTEGER, title TEXT);\nINSERT INTO lessons (id, title) VALUES (1, '变量'), (2, '循环');\nSELECT title FROM lessons ORDER BY id DESC LIMIT 1;",
    "output": "循环",
    "question": "DESC 表示什么？",
    "options": [
      "降序",
      "删除记录",
      "创建索引"
    ],
    "answer": 0,
    "explanation": "DESC 表示降序，因此较大的编号排在前面；LIMIT 1 只取一条。",
    "vocab": "order · 排序；limit · 限制",
    "notes": [
      "CREATE TABLE（创建表）lessons（课程表），包含 id（编号）INTEGER（整数）和 title（标题）TEXT（文本）。",
      "INSERT INTO（插入到）lessons（课程表）的 id（编号）与 title（标题）列，VALUES（值）包含两条记录。",
      "SELECT（查询）title（标题）FROM（从）lessons（课程表），ORDER BY（按……排序）id（编号）DESC（降序），LIMIT（限制）1 条。"
    ],
    "language": "SQL · SQLite",
    "commentPrefix": "--",
    "outputLabel": "查询结果",
    "notice": "示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。",
    "guide": [
      "ORDER BY 控制排序；DESC 表示降序。LIMIT 在 SQLite 中限制返回的记录数量。",
      "DESC 表示降序，因此较大的编号排在前面；LIMIT 1 只取一条。"
    ]
  },
  {
    "id": "sql-update",
    "title": "更新一条记录",
    "subtitle": "使用 WHERE 限定更新范围",
    "explain": "UPDATE 可以修改现有记录。WHERE 限定目标；省略 WHERE 会影响满足语句范围的所有记录。",
    "code": "CREATE TABLE lessons (id INTEGER, title TEXT);\nINSERT INTO lessons (id, title) VALUES (1, '变量');\nUPDATE lessons SET title = '新标题' WHERE id = 1;\nSELECT title FROM lessons WHERE id = 1;",
    "output": "新标题",
    "question": "UPDATE 中的 WHERE 在这里做什么？",
    "options": [
      "限定要更新的记录",
      "自动创建表",
      "导出所有数据"
    ],
    "answer": 0,
    "explanation": "WHERE id = 1 限定本次更新针对编号 1 的记录。",
    "vocab": "update · 更新；set · 设置",
    "notes": [
      "CREATE TABLE（创建表）lessons（课程表），包含 id（编号）INTEGER（整数）和 title（标题）TEXT（文本）。",
      "INSERT INTO（插入到）lessons（课程表）的 id（编号）与 title（标题）列，VALUES（值）为示例数据。",
      "UPDATE（更新）lessons（课程表），SET（设置）title（标题）为“新标题”，WHERE（条件）id（编号）为 1。",
      "SELECT（查询）title（标题）FROM（从）lessons（课程表），WHERE（条件）id（编号）为 1。"
    ],
    "language": "SQL · SQLite",
    "commentPrefix": "--",
    "outputLabel": "查询结果",
    "notice": "示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。",
    "guide": [
      "UPDATE 可以修改现有记录。WHERE 限定目标；省略 WHERE 会影响满足语句范围的所有记录。",
      "WHERE id = 1 限定本次更新针对编号 1 的记录。"
    ]
  },
  {
    "id": "sql-join",
    "title": "连接两张表",
    "subtitle": "通过关联字段组合数据",
    "explain": "JOIN 可以根据匹配条件组合来自多张表的记录。这里通过学生编号关联一个人和一条学习记录。",
    "code": "CREATE TABLE students (id INTEGER, name TEXT);\nCREATE TABLE records (student_id INTEGER, topic TEXT);\nINSERT INTO students (id, name) VALUES (1, '小明');\nINSERT INTO records (student_id, topic) VALUES (1, 'Python');\nSELECT students.name FROM students JOIN records ON students.id = records.student_id;",
    "output": "小明",
    "question": "ON 在这里指定什么？",
    "options": [
      "两张表的匹配条件",
      "文件保存路径",
      "用户登录密码"
    ],
    "answer": 0,
    "explanation": "ON 指定 students.id 与 records.student_id 相等时将记录连接起来。",
    "vocab": "join · 连接；student · 学生",
    "notes": [
      "CREATE TABLE（创建表）students（学生表），包含 id（编号）INTEGER（整数）和 name（名字）TEXT（文本）。",
      "CREATE TABLE（创建表）records（记录表），包含 student_id（学生编号）INTEGER（整数）和 topic（主题）TEXT（文本）。",
      "INSERT INTO（插入到）students（学生表）的 id（编号）与 name（名字），VALUES（值）为示例数据。",
      "INSERT INTO（插入到）records（记录表）的 student_id（学生编号）与 topic（主题），VALUES（值）包含 Python（编程语言名）。",
      "SELECT（查询）students（学生表）的 name（名字）FROM（从）students（学生表）JOIN（连接）records（记录表），ON（匹配条件）students（学生表）的 id（编号）等于 records（记录表）的 student_id（学生编号）。"
    ],
    "language": "SQL · SQLite",
    "commentPrefix": "--",
    "outputLabel": "查询结果",
    "notice": "示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。",
    "guide": [
      "JOIN 可以根据匹配条件组合来自多张表的记录。这里通过学生编号关联一个人和一条学习记录。",
      "ON 指定 students.id 与 records.student_id 相等时将记录连接起来。"
    ]
  },
  {
    "id": "sql-transaction",
    "title": "事务与回滚",
    "subtitle": "理解一组操作如何撤销",
    "explain": "事务把多个操作组织成一个单元。ROLLBACK 可以撤销当前未提交事务中的更改；具体并发和持久性行为依数据库及配置而异。",
    "code": "CREATE TABLE lessons (id INTEGER);\nBEGIN;\nINSERT INTO lessons (id) VALUES (1);\nROLLBACK;\nSELECT COUNT(*) AS total FROM lessons;",
    "output": "0",
    "question": "ROLLBACK 之后，示例表中还有插入的记录吗？",
    "options": [
      "没有",
      "一定还有",
      "自动同步到云端"
    ],
    "answer": 0,
    "explanation": "INSERT 在事务中执行，ROLLBACK 撤销该未提交的插入。",
    "vocab": "transaction · 事务；rollback · 回滚",
    "notes": [
      "CREATE TABLE（创建表）lessons（课程表），包含 id（编号）INTEGER（整数）列。",
      "BEGIN（开始）一个事务。",
      "INSERT INTO（插入到）lessons（课程表）的 id（编号）列，VALUES（值）为 1。",
      "ROLLBACK（回滚）撤销当前事务中尚未提交的更改。",
      "SELECT（查询）COUNT（计数）全部记录，AS（作为）total（总计）列，FROM（从）lessons（课程表）。"
    ],
    "language": "SQL · SQLite",
    "commentPrefix": "--",
    "outputLabel": "查询结果",
    "notice": "示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。",
    "guide": [
      "事务把多个操作组织成一个单元。ROLLBACK 可以撤销当前未提交事务中的更改；具体并发和持久性行为依数据库及配置而异。",
      "INSERT 在事务中执行，ROLLBACK 撤销该未提交的插入。"
    ]
  }
,
  {
    id:'sql-group-having',title:'按主题统计学习记录',subtitle:'先分组计数，再筛选统计结果',
    explain:'GROUP BY 把相同主题的记录归为一组；COUNT 计算每组条数；HAVING 再筛选分组后的结果。这个例子使用独立的 SQLite 内存数据库。',
    code:"CREATE TABLE study_log (topic TEXT);\nINSERT INTO study_log (topic) VALUES ('Python'), ('Java'), ('Python');\nSELECT topic, COUNT(*) AS total\nFROM study_log\nGROUP BY topic\nHAVING COUNT(*) >= 2\nORDER BY topic;",
    output:'Python | 2',question:'HAVING COUNT(*) >= 2 在这里筛选什么？',options:['记录数不少于 2 的主题组','只保留编号为 2 的单条记录','将所有次数都改为 2'],answer:0,
    explanation:'先按 topic 分组，再用 HAVING 保留至少有两条记录的组；示例中只有 Python 满足条件。',vocab:'group · 分组；having · 分组后筛选；count · 计数；total · 总数',
    notes:['CREATE TABLE（创建表）study_log（学习记录表），包含 topic（主题）这一 TEXT（文本）列。','INSERT INTO（插入到）study_log（学习记录表）的 topic（主题）列；VALUES（值）依次为 Python、Java、Python，它们是示例主题名称。','SELECT（查询）topic（主题）和 COUNT（统计）全部行数，AS（作为）total（总数）列。','FROM（从）study_log（学习记录表）读取数据。','GROUP BY（按……分组）topic（主题），相同主题归为同一组。','HAVING（筛选分组）只保留 COUNT（计数）不少于 2 的组。','ORDER BY（排序）topic（主题），默认按升序排列。'],
    language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。',guide:['每一行是一条学习记录，同一主题出现多次并不代表多门不同课程。','WHERE 用于筛选分组前的行；HAVING 可以筛选 COUNT 这样的分组统计结果。']
  }
,
 {
  id:'sql-left-join-count',title:'统计每个人的学习记录',subtitle:'没有记录的人也保留在结果中',
  explain:'LEFT JOIN 保留左表中的学生，即使右表没有匹配记录。COUNT(records.id) 只统计非空的记录编号，因此没有记录的人得到 0。',
  code:"CREATE TABLE students (id INTEGER, name TEXT);\nCREATE TABLE records (id INTEGER, student_id INTEGER);\nINSERT INTO students (id, name) VALUES (1, '小明'), (2, '小红');\nINSERT INTO records (id, student_id) VALUES (1, 1), (2, 1);\nSELECT students.name, COUNT(records.id) AS total\nFROM students LEFT JOIN records ON students.id = records.student_id\nGROUP BY students.id, students.name\nORDER BY students.id;",
  output:'小明 | 2\n小红 | 0',question:'为什么小红的 total 是 0？',options:['她没有匹配的记录，COUNT 忽略空的记录编号','她被从学生表中删除','COUNT 自动返回 0'],answer:0,
  explanation:'LEFT JOIN 保留小红，但右表字段为 NULL；COUNT(records.id) 不统计 NULL。',vocab:'left · 左侧；join · 连接；count · 计数；null · 空值',
  notes:['CREATE TABLE（创建表）students（学生表），包括 id（编号）INTEGER（整数）和 name（名字）TEXT（文本）。','CREATE TABLE（创建表）records（记录表），包括 id（记录编号）INTEGER（整数）和 student_id（学生编号）INTEGER（整数）。','INSERT INTO（插入到）students（学生表）的 id（编号）、name（名字）列，VALUES（值）包含两名学生。','INSERT INTO（插入到）records（记录表）的 id（记录编号）、student_id（学生编号）列，VALUES（值）包含两条属于编号 1 的记录。','SELECT（查询）students（学生表）的 name（名字）以及 COUNT（计数）records（记录表）的 id（记录编号），AS（作为）total（总数）列。','FROM（从）students（学生表）LEFT JOIN（左连接）records（记录表）；ON（匹配条件）要求 students（学生表）的 id（编号）等于 records（记录表）的 student_id（学生编号）。','GROUP BY（按……分组）students（学生表）的 id（编号）与 name（名字）。','ORDER BY（排序）students（学生表）的 id（编号），按升序展示。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。',guide:['左连接保留左表的每个学生，未匹配时右表字段为 NULL。','COUNT(records.id) 忽略 NULL；COUNT(*) 会计算连接产生的行，结果可能不同。']
 }
,
 {
  id:'sql-pagination',title:'分页读取课程列表',subtitle:'先确定顺序，再跳过和限制条数',
  explain:'SQLite 可以用 LIMIT 限制最多返回的条数，用 OFFSET 跳过前面的记录。分页时应指定稳定且唯一的排序键；这里使用唯一编号 id。',
  code:"CREATE TABLE lessons (id INTEGER PRIMARY KEY, title TEXT);\nINSERT INTO lessons (id, title) VALUES (1, '变量'), (2, '循环'), (3, '函数');\nSELECT title FROM lessons\nORDER BY id\nLIMIT 2 OFFSET 1;",
  output:'循环\n函数',question:'OFFSET 1 在这里是什么意思？',options:['跳过排序后的第一条记录','只返回编号为 1 的记录','删除第一条记录'],answer:0,
  explanation:'先按 id 升序排列，OFFSET 1 跳过第一条，LIMIT 2 最多返回后面两条。',vocab:'limit · 数量上限；offset · 偏移；order · 顺序',
  notes:['CREATE TABLE（创建表）lessons（课程表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），title（标题）为 TEXT（文本）。','INSERT INTO（插入到）lessons（课程表）的 id（编号）和 title（标题）列；VALUES（值）包含三条演示课程。','SELECT（查询）title（标题）FROM（从）lessons（课程表）。','ORDER BY（按……排序）id（编号），默认升序。','LIMIT（数量上限）2，OFFSET（偏移）1，跳过第一条后最多取两条。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。',guide:['先排序再分页，使用唯一编号可以让同一数据集的顺序明确。','数据在不同请求之间发生变化时，偏移分页仍可能出现重复或遗漏；实际项目需根据需求选择分页方式。']
 }
,
 {
  id:'sql-sum-empty',title:'汇总没有记录时的结果',subtitle:'用 COALESCE 处理空的求和结果',
  explain:'在 SQLite 中，SUM 对没有非空输入值的结果返回 NULL。示例使用 COALESCE 在求和结果为空时提供 0；这是一种展示选择。',
  code:"CREATE TABLE study_log (topic TEXT, minutes INTEGER);\nINSERT INTO study_log (topic, minutes) VALUES ('Python', 20), ('Python', 15);\nSELECT COALESCE(SUM(minutes), 0) AS total FROM study_log WHERE topic = 'Python';\nSELECT COALESCE(SUM(minutes), 0) AS total FROM study_log WHERE topic = 'Java';",
  output:'35\n0',question:'没有 Java 记录时，为什么显示 0？',options:['SUM 的 NULL 结果被 COALESCE 替换','数据库自动添加了一条记录','所有数据库都默认返回 0'],answer:0,
  explanation:'没有匹配记录时 SUM 为 NULL，COALESCE 选用第二个参数 0；没有插入额外记录。',vocab:'sum · 求和；coalesce · 取第一个非空值；total · 总计',
  notes:['CREATE TABLE（创建表）study_log（学习记录表），topic（主题）为 TEXT（文本），minutes（分钟数）为 INTEGER（整数）。','INSERT INTO（插入到）study_log（学习记录表）的 topic（主题）和 minutes（分钟数）列，VALUES（值）为两条 Python（示例主题）记录。','SELECT（查询）COALESCE（取第一个非空值）对 SUM（求和）minutes（分钟数）的结果提供默认值 0，AS（作为）total（总计），FROM（从）study_log（学习记录表）WHERE（条件）topic（主题）为 Python（示例主题）。','SELECT（查询）COALESCE（取第一个非空值）对 SUM（求和）minutes（分钟数）的结果提供默认值 0，AS（作为）total（总计），FROM（从）study_log（学习记录表）WHERE（条件）topic（主题）为 Java（示例主题）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。',guide:['SUM 忽略 NULL；没有非空输入时返回 NULL。','把 NULL 显示为 0 是否符合业务含义，需要根据场景决定。']
 }
,
 {
  id:'sql-is-null',title:'查找缺少分钟数的记录',subtitle:'用 IS NULL 判断未知值',
  explain:'NULL 表示值缺失或未知，与数字 0 不同。查询 NULL 应使用 IS NULL；示例只在独立 SQLite 内存数据库中执行。',
  code:"CREATE TABLE study (title TEXT, minutes INTEGER);\nINSERT INTO study (title, minutes) VALUES ('阅读', 0), ('复习', NULL);\nSELECT title FROM study WHERE minutes IS NULL;",
  output:'复习',question:'为什么“阅读”没有出现在结果中？',options:['它的分钟数是 0，不是 NULL','它被删除了','0 和 NULL 完全一样'],answer:0,
  explanation:'0 是已知数字，NULL 表示缺失或未知；只有“复习”的 minutes 是 NULL。',vocab:'null · 空值；is · 是；minutes · 分钟数',
  notes:['CREATE TABLE（创建表）study（学习记录表），title（标题）为 TEXT（文本），minutes（分钟数）为 INTEGER（整数）。','INSERT INTO（插入到）study（学习记录表）的 title（标题）和 minutes（分钟数）列，VALUES（值）包含分钟数 0 与 NULL（空值）两条记录。','SELECT（查询）title（标题）FROM（从）study（学习记录表）WHERE（条件）minutes（分钟数）IS NULL（为空值）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。',guide:['NULL 与 0、空字符串的含义不同。','使用 IS NULL 和 IS NOT NULL 判断空值，而不是用等号比较 NULL。']
 }
,
 {
  id:'sql-commit',title:'提交一组学习记录',subtitle:'用事务将多次写入一起提交',
  explain:'BEGIN 开始事务，COMMIT 提交其中的更改。示例在独立内存数据库里插入两条记录，提交后查询数量；连接关闭后示例数据不保留。',
  code:"CREATE TABLE study (id INTEGER PRIMARY KEY, title TEXT);\nBEGIN;\nINSERT INTO study (id, title) VALUES (1, '阅读');\nINSERT INTO study (id, title) VALUES (2, '复习');\nCOMMIT;\nSELECT COUNT(*) AS total FROM study;",
  output:'2',question:'COMMIT 在这里做什么？',options:['提交当前事务中的更改','撤销当前事务','自动同步到服务器'],answer:0,
  explanation:'COMMIT 提交当前事务中的两次插入；示例数据库在内存中，连接关闭后数据仍不会永久保留。',vocab:'commit · 提交；begin · 开始；transaction · 事务',
  notes:['CREATE TABLE（创建表）study（学习记录表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），title（标题）为 TEXT（文本）。','BEGIN（开始）一个事务。','INSERT INTO（插入到）study（学习记录表）的 id（编号）和 title（标题）列，VALUES（值）为 1 和“阅读”。','INSERT INTO（插入到）study（学习记录表）的 id（编号）和 title（标题）列，VALUES（值）为 2 和“复习”。','COMMIT（提交）当前事务中的更改。','SELECT（查询）COUNT（计数）全部记录，AS（作为）total（总数），FROM（从）study（学习记录表）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立的 SQLite 内存数据库；阅读本页不会创建真实数据库或连接服务器。',guide:['同一事务中的更改可以一起提交；如果出错，程序应按具体情况处理并回滚。','内存数据库关闭后不会保留，COMMIT 不等于跨设备同步或永久保存。']
 }
,
 {
  id:'sql-update-task',title:'更新指定任务的状态',subtitle:'用编号限定更新范围',
  explain:'SQLite 示例用整数 0 表示未完成、1 表示已完成。UPDATE 的 WHERE 限定目标编号，CHECK 约束限制允许的状态值。',
  code:"CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, done INTEGER NOT NULL CHECK (done IN (0, 1)));\nINSERT INTO tasks (id, title, done) VALUES (1, '阅读', 0), (2, '复习', 0);\nUPDATE tasks SET done = 1 WHERE id = 2;\nSELECT title, done FROM tasks ORDER BY id;",
  output:'阅读 | 0\n复习 | 1',question:'更新后“阅读”的状态是什么？',options:['仍为 0','变为 1','被删除'],answer:0,
  explanation:'WHERE id = 2 只匹配“复习”；编号 1 的状态保持 0。',vocab:'update · 更新；where · 条件；done · 完成状态',
  notes:['CREATE TABLE（创建表）tasks（任务表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），title（标题）为 TEXT（文本），done（完成状态）为 INTEGER（整数）且 NOT NULL（不允许空值），CHECK（检查约束）要求 done IN（属于）0 或 1。','INSERT INTO（插入到）tasks（任务表）的 id（编号）、title（标题）与 done（完成状态）列，VALUES（值）包含两条未完成任务。','UPDATE（更新）tasks（任务表），SET（设置）done（完成状态）为 1，WHERE（条件）id（编号）等于 2。','SELECT（查询）title（标题）和 done（完成状态）FROM（从）tasks（任务表），ORDER BY（排序）id（编号）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立的 SQLite 内存数据库；阅读页面不会修改真实数据库。',guide:['WHERE 限制更新目标；省略条件可能更新表中所有记录。','CHECK 和 NOT NULL 一起限制 done 的取值；实际表结构还需要根据业务设计。']
 }
,
 {
  id:'sql-delete-task',title:'删除指定任务并查看结果',subtitle:'用 WHERE 限定范围并检查影响行数',
  explain:'DELETE 可以删除匹配条件的行。示例按编号删除任务，并用 SQLite 的 changes() 查看最近一次直接修改的行数；所有操作都在独立内存数据库中。',
  code:"CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT);\nINSERT INTO tasks (id, title) VALUES (1, '阅读'), (2, '复习');\nDELETE FROM tasks WHERE id = 2;\nSELECT changes() AS affected;\nDELETE FROM tasks WHERE id = 2;\nSELECT changes() AS affected;\nSELECT title FROM tasks ORDER BY id;",
  output:'1\n0\n阅读',question:'再次删除编号 2 时，changes() 返回多少？',options:['0','1','自动新建任务'],answer:0,
  explanation:'第一次删除后编号 2 已不存在，第二次没有匹配行，所以影响行数为 0；编号 1 仍然保留。',vocab:'delete · 删除；where · 条件；changes · 修改行数；affected · 受影响的',
  notes:['CREATE TABLE（创建表）tasks（任务表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），title（标题）为 TEXT（文本）。','INSERT INTO（插入到）tasks（任务表）的 id（编号）和 title（标题）列，VALUES（值）包含两条任务。','DELETE FROM（从表删除）tasks（任务表）中 WHERE（条件）id（编号）等于 2 的记录。','SELECT（查询）changes（最近一次直接修改的行数），AS（作为）affected（受影响行数）。','DELETE FROM（从表删除）tasks（任务表）中 WHERE（条件）id（编号）等于 2 的记录；此时已没有匹配项。','SELECT（查询）changes（最近一次直接修改的行数），AS（作为）affected（受影响行数）。','SELECT（查询）title（标题）FROM（从）tasks（任务表），ORDER BY（按……排序）id（编号）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会删除真实数据。',guide:['WHERE 限定删除目标；省略条件会删除表中所有行。','changes() 是 SQLite 的函数，查看当前连接上最近一次直接修改的行数；其他数据库的写法可能不同。']
 }
,
 {
  id:'sql-unique-task',title:'用唯一约束处理重复标题',subtitle:'冲突时保留原有学习记录',
  explain:'UNIQUE 限制标题不能重复。示例使用 SQLite 的 ON CONFLICT 针对标题冲突跳过插入，再检查影响行数和原记录；数据库只在内存中。',
  code:"CREATE TABLE study (title TEXT NOT NULL UNIQUE, minutes INTEGER NOT NULL);\nINSERT INTO study (title, minutes) VALUES ('阅读', 20);\nINSERT INTO study (title, minutes) VALUES ('阅读', 30) ON CONFLICT(title) DO NOTHING;\nSELECT changes() AS affected;\nSELECT title, minutes FROM study;",
  output:'0\n阅读 | 20',question:'重复插入后，原记录的分钟数是多少？',options:['仍为 20','变成 30','自动发送到服务器'],answer:0,
  explanation:'第二次插入触发 title 的唯一约束，DO NOTHING 跳过插入，原记录的 minutes 保持 20。',vocab:'unique · 唯一；conflict · 冲突；affected · 受影响的；minutes · 分钟数',
  notes:['CREATE TABLE（创建表）study（学习记录表），title（标题）为 TEXT（文本）且 NOT NULL（不允许空值）和 UNIQUE（唯一），minutes（分钟数）为 INTEGER（整数）且 NOT NULL（不允许空值）。','INSERT INTO（插入到）study（学习记录表）的 title（标题）和 minutes（分钟数）列，VALUES（值）为“阅读”和 20。','INSERT INTO（插入到）study（学习记录表）的 title（标题）和 minutes（分钟数）列，VALUES（值）为“阅读”和 30；ON CONFLICT（发生冲突时）指定 title（标题），DO NOTHING（不做任何操作）跳过重复标题。','SELECT（查询）changes（最近一次直接修改的行数），AS（作为）affected（受影响行数）。','SELECT（查询）title（标题）和 minutes（分钟数）FROM（从）study（学习记录表）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会创建或修改真实数据。',guide:['唯一约束由数据库检查；DO NOTHING 只处理指定的唯一约束冲突。','接口可以根据具体业务将冲突转换为 409 等响应；本例本身不会启动接口。']
 }
,
 {
  id:'sql-topic-minutes',title:'按主题汇总学习时间',subtitle:'分组求和并按主题排序',
  explain:'GROUP BY 把相同主题的记录放到一组，SUM 计算每组总分钟数，ORDER BY 让结果按主题排列。示例使用独立内存数据库。',
  code:"CREATE TABLE study (topic TEXT NOT NULL, minutes INTEGER NOT NULL);\nINSERT INTO study (topic, minutes) VALUES ('Python', 20), ('Java', 10), ('Python', 15);\nSELECT topic, SUM(minutes) AS total\nFROM study\nGROUP BY topic\nORDER BY topic;",
  output:'Java | 10\nPython | 35',question:'Python 主题的总分钟数是多少？',options:['35','20','自动从服务器获取'],answer:0,
  explanation:'两条 Python 记录分别为 20 和 15 分钟，同组求和为 35。',vocab:'group · 分组；topic · 主题；sum · 求和；total · 总计',
  notes:['CREATE TABLE（创建表）study（学习记录表），topic（主题）为 TEXT（文本）且 NOT NULL（不允许空值），minutes（分钟数）为 INTEGER（整数）且 NOT NULL（不允许空值）。','INSERT INTO（插入到）study（学习记录表）的 topic（主题）和 minutes（分钟数）列，VALUES（值）包含三条记录；Python、Java 为示例主题。','SELECT（查询）topic（主题）和 SUM（求和）minutes（分钟数），AS（作为）total（总计）列。','FROM（从）study（学习记录表）读取记录。','GROUP BY（按……分组）topic（主题）。','ORDER BY（按……排序）topic（主题），默认升序。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会创建或修改真实数据。',guide:['GROUP BY 将相同主题归组；SUM 分别计算每组分钟数。','没有记录的主题不会自动出现；需要保留它们时，可结合主题表和左连接。']
 }
,
 {
  id:'sql-completed-topic-totals',title:'汇总已完成学习时间并保留空主题',subtitle:'在左连接条件中筛选完成状态',
  explain:'主题表包含所有要展示的主题；左连接只匹配已完成的学习记录，再按主题求和。没有匹配记录的主题仍显示，并用 COALESCE 将空总和换成 0。示例使用独立内存数据库。',
  code:"CREATE TABLE topics (id INTEGER PRIMARY KEY, name TEXT NOT NULL);\nCREATE TABLE study (topic_id INTEGER NOT NULL, minutes INTEGER NOT NULL, done INTEGER NOT NULL);\nINSERT INTO topics (id, name) VALUES (1, 'Python'), (2, 'Java'), (3, 'Vue');\nINSERT INTO study (topic_id, minutes, done) VALUES (1, 20, 1), (1, 15, 0), (2, 10, 0);\nSELECT topics.name, COALESCE(SUM(study.minutes), 0) AS total\nFROM topics\nLEFT JOIN study ON study.topic_id = topics.id AND study.done = 1\nGROUP BY topics.id, topics.name\nORDER BY topics.name;",
  output:'Java | 0\nPython | 20\nVue | 0',question:'为什么 Java 仍出现在结果中？',options:['左连接保留主题表的行，即使没有已完成记录','因为所有记录都会计入总和','数据库自动创建了完成记录'],answer:0,
  explanation:'Java 有未完成记录，但连接条件只匹配 done 为 1 的记录；左连接仍保留主题行，SUM 为空时由 COALESCE 返回 0。',vocab:'left join · 左连接；completed · 已完成；total · 总计；coalesce · 使用第一个非空值',
  notes:['CREATE TABLE（创建表）topics（主题表），id（编号）为 INTEGER（整数）且为 PRIMARY KEY（主键），name（名称）为 TEXT（文本）且 NOT NULL（不允许空值）。','CREATE TABLE（创建表）study（学习记录表），topic_id（主题编号）、minutes（分钟数）、done（完成状态）均为 INTEGER（整数）且 NOT NULL（不允许空值）。','INSERT INTO（插入到）topics（主题表）的 id（编号）和 name（名称）列，VALUES（值）提供三个主题：Python、Java、Vue。','INSERT INTO（插入到）study（学习记录表）的 topic_id（主题编号）、minutes（分钟数）和 done（完成状态）列，VALUES（值）提供三条记录；1 表示已完成，0 表示未完成。','SELECT（查询）topics（主题表）的 name（名称），COALESCE（取第一个非空值）将 SUM（求和）计算 study（学习记录表）的 minutes（分钟数）后的空值替换为 0，AS（作为）total（总计）列。','FROM（从）topics（主题表）读取主题。','LEFT JOIN（左连接）study（学习记录表），ON（连接条件）要求 study 的 topic_id（主题编号）等于 topics 的 id（编号），AND（并且）study 的 done（完成状态）等于 1。','GROUP BY（按……分组）topics（主题表）的 id（编号）和 name（名称），避免同名主题被合并。','ORDER BY（按……排序）topics（主题表）的 name（名称），默认升序。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会创建或修改真实数据。',guide:['先观察 Python 只统计 20 分钟，未完成的 15 分钟不会计入。','把 done = 1 放进 WHERE 会过滤掉没有匹配记录的主题；试着对比两种结果。']
 }
,
 {
  id:'sql-savepoint-rollback',title:'事务中的保存点与局部回滚',subtitle:'撤销一部分操作后继续提交',
  explain:'事务中可以设置保存点，回滚到该位置会撤销保存点之后的更改，但保留之前的更改。示例随后释放保存点、继续插入并提交；数据库仅在内存中。',
  code:"CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL);\nBEGIN;\nINSERT INTO tasks (id, title) VALUES (1, '阅读');\nSAVEPOINT before_optional;\nINSERT INTO tasks (id, title) VALUES (2, '复习');\nROLLBACK TO before_optional;\nRELEASE before_optional;\nINSERT INTO tasks (id, title) VALUES (3, '练习');\nCOMMIT;\nSELECT title FROM tasks ORDER BY id;",
  output:'阅读\n练习',question:'回滚到保存点后，“阅读”为什么还在？',options:['它在保存点之前插入','所有回滚都会保留所有记录','它自动从服务器恢复'],answer:0,
  explanation:'ROLLBACK TO 撤销保存点之后的“复习”；之前的“阅读”保留，之后加入的“练习”随事务一起提交。',vocab:'savepoint · 保存点；rollback · 回滚；release · 释放；optional · 可选的；commit · 提交',
  notes:['CREATE TABLE（创建表）tasks（任务表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），title（标题）为 TEXT（文本）且 NOT NULL（不允许空值）。','BEGIN（开始）一个事务。','INSERT INTO（插入到）tasks（任务表）的 id（编号）和 title（标题）列，VALUES（值）为 1 和“阅读”。','SAVEPOINT（保存点）创建 before_optional（可选操作之前）保存点。','INSERT INTO（插入到）tasks（任务表）的 id（编号）和 title（标题）列，VALUES（值）为 2 和“复习”。','ROLLBACK TO（回滚到）before_optional（可选操作之前）保存点，撤销后面的插入。','RELEASE（释放）before_optional（可选操作之前）保存点；外层事务仍在进行。','INSERT INTO（插入到）tasks（任务表）的 id（编号）和 title（标题）列，VALUES（值）为 3 和“练习”。','COMMIT（提交）外层事务的剩余更改。','SELECT（查询）title（标题）FROM（从）tasks（任务表），ORDER BY（按……排序）id（编号）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['保存点不是独立提交：外层事务最后仍需要提交或回滚。','这里主动执行局部回滚，未模拟数据库异常；真实应用应根据错误类型处理事务。']
 }
,
 {
  id:'sql-keyset-page',title:'使用复合游标读取下一页',subtitle:'排序值相同时用编号继续',
  explain:'示例先按分钟数降序、编号升序排序。上一页最后一条的分钟数和编号一起构成游标，下一页读取其后的记录。示例数据固定，使用独立内存数据库。',
  code:"CREATE TABLE study (id INTEGER PRIMARY KEY, minutes INTEGER NOT NULL);\nINSERT INTO study (id, minutes) VALUES (1, 20), (2, 20), (3, 10);\nSELECT id, minutes FROM study\nWHERE minutes < 20 OR (minutes = 20 AND id > 1)\nORDER BY minutes DESC, id ASC\nLIMIT 2;",
  output:'2 | 20\n3 | 10',question:'为什么编号 2 的记录会出现在下一页？',options:['分钟数相同但编号排在游标之后','因为它的分钟数大于 20','数据库自动跳过了排序'],answer:0,
  explanation:'上一条游标为分钟数 20、编号 1；编号 2 的分钟数相同且编号更大，因此排在其后。',vocab:'cursor · 游标；keyset · 键集；minutes · 分钟数；order · 排序；limit · 数量限制',
  notes:['CREATE TABLE（创建表）study（学习记录表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），minutes（分钟数）为 INTEGER（整数）且 NOT NULL（不允许空值）。','INSERT INTO（插入到）study（学习记录表）的 id（编号）和 minutes（分钟数）列，VALUES（值）提供三条记录。','SELECT（查询）id（编号）和 minutes（分钟数）FROM（从）study（学习记录表）。','WHERE（条件）选择 minutes（分钟数）小于 20，OR（或者）分钟数等于 20 AND（并且）id（编号）大于 1 的记录。','ORDER BY（按……排序）minutes（分钟数）DESC（降序），再按 id（编号）ASC（升序）。','LIMIT（限制数量）最多返回 2 条。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['游标值必须与排序字段及方向对应；本例的 20 和 1 代表上一页最后一条。','示例使用固定游标；真实应用应使用参数化查询，并考虑记录变更、索引与一致性需求。']
 }
,
 {
  id:'sql-conditional-count',title:'统计已完成与待办数量',subtitle:'用 CASE 进行条件汇总',
  explain:'CASE 根据每条任务的状态返回 1 或 0，SUM 分别累加两种状态；COALESCE 为没有记录的情况提供 0。示例使用内存数据库。',
  code:"CREATE TABLE tasks (done INTEGER NOT NULL);\nINSERT INTO tasks (done) VALUES (1), (0), (0);\nSELECT COALESCE(SUM(CASE WHEN done = 1 THEN 1 ELSE 0 END), 0) AS completed,\n       COALESCE(SUM(CASE WHEN done = 0 THEN 1 ELSE 0 END), 0) AS pending\nFROM tasks;\nDELETE FROM tasks;\nSELECT COALESCE(SUM(CASE WHEN done = 1 THEN 1 ELSE 0 END), 0) AS completed,\n       COALESCE(SUM(CASE WHEN done = 0 THEN 1 ELSE 0 END), 0) AS pending\nFROM tasks;",
  output:'1 | 2\n0 | 0',question:'删除所有示例任务后，两个数量是多少？',options:['都是 0','都是 1','自动从服务器获取'],answer:0,
  explanation:'空表上的 SUM 返回空值，COALESCE 把它替换为 0。',vocab:'case · 条件判断；sum · 求和；completed · 已完成；pending · 待办；coalesce · 取第一个非空值',
  notes:['CREATE TABLE（创建表）tasks（任务表），done（完成状态）为 INTEGER（整数）且 NOT NULL（不允许空值）。','INSERT INTO（插入到）tasks（任务表）的 done（完成状态）列，VALUES（值）包含一条已完成和两条待办。','SELECT（查询）COALESCE（取第一个非空值）将 SUM（求和）得到的空值替换为 0；CASE WHEN（条件判断）done（完成状态）为 1 时 THEN（则）返回 1，ELSE（否则）返回 0，END（结束判断），AS（作为）completed（已完成数量）。','COALESCE（取第一个非空值）将 SUM（求和）得到的空值替换为 0；CASE WHEN（条件判断）done（完成状态）为 0 时 THEN（则）返回 1，ELSE（否则）返回 0，END（结束判断），AS（作为）pending（待办数量）。','FROM（从）tasks（任务表）读取数据。','DELETE FROM（从表删除）tasks（任务表）的所有示例记录。','SELECT（查询）COALESCE（取第一个非空值）将 SUM（求和）得到的空值替换为 0；CASE WHEN（条件判断）done（完成状态）为 1 时 THEN（则）返回 1，ELSE（否则）返回 0，END（结束判断），AS（作为）completed（已完成数量）。','COALESCE（取第一个非空值）将 SUM（求和）得到的空值替换为 0；CASE WHEN（条件判断）done（完成状态）为 0 时 THEN（则）返回 1，ELSE（否则）返回 0，END（结束判断），AS（作为）pending（待办数量）。','FROM（从）tasks（任务表）读取数据。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；DELETE 只影响示例中的临时表。',guide:['比较有记录和空表时两次查询的结果。','此例假设状态只有 0 和 1；真实数据库应通过约束或业务规则验证状态。']
 }
,
 {
  id:'sql-check-task-status',title:'限制任务完成状态',subtitle:'用 CHECK 约束允许的值',
  explain:'示例将任务状态约束为 0 或 1，并用 NOT NULL 拒绝空值。两条有效记录可以插入；不符合约束的写入会失败。',
  code:"CREATE TABLE tasks (title TEXT NOT NULL, done INTEGER NOT NULL CHECK (done IN (0, 1)));\nINSERT INTO tasks (title, done) VALUES ('阅读', 0), ('复习', 1);\nSELECT title, done FROM tasks ORDER BY title;",
  output:'复习 | 1\n阅读 | 0',question:'为什么还要写 NOT NULL？',options:['防止状态为空','自动建立网络连接','让所有任务默认完成'],answer:0,
  explanation:'CHECK 约束限定允许的状态；NOT NULL 明确禁止空值。',vocab:'check · 检查；constraint · 约束；done · 完成状态；null · 空值',
  notes:['CREATE TABLE（创建表）tasks（任务表），title（标题）为 TEXT（文本）且 NOT NULL（不允许空值）；done（完成状态）为 INTEGER（整数）且 NOT NULL，CHECK（检查约束）要求 done 的值 IN（属于）0 或 1。','INSERT INTO（插入到）tasks（任务表）的 title（标题）和 done（完成状态）列，VALUES（值）提供两条有效记录。','SELECT（查询）title（标题）和 done（完成状态）FROM（从）tasks（任务表），ORDER BY（按……排序）title（标题）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['0 表示未完成，1 表示已完成；约束让其他数值不能写入。','应用层仍应验证输入并处理数据库约束错误。']
 }
,
 {
  id:'sql-default-task-status',title:'为新任务设置默认状态',subtitle:'省略字段时使用 DEFAULT',
  explain:'创建任务时，如果插入语句省略 done 字段，数据库使用默认值 0；显式提供 1 则使用提供的值。示例使用独立内存数据库。',
  code:"CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1)));\nINSERT INTO tasks (id, title) VALUES (1, '阅读');\nINSERT INTO tasks (id, title, done) VALUES (2, '复习', 1);\nSELECT title, done FROM tasks ORDER BY id;",
  output:'阅读 | 0\n复习 | 1',question:'第一条插入语句没有提供 done，会得到什么值？',options:['0','1','自动从服务器读取'],answer:0,
  explanation:'done 字段设置了 DEFAULT 0；第一条语句省略该字段，因此使用默认值。',vocab:'default · 默认值；done · 完成状态；insert · 插入；check · 约束检查',
  notes:['CREATE TABLE（创建表）tasks（任务表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键）；title（标题）为 TEXT（文本）且 NOT NULL（不允许空值）；done（完成状态）为 INTEGER、NOT NULL、DEFAULT（默认值）0，CHECK（检查约束）要求 done 的值 IN（属于）0 或 1。','INSERT INTO（插入到）tasks（任务表）的 id（编号）和 title（标题）列，VALUES（值）为 1 和“阅读”；省略 done（完成状态）。','INSERT INTO（插入到）tasks（任务表）的 id（编号）、title（标题）和 done（完成状态）列，VALUES（值）为 2、“复习”和 1。','SELECT（查询）title（标题）和 done（完成状态）FROM（从）tasks（任务表），ORDER BY（按……排序）id（编号）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['对比省略 done 和明确提供 done 的两次插入。','显式传入 NULL 不等于省略字段；本例的 NOT NULL 会拒绝空值。']
 }
,
 {
  id:'sql-complete-pending',title:'只完成尚未完成的任务',subtitle:'组合条件并检查影响行数',
  explain:'UPDATE 使用编号和当前状态共同定位记录。第一次更新待办任务，第二次因状态已改变而不再匹配；changes 返回最近一次修改的行数。',
  code:"CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1)));\nINSERT INTO tasks (id, title) VALUES (1, '阅读'), (2, '复习');\nUPDATE tasks SET done = 1 WHERE id = 1 AND done = 0;\nSELECT changes() AS affected;\nUPDATE tasks SET done = 1 WHERE id = 1 AND done = 0;\nSELECT changes() AS affected;\nSELECT title, done FROM tasks ORDER BY id;",
  output:'1\n0\n阅读 | 1\n复习 | 0',question:'第二次执行相同更新，影响行数为什么是 0？',options:['任务已经完成，不再满足条件','数据库自动删除了任务','另一条任务也被更新'],answer:0,
  explanation:'第一次将编号 1 的 done 改为 1；第二次要求 done 为 0，因此没有匹配行。',vocab:'update · 更新；where · 条件；done · 完成状态；affected · 影响的；changes · 修改行数',
  notes:['CREATE TABLE（创建表）tasks（任务表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），title（标题）为 TEXT（文本）且 NOT NULL（不允许空值），done（完成状态）为 INTEGER、NOT NULL、DEFAULT（默认值）0；CHECK（检查约束）要求 done IN（属于）0 或 1。','INSERT INTO（插入到）tasks（任务表）的 id（编号）和 title（标题）列，VALUES（值）提供两条任务，done（完成状态）使用默认值。','UPDATE（更新）tasks（任务表），SET（设置）done（完成状态）为 1，WHERE（条件）要求 id（编号）为 1 AND（并且）done 为 0。','SELECT（查询）changes（最近一次直接修改的行数），AS（作为）affected（影响行数）。','UPDATE（更新）tasks（任务表），SET（设置）done（完成状态）为 1，WHERE（条件）要求 id（编号）为 1 AND（并且）done 为 0。','SELECT（查询）changes（最近一次直接修改的行数），AS（作为）affected（影响行数）。','SELECT（查询）title（标题）和 done（完成状态）FROM（从）tasks（任务表），ORDER BY（按……排序）id（编号）。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['比较两次 changes 的结果，观察状态条件如何影响匹配。','真实接口需要区分“任务不存在”和“状态已改变”等情况，并考虑并发和权限。']
 }
,
 {
  id:'sql-average-minutes',title:'计算主题平均学习时长',subtitle:'筛选后求平均并处理空结果',
  explain:'AVG 计算匹配记录的平均值。示例分别查询已有主题和没有记录的主题，用 COALESCE 为后者显示 0；数据位于独立内存库。',
  code:"CREATE TABLE study (topic TEXT NOT NULL, minutes INTEGER NOT NULL);\nINSERT INTO study (topic, minutes) VALUES ('Python', 20), ('Python', 15), ('Java', 10);\nSELECT COALESCE(AVG(minutes), 0) AS average\nFROM study WHERE topic = 'Python';\nSELECT COALESCE(AVG(minutes), 0) AS average\nFROM study WHERE topic = 'Kotlin';",
  output:'17.5\n0',question:'没有 Kotlin 记录时，为什么显示 0？',options:['COALESCE 将空结果替换为 0','自动创建了学习记录','AVG 总是返回 0'],answer:0,
  explanation:'没有匹配记录时 AVG 返回空值，COALESCE 使用备用值 0；这不代表实际存在一条零分钟记录。',vocab:'average · 平均值；avg · 平均；topic · 主题；minutes · 分钟数；coalesce · 取第一个非空值',
  notes:['CREATE TABLE（创建表）study（学习记录表），topic（主题）为 TEXT（文本）且 NOT NULL（不允许空值），minutes（分钟数）为 INTEGER（整数）且 NOT NULL。','INSERT INTO（插入到）study（学习记录表）的 topic（主题）和 minutes（分钟数）列，VALUES（值）提供三条记录；Python、Java 是示例主题。','SELECT（查询）COALESCE（取第一个非空值）将 AVG（平均）minutes（分钟数）的空值替换为 0，AS（作为）average（平均值）。','FROM（从）study（学习记录表）读取，WHERE（条件）选择 topic（主题）为 Python 的记录。','SELECT（查询）COALESCE（取第一个非空值）将 AVG（平均）minutes（分钟数）的空值替换为 0，AS（作为）average（平均值）。','FROM（从）study（学习记录表）读取，WHERE（条件）选择 topic（主题）为 Kotlin 的记录。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['先用 WHERE 筛选主题，再计算匹配记录的平均值。','空结果用 0 是展示选择；如果业务需要区分无数据和真实零值，应保留空值或同时返回记录数量。']
 }
,
 {
  id:'sql-average-with-count',title:'区分没有记录和零分钟',subtitle:'关联主题并同时返回数量和平均值',
  explain:'从主题表出发左连接学习记录，即使某个主题没有记录也能显示。COUNT 统计匹配的记录编号，AVG 在没有匹配记录时返回 NULL，而真实的零分钟平均值是 0。',
  code:"CREATE TABLE topics (name TEXT PRIMARY KEY);\nCREATE TABLE study (id INTEGER PRIMARY KEY, topic TEXT NOT NULL, minutes INTEGER NOT NULL);\nINSERT INTO topics (name) VALUES ('Java'), ('Kotlin'), ('Python');\nINSERT INTO study (id, topic, minutes) VALUES (1, 'Java', 0), (2, 'Python', 20), (3, 'Python', 15);\nSELECT topics.name, COUNT(study.id) AS count, AVG(study.minutes) AS average\nFROM topics LEFT JOIN study ON topics.name = study.topic\nGROUP BY topics.name ORDER BY topics.name;",
  output:'Java | 1 | 0.0\nKotlin | 0 | NULL\nPython | 2 | 17.5',question:'为什么用 COUNT(study.id) 而不是 COUNT(*)？',options:['没有匹配记录时，记录编号为空，不会被计数','COUNT(*) 自动删除空主题','它会创建一条零分钟记录'],answer:0,
  explanation:'左连接会为没有匹配记录的主题保留一行，其中 study.id 为 NULL；COUNT(study.id) 不计空值，而 COUNT(*) 会计入保留下来的行。',vocab:'left join · 左连接；count · 数量；avg · 平均值；null · 空值；group · 分组；topic · 主题',
  notes:['CREATE TABLE（创建表）topics（主题表），name（名称）为 TEXT（文本）PRIMARY KEY（主键）。','CREATE TABLE（创建表）study（学习记录表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），topic（主题）为 TEXT（文本）且 NOT NULL（不允许空值），minutes（分钟数）为 INTEGER（整数）且 NOT NULL。','INSERT INTO（插入到）topics（主题表）的 name（名称）列，VALUES（值）提供 Java、Kotlin 和 Python 三个主题。','INSERT INTO（插入到）study（学习记录表）的 id（编号）、topic（主题）和 minutes（分钟数）列，VALUES（值）提供 Java 和 Python 三条固定记录。','SELECT（查询）topics（主题表）的 name（名称）、COUNT（非空计数）study（学习记录表）的 id（编号）AS（作为）count（数量）、AVG（平均值）study 的 minutes（分钟数）AS average（平均值）。','FROM（从）topics（主题表）读取，LEFT JOIN（左连接）study（学习记录表），ON（连接条件）匹配 topics 的 name（名称）与 study 的 topic（主题）。','GROUP BY（按……分组）topics（主题表）的 name（名称），ORDER BY（按……排序）topics 的 name。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['对照 Java 的一条零分钟记录和 Kotlin 的零条记录，比较数量与平均值。','保留 NULL 可以区分没有记录；示例没有外键约束，真实设计还需考虑数据一致性。']
 }
 ,
 {
  id:'sql-topic-row-number',title:'为每个主题的学习记录编号',subtitle:'窗口函数保留每条记录',
  explain:'GROUP BY 会把多行合并为每组一行；ROW_NUMBER 窗口函数则保留每条记录，并在各自主题内按时间和编号生成顺序。示例使用 SQLite 内存数据库。',
  code:"CREATE TABLE study (id INTEGER PRIMARY KEY, topic TEXT NOT NULL, studied_at TEXT NOT NULL);\nINSERT INTO study (id, topic, studied_at) VALUES (1, 'Python', '2026-01-01'), (2, 'Python', '2026-01-01'), (3, 'Java', '2026-01-02');\nSELECT topic, id,\n       ROW_NUMBER() OVER (PARTITION BY topic ORDER BY studied_at, id) AS position\nFROM study\nORDER BY topic, studied_at, id;",
  output:'Java | 3 | 1\nPython | 1 | 1\nPython | 2 | 2',question:'两条 Python 记录日期相同时，示例用什么确定顺序？',options:['用编号 id 作为第二排序条件','随机排列','删除其中一条'],answer:0,
  explanation:'窗口内先按 studied_at 排序，再按唯一的 id 排序，因此日期相同时顺序仍明确。外层 ORDER BY 控制结果显示顺序。',vocab:'row · 行；number · 编号；over · 窗口；partition · 分区；position · 位置',
  notes:['CREATE TABLE（创建表）study（学习记录表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），topic（主题）和 studied_at（学习日期）为 TEXT（文本）且 NOT NULL（不允许空值）。','INSERT INTO（插入到）study（学习记录表）的 id（编号）、topic（主题）、studied_at（学习日期）列，VALUES（值）提供三条记录；Python 和 Java 是示例主题。','SELECT（查询）topic（主题）和 id（编号）。','ROW_NUMBER（行编号）OVER（窗口定义）中，PARTITION BY（按……分区）topic（主题），ORDER BY（按……排序）studied_at（学习日期）和 id（编号），AS（作为）position（位置）。','FROM（从）study（学习记录表）读取。','ORDER BY（按……排序）topic（主题）、studied_at（学习日期）和 id（编号），决定最终显示顺序。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['对比两条日期相同的 Python 记录，第二排序条件 id 让编号稳定。','窗口内 ORDER BY 决定编号顺序，最外层 ORDER BY 决定结果显示顺序；窗口函数不会把同一主题的行合并。']
 }
 ,
 {
  id:'sql-topic-running-total',title:'累计每个主题的学习时间',subtitle:'用窗口范围逐条计算累计分钟',
  explain:'窗口函数可以保留每条记录，并从各主题的第一条记录累计到当前行。同一天有多条记录时，使用编号确定顺序，避免顺序含糊。',
  code:"CREATE TABLE study (id INTEGER PRIMARY KEY, topic TEXT NOT NULL, studied_at TEXT NOT NULL, minutes INTEGER NOT NULL);\nINSERT INTO study (id, topic, studied_at, minutes) VALUES (1, 'Python', '2026-01-01', 10), (2, 'Python', '2026-01-01', 15), (3, 'Java', '2026-01-02', 5);\nSELECT topic, id, minutes,\n       SUM(minutes) OVER (PARTITION BY topic ORDER BY studied_at, id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\nFROM study\nORDER BY topic, studied_at, id;",
  output:'Java | 3 | 5 | 5\nPython | 1 | 10 | 10\nPython | 2 | 15 | 25',question:'第二条 Python 记录的累计分钟数是多少？',options:['25','15','30'],answer:0,
  explanation:'Python 组先累计编号 1 的 10 分钟，再加编号 2 的 15 分钟，得到 25；Java 是独立分组。',vocab:'sum · 求和；partition · 分区；rows · 行；current · 当前；running total · 累计总数',
  notes:['CREATE TABLE（创建表）study（学习记录表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），topic（主题）、studied_at（学习日期）为 TEXT（文本）且 NOT NULL（不允许空值），minutes（分钟数）为 INTEGER 且 NOT NULL。','INSERT INTO（插入到）study（学习记录表）的 id（编号）、topic（主题）、studied_at（学习日期）和 minutes（分钟数）列，VALUES（值）提供三条记录；Python、Java 是示例主题。','SELECT（查询）topic（主题）、id（编号）和 minutes（分钟数）。','SUM（求和）minutes（分钟数）OVER（窗口定义）中 PARTITION BY（按……分区）topic（主题），ORDER BY（排序）studied_at（学习日期）和 id（编号）；ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW（从分区第一行到当前行）定义累计范围，AS（作为）running_total（累计总数）。','FROM（从）study（学习记录表）读取。','ORDER BY（排序）topic（主题）、studied_at（学习日期）和 id（编号），决定最终显示顺序。'],
  language:'SQL · SQLite',commentPrefix:'--',outputLabel:'查询结果',notice:'示例使用独立 SQLite 内存数据库；阅读页面不会修改真实数据。',guide:['分别追踪每个主题的累计值，注意同日期按 id 顺序逐条累加。','窗口范围明确使用 ROWS，外层 ORDER BY 控制展示；此例分钟数据已假设有效，真实表还需约束输入。']
 }
];
