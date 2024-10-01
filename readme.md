-w: 该选项确保依赖是在工作区级别安装的。为所有子包安装依赖，同时确保共享的依赖只在根目录安装一次，这样可以加快安装速度并提高效率。
pnpm i lodash -w

子模块安装/删除依赖 --filter module-a：
pnpm add lodash --filter module-a

本地 pnpm store 地址：
pnpm store path

pnpm add module-a@workspace:* --filter module-b
用于在 monorepo 项目中将 module-a 作为 module-b 的依赖进行安装，且 module-a 是 workspace 内的一个模块

执行 script 命令
pnpm --filter=module-a run start
pnpm --filter"=module-b" run start