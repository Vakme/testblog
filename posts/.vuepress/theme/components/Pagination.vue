<template>
    <div class="uk-slidenav-container wide">
            <router-link class="previous arrow" v-if="pagination.hasPrev" :to="pagination.prevLink" uk-slidenav-previous></router-link>
            <router-link class="next arrow" v-if="pagination.hasNext" :to="pagination.nextLink" uk-slidenav-next></router-link>
    </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: ['pagination'],
  }
</script>

<style scoped>
.wide {
    display: flex;
    justify-content: flex-end;
}
</style>
