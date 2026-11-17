export const wechatAdvanced = [
  {
    "id": "wx-lifecycle",
    "title": "页面加载与参数",
    "subtitle": "认识 onLoad 和页面参数",
    "explain": "页面创建时可以在 onLoad 中读取进入页面时携带的参数。示例只显示传入的 topic，不会访问网络。",
    "output": "示意：进入页面时传入 topic=Python，页面显示 Python。",
    "question": "options.topic 从哪里来？",
    "options": [
      "进入页面时传入的参数",
      "手机通讯录",
      "微信自动生成的数据库"
    ],
    "answer": 0,
    "explanation": "options 包含进入页面时传入的参数；具体值由打开页面的一方提供。",
    "vocab": "onLoad · 加载时；options · 参数；topic · 主题",
    "blocks": [
      {
        "label": "页面逻辑 · index.js",
        "language": "JavaScript",
        "commentPrefix": "//",
        "code": "Page({\n  data: { topic: \"未指定\" },\n  onLoad(options) { this.setData({ topic: options.topic || \"未指定\" }) }\n})",
        "notes": [
          "Page（注册页面）接收页面配置对象。",
          "data（页面数据）的 topic（主题）初始为“未指定”。",
          "onLoad（加载时）接收 options（页面参数）；this（当前页面）的 setData（更新页面数据）把 topic（主题）设为 options（参数）的 topic（主题），没有时使用“未指定”。",
          "结束传给 Page（注册页面）的配置。"
        ]
      },
      {
        "label": "页面结构 · index.wxml",
        "language": "WXML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<view>主题：{{topic}}</view>",
        "notes": [
          "view（视图容器）通过 topic（主题）展示页面数据。"
        ]
      }
    ]
  },
  {
    "id": "wx-navigation",
    "title": "打开另一个页面",
    "subtitle": "通过 navigateTo 跳转",
    "explain": "wx.navigateTo 可以打开已在小程序配置中注册的非 tabBar 页面。这里的目标路径只是示例，运行前需要先创建并注册目标页面。",
    "output": "示意：点击按钮后请求打开 /pages/detail/detail；真实结果取决于工程配置。",
    "question": "跳转前需要满足什么条件？",
    "options": [
      "目标是已注册的非 tabBar 页面",
      "任何路径都一定存在",
      "自动创建目标页面"
    ],
    "answer": 0,
    "explanation": "目标页面需要在小程序配置中注册；navigateTo 不用于打开 tabBar 页面。",
    "vocab": "navigate · 导航；detail · 详情；url · 地址",
    "blocks": [
      {
        "label": "页面逻辑 · index.js",
        "language": "JavaScript",
        "commentPrefix": "//",
        "code": "Page({\n  openDetail() { wx.navigateTo({ url: \"/pages/detail/detail\" }) }\n})",
        "notes": [
          "Page（注册页面）接收页面配置对象。",
          "openDetail（打开详情）调用 wx（微信小程序接口）的 navigateTo（打开新页面），url（目标地址）指向 pages（页面目录）中的 detail（详情页面）。",
          "结束传给 Page（注册页面）的配置。"
        ]
      },
      {
        "label": "页面结构 · index.wxml",
        "language": "WXML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<button bindtap=\"openDetail\">查看详情</button>",
        "notes": [
          "button（按钮）的 bindtap（绑定点击事件）指定 openDetail（打开详情）方法。"
        ]
      }
    ]
  },
  {
    "id": "wx-storage",
    "title": "本地保存一条提示",
    "subtitle": "认识小程序本地存储",
    "explain": "wx.setStorageSync 会同步写入小程序本地存储。本例使用固定示例文字；代码将结果显示在当前页，失败时显示错误提示。",
    "output": "示意：写入成功时显示“已写入本地”；实际结果取决于运行环境。",
    "question": "这个示例把提示存到哪里？",
    "options": [
      "当前小程序的本地存储",
      "自动发送到服务器",
      "所有用户共享的数据库"
    ],
    "answer": 0,
    "explanation": "wx.setStorageSync 写入当前小程序本地存储，不等于上传服务器或多设备同步。",
    "vocab": "storage · 存储；save · 保存；message · 消息",
    "blocks": [
      {
        "label": "页面逻辑 · index.js",
        "language": "JavaScript",
        "commentPrefix": "//",
        "code": "Page({\n  data: { message: \"还没有记录\" },\n  save() {\n    try {\n      wx.setStorageSync(\"study_tip\", \"继续学习\")\n      this.setData({ message: \"已写入本地\" })\n    } catch (error) {\n      this.setData({ message: \"写入失败\" })\n    }\n  }\n})",
        "notes": [
          "Page（注册页面）接收页面配置对象。",
          "data（页面数据）的 message（消息）初始为“还没有记录”。",
          "save（保存）定义页面方法。",
          "try（尝试）开始可能发生错误的操作。",
          "wx（微信小程序接口）的 setStorageSync（同步写入本地存储）用 study_tip（学习提示）作为键，保存示例文字。",
          "this（当前页面）的 setData（更新页面数据）将 message（消息）设为“已写入本地”。",
          "catch（捕获）接收 error（错误），处理存储失败的情况。",
          "this（当前页面）的 setData（更新页面数据）将 message（消息）设为“写入失败”。",
          "右花括号结束 catch（捕获）分支。",
          "右花括号结束 save（保存）方法。",
          "结束传给 Page（注册页面）的配置。"
        ]
      },
      {
        "label": "页面结构 · index.wxml",
        "language": "WXML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<view>{{message}}</view>\n<button bindtap=\"save\">保存提示</button>",
        "notes": [
          "view（视图容器）展示 message（消息）。",
          "button（按钮）的 bindtap（绑定点击事件）指定 save（保存）方法。"
        ]
      }
    ]
  },
  {
    "id": "wx-request",
    "title": "请求接口并处理结果",
    "subtitle": "理解加载、成功与失败状态",
    "explain": "wx.request 可以发起网络请求。下面使用占位地址示意：真实项目需配置可用服务和小程序合法域名；加载时清空旧列表并防止重复请求；示例检查状态码、数组、每项编号与标题，并拒绝重复编号。此阅读页面不会请求该地址。",
    "output": "示意：成功且响应为课程数组时显示列表；请求失败或数据格式不符合预期时显示提示。",
    "question": "example.com 在示例中是什么？",
    "options": [
      "占位域名，需要替换成自己的服务",
      "已经接入的真实课程服务",
      "用户的微信账号"
    ],
    "answer": 0,
    "explanation": "example.com 是示例占位域名；真实使用需要可用接口与符合小程序要求的域名配置。",
    "vocab": "request · 请求；response · 响应；status · 状态",
    "blocks": [
      {
        "label": "页面逻辑 · index.js",
        "language": "JavaScript",
        "commentPrefix": "//",
        "code": "Page({\n  data: { status: \"未加载\", lessons: [] },\n  loadLessons() {\n    if (this.data.status === \"加载中\") return\n    this.setData({ status: \"加载中\", lessons: [] })\n    wx.request({\n      url: \"https://example.com/api/lessons\",\n      success: (response) => {\n        if (response.statusCode !== 200 || !Array.isArray(response.data)) {\n          this.setData({ status: \"响应不符合预期\" })\n          return\n        }\n        const ids = new Set()\n        const valid = response.data.every(item => {\n          if (!item || !Number.isSafeInteger(item.id) || item.id <= 0) return false\n          if (typeof item.title !== \"string\" || !item.title.trim()) return false\n          if (ids.has(item.id)) return false\n          ids.add(item.id)\n          return true\n        })\n        if (!valid) {\n          this.setData({ status: \"响应不符合预期\" })\n          return\n        }\n        this.setData({ status: \"已收到响应\", lessons: response.data })\n      },\n      fail: () => { this.setData({ status: \"请求失败\" }) }\n    })\n  }\n})",
        "notes": [
          "Page（注册页面）接收页面配置对象。",
          "data（页面数据）中的 status（状态）初始为“未加载”，lessons（课程列表）初始为空数组。",
          "loadLessons（加载课程）定义页面方法。",
          "if（如果）this（当前页面）的 data（页面数据）中 status（状态）是“加载中”，return（返回）避免重复请求。",
          "this（当前页面）的 setData（更新页面数据）将 status（状态）设为“加载中”，lessons（课程列表）清空，避免旧结果被当成新结果。",
          "wx（微信小程序接口）的 request（网络请求）接收请求配置。",
          "url（地址）是 https（加密传输协议）下的 example.com（示例域名），api（应用接口）和 lessons（课程）是示例路径。",
          "success（请求成功回调）接收 response（响应）。",
          "if（如果）response（响应）的 statusCode（状态码）不等于 200，或者 Array（数组类型）的 isArray（是否为数组）检查 response（响应）的 data（响应数据）不是数组。",
          "this（当前页面）的 setData（更新页面数据）把 status（状态）设为“响应不符合预期”。",
          "return（返回）结束当前回调，避免继续按成功数据处理。",
          "右花括号结束 if（如果）分支。",
          "const（声明）创建 ids（编号集合），new（新建）Set（集合）用于检查重复编号。",
          "const（声明）创建 valid（有效标记），response（响应）的 data（数据）用 every（每项满足）逐个检查 item（当前课程）。",
          "if（如果）item（当前课程）为空，或 Number（数字工具）的 isSafeInteger（安全整数）检查 id（编号）不通过，或 id 不大于零，return（返回）false（假）。",
          "if（如果）typeof（查看类型）检查 item（当前课程）的 title（标题）不是 string（字符串），或者 trim（去除首尾空格）后为空，return（返回）false（假）。",
          "if（如果）ids（编号集合）的 has（包含）发现 item（当前课程）的 id（编号）重复，return（返回）false（假）。",
          "ids（编号集合）的 add（添加）记录 item（当前课程）的 id（编号）。",
          "return（返回）true（真），表示当前课程有效。",
          "结束 every（每项满足）的检查。",
          "if（如果）valid（有效标记）为假，进入数据无效分支。",
          "this（当前页面）的 setData（更新页面数据）将 status（状态）设为响应不符合预期。",
          "return（返回）结束当前回调。",
          "右花括号结束 if（如果）分支。",
          "this（当前页面）的 setData（更新页面数据）将 status（状态）设为“已收到响应”，lessons（课程列表）设为 response（响应）的 data（响应数据）。",
          "右花括号结束 success（请求成功回调）。",
          "fail（请求失败回调）通过 this（当前页面）的 setData（更新页面数据）将 status（状态）设为“请求失败”。",
          "结束 wx.request（微信网络请求）的配置和调用。",
          "右花括号结束 loadLessons（加载课程）方法。",
          "结束传给 Page（注册页面）的配置。"
        ]
      },
      {
        "label": "页面结构 · index.wxml",
        "language": "WXML",
        "commentPrefix": "<!--",
        "commentSuffix": " -->",
        "code": "<button bindtap=\"loadLessons\">读取示例</button>\n<view>{{status}}</view>\n<view wx:for=\"{{lessons}}\" wx:key=\"id\">{{item.title}}</view>",
        "notes": [
          "button（按钮）的 bindtap（绑定点击事件）指定 loadLessons（加载课程）方法。",
          "view（视图容器）显示 status（状态）。",
          "view（视图容器）用 wx:for（循环）遍历 lessons（课程列表），wx:key（列表项标识）使用 id（编号），item（当前项）的 title（标题）用于显示；真实数据需提供稳定唯一的 id。"
        ]
      }
    ]
  }
,
 {id:'wx-storage-read',title:'读取本地学习提示',subtitle:'处理没有记录与读取失败',explain:'wx.getStorageSync 同步读取当前小程序本地存储。示例读取前面保存的 study_tip，并区分没有可用文字与读取失败；它不访问服务器。',output:'示意：已有提示时显示提示；没有记录或读取失败时显示对应说明。',question:'读取不到可用文字时显示什么？',options:['还没有记录','自动从服务器下载','自动创建账号'],answer:0,explanation:'本例只接受非空字符串；没有可用文字时显示“还没有记录”。',vocab:'storage · 存储；load · 读取；message · 消息',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { message: "还没有记录" },\n  load() {\n    try {\n      const value = wx.getStorageSync("study_tip")\n      this.setData({ message: typeof value === "string" && value ? value : "还没有记录" })\n    } catch (error) {\n      this.setData({ message: "读取失败" })\n    }\n  }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）的 message（消息）初始为“还没有记录”。','load（读取）定义按钮处理方法。','try（尝试）开始可能发生错误的读取操作。','const（声明）创建 value（读取值），wx（微信小程序接口）的 getStorageSync（同步读取本地存储）读取 study_tip（学习提示）键。','this（当前页面）的 setData（更新页面数据）设置 message（消息）：typeof（查看类型）检查 value（读取值）为 string（字符串）且非空时使用它，否则显示“还没有记录”。','catch（捕获）接收 error（错误对象），处理读取失败。','this（当前页面）的 setData（更新页面数据）将 message（消息）设为“读取失败”。','结束 catch（捕获）分支。','结束 load（读取）方法。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<button bindtap="load">读取</button>\n<view>{{message}}</view>',notes:['button（按钮）通过 bindtap（绑定点击事件）调用 load（读取）。','view（视图容器）显示 message（消息）。']}
 ]}
