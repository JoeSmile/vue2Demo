<template>
    <div class="chapterNav">
        <ul>
            <li v-for='item in items' @click='pickOne'>{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'chapterNav',
    data(){
        return{
            items:['one','two','three']
        }
    },
    methods:{
        pickOne:function(event){
            var chapter = event.target.innerHTML;
            this.$emit('pickChapter',chapter);
        }
    }
}
</script>

<style>
.chapterNav{
    width: 200px;
    border: 1px solid black;
}
.chapterNav ul li{
    height: 30px;
    line-height: 30px;
    text-align: center;
}
</style>
