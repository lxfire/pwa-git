<template>
  <div id="app">
    <header class="navBar">
      <button class="icon navBarItem" @click="getUser"></button>
      <span>{{title}}</span>
      <button class="search navBarItem" @click="search"></button>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      title: 'PWA by Vue.js'
    }
  },
  methods: {
    getUser () {
      console.log('get user message')
    },
    search () {
      console.log('search message')
    },
    login () {
      axios.get('https://github.com/login/oauth/authorize', {
        client_id: '83ec5d5c239af8c7b51e',
        redirect_uri: 'https://gitpwa.duapp.com',
        state: 1
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mouted: {

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

header {
  height: 64px;
  text-align: center;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: inline-block;
  position: relative;
  font-size: 20px;
  height: 64px;
  line-height: 64px;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}

header button {
  min-width: 24px;
  height: 24px;
  margin-top: 20px;
  line-height: 24px;
  font-size: 16px;
  background: url('../static/img/icons/favicon-32x32.png') no-repeat;
  background-size: cover;
}

button.icon {
  float: left;
  margin-left: 20px;
}

button.search {
  float: right;
  margin-right: 20px;
}

button.login {
  width: 100px;
  height: 40px;
  font-size: 16px;
  background: #2c3e50;
  color: #fff;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.tableView {
  width: 100%;
}

.tableView {
  width: 100%;
}

.tableCell {
  width: 100%;
  height: 40px;
  margin: 0;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #ff0000;
}
</style>
