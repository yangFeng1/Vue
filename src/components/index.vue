<template>
  <div class="container">
      <myHeader></myHeader>
      <Left></Left>
      <div class="home">
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
import myHeader from './header.vue'
import Left from './left.vue'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components: {
    myHeader,
    Left
  }
}
</script>
<style scope>
  .container{
    width: 100%;
    height: 85%;
  }
  .home{
    margin-top: 100px;
    margin-left: 200px;
    background: #fff;
    width: 88%;
    height: 100%;
    float: right;
    overflow: auto;
  }
</style>