,
 {id:'wx-save-load-tip',title:'保存并读取学习提示',subtitle:'输入校验与本地存储连起来',explain:'输入文字后保存到小程序本地存储，也可以再次读取。示例处理空白输入、无记录及读写失败；不会上传服务器或跨设备同步。',output:'示意：保存“阅读”后读取，显示“已保存：阅读”。',question:'输入全是空格时会发生什么？',options:['提示输入学习提示，不写入','自动保存空格','上传到服务器'],answer:0,explanation:'trim 去掉首尾空格；结果为空时提前返回，不执行存储。',vocab:'save · 保存；load · 读取；storage · 存储；trim · 去除首尾空格',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { text: "", message: "还没有记录" },\n  onInput(event) {\n    this.setData({ text: event.detail.value })\n  },\n  save() {\n    const text = this.data.text.trim()\n    if (!text) {\n      this.setData({ message: "请输入学习提示" })\n      return\n    }\n    try {\n      wx.setStorageSync("study_tip", text)\n      this.setData({ message: "已保存" })\n    } catch (error) {\n      this.setData({ message: "保存失败" })\n    }\n  },\n  load() {\n    try {\n      const value = wx.getStorageSync("study_tip")\n      this.setData({ message: typeof value === "string" && value ? "已保存：" + value : "还没有记录" })\n    } catch (error) {\n      this.setData({ message: "读取失败" })\n    }\n  }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）包含 text（输入文字）和 message（提示信息）。','onInput（输入处理方法）接收 event（事件）。','this（当前页面）的 setData（更新页面数据）将 event（事件）的 detail（详情）中的 value（输入值）存入 text（输入文字）。','结束 onInput（输入处理方法）。','save（保存）处理按钮点击。','const（声明）创建 text（整理后的文字），对 this（当前页面）的 data（页面数据）中 text（输入文字）调用 trim（去除首尾空格）。','if（如果）text（整理后的文字）为空，进入提示分支。','this（当前页面）的 setData（更新页面数据）设置 message（提示信息）。','return（返回）结束保存方法。','结束 if（如果）分支。','try（尝试）开始可能失败的写入操作。','wx（微信小程序接口）的 setStorageSync（同步写入本地存储）以 study_tip（学习提示）为键，保存 text（整理后的文字）。','this（当前页面）的 setData（更新页面数据）将 message（提示信息）设为“已保存”。','catch（捕获）接收 error（错误对象）。','this（当前页面）的 setData（更新页面数据）将 message（提示信息）设为“保存失败”。','结束 catch（捕获）分支。','结束 save（保存）方法。','load（读取）处理按钮点击。','try（尝试）开始可能失败的读取操作。','const（声明）创建 value（读取值），wx（微信小程序接口）的 getStorageSync（同步读取本地存储）读取 study_tip（学习提示）键。','this（当前页面）的 setData（更新页面数据）设置 message（提示信息）；typeof（查看类型）检查 value（读取值）为 string（字符串）且非空时显示它，否则提示没有记录。','catch（捕获）接收 error（错误对象）。','this（当前页面）的 setData（更新页面数据）将 message（提示信息）设为“读取失败”。','结束 catch（捕获）分支。','结束 load（读取）方法。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<input bindinput="onInput" placeholder="输入学习提示" />\n<button bindtap="save">保存</button>\n<button bindtap="load">读取</button>\n<view>{{message}}</view>',notes:['input（输入框）的 bindinput（绑定输入事件）调用 onInput（输入处理方法），placeholder（占位提示）说明输入内容。','button（按钮）通过 bindtap（绑定点击事件）调用 save（保存）。','button（按钮）通过 bindtap（绑定点击事件）调用 load（读取）。','view（视图容器）显示 message（提示信息）。']}
 ]}
