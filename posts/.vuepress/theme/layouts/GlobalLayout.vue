<template>
    <div id="global-layout">
        <TopHeader></TopHeader>
        <TheHeader></TheHeader>
        <component :is="layout"/>
        <TheFooter></TheFooter>
    </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  import TheHeader from "../global-components/TheHeader";
  import TopHeader from "../global-components/TopHeader";
  import TheFooter from "../global-components/TheFooter";
  export default {
      components: {
        DefaultGlobalLayout: GlobalLayout,
        TheHeader, TheFooter, TopHeader
      },
    computed: {
      layout() {
        if (this.$page.path) {
          if (this.$frontmatter.layout) {
            return this.$frontmatter.layout
          }
          return 'DefaultGlobalLayout'
        }
        return 'NotFound'
      }
    }
  }
</script>

<style>
    @import "../styles/index.css";
</style>
