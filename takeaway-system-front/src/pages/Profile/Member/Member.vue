<template>
<div class="wrap">
        <div class="shop-header">
<nav class="shop-nav" >
    <a class="back" @click="$router.push('/home')" >
      <i class="iconfont icon-arrow_left"></i>
       </a>
       </nav>
       </div>

       <div class="mui-content">
			<div class="mui-card">
				<div class="mui-card-header">饿了吧会员中心</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						拿商品经济的视角去解读，顾名思义是某一类志趣相同、取向一致的消费人群，被商家归类梳理，并冠以俱乐部、精英一族、小众群体的称谓，投其所好研发产品、完善服务。这是市场经济充分竞争的产物，应个性化需求而衍生的市场供给不断细分、再细分。也是一些商家采用会员制的方式，积累会员，给予优惠，让其享受会员待遇。
					</div>
				</div>
				<div class="mui-card-footer">2020.1.15</div>
			</div>
</div>
<div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="./images/120.jpg" />
					<div class="mui-media-body">
						小M
						<p>发表于 2016-06-30 15:30</p>
					</div>

				</div>
				<div class="mui-card-content" >
					<img src="./images/yuantiao.jpg" alt="" width="100%"/>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Comment</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
      <div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="./images/120.jpg" />
					<div class="mui-media-body">
						小M
						<p>发表于 2016-06-30 15:30</p>
					</div>

				</div>
				<div class="mui-card-content" >
					<img src="./images/muwu.jpg" alt="" width="100%"/>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Comment</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
      <div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="./images/120.jpg" />
					<div class="mui-media-body">
						小M
						<p>发表于 2016-06-30 15:30</p>
					</div>

				</div>
				<div class="mui-card-content" >
					<img src="./images/shuijiao.jpg" alt="" width="100%"/>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Comment</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
      <div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="./images/120.jpg" />
					<div class="mui-media-body">
						小M
						<p>发表于 2016-06-30 15:30</p>
					</div>

				</div>
				<div class="mui-card-content" >
					<img src="./images/cbd.jpg" alt="" width="100%"/>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Comment</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
		</div>

</template>

<script>
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
