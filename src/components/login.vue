<template>
    <div class="login">
      <h1>Welcome to the MyApp</h1>
      <el-input placeholder="请输入账号" class='input'></el-input>
      <el-input placeholder="请输入密码"></el-input>
      <router-link to='/index'>
       <el-button type="info" class='btn'>登录</el-button>
       </router-link>
    </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .login{
      width: 400px;
      height: 300px;
      margin: 0 auto;
      margin-top: 300px;
  }
  .input{
    margin-bottom: 15px;
  }
  h1{
    color: #888;
    font-size: 30px;
  }
  .btn{
    margin-top: 10px;
    float: right;
    width: 100%;
  }
</style>
