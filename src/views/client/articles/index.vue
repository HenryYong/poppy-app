<template>
    <!-- <exception type="building"></exception> -->
    <div class="articles-list">
        <section class="article-item">
            <div class="title">
                <div class="title-text text-overflow">title</div>
            </div>
            <div class="subtitle">
                <div class="subtitle-text text-overflow">subtitle</div>
                <!-- <a href="javascript:;" class="text-link">阅读全文</a> -->
            </div>
            <p class="info">
                <span class="time">2018-01-01 00:00:00</span>
            </p>
        </section>
        <loading v-if="isLoading"></loading>
    </div>
</template>

<script>
    import exception from 'src/components/exception'
    import loading from 'src/components/loading'

    export default {
        data () {
            return {
                isLoading: false
            }
        },
        mounted () {
            this.$http.get(`${CLIENT_AJAX_URL}/articles/`).then(response => {
                console.log(response)
            })
        },
        components: {
            exception,
            loading
        }
    }
</script>

<style lang="scss">
    @import './../../../styles/conf';

    .articles-list {
        position: relative;
        padding: 30px 60px;
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

