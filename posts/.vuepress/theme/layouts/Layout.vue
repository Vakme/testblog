<template>
    <div>
        <Slider></Slider>
        <Masonry :posts="$pagination.pages"></Masonry>
        <pagination :pagination="$pagination"></pagination>
        <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" :data-src="$withBase('/about.jpg')" uk-parallax="bgy: -300" uk-img>
            <div class="back"></div>
            <h1 class="uk-position-z-index"><router-link to="/about" class="uk-link-heading">Meet the team</router-link></h1>
        </div>
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
    .uk-background-cover {
        position: relative;
    }
    .back {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.5;
    }
</style>