,
 {id:'wx-lifecycle-timer',title:'页面计时与生命周期清理',subtitle:'显示时开始，隐藏时停止',explain:'示例在页面显示时启动计时器，在页面隐藏或卸载时停止。再次显示时继续从当前秒数计数；数据只在页面内存中，不保存也不联网。',output:'示意：页面显示后每秒增加一次；隐藏时停止，再次显示后继续计数。',question:'页面隐藏后为什么停止计时器？',options:['避免隐藏期间继续执行','自动同步到服务器','永久保存计时数据'],answer:0,explanation:'onHide 和 onUnload 调用 stopTimer，清理已有定时器；重复调用不会重复清理。',vocab:'show · 显示；hide · 隐藏；unload · 卸载；timer · 定时器',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { seconds: 0 },\n  onShow() {\n    if (this.timer != null) return\n    this.timer = setInterval(() => {\n      this.setData({ seconds: this.data.seconds + 1 })\n    }, 1000)\n  },\n  stopTimer() {\n    if (this.timer != null) {\n      clearInterval(this.timer)\n      this.timer = null\n    }\n  },\n  onHide() {\n    this.stopTimer()\n  },\n  onUnload() {\n    this.stopTimer()\n  }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）的 seconds（秒数）初始为 0。','onShow（页面显示时）定义显示阶段的处理方法。','if（如果）this（当前页面）的 timer（定时器标识）不是 null（空值）或 undefined（未定义），return（返回）避免重复启动。','this（当前页面）的 timer（定时器标识）保存 setInterval（按间隔重复执行）注册的定时器。','this（当前页面）的 setData（更新页面数据）将 seconds（秒数）设为 this.data（页面数据）的 seconds 加 1。','结束 setInterval（按间隔重复执行）调用，1000 表示间隔 1000 毫秒。','结束 onShow（页面显示时）方法。','stopTimer（停止定时器）定义清理方法。','if（如果）this（当前页面）的 timer（定时器标识）不是 null（空值）或 undefined（未定义），进入清理分支。','clearInterval（清除定时器）停止 this（当前页面）的 timer（定时器标识）。','this（当前页面）的 timer（定时器标识）设为 null（空值），表示已清理。','结束 if（如果）分支。','结束 stopTimer（停止定时器）方法。','onHide（页面隐藏时）定义隐藏阶段的处理方法。','this（当前页面）的 stopTimer（停止定时器）清理定时器。','结束 onHide（页面隐藏时）方法。','onUnload（页面卸载时）定义卸载阶段的处理方法。','this（当前页面）的 stopTimer（停止定时器）清理定时器。','结束 onUnload（页面卸载时）方法。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<view>学习秒数：{{seconds}}</view>',notes:['view（视图容器）显示 seconds（秒数）。']}
 ]}
