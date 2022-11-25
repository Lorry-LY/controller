<template>
  <div class="content">
    <el-row style="height: 60px;">
      <HeadTop content="部门端" username="运输部门"/>
    </el-row>
    <el-row style="height: 95%;">
      <el-col :span="3" style="min-height: 100%;border-right: 1px solid; ">
        <SideBar/>
      </el-col>
      <el-col :span="21" style="height: 100%;overflow: auto;">
        <div class="head">
          <BreadCrumb/>
        </div>
        <div class="main_centent">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideBar from '@/components/bar/SideBarDep.vue'
import BreadCrumb from '@/components/bar/BreadCrumb.vue'
import HeadTop from '@/components/bar/HeadTop.vue'
export default {
  components: {
    SideBar,
    BreadCrumb,
    HeadTop
  }
}
</script>


<style scoped>
.head {
  height: 60px;
  width: 100%;
}

.content {
  width: 100%;
  height: 100%;
}
.main_centent {
  width: 100%;
  height: 90%;
}
</style>
