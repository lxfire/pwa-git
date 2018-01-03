<template>
  <div class="pwa">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'pwa',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style>
h1 {
  font-weight: normal;
  color: #35495E;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
