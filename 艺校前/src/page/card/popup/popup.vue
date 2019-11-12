<template>
	<div id="wrap">
		<h1 @click="alter"><i class="iconfont icon-zuojiantou"></i><span>名片信息</span></h1>
		<div class="type">
			<keep-alive>
				<component :is="card"></component>
			</keep-alive>
			<!-- <Pic1></Pic1> -->
			<div class="go">
				<h1>名片样式</h1>
				<div class="go-img">
					<p :class=" numd == index ? 'active':''" v-for="(item,index) in pic_img" :key="index" @click="goTo(index)">
						<img :src="item" alt="">
					</p>
				</div>
			</div>
		</div>
		<div class="from">
			<div class="from-top">
				<mt-field label="头像" placeholder="请输入用户名" v-model="head"></mt-field>
				<mt-field label="姓名" placeholder="姓名" type="text" v-model="username"></mt-field>
				<mt-field label="职称" placeholder="飞扬代言人" type="text" v-model="profession "></mt-field>
			</div>
			<div class="from-center">
				<mt-field label="手机号" placeholder="手机号" type="number " v-model="phone"></mt-field>
				<mt-field label="微信号" placeholder="微信号" type="text " v-model="Wx"></mt-field>
				<mt-field label="企业微信" placeholder="企业微信" type="text " v-model="firm"></mt-field>
				<mt-field label="座机号" placeholder="座机号" type="number " v-model="special"></mt-field>
				<mt-field label="邮箱" placeholder="邮箱" type="email" v-model="email"></mt-field>
				<mt-field label="公司" v-model="dizhi" type="text "></mt-field>
				<mt-field label="VR全景" placeholder="VR全景链接" type="text " v-model="birthday"></mt-field>
				<mt-field label="VR封面" placeholder="VR封面" type="textarea " v-model="cover"></mt-field>
			</div>
			<!-- 个性签名 -->
			<div class="from-introduction">
				<h1>个性签名</h1>
				<div class="text">
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
				<!-- 暂未录音 -->
				<div class="record">
					<div class="record-top">
						<img src="../../../assets/images/1_03.gif" alt=""> <span>暂未录音</span>
					</div>
					<div class="record-button">
						<button>开始录音 按住说话</button>
					</div>
					
				</div> 
			</div>
			<!-- 图片展示 -->
			<div class="pic">
				<h1>图片展示</h1>
				<div class="pic-add">
					<p> + </p>
				</div>
			</div>
			<!-- 口令 -->
			<div class="pic">
				<h1>免审口令</h1>
				<div class="pic-add-width">
					<p>
						<img src="../../../assets/images/8_07.png" alt="">
					</p>
					<input type="text" placeholder="请输入口令">
				</div>
			</div>
			
		</div>
		<div class="bottom">
			<input type="button" @click="save" value="保存">
		</div>
		
	</div>
</template>

<script>
	import {Field} from 'mint-ui'
	import Pic1 from "./pic1"
	import Pic2 from "./pic2"
	import Pic3 from "./pic3.vue"
	export default {
		//props:['satae'],
		components:{
			Pic1,
			Pic2,
			Pic3
		},
		data() {
			return {
				head: "", //头像
				username: "", //姓名
				email: "", //邮箱
				profession: "", //profession
				phone: "", //手机号
				Wx: "", //微信号
				dizhi:"聊城飞扬艺术培训机构",
				firm: "", //企业微信
				birthday: "", //VR全景
				cover: "", //VR封面
				introduction: "", //个性签名
				special: "", //座机号
				//名片
				pic_img:[
					'../../../../static/imgs/1-1_07.gif','../../../../static/imgs/1_07.gif','../../../../static/imgs/1_09.gif',
				],
				numd:0,
				card:Pic1
			}
		},
		methods:{
			goTo(index){
				this.numd = index
				if(index==0){
					this.card = Pic1
				}else if(index==1){
					this.card = Pic2
				}else if(index==2){
					this.card = Pic3
				}
			},
			alter(){
				this.$emit('vanish')
			},
			save(){
				let regName = /^[\u4E00-\u9FA5]{2,4}$/ //名字
				let emailS = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ //邮箱
				let phom = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/ //手机号
				let username = ""
				let email = ""
				let phone = ""
				if(regName.test(this.username)){
					username = this.username
					this.$emit('vanish')
				}else{
					alert("名字不正确")
					
				}
				if(emailS.test(this.email)){
					email = this.email
					this.$emit('vanish')
				}else{
					alert("邮箱不正确")
					
				}
				if(phom.test(this.phone)){
					phone = this.phone
					this.$emit('vanish')
				}else{
					alert("手机号不正确")
					
				}
				
				let obj = {
					head:this.head,
					username, //姓名
					email, //邮箱
					profession: this.profession, //profession
					phone, //手机号
					Wx: this.Wx, //微信号
					dizhi:this.dizhi,
					firm: this.firm, //企业微信
					birthday: this.birthday, //VR全景
					cover: this.cover, //VR封面
					introduction: this.introduction, //个性签名
					special: this.special, //座机号
				}
				this.$emit('addCard',obj)
				
			
			}
		}

	}
