<template>
  <div id="app">
    <Header :title="title">
    </Header>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  data () {
    return {
      title: 'PWA-Git'
    }
  },
  components: { Header }
}
</script>

<style>
</style>
