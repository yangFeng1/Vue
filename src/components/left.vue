<template>
  <div class="left">
<el-row class="tac">
  <el-col :span="24">
    <el-menu default-active="2" class="el-menu-vertical-demo">
        <div class="logo">
          <img src="../assets/logo.png" height="200" width="200" alt="">
          <!-- <h1>Cabin</h1> -->
        </div>
      <router-link to='/index'> <el-menu-item index="1"><i class="el-icon-setting"></i>首页</el-menu-item></router-link>
      <el-submenu index="2">
                <template slot="title"><i class="el-icon-message"></i>音乐模块</template>
        <el-menu-item-group>
        <router-link to='/index/music'>
          <el-menu-item index="2-1">音乐系列</el-menu-item>
        </router-link>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="3">
                <template slot="title"><i class="el-icon-message"></i>工具模块</template>
        <el-menu-item-group>
        <router-link to='/index/music'>
        <router-link to='/index/ToDo'>
          <el-menu-item index="2-1">代办事项</el-menu-item>
        </router-link>

        </router-link>
        </el-menu-item-group>

      </el-submenu>

      <router-link to='/index/personalCenter'>
        <el-menu-item index="4"><i class="el-icon-setting"></i>个人中心</el-menu-item>
      </router-link>

    </el-menu>
  </el-col>
</el-row>
</div>
</template>
<script>
  export default{
    data () {
      return {}
    },
    methods: {

    }
  }
</script>
<style scope>
  .left{
    width: 200px;
    height: 1000px;
    position: fixed;
    top: 0px;
    left: 0px;
    background: #eef1f6;
  }
  .logo{
    height: 70px;
  }
  .logo img{
    float: left;
    width: 50px;
    height: 50px;
    margin-top: 15px;
    margin-left: 65px;
  }
  .logo h1{
    float: left;
    font-size: 24px;
    font-weight: 900;
    margin-left: 12px;
        font-family: "Microsoft YaHei", "SimHei";
  }
  a{
    text-decoration: none;
  }
</style>
