<template>
  <div id="app">
    <navBarComponent>
    </navBarComponent>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navBarComponent from './components/NavBar'

export default {
  name: 'app',
  data () {
    return {
      msg: 'asd'
    }
  },
  components: {
    navBarComponent
  }
}
</script>

<style>
  body, header, ul, li {
    margin: 0;
    padding: 0;
  }
  button, input, img {
    border: none;
    outline: none;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
  }
</style>
