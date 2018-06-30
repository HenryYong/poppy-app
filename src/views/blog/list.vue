<template>
    <article class="articles-list-wrapper">
          <banner
            :bg-image="bannerImage"
            :has-arrow="true">
          </banner>
          <section class="articles-list-section">
              <div class="articles-list-item"
                  v-if="list.length"
                  v-for="item in list"
                  :key="item.article_id"
                  @click="directToDetail(item.article_id)">
                  <p class="article-title">{{ item.title }}</p>
                  <p class="article-time">{{ localFormatTime(item.create_time) }}</p>
              </div>
              <empty v-if="!list.length"></empty>
          </section>
    </article>
</template>

<script>
    import exception from 'src/components/exception'
    import empty from 'src/components/empty'
    import banner from 'src/components/banner'
    import bannerImage from 'src/images/list-banner.jpg'
    import { mapGetters } from 'vuex'
    import {
        formatTime
    } from 'src/utils/utils'

    export default {
        data () {
            return {
                isLoading: false,
                list: [],
                loading: false,
                showContent: false,
                bannerImage
            }
        },
        computed: {
            ...mapGetters({
                'articlesList': 'articles/getArticlesList'
            })
        },
        watch: {
            articlesList (newVal, oldVal) {
                this.list.splice(0, this.list.length, ...newVal)
            }
        },
        methods: {
            localFormatTime (time) {
                return formatTime(time)
            },
            /**
             * 跳转详情
             */
            directToDetail (articleId) {
                this.$router.push({
                    name: 'ArticleDetail',
                    params: {
                        articleId
                    }
                })
            }
        },
        async mounted () {
            if (!this.articlesList.length) {
                try {
                    this.loading = true
                    let response = await this.$store.dispatch('articles/requestArticlesList')
                } catch (err) {
                    this.$message.error(`${err.data ? err.data.message : err}`)
                    console.warn('获取标签接口错误')
                } finally {
                    setTimeout(() => {
                        this.loading = false
                    }, 200)
                }
            } else {
                this.list.splice(0, this.list.length, ...this.articlesList)
            }

            this.showContent = true
        },
        components: {
            exception,
            empty,
            banner
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/conf.scss';

    .articles-list-section {
        width: 900px;
        margin: 0 auto;
        padding: 50px;
    }

    .articles-list-item {
        position: relative;
        padding: 40px 120px 40px 20px;
        line-height: 1;
        cursor: pointer;
        &:not(:last-child) {
            border-bottom: 1px solid #dbdbdb;
        }
        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            transition: border-color .3s linear;
        }
        &:before {
            right: 20px;
            width: 40px;
            height: 40px;
            transform: translateY(-50%);
            border: 2px solid #eaeaea;
            border-radius: 50%;
        }
        &:after {
            right: 39px;
            width: 7px;
            height: 7px;
            transform: translateY(-50%) rotate(-45deg);
            border: {
                right: 2px solid #eaeaea;
                bottom: 2px solid #eaeaea;
            }
        }
        &:hover {
            &:before,
            &:after {
              border-color: #0fb7b7;
            }
            .article-title {
                color: #0fb7b7;
            }
        }
    }

    .article-title {
        font-size: 30px;
        color: $fontLight;
        transition: color .3s linear;
        &:hover {
            color: $fontDark;
        }
    }

    .article-time {
        margin-top: 20px;
        font-size: 14px;
        color: $fontLight;
    }
</style>
