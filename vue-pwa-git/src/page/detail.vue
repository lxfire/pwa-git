<template>
  <div class="detail">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'detail',
  created () {
    console.log(123, this.$router.history.current.params.id)
  },
  data () {
    const detailId = this.$router.history.current.params.id
    return {
      msg: 'Welcome to Your Vue.js PWA Detail ' + detailId
    }
  }
}
</script>

<style>
h2 {
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
