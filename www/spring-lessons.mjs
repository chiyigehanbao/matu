export const springLessons = [
  {
    "id": "spring-first",
    "title": "第一个 Spring Boot 接口",
    "subtitle": "认识控制器与 GET 路径",
    "explain": "Spring Web 控制器可以把 HTTP 路径映射到 Java 方法。下面是控制器文件片段，需放进已配置 Spring Boot Web 的工程中。",
    "code": "import java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    @GetMapping(\"/hello\")\n    public Map<String, String> hello() {\n        return Map.of(\"message\", \"你好\");\n    }\n}",
    "request": "GET /hello",
    "output": "{\"message\":\"你好\"}",
    "question": "@GetMapping 在这里做什么？",
    "options": [
      "将 GET 路径映射到方法",
      "自动创建数据库",
      "上传应用"
    ],
    "answer": 0,
    "explanation": "@GetMapping(\"/hello\") 将 GET /hello 映射到 hello 方法。",
    "vocab": "controller · 控制器；mapping · 映射",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（键值映射接口）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 GetMapping（GET 路径映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RestController（REST 控制器标记）。",
      "@RestController（REST 控制器）标记该类由 Spring 处理请求并将返回值写入响应体。",
      "public（公开）class（类）定义 LessonController（课程控制器）。",
      "@GetMapping（GET 路径映射）将 /hello（问候路径）对应到下面的方法。",
      "public（公开）Map（映射）使用 String（字符串）作为键和值的类型，hello（问候）是方法名。",
      "return（返回）Map（映射）的 of（创建不可变映射）结果；message（消息）是响应字段。",
      "右花括号结束 hello（问候）方法。",
      "右花括号结束 LessonController（课程控制器）类。"
    ],
    "language": "Java · Spring Boot",
    "commentPrefix": "//",
    "outputLabel": "示例响应",
    "notice": "这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。",
    "guide": [
      "Spring Web 控制器可以把 HTTP 路径映射到 Java 方法。下面是控制器文件片段，需放进已配置 Spring Boot Web 的工程中。",
      "@GetMapping(\"/hello\") 将 GET /hello 映射到 hello 方法。"
    ]
  },
  {
    "id": "spring-path",
    "title": "路径参数：读取课程编号",
    "subtitle": "把 URL 中的编号交给方法",
    "explain": "@PathVariable 将路径中的值绑定到方法参数。本例只回显编号，没有查询数据库。",
    "code": "import java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    @GetMapping(\"/lessons/{id}\")\n    public Map<String, Integer> read(@PathVariable(\"id\") int id) {\n        return Map.of(\"id\", id);\n    }\n}",
    "request": "GET /lessons/7",
    "output": "{\"id\":7}",
    "question": "路径中的 7 会传给哪个参数？",
    "options": [
      "id",
      "message",
      "数据库密码"
    ],
    "answer": 0,
    "explanation": "路径模板中的 {id} 由 @PathVariable 绑定到 int id 参数。",
    "vocab": "path · 路径；variable · 变量；id · 编号",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（键值映射接口）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 GetMapping（GET 路径映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 PathVariable（路径参数注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RestController（REST 控制器标记）。",
      "@RestController（REST 控制器）标记该类由 Spring 处理请求并将返回值写入响应体。",
      "public（公开）class（类）定义 LessonController（课程控制器）。",
      "@GetMapping（GET 路径映射）注册 /lessons/{id}，lessons（课程）是路径片段，id（编号）是路径参数。",
      "public（公开）Map（映射）以 String（字符串）为键、Integer（整数对象类型）为值；read（读取）方法使用 @PathVariable（路径参数注解）将 id（编号）绑定到 int（整数）参数 id。",
      "return（返回）Map（映射）的 of（创建不可变映射）结果；文字键 id（编号）对应变量 id（编号）。",
      "右花括号结束 read（读取）方法。",
      "右花括号结束 LessonController（课程控制器）类。"
    ],
    "language": "Java · Spring Boot",
    "commentPrefix": "//",
    "outputLabel": "示例响应",
    "notice": "这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。",
    "guide": [
      "@PathVariable 将路径中的值绑定到方法参数。本例只回显编号，没有查询数据库。",
      "路径模板中的 {id} 由 @PathVariable 绑定到 int id 参数。"
    ]
  },
  {
    "id": "spring-query",
    "title": "查询参数与默认值",
    "subtitle": "读取问号后面的条件",
    "explain": "@RequestParam 可以把 URL 查询参数绑定到方法参数，并设置缺省值。示例仅拼接问候文字。",
    "code": "import java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    @GetMapping(\"/greet\")\n    public Map<String, String> greet(@RequestParam(name = \"name\", defaultValue = \"朋友\") String name) {\n        return Map.of(\"message\", \"你好，\" + name);\n    }\n}",
    "request": "GET /greet?name=小明",
    "output": "{\"message\":\"你好，小明\"}",
    "question": "没有提供 name 时使用什么？",
    "options": [
      "朋友",
      "随机账号",
      "通讯录中的名字"
    ],
    "answer": 0,
    "explanation": "defaultValue 指定省略该查询参数或参数值为空时使用“朋友”；示例不读取通讯录。",
    "vocab": "request · 请求；param · 参数；default · 默认",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（键值映射接口）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 GetMapping（GET 路径映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RequestParam（请求参数注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RestController（REST 控制器标记）。",
      "@RestController（REST 控制器）标记该类由 Spring 处理请求并将返回值写入响应体。",
      "public（公开）class（类）定义 LessonController（课程控制器）。",
      "@GetMapping（GET 路径映射）注册 /greet（问候）路径。",
      "public（公开）Map（映射）使用 String（字符串）作为键和值；greet（问候）方法通过 @RequestParam（请求参数注解）的 name（参数名）读取 name（名字），defaultValue（默认值）为“朋友”，String（字符串）参数名也是 name（名字）。",
      "return（返回）Map（映射）的 of（创建不可变映射）结果；message（消息）字段包含问候文字与 name（名字）。",
      "右花括号结束 greet（问候）方法。",
      "右花括号结束 LessonController（课程控制器）类。"
    ],
    "language": "Java · Spring Boot",
    "commentPrefix": "//",
    "outputLabel": "示例响应",
    "notice": "这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。",
    "guide": [
      "@RequestParam 可以把 URL 查询参数绑定到方法参数，并设置缺省值。示例仅拼接问候文字。",
      "defaultValue 指定省略该查询参数或参数值为空时使用“朋友”；示例不读取通讯录。"
    ]
  },
  {
    "id": "spring-body",
    "title": "请求体：接收一条课程",
    "subtitle": "用对象接收 JSON 数据",
    "explain": "@RequestBody 可以把请求体转换成 Java 对象。这里使用 record 表示简单数据；本例只回显，没有数据库操作。",
    "code": "import java.util.Map;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    public record LessonRequest(String title) {}\n    @PostMapping(\"/lessons\")\n    public Map<String, String> create(@RequestBody LessonRequest lesson) {\n        return Map.of(\"title\", lesson.title());\n    }\n}",
    "request": "POST /lessons，JSON：{\"title\":\"变量\"}",
    "output": "{\"title\":\"变量\"}",
    "question": "这个示例会把课程保存到数据库吗？",
    "options": [
      "不会，只回显数据",
      "会永久保存",
      "自动同步到所有手机"
    ],
    "answer": 0,
    "explanation": "示例仅把收到的 title 返回，没有数据库或同步代码。",
    "vocab": "body · 请求体；record · 数据记录",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（键值映射接口）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 PostMapping（POST 路径映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RequestBody（请求体注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RestController（REST 控制器标记）。",
      "@RestController（REST 控制器）标记该类由 Spring 处理请求并将返回值写入响应体。",
      "public（公开）class（类）定义 LessonController（课程控制器）。",
      "public（公开）record（数据记录）定义 LessonRequest（课程请求），包含 String（字符串）类型的 title（标题）。",
      "@PostMapping（POST 路径映射）注册 /lessons（课程）路径。",
      "public（公开）Map（映射）使用 String（字符串）作为键和值；create（创建）方法通过 @RequestBody（请求体注解）接收 LessonRequest（课程请求）类型的 lesson（课程）。",
      "return（返回）Map（映射）的 of（创建不可变映射）结果；title（标题）字段来自 lesson（课程）的 title（标题）方法。",
      "右花括号结束 create（创建）方法。",
      "右花括号结束 LessonController（课程控制器）类。"
    ],
    "language": "Java · Spring Boot",
    "commentPrefix": "//",
    "outputLabel": "示例响应",
    "notice": "这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。",
    "guide": [
      "@RequestBody 可以把请求体转换成 Java 对象。这里使用 record 表示简单数据；本例只回显，没有数据库操作。",
      "示例仅把收到的 title 返回，没有数据库或同步代码。"
    ]
  },
  {
    "id": "spring-prefix",
    "title": "为一组接口设置前缀",
    "subtitle": "用 RequestMapping 组织路径",
    "explain": "类上的 @RequestMapping 可以为控制器中的方法提供公共路径前缀。本例只返回固定示例数据。",
    "code": "import java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping(\"/api\")\npublic class LessonController {\n    @GetMapping(\"/today\")\n    public Map<String, String> today() {\n        return Map.of(\"task\", \"阅读\");\n    }\n}",
    "request": "GET /api/today",
    "output": "{\"task\":\"阅读\"}",
    "question": "为什么路径前面有 /api？",
    "options": [
      "类上的 RequestMapping 设置了前缀",
      "浏览器随机添加",
      "自动创建数据库"
    ],
    "answer": 0,
    "explanation": "类级 @RequestMapping(\"/api\") 与方法级路径 /today 组合。",
    "vocab": "mapping · 映射；today · 今天",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（映射接口）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 GetMapping（GET 映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RequestMapping（请求映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RestController（REST 控制器标记）。",
      "@RestController（REST 控制器）标记这个类处理请求并将返回值写入响应体。",
      "@RequestMapping（请求映射）将公共前缀设为 /api（应用接口）。",
      "public（公开）class（类）定义 LessonController（课程控制器）。",
      "@GetMapping（GET 映射）注册 /today（今天）路径。",
      "public（公开）Map（映射）的键和值为 String（字符串），today（今天）是方法名。",
      "return（返回）Map（映射）的 of（创建映射）结果，task（任务）字段为“阅读”。",
      "右花括号结束 today（今天）方法。",
      "右花括号结束 LessonController（课程控制器）类。"
    ],
    "language": "Java · Spring Boot",
    "commentPrefix": "//",
    "outputLabel": "示例响应",
    "notice": "这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。",
    "guide": [
      "类上的 @RequestMapping 可以为控制器中的方法提供公共路径前缀。本例只返回固定示例数据。",
      "类级 @RequestMapping(\"/api\") 与方法级路径 /today 组合。"
    ]
  },
  {
    "id": "spring-header",
    "title": "读取请求头",
    "subtitle": "了解客户端附带的信息",
    "explain": "@RequestHeader 可以读取 HTTP 请求头。此示例的 X-Client 是客户端自报文字，不能单独用于证明身份。",
    "code": "import java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestHeader;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    @GetMapping(\"/client\")\n    public Map<String, String> client(@RequestHeader(name = \"X-Client\", defaultValue = \"unknown\") String value) {\n        return Map.of(\"client\", value);\n    }\n}",
    "request": "GET /client，请求头 X-Client: mobile",
    "output": "{\"client\":\"mobile\"}",
    "question": "X-Client 能单独证明用户身份吗？",
    "options": [
      "不能",
      "能，它无法由客户端修改",
      "能替代所有认证"
    ],
    "answer": 0,
    "explanation": "客户端可以提供请求头，不能单独将其视为可信身份认证。",
    "vocab": "header · 请求头；client · 客户端",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（映射接口）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 GetMapping（GET 映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RequestHeader（请求头注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RestController（REST 控制器标记）。",
      "@RestController（REST 控制器）标记这个类处理请求并将返回值写入响应体。",
      "public（公开）class（类）定义 LessonController（课程控制器）。",
      "@GetMapping（GET 映射）注册 /client（客户端）路径。",
      "public（公开）Map（映射）的键和值为 String（字符串）；client（客户端）方法用 @RequestHeader（请求头注解）的 name（名称）读取 X-Client（客户端标识），defaultValue（默认值）为 unknown（未知），String（字符串）参数 value（值）保存结果。",
      "return（返回）Map（映射）的 of（创建映射）结果，client（客户端）字段对应 value（值）。",
      "右花括号结束 client（客户端）方法。",
      "右花括号结束 LessonController（课程控制器）类。"
    ],
    "language": "Java · Spring Boot",
    "commentPrefix": "//",
    "outputLabel": "示例响应",
    "notice": "这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。",
    "guide": [
      "@RequestHeader 可以读取 HTTP 请求头。此示例的 X-Client 是客户端自报文字，不能单独用于证明身份。",
      "客户端可以提供请求头，不能单独将其视为可信身份认证。"
    ]
  },
  {
    "id": "spring-put",
    "title": "更新请求：组合路径与请求体",
    "subtitle": "同时读取课程编号和标题",
    "explain": "PUT 请求可以用于表达对指定资源的更新。示例只回显路径与请求体，不保存到数据库。",
    "code": "import java.util.Map;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PutMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    public record LessonRequest(String title) {}\n    @PutMapping(\"/lessons/{id}\")\n    public Map<String, Object> update(@PathVariable(\"id\") int id, @RequestBody LessonRequest lesson) {\n        return Map.of(\"id\", id, \"title\", lesson.title());\n    }\n}",
    "request": "PUT /lessons/7，JSON：{\"title\":\"循环\"}",
    "output": "{\"id\":7,\"title\":\"循环\"}",
    "question": "这个示例是否真正更新了数据库？",
    "options": [
      "没有，只回显数据",
      "已经永久保存",
      "自动同步所有手机"
    ],
    "answer": 0,
    "explanation": "方法中没有数据库操作；返回更新后的数据并不意味着已经持久化。",
    "vocab": "put · 更新请求；update · 更新",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（映射接口）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 PathVariable（路径参数注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 PutMapping（PUT 映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RequestBody（请求体注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RestController（REST 控制器标记）。",
      "@RestController（REST 控制器）标记这个类处理请求并将返回值写入响应体。",
      "public（公开）class（类）定义 LessonController（课程控制器）。",
      "public（公开）record（数据记录）定义 LessonRequest（课程请求），包含 String（字符串）类型的 title（标题）。",
      "@PutMapping（PUT 映射）注册 /lessons/{id}；lessons（课程）是路径片段，id（编号）是路径参数。",
      "public（公开）Map（映射）以 String（字符串）为键、Object（对象）为值；update（更新）方法用 @PathVariable（路径参数注解）把 id（编号）绑定到 int（整数）参数 id，并通过 @RequestBody（请求体注解）接收 LessonRequest（课程请求）类型的 lesson（课程）。",
      "return（返回）Map（映射）的 of（创建映射）结果；id（编号）来自 id 变量，title（标题）来自 lesson（课程）的 title（标题）方法。",
      "右花括号结束 update（更新）方法。",
      "右花括号结束 LessonController（课程控制器）类。"
    ],
    "language": "Java · Spring Boot",
    "commentPrefix": "//",
    "outputLabel": "示例响应",
    "notice": "这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。",
    "guide": [
      "PUT 请求可以用于表达对指定资源的更新。示例只回显路径与请求体，不保存到数据库。",
      "方法中没有数据库操作；返回更新后的数据并不意味着已经持久化。"
    ]
  },
  {
    "id": "spring-error",
    "title": "资源不存在时返回 404",
    "subtitle": "使用状态码表达找不到",
    "explain": "当资源不存在时，可以抛出 ResponseStatusException 并指定 HTTP 状态码。示例只判断固定编号，不连接数据库。",
    "code": "import java.util.Map;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.server.ResponseStatusException;\n\n@RestController\npublic class LessonController {\n    @GetMapping(\"/lessons/{id}\")\n    public Map<String, Integer> read(@PathVariable(\"id\") int id) {\n        if (id != 1) {\n            throw new ResponseStatusException(HttpStatus.NOT_FOUND, \"没有找到\");\n        }\n        return Map.of(\"id\", id);\n    }\n}",
    "request": "GET /lessons/2",
    "output": "HTTP 404（响应体格式取决于工程配置）",
    "question": "编号不是 1 时返回哪个状态？",
    "options": [
      "404",
      "200",
      "自动上传数据"
    ],
    "answer": 0,
    "explanation": "示例对编号不是 1 的请求抛出 NOT_FOUND，HTTP 状态为 404。",
    "vocab": "status · 状态；not found · 未找到",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（映射接口）。",
      "import（导入）org.springframework.http（Spring HTTP 包）的 HttpStatus（HTTP 状态枚举）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 GetMapping（GET 映射注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 PathVariable（路径参数注解）。",
      "import（导入）org.springframework.web.bind.annotation（Spring Web 请求绑定注解包）的 RestController（REST 控制器标记）。",
      "import（导入）org.springframework.web.server（Spring Web 服务包）的 ResponseStatusException（带状态的响应异常）。",
      "@RestController（REST 控制器）标记这个类处理请求并将返回值写入响应体。",
      "public（公开）class（类）定义 LessonController（课程控制器）。",
      "@GetMapping（GET 映射）注册 /lessons/{id}；lessons（课程）是路径片段，id（编号）是路径参数。",
      "public（公开）Map（映射）以 String（字符串）为键、Integer（整数对象类型）为值；read（读取）方法用 @PathVariable（路径参数注解）绑定 id（编号）到 int（整数）参数 id。",
      "if（如果）id（编号）不等于 1，进入错误分支。",
      "throw（抛出）通过 new（创建）ResponseStatusException（响应状态异常）生成的错误，HttpStatus（HTTP 状态）的 NOT_FOUND（未找到）表示 404。",
      "右花括号结束 if（如果）分支。",
      "return（返回）Map（映射）的 of（创建映射）结果；id（编号）文字键对应 id（编号）变量。",
      "右花括号结束 read（读取）方法。",
      "右花括号结束 LessonController（课程控制器）类。"
    ],
    "language": "Java · Spring Boot",
    "commentPrefix": "//",
    "outputLabel": "示例响应",
    "notice": "这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。",
    "guide": [
      "当资源不存在时，可以抛出 ResponseStatusException 并指定 HTTP 状态码。示例只判断固定编号，不连接数据库。",
      "示例对编号不是 1 的请求抛出 NOT_FOUND，HTTP 状态为 404。"
    ]
  }
