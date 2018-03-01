<template>
    <button class="k-button"
        :type="originType"
        :class="[`k-button-${theme}`, `k-button-${size}`, {
            'disabled': localDisabled
        }]"
        @click.stop.prevent="clickHandler">
        <slot>按钮</slot>
    </button>
</template>

<script>
    /**
     * @param {String} type 按钮类型，默认为描边按钮，可以是带图标按钮，图标按钮，描边按钮，文字按钮等
     * @param {String} originType 按钮的原始类型，默认是button
     * @param {String} theme 按钮的主题色，可选值参考公用主题
     * @param {String} size 按钮的大小
     * @param {Boolean} disabled 按钮是否禁用
     */
    export default {
        props: {
            type: {
                type: String,
                default: ''
            },
            originType: {
                type: String,
                default: 'button'
            },
            theme: {
                type: String,
                default: 'primary'
            },
            size: {
                type: String,
                default: 'normal'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                localDisabled: this.disabled
            }
        },
        watch: {
            disabled (val) {
                this.localDisabled = val
            }
        },
        methods: {
            async clickHandler () {
                if (!this.disabled) {
                    this.localDisabled = true
                    await this.$emit('btn-click')
                    this.localDisabled = false
                }
            }
        }
    }
</script>

<style lang="scss">
    @import './../../styles/conf';

    @mixin getTheme ($theme) {
        background-color: $theme;
        color: $theme;
        border-color: $theme;
        color: $white;
        &:hover {
            opacity: .9;
        }
        &:active {
            opacity: .7;
        }
    }

    .k-button {
        border: 1px solid $grayDark;
        border-radius: 3px;
        outline: none;
        box-shadow: none;
        cursor: pointer;
        transition: all .1s linear;
        &.disabled {
            cursor: not-allowed;
            opacity: .5;
            &:hover {
                opacity: .5;
            }
        }
        &-normal {
            min-width: 100px;
            padding: 7px 13px;
            font-size: 14px;
        }
        &-small {
            min-width: 70px;
            padding: 4px 10px;
            font-size: 13px;
        }
        &-tiny {
            min-width: 40px;
            padding: 2px 5px;
            font-size: 12px;
        }
        &-large {
            min-width: 130px;
            padding: 10px 16px;
            font-size: 18px;
        }
        &-mega {
            min-width: 150px;
            padding: 13px 18px;
            font-size: 22px;
        }
        &-default {
            background-color: transparent;
            color: $black;
            &:hover {
                background-color: $grayLightest;
                color: $grayDarker;
            }
        }
        &-primary {
            @include getTheme($primary);
        }
        &-info {
            @include getTheme($info);
        }
        &-success {
            @include getTheme($success);
        }
        &-warning {
            @include getTheme($warning);
        }
        &-danger {
            @include getTheme($danger);
        }
        & + .k-button {
            margin-left: 10px;
        }
    }
</style>

