<template>
    <div class="chapterShow" v-bind:is='chapter'>
    </div>
</template>
<script>
var One = {
    template: '<div class="one">\
                  <p>声明式渲染</p>\
                  <span>vuejs核心是一个允许你才用简洁的模版语法来声明式的将数据渲染进DOM的系统</span>\
                  <p>生命周期</p>\
                  <div class="lifecycle"></div>\
                  <p>生命周期钩子</p>\
                  <div class="hooks"></div>\
                  <p>与其它框架对比</p>\
                  <p>React</p>\
                  <p>相同点：</p>\
                  <p>使用 Virtual DOM</p>\
                  <p>提供了响应式（Reactive）和组件化（Composable）的视图组件。</p>\
                  <p>优势：</p>\
                  <p>性能更好，渲染速度更快，在开发中，Vue 每秒最高处理 10 帧，而 React 每秒最高处理不到 1 帧。</p>\
                  <p>同样支持Jsx，但模版编写更简单，模版中任何HTML都是有效的，在编写模版样式风格已定并极少涉及功能实现。</p>\
                  <p>ng1 Angular 1 使用双向绑定，Vue 在不同组件间强制使用单向数据流。在 Vue 中指令和组件分得更清晰。指令只封装 DOM 操作，而组件代表一个自给自足的独立单元。</p>\
                  <p>ng2 比ng2体积小，同样可以支持typeScript,可用于大型企业项目的开发。</p>\
               </div>',

}
var Two = {
    template: '<div>\
            <p>模板语法  双大括号可以写js表达式，或绑定一个data值 {{msg}}，并可以接过滤器 "|"</p>\
            <p>指令  eg:v-bind  v-if  v-on 等</p>\
            <p>计算属性</p>\
            <p> 关键字:computed，为了让模版清晰易于维护，模版中复杂的表达式，尽量写在计算属性中。计算属性 VS method。计算属性会缓存基于它的相关依赖。 \
               计算属性只有在它的相关依赖发生改变时才会重新评估.而method，每当重新渲染的时候，method调用总会运行函数。在做异步操作或响应不断变化的数据时，也可以用watcher。\
               watcher(ajax settimeout 都可以在watch中执行)限制我们多久执行该操作，并在我们获取最终结果时立刻设置状态。这是计算属性无法做到的。</p>\
            <p>class 与 style </p>\
            <p>可以用 v-bind 绑定</p>\
            <p>条件渲染</p>\
            <p>  v-if v-else v-show 在切换 v-if 块时， Vue.js 有一个局部编译/卸载过程，因为 v-if 之中的模板也可能包括数据绑定或子组件。 v-if 是真实的条件渲染，因为它会确保条件块在切换当中合适地销毁与重建条件块内的事件监听器和子组件。\
               v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——在条件第一次变为真时才开始局部编译（编译会被缓存起来）。\
               相比之下， v-show 简单得多——元素始终被编译并保留，只是简单地基于 CSS 切换。\
               一般来说， v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好</p>\
            <p>列表渲染 v-for  v-for="(value, key, index) in object"\
                index.key :value</p>\
            <p>事件处理</p>\
            <p>v-on click  .stop == event.stopPropagation() .prevent==event.preventDefault() eg:  v-on:click.stop.prevent="fucntion"</p>\
            <p>事件处理</p>\
            <p>事件处理</p>\
            <p>事件处理</p>\
            <p>事件处理</p>\
            </div>',
    data(){
        return {
            msg:'Message:{{msg}}',
            num:[1,2,3,4,5,6,7,8,9],
            msgNum:'{{num}}'
        }
    },
    filters:{
        filerAge(values){
            if (values) {
                return values.map(function(item,index){
                    return ++item;
                })
            }
        }
    }
}
var Three = {
    template: '<div>ThreeThreeThreeThree</div>'
}

var chapterShow = {
        name:'chapterShow',
        props:['chapter'],
        components:{
            One,
            Two,
            Three
        },
        methods:{
            beforeUpdate(){
                console.log(123123);
            }
        }
}
console.log(this);
// chapterShow.$watch('chapter',(chapter)=>{console.log('watching'+ chapter)});
export default chapterShow;
</script>

<style>
.chapterShow{
    flex: 1;
    border: 1px solid black;
    overflow: scroll;
}
.chapterShow.one .lifecycle{
    height: 1200px;
    width: 510px;
    background: url("../assets/vuelifecycle.png");
    background-size: cover;
}
.chapterShow.one .hooks{
    width: 800px;
    height: 575px;
    background-size: cover;
    background: url("../assets/hooks.png");
}
.chapterShow ul{
    list-style: none;
}
</style>
