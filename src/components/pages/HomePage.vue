<!--@author:www.joshinrai.cn-->
<template>
	<div class="container">
		<myHead></myHead>
	  	<div class="main_content">
	        <newestAlert></newestAlert>
	    </div>
	    <myFoot></myFoot>
	</div>
</template>

<script>
	import myHead from '../header/Head'
	import myFoot from '../footer/Foot'
	import newestAlert from './NewestAlert'
	export default {
	  name: 'homePage',
	  data () {
	    return {
	      msg: '主页'
	    }
	  },
	  methods: {
	      
	  },
	  components: {
	  	myHead,myFoot,newestAlert
	  }
	}
</script>

<!-- 添加 "scoped" 属性用于限制样式只作用域当前组件 -->
<style scoped>
	*{
      font-size:1.27em;
    }
	.container {
      width: 100vw;
      text-align: center;
      min-height: 94vh;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
    }
    .main_content{
      background-color:#ddd;
      height:86vh;
    }
</style>