/**
 * 路由配置
 * @author Henry Yang
 */

import Vue from 'vue'
import Router from 'vue-router'
import Auth from './auth'
import Common from './common'
import Articles from './articles'
import Roles from './roles'
import Users from './users'
import Tags from './tags'
import Categories from './categories'
import Comments from './comments'

let childrenArr = [
    Common,
    Auth,
    Articles,
    Roles,
    Users,
    Tags,
    Categories,
    Comments
]

let childrenRoutes = []

childrenArr.map(route => {
    childrenRoutes.push(...route)
})

// let routerArr = [
//     // Auth
// ]
// let routes = []

// routerArr.map(route => {
//     routes = routes.concat(route)
// })

export default childrenRoutes