,
 {
  id:'spring-query-validation',title:'检查学习时间参数',subtitle:'不合理的分钟数返回 400',
  explain:'控制器读取查询参数后检查业务条件。负数不是合理的学习分钟数，示例用 400 表示请求不符合要求；这里不保存数据。',
  code:'import java.util.Map;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.server.ResponseStatusException;\n\n@RestController\npublic class LessonController {\n    @GetMapping("/summary")\n    public Map<String, Integer> summary(@RequestParam("minutes") int minutes) {\n        if (minutes < 0) {\n            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "分钟数不能为负数");\n        }\n        return Map.of("minutes", minutes);\n    }\n}',
  request:'GET /summary?minutes=25',output:'{"minutes":25}',question:'minutes 为 -1 时会怎样？',options:['返回 HTTP 400','自动转换为 1','写入数据库'],answer:0,
  explanation:'minutes 小于 0 时抛出 BAD_REQUEST 对应的异常，Spring 将其处理为 HTTP 400。',vocab:'summary · 汇总；minutes · 分钟数；request · 请求',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 Map（键值映射）。','import（导入）org.springframework.http（Spring HTTP 包）中的 HttpStatus（HTTP 状态码）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','import（导入）org.springframework.web.server（Spring Web 服务器包）中的 ResponseStatusException（带状态码的异常）。','@RestController（REST 控制器）标记该类处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','@GetMapping（GET 路径映射）将 /summary（汇总路径）映射到方法。','public（公开）Map（键值映射）以 String（字符串）为键、Integer（整数对象）为值；summary（汇总）方法用 @RequestParam（查询参数绑定）读取 minutes（分钟数）为 int（整数）。','if（如果）minutes（分钟数）小于 0，进入错误分支。','throw（抛出）new（新建）ResponseStatusException（带状态码的异常）；HttpStatus（HTTP 状态码）的 BAD_REQUEST（错误请求）对应 400。','右花括号结束 if（如果）分支。','return（返回）Map（键值映射）的 of（创建映射）结果，minutes（分钟数）字段取自 minutes（分钟数）参数。','右花括号结束 summary（汇总）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器文件片段和预期响应；阅读页面不会启动服务、发送请求或保存数据。需要在配置 Spring Boot Web 的工程中使用。',guide:['查询参数由框架转换为整数；非数字也会产生请求参数错误。','负数被业务判断拒绝，本例不写入数据库。']
 }
