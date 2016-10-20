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
               </div>'
}
var Two = {
    template: '<div>TwoTwoTwoTwoTwoTwo</div>'
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
