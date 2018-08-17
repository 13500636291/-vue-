import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '@/components/login'
import home from '@/components/home'
import Welcome from '@/components/welcome/Welcome'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { name: 'login', path: '/login', component: login },
        {
            name: 'Home',
            path: '/',
            component: home,
            redirect: { path: 'welcome' },
            children: [
                { name: 'welcome', path: 'welcome', component: Welcome }
            ]
        }
    ]
})