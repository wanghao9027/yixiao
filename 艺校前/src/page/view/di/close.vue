<template>
	<div>
		<div class='close_wrap'>
			<div class="details_shop_one">
				<span @click="go()">
					< </span> <span> 去结算
				</span>
			</div>
			<div class="close_one">
				<span><i class="iconfont icon-dizhi_" style="font-size: 24px;"></i>暂无收获地址，去选择地址</span>
				<span> > </span>
			</div>
			<div class="close_two">
				<div class="close_t_o">
					<img :src="rng.imgSrc" alt="">
					<div class="close_t_t">
						<div class="close_t_f">
							<span>{{rng.name}}</span>
							<span>{{rng.num}}</span>
						</div>
						<p>规格：支付</p>
						<p>￥{{rng.price}}/件</p>
					</div>
				</div>
			</div>
			<div class="close_four">
				<ul>
					<li>
						<span>商品金额</span>
						<span>￥{{rng.price}}</span>
					</li>
					<li>
						<span>运费</span>
						<span>￥0</span>
					</li>
					<li>
						<span>订单总计</span>
						<span>￥21600.00</span>
					</li>
					<li>
						<span>福包抵扣</span>
						<span>￥0</span>
					</li>
				</ul>
			</div>
			<div class="close_five">
				微信支付￥{{rng.allPrice}}
			</div>
		</div>
	</div>
</template>

<script>
	import bus from "@/assets/bus.js";
	export default {
		data() {
			return {
				rng: [],
				price: ''
			}
		},
		methods: {
			go() {
				this.$router.back(-1);
				bus.$emit("my",this.rng);
			}
		},
		mounted() {
			this.rng = JSON.parse(this.$route.query.data)	
			// bus.$on("myFun", (val)=>{
			// 	this.rng[0] = val
			// 	this.rng.push(1)
			// 	this.rng.splice(1,1)
				console.log(this.rng);
			// })
		}
	}
</script>

<style scoped lang='scss'>
	.close_wrap {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}

	.details_shop_one {
		display: flex;
		height: 60px;
		align-items: center;
		font-size: 30px;

		span {
			margin: 0 0 0 20px;
		}
	}

	.close_one {
		width: 90%;
		height: 100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		span {
			font-size: 25px;
		}

	}

	.close_two {
		width: 100%;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #eee;

		.close_t_o {
			width: 90%;
			height: 85%;
			display: flex;

			img {
				width: 160px;
			}

			.close_t_t {

				width: calc(100% - 160px);
				display: flex;
				flex-direction: column;
				padding: 0 0 0 5%;

				p {
					height: 40px;
					display: flex;
					align-items: center;
					font-size: 20px;
				}
			}
		}



	}

	.close_t_f {
		display: flex;
		height: 30px;
		align-items: center;
		font-size: 30px;
		justify-content: space-between;

	}

	.close_four {
		width: 100%;
		display: flex;
		background: #4CAF50;

		ul {
			width: 90%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			li {

				height: 90px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 20px;
				border-bottom: 1px solid #ccc;
			}
		}
	}

	.close_five {
		width: 100%;
		height: 80px;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgb(252, 59, 60);
		font-size: 30px;
		color: #fff;
	}
</style>
