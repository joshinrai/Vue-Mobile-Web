<!--@author:www.joshinrai.cn-->
<template>
    <table class="jo_table">
        <thead>
          <th>时间</th>
          <th>区域</th>
          <th>仪表</th>
          <th>状态</th>
        </thead>
        <tbody>
          
        </tbody>
      </table>
</template>

<script>
	export default {
	  name: 'table',
	  data () {
	    return {
	      msg: 'table组件'
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
      font-size:1.1em;
    }
    .jo_table{
      width:100vw;
      text-align:center;
    }
</style>