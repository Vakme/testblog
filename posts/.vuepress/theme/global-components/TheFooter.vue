<template>
    <footer class="wide">
        <div class="tags">
            <span class="tag" v-for="tag of $tag._metaMap" :style="`font-size: ${12 + 2*tag.pages.length}px`">
                    <router-link class="uk-link-text" :to="tag.path">
                        #{{tag.key}}
                    </router-link>
            </span>
        </div>
    </footer>
</template>

<script>
  export default {
    name: "TheFooter"
  }
</script>

<style scoped>

</style>
