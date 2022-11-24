<template>
  <div class="content">
    <el-row class="title" style="margin:20px 0;">产品格式信息表</el-row>
    <el-row type="flex" class="row-bg" justify="space-between" style="margin-bottom:20px;margin-top: 20px;">
      <el-col :span="6">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchText">
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">搜索</el-button>
      </el-col>
      <el-col :span="15"></el-col>
      <el-col :span="2">
        <el-button type="primary" @click="handleCreate" style="margin-right:50px;">添加新格式</el-button>
      </el-col>
      <el-col :span="1"></el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand" label="字段信息" width="100" border>
        <template slot-scope="props">
          <el-descriptions title="详细信息" :column="1">
            <el-descriptions-item label="格式名称"><span>{{ props.row.name }}</span></el-descriptions-item>
            <el-descriptions-item label="添加日期"><span>{{ props.row.date }}</span></el-descriptions-item>
            <el-descriptions-item label="描述"><span>{{ props.row.description }}</span></el-descriptions-item>
            <el-descriptions-item v-for="(item) in props.row.column" :label="'字段' + item.key" :key="item.key">
              <span>{{ item.value }}</span>
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-table-column>
      <el-table-column label="格式名称" prop="name">
      </el-table-column>
      <el-table-column label="添加日期" prop="date" width="200" sortable>
      </el-table-column>
      <el-table-column label="描述" prop="description">
      </el-table-column>
    </el-table>

    <el-drawer title="添加格式" :before-close="handleClose" :visible.sync="dialogShow" direction="rtl"
      custom-class="demo-drawer" ref="drawer">
      <div class="demo-drawer__content">
        <el-form :model="formData" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item prop="name" label="格式名" :rules="[
            { required: true, message: '请输入格式名字', trigger: 'blur' },
          ]">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item prop="description" label="描述" :rules="[]">
            <el-input v-model="formData.description"></el-input>
          </el-form-item>
          <el-form-item v-for="(domain, index) in formData.column" :label="'字段' + index" :key="domain.key"
            :prop="'column.' + index + '.value'" :rules="{
              required: true, message: '字段名不能为空', trigger: 'blur'
            }">
            <el-row :gutter="20">
              <el-col :span="15">
                <el-input v-model="domain.value"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button @click.prevent="removeDomain(domain)">删除</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            <el-button @click="addDomain">新增字段</el-button>
            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      },
      searchText: '',
      dialogShow: false,
      columnNum: 1,
      formData: {
        name: '',
        description: '',
        date: '',
        column: [{
          value: '',
          key: 0
        }]
      },
      tableData: [{
        name: '安慕希',
        date: '2022-02-20 15:20',
        description: '第一批安慕希',
        column: [{
          value: '名称',
          key: 0
        }, {
          value: '序列号',
          key: 1
        }, {
          value: '处理人',
          key: 2
        }]
      }]
    };
  },
  methods: {
    resetFormData() {
      this.formData = {
        name: '',
        description: '',
        date: '',
        column: [{
          value: '',
          key: 0
        }]
      }
      this.columnNum = 1;
    },
    handleCreate() {
      this.resetFormData();
      this.dialogShow = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let temp = Object.assign({}, this.formData);
          let date = new Date();
          temp.date = date.getFullYear() + '-' 
                    +date.getMonth() + '-'
                    +date.getDay() + ' '
                    +date.getHours() + ':'
                    +date.getMinutes()
          this.tableData.push(temp)
          this.dialogShow = false;
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.formData.column.indexOf(item)
      if (index !== -1) {
        this.formData.column.splice(index, 1)
      }
      this.columnNum--;
    },
    addDomain() {
      this.formData.column.push({
        value: '',
        key: this.columnNum++
      });
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
}
</script>

<style scoped>
.content {
  margin: 20px 20px;
}

.title {
  color: rgb(0, 0, 0);
  font-size: 30px;
  font-weight: bold;
  font-family: "微软雅黑";
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>