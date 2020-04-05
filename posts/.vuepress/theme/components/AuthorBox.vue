<template>
    <article v-if="author" class="uk-comment">
        <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-comment-avatar" :src="$withBase('/' + author.frontmatter.image)" :alt="author.frontmatter.id" width="80" height="80">
            </div>
            <div class="uk-width-expand">
                <h4 class="uk-comment-title uk-margin-remove">{{author.frontmatter.full_name}}</h4>
                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li v-for="item in author.frontmatter.links"><a :href="item.link"><i :class="getIconClassName(item.icon)"></i></a></li>
                </ul>
            </div>
        </header>
        <div class="uk-comment-body">
            <p>{{author.frontmatter.description}}</p>
        </div>
    </article>
</template>

<script>
    export default {
        name: "AuthorBox",
        props: ["author"],
        methods: {
            getIconClassName(icon) {
                return icon === 'website' ? 'fas fa-globe' : `fab fa-${icon}`;
            }
        }
    }
</script>

<style scoped>

</style>