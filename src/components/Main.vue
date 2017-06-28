<template>
  <div class="container">
    <div class="container_ui">
      <div class="container_ui__heading">
        <div class="menu_icon">
          <img src="../assets/menu.svg" alt="">
        </div>
        <h1>首页</h1>
        <div class="config_icon">
          <img src="../assets/config.svg" alt="">
        </div>
      </div>
      <div class="main_content">
        <HomePage></HomePage>
      </div>
      <div class="footer">
        <a class="chintCopyRight" href="http://www.chintim.com" target="_blank">
          版权所有 © 浙江正泰仪器仪表有限责任公司</a>
      </div>
    </div>
  </div>
</template>

<script>
  import HomePage from './pages/HomePage'
	export default {
	  name: 'main',
	  data () {
	    return {
	      msg: '登录成功'
	    }
	  },
    methods: {
      
    },
    components: {
      HomePage
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
      min-height: 100vh;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
    }
    .container_ui {
      width: 100vw;
      background: white;
      height: 100vh;
      /*box-shadow: 20px 20px 0px rgba(0, 0, 0, 0.16);*/
      -webkit-transition-property: opacity,top;
              transition-property: opacity,top;
      -webkit-transition-duration: 0.4s;
              transition-duration: 0.4s;
      -webkit-animation: pop .5s forwards;
              animation: pop .5s forwards;
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
    .main_content{
      background-color:#ddd;
      height:86vh;
    }
    .footer{
      background-color:#333658;
      height:6vh;
    }
    .chintCopyRight{
      color:#aeb1d8;
      display:inline-block;
      margin-top:1vh;
    }
</style>