# 码途

面向编程初学者的中文编程阅读学习 App：按路线阅读概念、带中文注释的代码与输出，再按需要完成练习。使用 JavaScript、HTML、CSS 和 Capacitor，支持 Web 预览与 Android 构建。

## 功能

- 按路线与章节浏览 Python、JavaScript、SQL、Java、移动开发等课程。
- 阅读代码讲解与示例结果，按知识点搜索。
- 在当前设备保存学习进度并继续学习。

课程内容可离线阅读。示例中的接口与平台界面属于教学示意，阅读课程不会自动启动后端或发送示例请求。

## 快速运行

需要 Node.js、npm 和 Python。

```sh
npm ci
npm run serve
```

浏览器打开 http://localhost:4173 。学习进度保存在当前浏览器，不提供云端同步。

## 验证

```sh
npm test
```

本仓库保留课程打包依赖、课程目录、路线进度与页面交互相关的 4 个测试文件。本次在原工作区运行得到 24 项通过；这不代表已完成新环境安装或 Android 真机验收。

## Android

```sh
npm run sync
cd android
./gradlew assembleDebug
```

Windows 使用 `gradlew.bat assembleDebug`。需自行安装兼容的 JDK 与 Android SDK；本地 SDK 路径写入未纳入版本控制的 `android/local.properties`。调试包生成在 `android/app/build/outputs/apk/debug/`。正式签名需自行提供签名材料与环境变量，仓库不包含签名密钥。

## 目录

- `www/`：当前课程版页面、交互和课程数据。
- `scripts/build-matu.mjs`：筛选课程资源供 Capacitor 打包。
- `tests/`：课程相关自动化检查。
- `android/`：Android 工程。
- [项目展示说明](docs/PORTFOLIO.md)：面试讲解方向。

## 项目范围

这是从本地项目整理的课程版源码。历史词库、音频、旧版运行器、内部审计和构建产物未纳入。正式发布、完整跨设备体验及素材许可仍需在对外发布前确认。个人职责与 AI 辅助范围由作者按实际补充。

课程结构参考 Python 与各框架官方文档；具体资料入口可见源码中的说明。请勿将覆盖部分内容理解为完整技术教程。
