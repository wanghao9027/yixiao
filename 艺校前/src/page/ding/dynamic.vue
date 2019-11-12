<template>
    <div>
        <div class="container">
            <ul class="list">
                <li class="item" v-for="(item,index) in list" :key='index'>
                    <div class="user">
                        <img :src="item.user" alt="">
                    </div>
                    <div class="itemInfo">
                        <p>
                            <span>{{item.title}}</span>
                            <span>{{item.type}}</span>
                            <a href="#">转发</a>
                        </p>
                        <div @click="fade(index)">
                            <p>{{item.content}}</p>
                            <img :src="item.img" alt="">
                        </div>
                        <p><a href="#">查看详情</a></p>
                        <p>
                            <span>{{item.time}}</span>
                            <img @click="comments(index)" src="../../assets/images/1_11.png" alt="">
                        </p>
                        <transition name="fade">
                            <div class="commentBox" v-show="curIndex==index">
                                <span @click="zan(index)">
                                    赞
                                    <i class="iconfont icon-pinglun"></i>
                                </span>
                                <span @click="submitCom(index)">
                                    评论
                                    <i class="iconfont icon-pinglun"></i>
                                </span>
                            </div>
                        </transition>
                    </div>
                </li>
            </ul>
            <div class="bottom">
                <div></div>
                <span>没有更多数据了</span>
                <div></div>
            </div>
            <mt-popup
            v-model="popupVisible"
            position="right"
            :modal="status"
            :closeOnClickModal="status"
            >
                <div class="wrap">
                    <p class="tip"><span @click="hide">&lt;</span><span>详情</span></p>
                    <p>{{con.tip}}</p>
                    <p><a href="#">{{con.address}}</a> <span>{{con.times}}</span></p>
                    <div>
                        <p> {{con.txt1}}</p>
                    </div>
                    <div class="imgBox">
                        <img v-for="(item,index) in con.imgList" :key="index" :src="item.url" alt="">
                    </div>
                    <div>
                        <p>{{con.txt2}}</p>
                    </div>
                </div>
            </mt-popup>
        </div>
    </div>
