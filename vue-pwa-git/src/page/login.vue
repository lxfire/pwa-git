<template>
  <div class="login">
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login () {
      this.$router.push({
        path: 'home'
      })
    }
  }
}
</script>

<style>
button.login {
  width: 100px;
  height: 40px;
  font-size: 16px;
  background: #2c3e50;
  font-weight: normal;
  color: #35495E;
}
</style>
