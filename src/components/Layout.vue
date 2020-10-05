<template>
  <div class="app" :class="mode === 'dark' ? 'dark' : 'light'">
    <Header :toggleable="toggleable" :mode="mode" @toggle="toggle" />
    <main role="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  data() {
    return {
      mode: this.theme,
    }
  },
  props: {
    theme: {
      type: String,
      default: 'light',
    },
    toggleable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggle() {
      this.mode = this.mode === 'dark' ? 'light' : 'dark'
    },
  },
  components: {
    Header,
    Footer,
  },
}
</script>
