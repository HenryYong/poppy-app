<template>
    <div class="main-content">
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import sideMenu from 'src/components/side-menu'
    import {
        Message,
        Loading,
        MessageBox
    } from 'element-ui'

    Vue.use(Loading.directive)
    
    Vue.prototype.$message = Message
    Vue.prototype.$confirm = MessageBox.confirm

    export default {
        mounted () {

        },
        components: {
            'side-menu': sideMenu
        }
    }
</script>


<style lang="scss">
    @import './styles/reset';
    @import './styles/app';

    .main-content {
        height: 100%;
    }
</style>
