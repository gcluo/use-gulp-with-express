#express gulp demo

##背景说明
express + gulp sass 实现全端开发模板

##运行所需环境
npm install -g express

npm install express-generator -g

cd expressDemo && npm install

npm install -g mongodb

mongod --dbpath=/data --port 27017

bower install

###
编译sass为css运行 gulp sass

其他命令，草考gulpfile.js中的task。


##启动项目
npm start



## SCSS 文件说明

以 [https://github.com/marvin1023/sandal.git]() 为基础，逐步完善自建scss功能。

### sandal 内置 mixins 说明
以下 mixins 可以通过 `@include mixin-name` 的方式，或者 `@extend %extend-name` 进行引用：

* `center-block`    —— 块对象水平居中
* `clearfix`        —— 清除 float 浮动
* `hidden`          —— 隐藏 DOM 对象
* `hidden-visually` —— 只视觉隐藏 DOM 对象
* `fixed`           —— 固顶，如果传入 'bottom' 参数，则对象在底部固顶
* `justify`         —— flex 对象以 space-between 方式分散对齐
* `disabled(bgc, text, bdc)` —— 禁用样式，可传入背景色、文字色和边框色重定义禁用样式

以下只定义了 mixin，所以只能通过 @include 来调用：

* `equal-table(children)`  —— 以 table 布局等分子对象, 默认子元素为 li
* `equal-flex(children)`   —— 以 flex 布局等分子对象, 默认子元素为 li
* `center-flex(direction)` —— 以 flex 布局使子对象居中，默认水平和垂直都居中，可传入 x 或 y 参数使得其子对象只对于其中一个维度居中
* `center-translate(direction)`  —— 以 translate 方式使对象居中，同样可以传入  x 或 y 定义某一维度居中
* `triangle(direction, width, color)` —— 三角箭头，默认参数为 `(top, 6px, #ccc)`, 以 top、 right、 bottom、 left 等关键词设定方向
* `arrow(size, direction, width, color)` —— 方向箭头，默认参数 `(10px, right, 2px, #ccc)`, 方向同上
* `font-face(font-family, path, font-weight, font-style)` —— 字体样式定义

以下只定义了%，所以只能通过 @extend 来调用：

* `%bar-line`     —— bar line
* `%ellipsis`     —— 文字溢出宽度应用省略号
* `%equal-col`    —— 等分列，可以使用equal-flex或equal-table，默认子元素为li
* `%item-arrow`   —— 右侧箭头跳转指向
* `%page-out`     —— page switch
* `%page-in`      —— page switch
* `%btn`          —— 按钮样

### 媒体查询 mixins

* `screen(min-width, max-width, orientation)`
* `min-screen(width)`
* `max-screen(width)`
* `screen-height(min-height, max-height, orientation)`
* `min-screen-height(height)`
* `max-screen-height(height)`
* `hdpi(ratio)`
* `landscape`
* `portrait`
* `iphone3(orientation)`
* `iphone4(orientation)`
* `iphone5(orientation)`
* `iphone6(orientation)`
* `iphone6-plus(orientation)`
* `ipad(orientation)`
* `ipad-retina(orientation)`
* `hdtv(standard)`

请查看 [https://github.com/paranoida/sass-mediaqueries]() 获取详情！

### 自建 minxins

* `size(width, height)`     —— 方便的宽高设定，如只传一个参数，则长宽一样
* `position(pos, argu)`     —— 位置设定，默认 absolute 定位，eg: `@include position(absolute, top 0 right 0)`
* `absolute(argu)`          —— 绝对定位，position的简化版，按需传入定位参数即可，格式见上
* `fixed(argu)`             —— 固定定位，同上
* `relative(argu)`          —— 相对定位，同上

### 自建 functions

* `pow(number, exp)`—— 乘方
* `fact(number)`    —— 阶乘
* `rad(angle)`      —— 角度转弧度
* `sin(angle)`      —— 正弦
* `cos(angle)`      —— 余弦
* `tan(angle)`      —— 正切