<template>
    <div class="post">
        <header class="medium-wide">
            <h1>{{$page.title}}</h1>
            <hr class="uk-divider-small">
            <div class="uk-text-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li>{{$page.readingTime.text}}</li>
                <li>By <router-link class="post-header-link" :to="`/author/${this.$page.frontmatter.author}`">{{$page.frontmatter.author}} </router-link></li>
                <li>{{date}}</li>
                <li>
                    <router-link v-for="cat in $page.frontmatter.category" :to="`/category/${cat}`">
                        {{cat.toLocaleUpperCase()}}
                    </router-link>
                </li>
            </div>
            <hr class="uk-divider-small">
            <img class="uk-align-center" :src="$withBase($page.frontmatter.image)" :alt="$page.title">
        </header>
        <div class="text-container">
        <main>
            <Content/>
        </main>
        </div>
        <footer class="medium-wide">
            <div class="tags">
                <span class="uk-badge tags-header">TAGS:</span>
                <router-link v-for="tag in $page.frontmatter.tag" :to="`/tag/${tag}`">
                   <span class="uk-badge tag">{{tag}}</span>
                </router-link>
                </div>
            <h3>Share on social media:</h3>
            <social-share/>
        </footer>
        <div class="wide">
            <hr class="uk-divider-icon">
            <h3>Author:</h3>
            <AuthorBox :author="author"></AuthorBox>
        </div>
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
    .medium-wide {
        width: 70vw;
        margin: 50px 15vw;
    }

    .tags {
        span {
            margin: 0 5px;
        }
        .uk-badge {
            background-color: white;
            font-size: 0.75em;
            padding: 12px;
            border: 2px solid #ebebeb;
            color: #666;
            font-weight: bold;
            text-transform: uppercase;
            &:hover, &:focus {
                color: #81ac87;
            }
        }

        .tags-header {
            border-color: #81ac87;
            color: #81ac87;
            &:hover, &:focus {
                color: #81ac87;
            }
        }
    }
</style>