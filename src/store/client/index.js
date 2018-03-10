import Vue from 'vue'
import Vuex from 'vuex'

const assign = Object.assign
let modules = [
    
]
let state = {
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
}
let getters = {
    getNavList: state => state.navList
}
let mutations = {}
let actions = {}

modules.map(v => {
    for (let key in v) {
        assign(state, v.state)
        assign(getters, v.getters)
        assign(mutations, v.mutations)
        assign(actions, v.actions)
    }
})

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
