<template>
    <!-- <exception type="building"></exception> -->
    <div class="articles-list">
        <section class="article-item"
            v-for="item of list"
            :key="item.article_id"
            @click="directToDetail(item.article_id)">
            <div class="title">
                <div class="title-text text-overflow">{{ item.title }}</div>
            </div>
            <div class="subtitle">
                <div class="subtitle-text text-overflow" v-html="item.description"></div>
                <!-- <a href="javascript:;" class="text-link">阅读全文</a> -->
            </div>
            <p class="info">
                <span class="time">{{ localFormatTime(item.create_time) }}</span>
            </p>
        </section>
    </div>
</template>

<script>
    import exception from 'src/components/exception'
    import {
        formatTime
    } from 'src/utils/utils'

    export default {
        data () {
            return {
                isLoading: false,
                list: []
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
                    name: 'ClientArticleDetail',
                    params: {
                        articleId
                    }
                })
            }
        },
        mounted () {
            this.$http.get(`${CLIENT_AJAX_URL}/articles/`).then(response => {
                console.log(response)
                this.list.splice(0, this.list.length, ...response.data)
            })
        },
        components: {
            exception
        }
    }
</script>

<style lang="scss">
    @import './../../../styles/conf';

    .articles-list {
        position: relative;
        padding: 0 60px;
    }
    .article-item {
        display: flex;
        flex-direction: column;
        height: 160px;
        margin-bottom: 30px;
        padding: 20px;
        border: 1px solid $borderColor;
        transition: all linear .2s;
        cursor: pointer;
        &:last-child {
            margin: 0;
        }
        &:hover {
            box-shadow: 2px 2px 3px rgba(0, 0, 0, .075);
        }
        .title {
            display: flex;
            align-items: center;
            flex: 2;
            font-size: 30px;
            &-text {
                &:hover {
                    transition: color linear .2s;
                    color: $themeColor;
                }
            }
        }
        .subtitle {
            display: flex;
            align-items: center;
            flex: 1;
            font-size: 14px;
            color: $fontLight;
        }
        .text-link {
            color: $themeColor;
            &:hover {
                color: $themeDark;
            }
        }
        .info {
            display: flex;
            align-items: center;
            flex: 1;
            font-size: 14px;
            color: $fontLight;
        }
    }
</style>

