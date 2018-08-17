import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import './styles/index.scss'
import './styles/icon.scss'
import store from './store/store.js'
//导航守卫
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('mytoken')
    if (token) {
        next()
    } else {
        if (to.path !== '/login') {
            next({ path: '/login' })
        } else {
            next()
        }
    }
})
Vue.use(ElementUI)
import { router } from './router/router'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')