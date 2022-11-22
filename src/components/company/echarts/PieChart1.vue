<template>
  <div class="content" ref="chart">

  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      data: [
        { value: 1048, name: '已完成项目' },
        { value: 735, name: '待确认项目' },
        { value: 580, name: '未分发项目' },
        { value: 484, name: '异常项目' },
        { value: 300, name: '待审核项目' }
      ]
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
            data: this.data
          }
        ]
      })
    },
  }
}
</script>

<style scoped>

</style>