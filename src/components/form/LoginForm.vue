<template>
  <div class="login_content">
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane label="公司登录" name="company">
        <el-form :label-position="labelPosition" label-width="100px" :model="company"
        :rules="rules" ref="company">
          <el-form-item label="公司名称" prop="name">
            <el-input v-model="company.name" placeholder="请输入公司名称"></el-input>
          </el-form-item>
          <el-form-item label="管理员账户" prop="username">
            <el-input v-model="company.username" placeholder="请输入管理员账户用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="company.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="部门登录" name="department">
        <el-form :label-position="labelPosition" label-width="100px" :model="department"
        :rules="rules" ref="department">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="department.name" placeholder="请输入部门名称"></el-input>
          </el-form-item>
          <el-form-item label="管理员账户" prop="username">
            <el-input v-model="department.username" placeholder="请输入管理员账户用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="department.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-checkbox v-model="text_checked" class="text_checked">同意协议</el-checkbox> <br>
      <el-button class="vetify_btn">点击验证</el-button><br/>
      <el-button class="login_btn" type="primary" style="min-width:100px;" @click="login">登录</el-button>
      <br>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data () {
    return {
      text_checked: false,
      activeName: 'company',
      labelPosition: 'right',
      company: {
        name: '',
        username: '',
        password: ''
      },
      department: {
        name: '',
        username: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
    }
  },
  methods: {
    tabClick () {
      this.company.name = ''
      this.company.username = ''
      this.company.password = ''
      this.department.name = ''
      this.department.username = ''
      this.department.password = ''
    },
    login () {
      this.$router.push('manage');
    },
    submit() {
      this.$refs[activeName].validate((valid) => {
        if (valid) {
          this.$router.push('manage');
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
.login_content {
  text-align: left;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.el-form-item {
  margin: 20px auto;
}
.text_checked {
  margin: 20px auto;
}

.vetify_btn {
  width: 100%;
  margin-bottom: 20px;
}

.phone_vetify_btn {
  margin: 20px auto;
}
.login_btn {
  margin-left: 37.5%;
}

.el-tabs {
  position: relative;
}

</style>
