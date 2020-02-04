<template>
  <div id="app">
    <Header/>
    <HelloWorld/>
    <Banner/>
    <Skills/>
    <Social/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Banner from './components/Banner.vue'
import Skills from './components/Skills.vue'
import Social from './components/Social.vue'

export default {
  name: 'app',
  components: {
    Header,
    HelloWorld,
    Banner,
    Skills,
    Social
  }
}
</script>

<style lang="scss">
  @import "styles/index.scss"
</style>
