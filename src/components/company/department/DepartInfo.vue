<template>
  <div class="content">
    <div style="float:left;margin: 2px 50px;z-index: 2;">
      <span style="font-weight: bold;">选择部门</span>
      <el-select v-model="value" placeholder="请选择部门" @change="changeOption">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <LineAndPie class="line" />
    <el-divider></el-divider>
    <LineTable class="line" />
  </div>
</template>

<script>
import LineTable from '@/components/company/department/echarts/LineTable.vue'
import LineAndPie from '@/components/company/department/echarts/LineAndPie.vue'
export default {
  name: 'DepartInfo',
  components: {
    LineTable,
    LineAndPie
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '行政部门'
      }, {
        value: '选项2',
        label: '运输部门'
      }, {
        value: '选项3',
        label: '生产部门'
      }, {
        value: '选项4',
        label: '人事部门'
      }, {
        value: '选项5',
        label: '董事会'
      }],
      value: '选项2'
    }
  },
  mounted(){
    this.changeOption(this.value)
  },
  methods: {
    changeOption(value){
      // console.log(value)
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  /* background-color: #394056; */
}

.line {
  width: 70%;
  height: 450px;
  margin: auto;
}
</style>