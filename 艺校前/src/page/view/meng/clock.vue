<template>
  <div>
  <div class="wrap" >
    <div class="title">打卡</div>
    <div class="border">
      <div class="btns">
      <div class="div" @click="ranking1()"><span class="iconfont icon-jiangbei"></span>排行榜</div>
      <div class="div" @click="clockVal()"><span class="iconfont icon-rili"></span>打卡记录</div>
      <div class="div11" @click.stop="shellVal()"><span class="iconfont icon-beike"></span>贝壳明细</div>
    </div>
    <div class="reap">
      <div class="content">
        <p>说说你的学习收获吧</p>
        <div>

        </div>
      </div>
      <div class="btn-list">
        <div class="btn-item" v-for="item in icon" @click="audio()"><span :class="item"></span></div>
        <mt-popup v-model="popupVisible" :closeOnClickModal="showModel" popup-transition="popup-fade">
         <div class="qqq">拍摄</div>
         <div class="qqq">从手机相册选择</div>
         <div class="qqq">从微信聊天文件中选择图片</div>
         <div class="qqq" @click="cancel()">取消</div>
        </mt-popup>

      </div>
    </div>
    <div class="submit">提交</div>
    <div class="con-title">技术支持TEL400-0635-993</div>
    </div>

  </div>
  <!-- 排行榜开始 -->

 <mt-popup v-model="Visible" :model='showModel' :closeOnClickModal='showModel' position="right">
      <div class="wrapper">
        <div>
          <div class="title"><span class="iconfont icon-zuojiantou" @click="rank()"></span>排行榜</div>
          <div class="bscroll" ref="bscroll">
            <div class="back">
              <!-- <img src="../static/images/images/9_02.png" alt="" class="con-img"> -->
              <div class="con-list">
                <ul class="list">
                  <li class="item" v-for="item in picList">
                    <img :src="item.img" alt="">
                    <img :src="item.imgUrl" alt="">
                    <span>{{item.name}}</span>
                    <span class="span">{{item.zan}}赞</span>
                  </li>
                </ul>
                <ul class="list-content">
                  <li class="li-items" v-for="item,index in list" :key='index'>
                    <span class="serial">{{index+1}}</span>
                    <img :src="item.img" alt="">
                    <span>{{item.name}}</span>
                    <span class="span">{{item.zan}}赞</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

  </mt-popup>

  <!-- 排行榜结束 -->
 <!-- 打卡记录开始 -->
 <mt-popup v-model="clockVisible" :model='showModel' :closeOnClickModal='showModel' position="right" >
    <div class="clock">
      <div class="title"><span class="iconfont icon-zuojiantou" @click="clock()"></span>打卡记录</div>
      <div class="clock-con">
        <ul class="clock-list">
          <li>
            <!-- <img src="../static/images/images/10_03.png" alt=""> -->
            <div class="clock-text">
              <p>名字名字</p>
              <p>已打卡0天</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </mt-popup>
  <!-- 打卡记录结束 -->
  <!-- 贝壳明细开始 -->
 <mt-popup v-model="shellVisible" :model='showModel' :closeOnClickModal='showModel' position="right">
    <div class="shell">
      <div class="title"><span class="iconfont icon-zuojiantou" @click="shell()"></span>贝壳明细</div>
    </div>
  </mt-popup>
 <!-- 贝壳明细结束 -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { Popup } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
