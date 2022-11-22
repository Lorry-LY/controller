<template>
  <div class="content">
    <el-row :gutter="5" style="margin:20px 20px;" type="flex" justify="start">
      <el-col :span="3">
        <el-input v-model="searchName" placeholder="产品名称"></el-input>
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
      <el-col :span="2" style="line-height:40px;">
        显示员工
        <el-switch v-model="isShowEmployee" active-color="#13ce66">
        </el-switch>
      </el-col>

    </el-row>

    <el-table :data="tableData" border style="margin: 20px 20px;"
      tooltip-effect="dark" ref="multipleTable">
      <el-table-column type="index" width="55" label="序号">
      </el-table-column>
      <el-table-column prop="modify" label="信息更新时间" width="150" sortable>
      </el-table-column>
      <el-table-column prop="name" label="产品名称">
      </el-table-column>
      <el-table-column prop="code" label="产品序列号">
      </el-table-column>
      <el-table-column prop="number" label="产品数量" width="150">
      </el-table-column>
      <el-table-column prop="type" label="产品类型" width="150">
      </el-table-column>
      <el-table-column prop="department" label="产品处理部门" width="120">
      </el-table-column>
      <el-table-column prop="employee" label="产品处理员工" width="120" v-if="isShowEmployee === true">
      </el-table-column>
      <el-table-column prop="state" label="产品状态" width="120">
        <template slot-scope="{row}">
          <el-tag :type="statusMap[row.status].type">
            {{ statusMap[row.status].text }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="{row}">
          <el-button @click="handleCheck(row)" type="primary" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

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

    <el-dialog class="dialog" title="产品信息" :visible.sync="dialogFormVisible">
      <el-descriptions class="margin-top" :column="2" border>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            名称
          </template>
          {{tempData.name}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            序列号
          </template>
          {{tempData.code}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            数量
          </template>
          {{tempData.number}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            类型
          </template>
          {{tempData.type}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            处理部门
          </template>
          {{tempData.department}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            处理员工
          </template>
          {{tempData.employee}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            状态
          </template>
          <el-tag size="small" :type="statusMap[tempData.status].type">{{statusMap[tempData.status].text}}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>



  </div>
</template>

<script>
export default {
  computed: {
    isEnableRemove() {
      return this.multipleSelection.length === 0
    }
  },
  data() {
    return {
      searchName: '',
      departmentOption: '',
      departmentList: [{
        value: '1',
        label: '行政部门'
      }, {
        value: '2',
        label: '运输部门'
      }, {
        value: '3',
        label: '生产部门'
      }, {
        value: '4',
        label: '人事部门'
      }, {
        value: '5',
        label: '董事会'
      }],
      typeOption: '',
      typeList: [{
        value: '1',
        label: '食品'
      }, {
        value: '2',
        label: '生活用品'
      }, {
        value: '3',
        label: '电子产品'
      }, {
        value: '4',
        label: '床上用品'
      }, {
        value: '5',
        label: '虚拟商品'
      }],
      dateOption: '',
      dateList: [{
        value: '1',
        label: '日期升序'
      }, {
        value: '2',
        label: '日期降序'
      }],
      isShowEmployee: true,
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
      dialogFormVisible: false,
      tempData: {
        name: '',
        code: '',
        number: '',
        modify: '',
        type: '',
        department: '',
        employee: '',
        status: '',
      },
      currentPage: 1
    }
  },
  methods: {
    handleCheck(row) {
      this.tempData = Object.assign({}, row) // copy obj
      this.dialogFormVisible = true
    },
    handleSizeChange(value) {

    },
    handleCurrentChange(value) {

    }
  },
}
</script>

<style scoped>
.title {
  color: rgb(0, 0, 0);
  font-size: 30px;
  font-weight: bold;
  font-family: "微软雅黑";
}

.content {
  position: relative;
  width: 100;
}

.flex-grow {
  flex-grow: 1;
}

.dialog {
  width: 60%;
  margin: auto;
}
</style>
