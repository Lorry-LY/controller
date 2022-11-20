<template>
  <div class="content">
    <div class="sys_name">区块链技术产品管理系统</div>
    <LoginForm class="loginForm"/>
  </div>
</template>

<script>
import LoginForm from '@/components/form/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.content{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/login/web5.jpg') no-repeat;
  background-size: cover;
}

.loginForm{
  position: absolute;
  height: min-content;
  right: 10%;
  top: 20%;
  width: 20%;
  min-width: 10%;
}

.sys_name {
  position: absolute;
  left: 15%;
  top: 40%;
  color:rgb(0, 0, 0);
  font-size:40px;
  font-weight: bold;
  font-family:"微软雅黑";
}
</style>
