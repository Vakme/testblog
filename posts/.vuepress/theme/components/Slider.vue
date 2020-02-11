<template>
    <div class="wide" uk-slideshow="ratio: 8:3; autoplay: true; autoplay-interval: 5000">
        <ul class="uk-slideshow-items">
            <Slide v-for="post in filteredPosts" :item="post"></Slide>
        </ul>
        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>
</template>

<script>
  import Slide from './Slide'

  export default {
    name: "Slider",
    components: {
      Slide
    },
    computed: {
      filteredPosts: function () {
        return this.$site.pages.filter(page => page.pid === 'post'/* && page.frontmatter.tag.includes('vuepress')*/);
      }
    }
  }
</script>

<style scoped>
</style>
