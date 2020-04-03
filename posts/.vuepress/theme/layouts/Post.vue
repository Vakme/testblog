<template>
    <div>
        <!-- TODO: slot for header + post meta -->
        <div class="theme-container">
            <Content/>
        </div>
        <div class="wide">
            <hr class="uk-divider-icon">
            <h3>Author:</h3>
        </div>
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
            }
        }
    }
</script>