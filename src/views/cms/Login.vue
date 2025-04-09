<template>
  <form class="login-container" action="/login" method="post">
    <h2>Đăng nhập</h2>
    <input type="text" name="username" placeholder="Tên đăng nhập" required />
    <input type="password" name="password" placeholder="Mật khẩu" required />
    <input type="submit" value="Đăng nhập" @click="login" />
  </form>
</template>
<script lang="ts" setup>
import router from "@/router";
import "../../assets/css/Login.css";

function login() {
  console.log(123);

  router.push("/cms");
}
</script>
