<template>
  <Layout>
    <Banner title="The finest collection of projects for you to enjoy." />
    <section class="grid grid-cols-2 py-24 md:grid-cols-3">
      <Project
        v-for="project in $page.projects.edges"
        :key="project.node.title"
        :brand="project.node.brand"
        :path="project.node.path"
        :background="project.node.background"
        :color="project.node.color"
      />
    </section>
  </Layout>
</template>

<page-query>
query { 
  projects: allProject(order: DESC) { 
    edges {
      node {  
        brand 
        path 
        background
        color 
      } 
    } 
  } 
}
</page-query>

<script>
import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import Project from '@/components/Project'

export default {
  components: {
    Banner,
    Project,
    Layout,
  },
}
</script>
