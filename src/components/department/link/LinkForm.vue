<template>
  <div class="content">
    <el-row :gutter="5" style="margin:20px 20px;" type="flex" justify="start">
      <el-col :span="3">
        <el-input v-model="searchName" placeholder="产品名称"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="searchCode" placeholder="产品序列号"></el-input>
      </el-col>
      <el-col :span="2">
        <el-select v-model="departmentOption" clearable placeholder="部门">
          <el-option v-for="item in departmentList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-select v-model="typeOption" clearable placeholder="产品类型">
          <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-select v-model="dateOption" clearable placeholder="日期排序">
          <el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">
          <i class="el-icon-search"></i>
          搜索
        </el-button>
      </el-col>
      <!-- <el-col :span="2">
        <el-button type="primary">
          <i class="el-icon-edit"></i>
          添加产品
        </el-button>
      </el-col> -->
      <el-col :span="2">
        <el-button type="primary">
          <i class="el-icon-edit"></i>
          导出
        </el-button>
      </el-col>
      <!-- <el-col :span="2" style="line-height:40px;">
        显示员工
        <el-switch v-model="isShowEmployee" active-color="#13ce66">
        </el-switch>
      </el-col> -->
    </el-row>

    <el-row>
      <el-table :data="tableData" border style="margin: 20px 20px;" tooltip-effect="dark" ref="multipleTable">
        <el-table-column type="expand" label="时间线">
          <template slot-scope="">
            <div class="block" style="margin:20px 20px;">
              <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="产品名称">
        </el-table-column>
        <el-table-column prop="code" label="产品序列号">
        </el-table-column>
        <el-table-column prop="type" label="产品类型" width="150">
        </el-table-column>
        <el-table-column prop="department" label="产品处理部门" width="120">
        </el-table-column>
        <el-table-column prop="modify" label="信息更新时间" width="150" sortable>
        </el-table-column>
        <el-table-column prop="state" label="产品状态" width="120">
          <template slot-scope="{row}">
            <el-tag :type="statusMap[row.status].type">
              {{ statusMap[row.status].text }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1" background>
        </el-pagination>
      </div>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      statusMap: {
        '': {
          type: '',
          text: ''
        },
        NAccept: {
          type: 'danger',
          text: '待接收'
        },
        Accepted: {
          type: 'warning',
          text: '已接收'
        },
        Distributed: {
          type: '',
          text: '已分配'
        },
        Exam: {
          type: 'info',
          text: '待审核'
        },
        Finish: {
          type: 'success',
          text: '出厂'
        }
      },
      tableData: [{
        name: '安慕希',
        code: '56896472312',
        number: 50,
        modify: '2021-11-10 10:30',
        type: '食品',
        department: '运输部门',
        employee: '张三',
        status: 'Accepted',
      }, {
        name: '安慕希',
        code: '56896472312',
        number: 50,
        modify: '2021-11-10 10:30',
        type: '食品',
        department: '运输部门',
        employee: '张三',
        status: 'Finish',
      }, {
        name: '安慕希',
        code: '56896472312',
        number: 50,
        modify: '2021-11-10 10:30',
        type: '食品',
        department: '运输部门',
        employee: '张三',
        status: 'Finish',
      }, {
        name: '安慕希',
        code: '56896472312',
        number: 50,
        modify: '2021-11-10 10:30',
        type: '食品',
        department: '运输部门',
        employee: '张三',
        status: 'Finish',
      }, {
        name: '安慕希',
        code: '56896472312',
        number: 50,
        modify: '2021-11-10 10:30',
        type: '食品',
        department: '运输部门',
        employee: '张三',
        status: 'Finish',
      }, {
        name: '安慕希',
        code: '56896472312',
        number: 50,
        modify: '2021-11-10 10:30',
        type: '食品',
        department: '运输部门',
        employee: '张三',
        status: 'Finish',
      }, {
        name: '安慕希',
        code: '56896472312',
        number: 50,
        modify: '2021-11-10 10:30',
        type: '食品',
        department: '运输部门',
        employee: '张三',
        status: 'Finish',
      }],
      currentPage: 1
    }
  }
}
</script>

<style scoped>

</style>