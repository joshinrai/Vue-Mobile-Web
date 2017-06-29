<!--@author:www.joshinrai.cn-->
<template>
    <div class="newest_alert">
      <div class="content">{{msg}}</div>
      <mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height"
      :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable"
      :selectable="selectable" :showCheckbox="showCheckbox" class="jo_table">
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="时间">时间</mu-th>
            <mu-th tooltip="区域">区域</mu-th>
            <mu-th tooltip="仪表">仪表</mu-th>
            <mu-th tooltip="状态">状态</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item,index in tableData"  :key="index" :selected="item.selected">
            <mu-td>
              {{item.alertdate}}
            </mu-td>
            <mu-td>{{item.zonename}}</mu-td>
            <mu-td>{{item.devicename}}</mu-td>
            <mu-td>{{item.alertmsg}}</mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
    </div>
</template>

<script>
	export default {
	  name: 'newestAlert',
	  data () {
	    return {
	      msg: '最新报警',
        tableData: [
          {
            alertmsg:"锂电池欠压",
            devicename:"桓台01",
            alertdate:"2017-06-12 13:18:26",
            zonename:"@桓台测试区域"
          },
          {
            alertmsg:"锂电池欠压",
            devicename:"桓台01",
            alertdate:"2017-06-12 13:18:26",
            zonename:"@桓台测试区域"
          },
          {
            alertmsg:"锂电池欠压",
            devicename:"桓台01",
            alertdate:"2017-06-12 13:18:26",
            zonename:"@桓台测试区域"
          },
          {
            alertmsg:"锂电池欠压",
            devicename:"桓台01",
            alertdate:"2017-06-12 13:18:26",
            zonename:"@桓台测试区域"
          },
          {
            alertmsg:"锂电池欠压",
            devicename:"桓台01",
            alertdate:"2017-06-12 13:18:26",
            zonename:"@桓台测试区域"
          },
          {
            alertmsg:"锂电池欠压",
            devicename:"桓台01",
            alertdate:"2017-06-12 13:18:26",
            zonename:"@桓台测试区域"
          },
          {
            alertmsg:"锂电池欠压",
            devicename:"桓台01",
            alertdate:"2017-06-12 13:18:26",
            zonename:"@桓台测试区域"
          },
          {
            alertmsg:"锂电池欠压",
            devicename:"桓台01",
            alertdate:"2017-06-12 13:18:26",
            zonename:"@桓台测试区域"
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
    .newest_alert{
      overflow:auto;
    }
    .content{
      font-size:2em;
    }
    .jo_table{
      min-width:1800px;
    }
</style>