,
 {id:'wx-task-progress-filter',title:'任务进度与待办筛选',subtitle:'同步更新任务、数量和可见列表',explain:'示例用同一份任务列表计算完成数与可见列表。点击任务切换状态，点击筛选按钮只显示待办；所有待办完成时显示空状态。数据只保存在当前页面。',output:'界面示意：初始已完成 0 / 2，显示“阅读”和“复习”。',question:'切换任务后为什么重新计算完成数和可见列表？',options:['让界面与任务状态保持一致','自动上传服务器','自动删除已完成任务'],answer:0,explanation:'updateView 使用传入的任务列表和筛选开关，一次更新任务、完成数与可见列表。',vocab:'task · 任务；count · 数量；visible · 可见；pending · 待办；filter · 筛选',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { tasks: [{ id: 1, title: "阅读", done: false }, { id: 2, title: "复习", done: false }], count: 0, pendingOnly: false, visible: [{ id: 1, title: "阅读", done: false }, { id: 2, title: "复习", done: false }] },\n  updateView(tasks, pendingOnly) {\n    const count = tasks.filter(task => task.done).length\n    const visible = pendingOnly ? tasks.filter(task => !task.done) : tasks\n    this.setData({ tasks, count, pendingOnly, visible })\n  },\n  toggleTask(event) {\n    const id = event.currentTarget.dataset.id\n    const tasks = this.data.tasks.map(task => task.id === id ? { ...task, done: !task.done } : task)\n    this.updateView(tasks, this.data.pendingOnly)\n  },\n  toggleFilter() {\n    this.updateView(this.data.tasks, !this.data.pendingOnly)\n  }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）提供 tasks（任务列表）、count（完成数量）、pendingOnly（仅看待办）和 visible（可见列表）；id（编号）、title（标题）、done（完成状态）为字段，false（假）表示未完成。','updateView（更新界面）接收 tasks（任务列表）和 pendingOnly（仅看待办）。','const（声明）创建 count（完成数量），tasks（任务列表）的 filter（筛选）保留 task（当前任务）的 done（完成状态）为真的项，再读取 length（长度）。','const（声明）创建 visible（可见列表），pendingOnly（仅看待办）为真时用 tasks（任务列表）的 filter（筛选）保留 task（当前任务）的 done（完成状态）为假的项，否则使用 tasks。','this（当前页面）的 setData（更新页面数据）一次设置 tasks（任务列表）、count（完成数量）、pendingOnly（仅看待办）和 visible（可见列表）。','结束 updateView（更新界面）方法。','toggleTask（切换任务）接收 event（事件）。','const（声明）创建 id（编号），读取 event（事件）的 currentTarget（绑定事件的元素）的 dataset（自定义数据）中的 id。','const（声明）创建 tasks（新任务列表），this（当前页面）的 data（页面数据）中 tasks（任务列表）通过 map（映射）遍历 task（当前任务）；id（编号）匹配时复制 task 并将 done（完成状态）取反。','this（当前页面）的 updateView（更新界面）使用 tasks（新任务列表）和 this.data（页面数据）的 pendingOnly（仅看待办）更新界面。','结束 toggleTask（切换任务）方法。','toggleFilter（切换筛选）定义筛选按钮处理方法。','this（当前页面）的 updateView（更新界面）接收 this.data（页面数据）的 tasks（任务列表）及取反的 pendingOnly（仅看待办）。','结束 toggleFilter（切换筛选）方法。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<view>已完成：{{count}} / {{tasks.length}}</view>\n<button bindtap="toggleFilter">{{pendingOnly ? "显示全部" : "只看待办"}}</button>\n<view wx:if="{{visible.length === 0}}">暂无待办</view>\n<view wx:for="{{visible}}" wx:key="id"><button bindtap="toggleTask" data-id="{{item.id}}">{{item.title}}：{{item.done ? "已完成" : "未完成"}}</button></view>',notes:['view（视图容器）显示 count（完成数量）和 tasks（任务列表）的 length（长度）。','button（按钮）通过 bindtap（绑定点击事件）调用 toggleFilter（切换筛选），根据 pendingOnly（仅看待办）显示文字。','view（视图容器）用 wx:if（条件渲染）检查 visible（可见列表）的 length（长度），为空时显示提示。','view（视图容器）用 wx:for（循环）遍历 visible（可见列表），wx:key（列表项标识）使用 id（编号）；button（按钮）的 bindtap（绑定点击事件）调用 toggleTask（切换任务），data-id（自定义编号）传入 item（当前项）的 id（编号），显示 title（标题）与 done（完成状态）。']}
 ]}
