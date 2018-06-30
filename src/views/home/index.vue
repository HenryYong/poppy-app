<template>
    <div class="poppy-home">
      <banner :bg-image="bannerImage"></banner>
      <div class="poppy-home-text">
        <p class="title">Nice to Virtually Meet You!</p>
        <!-- <a class="more">read more</a> -->
      </div>
    </div>
</template>

<script>
    import banner from 'src/components/banner'
    import bannerImage from 'src/images/home_banner.jpg'

    export default {
        data () {
            return {
                bannerImage
            }
        },
        components: {
            banner
        }
    }
</script>

<style lang="scss">
    .poppy-home {
        &-text {
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
            text-align: center;
            color: #fff;
            .title {
                margin-bottom: 20px;
                font-size: 60px;
            }
            .more {
                color: #fff;
                cursor: pointer;
                opacity: .8;
                font: {
                  family: 'PingFangSC-Regular', 'Microsoft Yahei';
                  size: 16px;
                  style: italic;
                }
                &:hover {
                  opacity: 1;
                }
            }
        }
    }
</style>

