<template>
<div>
  <div class="shop-header">
<nav class="shop-nav" >
    <a class="back" @click="$router.push('/home')" >
      <i class="iconfont icon-arrow_left"></i>
       </a>
       </nav>
       </div>


<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell mui-media">
								<a class="mui-navigate-right" href="#account">
									<img class="mui-media-object mui-pull-left head-img" id="head-img" src="./images/120.jpg">
									<div class="mui-media-body">
										服务中心
										<p class='mui-ellipsis'>账号:Hello World</p>
									</div>
								</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#account" class="mui-navigate-right">账号与安全</a>
							</li>
              	<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">我的收藏 <i class="mui-pull-right update"></i></a>
							</li>
              	<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">我的客服 <i class="mui-pull-right update"></i></a>
							</li>

							<li class="mui-table-view-cell">
								<a href="#notifications" class="mui-navigate-right">新消息通知</a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#privacy" class="mui-navigate-right">隐私</a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#general" class="mui-navigate-right">通用</a>
							</li>
             	<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">推荐有奖 <i class="mui-pull-right update"></i></a>
							</li>
              	<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">商务合作 <i class="mui-pull-right update"></i></a>
							</li>
              	<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">办卡有礼 <i class="mui-pull-right update"></i></a>
							</li>
              	<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">3小时公益 <i class="mui-pull-right update"></i></a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">关于 <i class="mui-pull-right update">V3.1.0</i></a>
							</li>
						</ul>







			</div>


</template>

<script >
export default {

}
</script>

<style scoped>
@import '../../../lib/mui/css/mui.css/';
@import '../../../lib/mui/css/icons-extra.css';
   .shop-header {
    height: 100%;
    position: relative;
    background: #fff;
    color: #fff;
    overflow: hidden;
     }
      .shop-nav {
      background-color: #008de1;
      background-size: cover;
      background-repeat: no-repeat;

      height: 40px;
      padding: 5px 10px;
      position: relative;
      }
        .back {
        position: absolute;
        top: 10px;
        left: 0;
        }
        .icon-arrow_left {
          display: block;
          padding: 5px;
          font-size: 20px;
          color: #fff;
        }
        .mui-ellipsis{
          margin-top: 10px;
        }
</style>
