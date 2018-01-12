<template>
  <div>
    <button class="login" @click="login">Login</button>
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
  margin-top: 100px;
  background: #2c3e;
  font-size: 16px;
  font-weight: normal;
  color: #35495E;
}
</style>
