<template>
    <div>
        <div class="container">
            <div class="swipe">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item,index) in swipeImg" :key="index">
                        <img :src="item.url" alt="">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <ul class="list">
                <li>
                    <h4>
                        <span>飞扬简介</span>
                        <span @click="goMore1">查看更多 ></span>
                    </h4>
                    <p v-for="(item,index) in brief.part" :key="index">{{item.txt}}</p>
                </li>
                <li>
                    <h4>
                        <span>飞扬资讯</span>
                        <span @click="goMore2">查看更多 ></span>
                    </h4>
                    <div class="conBox" @click="goDetail(index)" v-for="(item,index) in information.part" :key="index">
                        <div class="pic">
                            <img :src="item.img" alt="">
                        </div>
                        <div>
                            <p>{{item.title}}</p>
                            <p>{{item.time}}</p>
                        </div>
                    </div>
                </li>
                <li>
                    <h4>
                        <span>精彩瞬间</span>
                        <span @click="goMore3">查看更多 ></span>
                    </h4>
                    <div v-for="(item,index) in marvellous.part" :key="index">
                        <h5>{{item.title}}</h5>
                        <!-- <img :src="item.img" alt=""> -->
                        <video :src="item.img" controls></video>
                    </div>
                </li>
                <li>
                    <h4>
                        <span>培训环境</span>
                        <span @click="goMore4">查看更多 ></span>
                    </h4>
                    <img v-for="(item,index) in environment.part" :key="index" :src="item.img" alt="">
                </li>
            </ul>
            <div class="contact" style="height: 300px;">
                <p>联系方式</p>
                <div class="phone" @click="callPhone(phone)">
                    <div class="left">
                        <p>校长办公室</p>
                        <p class="num">{{phone}}</p>
                    </div>
                    <div class="right">
                        >
                    </div>
                </div>
                <div class="address">
                    <b @click="goMap">
                        <i class="iconfont icon-dizhi_"></i>
                        当代国际核心三号楼
                    </b>
                </div>
            </div>
        </div>
        <mt-popup
            v-model="popupVisible1"
            position="right"
            :modal="status"
            :closeOnClickModal="status">
                <div class="wrap1">
                    <h1><span @click="cancel1"> &lt;</span> 飞扬简介</h1>
                    <scrollBox  class="scrollBox">
                        <div>
                            <p>
                                <span>{{brief.address}}</span> <span>{{brief.time}}</span>
                            </p>
                            <p v-for="(item,index) in brief.all" :key="index">{{item.txt}}</p>
                        </div>
                    </scrollBox>
                </div>
        </mt-popup>
        <mt-popup
            v-model="popupVisible2"
            position="right"
            :modal="status"
            :closeOnClickModal="status">
                <div class="wrap2" >
                    <h1><span @click="cancel2"> &lt;</span> 飞扬资讯</h1>
                    <scrollBox class="scrollBox">
                        <div>
                            <div @click="goDetail(index)" class="conBox" v-for="(item,index) in information.part" :key="index">
                                <div class="pic">
                                    <img :src="item.img" alt="">
                                </div>
                                <div>
                                    <p>{{item.title}}</p>
                                    <p>{{item.time}}</p>
                                </div>
                            </div>
                        </div>
                    </scrollBox>
                </div>
        </mt-popup>
        <mt-popup
            v-model="popupVisible21"
            position="right"
            :modal="status"
            :closeOnClickModal="status">
                <div class="wrap21">
                    <h1><span @click="cancel21"> &lt;</span> 飞扬资讯</h1>
                    <scrollBox class="scrollBox">
                        <div @click="goDetail(index)" class="conBox">
                            <div class="wrap">
                                <p><a href="#">{{detail.address}}</a> <span>{{detail.times}}</span></p>
                                <div>
                                    <p> {{detail.txt1}}</p>
                                </div>
                                <div class="imgBox">
                                    <img v-for="(item,index) in detail.imgList" :key="index" :src="item.url" alt="">
                                </div>
                                <div>
                                    <p>{{detail.txt2}}</p>
                                </div>
                            </div>
                        </div>
                    </scrollBox>
                </div>
        </mt-popup>
        <mt-popup
            v-model="popupVisible3"
            position="right"
            :modal="status"
            :closeOnClickModal="status">
                <div class="wrap3" >
                    <h1><span @click="cancel3"> &lt;</span> 精彩瞬间</h1>
                    <scrollBox class="scrollBox">
                        <div>
                            <div v-for="(item,index) in marvellous.all" :key="index">
                                <h5>{{item.title}}</h5>
                                <video :src="item.img" controls></video>
                            </div>
                        </div>
                    </scrollBox>
                </div>
        </mt-popup>
        <mt-popup
            v-model="popupVisible4"
            position="right"
            :modal="status"
            :closeOnClickModal="status">
                <div class="wrap4" >
                    <h1><span @click="cancel4"> &lt;</span>培训环境</h1>
                    <scrollBox class="scrollBox">
                        <div>
                            <p>
                                <span>{{environment.address}}</span>
                                <span>{{environment.time}}</span>
                            </p>
                            <div v-for="(item,index) in environment.all" :key="index">
                                <img :src="item.img" alt="">
                            </div>
                        </div>
                    </scrollBox>
                </div>
        </mt-popup>
		
		<div id="bottom" style="hegiht:10vh">egearggesr</div>
	</div>