</script>

<style lang="stylus" scoped>
	#wrap 
		position absolute 
		top 0 
		width 100vw 
		height 100vh 
		background-color #f8f7fd
		 h1 
			width 100% 
			height 4.0625rem 
			line-height 4.0625rem 
			font-size 2.125rem 
			font-weight 400 
			background-color #fff 
			i 
				font-size 2.125rem 
		.type 
			width 100% 
			background-color #CCCCCC
			.go
				box-sizing border-box
				padding 0 29px
				width 100%
				height 203px
				background-color #fff
				h1
					height 86px
					line-height 86px
					font-size 1.625rem
					font-weight 500
				.go-img
					display flex
					align-items center
					width 100%
					height 7.875rem
					p
						margin-right 5px
					p.active
						border 2px solid #f00
						img
							width 100%
							height 100%
					
					
				
		.from 
			background-color #CCCCCC
			width 100%
			.from-top
				box-sizing border-box
				padding 0 0.625rem
				width 100%
				background-color #fff 
			.from-center
				margin-top 20px
			.from-introduction 
				margin-top 20px
			.from-introduction 
				box-sizing border-box
				padding 0 26px
				width 100%
				height 580px
				background-color #fff 
				h1
					height 86px
					line-height 86px
					font-size 1.625rem
					font-weight 500
				.text 
					width 100%
					height 186px
					border 2px solid #C8C8CD
					border-radius 40px
					textarea
						width 100%
						height 186px
						border-radius 40px
						background-color #f7f7f7
				.record 
					margin-top 1.25rem
					width 100%
					height 228px
					border 2px solid #C8C8CD
					border-radius 40px
					background-color #f7f7f7			
					.record-top
						display flex
						align-items center
						margin 17px
						span
							font-size 1.5625rem
							font-weight 500
							margin-left 30px
					.record-button
						box-sizing border-box
						padding-left 100px
						width 100%
						button
							width 488px
							 height 74px
							background-color #f03433
							line-height 74px
							text-align center
							font-size 28px
							font-weight 700
							color #fff
							border-radius 20px
			.pic	
				box-sizing border-box
				padding 0 26px
				width 100%
				height 274px
				margin-top 20px
				background-color #fff
				h1
					height 86px
					line-height 86px
					font-size 1.625rem
					font-weight 500
				.pic-add			
					width 9.5rem
					height 9.5rem
					color #b7b7b7
					font-size 4.375rem
					text-align center
					line-height 9.5rem
					font-weight 700
					background-color #f7f7f7
				.pic-add-width
					box-sizing border-box
					padding 0 20px
					display flex
					justify-content space-between
					align-items center
					width 100%
					height 84px
					background-color #f7f7f7
					border-radius 20px
					input
						flex 1
						height 84px
						text-align right
						border none
						font-size 26px
						background-color #f7f7f7	
		.bottom				
			width 100%
			height 12.5rem
			border-top 2px solid #F7F7F7
			background-color #F7F7F7
			input
				width 666px
				height 88px
				margin 80px 50px 0
				background-color #f03433
				color #FFF
				text-align center
				line-height 88px
				font-size 26px
				border-radius 20px
				
				
</style>
