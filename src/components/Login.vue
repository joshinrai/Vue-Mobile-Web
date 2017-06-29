<template>
  <div class="login">
  	<img src="../assets/wap.jpg">
  	<div class="login_index" ref="index">
  		<h1>{{ msg }}</h1>
  		<p>{{ cont }}</p>
  		<button v-on:touchstart="log_index">继续</button>
  	</div>
  	<div class="login_cont" ref="cont">
  		<h2>正泰燃气表综合管理平台</h2>
  		<input type="text" placeholder="用户名">
  		<input type="password" placeholder="密码" >
  		<button @touchstart="log_cont">登录</button>
  	</div>
  </div>
</template>

<script>
	export default {
	  name: 'login',
	  data () {
	    return {
	      msg: '正泰燃气综合管理平台',
	      cont: '为用户提供营收管理、抄表、决策辅助分析和公共增值服务功能。系统支持基表、普通IC卡表、微功率无线表、物联网表，并保证系统正常稳定运行。'
	    }
	  },
    methods: {
      log_index () {
        this.$refs.index.style.display = 'none' ;
        //this.$refs.cont.style.transition = 'all 1s' ;
        this.$refs.cont.style.display = 'block' ;
        this.$refs.cont.style.opacity = 1 ;
      },
      log_cont () {
          //java后台server有跨域问题待解决
         /*this.$http.post('http://localhost:8100/GIMS/checkuser.do?userno=admin&password=chintmeter').then((
                response) => {
                  console.log("the response is ...",response) ;
        }).then((error)=> this.error = error) ;*/
        this.$router.push({ path: '/homePage' }) ;
        console.log("this is log_cont ...") ;
      }
    },
    components: {

    }
	}
</script>

<!-- 添加 "scoped" 属性用于限制样式只作用域当前组件 -->
<style scoped>
  .login_index{
  	  position: absolute;
      background-color: rgba(187, 168, 170, 0.79);
      width: 80vw;
  	  height:30vh;
      border-radius:3px ;
      margin-top: 25vh;
      margin-left:10vw;
      padding: 15px 0px;
      transition:all .5s;
  }
  .login_cont{
      position: absolute;
      width: 80vw;
      height:30vh;
      border-radius:3px ;
      margin-top: 25vh;
      margin-left:10vw;
      display:none;
      opacity:0;
      -webkit-transition:all 1s;
      transition:all 1s;
  }
  h1,h2,p {
    font-weight: normal;
    text-align:center;
    font-size:2.5em;
    margin-top:1em;
    color:#fff;
  }
  button{
  	  background-color: #FF9800;
    	border: none;
      margin-left: 25%;
      width: 50%;
      border-radius:5px;
      box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
      color: #fff;
      margin-top: 1.5em;
      cursor: pointer;
      font-size:3em;
      line-height:2.5em;
  }
  input{
    font-size:2.5em;
    display:block;
    line-height:3em;
    width:80%;
    margin-left:10%;
    margin-top:.5em;
  }
  img{
    position:absolute;
    height:100vh;
    width:100vw;
    opacity:0.5;
    animation-name: animar_fondo;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @media (max-width: 460px){
  	h1{
  		font-size:4em;
  	}
  }
  @-webkit-keyframes animar_fondo {
    from { -webkit-transform: scale(1) translate(0px);
  -moz-transform: scale(1) translate(0px);
  -ms-transform: scale(1) translate(0px);
  -o-transform: scale(1) translate(0px);
  transform: scale(1) translate(0px); }
    to { -webkit-transform: scale(1.5) translate(50px);
  -moz-transform: scale(1.5) translate(50px);
  -ms-transform: scale(1.5) translate(50px);
  -o-transform: scale(1.5) translate(50px);
  transform: scale(1.5) translate(50px); }
  }
</style>