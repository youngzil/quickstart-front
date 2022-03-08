- [NVM安装和NodeJS安装](#NVM安装和NodeJS安装)
- [NVM、NodeJS、NPM介绍](#NVM、NodeJS、NPM介绍)
- [什么是Yarn](#什么是Yarn)


---------------------------------------------------------------------------------------------------------------------

## NVM安装和NodeJS安装


NVM——Node Version Manager（Node版本管理器）


[nvm官网](https://github.com/nvm-sh/nvm)


[如何更新NVM](https://www.jianshu.com/p/045df8e20ebe)  


这种安装都需要联网
要安装或更新 nvm，应运行install脚本。为此，您可以手动下载并运行脚本，也可以使用以下cURL或Wget命令：

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
或者
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash



vim ~/.bashrc 写入下面代码

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc

MacOS是下面这个文件
~/.bash_profile
或者其他系统如
~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc


nvm --version 可查看版本
nvm ls-remote   可查看node所有版本，可以通过nvm安装的Node.js的可用版本

nvm install <version>(版本号) 例如：nvm install v12.13.1
nvm use <version>(版本号) 例如：nvm use v12.13.1
nvm alias default v12.13.1


安装后可通过node -v ,npm -v 查看版本，说明安装成功
node --version 或者 nvm current
npm --version


# 查看本地已经安装的Node.js版本列表
nvm ls
nvm list

# 将Node.js版本切换到6.11.0【临时生效】
nvm use v6.11.0

#永久切换NodeJS版本【设置default】
nvm alias default 4.6.0
nvm use 4.6.0


# 查看当前的Node.js版本
nvm current



nvm uninstall 6.11.0     // 移除 node 6.11.0
nvm use 6.11.0           // 使用 node 6.11.0
nvm ls                   // 查看目前已安装的 node 及当前所使用的 node，查看所有已安装版本的列表
nvm ls-remote            // 查看目前线上所能安装的所有 node 版本
nvm alias default v8.11.1 // 更改默认版本，使用 6.11.0 作为预设使用的 node 版本
nvm current     //查看当前的Node.js版本




前端安装完 node 后，最好设置下淘宝的镜像源，不建议使用 cnpm（可能会出现奇怪的问题）

npm config set registry https://registry.npm.taobao.org
配置后可通过下面方式来验证是否成功
npm config get registry



问题：
1. N/A version is not installed...  
Node N/A 所指向的版本不存在

参考  
https://blog.csdn.net/qq_37164975/article/details/106441692



2. 关于安装nvm 报错Failed to connect to raw.githubusercontent.com port 443: Connection refused

笔者最近发现 github 的用户头像和自己文章中的图片显示不出来了。然后今天发现安装 homeBrew 和 nvm 出现了标题的报错信息。

以上是安装 pnpm 的报错信息，可以发现，脚本需要到 raw.githubusercontent.com 上拉取代码。

网上搜索了一下，发现是 github 的一些域名的 DNS 解析被污染，导致DNS 解析过程无法通过域名取得正确的IP地址。


### 解决方案

打开 https://www.ipaddress.com/ 输入访问不了的域名

查询之后可以获得正确的 IP 地址

在本机的 host 文件中添加，建议使用 switchhosts 方便 host 管理
```
199.232.68.133 raw.githubusercontent.com
199.232.68.133 user-images.githubusercontent.com
199.232.68.133 avatars2.githubusercontent.com
199.232.68.133 avatars1.githubusercontent.com
```

添加以上几条 host 配置，页面的图片展示就正常了，homebrew 也能装了，nvm 也行动灵活了。


参考  
[如何解决类似 curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused 的问题 #10](https://github.com/hawtim/blog/issues/10)
 







---------------------------------------------------------------------------------------------------------------------

## NVM、NodeJS、NPM介绍

1. NVM——Node Version Manager（Node版本管理器）NVM——Node Version Manager（Node版本管理器）
nvm管理多个活动的node.js版本，可以方便的在同一台设备上进行多个node版本之间切换
2. Node.js是能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境。
3. NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题
npm（全称 Node Package Manager，即“node包管理器”）是Node.js默认的、用JavaScript编写的软件包管理系统。
4. 







## NVM
节点版本管理器-兼容POSIX的bash脚本，用于管理多个活动的node.js版本
https://github.com/nvm-sh/nvm

我们可能同时在进行2个项目，而2个不同的项目所使用的node版本又是不一样的，或者是要用更新的node版本进行试验和学习。这种情况下，对于维护多个版本的node将会是一件非常麻烦的事情，而nvm就是为解决这个问题而产生的，他可以方便的在同一台设备上进行多个node版本之间切换，而这个正是nvm的价值所在，详情可以查看官网NVM官网。

https://www.jianshu.com/p/d0e0935b150a



## Node.js

Node.js是能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境。Node.js由Node.js基金会持有和维护[2]，并与Linux基金会有合作关系[3]。Node.js采用Google开发的V8运行代码，使用事件驱动、非阻塞和异步输入输出模型等技术来提高性能，可优化应用程序的传输量和规模。这些技术通常用于数据密集的即时应用程序。

Node.js大部分基本模块都用JavaScript语言编写。在Node.js出现之前，JavaScript通常作为客户端程序设计语言使用，以JavaScript写出的程序常在用户的浏览器上运行。Node.js的出现使JavaScript也能用于服务端编程。Node.js含有一系列内置模块，使得程序可以脱离Apache HTTP Server或IIS，作为独立服务器运行。


Node.js is an open-source, cross-platform, JavaScript runtime environment. It executes JavaScript code outside of a browser. For more information on using Node.js, see the Node.js Website.

Node.js是一个开源，跨平台的JavaScript运行时环境。它在浏览器外部执行JavaScript代码。有关使用Node.js的更多信息，请参见Node.js网站。

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。



[Node.js官网](https://nodejs.org/en/)  
[Node.js中文](https://nodejs.org/zh-cn/)  
[Node.js Github](https://github.com/nodejs/node)  
[Node.js wiki](https://zh.wikipedia.org/wiki/Node.js)  




npm 是什么？
npm 是JavaScript 世界的包管理工具，并且是Node.js 平台的默认包管理工具。通过npm 可以安装、共享、分发代码，管理项目依赖关系。

npm（全称 Node Package Manager，即“node包管理器”）是Node.js默认的、用JavaScript编写的软件包管理系统。



NPM是随同NodeJS

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。


[npm官网](https://www.npmjs.com/)  
[npm Github地址](https://github.com/npm/cli)  
[npm中文文档](https://www.npmjs.cn/)  
[npm菜鸟教程](https://www.runoob.com/nodejs/nodejs-npm.html)  




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
npm i -g aid-cli --sass-binary-site=http://npm.taobao.org/mirrors/node-sass/  
或者  
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
## 什么是Yarn
Yarn 就是一个类似于 npm 的包管理工具，它是由 facebook 推出并开源。
与 npm 相比，yarn 有着众多的优势，主要的优势在于：速度快、离线模式、版本控制。

[Yarn官网](https://yarnpkg.com/getting-started)  
[Yarn Github](https://github.com/yarnpkg/berry)  
[Yarn中文文档](https://yarn.bootcss.com/docs/getting-started/)  
[Yarn中文网](http://yarnpkg.top/Installation.html)  


### 背景
在 Node 生态系统中，依赖通常安装在项目的 node_modules 文件夹中。然而，这个文件的结构和实际依赖树可能有所区别，因为重复的依赖可以合并到一起。npm 客户端把依赖安装到 node_modules 目录的过程具有不确定性。这意味着当依赖的安装顺序不同时，node_modules 目录的结构可能会发生变化。这种差异可能会导致类似“我的电脑上可以运行，别的电脑上不行”的情况，并且通常需要花费大量时间定为与解决。

有时候就会遇到这种情况，完整可运行的项目上传到 git 上，别人 pull 下来以后，npm install 会报错。

Yarn 一开始的主要目标是解决由于语义版本控制而导致的 npm 安装的不确定性问题。虽然可以用 npm shrinkwrap 来实现可预测的依赖关系树，但它并不是默认选项，而是取决于所有的开发人员指导并启用这个选项。

npm 5+ 以后的版本加入了 package-lock.json 可以用来锁版本，package-lock.json 的名字，一看就懂，更清楚，但是不向后兼容。

npm-shrinkwrap.json 向后兼容 npm 2-4。

举个例子：  
npm 对包引入顺序也十分的敏感，比如在一个空项目里执行以下命令：

而 yarn 则会保证无论怎样引入的顺序，目录依赖结构都是一致的，确保不会发生这样的BUG。


### 速度快
npm 会等一个包完全安装完才跳到下一个包，但 yarn 会并行执行包，因此速度会快很多。

Yarn 会缓存它下载的每个包，所以无需重复下载。它还能并行化操作以最大化资源利用率，安装速度之快前所未有。

### 离线模式
之前安装过的包会被保存进缓存目录，以后安装就直接从缓存中复制过来，这样做的本质还是会提高安装下载的速度，避免不必要的网络请求。

### 可靠可确定性
保证各平台依赖的一致性

### 版本控制
npm 用下来比较强的一个痛点就是：当包的依赖层次比较深时，版本控制不够精确。会出现相同 package.json，但不同人的电脑上安装出不同版本的依赖包，出现类似“我的电脑上可以运行，别的电脑上不行”的 bug 很难查找。你可以使用 npm-shrinkwrap 来实现版本固化，版本信息会写入 npm-shrinkwrap.json 文件中，但它毕竟不是 npm 的标准配置。

而 yarn 天生就能实现版本固化。会生成一个类似 npm-shrinkwrap.json 的 yarn.lock 文件，而文件内会描述包自身的版本号，还会锁定所有它依赖的包的版本号

yarn.lock 存储着你的每个包的确切依赖版本，能确保从本地开发到生产环境，所有机器上都有精确相同的依赖版本。



## Yarn安装
brew install yarn
或者
npm install -g yarn
或者
curl -o- -L https://yarnpkg.com/install.sh | bash

yarn -version


[Yarn安装](https://yarn.bootcss.com/docs/install/#mac-stable)  
[Yarn安装2](http://yarnpkg.top/Installation.html)  



## Yarn换源
Yarn 源仓库包下载不稳定

// 查看 yarn 配置
yarn config get registry
或者
yarn config list

> registry: 'https://registry.yarnpkg.com'

安装淘宝镜像  
yarn config set registry https://registry.npm.taobao.org



## Yarn常用命令

npm install === yarn —— install安装是默认行为
npm install taco --save === yarn add taco —— taco包立即被保存到 package.json 中。
npm uninstall taco --save === yarn remove taco
npm install taco --save-dev === yarn add taco --dev
npm update --save === yarn upgrade

npm install taco@latest --save === yarn add taco
npm install taco --global === yarn global add taco —— 一如既往，请谨慎使用 global 标记。
注意：使用yarn或yarn install安装全部依赖时是根据package.json里的”dependencies”字段来决定的

npm init === yarn init
npm init --yes/-y === yarn init --yes/-y
npm link === yarn link
npm outdated === yarn outdated
npm publish === yarn publish
npm run === yarn run
npm cache clean === yarn cache clean
npm login === yarn login
npm test === yarn test

Yarn 独有的命令
yarn licenses ls —— 允许你检查依赖的许可信息
yarn licenses generate —— 自动创建依赖免责声明 license
yarn why taco —— 检查为什么会安装 taco，详细列出依赖它的其他包
yarn why vuepress —— 检查为什么会安装 vuepress，详细列出依赖它的其他包



### 特性
Yarn 除了让安装过程变得更快与更可靠，还添加了一些额外的特性，从而进一步简化依赖管理的工作流。

同时兼容 npm 与 bower 工作流，并支持两种软件仓库混合使用
可以限制已安装模块的协议，并提供方法输出协议信息
提供一套稳定的共有 JS API，用于记录构建工具的输出信息
可读、最小化、美观的 CLI 输出信息







参考  
[Yarn安装与使用详细介绍](https://neveryu.github.io/2018/07/20/yarn/)  
[]()  
[]()  
[]()  
[]()  


