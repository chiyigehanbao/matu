export const javaAdvanced = [
  {
    "id": "java-interface",
    "title": "接口：约定可以做什么",
    "subtitle": "把行为约定和实现分开",
    "explain": "接口可以描述类需要提供的方法。实现类使用 implements 表示实现该接口，并提供方法实现。",
    "code": "public class Main {\n    interface Greeter {\n        String greet(String name);\n    }\n    static class Welcome implements Greeter {\n        public String greet(String name) {\n            return \"你好，\" + name;\n        }\n    }\n    public static void main(String[] args) {\n        Greeter greeter = new Welcome();\n        System.out.println(greeter.greet(\"小明\"));\n    }\n}",
    "output": "你好，小明",
    "question": "implements Greeter 表示什么？",
    "options": [
      "类实现 Greeter 接口",
      "自动建立网络连接",
      "创建数据库表"
    ],
    "answer": 0,
    "explanation": "Welcome 声明实现 Greeter，并提供接口要求的 greet 方法。",
    "vocab": "interface · 接口；implements · 实现",
    "notes": [
      "public（公开）class（类）定义 Main（主程序）类。",
      "interface（接口）定义 Greeter（问候者）接口。",
      "String（字符串）返回类型的 greet（问候）方法接收 String（字符串）类型的 name（名字）。",
      "右花括号结束 Greeter（问候者）接口。",
      "static（属于外层类）class（类）定义 Welcome（欢迎），implements（实现）Greeter（问候者）接口。",
      "public（公开）String（字符串）定义 greet（问候）方法，接收 String（字符串）类型的 name（名字）。",
      "return（返回）把问候文字和 name（名字）连接后的结果交回去。",
      "右花括号结束 greet（问候）方法。",
      "右花括号结束 Welcome（欢迎）类。",
      "public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。",
      "Greeter（问候者接口）变量 greeter（问候者）通过 new（新建）Welcome（欢迎实现）创建对象。",
      "System（系统）的 out（标准输出）的 println（打印并换行）显示 greeter（问候者）调用 greet（问候）传入“小明”的结果。",
      "右花括号结束 main（主入口）方法。",
      "右花括号结束 Main（主程序）类。"
    ],
    "language": "Java",
    "commentPrefix": "//",
    "guide": [
      "接口可以描述类需要提供的方法。实现类使用 implements 表示实现该接口，并提供方法实现。",
      "Welcome 声明实现 Greeter，并提供接口要求的 greet 方法。"
    ],
    "advanced": true
  },
  {
    "id": "java-inheritance",
    "title": "继承与方法重写",
    "subtitle": "让子类提供自己的行为",
    "explain": "子类可以继承父类，并重写允许重写的实例方法。@Override 帮助编译器检查重写关系。",
    "code": "public class Main {\n    static class Animal {\n        String speak() { return \"声音\"; }\n    }\n    static class Dog extends Animal {\n        @Override\n        String speak() { return \"汪\"; }\n    }\n    public static void main(String[] args) {\n        Animal pet = new Dog();\n        System.out.println(pet.speak());\n    }\n}",
    "output": "汪",
    "question": "pet.speak() 调用哪个实现？",
    "options": [
      "Dog 重写后的实现",
      "永远调用 Animal 的实现",
      "自动访问网络"
    ],
    "answer": 0,
    "explanation": "pet 指向 Dog 对象，动态分派调用 Dog 重写的 speak。",
    "vocab": "extends · 继承；override · 重写",
    "notes": [
      "public（公开）class（类）定义 Main（主程序）类。",
      "static（属于外层类）class（类）定义 Animal（动物）父类。",
      "String（字符串）类型的 speak（发声）方法用 return（返回）交回“声音”。",
      "右花括号结束 Animal（动物）父类。",
      "static（属于外层类）class（类）定义 Dog（狗）子类，extends（继承）Animal（动物）。",
      "@Override（重写标记）表示下面的方法重写父类方法。",
      "String（字符串）类型的 speak（发声）方法用 return（返回）交回“汪”。",
      "右花括号结束 Dog（狗）子类。",
      "public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。",
      "Animal（动物类型）变量 pet（宠物）通过 new（新建）Dog（狗）对象赋值。",
      "System（系统）的 out（标准输出）的 println（打印并换行）显示 pet（宠物）调用 speak（发声）的结果。",
      "右花括号结束 main（主入口）方法。",
      "右花括号结束 Main（主程序）类。"
    ],
    "language": "Java",
    "commentPrefix": "//",
    "guide": [
      "子类可以继承父类，并重写允许重写的实例方法。@Override 帮助编译器检查重写关系。",
      "pet 指向 Dog 对象，动态分派调用 Dog 重写的 speak。"
    ],
    "advanced": true
  },
  {
    "id": "java-map",
    "title": "Map：按键查找值",
    "subtitle": "保存一组键值对",
    "explain": "Map 用键关联值。示例将名字存到内存中的 HashMap，再通过键查找；没有数据库操作。",
    "code": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, String> profile = new HashMap<>();\n        profile.put(\"name\", \"小明\");\n        System.out.println(profile.get(\"name\"));\n    }\n}",
    "output": "小明",
    "question": "get(\"name\") 通过什么查找？",
    "options": [
      "键 name",
      "列表中的随机位置",
      "手机号码"
    ],
    "answer": 0,
    "explanation": "Map 的 get 根据键 name 查找对应的值。",
    "vocab": "map · 映射；key · 键",
    "notes": [
      "import（导入）java（Java 标准库）中 util（工具包）的 HashMap（哈希映射实现）。",
      "import（导入）java（Java 标准库）中 util（工具包）的 Map（映射接口）。",
      "public（公开）class（类）定义 Main（主程序）类。",
      "public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。",
      "Map（映射接口）使用 String（字符串）作为键和值的类型；profile（资料）通过 new（新建）HashMap（哈希映射）创建。",
      "profile（资料）的 put（放入）将 name（名字）作为键，“小明”作为值。",
      "System（系统）的 out（标准输出）的 println（打印并换行）显示 profile（资料）通过 get（获取）查找 name（名字）键得到的值。",
      "右花括号结束 main（主入口）方法。",
      "右花括号结束 Main（主程序）类。"
    ],
    "language": "Java",
    "commentPrefix": "//",
    "guide": [
      "Map 用键关联值。示例将名字存到内存中的 HashMap，再通过键查找；没有数据库操作。",
      "Map 的 get 根据键 name 查找对应的值。"
    ],
    "advanced": true
  },
  {
    "id": "java-null",
    "title": "处理可能为空的引用",
    "subtitle": "在使用前先做判断",
    "explain": "Java 中引用变量可以是 null。尝试对 null 调用实例方法会导致 NullPointerException；示例先判断再使用。",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String name = null;\n        if (name == null) {\n            System.out.println(\"未填写\");\n        } else {\n            System.out.println(name);\n        }\n    }\n}",
    "output": "未填写",
    "question": "name 为 null 时执行哪个分支？",
    "options": [
      "if 分支",
      "else 分支",
      "一定访问数据库"
    ],
    "answer": 0,
    "explanation": "条件 name == null 成立，因此执行 if 分支。",
    "vocab": "null · 空引用；if · 如果",
    "notes": [
      "public（公开）class（类）定义 Main（主程序）类。",
      "public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。",
      "String（字符串类型）变量 name（名字）为 null（空引用）。",
      "if（如果）name（名字）等于 null（空引用），执行当前分支。",
      "System（系统）的 out（标准输出）的 println（打印并换行）显示“未填写”。",
      "else（否则）表示 name 不为空时执行另一分支。",
      "System（系统）的 out（标准输出）的 println（打印并换行）显示 name（名字）。",
      "右花括号结束 else（否则）分支。",
      "右花括号结束 main（主入口）方法。",
      "右花括号结束 Main（主程序）类。"
    ],
    "language": "Java",
    "commentPrefix": "//",
    "guide": [
      "Java 中引用变量可以是 null。尝试对 null 调用实例方法会导致 NullPointerException；示例先判断再使用。",
      "条件 name == null 成立，因此执行 if 分支。"
    ],
    "advanced": true
  }
,
  {
    id:'java-topic-count', title:'统计学习主题出现的次数', subtitle:'用 Map 保存计数，并处理空列表',
    explain:'把每条学习记录中的主题作为键，次数作为值。TreeMap 会按键的自然顺序排列，方便得到稳定的展示顺序；本例只处理内存数据。',
    code:'import java.util.List;\nimport java.util.Map;\nimport java.util.TreeMap;\n\npublic class Main {\n    static void showCounts(List<String> topics) {\n        Map<String, Integer> counts = new TreeMap<>();\n        for (String topic : topics) {\n            counts.put(topic, counts.getOrDefault(topic, 0) + 1);\n        }\n        if (counts.isEmpty()) {\n            System.out.println("暂无记录");\n            return;\n        }\n        counts.forEach((topic, count) -> System.out.println(topic + "：" + count));\n    }\n    public static void main(String[] args) {\n        showCounts(List.of("Java", "Python", "Java"));\n        showCounts(List.of());\n    }\n}',
    output:'Java：2\nPython：1\n暂无记录', question:'getOrDefault(topic, 0) 的作用是什么？',options:['没有这个主题时先使用 0','删除已有记录','从网络读取次数'],answer:0,
    explanation:'第一次遇到主题时默认次数为 0，然后加 1；后续遇到同一主题时读取已有次数再加 1。',vocab:'topic · 主题；count · 次数；map · 键值映射',
    notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（键值映射接口）。','import（导入）java（Java 标准库）的 util（工具包）中的 TreeMap（按键排序的映射）。','public（公开）class（类）定义 Main（主程序）类。','static（属于类）void（无返回值）定义 showCounts（显示统计）方法，接收 List（列表），元素是 String（字符串），topics（主题列表）是参数。','Map（键值映射）以 String（字符串）为键、Integer（整数对象）为值；counts（次数映射）用 new（新建）TreeMap（按键排序的映射）创建。','for（循环）依次从 topics（主题列表）取出 String（字符串）类型的 topic（当前主题）。','counts（次数映射）通过 put（放入）更新 topic（当前主题）：getOrDefault（获取值或默认值）在没有该键时取 0，再加 1。','右花括号结束 for（循环）。','if（如果）counts（次数映射）的 isEmpty（是否为空）为真，则执行空列表分支。','System（系统）的 out（标准输出）的 println（打印并换行）显示“暂无记录”。','return（返回）结束 showCounts（显示统计）方法。','右花括号结束 if（如果）分支。','counts（次数映射）的 forEach（逐项处理）依次取得 topic（主题）和 count（次数），通过 System（系统）的 out（标准输出）的 println（打印并换行）显示。','右花括号结束 showCounts（显示统计）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','showCounts（显示统计）接收 List（列表）的 of（创建列表）生成的三个主题：Java 与 Python 是示例主题。','showCounts（显示统计）接收 List（列表）的 of（创建列表）生成的空列表。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
    language:'Java',commentPrefix:'//',guide:['学习记录可以先在内存中按主题计数，再按主题顺序展示。','空列表没有任何键，因此显示暂无记录；这里没有读写数据库。'],advanced:true
  }
,
 {
  id:'java-title-validation',title:'检查课程标题',subtitle:'处理空值、空白和有效文字',
  explain:'输入的标题可能是 null、只有空格或正常文字。示例先检查 null 和空白，再去除首尾空格；这些数据仅在内存中处理。',
  code:'public class Main {\n    static String describeTitle(String title) {\n        if (title == null || title.isBlank()) {\n            return "请输入标题";\n        }\n        return "标题：" + title.strip();\n    }\n    public static void main(String[] args) {\n        System.out.println(describeTitle("  阅读  "));\n        System.out.println(describeTitle("   "));\n        System.out.println(describeTitle(null));\n    }\n}',
  output:'标题：阅读\n请输入标题\n请输入标题',question:'为什么先检查 title == null？',options:['避免对 null 调用 isBlank','自动生成标题','让空格变成数字'],answer:0,
  explanation:'|| 从左到右短路求值；title 为 null 时不会继续调用 title.isBlank()。',vocab:'title · 标题；blank · 空白；strip · 去除首尾空白',
  notes:['public（公开）class（类）定义 Main（主程序）。','static（属于类）String（字符串）定义 describeTitle（描述标题）方法，接收 String（字符串）title（标题）。','if（如果）title（标题）等于 null（空引用）或 title 的 isBlank（是否为空白）成立，则进入提示分支；|| 表示或。','return（返回）文字“请输入标题”。','右花括号结束 if（如果）分支。','return（返回）“标题：”与 title（标题）调用 strip（去除首尾空白）的结果。','右花括号结束 describeTitle（描述标题）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','System（系统）的 out（标准输出）的 println（打印并换行）显示 describeTitle（描述标题）对带空格文字的处理结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 describeTitle（描述标题）对纯空格的处理结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 describeTitle（描述标题）对 null（空引用）的处理结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['空引用无法调用实例方法，因此先检查 null。','isBlank 判断空字符串或仅包含空白字符的字符串；strip 去除首尾空白。'],advanced:true
 }
,
 {
  id:'java-sort-copy',title:'排序副本并保留原列表',subtitle:'复制数字列表，再按升序排列',
  explain:'List.of 创建不可修改的列表。示例用 ArrayList 创建可修改副本，再对副本排序；原列表保持原来的顺序。',
  code:'import java.util.ArrayList;\nimport java.util.Comparator;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> minutes = List.of(10, 2, 30);\n        List<Integer> sorted = new ArrayList<>(minutes);\n        sorted.sort(Comparator.naturalOrder());\n        System.out.println(sorted);\n        System.out.println(minutes);\n    }\n}',
  output:'[2, 10, 30]\n[10, 2, 30]',question:'排序后 minutes 的顺序如何？',options:['保持 10、2、30','也变成 2、10、30','自动清空'],answer:0,
  explanation:'ArrayList 复制了元素，sort 操作针对 sorted 副本，不改变 minutes 的顺序。',vocab:'sort · 排序；minutes · 分钟数；copy · 副本',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 ArrayList（可变数组列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Comparator（比较器）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 Integer（整数对象）为元素类型；minutes（分钟数列表）由 List（列表）的 of（创建不可修改列表）得到。','List（列表）以 Integer（整数对象）为元素类型；sorted（排序副本）通过 new（新建）ArrayList（可变数组列表）复制 minutes（分钟数列表）。','sorted（排序副本）的 sort（排序）使用 Comparator（比较器）的 naturalOrder（自然升序）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 sorted（排序副本）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 minutes（原分钟数列表）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['List.of 返回的列表不能直接修改；ArrayList 构造方法创建一个可修改的新列表。','这是浅复制；示例元素是不可变整数对象，复杂对象的内部状态仍需单独考虑。'],advanced:true
 }
,
 {
  id:'java-filter-tasks',title:'筛选待完成任务',subtitle:'使用记录类型与流筛选',
  explain:'record 可以简洁地表示固定字段的数据；Stream 的 filter 根据条件筛选。示例从内存列表中选出未完成任务，没有数据库操作。',
  code:'import java.util.List;\n\npublic class Main {\n    record Task(String title, boolean done) {}\n    static void showPending(List<Task> tasks) {\n        List<Task> pending = tasks.stream().filter(task -> !task.done()).toList();\n        if (pending.isEmpty()) {\n            System.out.println("暂无待办");\n        } else {\n            for (Task task : pending) {\n                System.out.println(task.title());\n            }\n        }\n    }\n    public static void main(String[] args) {\n        showPending(List.of(new Task("阅读", true), new Task("复习", false)));\n        showPending(List.of(new Task("阅读", true)));\n    }\n}',
  output:'复习\n暂无待办',question:'筛选条件 !task.done() 保留什么？',options:['未完成任务','所有任务','已完成任务'],answer:0,
  explanation:'done 为 false 表示未完成，取反后条件为真，因此被保留。',vocab:'task · 任务；pending · 待完成；filter · 筛选',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','record（记录类型）定义 Task（任务），String（字符串）title（标题）和 boolean（布尔值）done（完成状态）为字段。','static（属于类）void（无返回值）定义 showPending（显示待办），接收 Task（任务）列表 List（列表）tasks（任务列表）。','List（列表）以 Task（任务）为元素类型；pending（待完成列表）通过 tasks（任务列表）的 stream（流）、filter（筛选）和 toList（收集为列表）得到，task（当前任务）的 done（完成状态）取反后为真时保留。','if（如果）pending（待完成列表）的 isEmpty（是否为空）为真，则显示提示。','System（系统）的 out（标准输出）的 println（打印并换行）显示“暂无待办”。','else（否则）处理有待办的情况。','for（循环）让 Task（任务）类型的 task（当前任务）依次取自 pending（待完成列表）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 task（当前任务）的 title（标题）。','右花括号结束 for（循环）。','右花括号结束 else（否则）分支。','右花括号结束 showPending（显示待办）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','showPending（显示待办）接收 List（列表）的 of（创建列表），其中 new（新建）Task（任务）使用 true（真）表示完成、false（假）表示未完成。','showPending（显示待办）接收 List（列表）的 of（创建列表），其中 new（新建）Task（任务）使用 true（真）表示完成。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['record 自动提供字段访问方法，例如 task.done() 和 task.title()。','filter 生成的结果没有待办时显示提示；原列表未被删除。'],advanced:true
 }
,
 {
  id:'java-any-all',title:'判断任务完成情况',subtitle:'用 anyMatch 和 allMatch 检查列表',
  explain:'anyMatch 判断是否至少有一项满足条件，allMatch 判断是否所有项都满足。空流的 allMatch 返回 true；是否视为“全部完成”需要业务判断。',
  code:'import java.util.List;\n\npublic class Main {\n    record Task(boolean done) {}\n    public static void main(String[] args) {\n        List<Task> tasks = List.of(new Task(true), new Task(false));\n        boolean hasPending = tasks.stream().anyMatch(task -> !task.done());\n        boolean allDone = tasks.stream().allMatch(task -> task.done());\n        List<Task> empty = List.of();\n        System.out.println("有待办：" + hasPending);\n        System.out.println("全部完成：" + allDone);\n        System.out.println("空列表全部满足：" + empty.stream().allMatch(task -> task.done()));\n    }\n}',
  output:'有待办：true\n全部完成：false\n空列表全部满足：true',question:'空列表的 allMatch 返回什么？',options:['true','false','自动创建任务'],answer:0,
  explanation:'空流没有违反条件的元素，allMatch 返回 true；需要至少一项时应另外检查列表是否为空。',vocab:'any · 任一；all · 全部；match · 匹配',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','record（记录类型）定义 Task（任务），boolean（布尔值）done（完成状态）是字段。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 Task（任务）为元素类型，tasks（任务列表）由 List（列表）的 of（创建列表）提供；new（新建）Task（任务），true（真）表示完成、false（假）表示未完成。','boolean（布尔值）hasPending（是否有待办）由 tasks（任务列表）的 stream（流）和 anyMatch（任一匹配）得到；task（当前任务）的 done（完成状态）取反。','boolean（布尔值）allDone（是否全部完成）由 tasks（任务列表）的 stream（流）和 allMatch（全部匹配）检查 task（当前任务）的 done（完成状态）。','List（列表）以 Task（任务）为元素类型，empty（空列表）由 List（列表）的 of（创建列表）提供。','System（系统）的 out（标准输出）的 println（打印并换行）显示 hasPending（是否有待办）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 allDone（是否全部完成）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 empty（空列表）的 stream（流）通过 allMatch（全部匹配）检查 task（当前任务）的 done（完成状态）的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['空流的 anyMatch 返回 false，allMatch 返回 true。','如果业务要求至少有一个任务，应先检查列表是否为空。'],advanced:true
 }
,
 {
  id:'java-find-task',title:'按编号查找任务',subtitle:'处理可能不存在的结果',
  explain:'流的 findFirst 返回 Optional，表示可能有结果，也可能没有。示例查找任务后读取标题；没有匹配项时显示备用文字。',
  code:'import java.util.List;\n\npublic class Main {\n    record Task(int id, String title) {}\n    static String findTitle(List<Task> tasks, int id) {\n        return tasks.stream().filter(task -> task.id() == id).map(task -> task.title()).findFirst().orElse("未找到");\n    }\n    public static void main(String[] args) {\n        List<Task> tasks = List.of(new Task(1, "阅读"), new Task(2, "复习"));\n        System.out.println(findTitle(tasks, 2));\n        System.out.println(findTitle(tasks, 9));\n    }\n}',
  output:'复习\n未找到',question:'没有找到编号 9 时 orElse 返回什么？',options:['未找到','自动创建任务','整个任务列表'],answer:0,
  explanation:'findFirst 没有结果时得到空 Optional，orElse 返回提供的备用文字。',vocab:'find · 查找；optional · 可选结果；title · 标题',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','record（记录类型）定义 Task（任务），int（整数）id（编号）和 String（字符串）title（标题）为字段。','static（属于类）String（字符串）定义 findTitle（查找标题），接收 Task（任务）的 List（列表）tasks（任务列表）和 int（整数）id（目标编号）。','return（返回）tasks（任务列表）的 stream（流）经 filter（筛选）比较 task（当前任务）的 id（编号），map（映射）取得 task 的 title（标题），findFirst（查找第一项）和 orElse（没有结果时使用默认值）处理后得到的文字。','右花括号结束 findTitle（查找标题）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 Task（任务）为元素类型，tasks（任务列表）由 List（列表）的 of（创建列表）提供，new（新建）Task（任务）对象。','System（系统）的 out（标准输出）的 println（打印并换行）显示 findTitle（查找标题）对 tasks（任务列表）和编号 2 的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 findTitle（查找标题）对 tasks（任务列表）和编号 9 的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['findFirst 返回 Optional，可以用 orElse 为没有匹配项的情况提供备用值。','示例只处理固定内存数据，没有连接数据库。'],advanced:true
 }
,
 {
  id:'java-sum-minutes',title:'汇总学习分钟数',subtitle:'统计空列表并使用长整数',
  explain:'方法接收整数分钟列表，用流将每项转成长整数后求和。空列表的和是 0；示例使用固定数据，不读取数据库。',
  code:'import java.util.List;\n\npublic class Main {\n    static long totalMinutes(List<Integer> minutes) {\n        return minutes.stream().mapToLong(value -> value.longValue()).sum();\n    }\n    public static void main(String[] args) {\n        System.out.println("总分钟：" + totalMinutes(List.of(20, 15)));\n        System.out.println("空列表：" + totalMinutes(List.of()));\n        System.out.println("大数：" + totalMinutes(List.of(1500000000, 1500000000)));\n    }\n}',
  output:'总分钟：35\n空列表：0\n大数：3000000000',question:'空列表的分钟总和是多少？',options:['0','自动报错','从服务器读取'],answer:0,
  explanation:'空的 LongStream 调用 sum 得到 0；转换为 long 后求和能容纳示例中超过 int 范围的总数。',vocab:'total · 总计；minutes · 分钟数；sum · 求和；long · 长整数',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）long（长整数返回类型）定义 totalMinutes（汇总分钟数），接收元素为 Integer（整数对象）的 List（列表）minutes（分钟列表）。','return（返回）minutes（分钟列表）的 stream（流）通过 mapToLong（映射成长整数流）将 value（当前值）用 longValue（转成长整数）转换，再由 sum（求和）得到的结果。','右花括号结束 totalMinutes（汇总分钟数）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','System（系统）的 out（标准输出）的 println（打印并换行）显示 totalMinutes（汇总分钟数）对 List（列表）的 of（创建列表）所提供的两个数字的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 totalMinutes（汇总分钟数）对 List（列表）的 of（创建空列表）的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 totalMinutes（汇总分钟数）对 List（列表）的 of（创建列表）提供的大数的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先转为 long 再求和，避免这个例子中两个 int 相加时发生 int 溢出。','long 仍有范围限制；实际应用还应根据业务限制输入并考虑更大的总和。'],advanced:true
 }
,
 {
  id:'java-remove-copy',title:'在副本中删除指定任务',subtitle:'对比更新后的列表和原列表',
  explain:'方法先复制任务列表，再从副本中移除指定标题；原列表保持不变。示例只处理内存中的固定文字，不连接数据库。',
  code:'import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    static List<String> removeTask(List<String> tasks, String title) {\n        List<String> copy = new ArrayList<>(tasks);\n        copy.removeIf(task -> task.equals(title));\n        return copy;\n    }\n    public static void main(String[] args) {\n        List<String> tasks = List.of("阅读", "复习");\n        System.out.println("剩余：" + removeTask(tasks, "复习"));\n        System.out.println("原列表：" + tasks);\n        System.out.println("不存在时：" + removeTask(tasks, "练习"));\n    }\n}',
  output:'剩余：[阅读]\n原列表：[阅读, 复习]\n不存在时：[阅读, 复习]',question:'目标标题不存在时，副本中有几项？',options:['两项','零项','自动从服务器获取'],answer:0,
  explanation:'removeIf 没有匹配项时不会删除任何元素；它操作的是新建的 ArrayList，而不是原列表。',vocab:'remove · 移除；copy · 副本；list · 列表；equals · 相等',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 ArrayList（动态数组列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）List（列表）以 String（字符串）为元素类型，定义 removeTask（移除任务）；接收 List（列表）tasks（任务列表）和 String（字符串）title（目标标题）。','List（列表）以 String（字符串）为元素类型，copy（副本）通过 new（新建）ArrayList（动态数组列表）复制 tasks（任务列表）。','copy（副本）的 removeIf（移除满足条件的项）检查 task（当前任务）调用 equals（比较内容）与 title（目标标题）是否相等。','return（返回）copy（副本）。','右花括号结束 removeTask（移除任务）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，tasks（任务列表）由 List（列表）的 of（创建不可变列表）提供。','System（系统）的 out（标准输出）的 println（打印并换行）显示 removeTask（移除任务）对 tasks（任务列表）和“复习”的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 tasks（原任务列表）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 removeTask（移除任务）对 tasks（任务列表）和不存在的“练习”的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['List.of 创建的列表不能直接修改；这里先用 ArrayList 创建可修改的副本。','列表复制是浅复制；若元素是可变对象，原列表和副本仍可能引用同一对象。'],advanced:true
 }
,
 {
  id:'java-topic-minutes',title:'按主题汇总学习时间',subtitle:'使用 Map.merge 累加分钟数',
  explain:'示例遍历学习记录，把每个主题的分钟数累加到映射中，并按主题排序显示。数据只存在内存中，不连接数据库。',
  code:'import java.util.List;\nimport java.util.Map;\nimport java.util.TreeMap;\n\npublic class Main {\n    record StudyRecord(String topic, int minutes) {}\n    static void showSummary(List<StudyRecord> records) {\n        Map<String, Long> totals = new TreeMap<>();\n        for (StudyRecord record : records) {\n            totals.merge(record.topic(), (long) record.minutes(), Long::sum);\n        }\n        if (totals.isEmpty()) System.out.println("暂无记录");\n        totals.forEach((topic, total) -> System.out.println(topic + "：" + total));\n    }\n    public static void main(String[] args) {\n        List<StudyRecord> records = List.of(new StudyRecord("Python", 20), new StudyRecord("Java", 10), new StudyRecord("Python", 15));\n        showSummary(records);\n        showSummary(List.of());\n    }\n}',
  output:'Java：10\nPython：35\n暂无记录',question:'同一主题再次出现时 merge 做什么？',options:['把已有总数和新分钟数相加','自动删除原记录','向服务器发送数据'],answer:0,
  explanation:'主题首次出现时保存分钟数；已有该主题时，Long::sum 将已有值与新值相加。',vocab:'merge · 合并；topic · 主题；minutes · 分钟数；total · 总计',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射接口）。','import（导入）java（Java 标准库）的 util（工具包）中的 TreeMap（按键排序的映射）。','public（公开）class（类）定义 Main（主程序）。','record（记录类型）定义 StudyRecord（学习记录），String（字符串）topic（主题）和 int（整数）minutes（分钟数）为字段。','static（属于类）void（无返回值）定义 showSummary（显示汇总），接收 List（列表）的 StudyRecord（学习记录）元素组成的 records（记录列表）。','Map（映射）以 String（字符串）为键、Long（长整数对象）为值，totals（总计映射）通过 new（新建）TreeMap（按键排序的映射）创建。','for（循环）让 StudyRecord（学习记录）类型的 record（当前记录）依次取自 records（记录列表）。','totals（总计映射）的 merge（合并）以 record（当前记录）的 topic（主题）为键，将 record 的 minutes（分钟数）转换为 long（长整数），已有值时使用 Long（长整数工具）的 sum（求和）相加。','右花括号结束 for（循环）。','if（如果）totals（总计映射）的 isEmpty（是否为空）为真，System（系统）的 out（标准输出）的 println（打印并换行）显示提示。','totals（总计映射）的 forEach（逐项处理）让 topic（主题）和 total（总计）依次交给 System（系统）的 out（标准输出）的 println（打印并换行）显示。','右花括号结束 showSummary（显示汇总）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 StudyRecord（学习记录）为元素类型，records（记录列表）由 List（列表）的 of（创建列表）提供；new（新建）StudyRecord（学习记录），Python 和 Java 是示例主题。','showSummary（显示汇总）处理 records（记录列表）。','showSummary（显示汇总）处理 List（列表）的 of（创建空列表）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['TreeMap 按键排序；merge 在无对应值时插入，有值时调用合并函数。','示例转为 long 后累加；实际应用还需要检查输入范围和总数上限。'],advanced:true
 }
,
 {
  id:'java-reader-lines',title:'逐行读取学习记录',subtitle:'用 try-with-resources 管理读取器',
  explain:'示例使用内存文字模拟两行记录，用 BufferedReader 逐行读取。try-with-resources 在代码块结束时自动关闭读取器，不访问实际文件。',
  code:'import java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.StringReader;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        String text = String.join(System.lineSeparator(), "阅读", "复习");\n        try (BufferedReader reader = new BufferedReader(new StringReader(text))) {\n            String line;\n            int count = 0;\n            while ((line = reader.readLine()) != null) {\n                System.out.println(line);\n                count++;\n            }\n            System.out.println("共 " + count + " 行");\n        }\n    }\n}',
  output:'阅读\n复习\n共 2 行',question:'readLine 读到末尾时返回什么？',options:['null','自动重新开始','数据库地址'],answer:0,
  explanation:'readLine 到达末尾时返回 null，循环停止；读取器在 try 代码块结束时自动关闭。',vocab:'reader · 读取器；line · 行；count · 数量；resource · 资源',
  notes:['import（导入）java（Java 标准库）的 io（输入输出包）中的 BufferedReader（缓冲读取器）。','import（导入）java（Java 标准库）的 io（输入输出包）中的 IOException（输入输出异常）。','import（导入）java（Java 标准库）的 io（输入输出包）中的 StringReader（字符串读取器）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数，throws（声明可能抛出）IOException（输入输出异常）。','String（字符串）变量 text（文本）由 String（字符串工具）的 join（连接）结合 System（系统）的 lineSeparator（行分隔符）拼接两条文字。','try（尝试并管理资源）创建 BufferedReader（缓冲读取器）类型的 reader（读取器），new（新建）BufferedReader 包装 new StringReader（字符串读取器）读取 text（文本）。','String（字符串）变量 line（当前行）先声明，稍后赋值。','int（整数）变量 count（行数）初始化为 0。','while（当……时）将 reader（读取器）的 readLine（读取一行）结果赋给 line（当前行）；结果不等于 null（空值）时继续循环。','System（系统）的 out（标准输出）的 println（打印并换行）显示 line（当前行）。','count（行数）通过 ++ 增加 1。','右花括号结束 while（循环）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 count（行数）。','右花括号结束 try（资源管理）代码块，自动关闭 reader（读取器）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['readLine 不包含行结束符；返回 null 表示到达末尾。','本例使用 StringReader，不创建文件；真实文件读取还要处理编码和异常。'],advanced:true
 }
,
 {
  id:'java-resource-failure',title:'读取失败时释放资源',subtitle:'认识 catch、finally 与自动关闭',
  explain:'示例在资源管理代码块中模拟读取异常。读取器会自动关闭，catch 显示错误提示，finally 展示无论成功或失败都需要执行的后续步骤。',
  code:'import java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.StringReader;\n\npublic class Main {\n    public static void main(String[] args) {\n        try (BufferedReader reader = new BufferedReader(new StringReader(""))) {\n            throw new IOException("模拟失败");\n        } catch (IOException error) {\n            System.out.println("读取失败");\n        } finally {\n            System.out.println("清理完成");\n        }\n    }\n}',
  output:'读取失败\n清理完成',question:'发生异常后，finally 会怎样？',options:['执行后续清理步骤','自动忽略所有异常','连接数据库'],answer:0,
  explanation:'示例抛出的 IOException 由 catch 处理；资源自动关闭后执行 finally。',vocab:'catch · 捕获；finally · 最终；exception · 异常；resource · 资源',
  notes:['import（导入）java（Java 标准库）的 io（输入输出包）中的 BufferedReader（缓冲读取器）。','import（导入）java（Java 标准库）的 io（输入输出包）中的 IOException（输入输出异常）。','import（导入）java（Java 标准库）的 io（输入输出包）中的 StringReader（字符串读取器）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','try（尝试并管理资源）创建 BufferedReader（缓冲读取器）类型的 reader（读取器），new（新建）BufferedReader 包装 new StringReader（字符串读取器），读取空文字。','throw（抛出）new（新建）IOException（输入输出异常），模拟失败。','catch（捕获）IOException（输入输出异常），error（错误对象）保存异常。','System（系统）的 out（标准输出）的 println（打印并换行）显示失败提示。','finally（最终）开始异常处理后的后续代码块。','System（系统）的 out（标准输出）的 println（打印并换行）显示清理完成提示。','右花括号结束 finally（最终）代码块。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['try-with-resources 在离开资源代码块时自动关闭读取器，即使代码块抛出异常。','示例使用内存读取器并主动模拟错误；真实程序应根据具体异常决定如何提示或继续传播。'],advanced:true
 }
,
 {
  id:'java-unique-topics',title:'学习主题去重并保留顺序',subtitle:'用 LinkedHashSet 保留首次出现的位置',
  explain:'把学习主题放入 LinkedHashSet，可以去除重复元素并按插入顺序遍历；再转成新列表返回。原列表不会被修改，示例数据只在内存中。',
  code:'import java.util.ArrayList;\nimport java.util.LinkedHashSet;\nimport java.util.List;\n\npublic class Main {\n    static List<String> uniqueTopics(List<String> topics) {\n        return new ArrayList<>(new LinkedHashSet<>(topics));\n    }\n    public static void main(String[] args) {\n        List<String> topics = List.of("Java", "Python", "Java", "Kotlin");\n        System.out.println("去重：" + uniqueTopics(topics));\n        System.out.println("原列表：" + topics);\n        System.out.println("空列表：" + uniqueTopics(List.of()));\n    }\n}',
  output:'去重：[Java, Python, Kotlin]\n原列表：[Java, Python, Java, Kotlin]\n空列表：[]',question:'重复的 Java 出现在结果中的哪个位置？',options:['第一次出现的位置','自动排到最后','随机位置'],answer:0,
  explanation:'LinkedHashSet 使用元素的相等关系去重，并按插入顺序遍历；第一次插入的 Java 保留在前面。原列表不会被修改。',vocab:'unique · 唯一的；topics · 主题列表；set · 集合；linked · 链接的',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 ArrayList（动态数组列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 LinkedHashSet（保持插入顺序的集合）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）List（列表）以 String（字符串）为元素类型，定义 uniqueTopics（去重主题）；参数为 List（列表）的 String（字符串）元素组成的 topics（主题列表）。','return（返回）new（新建）ArrayList（动态数组列表）；其中 new LinkedHashSet（保持插入顺序的集合）先对 topics（主题列表）去重。','右花括号结束 uniqueTopics（去重主题）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，topics（主题列表）由 List（列表）的 of（创建列表）提供；Java、Python、Kotlin 是示例主题。','System（系统）的 out（标准输出）的 println（打印并换行）显示 uniqueTopics（去重主题）处理 topics（主题列表）的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示原 topics（主题列表）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 uniqueTopics（去重主题）处理 List（列表）的 of（创建空列表）的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先对比去重结果和原列表，注意 Java 在结果中只出现一次。','此例按字符串的相等关系去重，大小写不同的主题不会自动合并；如需忽略大小写，应先明确业务规则。'],advanced:true
 }
,
 {
  id:'java-duplicate-ids',title:'找出重复的任务编号',subtitle:'使用集合识别冲突并保留顺序',
  explain:'任务编号虽然都是整数，仍可能出现重复。示例使用集合记录已经见过的编号，并按首次发现重复的顺序列出冲突；空列表不会产生冲突。',
  code:'import java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.LinkedHashSet;\nimport java.util.List;\nimport java.util.Set;\n\npublic class Main {\n    static List<Integer> duplicateIds(List<Integer> ids) {\n        Set<Integer> seen = new HashSet<>();\n        Set<Integer> duplicates = new LinkedHashSet<>();\n        for (int id : ids) {\n            if (!seen.add(id)) duplicates.add(id);\n        }\n        return new ArrayList<>(duplicates);\n    }\n    public static void main(String[] args) {\n        System.out.println("重复：" + duplicateIds(List.of(1, 2, 2, 1, 2)));\n        System.out.println("无重复：" + duplicateIds(List.of(1, 2)));\n        System.out.println("空列表：" + duplicateIds(List.of()));\n    }\n}',
  output:'重复：[2, 1]\n无重复：[]\n空列表：[]',question:'编号 2 重复多次时结果中有几个 2？',options:['一个','两个','三个'],answer:0,
  explanation:'duplicates 是集合，同一个编号只保留一次；LinkedHashSet 按首次发现重复的顺序排列。',vocab:'duplicate · 重复；id · 编号；seen · 已见过；set · 集合；add · 添加',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 ArrayList（动态数组列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 HashSet（哈希集合）。','import（导入）java（Java 标准库）的 util（工具包）中的 LinkedHashSet（保持插入顺序的集合）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','import（导入）java（Java 标准库）的 util（工具包）中的 Set（集合接口）。','public（公开）class（类）定义 Main（主程序）类。','static（属于类）方法 duplicateIds（重复编号）接收 Integer（整数对象）组成的 List（列表）ids（编号列表），返回 Integer 组成的 List。','Set（集合）seen（已见编号）保存 Integer（整数对象），new（新建）HashSet（哈希集合）。','Set（集合）duplicates（重复编号）保存 Integer（整数对象），new（新建）LinkedHashSet（保持插入顺序的集合）。','for（循环）让 int（整数）id（当前编号）依次取自 ids（编号列表）。','if（如果）seen（已见编号）的 add（添加）返回 false（假），说明 id（编号）已存在，再向 duplicates（重复编号）add（添加）它。','右花括号结束 for（循环）。','return（返回）new（新建）ArrayList（动态数组列表），把 duplicates（重复编号集合）转成列表。','右花括号结束 duplicateIds（重复编号）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','System（系统）的 out（标准输出）的 println（打印并换行）显示 duplicateIds（重复编号）处理 List（列表）的 of（创建列表）提供的编号的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 duplicateIds（重复编号）处理 List（列表）的 of（创建列表）提供的不重复编号的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 duplicateIds（重复编号）处理 List（列表）的 of（创建空列表）的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先理解 add 返回 false 表示元素已存在，再观察两个集合各自保存什么。','本例检查内存中的整数编号；实际应用还需处理外部数据校验和持久化冲突。'],advanced:true
 }
,
 {
  id:'java-parse-minute-batch',title:'批量解析学习分钟数',subtitle:'逐项处理转换失败并汇总',
  explain:'示例遍历固定文字列表，尝试转换整数；负数和无法转换的文字计为无效，零被保留。每项单独捕获转换异常，因此一项失败不会中断后续处理。',
  code:'import java.util.List;\n\npublic class Main {\n    static void showSummary(List<String> inputs) {\n        int count = 0;\n        int invalid = 0;\n        long total = 0;\n        for (String input : inputs) {\n            try {\n                int minutes = Integer.parseInt(input.trim());\n                if (minutes < 0) {\n                    invalid++;\n                    continue;\n                }\n                count++;\n                total += minutes;\n            } catch (NumberFormatException error) {\n                invalid++;\n            }\n        }\n        System.out.println("有效：" + count + "，总分钟：" + total + "，无效：" + invalid);\n    }\n    public static void main(String[] args) {\n        showSummary(List.of(" 0 ", "25", "-1", "abc"));\n        showSummary(List.of());\n    }\n}',
  output:'有效：2，总分钟：25，无效：2\n有效：0，总分钟：0，无效：0',question:'文字 abc 转换失败后会怎样？',options:['无效数量增加，继续处理下一项','整个程序自动退出','自动上传服务器'],answer:0,
  explanation:'parseInt 抛出的 NumberFormatException 在循环内部捕获；异常不会中断整个列表的处理。',vocab:'parse · 解析；minutes · 分钟；count · 数量；invalid · 无效；total · 总计',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）void（无返回值）定义 showSummary（显示汇总），接收以 String（字符串）为元素类型的 List（列表）inputs（输入列表）。','int（整数）变量 count（有效数量）初始化为 0。','int（整数）变量 invalid（无效数量）初始化为 0。','long（长整数）变量 total（总分钟）初始化为 0。','for（循环）让 String（字符串）类型的 input（当前输入）依次取自 inputs（输入列表）。','try（尝试）开始处理可能失败的转换。','int（整数）变量 minutes（分钟数）由 Integer（整数工具）的 parseInt（解析整数）处理 input（当前输入）经 trim（去除首尾空格）得到的文字。','if（如果）minutes（分钟数）小于 0，进入无效分支。','invalid（无效数量）通过 ++ 加 1。','continue（继续下一轮）跳过当前项的后续计算。','右花括号结束 if（如果）分支。','count（有效数量）通过 ++ 加 1。','total（总分钟）加上 minutes（分钟数）。','catch（捕获）NumberFormatException（数字格式异常），error（错误对象）保存异常。','invalid（无效数量）通过 ++ 加 1。','右花括号结束 catch（捕获）分支。','右花括号结束 for（循环）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 count（有效数量）、total（总分钟）和 invalid（无效数量）。','右花括号结束 showSummary（显示汇总）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','showSummary（显示汇总）处理 List（列表）的 of（创建列表）提供的输入，abc 是无法转换的文字。','showSummary（显示汇总）处理 List（列表）的 of（创建空列表）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['单个非数字、整数超出范围或负数都计为无效；0 是有效值。','total 使用 long 可以容纳比单个 int 更大的总数；真实应用仍需限制输入数量与数值范围。'],advanced:true
 }
,
 {
  id:'java-partition-tasks',title:'按完成状态分组任务',subtitle:'用 partitioningBy 分成两组',
  explain:'示例将内存中的任务按完成状态分成两组，再分别统计数量。partitioningBy 返回 true 和 false 两组，即使输入列表为空也可以读取这两组。',
  code:'import java.util.List;\nimport java.util.Map;\nimport java.util.stream.Collectors;\n\npublic class Main {\n    record Task(String title, boolean done) {}\n    static Map<Boolean, List<Task>> partition(List<Task> tasks) {\n        return tasks.stream().collect(Collectors.partitioningBy(Task::done));\n    }\n    public static void main(String[] args) {\n        List<Task> tasks = List.of(new Task("阅读", true), new Task("复习", false), new Task("练习", false));\n        Map<Boolean, List<Task>> groups = partition(tasks);\n        System.out.println("已完成：" + groups.get(true).size());\n        System.out.println("待办：" + groups.get(false).size());\n        System.out.println("空列表待办：" + partition(List.of()).get(false).size());\n    }\n}',
  output:'已完成：1\n待办：2\n空列表待办：0',question:'空列表分区后的待办数量是多少？',options:['0','1','自动从服务器获取'],answer:0,
  explanation:'partitioningBy 创建 true 和 false 两组；空输入时两组都为空列表。',vocab:'partition · 分区；tasks · 任务；done · 完成；groups · 分组；size · 数量',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Map（映射）。','import（导入）java（Java 标准库）的 util（工具包）的 stream（流工具包）中的 Collectors（收集器工具）。','public（公开）class（类）定义 Main（主程序）。','record（记录类型）定义 Task（任务），String（字符串）title（标题）与 boolean（布尔值）done（完成状态）为字段。','static（属于类）Map（映射）以 Boolean（布尔对象）为键、以 Task（任务）为元素的 List（列表）为值；partition（分区）接收 Task（任务）的 List（列表）tasks（任务列表）。','return（返回）tasks（任务列表）的 stream（流）通过 collect（收集）使用 Collectors（收集器工具）的 partitioningBy（按条件分成两组），Task（任务）的 done（完成状态）方法引用提供判断。','右花括号结束 partition（分区）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 Task（任务）为元素类型，tasks（任务列表）由 List（列表）的 of（创建列表）提供三个 new（新建）Task（任务）；true（真）为已完成，false（假）为未完成。','Map（映射）以 Boolean（布尔对象）为键、Task（任务）的 List（列表）为值；groups（分组结果）由 partition（分区）处理 tasks（任务列表）得到。','System（系统）的 out（标准输出）的 println（打印并换行）显示 groups（分组结果）的 get（获取）true（真）组的 size（数量）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 groups（分组结果）的 get（获取）false（假）组的 size（数量）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 partition（分区）处理 List（列表）的 of（创建空列表）后，get（获取）false（假）组的 size（数量）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['true 组表示已完成，false 组表示待办；分别读取列表的数量。','示例只处理固定内存数据；实际项目还需考虑数据来源、空值及分页。'],advanced:true
 }
,
 {
  id:'java-check-unique-titles',title:'批量检查任务标题',subtitle:'去除空白并检查重复',
  explain:'逐项整理标题，用集合检查是否出现重复；空白标题或重复标题都会返回提示。示例只处理内存数据。',
  code:'import java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;\n\npublic class Main {\n    static String check(List<String> titles) {\n        Set<String> seen = new HashSet<>();\n        for (String title : titles) {\n            String clean = title.trim();\n            if (clean.isEmpty()) return "标题不能为空";\n            if (!seen.add(clean)) return "标题重复";\n        }\n        return "通过：" + seen.size();\n    }\n    public static void main(String[] args) {\n        System.out.println(check(List.of("阅读", "练习")));\n        System.out.println(check(List.of("阅读", " 阅读 ")));\n        System.out.println(check(List.of(" ")));\n    }\n}',
  output:'通过：2\n标题重复\n标题不能为空',question:'为什么“阅读”和“ 阅读 ”会被判为重复？',options:['去除首尾空格后相同','自动查询了数据库','所有标题都重复'],answer:0,
  explanation:'trim 去除首尾空格；集合 add 在元素已存在时返回 false。',vocab:'check · 检查；seen · 已见过；title · 标题；clean · 整理后的文字；size · 数量',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 HashSet（哈希集合）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Set（集合接口）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）String（字符串）定义 check（检查），接收 String（字符串）的 List（列表）titles（标题列表）。','Set（集合）以 String（字符串）为元素类型，seen（已见标题）通过 new（新建）HashSet（哈希集合）创建。','for（循环）让 String（字符串）类型的 title（当前标题）依次取自 titles（标题列表）。','String（字符串）变量 clean（整理后的标题）由 title（当前标题）的 trim（去除首尾空格）得到。','if（如果）clean（整理后的标题）的 isEmpty（是否为空）为真，return（返回）空标题提示。','if（如果）seen（已见标题）的 add（添加）clean（整理后的标题）返回假，return（返回）重复提示。','右花括号结束 for（循环）。','return（返回）通过提示与 seen（已见标题）的 size（数量）。','右花括号结束 check（检查）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','System（系统）的 out（标准输出）的 println（打印并换行）显示 check（检查）处理 List（列表）的 of（创建列表）提供的有效标题。','System（系统）的 out（标准输出）的 println（打印并换行）显示 check（检查）处理 List（列表）的 of（创建列表）提供的重复标题。','System（系统）的 out（标准输出）的 println（打印并换行）显示 check（检查）处理 List（列表）的 of（创建列表）提供的空白标题。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先整理每个标题，再检查空白和重复。','此例假设每项非 null，区分大小写；实际输入还需要明确空值和比较规则。'],advanced:true
 }
,
 {
  id:'java-title-position',title:'指出无效标题的位置',subtitle:'循环索引与空值检查',
  explain:'批量处理标题时，提示具体位置有助于定位问题。示例先检查空值，再检查去除首尾空白后的标题；发现第一处无效数据时返回从 1 开始的位置。',
  code:'import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    static String checkTitles(List<String> titles) {\n        for (int index = 0; index < titles.size(); index++) {\n            String title = titles.get(index);\n            if (title == null || title.strip().isEmpty()) return "第 " + (index + 1) + " 项标题无效";\n        }\n        return "通过：" + titles.size();\n    }\n    public static void main(String[] args) {\n        System.out.println(checkTitles(List.of("阅读", "练习")));\n        System.out.println(checkTitles(List.of("阅读", "  ")));\n        System.out.println(checkTitles(Arrays.asList(null, "练习")));\n    }\n}',
  output:'通过：2\n第 2 项标题无效\n第 1 项标题无效',question:'为什么检查 null 要放在调用 strip 之前？',options:['空值不能调用字符串方法','会自动写入数据库','可以改变列表顺序'],answer:0,
  explanation:'|| 会在左侧为真时跳过右侧，因此 title 为 null 时不会调用 strip；提示位置将索引加 1。',vocab:'title · 标题；index · 索引；null · 空值；strip · 去除首尾空白；check · 检查',
  notes:['import（导入）java.util（Java 工具包）的 Arrays（数组工具）。','import（导入）java.util（Java 工具包）的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）方法 checkTitles（检查标题）接收 String（字符串）组成的 List（列表）titles（标题列表），返回 String（字符串）。','for（循环）使用 int（整数）index（索引）从 0 开始，到 titles（标题列表）的 size（数量）之前逐项检查。','String（字符串）title（标题）由 titles（标题列表）的 get（读取）取得 index（索引）位置的值。','if（如果）title（标题）为 null（空值），或经过 strip（去除首尾空白）后 isEmpty（是否为空）为真，return（返回）包含 index（索引）加 1 的错误提示；|| 在左侧为真时跳过右侧。','右花括号结束 for（循环）。','return（返回）通过提示与 titles（标题列表）的 size（数量）。','右花括号结束 checkTitles（检查标题）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','System（系统）的 out（标准输出）的 println（打印并换行）显示 checkTitles（检查标题）处理 List（列表）的 of（创建列表）提供的有效标题的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 checkTitles（检查标题）处理 List（列表）的 of（创建列表）提供的空白标题的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 checkTitles（检查标题）处理 Arrays（数组工具）的 asList（转为列表）提供的 null（空值）和标题的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先比较空值和空白文字，再看短路运算如何避免对空值调用方法。','List.of 不允许 null，因此示例使用 Arrays.asList 构造包含 null 的测试数据；此例假设列表本身非空引用。'],advanced:true
 }
,
 {
  id:'java-search-case',title:'忽略大小写搜索标题',subtitle:'整理关键词并筛选列表',
  explain:'示例整理关键词，将它和标题按 Locale.ROOT 转为小写后比较。数据只在内存中，不请求网络。',
  code:'import java.util.List;\nimport java.util.Locale;\n\npublic class Main {\n    static List<String> search(List<String> titles, String query) {\n        String keyword = query.strip().toLowerCase(Locale.ROOT);\n        return titles.stream().filter(title -> title.toLowerCase(Locale.ROOT).contains(keyword)).toList();\n    }\n    public static void main(String[] args) {\n        List<String> titles = List.of("Python 基础", "Java 入门");\n        System.out.println(search(titles, " PYTHON "));\n        System.out.println(search(titles, "Kotlin"));\n    }\n}',
  output:'[Python 基础]\n[]',question:'为什么大写 PYTHON 能匹配 Python？',options:['比较前双方都转成小写','自动连接了搜索服务器','自动修改了原始标题'],answer:0,
  explanation:'关键词和标题分别转换为小写进行比较，返回的仍是原始标题。',vocab:'search · 搜索；query · 查询；keyword · 关键词；locale · 地区；contains · 包含',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Locale（地区规则）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）List（列表）以 String（字符串）为元素类型，定义 search（搜索），接收 String（字符串）的 List（列表）titles（标题列表）和 String 类型的 query（查询文字）。','String（字符串）变量 keyword（关键词）由 query（查询文字）的 strip（去除首尾空白）和 toLowerCase（转小写）处理，Locale（地区规则）的 ROOT（与特定地区无关）指定转换规则。','return（返回）titles（标题列表）的 stream（流）通过 filter（筛选）保留 title（当前标题）经 toLowerCase（转小写）使用 Locale（地区规则）的 ROOT 后 contains（包含）keyword（关键词）的项，再用 toList（转列表）得到结果。','右花括号结束 search（搜索）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，titles（标题列表）由 List（列表）的 of（创建列表）提供；Python 和 Java 是示例主题。','System（系统）的 out（标准输出）的 println（打印并换行）显示 search（搜索）处理 titles（标题列表）和 PYTHON（示例关键词）的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 search（搜索）处理 titles（标题列表）和 Kotlin（示例关键词）的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['转换后比较，但结果仍保留原始标题文字。','空关键词会匹配所有标题；此例仅演示简单大小写转换，真实多语言搜索需要根据语言和业务规则设计。'],advanced:true
 }
,
 {
  id:'java-longest-title',title:'查找最长标题',subtitle:'比较长度并处理空列表',
  explain:'示例通过流和比较器查找最长标题；空列表没有最大值，用 orElse 提供提示。数据只在内存中。',
  code:'import java.util.Comparator;\nimport java.util.List;\n\npublic class Main {\n    static String longest(List<String> titles) {\n        return titles.stream().max(Comparator.comparingInt(String::length)).orElse("暂无标题");\n    }\n    public static void main(String[] args) {\n        System.out.println(longest(List.of("阅读", "阅读笔记")));\n        System.out.println(longest(List.of()));\n    }\n}',
  output:'阅读笔记\n暂无标题',question:'空列表没有最长标题时显示什么？',options:['暂无标题','自动创建标题','程序必须崩溃'],answer:0,
  explanation:'max 返回可选结果；为空时 orElse 提供“暂无标题”。',vocab:'longest · 最长；comparator · 比较器；length · 长度；orElse · 否则使用',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 Comparator（比较器）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）String（字符串）定义 longest（最长标题），接收 String（字符串）的 List（列表）titles（标题列表）。','return（返回）titles（标题列表）的 stream（流）经 max（最大值）使用 Comparator（比较器）的 comparingInt（按整数键比较），String（字符串）的 length（长度）作为方法引用；orElse（否则使用）提供无结果提示。','右花括号结束 longest（最长标题）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','System（系统）的 out（标准输出）的 println（打印并换行）显示 longest（最长标题）处理 List（列表）的 of（创建列表）提供的标题的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 longest（最长标题）处理 List（列表）的 of（创建空列表）的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['比较器根据 String.length 产生的整数比较标题。','length 统计 UTF-16 代码单元；它不总等于用户看到的字符数量。'],advanced:true
 }
,
 {
  id:'java-filter-title-length',title:'筛选较短的标题',subtitle:'按条件创建新列表',
  explain:'示例筛选长度不超过 2 的标题，返回新列表；原列表保持不变。',
  code:'import java.util.List;\n\npublic class Main {\n    static List<String> shortTitles(List<String> titles) {\n        return titles.stream().filter(title -> title.length() <= 2).toList();\n    }\n    public static void main(String[] args) {\n        List<String> titles = List.of("阅读", "复习", "阅读笔记");\n        System.out.println(shortTitles(titles));\n        System.out.println(titles);\n    }\n}',
  output:'[阅读, 复习]\n[阅读, 复习, 阅读笔记]',question:'筛选后原列表会怎样？',options:['保持原样','自动删除较长标题','上传到服务器'],answer:0,
  explanation:'filter 产生筛选结果，toList 返回新列表；原列表不变。',vocab:'filter · 筛选；short · 较短；title · 标题；length · 长度',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）List（列表）以 String（字符串）为元素类型，定义 shortTitles（较短标题），接收 String 的 List titles（标题列表）。','return（返回）titles（标题列表）的 stream（流）经 filter（筛选）保留 title（当前标题）的 length（长度）不超过 2 的项，再用 toList（转列表）得到结果。','右花括号结束 shortTitles（较短标题）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，titles（标题列表）由 List（列表）的 of（创建列表）提供。','System（系统）的 out（标准输出）的 println（打印并换行）显示 shortTitles（较短标题）处理 titles（标题列表）的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示原 titles（标题列表）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先比较筛选结果与原列表，注意原列表没有改变。','String.length 计算 UTF-16 代码单元数，不一定等于用户看到的字符数。'],advanced:true
 }
,
 {
  id:'java-contains-task',title:'判断任务是否已存在',subtitle:'使用 contains 检查列表',
  explain:'contains 根据元素相等关系判断列表是否包含指定值。示例检查固定任务与空列表，不修改数据。',
  code:'import java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> tasks = List.of("阅读", "复习");\n        System.out.println(tasks.contains("阅读"));\n        System.out.println(List.<String>of().contains("阅读"));\n    }\n}',
  output:'true\nfalse',question:'空列表是否包含“阅读”？',options:['不包含','包含','自动从服务器读取'],answer:0,
  explanation:'空列表没有元素，因此 contains 返回 false。',vocab:'contains · 包含；tasks · 任务列表；true · 真；false · 假',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，tasks（任务列表）由 List（列表）的 of（创建列表）提供。','System（系统）的 out（标准输出）的 println（打印并换行）显示 tasks（任务列表）的 contains（包含）检查“阅读”的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 List（列表）的 String（字符串）类型 of（创建空列表）调用 contains（包含）检查“阅读”的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['contains 返回 true 或 false，不修改列表。','字符串比较区分大小写；实际应用应明确标题整理与比较规则。'],advanced:true
 }
,
 {
  id:'java-join-tasks',title:'连接任务标题',subtitle:'用分隔符展示列表',
  explain:'String.join 使用分隔符连接多个标题。示例先检查空列表，以便没有任务时显示明确提示。',
  code:'import java.util.List;\n\npublic class Main {\n    static String showTasks(List<String> tasks) {\n        if (tasks.isEmpty()) return "暂无任务";\n        return String.join("、", tasks);\n    }\n    public static void main(String[] args) {\n        System.out.println(showTasks(List.of("阅读", "复习")));\n        System.out.println(showTasks(List.of()));\n    }\n}',
  output:'阅读、复习\n暂无任务',question:'空列表为什么显示“暂无任务”？',options:['代码先检查列表是否为空','String.join 自动查询服务器','系统自动创建任务'],answer:0,
  explanation:'isEmpty 为真时提前返回提示；非空列表才使用 String.join 连接。',vocab:'join · 连接；tasks · 任务列表；empty · 空的；show · 显示',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）String（字符串）定义 showTasks（显示任务），接收 String（字符串）的 List（列表）tasks（任务列表）。','if（如果）tasks（任务列表）的 isEmpty（是否为空）为真，return（返回）无任务提示。','return（返回）String（字符串工具）的 join（连接）结果，以顿号连接 tasks（任务列表）。','右花括号结束 showTasks（显示任务）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','System（系统）的 out（标准输出）的 println（打印并换行）显示 showTasks（显示任务）处理 List（列表）的 of（创建列表）提供的任务的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 showTasks（显示任务）处理 List（列表）的 of（创建空列表）的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['非空列表按指定分隔符连接，空列表先显示提示。','此例假设任务标题非空且没有 null；实际数据应先验证。'],advanced:true
 }
,
 {
  id:'java-number-tasks',title:'按顺序显示任务编号',subtitle:'列表索引与显示序号',
  explain:'列表索引从 0 开始；示例在显示时加 1，让用户看到从 1 开始的序号。',
  code:'import java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> tasks = List.of("阅读", "复习");\n        for (int index = 0; index < tasks.size(); index++) {\n            System.out.println((index + 1) + ". " + tasks.get(index));\n        }\n    }\n}',
  output:'1. 阅读\n2. 复习',question:'第一项的列表索引是多少？',options:['0','1','自动从服务器获取'],answer:0,
  explanation:'列表第一项的索引为 0；显示时加 1，得到序号 1。',vocab:'index · 索引；tasks · 任务；size · 数量；get · 获取',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，tasks（任务列表）由 List（列表）的 of（创建列表）提供。','for（循环）声明 int（整数）index（索引）从 0 开始，在小于 tasks（任务列表）的 size（数量）时继续，每次通过 ++ 加 1。','System（系统）的 out（标准输出）的 println（打印并换行）显示 index（索引）加 1 作为序号，并用 tasks（任务列表）的 get（按索引获取）读取标题。','右花括号结束 for（循环）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['索引用于访问列表；显示序号是索引加 1。','空列表时循环不执行，示例不会输出任何任务。'],advanced:true
 }
,
 {
  id:'java-safe-index',title:'安全读取指定位置',subtitle:'先检查列表索引范围',
  explain:'示例读取前检查索引是否在列表范围内；负数和超出末尾的位置返回提示。',
  code:'import java.util.List;\n\npublic class Main {\n    static String readTask(List<String> tasks, int index) {\n        if (index < 0 || index >= tasks.size()) return "位置无效";\n        return tasks.get(index);\n    }\n    public static void main(String[] args) {\n        List<String> tasks = List.of("阅读", "复习");\n        System.out.println(readTask(tasks, 0));\n        System.out.println(readTask(tasks, -1));\n        System.out.println(readTask(tasks, 2));\n    }\n}',
  output:'阅读\n位置无效\n位置无效',question:'有两条任务时索引 2 是否有效？',options:['无效，有效索引是 0 和 1','有效，索引从 1 开始','自动查询服务器'],answer:0,
  explanation:'列表索引从 0 开始，必须小于列表长度；两条任务的有效索引为 0 和 1。',vocab:'index · 索引；size · 数量；read · 读取；task · 任务',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）String（字符串）定义 readTask（读取任务），接收 String（字符串）的 List（列表）tasks（任务列表）和 int（整数）index（索引）。','if（如果）index（索引）小于 0，或不小于 tasks（任务列表）的 size（数量），return（返回）位置无效提示。','return（返回）tasks（任务列表）的 get（按索引获取）读取 index（索引）位置的任务。','右花括号结束 readTask（读取任务）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，tasks（任务列表）由 List（列表）的 of（创建列表）提供。','System（系统）的 out（标准输出）的 println（打印并换行）显示 readTask（读取任务）读取 tasks（任务列表）索引 0 的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 readTask（读取任务）读取 tasks（任务列表）索引 -1 的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 readTask（读取任务）读取 tasks（任务列表）索引 2 的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先检查负数和超过末尾的索引，再调用 get。','此例按位置读取；任务编号与列表索引是不同概念。'],advanced:true
 }
,
 {
  id:'java-count-title',title:'统计任务出现次数',subtitle:'使用 Collections.frequency',
  explain:'Collections.frequency 统计集合中与指定值相等的元素数量；空列表的结果为 0。',
  code:'import java.util.Collections;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> tasks = List.of("阅读", "复习", "阅读");\n        System.out.println(Collections.frequency(tasks, "阅读"));\n        System.out.println(Collections.frequency(List.of(), "阅读"));\n    }\n}',
  output:'2\n0',question:'空列表中“阅读”出现几次？',options:['0 次','1 次','自动从服务器读取'],answer:0,
  explanation:'空列表没有元素，因此指定标题出现 0 次。',vocab:'frequency · 出现次数；collections · 集合工具；tasks · 任务列表',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 Collections（集合工具）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，tasks（任务列表）由 List（列表）的 of（创建列表）提供。','System（系统）的 out（标准输出）的 println（打印并换行）显示 Collections（集合工具）的 frequency（出现次数）统计 tasks（任务列表）中“阅读”的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 Collections（集合工具）的 frequency（出现次数）统计 List（列表）的 of（创建空列表）中“阅读”的结果。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['frequency 返回与目标值相等的元素数量。','示例按字符串相等关系比较，不会修改列表。'],advanced:true
 }
,
 {
  id:'java-reverse-copy',title:'反转任务列表副本',subtitle:'保留原列表的顺序',
  explain:'Collections.reverse 会修改传入的列表。示例先创建可修改的副本，再反转副本；原列表保持不变。',
  code:'import java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> tasks = List.of("阅读", "复习", "练习");\n        List<String> copy = new ArrayList<>(tasks);\n        Collections.reverse(copy);\n        System.out.println(copy);\n        System.out.println(tasks);\n    }\n}',
  output:'[练习, 复习, 阅读]\n[阅读, 复习, 练习]',question:'为什么先创建副本？',options:['reverse 会修改传入的列表','自动连接服务器','复制后原列表会被删除'],answer:0,
  explanation:'reverse 原地修改传入列表；这里传入的是新建的可修改副本。',vocab:'reverse · 反转；copy · 副本；tasks · 任务；collections · 集合工具',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 ArrayList（动态数组列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Collections（集合工具）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，tasks（任务列表）由 List（列表）的 of（创建列表）提供。','List（列表）以 String（字符串）为元素类型，copy（副本）通过 new（新建）ArrayList（动态数组列表）复制 tasks（任务列表）。','Collections（集合工具）的 reverse（反转）原地修改 copy（副本）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 copy（副本）。','System（系统）的 out（标准输出）的 println（打印并换行）显示原 tasks（任务列表）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['比较反转后的副本与原列表，确认原顺序不变。','副本中的元素仍是原元素引用；本例使用不可变的字符串。'],advanced:true
 }
,
 {
  id:'java-merge-tasks',title:'合并两组学习任务',subtitle:'创建新列表并保留原数据',
  explain:'示例先复制第一组任务，再把第二组添加到副本。两组原列表不会被修改；合并不会自动去重。',
  code:'import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    static List<String> merge(List<String> first, List<String> second) {\n        List<String> combined = new ArrayList<>(first);\n        combined.addAll(second);\n        return combined;\n    }\n    public static void main(String[] args) {\n        List<String> first = List.of("阅读", "复习");\n        List<String> second = List.of("练习");\n        System.out.println(merge(first, second));\n        System.out.println(first);\n    }\n}',
  output:'[阅读, 复习, 练习]\n[阅读, 复习]',question:'合并后第一组任务会怎样？',options:['保持原样','自动添加练习','被清空'],answer:0,
  explanation:'先用 ArrayList 创建副本，addAll 修改的是副本；原列表不变。',vocab:'merge · 合并；first · 第一组；second · 第二组；combined · 合并结果；addAll · 添加全部',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 ArrayList（动态数组列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）List（列表）以 String（字符串）为元素类型，定义 merge（合并），接收 String 的 List first（第一组）和 second（第二组）。','List（列表）以 String（字符串）为元素类型，combined（合并结果）通过 new（新建）ArrayList（动态数组列表）复制 first（第一组）。','combined（合并结果）的 addAll（添加全部）将 second（第二组）加入副本。','return（返回）combined（合并结果）。','右花括号结束 merge（合并）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，first（第一组）由 List（列表）的 of（创建列表）提供。','List（列表）以 String（字符串）为元素类型，second（第二组）由 List（列表）的 of（创建列表）提供。','System（系统）的 out（标准输出）的 println（打印并换行）显示 merge（合并）处理 first（第一组）和 second（第二组）的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示原 first（第一组）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['比较合并结果和第一组原列表，观察副本如何避免修改原数据。','addAll 保留重复项；本例是浅拷贝，实际使用可变对象时应注意对象仍可能共享。'],advanced:true
 }
,
 {
  id:'java-clean-task-batch',title:'批量整理任务标题',subtitle:'保留顺序并统计无效输入',
  explain:'示例依次整理固定标题，跳过空白和重复项，并分别计数。LinkedHashSet 保留首次出现的顺序；比较区分大小写，不保存或上传数据。',
  code:'import java.util.LinkedHashSet;\nimport java.util.List;\nimport java.util.Set;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> inputs = List.of(" 阅读 ", "", "复习", "阅读");\n        Set<String> tasks = new LinkedHashSet<>();\n        int blank = 0;\n        int duplicate = 0;\n        for (String input : inputs) {\n            String title = input.strip();\n            if (title.isEmpty()) {\n                blank++;\n            } else if (!tasks.add(title)) {\n                duplicate++;\n            }\n        }\n        System.out.println("有效：" + tasks);\n        System.out.println("空白：" + blank + "，重复：" + duplicate);\n    }\n}',
  output:'有效：[阅读, 复习]\n空白：1，重复：1',question:'第二次出现“阅读”时会怎样？',options:['不再添加，重复数加一','覆盖整个列表','上传到服务器'],answer:0,
  explanation:'集合的 add 在元素已存在时返回 false；示例因此增加重复计数，同时保留首次出现的顺序。',vocab:'input · 输入；title · 标题；blank · 空白；duplicate · 重复；set · 集合；strip · 去除首尾空白',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 LinkedHashSet（保留插入顺序的集合）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 Set（集合）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）以 String（字符串）为元素类型，inputs（输入列表）由 List（列表）的 of（创建列表）提供。','Set（集合）以 String（字符串）为元素类型，tasks（任务集合）通过 new（新建）LinkedHashSet（保留插入顺序的集合）创建。','int（整数）变量 blank（空白数量）初始为 0。','int（整数）变量 duplicate（重复数量）初始为 0。','for（循环）让 String（字符串）类型的 input（当前输入）依次取自 inputs（输入列表）。','String（字符串）变量 title（标题）取 input（当前输入）经 strip（去除首尾空白）后的结果。','if（如果）title（标题）的 isEmpty（是否为空）为真，进入空白分支。','blank（空白数量）加一。','else if（否则如果）tasks（任务集合）的 add（添加）返回 false（假），表示 title（标题）重复。','duplicate（重复数量）加一。','右花括号结束条件分支。','右花括号结束 for（循环）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 tasks（任务集合）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 blank（空白数量）和 duplicate（重复数量）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['逐项观察空白、首次出现和重复标题分别进入哪个分支。','本例输入不含 null，比较区分大小写；实际来源的数据还需要明确空值与大小写规则。'],advanced:true
 }
,
 {
  id:'java-task-pages',title:'分页读取学习任务',subtitle:'检查边界并复制列表片段',
  explain:'列表分页需要先检查页码和每页数量，再计算开始与结束位置。subList 返回原列表的视图，示例用新列表复制结果；超出末页返回空列表。',
  code:'import java.util.ArrayList;\nimport java.util.List;\n\npublic class Main {\n    static List<String> pageTasks(List<String> tasks, int page, int size) {\n        if (page < 1 || size < 1) throw new IllegalArgumentException("分页参数无效");\n        long start = (long) (page - 1) * size;\n        if (start >= tasks.size()) return new ArrayList<>();\n        int end = (int) Math.min(start + size, tasks.size());\n        return new ArrayList<>(tasks.subList((int) start, end));\n    }\n    public static void main(String[] args) {\n        List<String> tasks = new ArrayList<>(List.of("阅读", "复习", "练习"));\n        System.out.println("第 1 页：" + pageTasks(tasks, 1, 2));\n        System.out.println("第 2 页：" + pageTasks(tasks, 2, 2));\n        System.out.println("第 3 页：" + pageTasks(tasks, 3, 2));\n        try {\n            pageTasks(tasks, 0, 2);\n        } catch (IllegalArgumentException error) {\n            System.out.println(error.getMessage());\n        }\n        System.out.println("原列表：" + tasks);\n    }\n}',
  output:'第 1 页：[阅读, 复习]\n第 2 页：[练习]\n第 3 页：[]\n分页参数无效\n原列表：[阅读, 复习, 练习]',question:'为什么将 subList 的结果传给新的 ArrayList？',options:['创建独立列表，避免直接修改原列表的视图','自动连接数据库','让每页都显示全部任务'],answer:0,
  explanation:'subList 是原列表的视图；新建 ArrayList 会复制其中的元素引用，改变新列表的结构不会改变原列表。',vocab:'page · 页码；size · 每页数量；start · 起始位置；end · 结束位置；subList · 子列表',
  notes:['import（导入）java（Java 标准库）的 util（工具包）中的 ArrayList（动态数组列表）。','import（导入）java（Java 标准库）的 util（工具包）中的 List（列表接口）。','public（公开）class（类）定义 Main（主程序）。','static（属于类）方法 pageTasks（任务分页）接收 String（字符串）组成的 List（列表）tasks（任务列表）、int（整数）page（页码）和 size（每页数量），返回 String 组成的 List。','if（如果）page（页码）或 size（每页数量）小于 1，throw（抛出）new（新建）IllegalArgumentException（参数异常）。','long（长整数）start（起始位置）由 page（页码）减 1 后转成 long，再乘 size（每页数量）；提前转换避免整数乘法溢出。','if（如果）start（起始位置）大于等于 tasks（任务列表）的 size（数量），return（返回）new（新建）ArrayList（空列表）。','int（整数）end（结束位置）由 Math（数学工具）的 min（较小值）比较 start（起始位置）加 size（每页数量）与 tasks（任务列表）的 size（数量）后得到。','return（返回）new（新建）ArrayList（动态数组列表）复制 tasks（任务列表）的 subList（子列表视图）；start（起始位置）转成 int（整数），end（结束位置）不包含在结果内。','右花括号结束 pageTasks（任务分页）方法。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','List（列表）保存 String（字符串）类型的 tasks（任务列表），new（新建）ArrayList（动态数组列表）复制 List（列表）的 of（创建列表）提供的任务。','System（系统）的 out（标准输出）的 println（打印并换行）显示 pageTasks（任务分页）处理 tasks（任务列表）第 1 页的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 pageTasks（任务分页）处理 tasks（任务列表）第 2 页的结果。','System（系统）的 out（标准输出）的 println（打印并换行）显示 pageTasks（任务分页）处理 tasks（任务列表）第 3 页的结果。','try（尝试）开始处理可能发生的异常。','pageTasks（任务分页）处理 tasks（任务列表）的无效页码 0。','catch（捕获）接收 IllegalArgumentException（参数异常）类型的 error（错误对象）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 error（错误对象）的 getMessage（取得消息）。','右花括号结束 catch（捕获）分支。','System（系统）的 out（标准输出）的 println（打印并换行）显示原 tasks（任务列表）。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先检查页码，再使用 long 计算起始位置，避免大页码的整数乘法溢出。','subList 返回视图；复制只让列表结构独立，若元素是可变对象，对象本身仍会共享。'],advanced:true
 }
,
 {
  id:'java-executor-future',title:'在线程池中汇总学习时间',subtitle:'提交任务、等待结果并关闭线程池',
  explain:'线程池可以执行后台任务。示例把固定分钟数相加交给工作线程，通过 Future 等待结果，并在 finally 中关闭线程池；没有访问网络或数据库。',
  code:'import java.util.concurrent.ExecutionException;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.Future;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException, ExecutionException {\n        ExecutorService pool = Executors.newSingleThreadExecutor();\n        try {\n            Future<Integer> total = pool.submit(() -> 20 + 15);\n            System.out.println("汇总：" + total.get() + " 分钟");\n        } finally {\n            pool.shutdown();\n        }\n    }\n}',
  output:'汇总：35 分钟',question:'为什么在 finally 里调用 shutdown？',options:['无论等待是否抛出异常，都请求关闭线程池','强制立即停止所有任务','自动保存统计到数据库'],answer:0,
  explanation:'finally 会在正常返回或异常时执行；shutdown 拒绝新任务，并允许已经提交的任务继续完成。',vocab:'executor · 执行器；future · 将来的结果；submit · 提交；get · 获取；shutdown · 关闭；finally · 最终执行',
  notes:['import（导入）java.util.concurrent（Java 并发工具包）的 ExecutionException（任务执行异常）。','import（导入）java.util.concurrent（Java 并发工具包）的 ExecutorService（线程池接口）。','import（导入）java.util.concurrent（Java 并发工具包）的 Executors（执行器工厂）。','import（导入）java.util.concurrent（Java 并发工具包）的 Future（将来的结果）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数；throws（声明抛出）InterruptedException（中断异常）和 ExecutionException（任务执行异常）。','ExecutorService（线程池接口）变量 pool（线程池）由 Executors（执行器工厂）的 newSingleThreadExecutor（创建单线程池）提供。','try（尝试）开始需要清理资源的代码块。','Future（将来的结果）以 Integer（整数对象）为结果类型，total（总数）由 pool（线程池）的 submit（提交）安排计算 20 加 15。','System（系统）的 out（标准输出）的 println（打印并换行）显示 total（将来的结果）通过 get（等待并获取）取得的分钟数。','finally（最终执行）开始资源清理分支。','pool（线程池）的 shutdown（关闭）拒绝新任务，允许已提交任务完成。','右花括号结束 finally（最终执行）分支。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['先看 submit 提交任务，再看 get 如何等待并获取结果。','get 会阻塞调用线程；真实界面不要直接在主线程等待，生产代码还需要根据情况处理取消、超时和中断。'],advanced:true
 }
,
 {
  id:'java-future-failure',title:'处理后台任务失败',subtitle:'区分任务异常和等待被中断',
  explain:'工作线程抛出异常时，Future.get 会抛出 ExecutionException。示例读取原始原因；等待线程被中断时重新设置中断标记，最后请求关闭线程池。',
  code:'import java.util.concurrent.ExecutionException;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.Future;\n\npublic class Main {\n    public static void main(String[] args) {\n        ExecutorService pool = Executors.newSingleThreadExecutor();\n        try {\n            Future<Integer> result = pool.submit(() -> { throw new IllegalArgumentException("数据无效"); });\n            System.out.println(result.get());\n        } catch (ExecutionException error) {\n            System.out.println("任务失败：" + error.getCause().getMessage());\n        } catch (InterruptedException error) {\n            Thread.currentThread().interrupt();\n            System.out.println("等待被中断");\n        } finally {\n            pool.shutdown();\n        }\n    }\n}',
  output:'任务失败：数据无效',question:'为什么捕获 InterruptedException 后重新设置中断标记？',options:['让上层代码仍能观察到中断请求','让失败的任务自动成功','关闭数据库连接'],answer:0,
  explanation:'等待被中断时抛出的 InterruptedException 会清除当前线程的中断状态；重新设置后，后续代码可以感知中断。',vocab:'future · 将来的结果；failure · 失败；cause · 原因；interrupt · 中断；shutdown · 关闭',
  notes:['import（导入）java.util.concurrent（Java 并发工具包）的 ExecutionException（任务执行异常）。','import（导入）java.util.concurrent（Java 并发工具包）的 ExecutorService（线程池接口）。','import（导入）java.util.concurrent（Java 并发工具包）的 Executors（执行器工厂）。','import（导入）java.util.concurrent（Java 并发工具包）的 Future（将来的结果）。','public（公开）class（类）定义 Main（主程序）。','public（公开）static（属于类）void（无返回值）定义 main（主入口），String（字符串）数组 args（参数）接收启动参数。','ExecutorService（线程池接口）变量 pool（线程池）由 Executors（执行器工厂）的 newSingleThreadExecutor（创建单线程池）提供。','try（尝试）开始处理可能失败的任务。','Future（将来的结果）以 Integer（整数对象）为结果类型，result（结果）由 pool（线程池）的 submit（提交）安排任务；throw（抛出）new（新建）IllegalArgumentException（非法参数异常）。','System（系统）的 out（标准输出）的 println（打印并换行）等待并显示 result（结果）的 get（等待并获取）；本例任务会失败。','catch（捕获）接收 ExecutionException（任务执行异常）类型的 error（错误对象）。','System（系统）的 out（标准输出）的 println（打印并换行）显示 error（错误对象）的 getCause（获取原始原因）的 getMessage（获取消息）。','catch（捕获）接收 InterruptedException（中断异常）类型的 error（错误对象）。','Thread（线程）的 currentThread（当前线程）调用 interrupt（设置中断标记）。','System（系统）的 out（标准输出）的 println（打印并换行）显示等待被中断。','finally（最终执行）开始资源清理分支。','pool（线程池）的 shutdown（关闭）拒绝新任务，允许已提交任务完成。','右花括号结束 finally（最终执行）分支。','右花括号结束 main（主入口）方法。','右花括号结束 Main（主程序）类。'],
  language:'Java',commentPrefix:'//',guide:['工作线程中的异常通过 Future.get 包装为 ExecutionException，再从 getCause 取得原因。','本例固定触发任务失败；等待被中断不会自动取消后台任务，shutdown 也不会强制立即终止任务。'],advanced:true
 }
];
