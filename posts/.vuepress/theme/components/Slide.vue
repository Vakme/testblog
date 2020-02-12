<template>
    <li>
        <img :src="$withBase('/' + item.frontmatter.image)" :alt="item.title"  uk-cover>
        <div class="uk-position-bottom-left uk-position-small">
            <div class="uk-card uk-card-body uk-card-default">
                <router-link v-for="cat in item.frontmatter.category" :to="`/category/${cat}`">
                    <span class="uk-label">{{cat.toLocaleUpperCase()}}</span>
                </router-link>
                <h3 class="uk-card-title"><router-link class="uk-link-heading" :to="item.path">{{item.title}}</router-link></h3>
                <div class="tags">
                    <router-link v-for="tag in item.frontmatter.tag" :to="`/tag/${tag}`">
                        #{{tag}}
                    </router-link>
                </div>
                {{calculateDate(item.path)}}
            </div>

        </div>
    </li>
</template>

<script>
  export default {
    name: "Slide",
    props: ['item'],
    methods: {
      calculateDate(str) {
        const divided = str.split('/');
        return new Date(divided[1], divided[2]-1, divided[3]).toLocaleDateString('PL-pl', { year: 'numeric', month: 'long', day: 'numeric' })
      }
    }
  }
</script>

<style scoped>
    .uk-card-title {
        margin-top: 0;
    }
</style>
