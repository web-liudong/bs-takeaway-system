 /*
    基于state得getters得计算属性对象
    */
   export default {
    totalCount(state){
       return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count ,0)
    },
    totalPrice(state){
      return state.cartFoods.reduce((preTotal,food)=>preTotal+food.count*food.price ,0)
    },
    positiveSize(state){
      return state.ratings.reduce((preTotal,ratings)=>preTotal+ (ratings.rateType === 0?1:0) ,0)
    }
}
