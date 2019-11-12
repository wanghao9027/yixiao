<template>
	<div>


			<div class="details_shop">
				<div class="details_shop_one">
					<span @click="go()">
						< </span> <span> 商城
					</span>
				</div>
				<div class="details_one">
					<img :src="omg.imgSrc" alt="">
				</div>
				<div class="details_two">
					<p>{{omg.name}}</p>
				</div>

				<div class="details_three">
					<div>
						￥{{omg.price}}/套
					</div>
					<div>
						<span>浏览：542</span>
						<span>已售：5875套</span>
					</div>
				</div>
				<div class="details_four">
					<p>详情</p>
					<img :src="omg.imgSrc" alt="">
					<p class="details_p">技术支持TEL 400-0635-993</p>
				</div>

				<div class="details_fixed">
					<ul class="fixed_three">
						<li>
							<img src="@/assets/img/10_02.png" alt="">
							<span>商城</span>
						</li>
						<li>
							<img src="@/assets/img/10_01.png" alt="">
							<span>客服</span>
						</li>
					</ul>
					<div class="fixed_one" @click="join()">加入购物车</div>
					<div class="fixed_two" @click="imme()">立即购买</div>
				</div>
				<mt-popup v-model="popupVisible" position="bottom">
					<div class="popup">
						<div class="popop_wrap">
							<div class="popup_one">
								<div>
									<img :src="omg.imgSrc" alt="">
								</div>

								<div class="p_one_one">
									<p>￥{{omg.price}}</p>
									<p>库存：9999套</p>
								</div>
								<div class="p_one_two" @click="die()">X</div>
							</div>
							<div class="popup_two">价格</div>
							<div class="popup_three">支付</div>
							<div class="popup_four">
								<span>数量</span>
								<div>
									<button @click="minuse()">-</button>
									<span v-model="num">{{num}}</span>
									<button @click="add()">+</button>
								</div>
							</div>
							<div class="popup_five">合计：{{allPrice}}元</div>

						</div>
						<div class="popup_sex" @click="ok(omg.id)">确定</div>
					</div>
				</mt-popup>

			</div>
		
		<!--顶部 固定购物车 -->
		<icon></icon>

	</div>
</template>

<script>
	import icon from "@/components/di/icon"
	import bus from "@/assets/bus.js";
	import {
		MessageBox
	} from 'mint-ui'
	export default {
		components: {
			icon
		},
		data() {
			return {
				popupVisible: false,
				num: '1',
				omg: [],
				ar: JSON.parse(localStorage.getItem("")) || []
				//	om: {}
			}
		},
		methods: {
			join() {
				this.popupVisible = true;
			},
			die() {
				this.popupVisible = false;
			},
			add() {
				this.num++;
			},
			minuse() {
				this.num--;
				if (this.num <= 1) {
					this.num = 1;
					MessageBox('不能再少啦')
				}
			},
			go() {
				this.$router.back(-1);
			},
			ok(id) {
				//this.popupVisible = false;
				
				let om = {
					price: this.omg.price,
					num: this.num,
					allPrice: this.allPrice,
					name: this.omg.name,
					type: this.omg.type,
					imgSrc: this.omg.imgSrc,
					id: this.omg.id
				};
				this.$router.push({
					path: "/close",
					query:{
						data:JSON.stringify(om)
					}
				})
				// bus.$emit("myFun", om);
				
			},
			imme() {
				this.popupVisible = true;
			}
		},
		computed: {
			allPrice() {
				let price = 0;
				return this.num * this.omg.price
			}
		},
		mounted() {
			this.omg = JSON.parse(this.$route.query.id)	
			console.log(this.omg)
		}
	}
</script>

<style scoped lang="scss">
	.details_shop {
		width: 100vw;
		display: flex;
		// justify-content: space-between;
		flex-direction: column;

		.details_shop_one {
			display: flex;
			height: 60px;
			align-items: center;
			font-size: 30px;

			span {
				margin: 0 0 0 20px;
			}
		}

		.details_one {
			display: flex;

			img {
				width: 100%;
				height: 40vh;
			}
		}

		.details_two {
			display: flex;
			align-items: center;
			height: 60px;
			border-bottom: 1px solid #ccc;

			p {
				text-indent: 30px;
				font-size: 25px;
			}
		}

		.details_three {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 80px;
			font-size: 24px;

			div:nth-child(1) {
				color: rgb(214, 45, 0);
			}

			div:nth-child(2) {
				color: rgb(121, 121, 121);
			}
		}

		.details_four {
			display: flex;
			flex-direction: column;
			align-items: center;

			p:nth-child(1) {
				display: flex;
				justify-content: center;
				height: 60px;
				align-items: center;
				font-size: 30px;
			}

			img {
				width: 80%;
				height: 35vh;
			}

			.details_p {
				@extend p:nth-child(1);
				font-size: 16px;
			}
		}

		.details_fixed {
			width: 100vw;
			height: 5vh;
			position: fixed;
			bottom: 0;
			display: flex;

			.fixed_one {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24px;
				color: #fff;
				width: 33%;
				height: 100%;
				background: rgb(255, 179, 1);
			}

			.fixed_two {
				@extend .fixed_one;
				background: rgb(224, 44, 36);
			}

			.fixed_three {
				width: 33%;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
		}
	}

	.popup {
		width: 100vw;
		height: 50vh;
		display: flex;
		flex-direction: column;
	}

	.popop_wrap {
		width: 90vw;
		margin: 0 auto;
	}

	.popup_one {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// justify-content: space-around;
		height: 100px;
		position: relative;

		img {
			width: 140px;
			height: 140px;
			position: absolute;
			top: -50px;
			left: 0;
		}

		.p_one_one {
			display: flex;
			flex-direction: column;
			height: 100px;
			line-height: 40px;
			margin: 0 0 0 10px;

			p:nth-child(1) {
				color: red;
				font-size: 22px;
			}

			p:nth-child(2) {
				font-size: 18px;
			}
		}

		.p_one_two {
			width: 50px;
			height: 50px;
			border: 1px solid #ccc;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 20px;
		}

	}

	.popup_two {
		display: flex;
		align-items: center;
		height: 60px;

		font-size: 30px;
	}

	.popup_three {
		@extend .popup_two;
		padding: 20px;
	}

	.popup_four {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		font-size: 30px;
		border-top: 1px solid red;
		border-bottom: 1px solid red;

		button {
			border: none;
			font-size: 20px;
			outline: none;
		}
	}

	.popup_five {
		display: flex;
		justify-content: flex-end;
		height: 60px;
		align-items: center;
		font-size: 25px;
	}

	.popup_sex {
		width: 100%;
		height: 60px;
		background: red;
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0;
		justify-content: center;
		color: #fff;
		font-size: 30px;
	}
</style>
