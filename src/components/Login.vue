<template>
    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-12 col-sm-12 col-md-12 col-lg-5 text-center left__section">
                <div class="dowebok">
                    <h1 class="heading my-5">用户登陆</h1>
                    <p class="paragraph">请使用个人账号登陆</p>
                    <form action="" class="mt-4" :v-model="loginForm" :rules="rules">
                        <div class="input-group my-4">
                            <div class="input-group-prepend">
                                <label for="formGroupExampleInput" class="d-block mx-auto"><img src="../assets/login/images/8dq.svg"
                                        width="18" height="18" class="mt-2"></label>
                            </div>
                            <input v-model="loginForm.username" type="text" class="form-control" placeholder="请输入账号" aria-label=""  aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group my-4">
                            <div class="input-group-prepend">
                                <label for="formGroupExampleInput" class="d-block mx-auto"><img src="../assets/login/images/8dT.svg"
                                        width="18" height="18" class="mt-2"></label>
                            </div>
                            <input v-model="loginForm.password" type="password" class="form-control" placeholder="请输入密码" aria-label="" aria-describedby="basic-addon1">
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="javascript:" class="link">忘记密码？</a>
                            <button v-on:click="onSubmit" type="button" class="btn btn-primary">登陆</button>
                        </div>
                    </form>
                    <div class="col-12 my-4">
                        <span class="divider">或者</span>
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary ">
                            <img src="../assets/login/images/8fh.svg" width="20" height="20" alt="">
                        </button>
                        <button type="button" class="btn btn-primary btn-facebook">联系管理员</button>
                    </div>
                    <div class="col-12 my-4">
                        <p>© 2020 重庆中联信息产业有限责任公司</p>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-7">
                <div class="bg"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                loginForm: {
                    username: 'whc',
                    password: '123'
                }                
            }
        },
         methods: {
            onSubmit() {
                this.$router.push({
                    path: '/navigation',
                   
                })
            }
        }
    }
</script>

<style scoped>
    @import url('../assets/login/css/bootstrap.min.css');
    @import url('../assets/login/css/perfect-scrollbar.min.css');
    @import url('../assets/login/css/style.css');
</style>