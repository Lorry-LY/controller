<template>
  <div class="header_container">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item) in levelList" :key="item.path">
        <router-link :underline="false" :to="item.path">{{ item.meta }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // levelList: null
    }
  },
  computed: {
    levelList(){
      let temp = this.$route.matched
      // console.log(temp)
      let res = []
      temp.forEach(t => {
        if (t.name!='index')res.push(t)
      })
      return res;
    }
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
