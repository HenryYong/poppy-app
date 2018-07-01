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
import Blog from './blog'

// home
const Home = () => import(
    /* webpackChunkName: 'Home */
    './../views/home'
)

const NotFound = () => import(
    /* webpackChunkName: 'NotFound */
    './../views/exception/404'
)

let routesArr = [
    About,
    Archives,
    Categories,
    Contact,
    Tags,
    Blog
]
let routes = []

Vue.use(Router)

routesArr.map(route => {
    routes.push(...route)
})

routes.push(
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        name: '404',
        component: NotFound
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
