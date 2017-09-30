<template>
  <div class="ToDo">
    <div class="table">
      <ul>
        <li class="all">全部任务</li>
        <li class="backlog">待办任务</li>
        <li class="finish">已完成</li>
      </ul>
    </div>
    <div class="content">
      <input type="checkbox">
      <span class="text">reading</span>
      <span class="del">删除</span>
    </div>
    <div class="bottom">
      <input type="text">
      <button>添加任务</button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
<style scope>
  .ToDo{

  }
  .ToDo .table{

  }
  .ToDo .table li{

  }
  .all{

  }
</style>
