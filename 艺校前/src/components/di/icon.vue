<template>
	<div>
		<div class="i_icon">
			<i class="iconfont icon-gouwuche2" @click="gouwu()"></i>
			<i class="iconfont icon-ren111"></i>
			<i class="iconfont icon-fenxiang"></i>
		</div>
	</div>
</template>  

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			gouwu(){
				this.$router.push({
					path:"/car"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.i_icon {

		width: 260px;
		height: 30px;
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 20px;
		right: 50px;

		i {
			width: 70px;
			height: 70px;
			text-align: center;
			line-height: 70px;
			background: rgb(16,16,16);
			border-radius: 50%;
			font-size: 40px;
			color: #fff;

		}

	}
</style>
