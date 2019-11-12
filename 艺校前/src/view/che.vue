<template>
	<div class="shop_cart">
	    加入购物车动画(css实现):
	    <div class="add">
	      <button @click="addShopCart">add</button>
	      <transition name="shop_cart">
	        <img class="add_img" v-if="addShow" src="../../static/images/8_03.png" alt="">
	      </transition>
	    </div>
	    <div class="cart">
	      <img src="../../static/images/1_18.png" alt="">
	    </div>
	</div>
</template>

<script>
export default{
	name: 'myTransition',
	data() {
	  return {
		addShow: false
	  }
	},
	methods:{
		addShopCart(){
			this.addShow = true
			setTimeout(()=>{
				this.addShow = false
			}, 1000);
		}
	}
}
</script>

<style scoped>
  .transition_test {
    text-align: left;
    padding-bottom: 300px;
  }
  .shop_cart {
    padding: 20px;
  }
  .shop_cart .add {
    position: relative;
    margin-top: 100px;
    width: 500px;
    display: inline-block;
  }
  .shop_cart .add button {
    position: absolute;
    z-index: 99;
  }
  .shop_cart .cart{
    width: 300px;
    display: inline-block;
  }
  .shop_cart .cart img {
    width: 100%;
  }
  // 一开始调整好商品图片在购物车的位置,移入效果最后显示是在一开始定义好的位置
  .shop_cart .add_img {
    width: 100px;
    position: absolute;
    left: 600px;
    top: -160px;
  }
  // 可以有两种方式实现飞入动画,用动画的效果感觉会更好一点
  /* 动画效果实现 */
  /* @keyframes bounce-in {
    0% {
      transform: scale(1);
      transform: translate(-610px, 100px);
    }
    100% {
      transform: scale(.5);
      transform: translate(0px, 0px);
    }
  }
  .shop_cart-enter-active {
    animation: bounce-in 1s;
  } */

  /* CSS类名实现 */
  .shop_cart-enter-active {
    transition: all 1s ease-out;
  }
  .shop_cart-enter {
    opacity: 0;
    transform: scale(.5);
    transform: translate(-610px, 100px);
  }
</style>
