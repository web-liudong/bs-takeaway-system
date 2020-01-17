<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li border-1px" @click="$router.push('/shop')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/1.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">鱼小喵</h4>
              <ul class="shop_detail_ul">
                <li class="supports">1.4km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">2.8</div>
                <div class="order_section">月售128单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥18起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥3</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px"  @click="$router.push('/shopone')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/2.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">一碗香麻辣香锅</h4>
              <ul class="shop_detail_ul">
                <li class="supports">2.7km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">4.3</div>
                <div class="order_section">月售126单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥23起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px" @click="$router.push('/shoptwo')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/3.jpeg" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">人民公社私房菜</h4>
              <ul class="shop_detail_ul">
                <li class="supports">1.7km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">3.8</div>
                <div class="order_section">月售346单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥3</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px" @click="$router.push('/shopthree')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/4.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">和番丼饭</h4>
              <ul class="shop_detail_ul">
                <li class="supports">3.8km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                </div>
                <div class="rating_section">5.0</div>
                <div class="order_section">月售2004单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥30起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px" @click="$router.push('/shopfour')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/5.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">大望披萨</h4>
              <ul class="shop_detail_ul">
                <li class="supports">2.7km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">4.0</div>
                <div class="order_section">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px" @click="$router.push('/shopfive')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/6.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">正宗水煎包</h4>
              <ul class="shop_detail_ul">
                <li class="supports">1.4km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">2.8</div>
                <div class="order_section">月售128单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥18起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥3</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px" @click="$router.push('/shopsix')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/7.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">棒！披萨</h4>
              <ul class="shop_detail_ul">
                <li class="supports">3.5km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">4.3</div>
                <div class="order_section">月售126单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥23起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px" @click="$router.push('/shopseven')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/8.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">傻四肉饼</h4>
              <ul class="shop_detail_ul">
                <li class="supports">1.7km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">3.8</div>
                <div class="order_section">月售346单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥3</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px" @click="$router.push('/shopeight')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/9.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">河间驴肉火烧</h4>
              <ul class="shop_detail_ul">
                <li class="supports">3.9km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                </div>
                <div class="rating_section">5.0</div>
                <div class="order_section">月售2004单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥30起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li border-1px" @click="$router.push('/shopnine')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/10.png" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">麻辣小龙虾</h4>
              <ul class="shop_detail_ul">
                <li class="supports">2.2km</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">4.0</div>
                <div class="order_section">月售106单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Star from '../Star/Star'
export default {
  name: "ShopList",

  data() {
    return {
      //  baseImgUrl:'http://cangdu.org:8001/img/'
    };
  },
  components:{
   Star
  },
  mounted() {},
  methods: {},
  computed:{
    ...mapState(['shops'])
  }
};
</script>

<style style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.shop_container {
  margin-bottom: 50px;

  .shop_list {
    .shop_li {
      bottom-border-1px(#f1f1f1);
      width: 100%;

      >a {
        clearFix();
        display: block;
        box-sizing: border-box;
        padding: 15px 8px;
        width: 100%;

        .shop_left {
          float: left;
          box-sizing: border-box;
          width: 23%;
          height: 75px;
          padding-right: 10px;

          .shop_img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .shop_right {
          float: right;
          width: 77%;

          .shop_detail_header {
            clearFix();
            width: 100%;

            .shop_title {
              float: left;
              width: 200px;
              color: #333;
              font-size: 16px;
              line-height: 16px;
              font-weight: 700;

              &::before {
                content: '品牌';
                display: inline-block;
                font-size: 11px;
                line-height: 11px;
                color: #333;
                background-color: #ffd930;
                padding: 2px 2px;
                border-radius: 2px;
                margin-right: 5px;
              }
            }

            .shop_detail_ul {
              float: right;
              margin-top: 3px;

              .supports {
                float: left;
                font-size: 10px;
                color: #999;
                border: 1px solid #f1f1f1;
                padding: 0 2px;
                border-radius: 2px;
              }
            }
          }

          .shop_rating_order {
            clearFix();
            width: 100%;
            margin-top: 18px;
            margin-bottom: 8px;

            .shop_rating_order_left {
              float: left;
              color: #ff9a0d;

              .star { // 2x图 3x图
                float: left;
                font-size: 0;

                .star-item {
                  display: inline-block;
                  background-repeat: no-repeat;
                }

                &.star-48 {
                  .star-item {
                    width: 20px;
                    height: 20px;
                    margin-right: 22px;
                    background-size: 20px 20px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('./images/stars/star48_on');
                    }

                    &.half {
                      bg-image('./images/stars/star48_half');
                    }

                    &.off {
                      bg-image('./images/stars/star48_off');
                    }
                  }
                }

                &.star-36 {
                  .star-item {
                    width: 15px;
                    height: 15px;
                    margin-right: 6px;
                    background-size: 15px 15px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('./images/stars/star36_on');
                    }

                    &.half {
                      bg-image('./images/stars/star36_half');
                    }

                    &.off {
                      bg-image('./images/stars/star36_off');
                    }
                  }
                }

                &.star-24 {
                  .star-item {
                    width: 10px;
                    height: 10px;
                    margin-right: 3px;
                    background-size: 10px 10px;

                    &:last-child {
                      margin-right: 0;
                    }

                    &.on {
                      bg-image('./images/stars/star24_on');
                    }

                    &.half {
                      bg-image('./images/stars/star24_half');
                    }

                    &.off {
                      bg-image('./images/stars/star24_off');
                    }
                  }
                }
              }

              .rating_section {
                float: left;
                font-size: 10px;
                color: #ff6000;
                margin-left: 4px;
              }

              .order_section {
                float: left;
                font-size: 10px;
                color: #666;
                transform: scale(0.8);
              }
            }

            .shop_rating_order_right {
              float: right;
              font-size: 0;

              .delivery_style {
                transform-origin: 35px 0;
                transform: scale(0.7);
                display: inline-block;
                font-size: 12px;
                padding: 1px;
                border-radius: 2px;
              }

              .delivery_left {
                color: #fff;
                margin-right: -10px;
                background-color: #02a774;
                border: 1px solid #02a774;
              }

              .delivery_right {
                color: #008DE1;
                border: 1px solid #02a774;
              }
            }
          }

          .shop_distance {
            clearFix();
            width: 100%;
            font-size: 12px;

            .shop_delivery_msg {
              float: left;
              transform-origin: 0;
              transform: scale(0.9);
              color: #666;
            }

            .segmentation {
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
