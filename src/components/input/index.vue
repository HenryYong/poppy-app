<template>
    <div class="k-input">
        <div class="k-input-addon k-input-pre-addon"
            v-if="$slots.preAddon">
            <slot name="preAddon"></slot>
        </div>
        <input class="k-input-item"
            v-model="localVal"
            :type="originType"
            :placeholder="`请输入${placeholder}`"
        >
        <div class="k-input-addon k-input-post-addon"
            v-if="$slots.postAddon">
            <slot name="postAddon"></slot>
        </div>
    </div>
</template>

<script>
    /**
     * @param {String} value 输入框的值
     * @param {String} originType 输入框的原始类型
     * @param {String} placeholder 输入框的提示文字
     */
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            originType: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
            }
        },
        computed: {
            localVal: {
                get () {
                    return this.value
                },
                set (val) {
                    this.$emit('update:value', val)
                }
            }
        },
        watch: {
            localVal (val) {
                this.$emit('update:value', val)
            }
        }
    }
</script>

<style lang="scss">
    @import './../../styles/conf';

    .k-input {
        position: relative;
        width: 100%;
        &-item {
            width: 100%;
            height: 36px;
            line-height: 36px;
            padding: 0 13px;
            border: 1px solid $grayLighter;
            border-radius: 3px;
            outline: none;
            color: $black;
            transition: all .2s linear;
            &:focus {
                border-color: $primary;
            }
            &.has-error {
                border-color: $danger;
                color: $danger;
                background-color: rgba(253, 97, 81, .2);
                &::-webkit-input-placeholder {
                    color: $danger;
                }
                &:-moz-placeholder {
                    color: $danger;
                }
                &::-moz-placeholder {
                    color: $danger;
                }
                &::-ms-input-placeholder {
                    color: $danger;
                }
            }
        }
        &-addon {
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 100%;
            font-size: 14px;
        }
        &-pre-addon {
            left: 0;
        }
        &-post-addon {
            right: 0;
        }
    }
</style>

