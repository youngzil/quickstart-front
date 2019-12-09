




---------------------------------------------------------------------------------------------------------------------

1、nvm管理多个活动的node.js版本，可以方便的在同一台设备上进行多个node版本之间切换
2、Node.js是能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境。
3、NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题
4、











---------------------------------------------------------------------------------------------------------------------
NVM
节点版本管理器-兼容POSIX的bash脚本，用于管理多个活动的node.js版本
https://github.com/nvm-sh/nvm

我们可能同时在进行2个项目，而2个不同的项目所使用的node版本又是不一样的，或者是要用更新的node版本进行试验和学习。这种情况下，对于维护多个版本的node将会是一件非常麻烦的事情，而nvm就是为解决这个问题而产生的，他可以方便的在同一台设备上进行多个node版本之间切换，而这个正是nvm的价值所在，详情可以查看官网NVM官网。

https://www.jianshu.com/p/d0e0935b150a




Node.js是能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境。Node.js由Node.js基金会持有和维护[2]，并与Linux基金会有合作关系[3]。Node.js采用Google开发的V8运行代码，使用事件驱动、非阻塞和异步输入输出模型等技术来提高性能，可优化应用程序的传输量和规模。这些技术通常用于数据密集的即时应用程序。

Node.js大部分基本模块都用JavaScript语言编写。在Node.js出现之前，JavaScript通常作为客户端程序设计语言使用，以JavaScript写出的程序常在用户的浏览器上运行。Node.js的出现使JavaScript也能用于服务端编程。Node.js含有一系列内置模块，使得程序可以脱离Apache HTTP Server或IIS，作为独立服务器运行。

https://nodejs.org/en/
https://nodejs.org/zh-cn/
https://github.com/nodejs/node


https://zh.wikipedia.org/wiki/Node.js




NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

https://www.runoob.com/nodejs/nodejs-npm.html




什么是aid-cli
简洁高效的前端开发脚手架

aid-cli是一个基于webpack,提供灵活配置的前端项目脚手架工具,满足自动化开发,数据模拟,资源构建,模块管理,打包发布等等日常开发任务需求,并且提供了多种项目模板,不论您使用的是vue技术栈还是react技术栈,让您省去繁琐的编译运行配置,轻松便捷的快速投入到实际业务的开发中去


快速开始
安装环境依赖: Node.js (>=4.x, 6.x preferred), npm 3+ and Git

第一步: 安装 aid-cli 命令行工具
npm install aid-cli -g

使用镜像解决 node-sass 编译环境问题
aid-cli是脚手架工具命令行版本，它是一个NPM包，通过以下命令安装
npm i -g aid-cli --sass-binary-site=http://npm.taobao.org/mirrors/node-sass/

如果以上命令安装失败，请切换仓库源重试，如果用其他源还不行，请使用下面的命令安装。由于node-sass包需要进行源码编译安装，因此这个安装命令将需要先安装python2.x（node-sass依赖了它），同时，请保证外网通畅，node-sass源码编译时会到github仓库拉取源码。

npm install aid-cli -g



查看安装版本
aid -V

npm uninstall aid-cli


第二步: 初始化项目
以命令行脚手架工具aid-cli为例，在命令行控制台cd进入需要生成工程的目录，然后执行下面的命令：
aid init my-project

以上命令将自动在当前目录生成一个名为my-project的工程目录且将所有工程基础文件放入其中，同时，它将会自动执行npm install安装工程所需依赖包。

以上命令执行过程中需要填写以下信息：
选择你的项目模板 (必选)
项目版本号 (必选)
项目描述 (可选)
项目作者 (可选)
项目仓库地址 (可选)
源码协议 (可选)



第三步: 开始开发
cd my-project
aid vendor 

PS: 第三方包如有更新需重新运行
aid dev -p 3000
使用 aid vendor 将项目第三方依赖包预先打包,提升项目开发编译速度,然后使用 aid dev 启动开发服务器,启动完毕会自动打开默认浏览器并跳转至项目首页

第四步: 测试
aid test --watch

根据不同的项目模板执行不同的单元测试,单元测试配置文件默认位于 test/unit/fixture/conf.js
module.exports = {
    entry,    /* 测试用例入口文件路径 */
    reportFolder,   /* 测试报告路径 */
    webpack: webpackConfig    /* 自定义 webpack.test.js 文件 */
}


可选: 集成测试
aid test --e2e
默认测试浏览器为 chrome ,集成测试配置文件默认位于 test/e2e/fixture/conf.js
module.exports = {
    src_folders: [resolve('test', 'e2e', 'spec')],  /* 测试用例路径 */
    output_folder: resolve('test', 'e2e', 'report')    /* 测试报告路径 */
}


后续: 打包发布
aid build
完成源码的编译压缩,静态资源合并压缩,路径处理,html注入,构建版本号处理等等



能力平台打包方式：
安装nvm、node

安装aid-cli
npm i -g aid-cli@2.0.0 --sass-binary-site=http://npm.taobao.org/mirrors/node-sass/

编译
aid build -N

cd dist
jar cf webdev.war *



简介
1. 压缩包：
jar cvf filename.jar a.class b.class: 压缩指定文件；
jar cvf weibosdkcore.jar *: 全部压缩；

2. 解压包：
jar xvf test.jar



https://www.npmjs.com/package/aid-cli
http://10.1.241.36/uxt/aid-cli/wikis/home
http://10.1.241.36:8888/taurus-desktop/guide/get-started



---------------------------------------------------------------------------------------------------------------------
NVM安装和NodeJS安装

这种安装都需要联网
要安装或更新 nvm，应运行install脚本。为此，您可以手动下载并运行脚本，也可以使用以下cURL或Wget命令：

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
或者
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash


vim ~/.bashrc 写入下面代码

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc

nvm --version 可查看版本
nvm ls-remote   可查看node所有版本，可以通过nvm安装的Node.js的可用版本

nvm install <version>(版本号) 例如：nvm install v12.13.1
nvm use <version>(版本号) 例如：nvm use v12.13.1
nvm alias default v12.13.1

安装后可通过node -v ,npm -v 查看版本，说明安装成功
node --version
npm --version



nvm uninstall 6.11.0     // 移除 node 6.11.0
nvm use 6.11.0           // 使用 node 6.11.0
nvm ls                   // 查看目前已安装的 node 及当前所使用的 node，查看所有已安装版本的列表
nvm ls-remote            // 查看目前线上所能安装的所有 node 版本
nvm alias default v8.11.1 // 更改默认版本，使用 6.11.0 作为预设使用的 node 版本
nvm current     //查看当前的Node.js版本



