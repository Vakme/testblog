<template>
    <div>
        <Slider></Slider>
        <Masonry :posts="$pagination.pages"></Masonry>
        <pagination :pagination="$pagination"></pagination>
    </div>
</template>


<script>
  import Slider from '../components/Slider'
  import Masonry from '../components/Masonry'
  import Pagination from '../components/Pagination'

  export default {
    components: {
      Slider,
      Masonry,
      Pagination
    },
  }
</script>

<style lang="scss" scoped>
</style>