</template>
<script>
import scrollBox from "@/components/ding/scroll"
export default {
    components:{
        scrollBox
    },
    data(){
        return{
            phone:15020653211,
            status:false,
            popupVisible1:false,
            popupVisible2:false,
            popupVisible21:false,
            popupVisible3:false,
            popupVisible4:false,
            detail:{},
            swipeImg:[{
                url:require('../../assets/images/3_02.png')
            },{
                url:require('../../assets/images/3_02.png')
            },{
                url:require('../../assets/images/3_02.png')
            },{
                url:require('../../assets/images/3_02.png')
            }],
            brief:{
                address:'聊城飞扬艺术培训机构',
                time:'05月11日',
                part:[{
                    txt:"聊城飞扬音乐是聊城音乐教育方面的领先者与旗帜标杆。"
                },{
                    txt:"自飞扬音乐品牌创立以来，已有十年的历史。2016年，飞扬音乐总部迁到聊城，将地址选在开发区财智大厦8号商铺，总面积达700余平，内部装修精美，设施齐全!"
                }],
                all:[{
                    txt:"聊城飞扬音乐是聊城音乐教育方面的领先者与旗帜标杆。"
                },{
                    txt:"自飞扬音乐品牌创立以来，已有十年的历史。2016年，飞扬音乐总部迁到聊城，将地址选在开发区财智大厦8号商铺，总面积达700余平，内部装修精美，设施齐全!"
                },{
                    txt:"飞扬音乐一直遵循着“让音乐成为灵魂中最有光的那一角”的文化理念!因为我们相信，音乐教育不是音乐家的教育，而是每个人灵魂的教育;相信音乐的人，也一定会相信美和善。"
                },{
                    txt:"飞扬音乐自成立以来，课程特点突出，师资力量雄厚空间，管理体系科学。已逐步形成以音乐综合素质教育为核心的培训基地。"
                },{
                    txt:"飞扬音乐品牌教学体系完善，开设特色精品一对一课程:流行声乐演唱、钢琴、吉他、古筝、架子鼓、萨克斯。"
                },{
                    txt:"也有精致大课:口才演讲、形体塑造、舞台表演、音乐素养。"
                },{
                    txt:"更有成人声乐速成班;国际大师交流班。"
                },{
                    txt:"让学员在技能技术和音乐综合素质方面整体提升!"
                },{
                    txt:"我校师资力量强大，拥有“中国音乐金钟奖”金奖获得者:王泽南老师;北京大学歌剧研究艺术指导、“中国三大男高音”之一戴玉强的钢琴伴奏:田光浩老师为我校音乐指导，为学员在音乐学习过程中拨云指路!"
                },{
                    txt:"作为聊城地区最具影响力的音乐教育中品牌，值得所有有音乐梦想的人信赖!"
                }]
            },
            information:{
                part:[{
                    img:require('../../assets/images/3_05.png'),
                    title:'聊城飞扬艺术培训中心开始招生了！快来报名！',
                    time:'2019-05-11',
                    address:'聊城飞扬艺术培训机构',
                    times:'05月11日',
                    txt1:"聊城飞扬艺术学校属于艺术培训服务行业，主要服务对象是即将参加高考的音乐考生，着重艺术专业高考辅导，重点科目是声乐，舞蹈，钢琴，影视表演以及广播电视编导等。咨询热线: 2. 飞扬艺术培训学校，成立于2007年，是一所专注于音乐、专注高考培训的专业化艺术学校，是政府正式批准成立的正规艺术培训学校，也是四川音乐学院考前培训基地。2017年成立飞扬聊城分校。飞扬艺校专注考前音乐类培训长达十年，十年间已为全国高校输送了大量专业艺术人才，園了数以千计艺考生的大学梦，实现了他们的音乐理想，是艺术生通往大学校门的绝佳道路。3.我们希 望经过长足发展创建出自己的培训品牌和培训特色，成为山东省最为专业的，最为正规的艺术培训教育机构。之后，我们将会在全国各大城市开办连锁培训学校，我们要做最一流的教育学校机构。在艺术教育行业做属于自己的品牌。4.飞扬的指 导老师涵盖国内外著名的讲师、艺术专家顾问，拥有扎实的教学基础，庞大的师资团队，丰富的艺术专业知识以及艺术造诣，教学经验丰富。",
                    img:require('../../assets/images/2_03.png'),
                    imgList:[{
                        url:require('../../assets/images/2_03.png')
                    },{
                        url:require('../../assets/images/2_06.png')
                    },{
                        url:require('../../assets/images/2_08.png')
                    }],
                    txt2:"学校指导老师采用的是最前沿的海归派教学方法，老师全职坐班，一对一教学。没有枯燥苍白的教学方法，讲解一针见血，通俗易懂，只需一节课就能使学生感受到明显的与众不同与学习效果的提升。运营管理制度管理在中心经营过程中，管理与效益是亲密相关的，因此，制度化管理在运营过程中是相当重要的。飞扬艺校实行半封闭式全天候的管理模式，学校设有器乐室、声教室、舞蹈室、文化课教师、多媒体教师、宿舍、食堂一体化设施，校内布有二十四小时全方位的监控设备，可以让家长及时了解学生的学习状态、生活状态。学习方面，飞扬实行打分制，学生从起床的行为开始就被计入学分，以此来督促学生学习、生活各方面的进度。相关的管理制度有: 1.出勤制度2.固定资产管理3.3.财务管理制度.4.工资的发放管理制度5.业绩与老师工资的关系制度6.教师培训制度7.管理人员的权限规定制度8.员工的奖罚制度9.员工的工作制度10.教案作业管理制度11.培训输出管理制度12. 会议管理制度经营计划"
                },{
                    img:require('../../assets/images/3_08.png'),
                    title:'聊城飞扬少儿艺术培训中西',
                    time:'2019-05-11',
                    address:'聊城飞扬艺术培训机构',
                    times:'05月11日',
                    txt1:"聊城飞扬儿童艺术培训中心隶属于飞扬教育集团，集团成立于2007年，聊城飞扬儿童艺术培训中心是经聊城市教育局正式批准开办的一所以音乐、舞蹈、古筝、美术、书法等专业为主的艺术培训机构，学校占地1000多平方米。飞扬艺校专注艺术高考十余年，有者雄厚的师资力量，丰富的教学经验。马云在大数据峰会上曾说:如果不让孩子学习琴棋书画，那么未来30年将找不到工作，因为他们没办法竞争过机器时代!李开复说过，未来什么都有可能被替代，唯独艺术和娱乐不可能被替代!我们飞扬人坚信从小培养艺术品格才是我们的责任，飞扬教育集团将以雄厚的师资力量和丰富的办学经验，坚持把聊城飞扬儿童艺术培训中心打造成山东儿童艺术一流品牌!咨询电话: 17353825678",
                    img:require('../../assets/images/2_03.png'),
                    imgList:[{
                        url:require('../../assets/images/2_03.png')
                    },{
                        url:require('../../assets/images/2_06.png')
                    },{
                        url:require('../../assets/images/2_08.png')
                    }],
                    txt2:"我们拥有一批资深的教授、教师以及活跃在演艺一线的青年教师队伍。这些教师分别毕业于:北京电影学院表演系、中央美术学院、中国音乐学院声乐系、北京舞蹈学院舞蹈系、天津美术学院、首都师范大学音乐系、四川音乐学院表演系、辽宁师范大学表演系、广西艺术学院书法系等!我们的责任重于泰山，甚感任重道远。展望未来，我愿鞠躬尽瘁，与同仁携手努力，让学生增长知识才干，提高生活本领，增强对自己、对社会的责任.心，让满园桃李更加灿漫、更加芬芳!追寻卓著，方可使飞扬教育集团兀立天地;超越自我，定能使飞扬儿童艺术培训璀璨于未来!"
                }],
               all:[{
                    img:require('../../assets/images/3_05.png'),
                    title:'聊城飞扬艺术培训中心开始招生了！快来报名！',
                    time:'2019-05-11',
                    address:'聊城飞扬艺术培训机构',
                    times:'05月11日',
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
                    img:require('../../assets/images/3_08.png'),
                    title:'聊城飞扬少儿艺术培训中西',
                    time:'2019-05-11',
                    address:'聊城飞扬艺术培训机构',
                    times:'05月11日',
                    txt1:"聊城飞扬儿童艺术培训中心隶属于飞扬教育集团，集团成立于2007年，聊城飞扬儿童艺术培训中心是经聊城市教育局正式批准开办的一所以音乐、舞蹈、古筝、美术、书法等专业为主的艺术培训机构，学校占地1000多平方米。飞扬艺校专注艺术高考十余年，有者雄厚的师资力量，丰富的教学经验。马云在大数据峰会上曾说:如果不让孩子学习琴棋书画，那么未来30年将找不到工作，因为他们没办法竞争过机器时代!李开复说过，未来什么都有可能被替代，唯独艺术和娱乐不可能被替代!我们飞扬人坚信从小培养艺术品格才是我们的责任，飞扬教育集团将以雄厚的师资力量和丰富的办学经验，坚持把聊城飞扬儿童艺术培训中心打造成山东儿童艺术一流品牌!咨询电话: 17353825678",
                    imgList:[{
                        url:require('../../assets/images/2_03.png')
                    },{
                        url:require('../../assets/images/2_06.png')
                    },{
                        url:require('../../assets/images/2_08.png')
                    }],
                    txt2:"我们拥有一批资深的教授、教师以及活跃在演艺一线的青年教师队伍。这些教师分别毕业于:北京电影学院表演系、中央美术学院、中国音乐学院声乐系、北京舞蹈学院舞蹈系、天津美术学院、首都师范大学音乐系、四川音乐学院表演系、辽宁师范大学表演系、广西艺术学院书法系等!我们的责任重于泰山，甚感任重道远。展望未来，我愿鞠躬尽瘁，与同仁携手努力，让学生增长知识才干，提高生活本领，增强对自己、对社会的责任.心，让满园桃李更加灿漫、更加芬芳!追寻卓著，方可使飞扬教育集团兀立天地;超越自我，定能使飞扬儿童艺术培训璀璨于未来!"
                }], 
                
            },
            marvellous:{
                part:[{
                    title:'飞扬良好的学习环境及优质的教学质量',
                    img:require('../../assets/images/1.mp4')
                },{
                    title:'关爱老人，聊城飞扬艺术学校社会福利院慰问实践活动',
                    img:require('../../assets/images/1.mp4')
                },{
                    title:'国家一级演员王泽南莅临指导',
                    img:require('../../assets/images/1.mp4')
                }],
                all:[{
                    title:'飞扬良好的学习环境及优质的教学质量',
                    img:require('../../assets/images/1.mp4')
                },{
                    title:'关爱老人，聊城飞扬艺术学校社会福利院慰问实践活动',
                    img:require('../../assets/images/1.mp4')
                },{
                    title:'国家一级演员王泽南莅临指导',
                    img:require('../../assets/images/1.mp4')
                },{
                    title:'飞扬良好的学习环境及优质的教学质量',
                    img:require('../../assets/images/1.mp4')
                },{
                    title:'关爱老人，聊城飞扬艺术学校社会福利院慰问实践活动',
                    img:require('../../assets/images/1.mp4')
                },{
                    title:'国家一级演员王泽南莅临指导',
                    img:require('../../assets/images/1.mp4')
                }]
            },
            environment:{
                time:'05月11日',
                address:'聊城飞扬艺术培训机构',
                part:[{
                    img:require('../../assets/images/3_05.png')
                }],
                all:[{
                    img:require('../../assets/images/3_05.png')
                },{
                    img:require('../../assets/images/3_05.png')
                },{
                    img:require('../../assets/images/3_05.png')
                },{
                    img:require('../../assets/images/3_05.png')
                },{
                    img:require('../../assets/images/3_05.png')
                },{
                    img:require('../../assets/images/3_05.png')
                },{
                    img:require('../../assets/images/3_05.png')
                }]
            }
        }
    },
    methods: {
        goMore1(){
            this.popupVisible1=true
        },
        cancel1(){
            this.popupVisible1=false
        },
        goMore2(){
            this.popupVisible2=true
        },
        cancel2(){
            this.popupVisible2=false
        },
        goMore3(){
            this.popupVisible3=true
        },
        cancel3(){
            this.popupVisible3=false
        },
        goMore4(){
            this.popupVisible4=true
        },
        cancel4(){
            this.popupVisible4=false
        },
        goDetail(index){
            this.popupVisible21=true
            this.detail=this.information.all[index]
            // console.log(index)
        },
        cancel21(){
            this.popupVisible21=false
        },
        callPhone (phoneNumber) {
            window.location.href = 'tel://' + phoneNumber
        },
        goMap(){
            this.$router.push({
                path:'/map'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    
    .scrollBox
        height calc(100vh - 80px)
        overflow hidden
    .container
        .swipe
            width 100%
            height 380px
            img
                display block
                width 100%
                height 100%
        .list
            .conBox
                padding 20px
                display flex
                border-bottom 1px solid #ccc
                div
                    display flex
                    flex-direction column
                    justify-content space-between
                    p
                        font-size 26px
                img
                    width 300px
                    height 180px
                    margin-right 20px
            li
                padding 20px
                p 
                    font-size 23px
                h4
                    height 40px
                    display flex 
                    justify-content space-between
                    align-items center
                    font-size 32px
                    margin-bottom 20px
                img 
                    width 100%
                div>h5
                    font-size 14px
                    margin 10px 0
                
    .wrap1
        box-sizing border-box
        width 100vw
        height 100vh
        padding 20px
        background #fff
        &>h1
            span
                margin-right 20px
        p
            font-size 32px
            margin 20px 0
            color #666
            span:nth-child(1)
                color rgb(0,87,203)
                margin-right 10px
                font-size 28px
    .wrap2
        box-sizing border-box
        width 100vw
        height 100vh
        padding 20px
        background #fff
        .conBox
                padding 20px
                display flex
                border-bottom 1px solid #ccc
                div
                    display flex
                    flex-direction column
                    justify-content space-between
                    p
                        font-size 26px
                img
                    width 300px
                    height 180px
                    margin-right 20px
    .contact
        padding 20px
        p 
            margin-bottom 20px
        .phone
            padding 10px
            display flex 
            justify-content space-between
            align-items center
            font-size 32px 
            border 1px solid #ccc
            border-radius 3px
            margin-bottom 20px
            .left
                .num
                    color rgb(25,161,95) 
                p
                    margin 5px 0
        .address 
            padding 5px
            b
                font-size 33px
            

    .wrap21
        box-sizing border-box
        width 100vw
        height 100vh
        padding 20px
        background #fff
        .tip
            font-size 32px
            height 50px
            font-weight 600
        div>p
            text-indent 4rem
            font-size 32px
        .imgBox
            display flex
            flex-direction column
            img 
                margin-bottom 10px
        p
            margin-bottom 10px
            &>span 
                margin-right 30px
    .wrap3
        box-sizing border-box
        width 100vw
        height 100vh
        padding 20px
        background #fff
        img 
            width 100%
        div>h5
            font-size 28px
            margin 10px 0
    .wrap4
        box-sizing border-box
        width 100vw
        height 100vh
        padding 20px
        background #fff
        h1
            span
                margin-right 20px
        p
            margin 10px 0
            font-size 32px
            span:nth-child(1)
                color #0057cb
        img 
            width 100%
            margin 15px 0
</style>