,
 {
  id:'spring-sum-minutes',title:'汇总多次学习时间',subtitle:'接收数组并检查每项',
  explain:'接口接收分钟数数组，逐项检查并求和。空数组得到 0，负数或空值返回 400；示例只计算当前请求，不保存数据。',
  code:'import java.util.List;\nimport java.util.Map;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.server.ResponseStatusException;\n\n@RestController\npublic class LessonController {\n    @PostMapping("/total")\n    public Map<String, Long> total(@RequestBody List<Integer> entries) {\n        long minutes = 0;\n        for (Integer entry : entries) {\n            if (entry == null || entry < 0) {\n                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "分钟数无效");\n            }\n            minutes += entry;\n        }\n        return Map.of("minutes", minutes);\n    }\n}',
  request:'POST /total，JSON：[20,15]',output:'{"minutes":35}',question:'传入空数组会得到什么？',options:['分钟数为 0','自动创建记录','返回服务器错误'],answer:0,
  explanation:'minutes 从 0 开始；空数组没有循环项，因此返回 0。',vocab:'entries · 记录；total · 总计；minutes · 分钟数',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（键值映射）。','import（导入）org.springframework.http（Spring HTTP 包）中的 HttpStatus（HTTP 状态码）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 PostMapping（POST 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestBody（请求体绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','import（导入）org.springframework.web.server（Spring Web 服务器包）中的 ResponseStatusException（带状态码的异常）。','@RestController（REST 控制器）标记类负责处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','@PostMapping（POST 路径映射）把 /total（总计路径）映射到方法。','public（公开）Map（映射）使用 String（字符串）为键、Long（长整数对象）为值；total（总计）通过 @RequestBody（请求体绑定）接收 List（列表）中 Integer（整数对象）类型的 entries（记录）。','long（长整数类型）minutes（分钟数）初始为 0。','for（循环）让 Integer（整数对象）类型的 entry（当前记录）依次取自 entries（记录列表）。','if（如果）entry（当前记录）是 null（空值）或小于 0，进入错误分支。','throw（抛出）new（新建）ResponseStatusException（带状态码的异常），HttpStatus（HTTP 状态码）的 BAD_REQUEST（错误请求）对应 400。','右花括号结束 if（如果）分支。','minutes（分钟数）加上 entry（当前记录）。','右花括号结束 for（循环）。','return（返回）Map（映射）的 of（创建映射）结果，minutes（分钟数字段）对应 minutes（总分钟数）。','右花括号结束 total（总计）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器文件片段和预期响应；阅读页面不会启动服务或保存数据。需要在配置 Spring Boot Web 的工程中使用。',guide:['每个输入值是整数分钟数，示例检查空值和负数。','求和使用 long 以扩大整数范围；实际接口还应根据业务限制请求大小与数值范围。']
 }
,
 {
  id:'spring-search',title:'搜索课程标题',subtitle:'读取查询参数并筛选示例数据',
  explain:'接口读取关键词并筛选固定课程列表，使用 Locale.ROOT 转换大小写。空关键词匹配全部标题；示例不连接数据库。',
  code:'import java.util.List;\nimport java.util.Locale;\nimport java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    @GetMapping("/search")\n    public Map<String, Object> search(@RequestParam(value = "q", defaultValue = "") String q) {\n        String keyword = q.strip().toLowerCase(Locale.ROOT);\n        List<String> courses = List.of("Python 基础", "Java 入门");\n        List<String> items = courses.stream().filter(course -> course.toLowerCase(Locale.ROOT).contains(keyword)).toList();\n        return Map.of("count", items.size(), "items", items);\n    }\n}',
  request:'GET /search?q=python',output:'{"count":1,"items":["Python 基础"]}',question:'没有匹配时 count 是多少？',options:['0','1','自动创建课程'],answer:0,
  explanation:'没有匹配结果时 items 是空列表，size 返回 0。',vocab:'search · 搜索；keyword · 关键词；items · 结果',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Locale（区域设置）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（键值映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类负责处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','@GetMapping（GET 路径映射）将 /search（搜索路径）映射到方法。','public（公开）Map（映射）以 String（字符串）为键、Object（对象）为值；search（搜索）方法用 @RequestParam（查询参数绑定）的 value（参数名）指定 q（查询文字），defaultValue（默认值）为空，q 是 String（字符串）。','String（字符串）keyword（关键词）保存 q（查询文字）经 strip（去除首尾空白）及 toLowerCase（转小写）处理的结果；Locale（区域设置）的 ROOT（与语言无关的区域）指定转换规则。','List（列表）以 String（字符串）为元素类型，courses（课程列表）由 List（列表）的 of（创建列表）提供；Python 和 Java 是示例语言名。','List（列表）以 String（字符串）为元素类型，items（结果列表）来自 courses（课程列表）的 stream（流），filter（筛选）让 course（当前课程）经 toLowerCase（转小写）和 Locale.ROOT（与语言无关的区域）处理后检查 contains（是否包含）keyword（关键词），最后用 toList（收集为列表）。','return（返回）Map（映射）的 of（创建映射）结果，count（数量）由 items（结果列表）的 size（长度）得到，items（结果字段）对应 items（结果列表）。','右花括号结束 search（搜索）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器文件片段和预期响应；阅读页面不会启动服务或连接数据库。需要在配置 Spring Boot Web 的工程中使用。',guide:['忽略大小写的转换规则在不同语言和场景可能有差异；本例用于演示基本筛选。','省略 q 或只输入空格时，整理后的关键词为空，示例返回全部标题；无匹配时返回空列表。真实项目的搜索和索引需要另外设计。']
 }
