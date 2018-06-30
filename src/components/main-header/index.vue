<template>
    <header class="main-header"
        :class="[cacheTheme, status]">
        <div class="main-header-icon"
            @click="$router.push({ name: 'Home' })">
            <i class="iconfont icon-sheep"></i>
        </div>

        <ul class="main-header-menu">
            <li class="header-menu-item"
                v-for="item in topMenu"
                :key="item.id || item.icon"
                :class="{
                    'item-text': item.id,
                    'item-icon': item.icon
                }"
                @click="clickHandler(item)">
                <span
                    v-if="item.id">
                    {{ item.id }}
                </span>
                <i class="iconfont"
                    v-if="item.icon"
                    :class="`icon-${item.icon}`">
                </i>
            </li>
        </ul>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        props: {
            theme: {
                type: String,
                default: 'white'
            }
        },
        data () {
            return {
                status: '',
                lastScrollTop: 0,
                cacheTheme: this.theme
            }
        },
        computed: {
            ...mapGetters({
                'topMenu': 'getTopMenu'
            })
        },
        methods: {
            clickHandler (item) {
                if (item.id) {
                    this.$router.push({
                        name: item.target
                    })
                } else {
                    window.open(item.target, '_blank')
                }
            },
            onScroll () {
                let currentTop = document.documentElement.scrollTop || document.body.scrollTop
                let { lastScrollTop } = this

                if (currentTop > lastScrollTop) {
                    this.status = 'out'
                } else {
                    this.status = 'in'

                    // 当前主题色是白色且当前滚动高度大于窗口高度时使用黑色主题
                    if (this.theme === 'white') {
                        if (currentTop > document.documentElement.clientHeight) {
                            this.cacheTheme = 'black'
                        } else {
                            this.cacheTheme = 'white'
                        }
                    } else {
                        this.cacheTheme = 'black'
                    }
                }

                this.lastScrollTop = currentTop
            }
        },
        mounted () {
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../styles/conf';

    .main-header {
        @extend %clearfix;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 60px;
        background-color: transparent;
        z-index: 1;
        transition: all .3s linear;
        &.out {
            top: -60px;
        }
        &-icon {
            float: left;
            width: 60px;
            height: 100%;
            padding-top: 10px;
            text-align: center;
            .iconfont {
                cursor: pointer;
                font-size: 40px;
            }
        }
        &-menu {
            float: right;
            height: 100%;
            padding-top: 17px;
            margin-right: 20px;
            text-align: right;
        }
        &.black {
            &.in {
                top: 0;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
                background: rgba(255, 255, 255, .97);
            }
            .header-menu-item {
                color: $fontLight;
                &.item-text:after {
                    background-color: $fontLight;
                }
                &.item-icon {
                    &:hover {
                        color: $themeDark;
                    }
                }
            }
            .main-header-icon {
                .iconfont {
                  color: $fontLight;
                }
            }
        }
        &.white {
            &.in {
                top: 0;
            }
            .header-menu-item {
                color: #fff;
                &.item-text:after {
                    background-color: #fff;
                }
                &.item-icon {
                    color: rgba(255, 255, 255, .7);
                    &:hover {
                        color: #fff;
                    }
                }
            }
            .main-header-icon {
                .iconfont {
                  color: #fff;
                }
            }
        }
    }

    .header-menu-item {
        margin-right: 15px;
        vertical-align: middle;
        font-size: 14px;
        cursor: pointer;
        &.item-text {
            line-height: 1.75;
            &:after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                opacity: 0;
                transition: width .3s ease-in, opacity .2s ease-in;
            }
            &:hover:after {
              width: 100%;
              opacity: 1;
            }
        }
        &.item-icon {
          transition: color .2s linear;
        }
        .iconfont {
            font-size: 18px;
        }
    }
</style>
