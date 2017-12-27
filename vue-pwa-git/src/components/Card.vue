<template>
  <div class="card cardTemplate weather-forecast" hidden>
    <div class="city-key" hidden></div>
    <div class="card-last-updated" hidden></div>
    <div class="location"></div>
    <div class="date"></div>
    <div class="description"></div>
    <div class="current">
      <div class="visual">
        <div class="icon"></div>
        <div class="temperature">
          <span class="value"></span><span class="scale">°F</span>
        </div>
      </div>
      <div class="description">
        <div class="humidity"></div>
        <div class="wind">
          <span class="value"></span>
          <span class="scale">mph</span>
          <span class="direction"></span>°
        </div>
        <div class="sunrise"></div>
        <div class="sunset"></div>
      </div>
    </div>
    <div class="future">
      <div class="oneday">
        <div class="date"></div>
        <div class="icon"></div>
        <div class="temp-high">
          <span class="value"></span>°
        </div>
        <div class="temp-low">
          <span class="value"></span>°
        </div>
      </div>
      <div class="oneday">
        <div class="date"></div>
        <div class="icon"></div>
        <div class="temp-high">
          <span class="value"></span>°
        </div>
        <div class="temp-low">
          <span class="value"></span>°
        </div>
      </div>
      <div class="oneday">
        <div class="date"></div>
        <div class="icon"></div>
        <div class="temp-high">
          <span class="value"></span>°
        </div>
        <div class="temp-low">
          <span class="value"></span>°
        </div>
      </div>
      <div class="oneday">
        <div class="date"></div>
        <div class="icon"></div>
        <div class="temp-high">
          <span class="value"></span>°
        </div>
        <div class="temp-low">
          <span class="value"></span>°
        </div>
      </div>
      <div class="oneday">
        <div class="date"></div>
        <div class="icon"></div>
        <div class="temp-high">
          <span class="value"></span>°
        </div>
        <div class="temp-low">
          <span class="value"></span>°
        </div>
      </div>
      <div class="oneday">
        <div class="date"></div>
        <div class="icon"></div>
        <div class="temp-high">
          <span class="value"></span>°
        </div>
        <div class="temp-low">
          <span class="value"></span>°
        </div>
      </div>
      <div class="oneday">
        <div class="date"></div>
        <div class="icon"></div>
        <div class="temp-high">
          <span class="value"></span>°
        </div>
        <div class="temp-low">
          <span class="value"></span>°
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
