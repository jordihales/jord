<template>
  <div id="app" class="app" :class="mode === 'dark' ? 'dark' : 'light'">
    <Header :mode="mode" @toggle="toggle" />
    <main role="main">
      <Banner />
      <DeveloperSkills />
      <DesignerSkills />
      <Social />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Banner from '../components/Banner'
import DeveloperSkills from '../components/DeveloperSkills'
import DesignerSkills from '../components/DesignerSkills'
import Social from '../components/Social'
import Footer from '../components/Footer'

export default {
  data() {
    return {
      mode: 'light',
    }
  },
  components: {
    Header,
    Banner,
    DeveloperSkills,
    DesignerSkills,
    Social,
    Footer,
  },
  methods: {
    toggle() {
      this.mode = this.mode === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>