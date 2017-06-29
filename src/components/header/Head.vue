<!--@author:www.joshinrai.cn-->
<template>
    <div class="container_ui__heading">
      <div class="menu_icon">
        <img src="../../assets/menu.svg" alt="">
      </div>
      <h1>首页</h1>
      <div class="config_icon">
        <img src="../../assets/config.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
	  name: 'head',
	  data () {
	    return {
	      msg: '头部'
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
    .container_ui__heading {
      height: 8vh;
      width: 100%;
      background: #333658;
    }
    .container_ui__heading .menu_icon {
      float: left;
      text-align: left;
    }
    .container_ui__heading .config_icon{
      float: right;
    }
    .container_ui__heading .menu_icon, .container_ui__heading .config_icon {
      width: 33vw;
      height: 6vh;
    }
    .container_ui__heading .menu_icon img,.container_ui__heading .config_icon img {
      cursor: pointer;
      width:8vw;
      height:5.5vh;
    }
    .container_ui__heading .menu_icon img{
      margin: 1vh 2vw 1vh;
    }
    .container_ui__heading .config_icon img{
      margin: 1vh 2vw 1vh;
      float:right;
    }
    .container_ui__heading h1 {
      color: #aeb1d8;
      text-transform: uppercase;
      font-weight: 700;
      height: 8vh;
      margin: 0;
      font-size: 1.5em;
      float: left;
      width: 33vw;
      letter-spacing: 1px;
      line-height: 8vh;
    }
</style>