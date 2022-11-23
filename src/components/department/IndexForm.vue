<template>
  <div class="content">
    <el-row :gutter="50" style="margin:20px 20px;">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>部门信息</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <i class="el-icon-refresh-right"></i>
            </el-button>
          </div>
          <el-descriptions class="margin-top" :column="3" border>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户名
              </template>
              kooriookami
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
              </template>
              18100000000
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                居住地
              </template>
              苏州市
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                备注
              </template>
              <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building"></i>
                联系地址
              </template>
              江苏省苏州市吴中区吴中大道 1188 号
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-badge :value="4" class="item">
              <span>待办事项</span>
            </el-badge>
            <el-button style="float: right; padding: 3px 0" type="text">
              <i class="el-icon-refresh-right"></i>
            </el-button>
          </div>
          <div class="text item"><el-link>新来一批安慕希酸奶</el-link></div>
          <div class="text item"><el-link>新的合作请求待处理</el-link></div>
          <div class="text item"><el-link>审查通知</el-link></div>
          <div class="text item"><el-link>完善用户信息</el-link></div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="50" style="margin:20px 200px;">
      <el-col :span="8">
        <PieChart1 class="grid-content" ref="chart1">

        </PieChart1>
      </el-col>
      <el-col :span="8">
        <PieChart2 class="grid-content" ref="chart2">

        </PieChart2>
      </el-col>
      <el-col :span="8">
        <BarChart1 class="grid-content" ref="chart3">
          
        </BarChart1>
      </el-col>
    </el-row>
    <div style="margin-top: 50px;">
      <span>公司各部门统计图</span>
    </div>
    <!-- <el-divider></el-divider>
    <el-row :gutter="50" style="margin:0 200px;margin-top: 50px;">
      <el-col :span="20">
        <div class="line-content" ref="chart4">

        </div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import BarChart1 from './echarts/BarChart1.vue'
import PieChart1 from './echarts/PieChart1.vue'
import PieChart2 from './echarts/PieChart2.vue'
export default {
  components: {
    BarChart1,
    PieChart1,
    PieChart2
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

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

.line-content {
  width: 800px;
  height: 500px;
  margin: auto;
}

.text {
  font-size: 14px;
}

.item {
  text-align: left;
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.clearfix {
  text-align: left;
}
</style>