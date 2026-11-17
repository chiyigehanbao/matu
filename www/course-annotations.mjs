const notes = {
 hello:['print（打印/输出）把括号里的文字显示出来。'],
 variables:['name（名字）是变量名；= 把右边的文字保存给它。','print（打印/输出）显示 name（名字）所保存的值。'],
 numbers:['price（价格）保存单价 12。','count（数量）保存购买件数 3。','print（打印/输出）显示 price（价格）乘以 count（数量）的结果；* 是乘号。'],
 strings:['first（第一部分）保存问候文字。','name（名字）保存要问候的人。','print（打印/输出）显示 first（第一部分）加 name（名字）；+ 在这里连接文字。'],
 types:['print（打印/输出）显示 type（类型）查询数字 10 所得的类型。','print（打印/输出）显示 type（类型）查询文字 "10" 所得的类型。'],
 input:['name（名字）保存 input（输入）接收到的文字；括号里是提示问题。','print（打印/输出）把问候语和 name（名字）连接后显示出来。'],
 operators:['age（年龄）保存数字 20。','has_ticket（是否有票）保存 True（真），表示有票。','print（打印/输出）显示 age（年龄）是否大于等于 18，and（并且）has_ticket（是否有票）是否为 True。'],
 conditions:['score（分数）保存 75。','if（如果）score（分数）大于或等于 60，就执行下面缩进的内容；: 表示分支开始。','print（打印/输出）显示“及格”；前面的空格表示它属于 if 分支。','else（否则）表示上面的条件不成立时，执行下面的分支。','print（打印/输出）显示“继续加油”；它属于 else 分支。'],
 elif:['score（分数）保存 82。','if（如果）score（分数）大于或等于 90，执行下面的分支。','print（打印/输出）显示“优秀”。','elif（否则如果）检查 score（分数）是否大于或等于 60。','print（打印/输出）显示“及格”。','else（否则）表示前面两个条件都不成立。','print（打印/输出）显示“继续努力”。'],
 lists:['tasks（任务列表）保存三项文字；方括号表示列表。','print（打印/输出）显示 tasks（任务列表）里索引为 0 的第一项。'],
 'list-add':['tasks（任务列表）一开始只有“读书”。','tasks（任务列表）的 append（追加）方法把“练习”加到末尾。','print（打印/输出）显示完整的 tasks（任务列表）。'],
 slicing:['items（项目列表）依次保存四种水果。','print（打印/输出）显示 items（项目列表）中索引 1 到 3 之前的项目。'],
 'for-loop':['tasks（任务列表）保存“读书”和“练习”。','for（对于每一项）让 task（当前任务）依次取出 in（在）tasks（任务列表）里的值。','print（打印/输出）显示当前的 task（任务）；缩进表示这是循环体。'],
 range:['for（循环）让 number（数字）依次取出 in（在）range（范围）生成的 0、1、2。','print（打印/输出）显示当前的 number（数字）。'],
 'while-loop':['count（计数）从 1 开始。','while（当……时）检查 count（计数）是否小于或等于 3；成立就执行缩进内容。','print（打印/输出）显示当前 count（计数）。','count（计数）更新为原来的 count（计数）加 1。'],
 functions:['def（定义函数）创建 greet（问候）函数，name（名字）是它接收的参数。','print（打印/输出）把问候语与 name（名字）连接起来显示。','greet（问候）调用前面定义的函数，把“小明”传给 name 参数。'],
 returns:['def（定义函数）创建 add（相加）函数；a 和 b 是两个输入参数。','return（返回）将 a 与 b 的和交还给调用这个函数的位置。','result（结果）保存 add（相加）函数对 2 和 3 计算出的返回值。','print（打印/输出）显示 result（结果）。'],
 dictionary:['person（人员信息）是字典；name（名字）和 age（年龄）是这里的文字键。','print（打印/输出）通过 person（人员信息）里的文字键 name（名字）取出对应的值。'],
 errors:['number（数字）保存文字 "12"，注意它现在是字符串。','print（打印/输出）显示 int（整数转换）把 number（数字文字）转换后再加 1 的结果。'],
 exceptions:['text（文本）保存无法转换成整数的文字 "abc"。','try（尝试）开始一段可能出现错误的代码。','number（数字）尝试保存 int（整数转换）处理 text（文本）的结果。','print（打印/输出）显示 number（数字）；转换失败时不会执行到这里。','except（捕获异常）处理 ValueError（值不合适）这种错误。','print（打印/输出）显示“请输入数字”作为提示。'],
 project:['reading（阅读）保存示例阅读时间，单位为分钟。','practice（练习）保存示例练习时间，单位为分钟。','total（总计）保存 reading（阅读）与 practice（练习）的和。','print（打印/输出）显示 total（总计）分钟数。','if（如果）total（总计）大于或等于 30，就执行下面的内容。','print（打印/输出）显示完成目标的提示。']
};
export function annotatedPython(lesson) {
 const explanations = lesson.notes || notes[lesson.id];
 if (!explanations) throw new Error(`缺少示例注释：${lesson.id}`);
 let index=0;
 const result = lesson.code.split('\n').map(line=>{
  if (!line.trim()) return '';
  const indent=line.match(/^\s*/)[0];
  const note=explanations[index++];
  if (!note) throw new Error(`缺少逐行注释：${lesson.id} 第 ${index} 行`);
  return `${indent}${lesson.commentPrefix || "#"} ${note}${lesson.commentSuffix || ""}\n${line}`;
 });
 if(index!==explanations.length) throw new Error(`注释行数不匹配：${lesson.id}`);
 return result.join('\n');
}
