<template>
    <!-- <exception type="building"></exception> -->
    <article class="article-wrapper">
        <h2 class="article-title">{{ curArticle.title }}</h2>
        <section class="article-desc" v-html="curArticle.description"></section>
        <section class="article-content" v-html="curArticle.content"></section>
    </article>
</template>

<script>
    import exception from 'src/components/exception'
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                curArticle: {}
            }
        },
        computed: {
            ...mapGetters({
                'articlesDetail': 'client/getArticlesDetail'
            }),
            articleId () {
                return this.$route.params.articleId
            }
        },
        async created () {
            let {
                articleId
            } = this

            if (!this.articlesDetail[articleId]) {
                let {
                    $store
                } = this

                try {
                    this.curArticle = await $store.dispatch('client/requestArticleDetail', articleId)
                } catch (err) {
                    alert(err)
                }
            }
        },
        components: {
            exception
        }
    }
</script>

<style lang="scss">
    @import './../../../styles/conf';

    .article-wrapper {
        padding: 0 40px;
        .article-title {
            padding-bottom: 20px;
            border-bottom: 1px solid $borderColor;
        }
        .article-desc{
            padding: 40px 0;
        }
        .article-content {
            padding-bottom: 20px;
        }
    }
</style>

