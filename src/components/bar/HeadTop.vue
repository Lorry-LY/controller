<template>
  <div class="header_container">
    <el-button type="text" style="margin-left:5%;">
      <span style="color:aliceblue;font-size:25px;font-family:微软雅黑">区块链技术产品管理系统</span>
    </el-button>
    <div class="flex-grow" />
    <el-menu menu-trigger="click" class="el-menu-vertical-demo" 
    mode="horizontal" background-color="transparent"
      text-color="#000" :collapse="false" router
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span style="color:aliceblue;font-size:15px;font-family:微软雅黑">用户名</span>
        </template>
        <el-menu-item index="1-1">切换账号</el-menu-item>
        <el-menu-item index="1-2">联系我们</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  created() {

  },
  computed: {
    handleCommand() {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.header_container {
  background-color: rgb(67,142,185);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

.flex-grow {
  flex-grow: 1;
}

.avator {
  border-radius: 50%;
  margin-right: 37px;
}

.avator .wh {
  width: 36px;
  height: 36px;
}

.el-dropdown-menu__item {
  text-align: center;
}

.item {
  width: 100px;
}
</style>
