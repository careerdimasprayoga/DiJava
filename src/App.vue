<template>
  <div id="app">
    <router-view />
    <LoadingScreen :isLoading="isLoading" />
  </div>
</template>

<script>
import LoadingScreen from '@/components/animation/splashscreen.vue'

export default {
  components: {
    LoadingScreen
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  },
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title || 'DiJava'
      },
      immediate: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
