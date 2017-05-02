<template>
  <div id="app">
    <router-view></router-view>
    <firstVue msg="testing here"></firstVue>
  </div>
</template>

<script>
import FirstVue from './components/FirstVue'
export default {
  name: 'app',
  components: {
    FirstVue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
