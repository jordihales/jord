<template>
  <Layout theme="dark" :toggleable="false">
    <div class="project-banner" id="projectBanner">
      <Banner :title="$page.project.title" :background="$page.project.background" :color="$page.project.color" />
    </div>
    <div class="project-article">
      <Content :content="$page.project.content" />
      <WebsiteLink :path="$page.project.website" :background="$page.project.background" :color="$page.project.color" />
    </div>
  </Layout>
</template>

<page-query>
query Project($path: String!) {
  project (path: $path) {
    title
    brand
    website
    background
    color
    content
    tech
  }
}
</page-query>

<script>
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Layout from '@/components/Layout'
import WebsiteLink from '@/components/WebsiteLink'

export default {
  components: {
    Banner,
    Content,
    Layout,
    WebsiteLink,
  },
}
</script>

<style lang="scss" scoped>
.project-banner {
  @screen lg {
    @apply fixed inset-x-0 top-0;
  }
}

.project-article {
  @screen lg {
    padding-top: 100vh;
    @apply relative z-10;
  }
}
</style>
