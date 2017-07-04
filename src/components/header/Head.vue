<!--@author:www.joshinrai.cn-->
<template>
  <div>
    <div class="container_ui__heading" ref="container">
      <div class="menu_icon" >
        <img src="../../assets/menu.svg" alt="" @click="show = !show">
      </div>
      <h1>燃气表平台</h1>
      <div class="config_icon">
        <img src="../../assets/config.svg" alt="" @touchstart="config_toggle">
      </div>
    </div>
    <transition name="fade">
      <ul class="mainmenu" v-if="show" @touchstart="touchMainMenu">
        <div v-for="item,index in menuItems" :key="index">
            <li >
              <img :src="item.img" alt="User icon" class="icon" />
              <span>{{item.title}}</span>
            </li>
            <ul class="submenu">
              <div class="expand-triangle"></div>
              <li :src="val.value" v-for="val in item.value">
                <span :src="val.value">{{val.title}}</span>
              </li>
            </ul>
        </div>
      </ul>
    </transition>
    <ul class="setting" ref="setting">
      <li>
        <img src="../../images/revenue.svg" alt="reset password" class="icon" />
        <span>重置密码</span>
      </li>
      <li>
        <img src="../../images/revenue.svg" alt="reset password" class="icon" />
        <span>退出</span>
      </li>
    </ul>
  </div>
    
</template>
<!--this.$refs.setting.style.display = "none" ;
    let menu = this.$refs.mainmenu.style.display ;
    "block" == menu ? 
      this.$refs.mainmenu.style.display = "none" : 
      this.$refs.mainmenu.style.display = "block" ;
    this.$refs.submenu[0].style.display = "block" ;
-->
<script>
	export default {
	  name: 'head',
	  data () {
	    return {
	      msg: '头部' ,
        show:false,

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
          ],img:require("../../images/revenue.svg")},
          {title:"系统监测",value:[
            {"title":"实时数据","value":"/baseTbldevice/showScadaLastData.do"},
            {"title":"休眠账户","value":"/gasTblcustomer/dormantCustomer.do?"}
          ],img:require("../../images/sys-monitor.svg")},
          {title:"数据查询",value:[
            {"title":"日冻结数据","value":"/view/data/gasFrozenDataDaily.jsp"},
            {"title":"月冻结数据","value":"/view/data/gasFrozenDataMonthly.jsp"}
          ],img:require("../../images/data-query.svg")},
          {title:"数据报表",value:[
            {"title":"营业厅购气明细表","value":"/reportDetail/purchaseGasDetail.do"}
          ],img:require("../../images/data-report.svg")},
          {title:"报警查询",value:[
            {"title":"事件报警","value":"/gasTblalert/list.do"}
          ],img:require("../../images/report-file.svg")},
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
          ],img:require("../../images/base-center.svg")},
          {title:"日常运维",value:[
            {"title":"工单管理","value":"/workTblsheet/list.do"}
          ],img:require("../../images/roll-back.svg")}
        ]
	    }
	  },
    methods: {
      //菜单栏显隐效果
      menu_toggle () {
        
        console.log("this is a test ...") ;
      },
      //设置栏显隐效果
      config_toggle () {
        this.$refs.mainmenu.style.display = "none" ;
        let setting = this.$refs.setting.style.display ;
        "block" == setting ? 
          this.$refs.setting.style.display = "none" : 
          this.$refs.setting.style.display = "block" ;
      },
      //主节点点击事件
      touchMainMenu (e) {
        if("SPAN" === e.target.nodeName){
            let submenus = this.$refs.mainmenu.querySelectorAll("ul.submenu") ;
            console.log("the target is :",e.target.attributes.src.value) ;
            console.log("the target is :",e.target) ;
        }
      }
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
    .container {
      width: 100vw;
      text-align: center;
      min-height: 94vh;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      bottom: 0;
    }
    .container_ui__heading {
      height: 8vh;
      width: 100%;
      background: #948aec;
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
      color: #404040;
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

    /****菜单样式****/
    .mainmenu {
      text-align:left;
      font-size: 16px;
      padding:0;
      position:absolute;
      width:100%;
      padding-bottom:6vh;
      display:block;
      z-index:1;
      transition: all 1s ease;
    }
    .mainmenu > div > li {
      background-color: #e4644b;
      border-top: 1px solid #d05942;
      height: 48px;
      color: #f7f1e3;
      box-sizing: border-box;
      position:relative;
      padding:0 0 0 40px;
    }

    .mainmenu > div:first-child {
      border-radius: 7px 7px 0 0;
      border-top: 0;
    }

    .mainmenu > div:last-child {
      border-radius: 0 0 7px 7px;
    }

    .mainmenu > div span {
      display:block;
      line-height: 48px;
      height:48px;
    }

    .mainmenu > div .icon {
      float: left;
      width: 20px;
      height: 20px;
      display:block;
      position:absolute;
      left:10px;
      top:15px;
    }

    .mainmenu > div > li .messages {
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
    .mainmenu ul {
      box-sizing: border-box;
      color: #ae9f9f;
      font-size: 13px;
      content: " ";
      display:none;
      /*opacity: 0.5;*/
    }

    .mainmenu div:first-child > ul{
      display:block;
    }

    .submenu li {
      line-height: 20px;
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
      margin-left:3em;
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

    .setting{
      width:100vw;
      position:absolute;
      background-color:#919191;
      z-index:1;
      display:none;
    }

    .setting > li{
      border-bottom:1px solid;
    }
    .setting > li:last-child span{
      color:#d73435;
    }

    .setting .icon {
      float: left;
      width: 1em;
      height: 1em;
      display:block;
      margin-left:1em;
      margin-top:0.25em;
    }
    
    /****过渡效果****/
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
      opacity: 0
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