,
 {
  id:'spring-filter-tasks',title:'按完成状态筛选任务',subtitle:'通过布尔查询参数选择任务',
  explain:'接口读取 done 查询参数，从固定列表中筛选相同状态的任务。示例只处理内存数据，不连接数据库。',
  code:'import java.util.List;\nimport java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    record Task(String title, boolean done) {}\n    @GetMapping("/tasks")\n    public Map<String, Object> tasks(@RequestParam(value = "done", defaultValue = "false") boolean done) {\n        List<Task> all = List.of(new Task("阅读", true), new Task("复习", false));\n        List<Task> items = all.stream().filter(task -> task.done() == done).toList();\n        return Map.of("count", items.size(), "items", items);\n    }\n}',
  request:'GET /tasks?done=false',output:'{"count":1,"items":[{"title":"复习","done":false}]}',question:'没有提供 done 时默认筛选什么？',options:['未完成任务','所有任务','自动访问数据库'],answer:0,
  explanation:'默认值为 false，示例筛选 done 为 false 的任务。',vocab:'task · 任务；done · 完成状态；filter · 筛选',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（键值映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类负责处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 Task（任务），String（字符串）title（标题）和 boolean（布尔值）done（完成状态）是字段。','@GetMapping（GET 路径映射）将 /tasks（任务路径）映射到方法。','public（公开）Map（映射）以 String（字符串）为键、Object（对象）为值；tasks（任务查询）用 @RequestParam（查询参数绑定）的 value（参数名）指定 done（完成状态），defaultValue（默认值）为 false（假），参数类型为 boolean（布尔值）。','List（列表）以 Task（任务）为元素类型，all（全部任务）由 List（列表）的 of（创建列表）提供；new（新建）Task（任务），true（真）表示完成，false（假）表示未完成。','List（列表）以 Task（任务）为元素类型，items（结果列表）通过 all（全部任务）的 stream（流）、filter（筛选）和 toList（收集为列表）得到；task（当前任务）的 done（完成状态）等于 done（查询参数）时保留。','return（返回）Map（映射）的 of（创建映射）结果，count（数量）为 items（结果列表）的 size（长度），items（项目字段）对应 items（结果列表）。','右花括号结束 tasks（任务查询）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器文件片段和预期响应；阅读页面不会启动服务或连接数据库。需要在配置 Spring Boot Web 的工程中使用。',guide:['未提供 done 时使用默认值 false。','示例使用固定数据；实际项目需要根据权限和数据来源设计查询。']
 }
,
 {
  id:'spring-create-conflict',title:'创建任务时返回冲突状态',subtitle:'用响应状态区分成功与编号冲突',
  explain:'控制器以编号 1 模拟已存在的任务。编号冲突返回 409，其他编号模拟创建成功并返回 201；示例没有保存数据或连接数据库。',
  code:'import java.util.Map;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    record TaskInput(String title) {}\n    @PostMapping("/tasks/{id}")\n    public ResponseEntity<Map<String, Object>> create(@PathVariable("id") int id, @RequestBody TaskInput task) {\n        if (id == 1) {\n            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", "编号已存在"));\n        }\n        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("id", id, "title", task.title()));\n    }\n}',
  request:'POST /tasks/2，JSON：{"title":"复习"}',output:'HTTP 201 · {"id":2,"title":"复习"}',question:'编号 1 在示例中会返回什么状态码？',options:['409','201','自动写入数据库'],answer:0,
  explanation:'示例把编号 1 当作已存在的任务，因此返回 409；其他编号只模拟成功响应，不会持久化。',vocab:'conflict · 冲突；created · 已创建；response · 响应',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 Map（键值映射）。','import（导入）org.springframework.http（Spring HTTP 包）中的 HttpStatus（HTTP 状态码）。','import（导入）org.springframework.http（Spring HTTP 包）中的 ResponseEntity（响应实体）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 PathVariable（路径参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 PostMapping（POST 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestBody（请求体绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类负责处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 TaskInput（任务输入），String（字符串）title（标题）为字段。','@PostMapping（POST 路径映射）将 /tasks/{id}（任务路径）映射到方法，id（编号）是路径参数。','public（公开）ResponseEntity（响应实体）以 Map（映射）为响应体，String（字符串）为键、Object（对象）为值；create（创建）接收 @PathVariable（路径参数绑定）的 id（编号，int 为整数）和 @RequestBody（请求体绑定）的 TaskInput（任务输入）task（任务）。','if（如果）id（编号）等于 1，进入冲突分支。','return（返回）ResponseEntity（响应实体）的 status（设置状态）为 HttpStatus（HTTP 状态码）的 CONFLICT（冲突），body（响应体）为 Map（映射）的 of（创建映射）结果，message（消息）说明编号已存在。','右花括号结束 if（如果）分支。','return（返回）ResponseEntity（响应实体）的 status（设置状态）为 HttpStatus（HTTP 状态码）的 CREATED（已创建），body（响应体）为 Map（映射）的 of（创建映射）结果，id（编号）与 title（标题）来自 id 和 task（任务）的 title（标题）。','右花括号结束 create（创建）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和模拟响应；阅读页面不会启动服务，也不会保存或修改数据库。',guide:['ResponseEntity 可以明确设置响应状态和响应体；这里的成功只是模拟。','真实创建接口需要数据库约束、事务和并发处理，不能仅凭固定编号判断。']
 }
,
 {
  id:'spring-topic-summary',title:'接口按主题汇总学习时间',subtitle:'把固定记录转换为汇总响应',
  explain:'接口使用固定学习记录，按主题累加分钟数；查询参数 empty 用于模拟空数据。示例不连接数据库，也不保存记录。',
  code:'import java.util.List;\nimport java.util.Map;\nimport java.util.TreeMap;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    record StudyRecord(String topic, int minutes) {}\n    @GetMapping("/topic-summary")\n    public Map<String, Object> summary(@RequestParam(value = "empty", defaultValue = "false") boolean empty) {\n        List<StudyRecord> records = empty ? List.of() : List.of(new StudyRecord("Python", 20), new StudyRecord("Java", 10), new StudyRecord("Python", 15));\n        Map<String, Long> totals = new TreeMap<>();\n        for (StudyRecord record : records) {\n            totals.merge(record.topic(), (long) record.minutes(), Long::sum);\n        }\n        return Map.of("count", totals.size(), "totals", totals);\n    }\n}',
  request:'GET /topic-summary',output:'{"count":2,"totals":{"Java":10,"Python":35}}',question:'empty 为 true 时返回多少个主题？',options:['0','2','自动读取数据库'],answer:0,
  explanation:'empty 为 true 时 records 为空列表，没有任何主题被加入 totals，因此 count 为 0。',vocab:'summary · 汇总；topic · 主题；minutes · 分钟数；totals · 总计',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）java（Java 标准库）的 util（工具包）中的 TreeMap（按键排序的映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类负责处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 StudyRecord（学习记录），String（字符串）topic（主题）和 int（整数）minutes（分钟数）是字段。','@GetMapping（GET 路径映射）将 /topic-summary（主题汇总）路径映射到方法。','public（公开）Map（映射）以 String（字符串）为键、Object（对象）为值；summary（汇总）通过 @RequestParam（查询参数绑定）的 value（参数名）指定 empty（空数据），defaultValue（默认值）为 false（假），参数类型为 boolean（布尔值）。','List（列表）以 StudyRecord（学习记录）为元素类型；records（记录列表）根据 empty（是否使用空数据）选择 List（列表）的 of（创建列表）产生空列表或 new（新建）StudyRecord（学习记录）组成的列表；Python、Java 为示例主题。','Map（映射）以 String（字符串）为键、Long（长整数对象）为值，totals（总计映射）通过 new（新建）TreeMap（按键排序的映射）创建。','for（循环）使 StudyRecord（学习记录）类型的 record（当前记录）依次取自 records（记录列表）。','totals（总计映射）的 merge（合并）以 record（当前记录）的 topic（主题）为键，将 record 的 minutes（分钟数）转换为 long（长整数），已有值时使用 Long（长整数工具）的 sum（求和）相加。','右花括号结束 for（循环）。','return（返回）Map（映射）的 of（创建映射）结果；count（数量）由 totals（总计映射）的 size（长度）取得，totals（总计字段）对应 totals（总计映射）。','右花括号结束 summary（汇总）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和固定数据的预期响应；阅读页面不会启动服务或访问数据库。',guide:['请求默认使用三条固定记录；empty=true 用于演示空结果。','真实接口需从可信数据源读取，并考虑校验、权限和数值上限。']
 }
