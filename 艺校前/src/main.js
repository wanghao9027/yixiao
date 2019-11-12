// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
//import '@/assets/css/font/iconfont.css'
import "@/assets/css/font/iconfont.css"
import '@/assets/js/fixed.js'
/* axios */
import axios from 'axios'
// import VueAxios from 'vue-axios'
Vue.prototype.$http = axios
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//视频
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

// Vue.use(VueAxios, axios)

/* mint-ui */

Vue.use(MintUI);

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap,{
    ak:'Tsysj1oxCFHwq527G3H58C7gydhFeLhU',//使用申请的百度地图秘钥
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