</template>
<script>
// import { Popup } from 'mint-ui'
export default {
    data(){
        return {
            popupVisible: false,
            status:false,
            // comment:false,
            curIndex:-1,
            con:{},
            list:[{
                user:require('../../assets/images/1_03.png'),
                title:'聊城飞扬艺术培训机构',
                type:'公司',
                content:'飞扬艺校邀请王泽南老师莅临演播现场',
                img:require('../../assets/images/1_07.png'),
                time:'2019-05-18 16:13:43',
                tip:'聊城飞扬艺术培训招生季！赶快来报名啊！',
                address:'聊城飞扬艺术培训机构',
                times:"5月8日",
                txt1:"聊城飞扬儿童艺术培训中心隶属于飞扬教育集团，集团成立于2007年，聊城飞扬儿童艺术培训中心是经聊城市教育局正式批准开办的一所以音乐、舞蹈、古筝、美术、书法等专业为主的艺术培训机构，学校占地1000多平方米。飞扬艺校专注艺术高考十余年，有者雄厚的师资力量，丰富的教学经验。马云在大数据峰会上曾说:如果不让孩子学习琴棋书画，那么未来30年将找不到工作，因为他们没办法竞争过机器时代!李开复说过，未来什么都有可能被替代，唯独艺术和娱乐不可能被替代!我们飞扬人坚信从小培养艺术品格才是我们的责任，飞扬教育集团将以雄厚的师资力量和丰富的办学经验，坚持把聊城飞扬儿童艺术培训中心打造成山东儿童艺术一流品牌!咨询电话: 17353825678",
                imgList:[{
                    url:require('../../assets/images/2_03.png')
                },{
                    url:require('../../assets/images/2_06.png')
                },{
                    url:require('../../assets/images/2_08.png')
                }],
                txt2:"我们拥有一批资深的教授、教师以及活跃在演艺一线的青年教师队伍。这些教师分别毕业于:北京电影学院表演系、中央美术学院、中国音乐学院声乐系、北京舞蹈学院舞蹈系、天津美术学院、首都师范大学音乐系、四川音乐学院表演系、辽宁师范大学表演系、广西艺术学院书法系等!我们的责任重于泰山，甚感任重道远。展望未来，我愿鞠躬尽瘁，与同仁携手努力，让学生增长知识才干，提高生活本领，增强对自己、对社会的责任.心，让满园桃李更加灿漫、更加芬芳!追寻卓著，方可使飞扬教育集团兀立天地;超越自我，定能使飞扬儿童艺术培训璀璨于未来!"
            },{
                user:require('../../assets/images/1_03.png'),
                title:'聊城飞扬艺术培训机构',
                type:'公司',
                content:'飞扬艺校邀请王泽南老师莅临演播现场',
                img:require('../../assets/images/1_15.png'),
                time:'2019-05-18 16:09:43',
                tip:'聊城飞扬艺术培训招生季！赶快来报名啊！',
                address:'聊城飞扬艺术培训机构',
                times:"5月8日",
                txt1:"聊城飞扬艺术学校属于艺术培训服务行业，主要服务对象是即将参加高考的音乐考生，着重艺术专业高考辅导，重点科目是声乐，舞蹈，钢琴，影视表演以及广播电视编导等。咨询热线: 2. 飞扬艺术培训学校，成立于2007年，是一所专注于音乐、专注高考培训的专业化艺术学校，是政府正式批准成立的正规艺术培训学校，也是四川音乐学院考前培训基地。2017年成立飞扬聊城分校。飞扬艺校专注考前音乐类培训长达十年，十年间已为全国高校输送了大量专业艺术人才，園了数以千计艺考生的大学梦，实现了他们的音乐理想，是艺术生通往大学校门的绝佳道路。3.我们希 望经过长足发展创建出自己的培训品牌和培训特色，成为山东省最为专业的，最为正规的艺术培训教育机构。之后，我们将会在全国各大城市开办连锁培训学校，我们要做最一流的教育学校机构。在艺术教育行业做属于自己的品牌。4.飞扬的指 导老师涵盖国内外著名的讲师、艺术专家顾问，拥有扎实的教学基础，庞大的师资团队，丰富的艺术专业知识以及艺术造诣，教学经验丰富。",
                imgList:[{
                    url:require('../../assets/images/2_03.png')
                },{
                    url:require('../../assets/images/2_06.png')
                },{
                    url:require('../../assets/images/2_08.png')
                }],
                txt2:"学校指导老师采用的是最前沿的海归派教学方法，老师全职坐班，一对一教学。没有枯燥苍白的教学方法，讲解一针见血，通俗易懂，只需一节课就能使学生感受到明显的与众不同与学习效果的提升。运营管理制度管理在中心经营过程中，管理与效益是亲密相关的，因此，制度化管理在运营过程中是相当重要的。飞扬艺校实行半封闭式全天候的管理模式，学校设有器乐室、声教室、舞蹈室、文化课教师、多媒体教师、宿舍、食堂一体化设施，校内布有二十四小时全方位的监控设备，可以让家长及时了解学生的学习状态、生活状态。学习方面，飞扬实行打分制，学生从起床的行为开始就被计入学分，以此来督促学生学习、生活各方面的进度。相关的管理制度有: 1.出勤制度2.固定资产管理3.3.财务管理制度.4.工资的发放管理制度5.业绩与老师工资的关系制度6.教师培训制度7.管理人员的权限规定制度8.员工的奖罚制度9.员工的工作制度10.教案作业管理制度11.培训输出管理制度12. 会议管理制度经营计划"
            },{
                user:require('../../assets/images/1_03.png'),
                title:'聊城飞扬艺术培训机构',
                type:'公司',
                content:'飞扬艺校邀请王泽南老师莅临演播现场',
                img:require('../../assets/images/1_18.png'),
                time:'2019-05-18 11:05:43',
                tip:'聊城飞扬艺术培训中心',
                address:'聊城飞扬艺术培训机构',
                times:"5月11日",
                txt1:"聊城飞扬儿童艺术培训中心隶属于飞扬教育集团，集团成立于2007年，聊城飞扬儿童艺术培训中心是经聊城市教育局正式批准开办的一所以音乐、舞蹈、古筝、美术、书法等专业为主的艺术培训机构，学校占地1000多平方米。飞扬艺校专注艺术高考十余年，有者雄厚的师资力量，丰富的教学经验。马云在大数据峰会上曾说:如果不让孩子学习琴棋书画，那么未来30年将找不到工作，因为他们没办法竞争过机器时代!李开复说过，未来什么都有可能被替代，唯独艺术和娱乐不可能被替代!我们飞扬人坚信从小培养艺术品格才是我们的责任，飞扬教育集团将以雄厚的师资力量和丰富的办学经验，坚持把聊城飞扬儿童艺术培训中心打造成山东儿童艺术一流品牌!咨询电话: 17353825678",
                imgList:[{
                    url:require('../../assets/images/2_03.png')
                },{
                    url:require('../../assets/images/2_06.png')
                },{
                    url:require('../../assets/images/2_08.png')
                }],
                txt2:"我们拥有一批资深的教授、教师以及活跃在演艺一线的青年教师队伍。这些教师分别毕业于:北京电影学院表演系、中央美术学院、中国音乐学院声乐系、北京舞蹈学院舞蹈系、天津美术学院、首都师范大学音乐系、四川音乐学院表演系、辽宁师范大学表演系、广西艺术学院书法系等!我们的责任重于泰山，甚感任重道远。展望未来，我愿鞠躬尽瘁，与同仁携手努力，让学生增长知识才干，提高生活本领，增强对自己、对社会的责任.心，让满园桃李更加灿漫、更加芬芳!追寻卓著，方可使飞扬教育集团兀立天地;超越自我，定能使飞扬儿童艺术培训璀璨于未来!"
            }]
        }
    },
    methods: {
       
        fade(index){
            // console.log(index)
            this.con=this.list[index]
             this.popupVisible=true
        },
        hide(){
            this.popupVisible=false
        },
        comments(index){
            // this.comment=!this.comment
            if(this.curIndex==index){
                this.curIndex=-1
            }else{
                this.curIndex=index
            }
        },
        zan(index){
            console.log(index)
        },
        submitCom(index){
            console.log(index)
        }
    },
}
</script>
<style lang="stylus" scoped>
    .fade-enter,.fade-leave-to
        transform translateX(300px)
    .fade-enter-active, .fade-leave-active 
        transition 1000ms
    .fade-enter-to,.fade-leave
        transform translateX(0px)
    .container
        width 750px
        height 100vh
        // background #ccc
        .list
            padding 20px
            .item 
                display flex
                border-bottom 1px solid #ccc
                margin-bottom 20px
                .user
                    width 100px
                    height 100px
                    margin-right 20px
                    img
                        width 100%
                        height 100%
                .itemInfo
                    position relative
                    flex 1
                    .commentBox
                        position absolute 
                        bottom 0
                        right 50px
                        background rgba(0,0,0,0.6)
                        color #fff
                        span 
                            margin 0 5px
                    &>p
                        display flex
                        justify-content space-between
                        align-items center
                        font-size 24px
                        margin 5px
                        span:nth-child(2)
                            border 1px solid #000
                            padding 5px
                    &>div
                        padding 20px
                        background rgb(242,242,242)
                        font-size 24px
                        border-radius 10px
                        &>p 
                            margin-bottom 10px
                        &>img 
                            width 100%
        .bottom
            padding 20px 100px 
            display flex
            justify-content space-between
            align-items center
            font-size 18px
            span 
                background #fff
            &>div 
                width 200px
                border-bottom 1px solid #ccc             
    .mint-popup
        width 100vw
        height 100vh
        overflow-y scroll
        .wrap
            padding 20px
            .tip
                font-size 32px
                height 50px
                font-weight 600
            div>p
                text-indent 4rem
            .imgBox
                display flex
                flex-direction column
                img 
                    margin-bottom 10px
            p
                margin-bottom 10px
                &>span 
                    margin-right 30px


    
</style>