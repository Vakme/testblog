<template>
    <div class="uk-slidenav-container wide">
        <div class="previous arrow" v-if="pagination.hasPrev">
            <router-link :to="pagination.prevLink" uk-slidenav-previous></router-link>
        </div>
        <div class="next arrow" v-if="pagination.hasNext">
            <router-link :to="pagination.nextLink" uk-slidenav-next></router-link>
        </div>
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
