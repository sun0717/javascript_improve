响应式布局的几种典型方案：
- 传统布局
- 相对单位布局
- 通过媒体查询实现的响应式布局
- 基于相对单位 rem 的 flexible 布局
- flex 布局
- grid 布局
- 借助 JavaScript 进行布局

CSS相对单位：
- em
- rem
- vh、vw、vmin、vmax
- %
- calc()

到底相对于谁？：
- em：取决于应用在什么 css 属性上。对于 font-size 来说，em 是相对于父元素的字体大小；在 line-height 中，
    em 相对自身大小。

- rem 相对于根节点(html)的字体大小。

- vw 相对于视口宽度，100vw 相当于一个视口宽度。

- vh 与 vw 同理。

- vmin 相对于视口中的宽度或高度中较小的那个，也就是在 1vw 和 1vh 之间取最小值(Math.min(1vh, 1vw)),vmax相当于视口的宽度或高度中较大的那个。

响应式布局的概念：
- 屏幕分辨率

- 像素(px)

- PPI(Pixel Per Inch): 每英寸包括的像素数

- DPI(Dot Per Inch): 每英寸包括的点数

- 设备独立像素

- 设备像素比(dpr)

- Meta Viewport

横屏适配及其他细节问题：
```javascript
window.addEventListener("resize", () => {
    if (window.orientation === 180 || window.orientation === 0) {
        console.log('竖屏')
    };
    if (window.orientation === 90 || window.orientation === -90) {
        console.log('横屏')
    }
})
```