,
 {
  id:'spring-filter-pagination',title:'筛选待办并分页返回',subtitle:'校验查询参数并区分总数和当前页',
  explain:'控制器从固定任务中筛选待办，再按 offset 和 limit 返回一页。参数不合法返回 400，越过末尾返回空列表；示例不连接数据库。',
  code:'import java.util.List;\nimport java.util.Map;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.server.ResponseStatusException;\n\n@RestController\npublic class LessonController {\n    record Task(String title, boolean done) {}\n    @GetMapping("/tasks/page")\n    public Map<String, Object> page(@RequestParam(value = "offset", defaultValue = "0") int offset, @RequestParam(value = "limit", defaultValue = "10") int limit) {\n        if (offset < 0 || limit < 1 || limit > 50) {\n            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "分页参数无效");\n        }\n        List<Task> tasks = List.of(new Task("阅读", false), new Task("复习", true), new Task("练习", false));\n        List<String> pending = tasks.stream().filter(task -> !task.done()).map(Task::title).toList();\n        List<String> items = pending.stream().skip(offset).limit(limit).toList();\n        return Map.of("total", pending.size(), "items", items);\n    }\n}',
  request:'GET /tasks/page?offset=1&limit=1',output:'{"total":2,"items":["练习"]}',question:'total 为什么是 2 而 items 只有 1 项？',options:['total 是筛选后的总数，items 是当前页','total 是数据库表数量','接口自动补充数据'],answer:0,
  explanation:'先筛选出两条待办，再跳过第一条并取一条；total 统计分页前的待办数量。',vocab:'offset · 跳过数量；limit · 每页上限；pending · 待办；total · 总数；items · 项目列表',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）org.springframework.http（Spring HTTP 包）中的 HttpStatus（HTTP 状态码）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','import（导入）org.springframework.web.server（Spring 网络服务包）中的 ResponseStatusException（响应状态异常）。','@RestController（REST 控制器）标记类负责处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 Task（任务），String（字符串）title（标题）和 boolean（布尔值）done（完成状态）是字段。','@GetMapping（GET 路径映射）注册 /tasks/page（任务分页）路径。','public（公开）Map（映射）以 String（字符串）为键、Object（对象）为值；page（分页）接收两个 @RequestParam（查询参数绑定），value（参数名）分别为 offset（跳过数量）和 limit（每页上限），defaultValue（默认值）分别为 0 和 10，int（整数）表示参数类型。','if（如果）offset（跳过数量）小于 0，或 limit（每页上限）小于 1 或大于 50，进入错误分支。','throw（抛出）new（新建）ResponseStatusException（响应状态异常），HttpStatus（HTTP 状态码）的 BAD_REQUEST（请求错误）表示 400。','右花括号结束 if（如果）分支。','List（列表）以 Task（任务）为元素类型；tasks（任务列表）由 List（列表）的 of（创建列表）和 new（新建）Task（任务）提供固定数据，false（假）表示未完成，true（真）表示已完成。','List（列表）以 String（字符串）为元素类型；pending（待办）通过 tasks（任务列表）的 stream（流）、filter（筛选）保留 task（当前任务）的 done（完成状态）为假的项，再用 map（映射）和 Task（任务）的 title（标题）方法引用取得标题，toList（转列表）得到结果。','List（列表）以 String（字符串）为元素类型；items（当前页）通过 pending（待办）的 stream（流）调用 skip（跳过）offset（跳过数量）、limit（限制数量）limit（每页上限），最后由 toList（转列表）得到。','return（返回）Map（映射）的 of（创建映射）结果；total（总数字段）为 pending（待办）的 size（数量），items（当前页字段）为 items（当前页）。','右花括号结束 page（分页）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和固定数据的预期响应；阅读页面不会启动服务或访问数据库。',guide:['先筛选待办并计算总数，再跳过 offset 项，最多返回 limit 项。','此例仅处理固定列表；真实数据库分页应使用稳定排序，并在数据库中执行筛选与分页。']
 }
,
 {
  id:'spring-validate-batch',title:'批量校验任务标题',subtitle:'检查整批输入并返回整理后的结果',
  explain:'接口接收任务数组，拒绝空列表、空项和空白标题；全部通过后去除首尾空格并返回整理结果。示例不保存数据，失败时返回 400。',
  code:'import java.util.List;\nimport java.util.Map;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.server.ResponseStatusException;\n\n@RestController\npublic class LessonController {\n    record TaskInput(String title) {}\n    @PostMapping("/tasks/check")\n    public Map<String, Object> check(@RequestBody List<TaskInput> tasks) {\n        if (tasks.isEmpty() || tasks.size() > 50) {\n            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "任务数量无效");\n        }\n        for (TaskInput task : tasks) {\n            if (task == null || task.title() == null || task.title().isBlank()) {\n                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "标题不能为空");\n            }\n        }\n        List<String> titles = tasks.stream().map(task -> task.title().trim()).toList();\n        return Map.of("count", titles.size(), "titles", titles);\n    }\n}',
  request:'POST /tasks/check，JSON：[{"title":" 阅读 "}]',output:'{"count":1,"titles":["阅读"]}',question:'数组中有一条空白标题时会怎样？',options:['整次请求返回 400','跳过错误并自动保存其余任务','自动填入标题'],answer:0,
  explanation:'循环检查每一项；发现空项或空白标题时抛出 400 异常。本例没有写入操作。',vocab:'batch · 批量；check · 检查；title · 标题；blank · 空白；count · 数量',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）org.springframework.http（Spring HTTP 包）中的 HttpStatus（HTTP 状态码）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 PostMapping（POST 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestBody（请求体绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','import（导入）org.springframework.web.server（Spring 网络服务包）中的 ResponseStatusException（响应状态异常）。','@RestController（REST 控制器）标记类负责处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 TaskInput（任务输入），String（字符串）title（标题）为字段。','@PostMapping（POST 路径映射）注册 /tasks/check（检查任务）路径。','public（公开）Map（映射）以 String（字符串）为键、Object（对象）为值；check（检查）通过 @RequestBody（请求体绑定）接收 TaskInput（任务输入）的 List（列表）tasks（任务列表）。','if（如果）tasks（任务列表）的 isEmpty（是否为空）为真，或 size（数量）大于 50，进入错误分支。','throw（抛出）new（新建）ResponseStatusException（响应状态异常），HttpStatus（HTTP 状态码）的 BAD_REQUEST（请求错误）表示 400。','右花括号结束 if（如果）分支。','for（循环）让 TaskInput（任务输入）类型的 task（当前任务）依次取自 tasks（任务列表）。','if（如果）task（当前任务）为 null（空值）、title（标题）为 null 或 isBlank（是否为空白）为真，进入错误分支。','throw（抛出）new（新建）ResponseStatusException（响应状态异常），HttpStatus（HTTP 状态码）的 BAD_REQUEST（请求错误）表示 400。','右花括号结束 if（如果）分支。','右花括号结束 for（循环）。','List（列表）以 String（字符串）为元素类型；titles（标题列表）由 tasks（任务列表）的 stream（流）通过 map（映射）处理 task（当前任务）的 title（标题），调用 trim（去除首尾空格），再由 toList（转列表）得到。','return（返回）Map（映射）的 of（创建映射）结果；count（数量）由 titles（标题列表）的 size（数量）取得，titles（标题列表字段）对应 titles。','右花括号结束 check（检查）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和预期响应；阅读页面不会启动服务或保存数据。',guide:['先检查整个数组的数量，再检查每个任务，最后整理标题。','此例限制最多 50 项；真实应用还需要限制请求大小、标题长度并设计统一错误响应。']
 }
