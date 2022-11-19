<template>
  <div class="content">
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
</style>
