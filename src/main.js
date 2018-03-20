/**
 * file main entry
 * @author Henry Yang
 */

import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import store from './store'
import router from './router'
import App from './App'

global.poppyVM = new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    },
    router,
    store
})
