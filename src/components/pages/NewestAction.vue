<!--@author:www.joshinrai.cn-->
<template>
    <div class="newest_action">
      <div class="content">{{msg}}</div>
      <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
      :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
      :selectable="selectable" :showCheckbox="showCheckbox" class="jo_table">
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="动态">动态</mu-th>
            <mu-th tooltip="时间">时间</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item,index in tableData"  :key="index" :selected="item.selected">
            <mu-td>{{item.title}}</mu-td>
            <mu-td>{{item.createtime}}</mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
    </div>
</template>

<script>
	export default {
	  name: 'newestAction',
	  data () {
	    return {
	      msg: '最新动态',
        tableData: [
          {
            createtime:"2016-11-14 14:57:38",
            title:"10"
          },{
            createtime:"2016-11-14 14:57:38",
            title:"10"
          },{
            createtime:"2016-11-14 14:57:38",
            title:"10"
          },{
            createtime:"2016-11-14 14:57:38",
            title:"10"
          },{
            createtime:"2016-11-14 14:57:38",
            title:"10"
          },{
            createtime:"2016-11-14 14:57:38",
            title:"10"
          },{
            createtime:"2016-11-14 14:57:38",
            title:"10"
          },{
            createtime:"2016-11-14 14:57:38",
            title:"10"
          }
        ],
        fixedHeader: true,
        fixedFooter: false,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        showCheckbox: false,
        height: '20vh'
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
    .newest_action{
      overflow:auto;
      border-radius:0.5em;
      margin:0.5em;
    }
    .content{
      font-size:2em;
    }
    .jo_table{
      min-width:800px;
    }
</style>