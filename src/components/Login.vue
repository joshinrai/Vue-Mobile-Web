<template>
  <div class="login">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '正泰燃气综合管理平台'
    }
  }
}
</script>

<!-- 添加 "scoped" 属性用于限制样式只作用域当前组件 -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
