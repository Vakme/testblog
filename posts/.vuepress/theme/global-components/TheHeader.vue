<template>
    <div id="Header">
        <div id="TopHeader" class="u-full-width top-header">
            <div class="wide-container">
                <div class="header-right">
                    {{date}}
                    <span class="links">
                    <router-link class="page-link" :to="page.path" v-for="page in filteredPages">{{ page.title }}</router-link>
                </span>
                </div>
                <div class="social-icons"><a :href="socials[key]" v-for="key in Object.keys(socials)" class="social-icon"><i :class="`fab fa-${key}`"></i></a></div>
            </div>
        </div>
        <header class="wide-container">
            <router-link to="/" exact><img class="uk-logo" :src="$withBase('/web-logo-small.png')" alt="logo"></router-link>
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
    import { Responsive } from "vue-responsive-components"


    export default {
    name: "TheHeader",
    components: {MenuItem, Responsive},
    data() {
      return {
        date: new Date().toLocaleDateString('PL-pl', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        socials: {
          facebook: '#',
          instagram: '#',
          twitter: "#"
        },
        breakpoints: {
          big: el => el.width > 750
        }
      };
    },
    computed: {
      filteredPages: function() {
        return this.$site.pages.filter(page => page.pid === 'page');
      }
    }
  }
</script>

<style scoped>
    .top-header {
        background-color: black;
        color: white;
        padding: 5px 0;
        font-size: 0.8em;
    }
    .links {
        margin-left: 20px;
    }
    .page-link {
        margin: 0 5px;
        color: white;
        text-decoration: none;
    }
    .social-icon {
        margin: 0 5px;
        color: white;
    }
    .main-menu {
        display: flex;
        padding: 0 10vw;
    }
</style>
