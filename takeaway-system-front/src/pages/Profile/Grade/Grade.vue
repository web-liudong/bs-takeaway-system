<template>
 <div>
<div class="shop-header">
<nav class="shop-nav" >
    <a class="back" @click="$router.push('/home')" >
      <i class="iconfont icon-arrow_left"></i>
       </a>
       </nav>
       </div>

       <div class="mui-content" style="background-color:#fff">
		    <h5 style="background-color:#efeff4">慢生活</h5>
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="./images/1.jpg">
		                <div class="mui-media-body">幸福就是可以一起睡觉</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="./images/2.jpg">
		                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#"><img class="mui-media-object" src="./images/3.jpg">
		                <div class="mui-media-body">Color of SIP CBD</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="./images/4.jpg">
		                <div class="mui-media-body">静静看这世界</div></a></li>
		    </ul>
		</div>

</div>
</template>

<script>

export default {

}
</script>

<style scoped>
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

</style>
