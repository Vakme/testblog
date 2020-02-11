<template>
    <div id="global-layout">
        <TheHeader></TheHeader>
        <component :is="layout"/>
        <TheFooter></TheFooter>
    </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  import TheHeader from "../global-components/TheHeader";
  import TheFooter from "../global-components/TheFooter";
  export default {
      components: {
        DefaultGlobalLayout: GlobalLayout,
        TheHeader, TheFooter
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
    },
    beforeMount () {
      const UIkit = require('uikit');
      const Icons = require('uikit/dist/js/uikit-icons');
      UIkit.use(Icons);
      window.UIkit = UIkit
    }
  }
</script>

<style lang="scss">
    @import "../styles/index";
</style>
