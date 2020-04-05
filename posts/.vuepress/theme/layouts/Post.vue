<template>
    <div>
        <!-- TODO: slot for header + post meta -->
        <header class="theme-container">
            <h1>{{$page.title}}</h1>
            <hr class="uk-divider-small">
            <div class="uk-text-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li>{{$page.readingTime.text}}</li>
                <li>By <router-link class="post-header-link" :to="`/author/${this.$page.frontmatter.author}`">{{$page.frontmatter.author}} </router-link></li>
                <li>{{date}}</li>
            </div>
            <img :src="$withBase('/' + $page.frontmatter.image)" :alt="$page.title">
            {{$page.frontmatter}}
        </header>
        <main class="theme-container">
            <Content/>
        </main>
        <footer class="wide">
            <hr class="uk-divider-icon">
            <h3>Author:</h3>
        </footer>
        <AuthorBox :author="author"></AuthorBox>
    </div>
</template>

<script>
    import Masonry from '../components/Masonry'
    import Pagination from '../components/Pagination'
    import AuthorBox from "../components/AuthorBox";

    export default {
        name: "Post",
        components: {
            AuthorBox,
            Masonry,
            Pagination
        },
        computed: {
            author: function() {
                return this.$site.pages.find(page => page.pid === 'author_meta'
                    && this.$page.frontmatter.author === page.frontmatter.id);
            },
            date: function() {
                const divided = this.$page.path.split('/');
                return new Date(parseInt(divided[1]), divided[2]-1, parseInt(divided[3])).toLocaleDateString('PL-pl', { year: 'numeric', month: 'long', day: 'numeric' })
            }
        }
    }
</script>

<style lang="scss">
    a.post-header-link{
        margin: 0 5px;
        text-decoration: none;
        border-bottom: none;
        text-transform: none !important;
    }
</style>