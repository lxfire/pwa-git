<template >
  <header id="navBar">
    <button class="icon navBarItem" @click="getUser"></button>
    <span>{{title}}</span>
    <button class="search navBarItem" @click="search"></button>
  </header>
</template>

<script>
import axios from 'axios'

export default {
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
  }
}
</script>

<style>
  header {
    height: 64px;
    width: 100%;
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
    background: url('../../static/img/icons/favicon-32x32.png') no-repeat;
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
</style>
