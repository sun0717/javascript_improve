- 用于绘画的 canvas 元素
- 用于媒介播放的 video 和 audio 元素
- 对本地离线存储有更好的支持(localStorage、sessionStorage)
- 新的语义化标签(article、footer、header、nav、section等)
- 新的表单控件(calendar、data、time、email、url、search等)
```html
<!-- 给汉字加拼音-->
<ruby>
    前端开发核心知识进阶
    <rt>
        qianduankaifahexinzhishijinjie
    </rt>
</ruby>
<!-- 展开和收起组件：手风琴展开收起效果 -->
<details>
    <summary>前端开发核心知识进阶</summary>
    前端领域，入门相对简单，可是想要更上一层楼却难上加难，市场上高级/资深前端工程师凤毛麟角。这当然未必
    完全是坏事，一旦突破瓶颈，在技能上脱颖而出，便是更广阔的空间。那么，如何从夯实基础到突破瓶颈呢？
</details>
<!-- 原生进度条 -->
<progress value="22" max="100"></progress>
```

Web components

概念：在框架带来的"组件化""生命周期化"这些统治级别的概念下，Web components取长补短并带有"原生"优势，因此我认为这是可以深入研究的一个方向。下面总结一下Web components的优点。
- 原生规范，无需使用框架，继承且具备了框架的优点。新的 Web components 规范中新增了组件生命周期、slot、模板等概念，这些概念与本来就已经存在的组件化、shadow dom、扩展原生元素的能力相结合，使Web components具备了较好的发展前景。
- 原生使用，无需进行编译
无论是 Vue 还是 React，都需要进行编译，而Web components使原生工具，会得到浏览器的天然支持，可以免去编译构建过程。
- 真正的CSS scope
Web components 实现了真正的CSS scope，做到了样式隔离。
