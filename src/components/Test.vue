<!--@author:www.joshinrai.cn-->
<template>
    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
</template>

<script>
	export default {
	  name: 'demo',
	  data () {
	    return {
	      msg: '测试',
        show: true
	    }
	  },
    methods: {
      
    },
    components: {
      
    }
	}
</script>

<!-- 添加 "scoped" 属性用于限制样式只作用域当前组件 -->
<style scoped>
    *{
      font-size:1em;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0
    }
</style>