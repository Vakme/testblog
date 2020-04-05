<template>
    <div class="wide uk-grid-medium uk-child-width-1-3@m" uk-grid="masonry: true">
        <span v-for="item of posts">
            <div class="uk-card uk-card-default">
                <img :src="$withBase(item.frontmatter.image)" :alt="item.title">
                <div class="post-card">
                    <router-link v-for="cat in item.frontmatter.category" :to="`/category/${cat}`">
                        <span class="uk-label">{{cat.toLocaleUpperCase()}}</span>
                    </router-link>
                    <h3 class="uk-card-title"><router-link class="uk-link-heading" :to="item.path">{{item.title}}</router-link></h3>
                    {{calculateDate(item.path)}}
                    <div class="tags">
                        <router-link v-for="tag in item.frontmatter.tag" :to="`/tag/${tag}`">
                            #{{tag}}
                        </router-link>
                    </div>
                </div>
            </div>
        </span>
    </div>
</template>

<script>
  export default {
    name: "Masonry",
    props: ['posts'],
    methods: {
      calculateDate(str) {
        const divided = str.split('/');
        return new Date(divided[1], divided[2]-1, divided[3]).toLocaleDateString('PL-pl', { year: 'numeric', month: 'long', day: 'numeric' })
      }
    }
  }
</script>

<style scoped>
.post-card {
    padding: 30px;
}

.uk-card-title {
    margin-top: 10px;
}
</style>
