"use strict"
import Beginner from './Beginner'
import Vue from 'vue'
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<Beginner/>',
  components: {
      Beginner
  }
})
