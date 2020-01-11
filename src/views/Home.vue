<template>
  <div id="home">
    <div class="cont1">
      <div>
        <el-progress type="circle" :percentage="25"></el-progress>
        <p>cpu使用率</p>
      </div>
      <div>
        <el-progress type="circle" :percentage="60"></el-progress>
        <p>虚拟机使用率</p>
      </div>
      <div>
        <el-progress type="circle" :percentage="50"></el-progress>
        <p>内存使用率</p>
      </div>
      <div>
        <el-progress type="circle" :percentage="80"></el-progress>
        <p>硬盘使用率</p>
      </div>
    </div>
    <div id="draw"></div>
    <div id="pictrue"></div>
  </div>
</template>
  
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  mounted(){
    this.drawLine()
    this.drawpic()
  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('draw'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            // type:'scroll',
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
    drawpic(){
      let mychart = this.$echarts.init(document.getElementById('pictrue'))

      mychart.setOption({
        xAxis: {
        type: 'value'
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
            {   // 这个dataZoom组件，默认控制x轴。
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                start: 10,      // 左边在 10% 的位置。
                end: 60         // 右边在 60% 的位置。
            }
        ],
        series: [
            {
                type: 'scatter', // 这是个『散点图』
                itemStyle: {
                    normal: {
                        opacity: 0.8
                    }
                },
                symbolSize: function (val) {
                    return val[2] * 40;
                },
                data: [["14.616","7.241","0.896"],["3.958","5.701","0.955"],["2.768","8.971","0.669"],["9.051","9.710","0.171"],["14.046","4.182","0.536"],["12.295","1.429","0.962"],["4.417","8.167","0.113"],["0.492","4.771","0.785"],["7.632","2.605","0.645"],["14.242","5.042","0.368"]]
            }
        ]
      })
    }
  }
}
</script>

<style>
#home{
  background-color: white;
}
#draw{
  height: 500px;
}
.cont1{
  display: flex;
  justify-content: space-around;
}
.cont1>div{
  width: 200px;
  height: 180px;
  margin-top: 10px;
}
#pictrue{
  height: 300px;
}
</style>
