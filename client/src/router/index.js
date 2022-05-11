import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import NotFound from '@/components/NotFound'

export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',  
            name: 'StateList', 
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/:pathMatch(.*)*', // match anythign thats not the one of the other routes
            name: 'NotFound',
            component: NotFound
        }
    ]
})
