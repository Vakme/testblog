<template>
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m wide" uk-grid="masonry: true">
        <div v-for="i of randomLen" :key="i">
            <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" :style="`height: ${randomHeight()}px`">Item</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Masonry",
    computed: {
      randomLen() {
        return Math.floor(Math.random() * Math.floor(20));
      }
    },
    methods: {
      randomHeight() {
        return Math.random() * (300 - 200) + 300;
      }
    }
  }
</script>

<style scoped>

</style>
