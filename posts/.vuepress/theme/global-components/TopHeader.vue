<template>
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
</template>

<script>
  export default {
    name: "TopHeader",
    data() {
      return {
        date: new Date().toLocaleDateString('PL-pl', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        socials: {
          facebook: '#',
          instagram: '#',
          twitter: "#"
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
</style>
