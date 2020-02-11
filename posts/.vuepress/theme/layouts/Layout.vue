<template>
    <div>
        <Slider></Slider>
        <Masonry></Masonry>
        <ul id="default-layout">
            <li v-for="page in $pagination.pages">
                <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
            </li>
        </ul>
        <div id="pagination">
            <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
            <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
        </div>
    </div>
</template>


<script>
  import Slider from '../components/Slider'
  import Masonry from '../components/Masonry'

  export default {
    components: {
      Slider,
      Masonry
    },
  }
</script>

<style lang="scss" scoped>
</style>
