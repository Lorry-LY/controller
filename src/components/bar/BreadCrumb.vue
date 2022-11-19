<template>
  <div class="header_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
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
  background-color: #EFF2F7;
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
