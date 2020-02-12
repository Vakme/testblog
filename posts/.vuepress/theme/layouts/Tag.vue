<template>
    <div>
        <Masonry :posts="$pagination._matchedPages"></Masonry>
        <pagination :pagination="$pagination"></pagination>
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