,
 {
  id:'spring-task-counts',title:'接口统计任务完成情况',subtitle:'计算已完成和待办数量',
  explain:'接口使用固定任务演示统计已完成和待办数量；empty 参数用于模拟空列表。示例不连接数据库或保存数据。',
  code:'import java.util.List;\nimport java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    record Task(String title, boolean done) {}\n    @GetMapping("/tasks/counts")\n    public Map<String, Long> counts(@RequestParam(value = "empty", defaultValue = "false") boolean empty) {\n        List<Task> tasks = empty ? List.of() : List.of(new Task("阅读", true), new Task("复习", false));\n        long done = tasks.stream().filter(Task::done).count();\n        long pending = tasks.size() - done;\n        return Map.of("done", done, "pending", pending);\n    }\n}',
  request:'GET /tasks/counts',output:'{"done":1,"pending":1}',question:'empty=true 时待办数量是多少？',options:['0','1','自动查询数据库'],answer:0,
  explanation:'empty 为 true 时使用空列表，已完成和待办数量均为 0。',vocab:'counts · 数量；done · 已完成；pending · 待办；empty · 空',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 Task（任务），String（字符串）title（标题）和 boolean（布尔值）done（完成状态）为字段。','@GetMapping（GET 路径映射）注册 /tasks/counts（任务数量）路径。','public（公开）Map（映射）以 String（字符串）为键、Long（长整数对象）为值；counts（统计）通过 @RequestParam（查询参数绑定）设置 value（参数名）empty（空列表）、defaultValue（默认值）false（假），接收 boolean（布尔值）empty。','List（列表）以 Task（任务）为元素类型；tasks（任务列表）根据 empty（空列表开关）选择 List（列表）的 of（创建列表）产生空列表或 new（新建）Task（任务）；true（真）为已完成，false（假）为待办。','long（长整数）变量 done（已完成数量）由 tasks（任务列表）的 stream（流）经过 filter（筛选）使用 Task（任务）的 done（完成状态）方法引用，再用 count（计数）得到。','long（长整数）变量 pending（待办数量）由 tasks（任务列表）的 size（数量）减去 done（已完成数量）得到。','return（返回）Map（映射）的 of（创建映射）结果，done（已完成字段）对应 done（已完成数量），pending（待办字段）对应 pending（待办数量）。','右花括号结束 counts（统计）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和固定数据的预期响应；阅读页面不会启动服务或访问数据库。',guide:['先按完成状态筛选并计数，再用总数减去已完成数量得到待办数。','empty=true 只用于模拟空数据；真实接口需要从数据源读取并处理权限。']
 }
,
 {
  id:'spring-recent-tasks',title:'读取最近几条任务',subtitle:'校验数量并返回列表',
  explain:'接口从预先按最近优先排列的固定列表中取出指定数量。limit 超出允许范围返回 400；示例不访问数据库。',
  code:'import java.util.List;\nimport java.util.Map;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.server.ResponseStatusException;\n\n@RestController\npublic class LessonController {\n    @GetMapping("/tasks/recent")\n    public Map<String, Object> recent(@RequestParam(value = "limit", defaultValue = "2") int limit) {\n        if (limit < 1 || limit > 5) {\n            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "数量无效");\n        }\n        List<String> tasks = List.of("练习", "复习", "阅读");\n        List<String> items = tasks.stream().limit(limit).toList();\n        return Map.of("count", items.size(), "items", items);\n    }\n}',
  request:'GET /tasks/recent?limit=1',output:'{"count":1,"items":["练习"]}',question:'limit 为 0 时接口会怎样？',options:['返回 400','自动返回全部任务','删除全部任务'],answer:0,
  explanation:'本例允许的 limit 是 1 到 5；0 不在范围内，抛出 400。',vocab:'recent · 最近的；limit · 数量上限；items · 项目；count · 数量',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）org.springframework.http（Spring HTTP 包）中的 HttpStatus（HTTP 状态码）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','import（导入）org.springframework.web.server（Spring 网络服务包）中的 ResponseStatusException（响应状态异常）。','@RestController（REST 控制器）标记类处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','@GetMapping（GET 路径映射）注册 /tasks/recent（最近任务）路径。','public（公开）Map（映射）以 String（字符串）为键、Object（对象）为值；recent（最近任务）通过 @RequestParam（查询参数绑定）的 value（参数名）设置 limit（数量上限），defaultValue（默认值）为 2，接收 int（整数）类型 limit。','if（如果）limit（数量上限）小于 1 或大于 5，进入错误分支。','throw（抛出）new（新建）ResponseStatusException（响应状态异常），HttpStatus（HTTP 状态码）的 BAD_REQUEST（请求错误）表示 400。','右花括号结束 if（如果）分支。','List（列表）以 String（字符串）为元素类型；tasks（任务列表）由 List（列表）的 of（创建列表）提供固定数据，按示例中的最近优先顺序排列。','List（列表）以 String（字符串）为元素类型；items（返回项目）由 tasks（任务列表）的 stream（流）调用 limit（限制数量）取 limit（数量上限）项，再用 toList（转列表）得到。','return（返回）Map（映射）的 of（创建映射）结果；count（数量）由 items（返回项目）的 size（数量）取得，items（项目字段）对应 items。','右花括号结束 recent（最近任务）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和固定数据的预期响应；阅读页面不会启动服务或访问数据库。',guide:['列表已经人为按最近优先排列，limit 控制最多返回几项。','真实数据库需要根据时间和唯一编号确定稳定顺序，再进行数量限制。']
 }
,
 {
  id:'spring-task-exists',title:'查询任务是否存在',subtitle:'路径参数与布尔响应',
  explain:'接口接收任务编号，在固定编号集合中检查是否存在，并返回布尔值。示例只使用内存数据，不连接数据库。',
  code:'import java.util.Map;\nimport java.util.Set;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    @GetMapping("/tasks/exists/{id}")\n    public Map<String, Boolean> exists(@PathVariable("id") int id) {\n        Set<Integer> ids = Set.of(1, 2);\n        return Map.of("exists", ids.contains(id));\n    }\n}',
  request:'GET /tasks/exists/1',output:'{"exists":true}',question:'查询编号 9 时返回什么？',options:['exists 为 false','自动创建任务','自动返回服务器数据'],answer:0,
  explanation:'示例集合只包含编号 1 和 2；编号 9 不在集合中，contains 返回 false。',vocab:'exists · 是否存在；id · 编号；set · 集合；contains · 包含',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）java（Java 标准库）的 util（工具包）中的 Set（集合）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 PathVariable（路径参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','@GetMapping（GET 路径映射）注册 /tasks/exists/{id}（任务存在检查）路径，id（编号）是路径参数。','public（公开）Map（映射）以 String（字符串）为键、Boolean（布尔对象）为值；exists（是否存在）通过 @PathVariable（路径参数绑定）接收 int（整数）类型的 id（编号）。','Set（集合）以 Integer（整数对象）为元素类型；ids（编号集合）由 Set（集合）的 of（创建集合）提供固定编号。','return（返回）Map（映射）的 of（创建映射）结果，exists（是否存在字段）由 ids（编号集合）的 contains（包含）检查 id（编号）得到。','右花括号结束 exists（是否存在）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和固定数据的预期响应；阅读页面不会启动服务或访问数据库。',guide:['比较编号 1 和 9 的响应，观察 true 和 false 的区别。','本例返回布尔值；获取资源详情时，接口也可以按需求使用 404 表示不存在。']
 }
,
 {
  id:'spring-pending-count',title:'统计待办任务数量',subtitle:'筛选后计算数量',
  explain:'接口从固定任务中筛选未完成项并计数；empty 参数用于演示空列表。示例不连接数据库。',
  code:'import java.util.List;\nimport java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    record Task(String title, boolean done) {}\n    @GetMapping("/tasks/pending-count")\n    public Map<String, Long> pendingCount(@RequestParam(value = "empty", defaultValue = "false") boolean empty) {\n        List<Task> tasks = empty ? List.of() : List.of(new Task("阅读", false), new Task("复习", true), new Task("练习", false));\n        long count = tasks.stream().filter(task -> !task.done()).count();\n        return Map.of("count", count);\n    }\n}',
  request:'GET /tasks/pending-count',output:'{"count":2}',question:'空列表中的待办数量是多少？',options:['0','1','自动查询数据库'],answer:0,
  explanation:'空列表没有任务，筛选后的数量为 0。',vocab:'pending · 待办；count · 数量；filter · 筛选；empty · 空的',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 Task（任务），String（字符串）title（标题）和 boolean（布尔值）done（完成状态）为字段。','@GetMapping（GET 路径映射）注册 /tasks/pending-count（待办数量）路径。','public（公开）Map（映射）以 String（字符串）为键、Long（长整数对象）为值；pendingCount（待办数量）通过 @RequestParam（查询参数绑定）的 value（参数名）设置 empty（空列表），defaultValue（默认值）为 false（假），接收 boolean（布尔值）empty。','List（列表）以 Task（任务）为元素类型；tasks（任务列表）根据 empty（空列表开关）选择 List（列表）的 of（创建列表）提供空列表或 new（新建）Task（任务）；false（假）为待办，true（真）为已完成。','long（长整数）变量 count（数量）由 tasks（任务列表）的 stream（流）经 filter（筛选）保留 task（当前任务）的 done（完成状态）为假的项，再调用 count（计数）得到。','return（返回）Map（映射）的 of（创建映射）结果，count（数量字段）对应 count（数量）。','右花括号结束 pendingCount（待办数量）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和固定数据的预期响应；阅读页面不会启动服务或访问数据库。',guide:['先筛选完成状态为 false 的任务，再统计数量。','empty=true 用于模拟空数据；真实接口需要从数据源读取并处理权限。']
 }
