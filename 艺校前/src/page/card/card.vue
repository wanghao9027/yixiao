<template>
	<div id="wrap">
		<div class="input">
			<h1>名片列表</h1>
			<p>
				<i class="iconfont icon-dingdanchaxun"></i><span>搜索姓名</span>
			</p>
		</div>
		<!-- 下部 时间 名片 -->
		<div class="card">
			<!-- 时间 -->
			<div class="time">
				{{getCurrentDate}} 来自搜索
			</div>
			<!-- 名片 -->
			<div class="bscroll" ref="bscroll">
				 <div class="bscroll-container">
					<div class="list">
						<ul class="active">
							<li>
								<p class="empty"></p>
								
								<div class="list-li">
									<h2>聊城飞扬艺术培训机构</h2>
									<ul class="list-li-list">
										<li class='list-li-list-li'>
											<h1>飞扬</h1>
											<p>招生办公室</p>
										</li>
										<li class='list-li-list-li'>
											<p>15020653211</p>
											<p>邮箱</p>
											
										</li>
										<li class='list-li-list-li'>
											No.1
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div class="position">
									<img src="../../assets/images/1_15.png" alt="">
								</div>
								<div class="position" @click="toHome">
									<img src="../../assets/images/3.png" alt="">
								</div>
							</li>
						</ul>
					</div>
					
					<div class="list" v-if="name.length" v-for="(item,index) in name" :key="index">
						<ul class="active">
							<li>
								<p class="empty"></p>
								
								<div class="list-li">
									<h2>聊城飞扬艺术培训机构</h2>
									<ul class="list-li-list">
										<li class='list-li-list-li'>
											<h1>{{item.username}}</h1>
											<p>招生办公室</p>
										</li>
										<li class='list-li-list-li'>
											<p>{{item.phone}}</p>
											<p>邮箱</p>
											
										</li>
										<li class='list-li-list-li'>
											No.{{index+2}}
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div class="position">
									<img src="../../assets/images/1_15.png" alt="">
								</div>
								<div class="position" @click="toHome">
									<img src="../../assets/images/3.png" alt="">
								</div>
							</li>
						</ul>
					</div>
					<!-- 技术支持 -->
					<div class="p">技术支持TEL400-0653-993</div>
				</div>
			</div>	
		
			<!-- 名片 结束 -->
			
			<!-- 添加名片 -->
			<div class="fiexd">
				<div class="pic">
					<img src="../../assets/images/02_03.gif" alt="">
					
				</div>
				<transition name="add">
					<!-- 控制右侧弹框 -->
					<p v-show="show" @click="Right_Popout">
						<span>创建我的只能名片</span><span>立即申请</span>
					</p>
				</transition>
			</div>
		</div>
		<!-- 右侧弹框 -->
		<transition name="right">
			<popup v-if="popupVisible" @vanish="disappeared" @addCard="Cards "></popup>
		</transition>
		
	</div>
</template>

