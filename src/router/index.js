import Vue from 'vue'
import Router from 'vue-router'
import adminRoutes from './admin'
import clientRoutes from './client'

// 框架页
const Admin = () => import(
    /* webpackChunkName: 'Admin' */
    './../views/admin/index'
)
// const None = () => import(
//     /* webpackChunkName: 'None' */
//     '../views/none'
// )

Vue.use(Router)

// let routes = adminRoutes.concat(clientRoutes)
let allRoutes = []

allRoutes.push(
    {
        path: '/admin',
        component: Admin,
        children: adminRoutes
    }
)
console.log(allRoutes)
const router = new Router({
    mode: 'history',
    routes: allRoutes
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(route => {

})

export default router
