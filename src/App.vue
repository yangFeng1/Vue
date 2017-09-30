<template>
  <div class="Index">

    <router-view></router-view>

  </div>
</template>
<script>
export default {
  name: 'app',
  components: {

  }
}
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .Index{
    width: 100%;
    height: 100%;
  }
</style>
