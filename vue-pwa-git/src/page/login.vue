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
button {
  font-weight: normal;
  color: #35495E;
}
</style>
