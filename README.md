# 码途

中文编程阅读学习 App。课程按路线与章节组织：先看概念、逐行中文注释的完整代码和结果，再按需要做选择题；不需要自己输入代码。进度保存在当前设备，支持按知识点搜索。

## 当前课程

已开始建设 Python、FastAPI、SQL、HTML/CSS、JavaScript、TypeScript、Node.js、React、Vue、微信小程序、Java、Kotlin 和 Android 等路线。各路线持续扩充，不能把已有课时视为覆盖技术的全部内容。代码中的英文标识及示例中出现的英文词配有中文注释。

所有课程和示例结果随应用提供。小程序、Android 界面和外部接口页面中的效果属于教学示意：阅读课程不会启动服务、发送网络请求或保存示例数据。真实工程中的平台能力、权限、配置、设备差异需要另外验证。

## 本机阅读

```powershell
npm run serve
```

打开 http://localhost:4173。课程内容可离线阅读，进度只保存在当前设备和浏览器环境。

## 验证

`npm test` 运行课程及保留的旧版回归测试。Python 和 SQL 示例由本机解释器／内存 SQLite 执行；Java、Kotlin、TypeScript、React、Vue 和 Android 示例分别使用本机编译器或框架进行适用范围内的检查。微信小程序示例使用模拟环境检查数据与事件，没有声称微信开发者工具或真机验收通过。

需要允许创建本机事件循环、临时目录和回环端口的测试，在可用环境中分别设置 `MATU_ASYNC_TEST=1`、`MATU_VALIDATE_FASTAPI=1`、`MATU_LOCAL_SERVER_TEST=1`、`MATU_LOCAL_FILE_TEST=1`；未设置时对应测试会显示跳过。测试依赖在 `package.json` 的开发依赖中，不随安卓应用打包。

## 安卓构建

```powershell
npm run sync
$env:JAVA_HOME='D:\tools\jdk21\jdk-21.0.12+8'
$env:ANDROID_HOME='D:\tools\android-sdk'
$env:ANDROID_SDK_ROOT=$env:ANDROID_HOME
cd android
.\gradlew.bat assembleDebug --offline --no-daemon
```

调试包位于 `android/app/build/outputs/apk/debug/app-debug.apk`。正式发行、签名和新版真机验收尚未完成。旧项目资源保留在 `www/` 和历史目录中，旧界面位于 `www/legacy-index.html`，新版进度单独保存，不自动更改旧学习记录。构建脚本只将新版课程所需资源复制到 `matu-web/` 供 Capacitor 打包。

## 内容及许可

中文课程和示例自行编写；课程结构参考 [W3Schools](https://www.w3schools.com/python/)、[Python 教程](https://docs.python.org/3/tutorial/) 和各框架官方文档。部分基础 Python 示例使用 Skulpt 1.2.0 作辅助测试，其许可见 `www/vendor/SKULPT-LICENSE.txt`；阅读版没有将该运行器打包进应用。旧版词库和音频仍在工作区，旧音频商业授权尚未核实。
