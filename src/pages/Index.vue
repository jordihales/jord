<template>
  <Layout>
    <Banner title="Front end developer blurring the lines between minimal design and functional code." />
    <DeveloperSkills />
    <DesignerSkills />
    <Social />
  </Layout>
</template>

<script>
import Banner from '@/components/Banner'
import DesignerSkills from '@/components/DesignerSkills'
import DeveloperSkills from '@/components/DeveloperSkills'
import Layout from '@/components/Layout'
import Social from '@/components/Social'

export default {
  components: {
    Banner,
    DesignerSkills,
    DeveloperSkills,
    Layout,
    Social,
  },
}
</script>