,
 {
  id:'spring-count-by-status',title:'按状态统计任务数量',subtitle:'用查询参数选择统计条件',
  explain:'接口根据 done 查询参数选择已完成或待办任务，并返回数量；示例使用固定数据，不连接数据库。',
  code:'import java.util.List;\nimport java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    record Task(String title, boolean done) {}\n    @GetMapping("/tasks/count-by-status")\n    public Map<String, Long> countByStatus(@RequestParam(value = "done", defaultValue = "false") boolean done) {\n        List<Task> tasks = List.of(new Task("阅读", true), new Task("复习", false), new Task("练习", false));\n        long count = tasks.stream().filter(task -> task.done() == done).count();\n        return Map.of("count", count);\n    }\n}',
  request:'GET /tasks/count-by-status?done=false',output:'{"count":2}',question:'done=true 时统计什么？',options:['已完成任务','全部任务','自动从数据库读取的数据'],answer:0,
  explanation:'筛选条件比较每个任务的 done 与请求参数；true 对应已完成。',vocab:'status · 状态；count · 数量；done · 完成；filter · 筛选',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RequestParam（查询参数绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 Task（任务），String（字符串）title（标题）和 boolean（布尔值）done（完成状态）为字段。','@GetMapping（GET 路径映射）注册 /tasks/count-by-status（按状态统计任务）路径。','public（公开）Map（映射）以 String（字符串）为键、Long（长整数对象）为值；countByStatus（按状态统计）通过 @RequestParam（查询参数绑定）的 value（参数名）设置 done（完成状态），defaultValue（默认值）为 false（假），接收 boolean（布尔值）done。','List（列表）以 Task（任务）为元素类型；tasks（任务列表）由 List（列表）的 of（创建列表）提供三个 new（新建）Task（任务），true（真）为已完成，false（假）为待办。','long（长整数）变量 count（数量）由 tasks（任务列表）的 stream（流）通过 filter（筛选）保留 task（当前任务）的 done（完成状态）等于请求参数 done 的项，再调用 count（计数）得到。','return（返回）Map（映射）的 of（创建映射）结果，count（数量字段）对应 count（数量）。','右花括号结束 countByStatus（按状态统计）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和固定数据的预期响应；阅读页面不会启动服务或访问数据库。',guide:['分别传入 done=true 和 done=false，对比统计结果；省略 done 时使用默认值 false，统计待办。','例如 done=invalid 无法转换为布尔值，接口返回 400；真实接口还需数据来源和权限处理。']
 }
,
 {
  id:'spring-health-demo',title:'返回服务状态',subtitle:'认识简单的状态接口',
  explain:'示例接口返回固定状态文字，用于演示服务响应。它不会检查数据库或其他依赖，不能证明整个系统健康。',
  code:'import java.util.Map;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    @GetMapping("/health")\n    public Map<String, String> health() {\n        return Map.of("status", "ok");\n    }\n}',
  request:'GET /health',output:'{"status":"ok"}',question:'这个例子返回 ok 能证明数据库可用吗？',options:['不能，示例没有检查数据库','能证明所有依赖正常','会自动修复数据库'],answer:0,
  explanation:'代码只返回固定文字，没有连接或检查数据库。',vocab:'health · 健康状态；status · 状态；ok · 正常；get · 获取',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 GetMapping（GET 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）中的 RestController（REST 控制器）。','@RestController（REST 控制器）标记类处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','@GetMapping（GET 路径映射）注册 /health（健康状态）路径。','public（公开）Map（映射）以 String（字符串）为键和值；health（健康状态）定义处理方法。','return（返回）Map（映射）的 of（创建映射）结果，status（状态字段）为 ok（正常）。','右花括号结束 health（健康状态）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段和固定响应；阅读页面不会启动服务，也不会检查数据库。',guide:['请求 /health，观察 status 字段。','真实服务是否可用还取决于具体依赖和检查策略；这个固定响应只用于理解接口。']
 }
,
 {
  id:'spring-validate-task',title:'检查学习任务的输入',subtitle:'验证标题和学习时长',
  explain:'提交学习任务时，先检查标题和时长，再返回整理后的数据。这个例子只演示输入校验，不会保存任务。',
  code:'import java.util.Map;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    record TaskInput(String title, Integer minutes) {}\n    @PostMapping("/tasks/validate")\n    public ResponseEntity<?> validate(@RequestBody TaskInput input) {\n        if (input.title() == null || input.title().isBlank() || input.minutes() == null || input.minutes() < 1 || input.minutes() > 1440) {\n            return ResponseEntity.badRequest().body(Map.of("error", "标题不能为空，时长应为1到1440分钟"));\n        }\n        return ResponseEntity.ok(Map.of("title", input.title().strip(), "minutes", input.minutes()));\n    }\n}',
  request:'POST /tasks/validate\n{"title":" 阅读 ","minutes":25}',output:'{"title":"阅读","minutes":25}',question:'为什么 minutes 使用 Integer 而不是 int？',options:['可以识别未填写时的 null','可以自动保存到数据库','可以让任意文字变成数字'],answer:0,
  explanation:'Integer 可以为 null，因此可以区分未填写和填了 0；两种情况都需要校验。',vocab:'validate · 校验；input · 输入；title · 标题；minutes · 分钟；strip · 去除首尾空白',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）org.springframework.http（Spring HTTP 包）的 ResponseEntity（响应对象）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 PostMapping（POST 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 RequestBody（请求体绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 RestController（控制器）。','@RestController（控制器）标记类处理请求。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 TaskInput（任务输入），String（字符串）title（标题）和 Integer（可为空的整数）minutes（分钟）。','@PostMapping（POST 路径映射）注册 /tasks/validate（校验任务）路径。','public（公开）ResponseEntity（响应对象）由 validate（校验）方法返回；@RequestBody（请求体绑定）将请求体转成 TaskInput（任务输入）input（输入）。','if（如果）input（输入）的 title（标题）为 null（空）或 isBlank（全为空白），或者 minutes（分钟）为 null、低于 1 或高于 1440，则进入错误分支。','return（返回）ResponseEntity（响应对象）的 badRequest（400 错误）和 body（响应体），Map（映射）的 of（创建映射）放入 error（错误）提示。','右花括号结束 if（条件）分支。','return（返回）ResponseEntity（响应对象）的 ok（成功）和 Map（映射）的 of（创建映射）；title（标题）取 input（输入）的 title 并用 strip（去除首尾空白），minutes（分钟）取 input 的 minutes。','右花括号结束 validate（校验）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是控制器片段；阅读页面不会启动服务或保存任务。',guide:['先看请求体中的标题和分钟数，再对照代码中的各个判断。','空标题、缺少时长或时长超出 1 到 1440 分钟时返回 400；合法输入用 strip 去除首尾空白后返回；isBlank 与 strip 都基于 Java 的空白字符规则。']
 }
