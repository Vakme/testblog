<template>
    <div class="wide">
        <h2 class="tag-title">{{$page.frontmatter.title}}</h2>
        <Masonry :posts="$pagination._matchedPages"></Masonry>
        <Pagination :pagination="$pagination"></Pagination>
    </div>
</template>

<script>
  import Masonry from '../components/Masonry'
  import Pagination from '../components/Pagination'

  export default {
    name: "Tag",
    components: {
      Masonry,
      Pagination
    },
  }
</script>

<style lang="scss">
    .tag-title {
        text-transform: uppercase;
    }
</style>