<template>
    <footer>
        <div class="footer-container">
            <div class="uk-flex uk-flex-center uk-flex-middle" >
                <router-link to="/" exact><img class="uk-logo" :src="$withBase('/web-logo-small-white.png')" alt="logo"></router-link>
            </div>
            <div class="tags">
                <span class="tag" v-for="tag of $tag._metaMap" :style="`font-size: ${12 + 2*tag.pages.length}px`">
                        <router-link class="uk-link-text" :to="tag.path">
                            #{{tag.key}}
                        </router-link>
                </span>
            </div>
            <hr class="uk-divider-icon divider">
            <div class="uk-flex uk-flex-center uk-flex-middle uk-text-small">© Basement Code, {{year}}. Wszelkie prawa zastrzeżone</div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: "TheFooter",
      computed: {
        year: function () {
            return new Date().getFullYear();
        }
      }
  }
</script>

<style lang="scss" scoped>
    footer {
        background-color: black;
        height: 300px;
        &:before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 300px;
            background-repeat: no-repeat;
            opacity: 0.16;
            background-position: center center;
            background-size: cover;
            background-image: url("/testblog/background.jpg");
            z-index: 1;
         }
    }
    .footer-container {
        padding: 50px 9vw 0 9vw;
        color: white;
        z-index: 100;
        position: absolute;
        width: 80vw;
    }
    .divider {
        opacity: 0.2;
    }
</style>
