<template>
	<div id="shop">
		<!-- 头部开始 -->
		<div class="shop_wrap">

			<div class="shop_one">
				<img src="@/assets/img/1_18.png" alt="">
			</div>
			<div class="shop-two">
				<div>
					<img src="@/assets/img/1_03.png" alt="">
				</div>
				<div>
					<p>飞扬艺校</p>
					<span>认证企业</span>
				</div>
			</div>
		</div>
		<!-- 头部结束 -->


		<!-- 第二部分开始-->
		<div class="wrap_two">
			<!-- <mt-navbar v-model="selected">
				<mt-tab-item :id=item.id v-for="item in lis">{{item.name}}</mt-tab-item>
			</mt-navbar>

			 tab-container 
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<mt-cell v-for="n in 10" :title="'content ' + n" />
				</mt-tab-container-item>
			</mt-tab-container> -->
			<div class="two_one">
				<ul>
					<li v-for="item,index in lis" :id="item.id" @click="tab(index)" :class='{active:currentIndex==index}'>{{item.name}}</li>
				</ul>
				<div @click='search()'>
					三

				</div>
			</div>
			<div class="two_three">
				<ul>
					<li @click="shop_details(item.id,index)" v-for="item,index in list">
						<img :src="item.imgSrc" alt="">
						<p>{{item.name}}</p>
						<span>￥{{item.price}}/套</span>
					</li>
				</ul>
				<div class="two_three_one">

					<p>技术支持TEL400-0635-993</p>
				</div>
			</div>

		</div>
		<!-- 第二部分结束 -->
		<!-- 定位 -->
		<div class="fix">

		</div>
		<!-- 定位结束 -->
			<icon></icon>

		
	</div>
</template>

<script>
	import icon from "@/components/di/icon"
	export default {
		components:{
			icon
		},
		data() {
			return {
				selected: "",
				currentIndex: 0,
				lis: [{
						"id": "1",

						"name": '全部'
					},
					{
						"id": "2",
						"name": '一对一套餐'
					},
					{
						"id": "3",
						"name": "一对多套餐"
					}
				],
				arr: [{
						id: 0,
						"type": "0",
						"imgSrc": '../static/img/4_03.png',
						"name": "一对一（套餐1）",
						"price": "14999.00"
					},
					{
						id: 1,
						"type": "0",
						"imgSrc": '../static/img/4_03.png',
						"name": "一对一（套餐1）",
						"price": "13999.00"
					},
					{
						id: 2,
						"type": "0",
						"imgSrc": '../static/img/7_03.png',
						"name": "一对一（套餐2）",
						"price": "11999.00"
					},
					{
						id: 3,
						"type": "0",
						"imgSrc": '../static/img/7_05.png',
						"name": "一对一（套餐3）",
						"price": "12999.00"
					},
					{
						id: 4,
						"type": "0",
						"imgSrc": '../static/img/7_09.png',
						"name": "一对一（套餐4）",
						"price": "9999.00"
					},
					{
						id: 5,
						"type": "1",
						"imgSrc": '../static/img/7_10.png',
						"name": "一对一（套餐5）",
						"price": "8999.00"
					},
					{
						id: 6,
						"type": "2",
						"imgSrc": '../static/img/7_13.png',
						"name": "一对一（套餐6）",
						"price": "6999.00"
					},
					{
						id: 7,
						"type": "2",
						"imgSrc": '../static/img/7_14.png',
						"name": "一对一（套餐7）",
						"price": "7999.00"
					},
					{
						id: 8,
						"type": "2",
						"imgSrc": '../static/img/7_17.png',
						"name": "一对一（套餐7）",
						"price": "9999.00"
					}
				],
				list: []
			}
		},
		created(){
			//数据
			this.$http.get('api/product').then(res=>{
				//console.log(res)
			})

			
		},
		methods: {
			shop_details(id) {
				let allData = JSON.stringify(this.arr[id])
				
				this.$router.push({
					path: "/details",
					query: {
						id: allData
					}
				})
			},
			tab(index) {
				this.currentIndex = index;
				this.list = this.arr.filter(item => {
					return item.type == index
				})
			},
			search() {
				this.$router.push({
					path: "/search"
				})
			}
		},
		mounted() {
			this.list = this.arr.filter(item => {
				return item.type == 0
			})

		}
	}
</script>

<style scoped lang="scss">
	/* 头部开始 */
	.shop_wrap {
		width: 100vw;
		height: 400px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		position: relative;
		top: 0;
		left: 0;

		.shop_one {
			width: 100%;
			height: 300px;
			position: absolute;
			top: 0;
			left: 0;

			img {
				width: 100%;
				height: 300px;
			}

		}

		.shop-two {
			width: 94%;
			height: 160px;
			background: #fff;
			border: 1px solid #ccc;
			position: absolute;
			bottom: 0;
			left: 3%;
			display: flex;

			div:nth-child(1) {
				width: 200px;
				height: 160px;
				align-items: center;
				display: flex;
				justify-content: center;

				img {
					width: 60%;
					height: 70%;
					border-radius: 50%;
				}
			}

			div:nth-child(2) {
				width: 500px;
				height: 160px;
				display: flex;
				flex-direction: column;

				p {
					margin: 5% 0 0 0;
					font-size: 30px;
				}

				span {
					font-size: 20px;
					margin: 4% 0 0 0;
				}
			}
		}
	}

	/* 头部结束*/
	/*第二部分开始*/

	.wrap_two {
		width: 95%;
		height: 60vh;
		margin: 20px auto;
		display: flex;
		// justify-content:space-between;
		flex-direction: column;

		.two_one {
			width: 100%;
			height: 60px;
			display: flex;
			justify-content: space-between;

			ul {
				width: 60%;
				height: 60px;
				display: flex;
				align-items: center;
				justify-content: space-around;
				font-size: 25px;
			}

			div {
				width: 10%;
				height: 60px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-left: 1px solid #ccc;
				font-size: 25px;
			}
		}

		.two_three {
			width: 100%;
			display: flex;
			flex-direction: column;
			margin: 20px auto;

			ul {
				width: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				li {
					width: 49%;
					height: 300px;
					background: #fff;
					display: flex;
					flex-direction: column;

					img {
						width: 100%;
						height: 220px;
					}

					span {
						font-size: 20px;
						color: rgb(234, 24, 69);
						margin: 3% 0 0 0;
					}

					p {
						font-size: 20px;
						margin: 2px 0 0 0;
					}
				}
			}
		}
	}

	.two_three_one {
		display: flex;
		height: 40px;
		align-items: center;
		justify-content: center;
	}

	.fix {
		width: 100px;
		height: 100px;
		 background: url("../../../assets/img/1_22.png") no-repeat;
		border-radius: 50%;
		position: fixed;
		right: 5%;
		bottom: 10%;
	}

	/*第二部分结束*/

	/* 选项卡功能样式*/
	.active {
		color: red;
	}

	/*  选项卡功能样式结束  */

	/*
		固定的  icon
			
			
	*/
	
</style>
