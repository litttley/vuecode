<template>
    <div class="login_container">
        <!--头像区截至-->
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png">
            </div>
            <!--登录表单区-->
            <!--用户名-->
            <el-form ref="loginFromRef" :model="loginForm" :rules="loginFromRules" label-width="0px" class="login_form">

                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghu"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont  icon-mima" type="password"></el-input>
                </el-form-item>

                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>

            </el-form>


        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginForm: {
                    username: "admin",
                    password: '123456'
                },
                //表单验证
                loginFromRules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '长度在 6 到 15个字符', trigger: 'blur'}]
                }
            }
        },
        methods: {
            resetLoginForm() {
                this.$refs.loginFromRef.resetFields();
            },
            login() {
                this.$refs.loginFromRef.validate(async vaild => {
                    console.log(vaild);
                    if (!vaild) return;
                    const {data: res} = await this.$http.post('login', this.loginForm);
                    if (res.meta.status !== 200) return this.$message.error('登录失败!')
                    this.$message.success('登录成功!')
                    window.sessionStorage.setItem("token",res.data.token);//存储cookie
                    this.$router.push('/home') //自动跳转

                });
            }
        }
    }
</script>

<style lang="less" scoped> /*scoped:表示在当前组件内有效*/
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
}

.btns {
    display: flex;
    justify-content: flex-end;
}

.login_form {
    position: absolute;
    bottom: 0px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

</style>