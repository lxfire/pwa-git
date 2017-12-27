<template>
    <header class="header">
      <button id="butUser" class="headerButton">
      </button>
      <h1 class="header__title">{{title}}</h1>
      <button id="butSearch" class="headerButton">
      </button>
    </header>
</template>

<script>
import '../assets/js/iconfont.js'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'ad'
    }
  },
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, body {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 64px;
  line-height: 64px;
  color: #FFF;
  background: #3F51B5;
  position: fixed;
  font-size: 20px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  will-change: transform;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  -webkit-align-content: center;
      -ms-flex-line-pack: center;
          align-content: center;
  -webkit-transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s, -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  z-index: 1000;
}
.header .headerButton {
    padding: 0 16px;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    border: none;
    outline: none;
    cursor: pointer;
}

.header__title {
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  margin: 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
