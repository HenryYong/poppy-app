<template>
    <!-- <exception type="building"></exception> -->
    <article class="article-wrapper"
        v-loading="loading">
        <h2 class="article-title">{{ curArticle.title }}</h2>
        <div class="article-info">
            <p>发布时间：{{ localFormatTime(curArticle.create_time) }}</p>
            <p>分类：{{ curArticle.category }}</p>
        </div>
        <section class="article-content" id="marked_article"></section>
        <div class="article-tags"
            v-if="curArticle.tags">
            <span class="article-tag-item"
                v-for="tag of curArticle.tags.split(',')"
                :key="tag">
                {{ tag }}
            </span>
        </div>
    </article>
</template>

<script>
    import exception from 'src/components/exception'
    import hljs from 'highlight.js'
    import marked from 'marked'
    import { mapGetters } from 'vuex'
    import {
        formatTime
    } from 'src/utils/utils'

    export default {
        data () {
            return {
                curArticle: {},
                loading: false
            }
        },
        computed: {
            ...mapGetters({
                'articlesDetail': 'articles/getArticlesDetail'
            }),
            articleId () {
                return this.$route.params.articleId
            }
        },
        methods: {
            localFormatTime (time) {
                return formatTime(time)
            }
        },
        async mounted () {
            let {
                articleId
            } = this
            let article = this.articlesDetail[articleId]

            if (!article || !Object.keys(article).length) {
                let {
                    $store
                } = this

                try {
                    this.loading = true
                    this.curArticle = await $store.dispatch('articles/requestArticleDetail', articleId)
                } catch (err) {
                    this.$message.error(`${err.data ? err.data.message : err}`)
                    console.warn('获取标签接口错误')
                } finally {
                    setTimeout(() => {
                        this.loading = false
                    }, 200)
                }
            } else {
                this.curArticle = article
            }

            let renderer = new marked.Renderer()

            this.$el.querySelector('#marked_article').innerHTML = marked(this.curArticle.content, {
                renderer
            })
            hljs.initHighlighting()
        },
        components: {
            exception
        }
    }
</script>

<style lang="scss">
    @import './../../styles/conf';

    .article-wrapper {
        padding: 0 40px;
        .article-title {
            padding-bottom: 20px;
            border-bottom: 1px solid $borderColor;
        }
        .article-info {
            padding: 20px 0;
            font-size: 12px;
            color: $fontLight;
        }
        .article-content {
            margin-bottom: 30px;
            border-bottom: 1px solid $borderColor;
            & > p {
                line-height: 2;
            }
            blockquote{
				margin-bottom: 30px;
				p{
					padding-left: 20px;
					border-left: 4px solid #17BED2;
					font: {
						size: 14px;
						weight: bold;
					}
				}
			}
			a{
				color: $themeDark;
				display: inline;
			}
			del{
				a{
					cursor: not-allowed;
				}
			}
			pre,
			code{
				font-family: Roboto Mono,Monaco,courier,monospace;
			    font-size: .8em;
			    border-radius: 2px;
			}
			code{
			    color: #e96900;
			    padding: 3px 5px;
			    margin: 0 2px;
			    // white-space: nowrap;
			    background-color: #eaeaea;
			}
			pre{
				position: relative;
			    background-color: #f8f8f8;
			    padding: 20px 20px 10px;
			    border-radius: 2px;
				margin-bottom: 10px;
				color: #525252;
				code{
					color: #525252;
					background-color: transparent;
					span{
						font-size: 14px;
					}
					.hljs-keyword{
						color: #e96900;
					}
					.hljs-comment{
						color: #b3b3b3;
					}
					.hljs-string,
					.hljs-built_in{
						color: #42b983;
					}
					.hljs-title{
						color: #a6e22e;
					}
					.hljs-number,
					.hljs-literal{
						color: #ae81ff;
					}
					.hljs-function{
						.hljs-keyword{
							color: #0092db;
						}
					}
				}
			}
			ol,
            ul{
				padding-left: 15px;
				margin-bottom: 10px;
				li{
					line-height: 2;
				}
			}
            ol > li{
                list-style-type: decimal;
            }
            ul > li {
                list-style-type: disc;
            }
			p + h3,
			ol + h3{
				margin-top: 30px;
			}
			img{
			    display: block;
    			margin: 0 auto;
    			max-width: 100%;
			}
			iframe{
				margin-bottom: 10px;
            }
            & > h2 {
                margin-bottom: 10px;
            }
            & > p {
                margin-bottom: 20px;
            }
        }
        .article-tags {
            font-style: italic;
            font-size: 14px;
            color: $fontLight;
        }
        .article-tag-item + .article-tag-item {
            margin-left: 10px;
        }
    }
</style>

