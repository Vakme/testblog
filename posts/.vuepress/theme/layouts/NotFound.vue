<template>
    <div class="container">
        <img :src="$withBase('/404.svg')" alt="404">
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        align-content: center;
        justify-content: center;
    }
    img {
        max-width: 60vw;
    }
</style>
