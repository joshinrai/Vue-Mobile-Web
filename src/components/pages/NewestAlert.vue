<!--@author:www.joshinrai.cn-->
<template>
    <div class="newest_alert">
      {{msg}}
      <myTable></myTable>
    </div>
</template>

<script>
  import myTable from '../plugins/table'
	export default {
	  name: 'newestAlert',
	  data () {
	    return {
	      msg: '最新报警'
	    }
	  },
    methods: {
      
    },
    components: {
      myTable
    }
	}
</script>

<!-- 添加 "scoped" 属性用于限制样式只作用域当前组件 -->
<style scoped>
    *{
      font-size:1.27em;
    }
    .newest_alert{
      text-align: left;
    }
</style>