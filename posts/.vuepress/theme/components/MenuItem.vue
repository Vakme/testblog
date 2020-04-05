<template>
    <div class="menu-item-container">
        <div class="menu-item">
            <span>
                <router-link :to="item.path" class="menu-item-key">{{ item.key }}</router-link>
            </span>
        </div>
        <div class="uk-width-auto@m" uk-drop>
            <div class=" uk-drop-grid menu-item-dropdown uk-slidenav-container" uk-grid>
                    <span class="menu-item-dropdown-item previous arrow" v-if="hasPrev()" @click="decrementIndex()" uk-slidenav-previous></span>
                        <router-link v-for="page in filtered(item.pages)" :to="page.path"
                                 class="menu-item-dropdown-item menu-item-link">
                        <span v-if="page.frontmatter.image">
                            <img :src="$withBase(page.frontmatter.image)" :alt="page.title"
                                 class="menu-item-dropdown-image">
                        </span>
                        <span class="menu-item-dropdown-key">{{page.title}}</span>
                        <span class="menu-item-dropdown-date">{{calculateDate(page.path)}}</span>
                        </router-link>
                    <span class="menu-item-dropdown-item next arrow" v-if="hasNext()" @click="incrementIndex()" uk-slidenav-next></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: ['item'],
        data() {
            return {
                hover: false,
                index: 0
            }
        },
        methods: {
            calculateDate(str) {
                const divided = str.split('/');
                return new Date(divided[1], divided[2] - 1, divided[3]).toLocaleDateString('PL-pl', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
            },
            filtered: function (pages) {
                return pages.filter((el, ind) => ind >= this.index && ind < this.index + 3);
            },
            hasPrev() {
                return this.index > 0;
            },
            hasNext() {
                return this.item.pages.length > 3 && this.index < this.item.pages.length - 3 ;
            },
            incrementIndex() {
                this.index++;
            },
            decrementIndex() {
                this.index--;
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

    .menu-drop {
        width: 750px;
    }

    .menu-item-dropdown {
        background-color: white;
        border-top: 3px solid black;
        border-bottom: 1px solid black;
        max-width: 80vw;
    }

    .menu-item-dropdown-item {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .menu-item-link {
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

    @media (max-width: 960px) {
        .menu-item-dropdown {
            position: fixed;
            left: 10vw;
        }

        .menu-item-dropdown-date {
            position: relative;
            bottom: 12px;
        }
    }
    .arrow {
        width: 20px;
        cursor: pointer;
    }

</style>
