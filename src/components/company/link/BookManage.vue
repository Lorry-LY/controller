<template>
  <div class="content">
    <el-row type="flex" class="row-bg" justify="space-between" style="margin-bottom:20px;">
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
        <el-button type="primary" @click="handleCreate">添加图书</el-button>
      </el-col>
    </el-row>
    <el-table class="content" :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange"
      tooltip-effect="dark" ref="multipleTable">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column fixed prop="number" label="图书编号" width="120" sortable>
      </el-table-column>
      <el-table-column prop="category" label="类别号" width="100" sortable>
      </el-table-column>
      <el-table-column prop="name" label="书名" sortable>
      </el-table-column>
      <el-table-column prop="author" label="作者" width="100" sortable>
      </el-table-column>
      <el-table-column prop="publisher" label="出版社" width="150" sortable>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
          <el-button @click="handleUpdate(scope.row)" type="primary" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog class="dialog" :title="titleMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :model="newBook" ref="dataForm">
        <el-form-item label="书名"
        :relus ="[
          { required: true, message: '请输入图书名称', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ]"
        >
          <el-input v-model="newBook.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类别号">
          <el-select v-model="newBook.category" placeholder="请选择类别">
            <el-option label="1(外国文学)" value="1"></el-option>
            <el-option label="2(中国古典文学)" value="2"></el-option>
            <el-option label="3(专业书籍)" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作者"
        :relus ="[
          { required: true, message: '请输入作者名称', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ]"
        >
          <el-input v-model="newBook.author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出版社"
        :relus ="[
          { required: true, message: '请输入出版社名称', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
          ]"
        >
          <el-input v-model="newBook.publisher" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogStatus==='create' ? createData() : updateData()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog class="dialog" title="图书信息" :visible.sync="dialogFormVisible_product">
      <el-descriptions class="margin-top" :column="2" border>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            编号
          </template>
          {{newBook.number}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            名称
          </template>
          {{newBook.name}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            数量
          </template>
          {{newBook.category}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            作者
          </template>
          {{newBook.author}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            出版社
          </template>
          {{newBook.publisher}}
        </el-descriptions-item>
      </el-descriptions>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible_product = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  computed: {
    isEnableRemove () {
      return this.multipleSelection.length === 0
    }
  },
  data () {
    return {
      tableData: [{
        number: '10001',
        category: '1',
        name: '老人与海',
        author: '海明威',
        publisher: '人民文学出版社'
      }, {
        number: '10002',
        category: '1',
        name: '双城记',
        author: '狄更斯',
        publisher: '吉林出版社'
      }, {
        number: '10003',
        category: '2',
        name: '诗经',
        author: '佚名',
        publisher: '中华书局'
      }, {
        number: '10004',
        category: '3',
        name: '软件工程',
        author: 'Roger',
        publisher: '机械工业出版社'
      }],
      multipleSelection: [],
      searchText: '',
      dialogFormVisible: false,
      dialogFormVisible_product: false,
      dialogStatus: '',
      titleMap:{
        create:'添加图书',
        check:'查看图书',
        update:'编辑图书'
      },
      newBook: {
        number: '',
        category: '',
        name: '',
        author: '',
        publisher: ''
      }
    }
  },
  methods: {
    handleClick (row) {
      this.newBook = Object.assign({}, row)
      this.dialogFormVisible_product = true
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    resetTemp() {
      this.newBook ={
        number: '',
        category: '',
        name: '',
        author: '',
        publisher: ''
      }
    },
    handleCreate () {
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
          this.newBook.number = 0
          this.tableData.push(this.newBook);
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
      this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
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
      this.$confirm('此操作将永久删除这些图书, 是否继续?', '提示', {
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
      this.newBook = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const newBook = Object.assign({}, this.newBook)
          const index = this.tableData.findIndex(v => v.number === newBook.number)
          this.tableData.splice(index, 1, newBook)
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
    }
  },
}
</script>

<style scoped>
.content {
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
