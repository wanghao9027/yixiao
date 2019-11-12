import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/page/card/card'
import Hoem from '@/page/card/hoem'
import Calling from '@/page/card/children/calling'
//import Calling1 from '@/page/card/children/calling1'

import Calling3 from '@/page/ding/dynamic'
import Calling4 from '@/page/ding/website'
import Map from '@/page/ding/map'

import Calling1 from '@/page/view/di/shop'
import Car from "@/page/view/di/car"
import Search from "@/page/view/di/search"
import Close from "@/page/view/di/close"
import Details from "@/components/di/details"


import Calling2 from '@/page/view/meng/clock'


import che from "@/view/che"

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Card',
			component: Card
		},
		{
			path: '/map',
			name: 'Map',
			component: Map
		},
		{
			path: '/che',
			name: 'che',
			component: che
		},
		{
			path: '/hoem',
			name: 'Hoem',
			component: Hoem,
			redirect: "/hoem/calling",
			children: [{
					path: 'calling',
					name: 'Calling',
					component: Calling
				},
				{
					path: 'calling1',
					name: 'Calling1',
					component: Calling1,
					meta: {
						keepAlive: true // 需要被缓存
					}
				},
				{
					path: 'calling2',
					name: 'Calling2',
					component: Calling2
				},
				{
					path: 'calling3',
					name: 'Calling3',
					component: Calling3
				},
				{
					path: 'calling4',
					name: 'Calling4',
					component: Calling4
				}

			]
		},
		{
			path: '/car',
			name: 'Car',
			component: Car,
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/details',
			name: 'Details',
			component: Details,
			meta: {
				keepAlive: true // 需要被缓存
			}
		},
		{
			path: '/close',
			name: 'Close',
			component: Close,
			meta: {
				keepAlive: true // 需要被缓存
			}
		}

	]
})
