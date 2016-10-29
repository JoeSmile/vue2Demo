<template>
  <div class="hello">
    <div class='todoList'>
      <span>Siri</span>
      <input v-model.trim='inputMsg' placeholder='有什么能为你效劳'/>
      <button v-on:click='addToList' v-on:keyup.enter='addToList'>确定</button>
      <ul>
        <li v-for='(item,index) in msgList'><span class='value'>{{item}}</span><span class='opt' v-on:click='delFromList(index)'>删除</span></li>
      </ul>
    </div>
    <div class='chooseMany'>
      <span>您选择的商品{{goods.join('  ')}}</span>
      <div>
        <input type='checkbox' v-model='goods' value='ipad'/>
        <lable for='ipad'>ipad</lable>
        <input type='checkbox' v-model='goods' value='iphone'/>
        <lable for='iphone'>iphone10</lable>
        <input type='checkbox' v-model='goods' value='mac'/>
        <lable for='mac'>mac pro</lable>
      </div>
    </div>
    <div class='sexy'>
      <label>您的性别是{{sex}}</label>
      <br>
      <input type='radio' value='Man' v-model='sex'>
      <label for='man'>Man</label>
      <input type='radio' value='Woman' v-model='sex'>
      <label for='woman'>Woman</label>
      <input type='radio' value='other' v-model='sex'>
      <label for='other'>other</label>
    </div>
    <div class='mutiple'>
      <label>选择支付方式</label>
      <select v-model='opt'>
        <option>银联</option>
        <option>微信</option>
        <option>支付宝</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      inputMsg: '',
      msgList:[],
      goods:[],
      sex:'',
      opt:''

    }
  },
  methods:{
    addToList:function(e){
      this.inputMsg?this.msgList.push(this.inputMsg):null;
      this.inputMsg='';
    },
    delFromList:function(index){
      this.msgList.splice(index,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 200px;
  margin: 0 auto;
  height: 200px;
  overflow-y: auto;
}

li {
  display: block;
  height: 30px;
  margin: 0 10px;
}
li .value{
  float: left;
}
li .opt{
  float: right;
}

a {
  color: #42b983;
}
</style>
