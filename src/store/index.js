/**
 * store
 * @author Henry Yang
 */

import Vue from 'vue'
import Vuex from 'vuex'
import articles from './articles'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        articles
    },
    // 公共state
    state: {
        navList: [
            {
                id: 'ClientArticlesList',
                text: 'Home'
            },
            {
                id: 'ClientCategories',
                text: 'Categories'
            },
            {
                id: 'ClientArchives',
                text: 'Archives'
            },
            {
                id: 'ClientTags',
                text: 'Tags'
            },
            {
                id: 'ClientAbout',
                text: 'About'
            },
            {
                id: 'ClientContact',
                text: 'Contact'
            }
        ],
        topMenu: [
            {
                id: 'Home',
                target: 'Home'
            },
            {
                id: 'Blog',
                target: 'ArticlesList'
            },
            {
                icon: 'github',
                target: 'https://github.com/HenryYong'
            },
            {
                icon: 'segmentfault',
                target: 'https://segmentfault.com/u/henryyong'
            },
            {
                icon: 'stackoverflow',
                target: 'https://stackoverflow.com/users/4064817/henry-yong'
            },
            {
                icon: 'facebook',
                target: 'https://www.facebook.com/HenryYongEndless'
            },
            {
                icon: 'twitter',
                target: 'https://twitter.com/Henry_Yangs'
            // },
            // {
            //     icon: 'weibo',
            //     target: ''
            }
        ]
    },
    getters: {
        getNavList: state => state.navList,
        getTopMenu: state => state.topMenu
    },
    // 公共mutations
    mutations: {
        
    },
    // 公共actions
    actions: {
    }
})