,
 {id:'wx-add-unique-task',title:'添加任务并检查重复',subtitle:'输入事件、列表更新与反馈',explain:'输入任务后先去除首尾空格，拒绝空白或已有标题；有效时更新列表并清空输入。示例数据只在页面内存中，不连接服务器。',output:'界面示意：初始有“阅读”；输入“练习”并添加后显示两条任务。',question:'输入“ 阅读 ”并添加会怎样？',options:['去除首尾空格后发现重复，显示提示','再添加一个相同任务','自动上传服务器'],answer:0,explanation:'trim 后得到“阅读”，some 检查发现相同标题，因此不更新列表。示例按区分大小写的字符串比较。',vocab:'input · 输入；title · 标题；clean · 整理后的文字；some · 是否存在；message · 提示信息',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { text: "", tasks: [{ title: "阅读" }], message: "" },\n  onInput(event) {\n    this.setData({ text: event.detail.value })\n  },\n  addTask() {\n    const clean = this.data.text.trim()\n    if (!clean) { this.setData({ message: "请输入任务" }); return }\n    if (this.data.tasks.some(task => task.title === clean)) { this.setData({ message: "任务已存在" }); return }\n    const tasks = [...this.data.tasks, { title: clean }]\n    this.setData({ tasks, text: "", message: "已添加" })\n  }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）提供 text（输入文字）、tasks（任务列表）和 message（提示信息）；title（标题）是任务字段。','onInput（输入处理方法）接收 event（事件）。','this（当前页面）的 setData（更新页面数据）将 event（事件）的 detail（详情）中的 value（输入值）存入 text（输入文字）。','结束 onInput（输入处理方法）。','addTask（添加任务）定义按钮处理方法。','const（声明）创建 clean（整理后的标题），this（当前页面）的 data（页面数据）中 text（输入文字）经 trim（去除首尾空格）得到。','if（如果）clean（整理后的标题）为空，this（当前页面）的 setData（更新页面数据）设置 message（提示信息），return（返回）结束方法。','if（如果）this（当前页面）的 data（页面数据）中 tasks（任务列表）通过 some（是否存在）发现 task（当前任务）的 title（标题）等于 clean（整理后的标题），setData（更新页面数据）设置 message（提示信息），return（返回）结束方法。','const（声明）创建 tasks（新任务列表），展开 this（当前页面）的 data（页面数据）中 tasks（任务列表）并加入 title（标题）为 clean（整理后的标题）的新项。','this（当前页面）的 setData（更新页面数据）更新 tasks（任务列表）、清空 text（输入文字）并设置 message（提示信息）。','结束 addTask（添加任务）方法。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<input value="{{text}}" bindinput="onInput" placeholder="输入任务" />\n<button bindtap="addTask">添加</button>\n<view>{{message}}</view>\n<view wx:for="{{tasks}}" wx:key="title">{{item.title}}</view>',notes:['input（输入框）的 value（值）绑定 text（输入文字），bindinput（绑定输入事件）调用 onInput（输入处理方法），placeholder（占位提示）说明输入内容。','button（按钮）通过 bindtap（绑定点击事件）调用 addTask（添加任务）。','view（视图容器）显示 message（提示信息）。','view（视图容器）用 wx:for（循环）遍历 tasks（任务列表），wx:key（列表项标识）使用 title（标题），显示 item（当前项）的 title。']}
 ]}
