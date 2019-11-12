<template>
	<div>
		<div class="car_wrap">
			<div class="details_shop_one">
				<span @click="go()">
					< </span> <span> 购物车
				</span>
			</div>
			<div class="car_one">
				<div class="car_one_o">
					<img src="@/assets/img/1_15.png" alt="">
					<span>来自招生办公室的特权折扣</span>
				</div>
				<div class="bianji">
					<span>编辑商品</span>
				</div>
			</div>

			<div class="car_two">
				<ul class="car_two_one">
					<li v-for="item in qu">
						<input type="checkbox" class="onp" v-model="item.isChecked">
						<div class="car_img">
							<img :src="item.imgSrc" alt="">
						</div>
						<div class="car_two_thr">
							<div class="car_two_tr">
								<span>{{item.name}}</span>
								<span>￥{{item.price}}</span>
							</div>
							<p>规格：支付</p>
							<div>
								<span>9套</span>
								<i class=""></i>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="car_three">
				<div class="car_three_o">
					<div class="car_t_o_o">
						<input type="checkbox" v-model="full">
						<span>全选</span>
					</div>
					<div class="car_t_o_f">
						<div class="al-m">总计<span>￥{{all}}</span></div>
						<span>不含运费</span>
					</div>
				</div>
				<div class="car_three_t">
					去结算
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				qu: [{
						id: 0,
						"type": "0",
						"imgSrc": '../static/img/4_03.png',
						"name": "一对一（套餐1）",
						"price": "14999.00",
						"isChecked": false,
						"count":2
					},
					{
						id: 1,
						"type": "0",
						"imgSrc": '../static/img/4_03.png',
						"name": "一对一（套餐1）",
						"price": "13999.00",
						"isChecked": false,
						"count":2
					},
					{
						id: 2,
						"type": "0",
						"imgSrc": '../static/img/7_03.png',
						"name": "一对一（套餐2）",
						"price": "11999.00",
						"isChecked": false,
						"count":2
					},
					{
						id: 3,
						"type": "0",
						"imgSrc": '../static/img/7_05.png',
						"name": "一对一（套餐3）",
						"price": "12999.00",
						"isChecked": false,
						"count":2
					}
				]
			}
		},
		methods: {
			go() {
				this.$router.back(-1);
			}
		},
		computed: {
			full: {
				get() {
					return this.qu.every(item => {
						return item.isChecked
					})

				},
				set(val) {
					return this.qu.forEach(item => {
						return item.isChecked = val;
					})
				}
			},
			
			all() {
				let num = 0;
				this.qu.forEach(item => {
					if (item.isChecked) {
						num += item.price*item.count
					}
				})
				return num;
			}


		}
	}
</script>

<style scoped lang="scss">
	.details_shop_one {
		display: flex;
		height: 60px;
		align-items: center;
		font-size: 30px;

		span {
			margin: 0 0 0 20px;
		}
	}

	.car_wrap {
		width: 100vw;
		display: flex;
		flex-direction: column;
	}

	.car_one {
		width: 90%;
		margin: 0 auto;
		display: flex;
		height: 80px;
		align-items: center;
		justify-content: space-between;
	}

	.bianji {
		color: red;
		font-size: 25px;
	}

	.car_one_o {
		display: flex;
		align-items: center;

		img {
			width: 50px;
			height: 50px;
		}

		span {
			text-indent: 20px;
			font-size: 18px;

		}
	}

	.car_two {
		display: flex;

	}

	.car_two_one {
		width: 100%;
		display: flex;
		flex-direction: column;

		li {
			width: 90%;
			height: 100px;
			margin: 10px auto;
			justify-content: space-between;
			display: flex;
			align-items: center;
			padding: 0 0 20px 0;
			border-bottom: 1px solid #ccc;
		}
	}

	.car_two_thr {
		width: 80%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		p {
			height: 30px;
			font-weight: bold;
			align-items: center;
		}
	}

	.car_img {
		img {
			width: 100px;
			height: 100px;
			margin: 0 20px 0 20px;
		}
	}

	.car_two_tr {
		display: flex;
		justify-content: space-between;
		font-size: 24px;
		font-weight: bold;
	}

	.onp {
		display: flex;
		width: 30px;
		height: 30px;
	}

	.car_three {
		width: 100%;
		display: flex;
		justify-content: space-between;
		height: 80px;
		background: #DEDEDE;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.car_three_o {
		width: calc(100% - 200px);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.car_three_t {
		width: 200px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		font-size: 25px;
		background: rgb(252, 59, 60);
		color: #fff;
	}

	.car_t_o_o {
		display: flex;

		input {
			width: 25px;
			height: 25px;
			padding: 0 0 0 20px;
		}

		span {
			font-size: 25px;
			padding: 0 0 0 20px;
		}
	}

	.car_t_o_f {
		display: flex;
		flex-direction: column;
	}

	.al-m {
		padding: 0 20px 0 0;
		font-size: 30px;

		span {
			color: red;
		}
	}
</style>
