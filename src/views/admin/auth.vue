<template>
    <div class="auth"
        @click.stop="reset">
        <div class="auth-popup"
            :class="wrapperCls"
            @mouseleave="moduleEntered ? '' : wrapperCls = ''">
            <div class="login-wrapper module-wrapper"
                @mouseenter.stop="moduleEntered ? '' : wrapperCls = 'left'"
                @click.stop="sideEnter('login')">
                <div class="module-login">
                    <span class="icon-user module-icon"></span>
                    <p class="module-title">登录</p>
                    <auth-module
                        v-show="moduleEntered && curModule === 'left'"
                        :username.sync="username"
                        :password.sync="password"
                        :type="'login'"
                        @submit="submitHandler('login')">
                    </auth-module>
                </div>
            </div>
            <div class="signup-wrapper module-wrapper"
                @mouseenter.stop="moduleEntered ? '' : wrapperCls = 'right'"
                @click.stop="sideEnter('signup')">
                <div class="module-signup">
                    <span class="icon-user-plus module-icon"></span>
                    <p class="module-title">注册</p>
                    <auth-module
                        v-show="moduleEntered && curModule === 'right'"
                        :username.sync="username"
                        :password.sync="password"
                        :type="'signup'"
                        @submit="submitHandler('signup')">
                    </auth-module>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AuthModule from 'src/components/auth'
    import auth from 'src/utils/auth'

    export default {
        data () {
            return {
                curModule: '',
                wrapperCls: '',
                moduleEntered: false,
                username: '',
                password: ''
            }
        },
        watch: {
            curModule () {
                this.username = ''
                this.password = ''
            }
        },
        methods: {
            /**
             * 进入模块
             * @param side {String} 模块名
             */
            sideEnter (side) {
                if (side === 'login') {
                    this.curModule = 'left'
                    this.wrapperCls = 'do-left'
                } else {
                    this.curModule = 'right'
                    this.wrapperCls = 'do-right'
                }

                this.moduleEntered = true
            },
            /**
             * 重置样式
             */
            reset () {
                this.curModule = ''
                this.wrapperCls = ''
                this.moduleEntered = false
            },
            /**
             * 提交表单，登录/注册
             */
            async submitHandler (type) {
                let req = ''
                
                if (type === 'login') {
                    req = 'Login'
                } else if (type === 'signup') {
                    req = 'Signup'
                }

                try {
                    let res = await this.$store.dispatch(`auth/request${req}`, {
                        username: this.username,
                        password: this.password
                    })

                    auth.setJWT(res.data.token) // 将token存入localStorage

                    const pathBeforeLogin = localStorage.getItem('poppyBeforeLogin')

                    if (pathBeforeLogin) {
                        localStorage.removeItem('poppyBeforeLogin')
                        this.$router.push({
                            name: pathBeforeLogin
                        })
                    } else {
                        if (this.$route.path.includes('admin')) { // admin
                            this.$router.push({
                                name: 'AdminDashBoard'
                            })
                        } else {
                            this.$router.push({
                                name: 'DashBoard'
                            })
                        }
                    }
                } catch (err) {
                    this.$message.error(`${err.data ? err.data.message : err}`)
                    console.warn(`${type === 'login' ? '登录' : '注册'}接口错误`)
                }
            }
        },
        components: {
            'auth-module': AuthModule
        }
    }
</script>


<style lang="scss">
    @import './../../styles/conf';

    .auth {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        &-popup {
            position: relative;
            width: 80%;
            max-width: 800px;
            height: 60%;
            max-height: 400px;
            font-size: 0;
            color: $white;
            &.left {
                .login-wrapper {
                    width: 55%;
                }
                .signup-wrapper {
                    width: 45%;
                }
            }
            &.do-left {
                .login-wrapper {
                    width: 90%;
                    .module-title {
                        top: 10%;
                        left: 15%;
                        transform: translateX(0);
                    }
                    .module-icon {
                        opacity: 0;
                    }
                }
                .signup-wrapper {
                    width: 10%;
                    .module-title {
                        opacity: 0;
                    }
                    .module-icon {
                        top: 10%;
                    }
                }
            }
            &.right {
                .login-wrapper {
                    width: 45%;
                }
                .signup-wrapper {
                    width: 55%;
                }
            }
            &.do-right {
                .login-wrapper {
                    width: 10%;
                    .module-title {
                        opacity: 0;
                    }
                    .module-icon {
                        top: 10%;
                    }
                }
                .signup-wrapper {
                    width: 90%;
                    .module-title {
                        top: 10%;
                        left: 15%;
                        transform: translateX(0);
                    }
                    .module-icon {
                        opacity: 0;
                    }
                }
            }
        }
        .module-wrapper{
            position: relative;
            width: 50%;
            height: 100%;
            display: inline-block;
            transition: width ease-in-out .3s;
        }
        .login-wrapper {
            background-color: $primary;
        }
        .signup-wrapper {
            background-color: $secondary;
        }
        .module-title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
            line-height: 1;
            font-size: 24px;
            transition: all linear .2s;
        }
        .module-icon {
            position: absolute;
            top: calc(50% - 50px);
            left: 50%;
            transform: translateX(-50%);
            font-size: 35px;
            transition: all linear .2s;
        }
        .module-login {
            height: 100%;
        }
        .auth-component {
            position: absolute;
            top: 50%;
            left: 15%;
            width: 70%;
            transform: translateY(-50%);
        }
    }
</style>

