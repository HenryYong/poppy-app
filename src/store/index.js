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
        ]
    },
    getters: {
        getNavList: state => state.navList
    },
    // 公共mutations
    mutations: {
        
    },
    // 公共actions
    actions: {
    }
})
