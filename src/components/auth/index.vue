<template>
    <form class="k-form auth-component"
        :class="type">
        <div class="k-form-row">
            <div class="k-form-content">
                <k-input
                    :value.sync="localUsername"
                    :origin-type="'text'"
                    :placeholder="'请输入用户名'"
                    :status="usernameStatus">
                </k-input>
            </div>
        </div>

        <div class="k-form-row">
            <div class="k-form-content">
                <k-input
                    :value.sync="localPassword"
                    :origin-type="'password'"
                    :placeholder="'请输入密码'"
                    :status="passwordStatus">
                    <template slot="postAddon"
                            v-if="type === 'signup'">
                        <i class="icon-eye toggle-visible"
                            @click.stop="toggleVisible">
                        </i>
                    </template>
                </k-input>
            </div>
        </div>

        <div class="k-form-row submit-row">
            <div class="k-form-content">
                <a href="javascript:;" class="submit"
                    @click="submit">
                    <span class="icon-arrow-right"></span>
                </a>
            </div>
        </div>

        <div class="k-form-row forget-pw" v-if="type === 'login'">
            <div class="k-form-content">
                <span class="text">忘记密码</span> 
            </div>
        </div>
    </form>
</template>

<script>
    import Input from 'src/components/input'

    export default {
        props: {
            type: {
                type: String,
                default: 'login'
            },
            username: {
                type: [String, Number],
                default: ''
            },
            password: {
                type: [String, Number],
                default: ''
            }
        },
        data () {
            return {
                usernameStatus: '',
                passwordStatus: ''
            }
        },
        computed: {
            localUsername: {
                get () {
                    return this.username
                },
                set (val) {
                    this.$emit('update:username', val)
                }
            },
            localPassword: {
                get () {
                    return this.password
                },
                set (val) {
                    this.$emit('update:password', val)
                }
            }
        },
        methods: {
            submit () {
                if (this.validate()) {
                    this.$emit('submit')
                }
            },
            /**
             * 验证表单输入
             */
            validate () {
                return true
            },
            /**
             *  注册时切换密码是否明文
             */
            toggleVisible () {

            }
        },
        components: {
            'k-input': Input
        }
    }
</script>

<style lang="scss">
    @import './../../styles/conf';

    .auth-component {
        &.login {
            .submit {
                background-color: #3677f1;
                border-color: #3677f1;
            }
        }
        &.signup {
            .submit {
                background-color: #465a81;
                border-color: #465a81;
            }
        }
        .k-input-item {
            border: {
                top: none;
                left: none;
                right: none;
                bottom: 1px solid $white;
            }
            border-radius: 0;
            color: $white;
            background-color: transparent;
            &:focus {
                border-color: $white;
            }
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            opacity: .8;
            color: $white;
        }

        ::-moz-placeholder { /* Mozilla Firefox 19+ */
            opacity: .8;
            color: $white;
        }

        input:-ms-input-placeholder{
            opacity: .8;
            color: $white;
        }

        input::-webkit-input-placeholder{
            opacity: .8;
            color: $white;
        }
        .submit {
            display: inline-block;
            width: 80px;
            height: 36px;
            padding-top: 6px;
            line-height: 1;
            border: 1px solid transparent;
            border-radius: 18px;
            font-size: 22px;
            color: $white;
            text-align: center;
            cursor: pointer;
            &-row {
                text-align: right;
            }
        }
        .forget-pw {
            .text {
                border-bottom: 1px solid $white;
                opacity: .7;
                font-size: 12px;
            }
        }
        .toggle-visible {
            cursor: pointer;
        }
        .k-form-content {
            width: 100%;
        }
    }
</style>

