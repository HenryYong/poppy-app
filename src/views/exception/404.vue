<template>
    <section class="exception-404">
        <banner
            :bg-image="bannerImage">
        </banner>
        <div class="exception-content">
            <a href="javascript:;" class="p-button"
                @click="$router.push({ name: 'Home' })">
                Home
            </a>
            <p class="exception-text">The page you are looking for is no longer exists!</p>
        </div>
    </section>
</template>

<script>
    import banner from 'src/components/banner'
    import notFound from 'src/images/notFound.png'

    export default {
        data () {
            return {
                bannerImage: notFound
            }
        },
        components: {
            banner
        }
    }
</script>

<style lang="scss" scoped>
    .exception-404 {
        position: relative;
    }

    .exception-content {
        position: absolute;
        left: 50%;
        bottom: 17%;
        transform: translateX(-50%);
    }

    .exception-text {
        margin-top: 20px;
        line-height: 1;
        color: #fff;
    }
</style>

