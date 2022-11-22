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
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
  }
}
</script>

<style scoped>

</style>