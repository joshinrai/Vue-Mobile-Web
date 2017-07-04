<!--@author:www.joshinrai.cn-->
<template>
    <div class="gasProfile_container">
      <div class="content">{{msg}}</div>
      <table class="jo_table">
        <tbody>
          <tr><td colspan='2'>正常用户</td><td colspan='3'>294户</td></tr>
          <tr><td colspan='2'>停户数</td><td colspan='3'>2户</td></tr>
          <tr><td colspan='2'>欠费总额</td><td colspan='3'>-4.40元</td></tr>
          <tr><td colspan='2'>欠费户数</td><td colspan='3'>1户</td></tr>
          <tr><td colspan='2'>当月充值金额</td><td colspan='3'>1102.00元</td></tr>
          <tr><td colspan='2'>当月充值人次</td><td colspan='3'>4人次</td></tr>
          <tr><td colspan='2'>当月缴费金额</td><td colspan='3'>1.00元</td></tr>
          <tr><td>上月用气量</td><td>0.00立方</td><td>环比</td><td>N/A</td><td>同比下降</td></tr>
        </tbody>
      </table>
    </div>
</template>

<script>
	export default {
	  name: 'gasProfile',
	  data () {
	    return {
	      msg: '用气概况'
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
    .gasProfile_container{
      overflow:auto;
      border-radius:0.5em;
      margin:0.5em;
    }
    .content{
      font-size:2em;
    }
    .jo_table{
      background-color:#fff;
      min-width:100%;
      text-align:left;
    }
    .jo_table td{
      border-bottom:1px solid;
      border-color:rgba(0,0,0,.15);
    }
</style>