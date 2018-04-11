/**
 * client路由配置
 * @author Henry Yang
 */

import Vue from 'vue'
import Router from 'vue-router'

import About from './about'
import Archives from './archives'
import Categories from './categories'
import Contact from './contact'
import Tags from './tags'
import Articles from './articles'

// client框架页
const Client = () => import(
    /* webpackChunkName: 'Client' */
    './../views/index'
)
let routesArr = [
    About,
    Archives,
    Categories,
    Contact,
    Tags,
    Articles
]
let children = []
let routes = []

Vue.use(Router)

routesArr.map(route => {
    children.push(...route)
})

routes.push(
    {
        path: '',
        component: Client,
        children
    }
)

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(route => {

})

export default router
