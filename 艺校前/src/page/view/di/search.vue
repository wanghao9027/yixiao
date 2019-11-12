<template>
	<div>
		<div class="search_wrap">
			<div class="details_shop_one">
				<span @click="go()">
					< </span> <span> 商城
				</span>
			</div>
			<div class="search_one">
				<input type="text" name="" id="" placeholder="搜索">
			</div>
			<div class="search_two">
				<div class="search_two_one">
					<ul>
						<li>一对多套餐</li>
						<li>一对一套餐</li>
					</ul>
				</div>
				<div class="search_two_two">
					<div class="search_list">
						<div class="s_list_s">
							<span>一对多套餐</span>
							<span class="see">查看全部></span>
						</div>
						<ul>
							<li>
								<img src="@/assets/img/7_14.png" alt="">
								<span>一对多(套餐2)</span>
							</li>
							<li>
								<img src="@/assets/img/7_13.png" alt="">
								<span>一对多(套餐2)</span>
							</li>
							<li>
								<img src="@/assets/img/7_10.png" alt="">
								<span>一对多(套餐2)</span>
							</li>
						</ul>
					</div>
					<div class="search_list">
						<div class="s_list_s">
							<span>一对一套餐</span>
							<span class="see">查看全部></span>
						</div>
						<ul>
							<li>
								<img src="@/assets/img/7_03.png" alt="">
								<span>一对多(套餐2)</span>
							</li>
							<li>
								<img src="@/assets/img/7_05.png" alt="">
								<span>一对多(套餐2)</span>
							</li>
							<li>
								<img src="@/assets/img/7_09.png" alt="">
								<span>一对多(套餐2)</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			go() {
				this.$router.back(-1);
			}
		}
	}
</script>

<style scoped lang="scss">
	.search_wrap {
		width: 100%;
		height: 100vh;
		display: flex;
		// justify-content:center;
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

		/*  */
	}

	.search_one {
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #C8C8CD;

		input {
			width: 90%;
			height: 60%;
			border: none;
			outline: none;
			border: 1px solid #ccc;
			border-radius: 40px;
			text-align: center;
			font-size: 20px;
			background: #E0E0E0;
		}
	}

	.search_two {
		height: calc(100vh - 161px);
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.search_two_one {
		width: 25%;
		height: 100%;
		background: #eee;
		display: flex;
		justify-content: center;

		ul {
			li {
				margin: 20px 0 0 0;
				font-size: 20px;
			}
		}
	}

	.search_two_two {
		width: 75%;
		display: flex;
		flex-direction: column;
		// justify-content: center;
	}

	.search_list {
		display: flex;
		justify-content: center;
		flex-direction: column;

		.s_list_s {
			width: 90%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			height: 60px;
			align-items: center;
			font-size: 24px;

			span {
				margin: 20px 0 0 0;
			}
		}

		ul {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;

			li {
				width: 30%;
				height: 200px;
				margin: 0 0 0 2%;
				display: flex;
				align-items: center;
				flex-direction: column;

				img {
					width: 100%;
					height: 70%;
				}

				span {
					padding: 5% 0 0 0;
				}
			}
		}
	}

	.see {
		font-size: 14px;
		color: #ccc;
	}
</style>
