<template>
    <div id='beginner'>
        <chapterNav v-on:pickChapter='getChapter'></chapterNav>
        <chapterShow v-bind:chapter='chapter'></chapterShow>
    </div>
</template>

<script>
import ChapterNav from './components/ChapterNav'
import ChapterShow from './components/ChapterShow'

export default {
    name:'beginner',
    data(){
        return {chapter:'one'}
    },
    methods:{
        getChapter:function(chapter){
            this.chapter = chapter;
            console.log(chapter);
        }
    },
    components: {
        ChapterNav,
        ChapterShow
    }
}
</script>

<style>
html,body{
    height: 100%;
}
html,body,ul,ol,li{
    margin: 0;
    padding: 0;
}
#beginner{
    height: 100%;
    display: flex;
}
</style>