export default{
  data(){
    return {
      popupVisible:false,
      Visible:false,
      clockVisible:false,
      shellVisible:false,
      showModel:false,
      arr:[
            {
              name:'打卡',
              icon:'',
              iconfont:'',
              showVal:true
            },
            {
              name:'排行榜',
              icon:'iconfont icon-jiangbei',
              iconfont:'iconfont icon-zuojiantou',
              showVal:false
            },
            {
              name:'打卡记录',
              icon:"iconfont icon-rili",
              iconfont:'iconfont icon-zuojiantou',
              showVal:false
            },
            {
              name:'贝壳明细',
              icon:"iconfont icon-beike",
              iconfont:'iconfont icon-zuojiantou',
              showVal:false
            },
        ],
      icon:['iconfont icon-maikefengxianxing','iconfont icon-tupian','iconfont icon-shexiangji'],
      picList:[
        {
          name:"第一名名",
          imgUrl:"../static/images/10_03.png",
          img:'../static/images/8_03.png',
          zan:'1'
        },
        {
          name:"第二名名",
          imgUrl:"../static/images/10_03.png",
          img:'../static/images/8_03.png',
          zan:'1'
        },
        {
          name:"第三名名",
          imgUrl:"../static/images/10_03.png",
          img:'../static/images/8_03.png',
          zan:'1'
        }
      ],
      list:[
        {
          name:"可有可无的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"可爱",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"可爱",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"可爱",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"闭嘴",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"认真",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        },
        {
          name:"好的",
          img:"../static/images/8_03.png",
          imgUrl:"../static/images/10_03.png",
          zan:"1"
        }
      ]
    }
  },
  mounted(){
   this.$nextTick(() => {
          let bscrollDom = this.$refs.bscroll;
          this.aBScroll = new BScroll(bscrollDom,{
            scrollY:true
          })
      })

  },
  methods:{
    audio(){
      this.popupVisible=true
    },
    cancel(){
      this.popupVisible=!this.popupVisible
    },
    ranking1(){
     this.Visible=true
      console.log(1);
    },
    clockVal(){
      this.clockVisible=true
      console.log(2);
    },
    shellVal(){
      this.shellVisible=true
      console.log(3);
    },
    rank(){
      this.Visible=false
      console.log(11);
    },
    clock(){
      this.clockVisible=false
      console.log(22);
    },
    shell(){
      this.shellVisible=false
      console.log(33);
    },

  }
}
</script>

<style lang="stylus" scoped>
  .wrap
    width 750px
    background rgb(244,243,249)
    .title
      width 750px
      height 100px
      text-align center
      line-height 100px
      font-size 30px
      background #fff
      position relative
      .icon
        position absolute
        left 20px
    .border
      width 750px
      height 1232px
      box-sizing border-box
      padding 0 25px
      .btns
        width 700px
        min-height 300px
        background rgb(244,243,249)
        display flex
        flex-wrap wrap
        justify-content space-between
        box-sizing border-box
        padding 30px 0
        span
          font-size 32px
          margin 0 15px
        .div
          width 325px
          height 100px
          background #fff
          font-size 26px
          line-height 100px
          border-radius 5px
        .div11
          width 100%
          height 100px
          background #fff
          font-size 26px
          line-height 100px
          border-radius 5px

      .reap
        width 700px
        height 550px
        background #fff
        margin-bottom 50px
        box-sizing border-box
        padding 0 25px
        position relative
        border-radius 5px
        .content
          width 100%
          height 400px
          box-sizing border-box
          padding-top 26px
          font-size 19px
        .btn-list
          width 650px
          height 80px
          display flex
          justify-content space-between
          align-items center
          border-top 1px solid #f5f5f5
          position absolute
          bottom 0
          .btn-item
            width 210px
            height 50px
            text-align center
            line-height 50px
            span
              font-size 30px
          .btn-item:nth-child(2)
            border-left 2px solid #f5f5f5
            border-right 2px solid #f5f5f5
            span
              font-size 30px
          .qqq
              width 100%
              height 90px
              text-align center
              line-height 90px
              font-size 29px
              border-bottom 1px solid #f2f2f2
          .qqq:nth-child(4)
              background #f4f3f9
              color #9b9aa2
              border-radius 10px
      .submit
        width 450px
        height 80px
        background red
        margin 0 auto
        color #fff
        text-align center
        line-height 80px
        font-size 25px
        border-radius 5px
      .con-title
        width 700px
        height 110px
        line-height 100px
        text-align center
        font-size 17px
        color #d7d7d8
  .wrapper
    width 750px
    height 100vh
    .title
      width 700px
      height 100px
      text-align center
      line-height 100px
      font-size 30px
      background #fff
      position relative
      span
        position absolute
        left 20px
        font-size 30px
    .bscroll
      width 100%
      height 93vh
      overflow hidden
      .back
        background #7373ff
        .con-img
          width 100%
          height 307px
        .con-list
          width 750px
          min-height 100px
          background #7373ff
          box-sizing border-box
          padding 30px
          .list
            width 690px
            min-height 100px
            border-radius 10px
            background #FFFFFF
            margin-bottom 30px
            .item
              width 100%
              height 122px
              display flex
              align-items center
              font-size 26px
              border-bottom 1px solid #f2f2f2
              box-sizing border-box
              padding 30px
              position relative
              img
                width 70px
                height 70px
              img:nth-child(2)
                margin 0 18px
              .span
                position absolute
                right 30px
          .list-content
            width 690px
            min-height 900px
            border-radius 10px
            background #FFFFFF
            margin-bottom 30px
            overflow hidden
            .li-items
              width 100%
              height 122px
              display flex
              align-items center
              font-size 26px
              border-bottom 1px solid #f2f2f2
              box-sizing border-box
              padding 30px
              position relative
              img
                width 70px
                height 70px
                margin 0 18px
              .serial
                padding 2px 18px
                background #dff4ce
                color #51ae00
              .span
                position absolute
                right 30px

  .clock
    width 750px
    height 100vh
    background #f1f1f1
    .title
      width 750px
      height 100px
      text-align center
      line-height 100px
      font-size 30px
      background #fff
      position relative
      span
        position absolute
        left 20px
        font-size 30px
    .clock-list
      width 100%
      min-height 100px
      background #f1f1f1
      box-sizing border-box
      padding 22px
      margin-top 20px
      li
        width 100%
        height 100px
        display flex
        align-items center
        box-sizing border-box
        padding 15px 25px
        background #fff
        img
          margin-right 20px
        .clock-text
          height 100%
          display flex
          flex-direction column
          justify-content space-around
  .shell
    width 750px
    height 100vh
    background #f1f1f1
    .title
      width 750px
      height 100px
      text-align center
      line-height 100px
      font-size 30px
      background #fff
      position relative
      span
        position absolute
        left 20px
        font-size 30px
</style>
