<template>
    <div>
      <ShopHeaderThree></ShopHeaderThree>
      <div class="tab">
        <div class="tab-item">
          <router-link to="/shopthree/goods" replace>点餐</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shopthree/ratings" replace>评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shopthree/info" replace>商家</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
import ShopHeaderThree from '../../components/ShopHeaderThree/ShopHeaderThree'

export default {
   components:{
     ShopHeaderThree
   },
  //  mounted(){
  //    this.$store.dispatch('getShopInfo')
  //  }
}
</script>

<style style lang="stylus" rel="stylesheet/stylus">
        @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #008DE1
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #008DE1
</style>
