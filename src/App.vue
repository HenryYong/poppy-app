<template>
    <div class="main-content">
        <main-header :theme="theme"></main-header>
        <router-view></router-view>
    </div>
</template>

<script>
    // import public components
    import Vue from 'vue'
    import {
        Message,
        Loading
    } from 'element-ui'
    import mainHeader from 'src/components/main-header'
    import { headerTheme } from 'src/utils/config'

    Vue.use(Loading.directive)
    Vue.prototype.$message = Message

    export default {
        computed: {
            theme () {
                return headerTheme.includes(this.$route.name) ? 'black' : 'white'
            }
        },
        components: {
            'main-header': mainHeader
        }
    }
</script>


<style lang="scss">
    @import './styles/reset';
    @import './styles/app';

    .main-content {
        min-width: 1024px;
        min-height: 100%;
    }
</style>
