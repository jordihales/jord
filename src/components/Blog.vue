<template>
  <section class="flex flex-wrap py-12">
    <div class="container flex items-center w-3/5">
      <div class="py-12 px-10 w-full">
        <h2 class="font-extrabold text-5xl mb-6">Blog</h2>
        <ul>
          <li
            class="mb-2"
            v-for="blog of blogs"
            :key="blog.id"
          >{{ blog.title }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Blog",
  data() {
    return {
      blogs: []
    };
  },
  async mounted() {
    await axios
      .get("http://localhost:4000")
      .then(res => (this.blogs = res.data))
      .catch(error => console.log(error));
  }
};
</script>

<style></style>