,
 {id:'wx-search-tasks',title:'按关键词搜索任务',subtitle:'输入事件与页面列表更新',explain:'输入变化时读取关键词、去除首尾空格并筛选固定任务；没有匹配时显示提示，清空关键词后恢复全部。示例不访问网络。',output:'界面示意：初始显示“阅读”和“复习”；输入“阅读”只显示一项。',question:'清空搜索框后为什么显示全部任务？',options:['空字符串会匹配每个标题','自动从服务器下载','删除了任务列表'],answer:0,explanation:'关键词为空字符串时，每个标题的 includes 都返回 true，因此全部保留。',vocab:'search · 搜索；query · 查询文字；keyword · 关键词；visible · 可见；filter · 筛选',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { query: "", tasks: [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }], visible: [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }] },\n  onInput(event) {\n    const query = event.detail.value\n    const keyword = query.trim()\n    const visible = this.data.tasks.filter(task => task.title.includes(keyword))\n    this.setData({ query, visible })\n  }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）提供 query（查询文字）、tasks（任务列表）和 visible（可见列表）；id（编号）、title（标题）为字段。','onInput（输入处理方法）接收 event（事件）。','const（声明）创建 query（查询文字），读取 event（事件）的 detail（详情）中的 value（输入值）。','const（声明）创建 keyword（关键词），query（查询文字）经 trim（去除首尾空格）得到。','const（声明）创建 visible（可见列表），this（当前页面）的 data（页面数据）中 tasks（任务列表）通过 filter（筛选）保留 task（当前任务）的 title（标题）includes（包含）keyword（关键词）的项。','this（当前页面）的 setData（更新页面数据）设置 query（查询文字）和 visible（可见列表）。','结束 onInput（输入处理方法）。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<input value="{{query}}" bindinput="onInput" placeholder="搜索任务" />\n<view wx:if="{{visible.length === 0}}">没有匹配任务</view>\n<view wx:for="{{visible}}" wx:key="id">{{item.title}}</view>',notes:['input（输入框）的 value（值）绑定 query（查询文字），bindinput（绑定输入事件）调用 onInput（输入处理方法），placeholder（占位提示）说明输入内容。','view（视图容器）用 wx:if（条件渲染）检查 visible（可见列表）的 length（长度），为空时显示提示。','view（视图容器）用 wx:for（循环）遍历 visible（可见列表），wx:key（列表项标识）使用 id（编号），显示 item（当前项）的 title（标题）。']}
 ]}
,
 {id:'wx-combined-filter',title:'组合主题与关键词筛选',subtitle:'使用页面事件更新筛选结果',explain:'在关键词搜索基础上加入主题按钮，只有同时满足主题和关键词的任务才会显示。重置后恢复全部任务；示例不访问网络。',output:'初始显示三条任务；选 Python 并输入“练习”后，只显示 Python 练习。',question:'筛选没有匹配结果后点击重置，会发生什么？',options:['恢复全部任务并清空关键词','删除所有任务','请求服务器'],answer:0,explanation:'reset 将主题恢复为 all，关键词清空，并重新根据原列表计算可见任务。',vocab:'topic · 主题；query · 查询；visible · 可见；filter · 筛选；reset · 重置',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { topic: "all", query: "", tasks: [{ id: 1, title: "Python 阅读", topic: "Python" }, { id: 2, title: "Python 练习", topic: "Python" }, { id: 3, title: "React 练习", topic: "React" }], visible: [] },\n  onLoad() { this.updateFilter("all", "") },\n  updateFilter(topic, query) {\n    const keyword = query.trim()\n    const visible = this.data.tasks.filter(task => (topic === "all" || task.topic === topic) && task.title.includes(keyword))\n    this.setData({ topic, query, visible })\n  },\n  onTopic(event) { this.updateFilter(event.currentTarget.dataset.topic, this.data.query) },\n  onInput(event) { this.updateFilter(this.data.topic, event.detail.value) },\n  reset() { this.updateFilter("all", "") }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）提供 topic（主题）、query（查询）、tasks（任务列表）和 visible（可见列表）；all（全部）为初始主题，id（编号）、title（标题）、topic（主题）为字段；Python 和 React 是示例主题。','onLoad（页面加载）调用 this（当前页面）的 updateFilter（更新筛选），使用 all（全部）和空关键词。','updateFilter（更新筛选）接收 topic（主题）和 query（查询文字）。','const（声明）创建 keyword（关键词），query（查询文字）经 trim（去除首尾空格）得到。','const（声明）创建 visible（可见列表），this（当前页面）的 data（数据）中 tasks（任务列表）通过 filter（筛选）检查 task（任务）：topic（主题）为 all（全部）或 task.topic（任务主题）与 topic 相同，并且 title（标题）includes（包含）keyword（关键词）。','this（当前页面）的 setData（更新页面数据）设置 topic（主题）、query（查询文字）和 visible（可见列表）。','结束 updateFilter（更新筛选）方法。','onTopic（主题点击）接收 event（事件），用 this（当前页面）的 updateFilter（更新筛选）处理 event 的 currentTarget（当前绑定元素）的 dataset（数据集合）中 topic（主题），保留 data（数据）中的 query（查询文字）。','onInput（输入处理）接收 event（事件），用 this（当前页面）的 updateFilter（更新筛选）保留 data（数据）中的 topic（主题），读取 event 的 detail（详情）里的 value（输入值）。','reset（重置）用 this（当前页面）的 updateFilter（更新筛选）恢复 all（全部）和空关键词。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<button data-topic="all" bindtap="onTopic">全部</button>\n<button data-topic="Python" bindtap="onTopic">Python</button>\n<button data-topic="React" bindtap="onTopic">React</button>\n<input value="{{query}}" bindinput="onInput" placeholder="搜索任务" />\n<button bindtap="reset">重置</button>\n<view wx:if="{{visible.length === 0}}">没有匹配任务</view>\n<view wx:for="{{visible}}" wx:key="id">{{item.title}}</view>',notes:['button（按钮）用 data-topic（主题数据）传递 all（全部），bindtap（绑定点击）调用 onTopic（主题点击）。','button（按钮）用 data-topic（主题数据）传递 Python（示例主题），bindtap（绑定点击）调用 onTopic（主题点击）。','button（按钮）用 data-topic（主题数据）传递 React（示例主题），bindtap（绑定点击）调用 onTopic（主题点击）。','input（输入框）的 value（值）绑定 query（查询文字），bindinput（绑定输入）调用 onInput（输入处理），placeholder（占位提示）说明输入内容。','button（按钮）的 bindtap（绑定点击）调用 reset（重置）。','view（视图容器）的 wx:if（条件渲染）检查 visible（可见列表）的 length（长度）是否为 0。','view（视图容器）的 wx:for（循环）遍历 visible（可见列表），wx:key（标识）使用 id（编号），显示 item（当前项）的 title（标题）。']}
 ]}

