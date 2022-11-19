<template>
  <div class="content">
    <el-divider></el-divider>
    <el-row :gutter="50" style="margin:20px 200px;">
      <el-col :span="8">
        <div class="grid-content" ref="chart1">

        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content" ref="chart2">

        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content" ref="chart3">

        </div>
      </el-col>
    </el-row>
    <div style="margin-top: 50px;">
      <span>公司各部门统计图</span>
    </div>
    <el-divider></el-divider>
    <el-row :gutter="50" style="margin:0 200px;margin-top: 50px;">
      <el-col :span="20">
        <div class="line-content" ref="chart4">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      source: [
        { value: 1048, name: '已完成项目' },
        { value: 735, name: '待确认项目' },
        { value: 580, name: '未分发项目' },
        { value: 484, name: '异常项目' },
        { value: 300, name: '待审核项目' }
      ],
      source3: {
        source: [
          ['score', 'amount', 'department'],
          [89.3, 58212, '信息部'],
          [57.1, 78254, '人事部'],
          [74.4, 41032, '技术部'],
          [50.1, 12755, '硬件部'],
          [89.7, 20145, '开发部'],
          [68.1, 79146, '运输部'],
          [19.6, 91852, '行政部门'],
          [10.6, 101852, '公关部门'],
          [32.7, 20112, '董事会']
        ]
      }
    }
  },
  mounted() {
    this.drawChart1()
    this.drawChart2()
    this.drawChart3()
    this.drawChart4()
  },
  methods: {
    drawChart1() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      let myChart = this.$echarts.init(this.$refs['chart1']);
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '项目完成情况',
          subtext: '全部',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: true,
          bottom: '-1%',
          left: 'center'
        },
        series: [
          {
            name: '完成任务情况',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.source
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart2() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      let myChart = this.$echarts.init(this.$refs['chart2']);
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '部门工作分配占比',
          subtext: '总工作',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '-1%',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: this.source,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart3() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      let myChart = this.$echarts.init(this.$refs['chart3']);
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '部门剩余工作',
          subtext: '剩余量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        dataset: this.source3,
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['紧张', '优秀'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#65B581', '#FFCE34', '#FD665F']
          }
        },
        series: [
          {
            label: {
              show: true,
              position: 'right'
            },
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'department'
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChart4() {
      // 基于准备好的dom，初始化echarts实例  这个和上面的main对应
      let myChart = this.$echarts.init(this.$refs['chart4']);
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '产品处理量'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['奥利奥', '巧乐兹', '伊利牛奶', '安慕希', '农夫山泉']
        },
        grid: {
          // left: '3%',
          // right: '4%',
          // bottom: '3%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-06']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '奥利奥',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '巧乐兹',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '伊利牛奶',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '安慕希',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '农夫山泉',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      myChart.setOption(option);
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}

.el-row {
  margin: 200px 200px;
}

.grid-content {
  width: 350px;
  height: 350px;
  /* background-color: #654; */
  margin: auto;
}

.line-content{
  width: 800px;
  height: 500px;
  margin: auto;
}
</style>