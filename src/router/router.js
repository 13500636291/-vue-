import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../components/login'
import home from '../components/home'
App.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { name: 'login', path: '/login', component: login },
        { name: 'home', path: '/home', component: home }
    ]
})