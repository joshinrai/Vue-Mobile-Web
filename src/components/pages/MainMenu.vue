<!--@author:www.joshinrai.cn-->
<!--<li>
        <img src="../../images/revenue.svg" alt="User icon" class="icon" />
        <span>营收管理</span>
      </li>
      <ul class="submenu">
        <div class="expand-triangle"></div>
        <li src="/gasTblcustomer/show"><span>寻表开户</span></li>
        <li src="/gasTblcustomer/list"><span>账户管理</span></li>
        <li src="/gasTblcard/list"><span>IC卡管理</span></li>
        <li src="/gasTblcustomer/showPay"><span>充值缴费</span></li>
        <li src="/gasTblcustomer/showArrears"><span>欠费处理</span></li>
        <li src="/gasTblcustomer/showBills"><span>用户账单</span></li>
        <li src="/gasTblprice/list"><span>价格管理</span></li>
        <li src="/gasTblcustomer/operateLog"><span>操作记录</span></li>
      </ul>
      <li>
        <img src="../../images/sys-monitor.svg" alt="Envelope icon" class="icon">
        <span>系统监测</span>
      </li>
      <ul class="submenu">
        <div class="expand-triangle"></div>
        <li src="/baseTbldevice/showScadaLastData"><span>实时数据</span></li>
        <li src="/gasTblcustomer/dormantCustomer"><span>休眠账户</span></li>
      </ul>
      <li>
        <img src="../../images/data-query.svg" alt="Cog icon" class="icon">
        <span>数据查询</span>
      </li>
      <ul class="submenu">
        <div class="expand-triangle"></div>
        <li src="/view/data/gasFrozenDataDaily"><span>日冻结数据</span></li>
        <li src="/view/data/gasFrozenDataMonthly"><span>月冻结数据</span></li>
      </ul>
      <li>
        <img src="../../images/data-report.svg" alt="Cog icon" class="icon">
        <span>数据报表</span>
      </li>
      <ul class="submenu">
        <div class="expand-triangle"></div>
        <li src="/reportDetail/purchaseGasDetail"><span>营业厅购气明细</span></li>
      </ul>
      <li>
        <img src="../../images/report-file.svg" alt="Cog icon" class="icon">
        <span>报表查询</span>
      </li>
      <ul class="submenu">
        <div class="expand-triangle"></div>
        <li src="/gasTblalert/list"><span>事件报警</span></li>
      </ul>
      <li>
        <img src="../../images/base-center.svg" alt="Cog icon" class="icon">
        <span>后台管理</span>
      </li>
      <ul class="submenu">
        <div class="expand-triangle"></div>
        <li src="/sysTblsysoption/list"><span>系统参数</span></li>
        <li src="/sysTblrole/list"><span>角色管理</span></li>
        <li src="/sysTbluser/list"><span>人员管理</span></li>
        <li src="/sysTblsysmenu/list"><span>菜单管理</span></li>
        <li src="/sysTbldepart/list"><span>营业厅管理</span></li>
        <li src="/sysTblcompany/list"><span>公司信息</span></li>
        <li src="/baseTblzone/list"><span>区域管理</span></li>
        <li src="/baseTbldevice/list"><span>表具管理</span></li>
        <li src="/sysTbldevicetype/list"><span>设备型号管理</span></li>
        <li src="/issueTblnews/list"><span>新闻编辑</span></li>
        <li src="/sysTbllog/list"><span>日志管理</span></li>
      </ul>
      <li>
        <img src="../../images/work-sheet.svg" alt="Cog icon" class="icon">
        <span>日常运维</span>
      </li>
      <ul class="submenu">
        <div class="expand-triangle"></div>
        <li src="/workTblsheet/list"><span>工单管理</span></li>
      </ul>
      <li><img src="../../images/roll-back.svg" alt="Key icon" class="icon"><span>返回主页</span></li>-->
<template>
    <ul class="mainmenu" @touchstart="touchMainMenu" ref="mainmenu">
      <li v-for="item,index in menuItems" :key="index">
        <img src="../../images/revenue.svg" alt="User icon" class="icon" />
        <span>{{item.title}}</span>
      </li>
      
    </ul>
