<template>
  <div>
  	{{msg}}
  </div>
</template>

<script>
	export default {
	  name: 'homePage',
	  data () {
	    return {
	      msg: '最新报警'
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

</style>