,
 {
  id:'spring-patch-task',title:'局部更新学习任务',subtitle:'区分省略字段和主动清空',
  explain:'接口从固定任务副本开始，处理请求中提供的字段：省略时保留原值，描述为 null 时清空。示例只返回计算结果，不保存数据。',
  code:'import java.util.Iterator;\nimport java.util.LinkedHashMap;\nimport java.util.Map;\nimport java.util.Set;\nimport com.fasterxml.jackson.databind.JsonNode;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.PatchMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class LessonController {\n    @PatchMapping("/task")\n    public ResponseEntity<?> update(@RequestBody JsonNode input) {\n        if (!input.isObject()) return ResponseEntity.badRequest().body(Map.of("error", "需要对象"));\n        Iterator<String> fields = input.fieldNames();\n        while (fields.hasNext()) {\n            if (!Set.of("title", "description").contains(fields.next())) return ResponseEntity.badRequest().body(Map.of("error", "包含未知字段"));\n        }\n        Map<String, Object> task = new LinkedHashMap<>();\n        task.put("title", "阅读");\n        task.put("description", "第一章");\n        if (input.has("title")) {\n            JsonNode title = input.get("title");\n            if (!title.isTextual() || title.asText().isBlank()) return ResponseEntity.badRequest().body(Map.of("error", "标题无效"));\n            task.put("title", title.asText().strip());\n        }\n        if (input.has("description")) {\n            JsonNode description = input.get("description");\n            if (!description.isNull() && !description.isTextual()) return ResponseEntity.badRequest().body(Map.of("error", "描述无效"));\n            task.put("description", description.isNull() ? null : description.asText());\n        }\n        return ResponseEntity.ok(task);\n    }\n}',
  request:'PATCH /task\n{"description":null}',output:'{"title":"阅读","description":null}',question:'请求体为 {} 时，原描述会怎样？',options:['保留“第一章”','被清空','自动写入数据库'],answer:0,
  explanation:'has 检查请求是否包含字段；没有 description 时不会进入更新分支，固定副本中的描述保持不变。',vocab:'patch · 局部更新；input · 输入；description · 描述；null · 空值；has · 是否包含',
  notes:['import（导入）java.util（Java 工具包）的 Iterator（迭代器）。','import（导入）java.util（Java 工具包）的 LinkedHashMap（有序映射）。','import（导入）java.util（Java 工具包）的 Map（映射）。','import（导入）java.util（Java 工具包）的 Set（集合）。','import（导入）com.fasterxml.jackson.databind（Jackson 数据绑定包）的 JsonNode（JSON 节点）。','import（导入）org.springframework.http（Spring HTTP 包）的 ResponseEntity（响应对象）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 PatchMapping（PATCH 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 RequestBody（请求体绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 RestController（控制器）。','@RestController（控制器）标记类处理请求。','public（公开）class（类）定义 LessonController（课程控制器）。','@PatchMapping（PATCH 路径映射）注册 /task（任务）路径。','public（公开）ResponseEntity（响应对象）由 update（更新）方法返回，@RequestBody（请求体绑定）将请求体作为 JsonNode（JSON 节点）input（输入）。','if（如果）input（输入）的 isObject（是否为对象）为假，return（返回）ResponseEntity（响应对象）的 badRequest（400 错误）和 body（响应体），Map（映射）的 of（创建映射）提供 error（错误）提示。','Iterator（迭代器）以 String（字符串）为元素类型，fields（字段）由 input（输入）的 fieldNames（字段名称）取得。','while（循环）在 fields（字段）的 hasNext（是否还有下一项）为真时继续。','if（如果）Set（集合）的 of（创建集合）中不 contains（包含）fields（字段）的 next（下一项），即不是 title（标题）或 description（描述），return（返回）ResponseEntity（响应对象）的 badRequest（400 错误）和 body（响应体），Map（映射）的 of（创建映射）提供 error（错误）提示。','右花括号结束 while（循环）。','Map（映射）以 String（字符串）为键、Object（对象）为值；task（任务）由 new（新建）LinkedHashMap（有序映射）创建。','task（任务）的 put（放入）设置 title（标题）为“阅读”。','task（任务）的 put（放入）设置 description（描述）为“第一章”。','if（如果）input（输入）的 has（是否包含）发现 title（标题）字段，进入标题更新分支。','JsonNode（JSON 节点）title（标题）由 input（输入）的 get（获取）读取 title（标题）。','if（如果）title（标题）的 isTextual（是否为文字）为假，或者 asText（取文字）后的 isBlank（是否为空白）为真，return（返回）ResponseEntity（响应对象）的 badRequest（400 错误）和 body（响应体），Map（映射）的 of（创建映射）提供 error（错误）提示。','task（任务）的 put（放入）设置 title（标题），用 title（标题）的 asText（取文字）和 strip（去除首尾空白）得到值。','右花括号结束 title（标题）更新分支。','if（如果）input（输入）的 has（是否包含）发现 description（描述）字段，进入描述更新分支。','JsonNode（JSON 节点）description（描述）由 input（输入）的 get（获取）读取 description（描述）。','if（如果）description（描述）的 isNull（是否为空值）为假，并且 isTextual（是否为文字）也为假，return（返回）ResponseEntity（响应对象）的 badRequest（400 错误）和 body（响应体），Map（映射）的 of（创建映射）提供 error（错误）提示。','task（任务）的 put（放入）设置 description（描述）；description 的 isNull（是否为空值）为真时写入 null（空值），否则用 asText（取文字）。','右花括号结束 description（描述）更新分支。','return（返回）ResponseEntity（响应对象）的 ok（成功），内容为 task（任务）。','右花括号结束 update（更新）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'这是独立控制器和固定数据的示例；每次请求重新创建任务，不保存到数据库。',guide:['对比空对象、description 为 null 和 title 为 null 三种请求。','LinkedHashMap 允许空值；本例拒绝未知字段，避免拼错后被忽略；实际接口还需要持久化和并发更新规则。']
 }
 ,
 {
  id:'spring-batch-unique',title:'批量检查任务标题重复',subtitle:'整理标题并返回明确错误',
  explain:'接口接收任务数组，先检查数量和空标题，再对去除首尾空白的标题检查重复。数量或标题无效返回 400，重复返回 409；示例不保存数据。',
  code:'import java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Set;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.server.ResponseStatusException;\n\n@RestController\npublic class LessonController {\n    record TaskInput(String title) {}\n    @PostMapping("/tasks/unique")\n    public Map<String, Object> check(@RequestBody List<TaskInput> tasks) {\n        if (tasks.isEmpty() || tasks.size() > 50) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "任务数量无效");\n        Set<String> seen = new HashSet<>();\n        List<String> titles = new ArrayList<>();\n        for (TaskInput task : tasks) {\n            if (task == null || task.title() == null || task.title().isBlank()) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "标题不能为空");\n            String title = task.title().strip();\n            if (!seen.add(title)) throw new ResponseStatusException(HttpStatus.CONFLICT, "标题重复");\n            titles.add(title);\n        }\n        return Map.of("count", titles.size(), "titles", titles);\n    }\n}',
  request:'POST /tasks/unique，JSON：[{"title":" 阅读 "},{"title":"练习"}]',output:'{"count":2,"titles":["阅读","练习"]}',question:'提交“阅读”和“ 阅读 ”时返回什么？',options:['409 标题重复','自动保存两条任务','自动修改数据库'],answer:0,
  explanation:'strip 去除标题首尾空白，两个标题整理后相同；Set 添加重复值时返回 false，接口抛出 409。',vocab:'batch · 批量；unique · 唯一；seen · 已见过；strip · 去除首尾空白；conflict · 冲突',
  notes:['import（导入）java.util（Java 工具包）的 ArrayList（动态列表）。','import（导入）java.util（Java 工具包）的 HashSet（哈希集合）。','import（导入）java.util（Java 工具包）的 List（列表接口）。','import（导入）java.util（Java 工具包）的 Map（映射接口）。','import（导入）java.util（Java 工具包）的 Set（集合接口）。','import（导入）org.springframework.http（Spring HTTP 包）的 HttpStatus（HTTP 状态码）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 PostMapping（POST 路径映射）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 RequestBody（请求体绑定）。','import（导入）org.springframework.web.bind.annotation（Spring 请求绑定注解包）的 RestController（REST 控制器）。','import（导入）org.springframework.web.server（Spring 服务包）的 ResponseStatusException（响应状态异常）。','@RestController（REST 控制器）标记类处理请求并返回响应体。','public（公开）class（类）定义 LessonController（课程控制器）。','record（记录类型）定义 TaskInput（任务输入），String（字符串）title（标题）为字段。','@PostMapping（POST 路径映射）注册 /tasks/unique（任务唯一检查）路径。','public（公开）Map（映射）以 String（字符串）为键、Object（对象）为值，check（检查）通过 @RequestBody（请求体绑定）接收 TaskInput（任务输入）的 List（列表）tasks（任务列表）。','if（如果）tasks（任务列表）的 isEmpty（是否为空）为真或 size（数量）大于 50，throw（抛出）new（新建）ResponseStatusException（响应状态异常），HttpStatus（HTTP 状态码）的 BAD_REQUEST（请求错误）表示 400。','Set（集合）seen（已见标题）保存 String（字符串），new（新建）HashSet（哈希集合）。','List（列表）titles（标题列表）保存 String（字符串），new（新建）ArrayList（动态列表）。','for（循环）让 TaskInput（任务输入）类型的 task（当前任务）依次取自 tasks（任务列表）。','if（如果）task（当前任务）为 null（空值），或 title（标题）为 null 或 isBlank（是否为空白），throw（抛出）new（新建）ResponseStatusException（响应状态异常），HttpStatus（HTTP 状态码）的 BAD_REQUEST（请求错误）表示 400。','String（字符串）title（标题）由 task（当前任务）的 title（标题）通过 strip（去除首尾空白）得到。','if（如果）seen（已见标题）的 add（添加）title（标题）返回假，throw（抛出）new（新建）ResponseStatusException（响应状态异常），HttpStatus（HTTP 状态码）的 CONFLICT（冲突）表示 409。','titles（标题列表）的 add（添加）加入 title（标题）。','右花括号结束 for（循环）。','return（返回）Map（映射）的 of（创建）结果，count（数量）取 titles（标题列表）的 size（数量），titles 字段对应 titles。','右花括号结束 check（检查）方法。','右花括号结束 LessonController（课程控制器）类。'],
  language:'Java · Spring Boot',commentPrefix:'//',outputLabel:'示例响应',notice:'示例仅检查当前请求，不保存或查询数据库；实际应用仍需数据库约束。',guide:['比较空白标题、重复标题和有效标题对应的结果。','strip 处理 Java 定义的空白字符；此例区分大小写，真实应用应明确重复规则。']
 }
];
