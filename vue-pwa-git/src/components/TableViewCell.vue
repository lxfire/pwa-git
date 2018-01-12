<template >
  <li class="tabViewCell">
    <img :src="img" alt="user" :data-src="img">
    <p class="desc">
        {{msg}}
    </p>
    <button @click="clg"> {{index}} </button>
  </li>
</template>

<script>
export default {
  name: 'TableViewCell',
  props: {
    msg: String,
    img: String,
    index: Number
  },
  created () {
    console.log('what is up')
  },
  methods: {
    clg () {
      console.log(this.index)
    }
  }
}
</script>
<style langue="sass">
  .tabViewCell {
    width: 100%;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }
  .tabViewCell img {
    float: left;
    margin-top: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    outline: none;
  }

  .tabViewCell p {
    float: left;
    text-align: left;
    width: 200px;
    margin-left: 20px;
    font-size: 12px;
    line-height: 16px;
  }
  button {
    color: aqua;
  }
</style>