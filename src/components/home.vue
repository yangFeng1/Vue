<template>
  <div>
      <div class="charts">
        <div id="myCharts" :style="{width:'600px',height:'300px'}"></div>
      </div>
  </div>
</template>
<script>
 import echarts from 'echarts'
 export default {
   data () {
     return {
       option: {
         title: {
           text: ''
         },
         tooltip: {},
         legend: {
           data: ['销量']
         },
         xAxis: {
           data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
         },
         yAxis: {},
         series: [{
           name: '销量',
           type: 'bar',
           data: [5, 20, 36, 10, 10, 20]
         }]
       }
     }
   },
   mounted () {
     console.log(echarts)
     let myCharts = echarts.init(document.getElementById('myCharts'))
     console.log(this.option)
     myCharts.setOption(this.option)
   }
}
</script>
