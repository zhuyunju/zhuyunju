# 前端移动进阶
## 移动Web第一天
### 01、字体图标
> 目标：使用字体图标技巧实现网页中简洁的图标效果
- 字体图标
    - 字体图标是<font style="color:red">展示的是图标，本质上是字体</font>
    - 处理简单的、颜色单一的图片
- [图标库](https://www.iconfont.cn/)
- 使用字体图标：
    - Unicode编码
    ``` js
        <span>&#xe6f8;</span>
    ```
    - 类名
    ``` js
        // 引入字体图标样式表
        <link rel="stylesheet" href='./iconfont.css'>
        // 调用图标对应的类名，必须调用2个类名
        <span class="iconfont icon-xxx"></span>
    ```
### 02、平面转换
> 目标：使用transform属性实现元素的位移、旋转、缩放等效果
- 平面转换
    - 改变盒子在平面内的形态（位移、旋转、缩放）
    - 2D转换
- 平面转换属性
    - transform
#### 位移
- 语法
    `transform:translate(水平移动距离,垂直移动距离);`
- 取值（正负均可）
    - 像素单位数值
    - 百分比（参照物为盒子自身尺寸）
    <font style='color:red'>注意：x轴正向为右，y轴正向为下</font>
- 技巧
    - translate()如果只给出一个值，表示x轴方向移动距离
    - 单独设置某个方向的移动距离：translateX()&translateY()
#### 旋转
- 语法
    `tranform:rotate(角度);`
    注意：角度单位是deg
- 技巧：取值正负均可
    - 取值为正，则顺时针旋转
    - 取值为负，则逆时针旋转
#### 缩放
- 语法
    `transform:scale(缩放倍数);`
### 03、渐变
> 目标：使用background-image属性实现渐变背景效果
- 渐变是多个颜色逐渐变化的视觉效果
- 一般用于设置盒子的背景
``` js
    background-image: linear-gradient(
        颜色1,
        颜色2
    );
```


## 移动Web第二天
### 01、空间转换
- 空间：是从坐标轴角度定义的。x、y和z三条坐标轴构成了一个立体空间,z轴位置与视线方向相同。
- 空间转换也叫3D转换
- <font style="color:red">属性：transfrom</font>
- 语法
    ``` js
        transform:translate3d(x,y,z);
        transform:translateX(值);
        transform:translateY(值);
        transform:translateZ(值);
    ```
- 取值(正负均可)
    - 像素单位数值
    - 百分比
> 空间旋转
- 语法
    ``` js
        transform:rotate3d(x,y,z);
        transform:rotateZ(值);
        transform:rotateX(值);
        transform:rotateY(值);
    ```
### 02、动画
- 语法
    1. 定义动画
    ``` js
    @keyframes 动画名称 {
        0%{}
        10%{}
        50%{}
        100% {}
    }
    ```
    2. 使用动画
    ``` js
        animation: 动画名称 动画花费时长;
    ```
> 动画属性
''' js
    animation: 动画名称 动画时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时状态;
'''
注意：
- 动画名称和动画时长必须赋值
- 取值不分先后

## 移动Web第三天
### Flex布局
- 语法
    ` display:flex `
- 组成部分
    - 弹性容器
    - 弹性盒子
    - <font style="color:red">主轴</font>
    - <font style="color:red">测轴</font>
#### justify-content主轴对齐方式
- center 居中
- space-around 间距均分盒子两侧
- space-between 间距分在盒子之间
- space-evenly 盒子两侧间距相等
#### align-items侧轴对齐方式
- center 居中
#### 使用flex属性修改弹性盒子伸缩比
- 属性
    ` flex:值; `
- 取值分类
    数值(整数)
<font style="color:red">注意 : 只占用父盒子剩余尺寸</font>

#### 主轴方向
- 主轴<font style="color:red">默认是水平方向</font>
- 修改主轴方向属性：**flex-direction**
` felx-direction:column //列、垂直方向`
> flex-wrap多行排列
- 换行显示 flex-wrap:wrap;
- 对齐方式 align-content
    - 取值与justify-content基本相同


## 第四天
### 移动适配
#### 01、长度单位
- rem
    - 相对单位
    - rem单位是相对HTML标签的字号计算结果
    - 1rem = 1HTML字号大学
- vh/vw
    - 相对单位
    - 系统将视口的宽度和高度分为100分,1vw占用视口宽度的- 百分之一
#### Less
- Less是一个CSS预处理器,Less文件后缀是.less
- 扩充了CSS语言,是CSS具备一定逻辑性、计算能力
- <font style="color:red">注意：浏览器不识别Less代码,目前阶段,网页要引入对应的CSS文件</font>



## 第五天
### 响应式
#### 媒体查询
- 开发常用写法
    - 媒体特性常用写法
        - max-width(从小到大)
        - min-width(从大到小)

#### BootStrap
