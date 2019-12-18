<template>
    <div id="Header">
        <header class="wide-container">
            <img :src="$withBase('/web-logo-small.png')" alt="logo">
        </header>
        <nav class="main-menu">
            <MenuItem v-for="category in $category._metaMap"
                      :item="category"
            ></MenuItem>
        </nav>
    </div>
</template>

<script>
    import MenuItem from "../components/MenuItem";

  export default {
    name: "TheHeader",
    components: {MenuItem}
  }
</script>

<style scoped>
    .main-menu {
        display: flex;
        width: 100vw;
        padding: 0 10vw;
        border-bottom: 2px solid black;
    }
</style>