</template>
<!--touchMainMenu (){
        var $submenu = $('.submenu');
        var $mainmenu = $('.mainmenu');
        $mainmenu.on('touchstart','li',function(){
          $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
        }) ;
        $mainmenu.children('li:last-child').on('touchstart', function() {
          $mainmenu.fadeOut().delay(500);
        });
        self.bindTouchLi($submenu) ;
      }
      touchSubMenu () {
        $submenu.on('touchstart','li', function() {
          $submenu.siblings().find('li').removeClass('chosen');
          $(this).addClass('chosen');
          var path = $(this).attr("src") ;
          self.getDiffModules(path) ;
        });
      }-->
<script>
	export default {
	  name: 'mainMenu',
	  data () {
	    return {
	      msg: '菜单栏',
        menuItems : [
          {title:"营收管理",value:[
            {"title":"寻表开户","value":"/gasTblcustomer/show.do"},
            {"title":"账户管理","value":"/gasTblcustomer/list.do"},
            {"title":"IC卡管理","value":"/gasTblcard/list.do"},
            {"title":"充值缴费","value":"/gasTblcustomer/showPay.do"},
            {"title":"欠费处理","value":"/gasTblcustomer/showArrears.do"},
            {"title":"用户账单","value":"/gasTblcustomer/showBills.do"},
            {"title":"价格管理","value":"/gasTblprice/list.do"},
            {"title":"操作记录","value":"/gasTblcustomer/operateLog.do"}
          ],img:"../../images/revenue.svg"},
          {title:"系统监测",value:[
            {"title":"实时数据","value":"/baseTbldevice/showScadaLastData.do"},
            {"title":"休眠账户","value":"/gasTblcustomer/dormantCustomer.do?"}
          ],img:"../../images/sys-monitor.svg"},
          {title:"数据查询",value:[
            {"title":"日冻结数据","value":"/view/data/gasFrozenDataDaily.jsp"},
            {"title":"月冻结数据","value":"/view/data/gasFrozenDataMonthly.jsp"}
          ],img:"../../images/data-query.svg"},
          {title:"数据报表",value:[
            {"title":"营业厅购气明细表","value":"/reportDetail/purchaseGasDetail.do"}
          ],img:"../../images/data-report.svg"},
          {title:"报警查询",value:[
            {"title":"事件报警","value":"/gasTblalert/list.do"}
          ],img:"../../images/report-file.svg"},
          {title:"后台管理",value:[
            {"title":"系统参数","value":"/sysTblsysoption/list.do"},
            {"title":"角色管理","value":"/sysTblrole/list.do"},
            {"title":"人员管理","value":"/sysTbluser/list.do"},
            {"title":"菜单管理","value":"/sysTblsysmenu/list.do"},
            {"title":"营业厅管理","value":"/sysTbldepart/list.do"},
            {"title":"公司信息","value":"/sysTblcompany/list.do"},
            {"title":"区域管理","value":"/baseTblzone/list.do"},
            {"title":"表具管理","value":"/baseTbldevice/list.do"},
            {"title":"设备型号管理","value":"/sysTbldevicetype/list.do"},
            {"title":"GIS定位","value":"/view/gis/mapLocation.jsp"},
            {"title":"新闻编辑","value":"/issueTblnews/list.do"},
            {"title":"日志管理","value":"/sysTbllog/list.do"}
          ],img:"../../images/base-center.svg"},
          {title:"日常运维",value:[
            {"title":"工单管理","value":"/workTblsheet/list.do"}
          ],img:"../../images/roll-back.svg"}
        ]
	    }
	  },
    methods: {
      test () {
        console.log("this is menu ...") ;
      },
      //主节点点击事件
      touchMainMenu (e) {
        if("SPAN" === e.target.nodeName){
            let submenus = this.$refs.mainmenu.querySelectorAll("ul.submenu") ;
            console.log("the target is :",e.target) ;
        }
      }
    },
    components: {

    }
	}
</script>

