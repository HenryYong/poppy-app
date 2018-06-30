<template>
    <div class="top-banner"
        :class="[arrows, hideArrow]"
        :style="{
            height: `${ calcBannerHeight }px`,
            backgroundImage: `url(${ bgImage })`
        }">
        <div class="top-banner-arrow"></div>
    </div>
</template>

<script>
    export default {
        props: {
            bgImage: {
                type: String,
                default: ''
            },
            hasArrow: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                calcBannerHeight: 0,
                hideArrow: false
            }
        },
        computed: {
            arrows () {
                return this.hasArrow ? 'has-arrow' : ''
            }
        },
        methods: {
            /**
             * 改变banner高度
             */
            setBannerHeight () {
                this.calcBannerHeight = document.documentElement.clientHeight
            },
            onScroll () {
                let currentTop = document.documentElement.scrollTop || document.body.scrollTop

                this.hideArrow = currentTop ? 'hide-arrow' : ''
            }
        },
        mounted () {
            this.setBannerHeight()
            window.addEventListener('resize', this.setBannerHeight)
            window.addEventListener('scroll', this.onScroll)
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.setBannerHeight)
            window.removeEventListener('scroll', this.onScroll)
        }
    }
</script>

<style lang="scss">
    .top-banner {
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        &.has-arrow {
            &:before,
            &:after {
                content: '';
                position: absolute;
                left: 50%;
                width: 10px;
                height: 10px;
                transform: translateX(-50%) rotate(-45deg);
                transition: all .3s linear;
                border: {
                  left: 2px solid rgba(240, 240, 240, .8);
                  bottom: 2px solid rgba(240, 240, 240, .8);
                }
            }
            &:before {
              bottom: 25px;
              animation: beforeUpDown 1s ease-in infinite;
            }
            &:after {
              bottom: 18px;
              animation: afterUpDown 1s ease-in infinite;
            }
        }
        &.hide-arrow {
            &:before,
            &:after {
                border-color: transparent;
            }   
        }
    }

    @keyframes beforeUpDown {
        from {
            bottom: 25px;
        }
        70% {
            bottom: 10px;
        }
        to {
            bottom: 25px;
        }
    }

    @keyframes afterUpDown {
        from {
            bottom: 18px;
        }
        70% {
            bottom: 3px;
        }
        to {
            bottom: 18px;
        }
    }
</style>

