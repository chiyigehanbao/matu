export const summaryLesson = {
  "id": "api-study-summary",
  "title": "小项目：汇总学习记录",
  "subtitle": "接收数组并计算总学习时间",
  "explain": "接口接收学习记录数组，计算记录条数和学习总分钟数。示例只在请求处理中计算，不会把记录保存到数据库。",
  "code": "from fastapi import FastAPI\nfrom pydantic import BaseModel, Field\n\napp = FastAPI()\n\nclass StudyRecord(BaseModel):\n    minutes: int = Field(ge=0)\n\n@app.post(\"/summary\")\nasync def summarize(records: list[StudyRecord]):\n    total = sum(record.minutes for record in records)\n    return {\"count\": len(records), \"minutes\": total}",
  "request": "POST /summary，JSON：[{\"minutes\":20},{\"minutes\":15}]",
  "output": "{\"count\":2,\"minutes\":35}",
  "question": "示例会把学习记录保存到数据库吗？",
  "options": [
    "不会，只计算并返回汇总",
    "会永久保存",
    "自动同步其他设备"
  ],
  "answer": 0,
  "explanation": "示例没有数据库或同步代码；它只计算当前请求中提供的数据。",
  "vocab": "summary · 汇总；count · 数量；minutes · 分钟数",
  "notes": [
    "from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）。",
    "from（从）pydantic（数据验证库）import（导入）BaseModel（模型基类）和 Field（字段约束）。",
    "app（应用）保存 FastAPI（应用）对象。",
    "class（类）定义 StudyRecord（学习记录）模型，继承 BaseModel（模型基类）。",
    "minutes（分钟数）标注为 int（整数），Field（字段约束）的 ge（大于等于）设为 0。",
    "app（应用）的 post（处理 POST 请求）注册 /summary（汇总）路径。",
    "async（异步）def（定义函数）创建 summarize（汇总）方法；records（记录）是由 StudyRecord（学习记录）组成的 list（列表）。",
    "total（总计）通过 sum（求和）计算：for（循环）让 record（当前记录）依次取自 in（在）records（记录列表），并读取 record（当前记录）的 minutes（分钟数）。",
    "return（返回）字典：count（数量）是 len（长度）计算 records（记录列表）的结果，minutes（分钟数）是 total（总计）。"
  ],
  "guide": [
    "接口接收学习记录数组，计算记录条数和学习总分钟数。示例只在请求处理中计算，不会把记录保存到数据库。",
    "空数组会返回数量 0、分钟数 0；负分钟数不符合字段约束。"
  ],
  "track": "fastapi"
};
export const lookupLesson = {
 id:'api-sqlite-lookup',title:'接口按编号查询课程',subtitle:'参数化查询与未找到时返回 404',
 explain:'接口接收课程编号，通过参数化 SQL 查询演示数据；查不到时返回 404。本例每次请求创建独立的内存数据库，重启或请求结束都不会保留数据。',
 code:'import sqlite3\nfrom contextlib import closing\nfrom fastapi import FastAPI, HTTPException\n\napp = FastAPI()\n\n@app.get("/course/{course_id}")\ndef get_course(course_id: int):\n    with closing(sqlite3.connect(":memory:")) as connection:\n        connection.execute("CREATE TABLE course (id INTEGER, title TEXT)")\n        connection.execute("INSERT INTO course (id, title) VALUES (?, ?)", (1, "Python"))\n        row = connection.execute("SELECT title FROM course WHERE id = ?", (course_id,)).fetchone()\n    if row is None:\n        raise HTTPException(status_code=404, detail="课程不存在")\n    return {"title": row[0]}',
 request:'GET /course/1',output:'{"title":"Python"}',question:'查询编号 2 时会怎样？',options:['返回 404 和课程不存在','自动创建课程','返回编号 1 的课程'],answer:0,
 explanation:'演示数据库只放入编号 1；编号 2 查不到，fetchone 返回 None，接口抛出 404。',vocab:'course · 课程；id · 编号；fetchone · 获取一行',
 notes:['import（导入）sqlite3（SQLite 数据库接口模块）。','from（从）contextlib（上下文管理工具）import（导入）closing（退出时关闭资源）。','from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 HTTPException（HTTP 异常）。','app（应用）保存 FastAPI（应用）对象。','app（应用）的 get（处理 GET 请求）注册 /course/{course_id}（课程路径），course_id（课程编号）是路径参数。','def（定义函数）创建 get_course（获取课程），course_id（课程编号）标注为 int（整数）。','with（上下文管理）使用 closing（退出时关闭）包装 sqlite3（数据库接口）的 connect（连接），memory（内存数据库）不写入磁盘；as（作为）connection（连接）。','connection（连接）的 execute（执行）运行 CREATE TABLE（创建表），建立 course（课程表），含 id（编号）INTEGER（整数）和 title（标题）TEXT（文本）列。','connection（连接）的 execute（执行）运行 INSERT INTO（插入到）course（课程表）的 id（编号）和 title（标题）列，VALUES（值）使用参数，Python 是示例课程。','row（结果行）由 connection（连接）的 execute（执行）运行 SELECT（查询）title（标题）FROM（从）course（课程表）WHERE（条件）id（编号）等于参数后，调用 fetchone（获取一行）得到；course_id（课程编号）作为参数单独传入。','if（如果）row（结果行）is（是）None（无结果），进入未找到分支。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 404，detail（详情）为“课程不存在”。','return（返回）字典，title（标题）来自 row（结果行）的第 0 项。'],
 guide:['本例为便于理解而在每次请求中创建演示数据，实际项目需要设计连接管理、持久存储和并发处理。','使用占位符传递查询值；没有匹配结果时返回 404。'],track:'fastapi'
};
export const paginationLesson = {
 id:'api-pagination',title:'接口分页读取课程',subtitle:'用 offset 和 limit 取出一部分数据',
 explain:'当列表较长时，可以用 offset 表示跳过多少条，用 limit 表示最多返回多少条。本例从固定内存列表切片，没有连接数据库。',
 code:'from fastapi import FastAPI, Query\n\napp = FastAPI()\ncourses = ["变量", "循环", "函数"]\n\n@app.get("/courses")\nasync def list_courses(offset: int = Query(default=0, ge=0), limit: int = Query(default=2, ge=1, le=10)):\n    page = courses[offset:offset + limit]\n    return {"total": len(courses), "items": page}',
 request:'GET /courses?offset=1&limit=2',output:'{"total":3,"items":["循环","函数"]}',question:'offset 超过列表长度时会怎样？',options:['返回空列表，total 仍为 3','自动新增课程','一定报服务器错误'],answer:0,
 explanation:'Python 切片超出列表末尾时返回空列表；total 表示完整示例列表的数量。',vocab:'offset · 起始偏移；limit · 数量上限；total · 总数',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 Query（查询参数定义）。','app（应用）保存 FastAPI（应用）对象。','courses（课程列表）保存三条本地演示数据。','app（应用）的 get（处理 GET 请求）注册 /courses（课程列表）路径。','async（异步）def（定义函数）创建 list_courses（列出课程）；offset（起始偏移）和 limit（数量上限）为 int（整数），Query（查询参数）的 default（默认值）、ge（大于等于）和 le（小于等于）限定范围。','page（当前页）通过 courses（课程列表）的切片从 offset（起始偏移）取到 offset 加 limit（数量上限）之前。','return（返回）字典：total（总数）由 len（长度）计算 courses（课程列表），items（项目）是 page（当前页）。'],
 guide:['offset 为 1 意味着跳过第一条；limit 为 2 表示最多取两条。','偏移超过列表长度会返回空数组；负偏移或不符合范围的 limit 会返回验证错误。'],track:'fastapi'
};
export const trimTitleLesson = {
 id:'api-trim-title',title:'检查提交的课程标题',subtitle:'去除首尾空白后拒绝空标题',
 explain:'请求体模型先确认标题是字符串；接口再去除首尾空白，拒绝只包含空白的标题。示例只返回整理后的文字，不保存数据。',
 code:'from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass LessonInput(BaseModel):\n    title: str\n\n@app.post("/clean-title")\nasync def clean_title(lesson: LessonInput):\n    title = lesson.title.strip()\n    if not title:\n        raise HTTPException(status_code=400, detail="标题不能为空")\n    return {"title": title}',
 request:'POST /clean-title，JSON：{"title":"  阅读  "}',output:'{"title":"阅读"}',question:'标题只有空格时会怎样？',options:['返回 400 和标题不能为空','自动保存空标题','自动访问数据库'],answer:0,
 explanation:'strip 去除首尾空白，纯空白变成空字符串；if not title 成立，因此返回 400。',vocab:'title · 标题；strip · 去除首尾空白；detail · 详情',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 HTTPException（HTTP 异常）。','from（从）pydantic（数据验证库）import（导入）BaseModel（模型基类）。','app（应用）保存 FastAPI（应用）对象。','class（类）定义 LessonInput（课程输入）模型，继承 BaseModel（模型基类）。','title（标题）标注为 str（字符串）。','app（应用）的 post（处理 POST 请求）注册 /clean-title（整理标题）路径。','async（异步）def（定义函数）创建 clean_title（整理标题），lesson（课程输入）使用 LessonInput（课程输入模型）。','title（标题）保存 lesson（课程输入）的 title（标题）调用 strip（去除首尾空白）后的结果。','if（如果）not（不是）title（标题），即标题为空字符串时进入错误分支。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 400，detail（详情）为“标题不能为空”。','return（返回）字典，title（标题字段）对应整理后的 title（标题）。'],
 guide:['请求模型负责字段类型；去除空白后的非空判断是另一步业务检查。','接口没有数据库代码，返回成功不代表已保存。'],track:'fastapi'
};
export const searchCoursesLesson = {
 id:'api-search-courses',title:'搜索课程标题',subtitle:'读取查询参数并筛选本地列表',
 explain:'接口读取查询参数 q，去除首尾空白并忽略大小写，在固定课程列表中查找包含关键词的标题。空关键词会匹配所有标题；本例不连接数据库。',
 code:'from fastapi import FastAPI\n\napp = FastAPI()\ncourses = ["Python 基础", "Java 入门"]\n\n@app.get("/search")\nasync def search_courses(q: str = ""):\n    keyword = q.strip().casefold()\n    items = [course for course in courses if keyword in course.casefold()]\n    return {"items": items}',
 request:'GET /search?q=python',output:'{"items":["Python 基础"]}',question:'没有匹配标题时返回什么？',options:['items 为空数组','自动添加课程','一定返回 500'],answer:0,
 explanation:'列表推导式没有找到符合条件的标题时生成空列表；响应仍是正常结果。',vocab:'search · 搜索；keyword · 关键词；items · 项目',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）。','app（应用）保存 FastAPI（应用）对象。','courses（课程列表）保存两条固定示例，Python 和 Java 是编程语言名称。','app（应用）的 get（处理 GET 请求）注册 /search（搜索）路径。','async（异步）def（定义函数）创建 search_courses（搜索课程），q（查询文字）为 str（字符串），默认空字符串。','keyword（关键词）保存 q（查询文字）调用 strip（去除首尾空白）及 casefold（用于忽略大小写的转换）后的结果。','items（结果列表）通过列表推导式生成：for（循环）使 course（当前课程）依次取自 in（来自）courses（课程列表），if（如果）keyword（关键词）in（包含于）course 的 casefold（忽略大小写转换）结果则保留。','return（返回）字典，items（项目）字段对应 items（结果列表）。'],
 guide:['空字符串包含于任何字符串，因此空关键词会返回全部示例课程。','这是内存列表演示；大量数据的搜索需要针对存储和索引另行设计。'],track:'fastapi'
};
export const filterTasksLesson = {
 id:'api-filter-tasks',title:'按完成状态筛选任务',subtitle:'使用布尔查询参数过滤列表',
 explain:'接口接收 done 查询参数，筛选固定任务列表。FastAPI 会将可识别的布尔文字转换为 bool；示例只读取内存数据，没有数据库。',
 code:'from fastapi import FastAPI\n\napp = FastAPI()\ntasks = [{"title": "阅读", "done": True}, {"title": "复习", "done": False}]\n\n@app.get("/tasks")\nasync def list_tasks(done: bool = False):\n    items = [task for task in tasks if task["done"] == done]\n    return {"items": items}',
 request:'GET /tasks?done=false',output:'{"items":[{"title":"复习","done":false}]}',question:'没有提供 done 时默认筛选什么？',options:['未完成任务','全部任务','自动从数据库读取'],answer:0,
 explanation:'默认值为 False，因此未提供参数时筛选 done 为 False 的任务。',vocab:'task · 任务；done · 完成状态；bool · 布尔值',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）。','app（应用）保存 FastAPI（应用）对象。','tasks（任务列表）包含 title（标题）和 done（完成状态），True（真）表示完成，False（假）表示未完成。','app（应用）的 get（处理 GET 请求）注册 /tasks（任务列表）路径。','async（异步）def（定义函数）创建 list_tasks（列出任务），done（完成状态）为 bool（布尔值），默认 False（假）。','items（结果列表）通过列表推导式生成：for（循环）使 task（当前任务）取自 in（来自）tasks（任务列表），if（如果）task 的 done（完成状态）等于 done（查询参数）则保留。','return（返回）字典，items（项目字段）对应 items（结果列表）。'],
 guide:['请求参数是文字，FastAPI 会根据 bool 类型解析；无法识别的值会产生验证错误。','本例没有持久化，重启应用后仍使用固定演示数据。'],track:'fastapi'
};
export const taskStatusLesson = {
 id:'api-task-status',title:'更新任务的完成状态',subtitle:'使用 PATCH 修改一个字段',
 explain:'接口接收任务编号与新的完成状态，在内存字典中更新对应任务。示例没有数据库，进程重启后修改会丢失。',
 code:'from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\ntasks = {1: {"title": "阅读", "done": False}}\n\nclass StatusInput(BaseModel):\n    done: bool\n\n@app.patch("/tasks/{task_id}")\nasync def update_status(task_id: int, status: StatusInput):\n    if task_id not in tasks:\n        raise HTTPException(status_code=404, detail="任务不存在")\n    tasks[task_id]["done"] = status.done\n    return tasks[task_id]',
 request:'PATCH /tasks/1，JSON：{"done":true}',output:'{"title":"阅读","done":true}',question:'任务编号不存在时返回什么？',options:['404 和任务不存在','自动创建任务','自动同步到其他设备'],answer:0,
 explanation:'接口先检查编号是否在 tasks 中，不存在时抛出 404；示例没有创建或同步任务。',vocab:'patch · 局部更新；status · 状态；done · 完成状态',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 HTTPException（HTTP 异常）。','from（从）pydantic（数据验证库）import（导入）BaseModel（模型基类）。','app（应用）保存 FastAPI（应用）对象。','tasks（任务字典）以 1 为编号，保存 title（标题）与 done（完成状态）；False（假）表示未完成。','class（类）定义 StatusInput（状态输入）模型，继承 BaseModel（模型基类）。','done（完成状态）标注为 bool（布尔值）。','app（应用）的 patch（处理 PATCH 请求）注册 /tasks/{task_id}（任务路径），task_id（任务编号）是路径参数。','async（异步）def（定义函数）创建 update_status（更新状态），task_id（任务编号）为 int（整数），status（状态输入）使用 StatusInput（状态输入模型）。','if（如果）task_id（任务编号）not（不）in（在）tasks（任务字典）中，进入未找到分支。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 404，detail（详情）为“任务不存在”。','tasks（任务字典）中 task_id（任务编号）对应任务的 done（完成状态）更新为 status（状态输入）的 done（完成状态）。','return（返回）tasks（任务字典）中 task_id（任务编号）对应的任务。'],
 guide:['PATCH 请求只携带示例中的 done 字段，不会改动标题。','数据仅在当前进程内；真实项目需要持久化、权限控制与并发处理。'],track:'fastapi'
};
export const filterPageLesson = {
 id:'api-filter-page',title:'筛选后分页读取任务',subtitle:'先筛选状态，再计算总数和切片',
 explain:'接口先根据完成状态筛选固定任务，再计算匹配总数并分页。示例使用内存数据，不连接数据库。',
 code:'from fastapi import FastAPI, Query\n\napp = FastAPI()\ntasks = [{"title": "阅读", "done": False}, {"title": "复习", "done": True}, {"title": "练习", "done": False}]\n\n@app.get("/tasks")\nasync def list_tasks(done: bool = False, offset: int = Query(default=0, ge=0), limit: int = Query(default=2, ge=1, le=10)):\n    matching = [task for task in tasks if task["done"] == done]\n    return {"total": len(matching), "items": matching[offset:offset + limit]}',
 request:'GET /tasks?done=false&offset=1&limit=1',output:'{"total":2,"items":[{"title":"练习","done":false}]}',question:'total 表示什么？',options:['筛选后、分页前的匹配总数','当前页条数','数据库中所有用户数'],answer:0,
 explanation:'matching 包含两条未完成任务，total 是它的长度；分页后当前页只有一条。',vocab:'matching · 匹配项；offset · 偏移；limit · 上限；total · 总数',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 Query（查询参数定义）。','app（应用）保存 FastAPI（应用）对象。','tasks（任务列表）包含 title（标题）和 done（完成状态），False（假）表示未完成，True（真）表示完成。','app（应用）的 get（处理 GET 请求）注册 /tasks（任务列表）路径。','async（异步）def（定义函数）创建 list_tasks（列出任务），done（完成状态）为 bool（布尔值），False（假）为默认值；offset（偏移）和 limit（数量上限）为 int（整数），Query（查询参数）的 default（默认值）、ge（大于等于）和 le（小于等于）设置范围。','matching（匹配列表）通过列表推导式生成：for（循环）让 task（当前任务）取自 in（来自）tasks（任务列表），if（如果）task 的 done（完成状态）等于 done（查询参数）则保留。','return（返回）字典：total（总数）是 len（长度）计算 matching（匹配列表）的结果，items（项目）是 matching 从 offset（偏移）到 offset 加 limit（数量上限）之前的切片。'],
 guide:['先筛选再分页，否则当前页可能不足以反映所有匹配结果。','本例使用固定顺序的内存列表，实际数据库分页需要明确排序与并发变化的处理。'],track:'fastapi'
};
export const sqliteUpdateLesson = {
 id:'api-sqlite-update',title:'用数据库更新任务状态',subtitle:'参数化更新并检查影响的行数',
 explain:'示例每次请求创建独立内存数据库，写入一条演示任务，再按编号更新状态。请求结束后数据消失，这只是演示数据库操作，不是持久化方案。',
 code:'import sqlite3\nfrom contextlib import closing\nfrom fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass StatusInput(BaseModel):\n    done: bool\n\n@app.patch("/tasks/{task_id}")\ndef update_task(task_id: int, status: StatusInput):\n    with closing(sqlite3.connect(":memory:")) as connection:\n        connection.execute("CREATE TABLE tasks (id INTEGER PRIMARY KEY, done INTEGER NOT NULL)")\n        connection.execute("INSERT INTO tasks (id, done) VALUES (?, ?)", (1, 0))\n        cursor = connection.execute("UPDATE tasks SET done = ? WHERE id = ?", (int(status.done), task_id))\n        if cursor.rowcount == 0:\n            raise HTTPException(status_code=404, detail="任务不存在")\n        connection.commit()\n        return {"id": task_id, "done": status.done}',
 request:'PATCH /tasks/1，JSON：{"done":true}',output:'{"id":1,"done":true}',question:'编号不存在时 rowcount 是多少？',options:['0','1','自动创建任务'],answer:0,
 explanation:'UPDATE 没有匹配记录时影响行数为 0，示例返回 404。',vocab:'update · 更新；rowcount · 影响行数；commit · 提交',
 notes:['import（导入）sqlite3（SQLite 数据库接口模块）。','from（从）contextlib（上下文管理工具）import（导入）closing（退出时关闭资源）。','from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 HTTPException（HTTP 异常）。','from（从）pydantic（数据验证库）import（导入）BaseModel（模型基类）。','app（应用）保存 FastAPI（应用）对象。','class（类）定义 StatusInput（状态输入）模型，继承 BaseModel（模型基类）。','done（完成状态）标注为 bool（布尔值）。','app（应用）的 patch（处理 PATCH 请求）注册 /tasks/{task_id}（任务路径），task_id（任务编号）是路径参数。','def（定义函数）创建 update_task（更新任务），task_id（任务编号）为 int（整数），status（状态输入）使用 StatusInput（状态输入模型）。','with（上下文管理）使用 closing（退出时关闭）包装 sqlite3（数据库模块）的 connect（连接），memory（内存数据库）表示不写磁盘；as（作为）connection（连接）。','connection（连接）的 execute（执行）运行 CREATE TABLE（创建表），建立 tasks（任务表），id（编号）为 INTEGER（整数）PRIMARY KEY（主键），done（完成状态）为 INTEGER（整数）且 NOT NULL（不允许空值）。','connection（连接）的 execute（执行）运行 INSERT INTO（插入到）tasks（任务表）的 id（编号）和 done（完成状态）列，VALUES（值）通过参数传入。','cursor（游标）保存 connection（连接）的 execute（执行）运行 UPDATE（更新）tasks（任务表），SET（设置）done（完成状态），WHERE（条件）id（编号）等于参数的结果；int（转整数）将 status（状态输入）的 done（完成状态）转为整数，task_id（任务编号）是另一个参数。','if（如果）cursor（游标）的 rowcount（影响行数）等于 0，进入未找到分支。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 404，detail（详情）为“任务不存在”。','connection（连接）的 commit（提交）提交事务。','return（返回）字典，id（编号）对应 task_id（任务编号），done（完成状态）对应 status（状态输入）的 done（完成状态）。'],
 guide:['UPDATE 的值使用占位符与参数传递，避免将输入拼接进 SQL。','这里每次请求都重新创建数据；真实应用需要持久存储、事务管理、权限与并发设计。'],track:'fastapi'
};
export const deleteTaskLesson = {
 id:'api-delete-task',title:'删除任务并检查结果',subtitle:'用 DELETE 和 GET 观察数据变化',
 explain:'示例在进程内存中保存两条任务，按编号删除后再查询。进程重启会恢复初始数据；它没有连接数据库，也没有身份验证。',
 code:'from fastapi import FastAPI, HTTPException\n\napp = FastAPI()\ntasks = {1: {"title": "阅读"}, 2: {"title": "复习"}}\n\n@app.delete("/tasks/{task_id}")\ndef delete_task(task_id: int):\n    if task_id not in tasks:\n        raise HTTPException(status_code=404, detail="任务不存在")\n    del tasks[task_id]\n    return {"message": "已删除"}\n\n@app.get("/tasks/{task_id}")\ndef read_task(task_id: int):\n    if task_id not in tasks:\n        raise HTTPException(status_code=404, detail="任务不存在")\n    return tasks[task_id]',
 request:'DELETE /tasks/1',output:'{"message":"已删除"}',question:'删除编号 1 后再查询它，会发生什么？',options:['返回 404，提示任务不存在','自动恢复已删除的任务','同步删除所有设备上的任务'],answer:0,
 explanation:'del 从当前进程中的字典移除对应编号；随后 GET 检查不到它，返回 404。编号 2 的任务不受影响。',vocab:'delete · 删除；task · 任务；message · 消息；detail · 详情',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 HTTPException（HTTP 异常）。','app（应用）保存 FastAPI（应用）对象。','tasks（任务字典）按数字编号保存两条任务，title（标题）是每条任务的字段。','app（应用）的 delete（处理 DELETE 请求）注册 /tasks/{task_id}（任务路径），task_id（任务编号）是路径参数。','def（定义函数）创建 delete_task（删除任务），task_id（任务编号）标注为 int（整数）。','if（如果）task_id（任务编号）not（不）in（在）tasks（任务字典）中，进入未找到分支。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 404，detail（详情）为“任务不存在”。','del（删除）移除 tasks（任务字典）中 task_id（任务编号）对应的项目。','return（返回）字典，其中 message（消息）为“已删除”。','app（应用）的 get（处理 GET 请求）注册 /tasks/{task_id}（任务路径），task_id（任务编号）是路径参数。','def（定义函数）创建 read_task（读取任务），task_id（任务编号）标注为 int（整数）。','if（如果）task_id（任务编号）not（不）in（在）tasks（任务字典）中，进入未找到分支。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 404，detail（详情）为“任务不存在”。','return（返回）tasks（任务字典）中 task_id（任务编号）对应的项目。'],
 guide:['先确认编号存在，再删除；随后读取同一编号会得到 404，其他编号不受影响。','这只是内存演示；实际应用需要持久化、权限检查及并发处理。'],track:'fastapi'
};
export const createConflictLesson = {
 id:'api-create-conflict',title:'创建任务时处理编号冲突',subtitle:'区分创建成功和已有编号',
 explain:'接口使用路径中的编号和请求体中的标题创建任务。如果编号已存在，返回 409；示例只在进程内存保存，不保证并发安全。',
 code:'from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\ntasks = {1: "阅读"}\n\nclass TaskInput(BaseModel):\n    title: str\n\n@app.post("/tasks/{task_id}", status_code=201)\nasync def create_task(task_id: int, task: TaskInput):\n    if task_id in tasks:\n        raise HTTPException(status_code=409, detail="编号已存在")\n    tasks[task_id] = task.title\n    return {"id": task_id, "title": task.title}',
 request:'POST /tasks/2，JSON：{"title":"复习"}',output:'HTTP 201 · {"id":2,"title":"复习"}',question:'再次使用编号 2 创建任务时会怎样？',options:['返回 409，提示编号已存在','覆盖已有任务','自动同步到数据库'],answer:0,
 explanation:'第一次创建后编号 2 已在内存字典中；再次使用该编号会触发 409，不会覆盖原值。',vocab:'create · 创建；conflict · 冲突；status code · 状态码',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 HTTPException（HTTP 异常）。','from（从）pydantic（数据验证库）import（导入）BaseModel（模型基类）。','app（应用）保存 FastAPI（应用）对象。','tasks（任务字典）以编号 1 保存“阅读”，仅存在当前进程内存中。','class（类）定义 TaskInput（任务输入）模型，继承 BaseModel（模型基类）。','title（标题）字段标注为 str（字符串）。','app（应用）的 post（处理 POST 请求）注册 /tasks/{task_id}（任务路径），task_id（任务编号）是路径参数；status_code（状态码）201 表示创建成功。','async（异步）def（定义函数）创建 create_task（创建任务），task_id（任务编号）为 int（整数），task（任务输入）使用 TaskInput（任务输入模型）。','if（如果）task_id（任务编号）in（在）tasks（任务字典）中，进入冲突分支。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 409，detail（详情）为“编号已存在”。','tasks（任务字典）中 task_id（任务编号）对应 task（任务输入）的 title（标题）。','return（返回）字典，id（编号）对应 task_id（任务编号），title（标题）对应 task（任务输入）的 title（标题）。'],
 guide:['201 表示本例成功创建；409 表示请求与现有编号发生冲突。','这是单进程内存演示；实际系统需通过数据库约束和事务等机制处理并发。'],track:'fastapi'
};
export const strictMinutesLesson = {
 id:'api-strict-minutes',title:'严格校验学习分钟数',subtitle:'拒绝布尔值、数字字符串和负数',
 explain:'Pydantic 字段开启严格整数校验并限制最小值为 0。示例仅返回接收到的分钟数，不保存数据；需要 Pydantic 2 的运行环境。',
 code:'from fastapi import FastAPI\nfrom pydantic import BaseModel, Field\n\napp = FastAPI()\n\nclass StudyInput(BaseModel):\n    minutes: int = Field(strict=True, ge=0)\n\n@app.post("/minutes")\nasync def read_minutes(record: StudyInput):\n    return {"minutes": record.minutes}',
 request:'POST /minutes，JSON：{"minutes":0}',output:'{"minutes":0}',question:'minutes 为 true 时会怎样？',options:['校验失败，返回 422','当作 1 分钟保存','自动转换为字符串'],answer:0,
 explanation:'strict=True 要求整数输入，布尔值和数字字符串不通过；ge=0 另外限制不能为负数。',vocab:'strict · 严格；minutes · 分钟数；field · 字段；ge · 大于等于',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）。','from（从）pydantic（数据验证库）import（导入）BaseModel（模型基类）和 Field（字段约束）。','app（应用）保存 FastAPI（应用）对象。','class（类）定义 StudyInput（学习输入）模型，继承 BaseModel（模型基类）。','minutes（分钟数）标注为 int（整数），Field（字段约束）设置 strict（严格）为 True（真），ge（大于等于）为 0。','app（应用）的 post（处理 POST 请求）注册 /minutes（分钟数）路径。','async（异步）def（定义函数）创建 read_minutes（读取分钟数），record（记录）使用 StudyInput（学习输入模型）。','return（返回）字典，minutes（分钟数字段）对应 record（记录）的 minutes（分钟数）。'],
 guide:['0 是有效输入；负数不满足最小值约束。','strict 在这里用于 JSON 请求体中的整数；实际数据仍需按业务增加范围和权限检查。'],track:'fastapi'
};
export const sqliteConflictLesson = {
 id:'api-sqlite-conflict',title:'数据库标题冲突时返回 409',subtitle:'结合唯一约束和影响行数',
 explain:'示例每次请求创建独立内存数据库并插入固定标题，再尝试插入请求标题。去除首尾空白后拒绝空标题，唯一约束冲突时返回 409；请求结束后数据消失，不是持久化方案。',
 code:'import sqlite3\nfrom contextlib import closing\nfrom fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass TaskInput(BaseModel):\n    title: str\n\n@app.post("/tasks", status_code=201)\ndef create_task(task: TaskInput):\n    title = task.title.strip()\n    if not title:\n        raise HTTPException(status_code=422, detail="标题不能为空")\n    with closing(sqlite3.connect(":memory:")) as connection:\n        connection.execute("CREATE TABLE tasks (title TEXT NOT NULL UNIQUE)")\n        connection.execute("INSERT INTO tasks (title) VALUES (?)", ("阅读",))\n        cursor = connection.execute("INSERT INTO tasks (title) VALUES (?) ON CONFLICT(title) DO NOTHING", (title,))\n        if cursor.rowcount == 0:\n            raise HTTPException(status_code=409, detail="标题已存在")\n        connection.commit()\n        return {"title": title}',
 request:'POST /tasks，JSON：{"title":"复习"}',output:'HTTP 201 · {"title":"复习"}',question:'请求标题为“阅读”时会怎样？',options:['返回 409，提示标题已存在','覆盖原标题','自动同步云端'],answer:0,
 explanation:'固定示例数据已包含“阅读”，唯一约束使第二次插入被跳过，rowcount 为 0，接口返回 409。',vocab:'unique · 唯一；conflict · 冲突；rowcount · 影响行数',
 notes:['import（导入）sqlite3（SQLite 数据库接口模块）。','from（从）contextlib（上下文管理工具）import（导入）closing（退出时关闭资源）。','from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）和 HTTPException（HTTP 异常）。','from（从）pydantic（数据验证库）import（导入）BaseModel（模型基类）。','app（应用）保存 FastAPI（应用）对象。','class（类）定义 TaskInput（任务输入）模型，继承 BaseModel（模型基类）。','title（标题）字段标注为 str（字符串）。','app（应用）的 post（处理 POST 请求）注册 /tasks（任务路径），status_code（状态码）201 表示创建成功。','def（定义函数）创建 create_task（创建任务），task（任务输入）使用 TaskInput（任务输入模型）。','title（标题）取 task（任务输入）的 title（标题）经 strip（去除首尾空白）后的结果。','if（如果）not（不）满足 title（标题）非空。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 422，detail（详情）提示标题不能为空。','with（上下文管理）使用 closing（退出时关闭）包装 sqlite3（数据库模块）的 connect（连接），memory（内存数据库）表示不写磁盘；as（作为）connection（连接）。','connection（连接）的 execute（执行）运行 CREATE TABLE（创建表），建立 tasks（任务表），title（标题）为 TEXT（文本）、NOT NULL（不允许空值）且 UNIQUE（唯一）。','connection（连接）的 execute（执行）运行 INSERT INTO（插入到）tasks（任务表）的 title（标题）列，VALUES（值）通过参数传入固定数据。','cursor（结果游标）保存 connection（连接）的 execute（执行）运行 INSERT INTO（插入到）tasks（任务表）的 title（标题），VALUES（值）使用 title（整理后的标题）参数；ON CONFLICT（发生冲突时）指定 title，DO NOTHING（不做任何操作）跳过重复项。','if（如果）cursor（结果游标）的 rowcount（影响行数）等于 0，表示插入被跳过。','raise（抛出）HTTPException（HTTP 异常），status_code（状态码）为 409，detail（详情）为“标题已存在”。','connection（连接）的 commit（提交）提交事务。','return（返回）字典，title（标题）来自整理后的 title（标题）。'],
 guide:['先去除标题首尾空白并拒绝空标题，再由数据库唯一约束检查冲突；rowcount 用于区分插入和跳过。','每次请求都会重新创建内存数据库；真实应用需要持久存储、事务和权限设计。'],track:'fastapi'
};
export const topicSummaryLesson = {
 id:'api-topic-summary',title:'接口按主题汇总学习时间',subtitle:'接收记录数组并返回各主题总数',
 explain:'接口接收学习记录列表，校验分钟数为非负整数，再按主题累加。空列表返回空映射；示例只计算响应，不保存数据。',
 code:'from fastapi import FastAPI\nfrom pydantic import BaseModel, Field\n\napp = FastAPI()\n\nclass StudyRecord(BaseModel):\n    topic: str\n    minutes: int = Field(strict=True, ge=0)\n\n@app.post("/topic-summary")\nasync def summarize(records: list[StudyRecord]):\n    totals = {}\n    for record in records:\n        totals[record.topic] = totals.get(record.topic, 0) + record.minutes\n    return {"totals": totals}',
 request:'POST /topic-summary，JSON：[{"topic":"Python","minutes":20},{"topic":"Java","minutes":10},{"topic":"Python","minutes":15}]',output:'{"totals":{"Python":35,"Java":10}}',question:'没有任何记录时 totals 是什么？',options:['空对象','自动生成一条记录','从数据库读取'],answer:0,
 explanation:'空列表不会进入循环，totals 保持为空字典，并作为空对象返回。',vocab:'topic · 主题；summary · 汇总；totals · 总计；minutes · 分钟数',
 notes:['from（从）fastapi（FastAPI 框架）import（导入）FastAPI（应用类）。','from（从）pydantic（数据验证库）import（导入）BaseModel（模型基类）和 Field（字段约束）。','app（应用）保存 FastAPI（应用）对象。','class（类）定义 StudyRecord（学习记录）模型，继承 BaseModel（模型基类）。','topic（主题）字段标注为 str（字符串）。','minutes（分钟数）标注为 int（整数），Field（字段约束）设置 strict（严格）为 True（真），ge（大于等于）为 0。','app（应用）的 post（处理 POST 请求）注册 /topic-summary（主题汇总）路径。','async（异步）def（定义函数）创建 summarize（汇总），records（记录列表）标注为 list（列表），元素为 StudyRecord（学习记录）。','totals（总计字典）初始为空。','for（循环）使 record（当前记录）依次取自 in（来自）records（记录列表）。','totals（总计字典）以 record（当前记录）的 topic（主题）为键，通过 get（获取或默认值）读取已有总数或 0，再加上 record 的 minutes（分钟数）。','return（返回）字典，totals（总计字段）对应 totals（总计字典）。'],
 guide:['相同主题的分钟数累加到同一个键；空记录列表返回空映射。','严格字段校验依赖 Pydantic 2；示例不持久化，实际接口应考虑输入大小、主题规范与权限。'],track:'fastapi'
};
