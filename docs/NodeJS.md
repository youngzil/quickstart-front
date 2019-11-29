




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

npm i -g aid-cli --sass-binary-site=http://npm.taobao.org/mirrors/node-sass/

编译
aid build -N



https://www.npmjs.com/package/aid-cli
http://10.1.241.36/uxt/aid-cli/wikis/home


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



