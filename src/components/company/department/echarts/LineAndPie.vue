<template>
  <div class="content" ref="chart">

  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      data: {
        source: [
          ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['安慕希', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
          ['蒙牛', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['伊利', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['纯甄', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
        ]
      }
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
        legend: {
          show: true,
          // bottom: '-1%',
          bottom: '10%',
          left: '10%'
        },
        tooltip: {
          trigger: 'axis',
          showContent: true
        },
        dataset: this.data,
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '10%',left:'50%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['25%', '50%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012'
            }
          }
        ]
      });

      this.chart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1
          this.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          })
        }
      });
    },
  }
}
</script>

<style scoped>

</style>