,
 {id:'wx-persist-tasks',title:'保存本地任务列表',subtitle:'检查数据后添加并保存',explain:'页面加载时读取本地任务，检查格式后允许添加。输入去掉首尾空格并拒绝空白与重复；格式错误、标题首尾带空格或读取失败时不覆盖原数据。示例不连接服务器。',output:'界面示意：首次显示“暂无任务”；添加“阅读”后显示该任务，重新打开页面时读取本地记录。',question:'本地数据格式异常时为什么不能直接添加？',options:['避免覆盖无法识别的原数据','自动同步到云端','数据已经修复'],answer:0,explanation:'数据格式异常时保留原存储，提示用户；实际产品还需要提供恢复和备份方式。',vocab:'storage · 存储；tasks · 任务；valid · 有效；input · 输入；load · 加载',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { text: "", tasks: [], valid: false, message: "" },\n  onLoad() {\n    try {\n      const saved = wx.getStorageSync("study_tasks")\n      const tasks = saved === "" ? [] : saved\n      if (!Array.isArray(tasks) || !tasks.every(item => typeof item === "string" && item.trim() && item === item.trim())) {\n        this.setData({ tasks: [], valid: false, message: "本地数据无效，无法添加" })\n        return\n      }\n      if (new Set(tasks).size !== tasks.length) {\n        this.setData({ tasks: [], valid: false, message: "本地数据无效，无法添加" })\n        return\n      }\n      this.setData({ tasks, valid: true, message: "" })\n    } catch (error) {\n      this.setData({ tasks: [], valid: false, message: "读取失败，无法添加" })\n    }\n  },\n  onInput(event) { this.setData({ text: event.detail.value }) },\n  addTask() {\n    if (!this.data.valid) return\n    const title = this.data.text.trim()\n    if (!title) { this.setData({ message: "请输入任务" }); return }\n    if (this.data.tasks.includes(title)) { this.setData({ message: "任务已存在" }); return }\n    const tasks = [...this.data.tasks, title]\n    try {\n      wx.setStorageSync("study_tasks", tasks)\n      this.setData({ tasks, text: "", message: "已添加" })\n    } catch (error) {\n      this.setData({ message: "保存失败" })\n    }\n  }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）包含 text（输入文字）、tasks（任务列表）、valid（数据有效标记）和 message（提示信息）；false（假）表示尚未确认有效。','onLoad（页面加载时）定义读取方法。','try（尝试）开始可能失败的读取操作。','const（声明）创建 saved（已保存数据），wx（微信小程序接口）的 getStorageSync（同步读取本地存储）读取 study_tasks（学习任务）键。','const（声明）创建 tasks（任务列表），saved（已保存数据）为空字符串时视作没有记录，使用空数组。','if（如果）Array（数组工具）的 isArray（是否为数组）检查 tasks（任务列表）失败，或者 every（每项满足）检查 item（当前项）的 typeof（查看类型）不是 string（字符串）、trim（去除首尾空格）后为空或 item（当前项）与整理后的值不同。','this（当前页面）的 setData（更新页面数据）清空 tasks（任务列表）、将 valid（数据有效标记）设为 false（假）并设置 message（提示信息）。','return（返回）结束读取方法。','右花括号结束 if（如果）分支。','if（如果）new（新建）Set（集合）处理 tasks（任务列表）后的 size（数量）与 tasks 的 length（长度）不同，说明存在重复。','this（当前页面）的 setData（更新页面数据）清空 tasks（任务列表）、将 valid（数据有效标记）设为 false（假）并设置 message（提示信息）。','return（返回）结束读取方法。','右花括号结束 if（如果）分支。','this（当前页面）的 setData（更新页面数据）设置 tasks（任务列表）、valid（数据有效标记）为 true（真）并清空 message（提示信息）。','catch（捕获）接收 error（错误对象），处理读取失败。','this（当前页面）的 setData（更新页面数据）清空 tasks（任务列表）、将 valid（数据有效标记）设为 false（假）并设置 message（提示信息）。','右花括号结束 catch（捕获）分支。','结束 onLoad（页面加载时）方法。','onInput（输入处理方法）接收 event（事件），this（当前页面）的 setData（更新页面数据）将 event 的 detail（详情）中的 value（输入值）存入 text（输入文字）。','addTask（添加任务）处理按钮点击。','if（如果）this（当前页面）的 data（页面数据）中 valid（数据有效标记）为假，return（返回）结束方法。','const（声明）创建 title（标题），this（当前页面）的 data（页面数据）中的 text（输入文字）经 trim（去除首尾空格）处理。','if（如果）title（标题）为空，this（当前页面）的 setData（更新页面数据）设置 message（提示信息），return（返回）结束方法。','if（如果）this（当前页面）的 data（页面数据）中的 tasks（任务列表）用 includes（包含）发现 title（标题）重复，setData（更新页面数据）设置 message（提示信息），return（返回）结束方法。','const（声明）创建 tasks（新任务列表），展开 this（当前页面）的 data（页面数据）中 tasks（任务列表）并加入 title（标题）。','try（尝试）开始可能失败的写入操作。','wx（微信小程序接口）的 setStorageSync（同步写入本地存储）将 tasks（任务列表）保存到 study_tasks（学习任务）键。','this（当前页面）的 setData（更新页面数据）设置 tasks（任务列表），清空 text（输入文字）并设置 message（提示信息）。','catch（捕获）接收 error（错误对象），处理保存失败。','this（当前页面）的 setData（更新页面数据）设置 message（提示信息）为保存失败。','右花括号结束 catch（捕获）分支。','结束 addTask（添加任务）方法。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<input value="{{text}}" bindinput="onInput" placeholder="输入任务" />\n<button bindtap="addTask" disabled="{{!valid}}">添加</button>\n<view>{{message}}</view>\n<view wx:if="{{valid && tasks.length === 0}}">暂无任务</view>\n<view wx:for="{{tasks}}" wx:key="*this">{{item}}</view>',notes:['input（输入框）的 value（值）绑定 text（输入文字），bindinput（绑定输入事件）调用 onInput（输入处理方法），placeholder（占位提示）说明输入内容。','button（按钮）的 bindtap（绑定点击事件）调用 addTask（添加任务），disabled（禁用状态）在 valid（数据有效标记）为假时启用。','view（视图容器）显示 message（提示信息）。','view（视图容器）的 wx:if（条件渲染）检查 valid（数据有效标记）为真且 tasks（任务列表）的 length（长度）为零时显示提示。','view（视图容器）的 wx:for（循环）遍历 tasks（任务列表），wx:key（列表项标识）使用 this（当前值），item（当前项）显示标题。']}
 ],notice:'这是小程序页面片段，存储仅限当前设备；真实行为需在微信开发者工具或设备中验证。',guide:['先读取并检查数据，再看添加时如何先写入成功、再更新界面。','此例处理少量不重复的字符串；实际应用需要数据迁移、恢复和规模限制。']}

