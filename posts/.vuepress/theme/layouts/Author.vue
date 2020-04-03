<template>
    <div>
        <AuthorBox :author="author"></AuthorBox>
        <Masonry :posts="$pagination._matchedPages"></Masonry>
        <pagination :pagination="$pagination"></pagination>
    </div>
</template>

<script>
  import Masonry from '../components/Masonry'
  import Pagination from '../components/Pagination'
  import AuthorBox from "../components/AuthorBox";

  export default {
    name: "Auhor",
    components: {
        AuthorBox,
      Masonry,
      Pagination
    },
      computed: {
          author: function() {
              return this.$site.pages.find(page => page.pid === 'author_meta'
              && this.$page.path === `/author/${page.frontmatter.id}/`);
          }
      }
  }
</script>