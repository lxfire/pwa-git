<template>
  <div class="hello">
  </div>
</template>

<script>
// import AV from 'leancloud-storage'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}

// function init() {
//   var APP_ID = '1mXAeMVz7qjtVzi3QNsrvbiQ-gzGzoHsz';
//   var APP_KEY = 'SlvlenGco9jR1cDjVnlHIeJE';
//   var AV = require('leancloud-storage');

//   AV.init({
//     appId: APP_ID,
//     appKey: APP_KEY
//   });
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
