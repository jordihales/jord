<template>
  <div
    class="app"
    :class="mode === 'dark' ? 'dark' : 'light'"
  >
    <Header
      :mode="mode"
      @toggle="toggle"
    />
    <HelloWorld />
    <Banner />
    <Skills />
    <Blog />
    <Social />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Skills from "./components/Skills.vue";
import Blog from "./components/Blog.vue";
import Social from "./components/Social.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      mode: "light"
    };
  },
  components: {
    Header,
    Banner,
    Skills,
    Blog,
    Social,
    Footer
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    }
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";
</style>
