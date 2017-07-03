<!--@author:www.joshinrai.cn-->
<template>
    <div class="footer">
      <a class="chintCopyRight" href="http://www.chintim.com" target="_blank">
        版权所有 © 浙江正泰仪器仪表有限责任公司</a>
    </div>
</template>

<script>
	export default {
	  name: 'footer',
	  data () {
	    return {
	      msg: '页面底部'
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
      font-size:1.27em;
    }
    .footer{
      background-color:#948aec;
      height:6vh;
      position:fixed;
      width:100vw;
      bottom:0;
    }
    .chintCopyRight{
      color:#404040;
      display:inline-block;
      margin-top:1vh;
    }
</style>