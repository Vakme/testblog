<template>
    <div class="menu-item-container"
         @mouseover="hover = true"
         @mouseleave="hover = false">
    <div class="menu-item">
        <span>
            <router-link :to="item.path" class="menu-item-key">{{ item.key }}</router-link>
        </span>
    </div>
        <div v-if="hover" class="menu-item-dropdown">
            <router-link v-for="page in item.pages" :to="page.path" class="menu-item-dropdown-item uk-column-1-3">
                    <span v-if="page.frontmatter.image">
                        <img :src="$withBase('/' + page.frontmatter.image)" :alt="page.title" class="menu-item-dropdown-image">
                    </span>
                    <span class="menu-item-dropdown-key">{{page.title}}</span>
                    <span class="menu-item-dropdown-date">{{calculateDate(page.path)}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MenuItem",
    props: ['item'],
    data() {
      return {
        hover: false
      }
    },
    methods: {
      calculateDate(str) {
        const divided = str.split('/');
        return new Date(divided[1], divided[2]-1, divided[3]).toLocaleDateString('PL-pl', { year: 'numeric', month: 'long', day: 'numeric' })
      }
    }
  }
</script>

<style scoped>
    .menu-item {
        padding: 5px 15px;
        position: relative;
    }
    .menu-item-key {
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: none;
        color: black;
    }
    .menu-item-dropdown {
        position: absolute;
        left: 10vw;
        background-color: white;
        display: flex;
        border-top: 3px solid black;
        border-bottom: 1px solid black;
    }

    .menu-item-dropdown-item {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-decoration: none;
        color: black;
    }

    img.menu-item-dropdown-image {
        height: 100px;
        max-width: none;
        width: auto;
    }
    .menu-item-dropdown-key {
        text-align: center;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 15px;
    }
    .menu-item-dropdown-date {
        position: absolute;
        bottom: -12px;
        background-color: #e1e1e1;
        font-size: 0.8em;
        padding: 2px 5px;
    }

</style>
