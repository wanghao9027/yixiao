<template>
	<div id="box">
		<div class="wrap">
			<h1>飞扬艺校</h1>
			<div class="pic">
				<img src="../../../assets/images/s_03.png" alt="">
				<div class="pic_img" @click="get_back">
					<img src="../../../assets/images/8_03.png" alt="">
				</div>
			</div>
			<div class="list">
				<h1 @click="hide"> {{ shows?"收起以下名片信息 ∨":"名片信息 ∧"  }}</h1>
				<ul class="list_ul" v-show="shows">
					<li class="list_li" v-for="(item,index) in site" :key="index">
						<span>{{item.relation}}</span>
						<input type="text" :value="item.site">
						<span>
							<a style="color:#3db155;" :href="'tel:' + item.site">{{item.text}}</a>
						</span>
					</li>
				</ul>
			</div>
			<div class="share">
				<div class="title">
					<p>分享名片</p>
					<p>存入手机通讯录</p>
				</div>
				<div class="share_url">
					<ul class="share_list">
						<li class="share_li" v-for="(item,index) in 8" :key="index">
							<img src="../../../../static/imgs/1.jpg" alt="">
						</li>
						<li class="share_li">
							<img src="../../../../static/imgs/2.png" alt="">
						</li>
						<li class="share_li">
							<img src="../../../../static/imgs/2-1.png" alt="">
						</li>
					</ul>
					<p>
						<span>最近4900预览</span>
						<span>靠谱：568</span>
					</p>
				</div>
			</div>
		</div>
		<!-- //介绍 -->
		<div class="share_introduce">
			<div class="introduce_h1">
				<h1>个性签名</h1>
				<div class="title">
					飞艺术梦想杨艺术风帆
				</div>
			</div>
			<div class="introduce_h1">
				<h1>视频</h1>
				<div class="title_11">
					<video id="myVideo" class="video-js" >
						<source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
					</video>
				</div>
			</div>
			<div class="introduce_h1">
				<h1>图片展示</h1>
				<div class="title_11">
					<img src="../../../assets/images/2_06.png" alt="">
					<img src="../../../assets/images/2_08.png" alt="">
					<!-- <img src="../../../assets/images/3_02.png" alt=""> -->
					<img src="../../../assets/images/3_05.png" alt="">
					<img src="../../../assets/images/3_08.png" alt="">
					<img src="../../../assets/images/2_03.png" alt="">
				</div>
			</div>
			<div class="introduce_h1">
				<div class="p">技术支持TEL400-0653-993</div>
			</div>
		</div>
		
		<!-- 咨询 -->
		<div class="fiexd">
			
			<img src="../../../assets/images/d_03.png" alt="">
			<span class="red" v-show="false">1</span>
		</div>
		<!-- 咨询结束 -->
		
		<!-- 隔绝 -->
		<div class="bot"></div>
			
		
	</div>
</template>

<script>
	//∨
	export default{
		data(){
			return {
				site:[
					{
						relation:"手机",
						site:"1502653211",
						text:"拨打"
					},
					{
						relation:"座机",
						site:"1502653211",
						text:"拨打"
					},
					{
						relation:"400热线",
						site:"1502653211",
						text:"拨打"
					},
					{
						relation:"公司",
						site:"聊城飞扬艺术培训机构",
						text:"复制"
					},
					{
						relation:"地址",
						site:"聊城当代国际核心三号楼",
						text:"导航"
					}
				],
				shows:true
			}
		},
		methods:{
			get_back(){
				this.$router.push({path:"/"})
			},
			hide(){
				this.shows = !this.shows
			},
			initVideo() {
			//初始化视频方法
				let myPlayer = this.$video(myVideo, {
					//确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
					controls: true,
					//自动播放属性,muted:静音播放
					autoplay: "muted",
					//建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
					preload: "auto",
					//设置视频播放器的显示宽度（以像素为单位）
					width: "800px",
					//设置视频播放器的显示高度（以像素为单位）
					height: "400px"
				});
			}
		},
		mounted() { 
		    this.initVideo();
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/css/font/iconfont.css'
	#box
		.wrap
			box-sizing border-box
			padding 0 27px
			display flex
			flex-direction column
			justify-content center
			align-items center
			width 100vw
			h1
				width 100%
				height 90px
				line-height 90px
				text-align center
			.pic
				position relative
				width 100%
				height 58rem
				box-shadow 0 0 33px #C8C8CD
				border 1px solid #CCCCCC
				border-radius 30px
				img
					width 100%
					height 58rem
					border-radius 30px
				.pic_img 
					position absolute
					right 29px
					top 24px
					width 90px
					height 90px
					img
						width 100%
						height 100%
			.list
				width 100%
				h1
					margin-top 10px
					font-size 24px
					color #ccc
				.list_ul 
					width 100%	
					.list_li
						display flex
						justify-content space-between
						align-items center
						width 100%
						height 110px
						border-bottom 1px solid #C8C8CD
						span:nth-child(1)
							width 3.75rem
							line-height 5 0px
							font-size 29px
							color #838591
						input[type=text]
							flex 1
							margin-left 47px
							font-size 29px
							border none
						span:nth-child(3)	
							width 4.25rem
							height 36px
							text-align center
							line-height 36px
							border 1px solid #3db155
							border-radius 5px
			.share 
				width 100%
				
				.title
					width 100%
					height 142px
					display flex
					justify-content space-between
					align-items center
					p
						width 335px
						height 65px
						font-size 27px
						font-weight 400
						color #3db155
						text-align center
						line-height 65px
						border 1px solid #3db155
						border-radius 30px
					p:nth-child(2)
						color #fff
						background-color #3db155
				.share_url 
					width 100%
					height 132px
					.share_list
						display flex
						align-items center
						justify-content space-between
						height 60px
						.share_li
							height 60px
							img
								height 100%
						.share_list_li
							width 8.5rem
							height 60px
					p
						display flex
						align-items center
						justify-content space-between
						width 100%
						height 44px
						font-size 22px
						color #d8d8d8
		.share_introduce 
			width 100vw
			.introduce_h1
				width 100%
				h1
					box-sizing border-box
					padding 0 30px
					width 100%
					height 92px
					line-height 92px
					color #9a9a9a
					background-color #f4f4f8
				.title
					box-sizing border-box
					padding 0 85px
					height 90px
					font-size 29px 
				.title_11
					width 100%
					img
						width 100%
				.p
					width 100%
					height 90px 
					font-size 28px
					text-align center
					line-height 90px
					background-color #f4f4f8
			
		.fiexd
			display flex
			justify-content center
			align-items center
			position fixed
			right 40px
			bottom 140px
			width 110px 
			height 110px
			background-color #17a234
			border-radius 110px
			.red
				color #f00
				margin-top -60px
				font-size 20px
		.bot 
			width 100%
			height 7vh
			background-color #0000FF
</style>
