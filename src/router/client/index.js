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
import List from './list'
import Tags from './tags'

let routesArr = [
    About,
    Archives,
    Categories,
    Contact,
    List,
    Tags
]
let routes = []

routesArr.map(route => {
    routes.push(...route)
})

export default routes
