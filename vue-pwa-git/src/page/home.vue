<template>
  <div class="tableView">
    <ul class="tableViewContainer">
      <li v-for="todo in todos" class="tableCell" @click="selectCell(todo.id)">
        {{ todo.text }}
      </li>
    </ul>
    <button @click="joinPwa">join pwa</button>
  </div>
</template>

<script>
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
  methods: {
    selectCell (id) {
      this.$router.push({
        path: '/home/detail/:' + id
      })
    },
    joinPwa () {
      this.$router.push({
        path: '/home/pwa'
      })
    }
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
