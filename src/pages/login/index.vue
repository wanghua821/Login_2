<template>
    <div class="login_container">
        <div class="login_box">
            <div class="logo_img">
                <img src="@/assets/logo.png" alt="">
            </div>
            <el-form ref="loginformref" :model="loginform" :rules="rules" label-width="0px" class="login_form">
                <!--用户名-->
                <el-form-item prop="username">
                    <el-input v-model="loginform.username" prefix-icon="iconfont icon-yonghuming"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input v-model="loginform.password" type="password" prefix-icon="iconfont icon-mima"></el-input>
                </el-form-item>
                <!--按钮区域=-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="loginbtn">登录</el-button>
                    <el-button type="info" @click="resetloginbtn">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import '@/assets/iconfont/iconfont.css'
export default {
    data(){
        return{
            //这是登录表单的数据绑定对象x
            loginform: {
                username: '111',
                password: '111',
            },
            //这是表单的验证规则
             rules: {
                 username: [
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
             }

        }
    },
    methods : {
        resetloginbtn(){
            this.$refs.loginformref.resetFields()
        },
        loginbtn(){
            this.$refs.loginformref.validate(async valid =>{
                if (valid) {
                    //alert('submit!');
                    const {data : res} = await this.$http.post('login' , this.loginform)
                    console.log(res);
                    if(res.mate.status !==200) return this.$message.error('登录失败');
                    //console.log("登陆成功")
                    this.$message.success('登录成功');
                    window.sessionStorage.setItem('token',res.data.token);
                    this.$router.replace('/home')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        }
    }
    
}
</script>
<style lang="scss" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
    color: #fff;
    .login_box{
         width: 450px;
         height:300px;
         background-color: #fff;
         border-radius:3px;
         position:absolute;
         left: 50%;
         top: 50%;
         transform:translate(-50%,-50%);
         .logo_img{
            height: 130px;
            width: 130px;
            border: 1px solid #eee;
            border-radius:50%;
            box-shadow: 0 0 10px #ddd;
            padding: 10px;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img{ 
                width: 100%;
                height: 100%;
                border-radius:50%;
                background-color: #eee
            }
         }
         .btns{
             display: flex;
             justify-content: flex-end;
         }
         .login_form{
             width: 100%;
             position: absolute;
             bottom: 0;
             padding: 0 20px;
             box-sizing: border-box;
         }
    }
}
</style>