<!-- 添加 "scoped" 属性用于限制样式只作用域当前组件 -->
<!--display:none;-->
<style scoped>
    *{
      font-size:1.27em;
    }
    .mainmenu {
      font-size: 16px;
      position:relative;
      padding:0;
    }

    .mainmenu > li {
      background-color: #e4644b;
      border-top: 1px solid #d05942;
      height: 48px;
      color: #f7f1e3;
      box-sizing: border-box;
      position:relative;
      padding:0 0 0 40px;
    }

    .mainmenu > li:first-child {
      border-radius: 7px 7px 0 0;
      border-top: 0;
    }

    .mainmenu > li:last-child {
      border-radius: 0 0 7px 7px;
    }

    .mainmenu > li span {
      display:block;
      line-height: 48px;
    }

    .mainmenu > li .icon {
      float: left;
      width: 20px;
      height: 20px;
      display:block;
      position:absolute;
      left:10px;
      top:15px;
    }

    .mainmenu > li .messages {
      background: url("../../images/messages.png") no-repeat;
      padding: 0;
      margin-top: -33px;
      margin-right: 19px;
      float: right;
      display: block;
      width: 34px;
      height: 18px;
      text-align: center;
      font-size: 11px;
      line-height: 19px;
    }

    .expand-triangle {
      background: url("../../images/expand.gif") top left no-repeat;
      height: 10px;
      content: " ";
      margin-left: -40px;
      background-size:100% 10px;
    }

    /*------------ Sub Menu ------------*/
    .submenu {
      box-sizing: border-box;
      color: #ae9f9f;
      font-size: 13px;
      content: " ";
      /*opacity: 0.5;*/
    }

    .submenu li {
      line-height: 20px;
      height: 35px;
      padding-top: 11px;
      margin-left: -40px;
      background-color: #484141;
      border-left: solid 6px #484141;
      transition: border-left 220ms ease-in;
    }

    .submenu .chosen,
    .submenu .chosen:hover {
      border-left: solid 6px #96d145;
    }

    .submenu li:hover {
      border-left: solid 6px #d05942;
    }

    .submenu li span {
      margin-left:30px;
    }

    .animate {
      animation: flip 2000ms ease-in-out alternate;
    }
    /*www.joshinrai.cn的样式*/
    .bold_font{
      font-weight:bold ;
    }
    table{
      border-collapse:collapse;
      width:100vw;
      line-height:1.8em;
    }

    body .container .container_ui .newest_alert ,
    body .container .container_ui .newest_action,
    body .container .container_ui .gas_profile{
      border-bottom:2px solid;
      text-align:left;
    }
    .newest_alert table{
      width:100vw;
      line-height:1.8em;
    }
    .newest_alert table thead {
      width:25vw;
      text-align:center;
    }
    .newest_alert table thead th{
      border-bottom:1px solid;
    }
    .newest_action table thead{
      width:50vw;
      text-align:center;
    }
    .newest_action table thead th{
      border-bottom:1px solid;
    }

    @keyframes flip {
      to {
        transform: rotateY(360deg);
      }
    }

    /* 动画效果 */
    @-webkit-keyframes pop {
      0% {
        -webkit-transform: scale(0);
                transform: scale(0);
      }
      50% {
        -webkit-transform: scale(1.2);
                transform: scale(1.2);
      }
      100% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }
    @keyframes pop {
      0% {
        -webkit-transform: scale(0);
                transform: scale(0);
      }
      50% {
        -webkit-transform: scale(1.2);
                transform: scale(1.2);
      }
      100% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }
    @-webkit-keyframes poprev {
      0% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.2);
                transform: scale(1.2);
      }
      100% {
        -webkit-transform: scale(0);
                transform: scale(0);
      }
    }
    @keyframes poprev {
      0% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.2);
                transform: scale(1.2);
      }
      100% {
        -webkit-transform: scale(0);
                transform: scale(0);
      }
    }
    @-webkit-keyframes popup {
      from {
        top: 10px;
        opacity: 0;
      }
      to {
        top: 0px;
        opacity: 1;
      }
    }
    @keyframes popup {
      from {
        top: 10px;
        opacity: 0;
      }
      to {
        top: 0px;
        opacity: 1;
      }
    }
</style>