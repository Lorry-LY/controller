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
    @mouseenter="enter" @mouseleave="leave"
    >
      <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-document"></i>数据管理</template>
        <el-menu-item index="userList">用户列表</el-menu-item>
        <el-menu-item index="shopList">商家列表</el-menu-item>
        <el-menu-item index="foodList">食品列表</el-menu-item>
        <el-menu-item index="orderList">订单列表</el-menu-item>
        <el-menu-item index="adminList">管理员列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
        <el-menu-item index="addShop">添加商铺</el-menu-item>
        <el-menu-item index="addGoods">添加商品</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
        <el-menu-item index="visitor">用户分布</el-menu-item>
        <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
        <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
        <el-menu-item index="vueEdit">文本编辑</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
        <el-menu-item index="adminSet">管理员设置</el-menu-item>
        <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-warning"></i>说明</template>
        <el-menu-item index="explain">说明</el-menu-item>
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
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    enter() {
      console.log('enter')
      isCollapse = false
    },
    leave() {
      console.log('leave')
      isCollapse = true
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