,
 {id:'wx-task-pages',title:'分页浏览学习任务',subtitle:'更新页码与首末页按钮状态',explain:'每页显示两条本地固定任务。上一页和下一页按钮在边界禁用；页面方法也检查边界，空列表显示提示。示例不请求服务器。',output:'界面示意：初始显示阅读、复习；点击下一页显示练习。',question:'为什么已经在最后一页时不能继续翻页？',options:['按钮禁用且页面方法检查边界','任务被永久删除','服务器关闭了连接'],answer:0,explanation:'next 会检查当前页是否小于总页数；按钮也根据相同边界禁用。',vocab:'page · 页码；size · 每页数量；total · 总数；visible · 可见；previous · 上一页；next · 下一页',blocks:[
  {label:'页面逻辑 · index.js',language:'JavaScript',commentPrefix:'//',code:'Page({\n  data: { page: 1, size: 2, totalPages: 1, tasks: [{ id: 1, title: "阅读" }, { id: 2, title: "复习" }, { id: 3, title: "练习" }], visible: [] },\n  onLoad() { this.showPage(1) },\n  showPage(page) {\n    const totalPages = Math.max(1, Math.ceil(this.data.tasks.length / this.data.size))\n    const current = Math.max(1, Math.min(page, totalPages))\n    const start = (current - 1) * this.data.size\n    const visible = this.data.tasks.slice(start, start + this.data.size)\n    this.setData({ page: current, totalPages, visible })\n  },\n  previous() { if (this.data.page > 1) this.showPage(this.data.page - 1) },\n  next() { if (this.data.page < this.data.totalPages) this.showPage(this.data.page + 1) }\n})',notes:['Page（注册页面）接收页面配置。','data（页面数据）提供 page（页码）、size（每页数量）、totalPages（总页数）、tasks（任务列表）和 visible（可见列表）；id（编号）与 title（标题）描述任务。','onLoad（页面加载）调用 this（当前页面）的 showPage（显示分页），打开第 1 页。','showPage（显示分页）接收 page（目标页码）。','const（声明）创建 totalPages（总页数），Math（数学工具）的 ceil（向上取整）计算 this（当前页面）的 data（数据）中 tasks（任务列表）的 length（长度）除以 size（每页数量）；Math 的 max（较大值）保证至少一页。','const（声明）创建 current（当前页），Math（数学工具）的 min（较小值）和 max（较大值）将 page（目标页码）限制在 1 到 totalPages（总页数）。','const（声明）创建 start（起始索引），由 current（当前页）和 this（当前页面）的 data（数据）中 size（每页数量）计算。','const（声明）创建 visible（可见列表），this（当前页面）的 data（数据）中 tasks（任务列表）通过 slice（切片）读取从 start（起始索引）到 start 加 size（每页数量）之前的项目。','this（当前页面）的 setData（更新页面数据）将 page（页码）设为 current（当前页），并设置 totalPages（总页数）与 visible（可见列表）。','结束 showPage（显示分页）方法。','previous（上一页）在 if（如果）this（当前页面）的 data（数据）中 page（页码）大于 1 时，调用 showPage（显示分页）显示上一页。','next（下一页）在 if（如果）this（当前页面）的 data（数据）中 page（页码）小于 totalPages（总页数）时，调用 showPage（显示分页）显示下一页。','结束 Page（注册页面）的配置。']},
  {label:'页面结构 · index.wxml',language:'WXML',commentPrefix:'<!--',commentSuffix:' -->',code:'<view wx:if="{{visible.length === 0}}">暂无任务</view>\n<view wx:for="{{visible}}" wx:key="id">{{item.title}}</view>\n<view>第 {{page}} / {{totalPages}} 页</view>\n<button bindtap="previous" disabled="{{page === 1}}">上一页</button>\n<button bindtap="next" disabled="{{page === totalPages}}">下一页</button>',notes:['view（视图容器）的 wx:if（条件渲染）检查 visible（可见列表）的 length（长度）是否为 0。','view（视图容器）用 wx:for（循环）遍历 visible（可见列表），wx:key（标识）使用 id（编号），显示 item（当前项）的 title（标题）。','view（视图容器）显示 page（页码）和 totalPages（总页数）。','button（按钮）的 bindtap（绑定点击）调用 previous（上一页），disabled（禁用）在 page（页码）为 1 时启用。','button（按钮）的 bindtap（绑定点击）调用 next（下一页），disabled（禁用）在 page（页码）等于 totalPages（总页数）时启用。']}
 ],guide:['点击下一页和上一页，观察列表与按钮状态。','空列表按第 1 / 1 页显示；任务数量发生变化时应重新调用 showPage 更新显示。示例没有实现服务端分页。']}
];
