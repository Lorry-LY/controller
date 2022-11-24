<template>
  <div class="content" refecharts="chart">

  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) return
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs['chart'])

      this.chart.setOption({
        tooltip: {},
        title: [
          {
            text: '在线构建',
            subtext: '总计 ' + builderJson.all,
            left: '25%',
            textAlign: 'center'
          },
          {
            text: '主题下载',
            subtext:
              '总计 ' +
              Object.keys(themeJson).reduce(function (all, key) {
                return all + themeJson[key];
              }, 0),
            left: '75%',
            top: '50%',
            textAlign: 'center'
          }
        ],
        grid: [
          {
            top: 50,
            width: '50%',
            bottom: '45%',
            left: 10,
            containLabel: true
          },
          {
            top: '55%',
            width: '50%',
            bottom: 0,
            left: 10,
            containLabel: true
          }
        ],
        xAxis: [
          {
            type: 'value',
            max: builderJson.all,
            splitLine: {
              show: false
            }
          },
          {
            type: 'value',
            max: builderJson.all,
            gridIndex: 1,
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: Object.keys(builderJson.charts),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          },
          {
            gridIndex: 1,
            type: 'category',
            data: Object.keys(builderJson.components),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            type: 'bar',
            stack: 'chart',
            z: 3,
            label: {
              position: 'right',
              show: true
            },
            data: Object.keys(builderJson.charts).map(function (key) {
              return builderJson.charts[key];
            })
          },
          {
            type: 'bar',
            stack: 'chart',
            silent: true,
            itemStyle: {
              color: '#eee'
            },
            data: Object.keys(builderJson.charts).map(function (key) {
              return builderJson.all - builderJson.charts[key];
            })
          },
          {
            type: 'bar',
            stack: 'component',
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            label: {
              position: 'right',
              show: true
            },
            data: Object.keys(builderJson.components).map(function (key) {
              return builderJson.components[key];
            })
          },
          {
            type: 'bar',
            stack: 'component',
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              color: '#eee'
            },
            data: Object.keys(builderJson.components).map(function (key) {
              return builderJson.all - builderJson.components[key];
            })
          },
          {
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '25%'],
            data: Object.keys(downloadJson).map(function (key) {
              return {
                name: key.replace('.js', ''),
                value: downloadJson[key]
              };
            })
          }
        ]
      })
    },
  }
}
</script>

<style>

</style>