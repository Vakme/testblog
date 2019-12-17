<template>
    <div id="TopHeader" class="u-full-width top-header">
        <div class="wide-container">
            <div class="date">{{date}}</div>
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
        },
        mounted() {
          console.log(this.$site)
        }
      };
    }
  }
</script>

<style scoped>
.top-header {
    background-color: #9fccfb;
}
    .wide-container {
        width: 90vw;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    .social-icon {
        margin: 0 5px;
        color: black;
    }
</style>