<script>
	import BScroll from "better-scroll";
	import Popup from './popup/popup';
	export default{
		components:{
			Popup
		},
		data(){
			return{
				show:false,
				popupVisible:false,
				name:[],
				time:null
			}
		},
		computed:{
			getCurrentDate() {
              var timeStr = '-';
              var curDate = new Date();
              var curYear =curDate.getFullYear();  //获取完整的年份(4位,1970-????)
              var curMonth = curDate.getMonth()+1;  //获取当前月份(0-11,0代表1月)
              var curDay = curDate.getDate();       //获取当前日(1-31)
              var curWeekDay = curDate.getDay();    //获取当前星期X(0-6,0代表星期天)
              var curHour = curDate.getHours();      //获取当前小时数(0-23)
              var curMinute = curDate.getMinutes();   // 获取当前分钟数(0-59)
              var curSec =curDate.getSeconds();      //获取当前秒数(0-59)
              var Current= curYear+timeStr+curMonth+timeStr+curDay+' '+curHour+':'+curMinute+':'+curSec;
              console.log(Current);
              // this.datetime=Current;
              return Current;
    		}
		},
		mounted() {
          	this.$nextTick(() => {
				let bscrollDom = this.$refs.bscroll;
				this.aBScroll = new BScroll(bscrollDom,{
					scrollY: true,
					click: true
				})
			})  
			
			
			setTimeout( ()=>{
				this.show = true
			},2000)
			
		},
		methods:{
			Right_Popout(){
				this.popupVisible = true
			},
			disappeared(){
				this.popupVisible = false
			},
			toHome(){
				this.$router.push({path: '/hoem'})
			},
			Cards (item){
				this.name.push(item)
				console.log(this.name)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	#wrap
		width 100vw
		height 100vh
		background-color #f4f4f8
		.input
			box-sizing border-box
			padding 0 1.625rem 1.25rem 1.625rem
			width 100%
			height 7.1875rem
			text-align center
			background-color #fff
			p 
				width 100%
				height 4.0625rem
				text-align center
				background-color #f4f4f8
				i,span
					font-size 1.5rem
					line-height 4.0625rem
		.card 
			box-sizing border-box
			padding 0 2.1875rem
			width 100%
			.time
				width 100%
				height 4.6875rem
				line-height 4.6875rem
				font-size  1.375rem
				color #9d9d9d
			.bscroll
				width 100%
				height 76vH
				overflow hidden
				.bscroll-container
					width 100vw
					.list 
						box-sizing border-box
						width 100%
						height 25.125rem
						margin-bottom 10px
						border-radius 20px
						background-color #fff
						.active
							display flex
							align-items center
							width 100%
							height 100%
							li
								flex 1
								display flex
								align-items center
								width 100%
								height 100%
								.empty
									width 0.625rem
									height 100%
									border-top-left-radius 20px 20px;
									border-bottom-left-radius 20px 20px;
									background-color #3cb3f5
								.list-li 
									box-sizing border-box
									padding 0 2.8125rem
									flex 1
									height 100%
									
								h2
									width 100%
									height 8.75rem
									color #848791
									line-height 8.75rem
								.list-li-list 
									width 100%
									.list-li-list-li 
										display flex
										align-items flex-start
										flex-direction column
										h1
											font-size 2.5rem
										p
											width 100%
											font-size 22px
											color #757575
											margin-top 1.0625rem
									.list-li-list-li:nth-child(2)
										margin-top 10px
									.list-li-list-li:nth-child(3)
										margin-top 10px
										font-size 23px
										color #3cb3f5
							li:nth-child(2)
								display flex
								flex-direction column
								justify-content space-around
								width 350px
								.position
									img
										width 113px
										height 113px
								.position:nth-child(2)
									img
										width 3.625rem
										height 15px
					.p	
						margin-top 90px	
						color #d8d8da
						font-size 20px
						text-align center
		.fiexd 
			box-sizing border-box
			position relative
			
			//padding 0 30px
			display flex
			align-items center
			justify-content flex-start
			position fixed
			bottom 3.6875rem
			right 30px
			background-color #3cb3f5
			border-radius 54px
			height 108px
			overflow hidden
			.pic  
				display flex
				align-items center
				justify-content center
				width 6.875rem
				height 6.875rem
				background #3cb3f5
				border-radius  6.875rem
			.add-enter,.add-leave-to
				width 0px
			.add-enter-active,.add-leave-active
				transition all 2s
			.add-leave,.add-enter-to
				width 580px
			p 
				width 580px
				height 100%
				line-height 108px
				background #3cb3f5
				span
					font-size 29px
					color #fff
				span:nth-child(2)
					margin-left 150px
				
		.right-enter,.right-leave-to
			right -100vw
		.right-enter-active,.right-leave-active
			transition  0.2s
		.right-leave,.right-enter-to
			right 0		
</style>
