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
          text: '部门剩余工作',
          subtext: '剩余量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        dataset: this.data,
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
      })
    },
  }
}
</script>

<style scoped>

</style>