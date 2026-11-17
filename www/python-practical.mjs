export const pythonPractical = [
  {
    "id": "py-counter",
    "title": "统计出现次数",
    "subtitle": "用 Counter 汇总一组数据",
    "explain": "collections.Counter 可以统计可哈希元素出现的次数。示例使用内存中的固定列表。",
    "code": "from collections import Counter\n\ntasks = [\"阅读\", \"复习\", \"阅读\"]\ncounts = Counter(tasks)\nprint(counts[\"阅读\"])",
    "output": "2",
    "question": "“阅读”出现几次？",
    "options": [
      "2 次",
      "1 次",
      "自动从服务器计算"
    ],
    "answer": 0,
    "explanation": "列表中“阅读”出现两次，Counter 将次数保存在对应键下。",
    "vocab": "counter · 计数器；counts · 次数",
    "notes": [
      "from（从）collections（集合工具标准库）import（导入）Counter（计数器）。",
      "tasks（任务列表）保存三条示例文字。",
      "counts（次数）保存 Counter（计数器）对 tasks（任务列表）的统计。",
      "print（打印/输出）显示 counts（次数）中文字键“阅读”的统计值。"
    ],
    "advanced": true,
    "guide": [
      "collections.Counter 可以统计可哈希元素出现的次数。示例使用内存中的固定列表。",
      "列表中“阅读”出现两次，Counter 将次数保存在对应键下。"
    ]
  },
  {
    "id": "py-pathlib",
    "title": "用路径对象组织路径",
    "subtitle": "只处理路径文字，不访问文件",
    "explain": "pathlib 提供路径对象。PurePosixPath 用正斜杠规则处理路径，本例没有创建、读取或删除任何文件。",
    "code": "from pathlib import PurePosixPath\n\npath = PurePosixPath(\"study/notes.txt\")\nprint(path.name)\nprint(path.suffix)",
    "output": "notes.txt\n.txt",
    "question": "创建 PurePosixPath 对象会写文件吗？",
    "options": [
      "不会，本例只处理路径文字",
      "会自动创建文件",
      "会把文件上传"
    ],
    "answer": 0,
    "explanation": "PurePosixPath 只处理路径字符串，本例没有读写文件。",
    "vocab": "path · 路径；suffix · 后缀",
    "notes": [
      "from（从）pathlib（路径标准库）import（导入）PurePosixPath（按正斜杠规则处理的纯路径）。",
      "path（路径）保存 PurePosixPath（纯路径）对象；study（学习）是目录片段，notes.txt（笔记文本文件）是示例文件名。",
      "print（打印/输出）显示 path（路径）的 name（名称）部分。",
      "print（打印/输出）显示 path（路径）的 suffix（后缀）部分。"
    ],
    "advanced": true,
    "guide": [
      "pathlib 提供路径对象。PurePosixPath 用正斜杠规则处理路径，本例没有创建、读取或删除任何文件。",
      "PurePosixPath 只处理路径字符串，本例没有读写文件。"
    ]
  },
  {
    "id": "py-date",
    "title": "日期：处理固定日期",
    "subtitle": "认识日期对象和标准格式",
    "explain": "datetime.date 表示日历日期。示例使用固定日期，避免把当前时间或时区当成隐含条件。",
    "code": "from datetime import date\n\nday = date(2026, 1, 5)\nprint(day.isoformat())",
    "output": "2026-01-05",
    "question": "isoformat 在这里得到什么？",
    "options": [
      "标准日期文字",
      "当前设备的实时位置",
      "网络地址"
    ],
    "answer": 0,
    "explanation": "date.isoformat 返回如 2026-01-05 的日期文字。",
    "vocab": "date · 日期；isoformat · 标准格式",
    "notes": [
      "from（从）datetime（日期时间标准库）import（导入）date（日期类型）。",
      "day（日期）保存 date（日期类型）创建的固定日期。",
      "print（打印/输出）显示 day（日期）调用 isoformat（标准格式）得到的文字。"
    ],
    "advanced": true,
    "guide": [
      "datetime.date 表示日历日期。示例使用固定日期，避免把当前时间或时区当成隐含条件。",
      "date.isoformat 返回如 2026-01-05 的日期文字。"
    ]
  },
  {
    "id": "py-regex",
    "title": "用正则检查简单格式",
    "subtitle": "判断整段文字是否符合规则",
    "explain": "re.fullmatch 检查整个字符串是否匹配规则。示例只允许英文字母、数字和下划线，不等于完整的安全验证。",
    "code": "import re\n\npattern = r\"[A-Za-z0-9_]+\"\nname = \"api_v1\"\nprint(bool(re.fullmatch(pattern, name)))",
    "output": "True",
    "question": "fullmatch 在这里检查什么？",
    "options": [
      "整段文字是否符合规则",
      "是否已登录服务器",
      "是否已创建数据库"
    ],
    "answer": 0,
    "explanation": "fullmatch 检查整个字符串；此示例不访问服务器或数据库。",
    "vocab": "pattern · 模式；fullmatch · 完整匹配",
    "notes": [
      "import（导入）re（正则表达式标准库模块）。",
      "pattern（模式）保存原始字符串规则 r\"[A-Za-z0-9_]+\"：A-Z 和 a-z 表示英文字母，0-9 表示数字，_ 表示下划线，+ 表示一个或多个。",
      "name（名称）保存 api_v1（示例接口名称；api 表示应用接口、v1 表示版本 1）。",
      "print（打印/输出）显示 bool（转换为真假值）处理 re（正则模块）的 fullmatch（完整匹配）对 pattern（模式）和 name（名称）的结果。"
    ],
    "advanced": true,
    "guide": [
      "re.fullmatch 检查整个字符串是否匹配规则。示例只允许英文字母、数字和下划线，不等于完整的安全验证。",
      "fullmatch 检查整个字符串；此示例不访问服务器或数据库。"
    ]
  },
  {
    "id": "py-json-dump",
    "title": "把数据转换为 JSON",
    "subtitle": "理解对象和文本的边界",
    "explain": "json.dumps 把支持的 Python 对象转换成 JSON 文本。ensure_ascii=False 让示例中的中文直接显示。",
    "code": "import json\n\ndata = {\"name\": \"小明\"}\ntext = json.dumps(data, ensure_ascii=False)\nprint(text)",
    "output": "{\"name\": \"小明\"}",
    "question": "json.dumps 返回什么？",
    "options": [
      "JSON 格式的文字",
      "自动创建的数据库",
      "网络连接"
    ],
    "answer": 0,
    "explanation": "json.dumps 返回 JSON 格式的字符串；本例没有保存文件或发送请求。",
    "vocab": "dumps · 转为字符串；data · 数据",
    "notes": [
      "import（导入）json（JSON 数据格式标准库模块）。",
      "data（数据）字典的 name（名字）键对应“小明”。",
      "text（文本）保存 json（JSON 模块）的 dumps（转为字符串）处理 data（数据）的结果；ensure_ascii（强制 ASCII 转义）为 False（假），允许中文直接显示。",
      "print（打印/输出）显示 text（文本）。"
    ],
    "advanced": true,
    "guide": [
      "json.dumps 把支持的 Python 对象转换成 JSON 文本。ensure_ascii=False 让示例中的中文直接显示。",
      "json.dumps 返回 JSON 格式的字符串；本例没有保存文件或发送请求。"
    ]
  },
  {
    "id": "py-urlencode",
    "title": "给查询参数编码",
    "subtitle": "在不联网的情况下生成查询字符串",
    "explain": "urllib.parse.urlencode 可以把参数转换成适合 URL 查询部分的编码文字。本例只处理字符串，不发送网络请求。",
    "code": "from urllib.parse import urlencode\n\nparams = {\"q\": \"python basics\"}\nquery = urlencode(params)\nprint(query)",
    "output": "q=python+basics",
    "question": "本例是否访问了网站？",
    "options": [
      "没有，只生成字符串",
      "访问了真实网站",
      "上传了手机数据"
    ],
    "answer": 0,
    "explanation": "urlencode 只生成编码后的查询字符串，没有发起请求。",
    "vocab": "urlencode · 网址编码；query · 查询",
    "notes": [
      "from（从）urllib（网址处理标准库）的 parse（解析模块）import（导入）urlencode（网址编码）函数。",
      "params（参数）字典使用 q（查询词）作为键，python basics（Python 基础）作为示例查询文字。",
      "query（查询字符串）保存 urlencode（网址编码）处理 params（参数）的结果。",
      "print（打印/输出）显示 query（查询字符串）。"
    ],
    "advanced": true,
    "guide": [
      "urllib.parse.urlencode 可以把参数转换成适合 URL 查询部分的编码文字。本例只处理字符串，不发送网络请求。",
      "urlencode 只生成编码后的查询字符串，没有发起请求。"
    ]
  },
  {
    "id": "py-task-summary",
    "title": "小项目：统计学习清单",
    "subtitle": "把列表、字典与条件连接起来",
    "explain": "示例用内存列表保存两条学习任务，统计已完成数量；没有登录、服务器或持久化存储。",
    "code": "tasks = [{\"title\": \"阅读\", \"done\": True}, {\"title\": \"复习\", \"done\": False}]\nfinished = sum(1 for task in tasks if task[\"done\"])\nprint(\"总任务：\", len(tasks))\nprint(\"已完成：\", finished)",
    "output": "总任务： 2\n已完成： 1",
    "question": "示例中已完成几项？",
    "options": [
      "1 项",
      "2 项",
      "自动从线上读取"
    ],
    "answer": 0,
    "explanation": "两条任务中只有第一条的 done 为 True，因此已完成数量为 1。",
    "vocab": "tasks · 任务；finished · 已完成",
    "notes": [
      "tasks（任务列表）含两条字典记录；title（标题）表示任务名称，done（是否完成）分别为 True（真）和 False（假）。",
      "finished（已完成数量）通过 sum（求和）统计：for（循环）让 task（当前任务）依次取自 in（在）tasks（任务列表），if（如果）task（当前任务）的 done（是否完成）为真则计 1。",
      "print（打印/输出）显示 len（长度）计算 tasks（任务列表）得到的任务总数。",
      "print（打印/输出）显示 finished（已完成数量）。"
    ],
    "advanced": true,
    "guide": [
      "示例用内存列表保存两条学习任务，统计已完成数量；没有登录、服务器或持久化存储。",
      "两条任务中只有第一条的 done 为 True，因此已完成数量为 1。"
    ]
  },
  {
    "id": "py-file-text",
    "title": "读写文本文件",
    "subtitle": "安全创建并读取一份笔记",
    "explain": "with 和 open 可以读写文本文件。示例自行运行时会在当前工作目录独占创建 notes.txt；若文件已存在会报错，不会覆盖。阅读课程不会操作文件。",
    "code": "with open(\"notes.txt\", \"x\", encoding=\"utf-8\") as file:\n    file.write(\"你好\")\nwith open(\"notes.txt\", \"r\", encoding=\"utf-8\") as file:\n    print(file.read())",
    "output": "你好",
    "question": "如果 notes.txt 已存在，x 模式会怎样？",
    "options": [
      "报错，避免覆盖",
      "自动覆盖原文件",
      "上传到网络"
    ],
    "answer": 0,
    "explanation": "x 是独占创建模式；目标已存在时会报错，避免覆盖。",
    "vocab": "open · 打开；write · 写入；read · 读取",
    "notes": [
      "with（使用并管理）open（打开文件）以 x（独占创建）模式创建 notes.txt（笔记文本文件），encoding（编码）使用 utf-8（UTF-8 编码），as（作为）file（文件对象）引用。",
      "file（文件对象）的 write（写入）方法写入“你好”。",
      "with（使用并管理）open（打开文件）以 r（读取）模式打开 notes.txt（笔记文本文件），encoding（编码）为 utf-8（UTF-8 编码），as（作为）file（文件对象）引用。",
      "print（打印/输出）显示 file（文件对象）调用 read（读取）得到的文字。"
    ],
    "advanced": true,
    "guide": [
      "with 和 open 可以读写文本文件。示例自行运行时会在当前工作目录独占创建 notes.txt；若文件已存在会报错，不会覆盖。阅读课程不会操作文件。",
      "with 在离开代码块时关闭文件；示例只在运行它的目录中操作文件。"
    ],
    "notice": "阅读页面不会读写文件；自行运行时会在当前工作目录创建 notes.txt。"
  },
  {
    "id": "py-csv-read",
    "title": "读取 CSV 表格数据",
    "subtitle": "把表格中的每一行看成字典",
    "explain": "CSV 常用于交换表格数据。csv.DictReader 可以把首行当作列名，逐行读取为字典；这里使用内存文本，不读取真实文件。",
    "code": "import csv\nfrom io import StringIO\n\ntext = StringIO(\"name,score\\n小明,90\\n\")\nrows = csv.DictReader(text)\nfor row in rows:\n    print(row[\"name\"], row[\"score\"])",
    "output": "小明 90",
    "question": "DictReader 如何使用首行？",
    "options": [
      "把首行作为列名",
      "自动上传到服务器",
      "把首行删除并修改文件"
    ],
    "answer": 0,
    "explanation": "默认情况下 DictReader 将首行作为字段名；示例只读取内存文本。",
    "vocab": "csv · 逗号分隔值；row · 行；score · 分数",
    "notes": [
      "import（导入）csv（逗号分隔值处理标准库）。",
      "from（从）io（输入输出标准库）import（导入）StringIO（内存文本流）。",
      "text（文本流）保存 StringIO（内存文本流），内容的 name（名字）和 score（分数）是 CSV（表格数据）的列名。",
      "rows（多行记录）保存 csv（表格处理模块）的 DictReader（按列名读取为字典）处理 text（文本流）的结果。",
      "for（循环）让 row（当前行）依次取自 in（在）rows（多行记录）中的值。",
      "print（打印/输出）显示 row（当前行）中的 name（名字）和 score（分数）字段。"
    ],
    "advanced": true,
    "guide": [
      "CSV 常用于交换表格数据。csv.DictReader 可以把首行当作列名，逐行读取为字典；这里使用内存文本，不读取真实文件。",
      "每行得到字典，字段名来自 CSV 首行。"
    ]
  },
  {
    "id": "py-csv-write",
    "title": "写出 CSV 表格数据",
    "subtitle": "将列名和记录写入内存文本",
    "explain": "csv.writer 可以把一组值写成 CSV 格式。这里写入内存文本流，不创建文件；换行符明确设为换行，方便观察结果。",
    "code": "import csv\nfrom io import StringIO\n\noutput = StringIO(newline=\"\")\nwriter = csv.writer(output, lineterminator=\"\\n\")\nwriter.writerow([\"name\", \"score\"])\nwriter.writerow([\"小明\", 90])\nprint(output.getvalue(), end=\"\")",
    "output": "name,score\n小明,90",
    "question": "示例会直接创建手机文件吗？",
    "options": [
      "不会，只写入内存文本流",
      "会自动上传服务器",
      "会覆盖手机相册"
    ],
    "answer": 0,
    "explanation": "StringIO 在内存中保存文字；本例没有打开真实文件或访问网络。",
    "vocab": "writer · 写入器；row · 行；score · 分数",
    "notes": [
      "import（导入）csv（逗号分隔值处理标准库）。",
      "from（从）io（输入输出标准库）import（导入）StringIO（内存文本流）。",
      "output（输出文本流）保存 StringIO（内存文本流）；newline（换行处理）设为空字符串。",
      "writer（写入器）保存 csv（表格处理模块）的 writer（写入器）对象，目标是 output（输出文本流）；lineterminator（行结束符）设为换行。",
      "writer（写入器）的 writerow（写入一行）写入 name（名字）和 score（分数）两个列名。",
      "writer（写入器）的 writerow（写入一行）写入“小明”和分数 90。",
      "print（打印/输出）显示 output（输出文本流）通过 getvalue（获取全部内容）得到的文字；end（结尾文字）为空，避免额外增加一行。"
    ],
    "advanced": true,
    "guide": [
      "csv.writer 可以把一组值写成 CSV 格式。这里写入内存文本流，不创建文件；换行符明确设为换行，方便观察结果。",
      "先写入列名，再写入数据行；getvalue 取出整个文本。"
    ]
  },
  {
    "id": "py-csv-dictwriter",
    "title": "按字段写出 CSV",
    "subtitle": "把字典中的名字和分数写成表格",
    "explain": "DictWriter 根据指定字段名，把字典写成 CSV 表格。示例使用内存文本流，不创建文件，也不访问网络。",
    "code": "import csv\nfrom io import StringIO\n\noutput = StringIO(newline=\"\")\nwriter = csv.DictWriter(output, fieldnames=[\"name\", \"score\"], lineterminator=\"\\n\")\nwriter.writeheader()\nwriter.writerow({\"name\": \"小明\", \"score\": 90})\nprint(output.getvalue(), end=\"\")",
    "output": "name,score\n小明,90",
    "question": "fieldnames 在这里决定什么？",
    "options": [
      "表格的字段名及写入顺序",
      "自动联网的地址",
      "手机相册路径"
    ],
    "answer": 0,
    "explanation": "fieldnames 指定字段名及写入顺序；示例不访问网络和真实文件。",
    "vocab": "field · 字段；writer · 写入器；score · 分数",
    "notes": [
      "import（导入）csv（逗号分隔值处理标准库）。",
      "from（从）io（输入输出标准库）import（导入）StringIO（内存文本流）。",
      "output（输出文本流）保存 StringIO（内存文本流）；newline（换行处理）为空字符串。",
      "writer（写入器）保存 csv（表格处理模块）的 DictWriter（按字段写字典）对象，目标为 output（输出文本流）；fieldnames（字段名）是 name（名字）与 score（分数），lineterminator（行结束符）设为换行。",
      "writer（写入器）的 writeheader（写入表头）按字段顺序输出列名。",
      "writer（写入器）的 writerow（写入一行）将字典中 name（名字）和 score（分数）的值写入对应列。",
      "print（打印/输出）显示 output（输出文本流）通过 getvalue（获取全部内容）得到的文字；end（结尾文字）为空，避免额外换行。"
    ],
    "advanced": true,
    "guide": [
      "DictWriter 根据指定字段名，把字典写成 CSV 表格。示例使用内存文本流，不创建文件，也不访问网络。",
      "先写表头，再将字典按字段名写成一行。"
    ]
  },
  {
    "id": "py-csv-quoted",
    "title": "CSV 中包含逗号的字段",
    "subtitle": "用标准解析器区分分隔符与字段内容",
    "explain": "CSV 字段内部如果包含逗号，可以用双引号包住整个字段。csv.DictReader 会按 CSV 规则解析，不能简单用逗号拆分文字。示例只读取内存数据。",
    "code": "import csv\nfrom io import StringIO\n\ntext = StringIO('name,note\\n小明,\"阅读,复习\"\\n')\nrows = csv.DictReader(text)\nfor row in rows:\n    print(row[\"note\"])",
    "output": "阅读,复习",
    "question": "为什么字段里的逗号没有被当成列分隔符？",
    "options": [
      "整个字段被双引号包住",
      "程序自动连接了数据库",
      "逗号被删除了"
    ],
    "answer": 0,
    "explanation": "双引号包住整个字段后，其中的逗号属于字段内容；标准 CSV 解析器会处理这一规则。",
    "vocab": "quote · 引号；note · 备注；row · 行",
    "notes": [
      "import（导入）csv（逗号分隔值处理标准库）。",
      "from（从）io（输入输出标准库）import（导入）StringIO（内存文本流）。",
      "text（文本流）保存 StringIO（内存文本流）；name（名字）和 note（备注）是列名，双引号包住包含逗号的备注。",
      "rows（多行记录）保存 csv（表格处理模块）的 DictReader（按列名读取为字典）处理 text（文本流）的结果。",
      "for（循环）让 row（当前行）依次取自 in（在）rows（多行记录）中的值。",
      "print（打印/输出）显示 row（当前行）的 note（备注）字段。"
    ],
    "advanced": true,
    "guide": [
      "CSV 字段内部如果包含逗号，可以用双引号包住整个字段。csv.DictReader 会按 CSV 规则解析，不能简单用逗号拆分文字。示例只读取内存数据。",
      "双引号包住整个字段后，其中的逗号属于字段内容；标准 CSV 解析器会处理这一规则。"
    ]
  },
  {
    "id": "py-csv-missing",
    "title": "处理缺失列的记录",
    "subtitle": "给不完整的行设置默认值",
    "explain": "DictReader 遇到某行的值比表头字段少时，会用 restval 填补缺失的值。字段存在但内容为空时是另一种情况。示例只读取内存文本。",
    "code": "import csv\nfrom io import StringIO\n\ntext = StringIO(\"name,score\\n小明\\n\")\nrows = csv.DictReader(text, restval=\"未填写\")\nfor row in rows:\n    print(row[\"name\"], row[\"score\"])",
    "output": "小明 未填写",
    "question": "这行没有提供 score 时使用什么？",
    "options": [
      "restval 指定的“未填写”",
      "自动从网络获取",
      "一定改写原始数据"
    ],
    "answer": 0,
    "explanation": "此行缺少 score 对应的值，DictReader 使用 restval；空字符串字段不会因此自动变成默认值。",
    "vocab": "restval · 缺失字段默认值；score · 分数",
    "notes": [
      "import（导入）csv（逗号分隔值处理标准库）。",
      "from（从）io（输入输出标准库）import（导入）StringIO（内存文本流）。",
      "text（文本流）保存 StringIO（内存文本流）；name（名字）和 score（分数）是表头，数据行只提供名字。",
      "rows（多行记录）保存 csv（表格处理模块）的 DictReader（按列名读取为字典）处理 text（文本流）的结果；restval（缺失字段默认值）设置为“未填写”。",
      "for（循环）让 row（当前行）依次取自 in（在）rows（多行记录）中的值。",
      "print（打印/输出）显示 row（当前行）的 name（名字）和 score（分数）字段。"
    ],
    "advanced": true,
    "guide": [
      "DictReader 遇到某行的值比表头字段少时，会用 restval 填补缺失的值。字段存在但内容为空时是另一种情况。示例只读取内存文本。",
      "此行缺少 score 对应的值，DictReader 使用 restval；空字符串字段不会因此自动变成默认值。"
    ]
  },
  {
    "id": "py-csv-validate",
    "title": "逐行校验学习时长",
    "subtitle": "先处理无效值，再计算有效数据",
    "explain": "CSV 读取出的字段是文字。示例尝试转换分钟数，跳过无法转换或小于零的记录，再汇总有效值；数据只在内存中。",
    "code": "import csv\nfrom io import StringIO\n\ntext = StringIO(\"name,minutes\\n小明,20\\n小红,abc\\n\")\nvalid = []\nfor row in csv.DictReader(text):\n    try:\n        minutes = int(row[\"minutes\"])\n    except (ValueError, TypeError):\n        print(\"无效：\", row[\"name\"])\n        continue\n    if minutes < 0:\n        print(\"无效：\", row[\"name\"])\n        continue\n    valid.append(minutes)\nprint(\"总分钟数：\", sum(valid))",
    "output": "无效： 小红\n总分钟数： 20",
    "question": "abc 为什么没有参与求和？",
    "options": [
      "它无法转换为整数，被跳过",
      "它自动变成 0",
      "数据已经上传到服务器"
    ],
    "answer": 0,
    "explanation": "int 无法把 abc 转成整数，触发 ValueError；except 分支输出提示后跳过该行。",
    "vocab": "valid · 有效的；minutes · 分钟；continue · 跳过本轮",
    "notes": [
      "import（导入）csv（逗号分隔值处理标准库）。",
      "from（从）io（输入输出标准库）import（导入）StringIO（内存文本流）。",
      "text（文本流）保存 StringIO（内存文本流）；name（名字）与 minutes（分钟数）是列名，abc（示例无效文字）不能转换成整数。",
      "valid（有效值列表）从空列表开始。",
      "for（循环）让 row（当前行）依次取自 in（在）csv（表格模块）的 DictReader（按列名读取为字典）处理 text（文本流）得到的记录。",
      "try（尝试）开始可能出现转换错误的代码。",
      "minutes（分钟数）保存 int（整数转换）处理 row（当前行）中 minutes（分钟数）字段的结果。",
      "except（捕获）ValueError（值错误）与 TypeError（类型错误）。",
      "print（打印/输出）显示无效提示和 row（当前行）的 name（名字）。",
      "continue（跳过本轮）转去处理下一行。",
      "if（如果）minutes（分钟数）小于 0，进入无效分支。",
      "print（打印/输出）显示无效提示和 row（当前行）的 name（名字）。",
      "continue（跳过本轮）转去处理下一行。",
      "valid（有效值列表）的 append（追加）方法加入 minutes（分钟数）。",
      "print（打印/输出）显示 sum（求和）计算 valid（有效值列表）得到的总分钟数。"
    ],
    "advanced": true,
    "guide": [
      "先用 try 和 except 处理不能转换为整数的字段，再判断负数。",
      "只有通过两次检查的分钟数才会加入列表；示例不会读写真实文件。"
    ]
  },
  {
    "id": "py-safe-average",
    "title": "计算平均值并处理空列表",
    "subtitle": "在除法之前检查是否有数据",
    "explain": "平均值可用总和除以数量。空列表的数量是零，不能直接作为除数；示例在没有数据时返回 0，并不代表所有业务都应这样处理。",
    "code": "scores = [80, 90, 100]\naverage = sum(scores) / len(scores) if scores else 0\nprint(\"平均分：\", average)",
    "output": "平均分： 90.0",
    "question": "为什么先检查 scores 是否为空？",
    "options": [
      "避免除以零",
      "自动连接数据库",
      "让数字变成字符串"
    ],
    "answer": 0,
    "explanation": "空列表的 len 为 0，直接除以它会出错；这里选择在空列表时返回 0。",
    "vocab": "scores · 分数列表；average · 平均值；len · 长度",
    "notes": [
      "scores（分数列表）保存三个示例分数。",
      "average（平均值）在 if（如果）scores（分数列表）非空时，用 sum（求和）除以 len（长度）；else（否则）使用 0。",
      "print（打印/输出）显示 average（平均值）。"
    ],
    "advanced": true,
    "guide": [
      "sum 计算总和，len 计算数量。",
      "空列表时先选用示例默认值，避免出现除以零。"
    ]
  }
];
