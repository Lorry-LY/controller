<template>
  <div class="content">
    <el-row class="title" style="margin:20px 0;">部门信息表</el-row>
    <el-row type="flex" class="row-bg" justify="space-between" style="margin-bottom:20px;margin-top: 20px;">
      <el-col :span="6">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchText">
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">搜索</el-button>
      </el-col>
      <el-col :span="16"></el-col>
      <el-col :span="2">
        <el-button type="primary" :disabled="isEnableRemove" @click="deleteMulData">删除</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="handleCreate">添加部门</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange"
      tooltip-effect="dark" ref="multipleTable">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column fixed prop="name" label="部门名称" width="100" sortable>
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="100" sortable>
      </el-table-column>
      <el-table-column prop="password" label="密码" width="150" sortable>
      </el-table-column>
      <el-table-column prop="job_number" label="剩余工作量" width="120" sortable>
      </el-table-column>
      <el-table-column prop="job_percent" label="工作完成情况" width="300" sortable>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="{row,$index}">
          <el-button @click="handleUpdate(row)" type="primary" size="small">编辑</el-button>
          <el-button @click="deleteData(row,$index)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog class="dialog" :title="titleMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :model="tempData" ref="dataForm">
        <el-form-item label="部门名称" :relus="[
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ]">
          <el-input v-model="tempData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :relus="[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
        ]">
          <el-input v-model="tempData.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :rules="[
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 8, message: '密码太短', trigger: 'blur' }
        ]">
          <el-input v-model="tempData.password" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item v-show="false" label="剩余工作数" :rules="[]">
          <el-input-number v-model="tempData.job_number" :min="0" label="剩余工作"></el-input-number>
        </el-form-item>
        <el-form-item v-show="false" label="剩余完成比例(%)" :rules="[]">
          <el-input-number v-model="tempData.job_per" :precision="2" :step="0.01" :min="0" :max="100"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">确 定</el-button>
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
      tableData: [{
        name: '行政部门',
        username: 'administration',
        password: 'admin123456',
        job_number: 50,
        job_percent: '95.23%',
        job_per: 95.23
      }, {
        name: '生产部门',
        username: 'production',
        password: 'product123456',
        job_number: 4613,
        job_percent: '56.53%',
        job_per: 56.53
      }, {
        name: '运输部门',
        username: 'transport',
        password: 'trans123456',
        job_number: 560,
        job_percent: '97.93%',
        job_per: 97.93
      }, {
        name: '质检部门',
        username: 'qualityInspection',
        password: 'quaTest123456',
        job_number: 2103,
        job_percent: '79.56%',
        job_per: 79.56
      }],
      multipleSelection: [],
      searchText: '',
      dialogFormVisible: false,
      dialogStatus: '',
      titleMap:{
        create:'添加新部门',
        update:'更新部门信息'
      },
      tempData: {
        name: '',
        username: '',
        password: '',
        job_number: 0,
        job_percent: '100.00%',
        job_per: 100.00
      }
    }
  },
  methods: {
    resetTemp() {
      this.tempData = {
        name: '',
        username: '',
        password: '',
        job_number: 0,
        job_percent: '100.00%',
        job_per: 100.00
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.tempData.job_number = 0
          this.tempData.job_percent = '100.00%'
          this.tableData.unshift(this.tempData);
          this.dialogFormVisible = false
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
          // createArticle(this.tempData).then(() => {
          //   this.list.unshift(this.tempData)
          //   this.dialogFormVisible = false
          //   this.$notify({
          //     title: 'Success',
          //     message: 'Created Successfully',
          //     type: 'success',
          //     duration: 2000
          //   })
          // })
        }
      })
    },
    deleteData(row,index){
      this.$confirm('此操作将永久删除该部门, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    deleteMulData(){
      // console.log(this.multipleSelection)
      this.$confirm('此操作将永久删除这些部门, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.multipleSelection.forEach(item => {
            const index = this.tableData.findIndex(v => v === item)
            this.tableData.splice(index, 1)
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleUpdate(row) {
      this.tempData = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.tempData.job_percent = (this.tempData.job_per)+'%'
          const tempData = Object.assign({}, this.tempData)
          const index = this.tableData.findIndex(v => v.name === this.tempData.name)
          this.tableData.splice(index, 1, this.tempData)
          this.dialogFormVisible = false
          this.$message({
            type: 'success',
            message: '更改成功!'
          });
          // updateArticle(tempData).then(() => {
          //   const index = this.list.findIndex(v => v.id === this.temp.id)
          //   this.list.splice(index, 1, this.temp)
          //   this.dialogFormVisible = false
          //   this.$notify({
          //     title: 'Success',
          //     message: 'Update Successfully',
          //     type: 'success',
          //     duration: 2000
          //   })
          // })
        }
      })
    },
    handleClick(row) {
      console.log(row)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    openAddDataForm() {
      this.newData.name = ''
      this.newData.username = ''
      this.newData.password = ''
      this.dialogFormVisible = true
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
  width: 70%;
  margin: auto;
}

.flex-grow {
  flex-grow: 1;
}

.dialog {
  width: 40%;
  margin: auto;
}
</style>
