(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{356:function(s,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git常用操作"}},[s._v("#")]),s._v(" git常用操作")]),s._v(" "),a("h2",{attrs:{id:"创建ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建ssh"}},[s._v("#")]),s._v(" 创建ssh")]),s._v(" "),a("p",[s._v('ssh-keygen -t rsa -C "one@gmail.com"')]),s._v(" "),a("blockquote",[a("p",[s._v("这里得rsa是文件名")])]),s._v(" "),a("h2",{attrs:{id:"如何在远程某个分支的基础上新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何在远程某个分支的基础上新建分支"}},[s._v("#")]),s._v(" 如何在远程某个分支的基础上新建分支")]),s._v(" "),a("ol",[a("li",[s._v("git branch newBranch //新建本地分支")]),s._v(" "),a("li",[s._v("git checkout newBranch //本地切换到自己的分支")]),s._v(" "),a("li",[s._v("git pull origin xxxxBranch //从远程目标分支copy代码")]),s._v(" "),a("li",[s._v("git push origin newBranch //将本地新建的分支同步到服务器")]),s._v(" "),a("li",[s._v("git branch --set-upstream-to=origin/newbranch newbranch . //本地分支和远程分支建立追踪")])]),s._v(" "),a("h2",{attrs:{id:"如果远程已有分支，本地没有该分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果远程已有分支，本地没有该分支"}},[s._v("#")]),s._v(" 如果远程已有分支，本地没有该分支")]),s._v(" "),a("p",[s._v("git checkout --track origin/branch_name")]),s._v(" "),a("h2",{attrs:{id:"git代码写错分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git代码写错分支"}},[s._v("#")]),s._v(" git代码写错分支")]),s._v(" "),a("h3",{attrs:{id:"尚未提交到错误的分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尚未提交到错误的分支"}},[s._v("#")]),s._v(" 尚未提交到错误的分支")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 将修改的代码暂存到stash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n\n// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 切换到正确的分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout targetbranch \n\n// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".从stash中取出暂存的代码修改\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"git代码回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git代码回滚"}},[s._v("#")]),s._v(" git代码回滚")]),s._v(" "),a("h3",{attrs:{id:"本地代码库回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地代码库回滚"}},[s._v("#")]),s._v(" 本地代码库回滚")]),s._v(" "),a("p",[s._v("git reset --hard commit-id :回滚到commit-id，讲commit-id之后提交的commit都去除\ngit reset --hard HEAD~3：将最近3次的提交回滚")]),s._v(" "),a("h2",{attrs:{id:"远程代码回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程代码回滚"}},[s._v("#")]),s._v(" 远程代码回滚")]),s._v(" "),a("p",[s._v("这个是重点要说的内容，过程比本地回滚要复杂")]),s._v(" "),a("p",[s._v("应用场景：自动部署系统发布后发现问题，需要回滚到某一个commit，再重新发布")]),s._v(" "),a("p",[s._v("原理：先将本地分支退回到某个commit，删除远程分支，再重新push本地分支")]),s._v(" "),a("p",[s._v("操作步骤：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1、git checkout master\n\n2、git pull\n\n3、git branch master_backup //备份一下这个分支当前的情况\n\n4、git reset --hard the_commit_id //把master本地回滚到the_commit_id\n\n5、git push origin :master //删除远程 master\n\n6、git push origin master //用回滚后的本地分支重新建立远程分支\n\n7、git branch -d master_backup //如果前面都成功了，删除这个备份分支\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"查看远程地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看远程地址"}},[s._v("#")]),s._v(" 查看远程地址")]),s._v(" "),a("p",[s._v("git remote -v")])])}),[],!1,null,null,null);t.default=r.exports}}]);