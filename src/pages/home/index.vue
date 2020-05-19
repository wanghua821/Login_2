<template>
    <el-container>
        <!--头部 -->
        <el-header>Header<el-button type="info" @click="loginOut">退出</el-button></el-header>
        <el-container>
            <!--侧边栏 -->
            <el-aside width="200px">Aside</el-aside>
            <!--主体 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
        
    
    
</template>
<script>
export default {
    name : 'home',
    data(){
        return{
            smg : 'home'
        }
    },
    methods : {
        loginOut(){
            window.sessionStorage.clear;
            this.$router.push('/login');

        }
    }
    
}
</script>
<style scoped>

</style>