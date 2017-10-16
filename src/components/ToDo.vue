<template>
  <div class="ToDo">
    <div class="table">
      <ul>
        <li class="all" @click='active(".all")'>全部任务</li>
        <li class="backlog" @click='active(".backlog")'>待办任务</li>
        <li class="finish" @click='active(".finish")'>已完成</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for='item in elementList' :index='item.id'>
          <input type="checkbox" class="check" @click='whentherSel(item.id)' :checked='item.status'>
          <span class="text" :class="item.status?'deled':''">{{item.thing}}</span>
          <span class="del" @click='delThing(item.id)'>删除</span>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <el-row :gutter="30">
       <el-col :span="19"><el-input  placeholder="请输入内容" v-model='thingVal'></el-input></el-col>
        <el-col :span="5"><el-button type="primary" @click='addThing'>添加任务</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>
<style>
  li{
    list-style: none;
  }
</style>
<style scope>
  .ToDo{
    width: 540px;
    padding: 20px;
    margin: 0 auto;
    margin-top: 100px;
    background: #f5f5f5;
  }
  .table{
    height: 50px;
    margin-top: 20px;
  }
  .table ul li {
    float: left;
    font-size: 14px;
    margin-left: 90px;
    cursor:pointer;
  }
  .active{
    color:red;
  }
  .content{
    border:1px solid #ccc;
    background: #fff;
  }
  .content li {
    padding: 10px 15px;
        font-size: 14px;
        color: #999
  }
  .content li .text{
    margin-left: 10px;
  }
  .content li .del{
    float: right;
    cursor: pointer
  }
  .bottom{
    margin-top: 20px;

  }
  .deled{
    text-decoration: line-through
  }
</style>
<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        elementList: [{
          id: 1,
          thing: 'aaa',
          status: true
        },
        {
          id: 2,
          thing: 'bbb',
          status: false
        }],
        thingVal: 'aaa',
        id: 3
      }
    },
    methods: {
      active: function (ele) {
        $(ele).addClass('active').siblings().removeClass('active')
      },
      whentherSel (id) {
        $.each(this.elementList, function (i, v) {
          if (v.id === id) {
            v.status = !v.status
            return
          }
        })
      },
      addThing () {
        this.elementList.push({
          id: this.id,
          thing: this.thingVal,
          status: false
        })
        this.id++
      },
      delThing (id) {
        var index
        $.each(this.elementList, function (i, v) {
          if (v.id === id) {
            index = i
            return
          }
        })
        console.log(index)
        this.elementList.splice(index, 1)
      }
    }
  }
</script>

