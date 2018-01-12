<template>
  <div class="tableView">
    <ul class="tableViewContainer">
      <li v-for="todo in todos" class="tableCell" @click="selectCell(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
    <button @click="joinPwa">join pwa</button>
    <br/>
    <button @click="increment"> + </button>
    <input type="text" :value="count"/>
    <button @click="decrement"> - </button>
    <button @click="multi"> * </button>
    <br/>
    <button @click="homeload">{{time}}</button>
    <button @click="log">consoleLog</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
// import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      todos: [
        { text: 'learn javascript', id: 0 },
        { text: 'learn React', id: 1 },
        { text: 'learn Anglar', id: 2 }
      ]
    }
  },
  created () {
    this.homeload()
  },
  // 在mount之前对data中的值进行改变
  computed: {
    count () {
      return this.$store.state.count
    },
    time () {
      return this.$store.state.homeData.query.created || 'qweewqqwe'
    }
  },
  // mount之后声明方法 改变
  methods: {
    selectCell (id) {
      this.$router.push({
        path: '/detail/' + id
      })
    },
    joinPwa () {
      this.$router.push({
        path: '/pwa'
      })
    },
    log () {
      console.log('this time is ：' + this.time)
    },
    ...mapMutations({
      increment: {
        type: 'increment',
        count: 1
      },
      decrement: {
        type: 'decrement',
        count: 1
      }
    }),
    ...mapActions(['multi']),
    ...mapActions({
      homeload: {
        type: 'homeload',
        method: 'GET',
        url: 'https://query.yahooapis.com/v1/public/yql?format=json&q=select * from weather.forecast where woeid=0'
      }
    })
  }
}
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
  width: 100%;
  text-align: center;
  display: inline-block;
  margin: 10px;
}

a {
  color: #35495E;
}
</style>
