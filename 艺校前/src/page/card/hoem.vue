<template>
	<div id="home">
		<router-view></router-view>
		<div class="http">
			<p class="active" v-for="(item,index) in router" :key="index" @click="addActive(index)">
				<i :class="[item.class,{active:num==index}]"></i>
				<router-link :to="{path:item.path}">{{item.name}}</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				router:[
					{
						class:"iconfont icon-mingpian",
						name:"名片",
						path:"calling"
					},
					{
						class:"iconfont icon-dianpu",
						name:"商城",
						path:"calling1"
					},
					{
						class:"iconfont icon-rili",
						name:"打卡",
						path:"calling2"
					},
					{
						class:"iconfont icon-zhinanzhen",
						name:"动态",
						path:"calling3"
					},
					{
						class:"iconfont icon-loufang",
						name:"官网",
						path:"calling4"
					}
				],
				num:0
			}
		},
		methods:{
			addActive(index){
				this.num = index
			}
		}
	}
</script>

<style lang="stylus" scoped>
	#home
		.http
			display flex
			justify-content space-around
			align-items center
			position fixed
			left 0
			bottom 0
			width 100%
			height 104px
			border-top 1px solid #000000
			background-color #fff
			p
				flex 1
				display flex
				flex-direction column
				justify-content center
				align-items center
				height 100%
				i
					font-size 35px
					color #84888b
				i.active
					color #df3b39
				a
					font-size 23px
					font-weight 400
					color #84888b
				.router-link-active
					color #df3b39
				
					
</style>
