<template>
  <div class="detail">
    <h2>{{ msg }}</h2>
    <table-view ref="tbv">
      <table-view-cell
        v-for="(item, index) of items"
        :key="index"
        :index="index"
        :msg="item.msg"
        :img="item.img"
      ></table-view-cell>
    </table-view>
  </div>
</template>

<script>
import TableView from '../components/TableView'
import TableViewCell from '../components/TableViewCell'
// import getItems from '../utils/listData'

export default {
  name: 'detail',
  created () {
    console.log(123, this.$router.history.current.params.id)
  },
  data () {
    const detailId = this.$router.history.current.params.id
    return {
      msg: 'Welcome to Your Vue.js PWA Detail ' + detailId,
      items: [
        {
          msg: '123adadasd',
          img: ''
        },
        {
          msg: 'qwasdxzxeqwe',
          img: ''
        },
        {
          msg: 'qweasdasqwe',
          img: ''
        }
      ]
    }
  },
  computed: {
  },
  components: {
    TableView,
    TableViewCell
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
  margin: 0;
}

a {
  color: #35495E;
}
</style>
