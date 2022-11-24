<template>
  <div class="content">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;margin-left: 5px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu :default-active="defaultActive" 
    style="min-height: 100%;"
    @open="handleOpen" @close="handleClose" :collapse="isCollapse"
    @select="changeSelect"
    router
    >
      <el-menu-item index="/department"><i class="el-icon-menu"></i>首页</el-menu-item>
      <el-submenu index="1" disabled>
        <template slot="title"><i class="el-icon-s-claim"></i>项目管理</template>
        <el-menu-item index="/department/depart_info">项目分发</el-menu-item>
        <el-menu-item index="/department/depart_info">项目审核</el-menu-item>
        <el-menu-item index="/department/depart_info">异常项目</el-menu-item>
        <el-menu-item index="/department/depart_info">项目信息</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-document"></i>部门管理</template>
        <el-menu-item index="/department/depart_manage">员工列表</el-menu-item>
        <el-menu-item index="/department/depart_info">部门信息</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-plus"></i>产品管理</template>
        <el-menu-item index="/department/product_add">添加产品</el-menu-item>
        <el-menu-item index="/department/product_info">产品信息</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-star-on"></i>信息链</template>
        <el-menu-item index="/department/link_product">产品</el-menu-item>
        <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
        <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
        <el-menu-item index="/department/send_info">上报通知</el-menu-item>
        <el-menu-item index="/department/send_info">下放通知</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
        <el-menu-item index="/department/admin_set">管理员设置</el-menu-item>
        <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-warning"></i>说明</template>
        <el-menu-item index="/department/direction">说明</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
        isCollapse: false
    }
  },
  computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
	},
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    changeSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.content {
  text-align: left;
  background-color: transparent;
  /* background-color: #324057; */
}

.index_item {
  width: 100%;
  text-align: center;
}
.btn_back {
  margin: 10px auto;
}

</style>