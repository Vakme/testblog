(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{72:function(t,a,i){},73:function(t,a,i){},74:function(t,a,i){},75:function(t,a,i){"use strict";var e=i(72);i.n(e).a},76:function(t,a,i){"use strict";var e=i(73);i.n(e).a},77:function(t,a,i){},79:function(t,a,i){"use strict";i(32);var e={name:"Masonry",props:["posts"],methods:{calculateDate:function(t){var a=t.split("/");return new Date(a[1],a[2]-1,a[3]).toLocaleDateString("PL-pl",{year:"numeric",month:"long",day:"numeric"})}}},s=(i(75),i(3)),n=Object(s.a)(e,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"wide uk-grid-medium",attrs:{"uk-grid":"masonry: true"}},t._l(t.posts,(function(a){return i("div",{staticClass:"uk-width-1-3@m"},[i("div",{staticClass:"uk-card uk-card-default"},[i("img",{attrs:{src:t.$withBase("/"+a.frontmatter.image),alt:a.title}}),t._v(" "),i("div",{staticClass:"post-card"},[t._l(a.frontmatter.category,(function(a){return i("router-link",{attrs:{to:"/category/"+a}},[i("span",{staticClass:"uk-label"},[t._v(t._s(a.toLocaleUpperCase()))])])})),t._v(" "),i("h3",{staticClass:"uk-card-title"},[i("router-link",{staticClass:"uk-link-heading",attrs:{to:a.path}},[t._v(t._s(a.title))])],1),t._v("\n                "+t._s(t.calculateDate(a.path))+"\n                "),i("div",{staticClass:"tags"},t._l(a.frontmatter.tag,(function(a){return i("router-link",{attrs:{to:"/tag/"+a}},[t._v("\n                        #"+t._s(a)+"\n                    ")])})),1)],2)])])})),0)}),[],!1,null,"393fbc65",null);a.a=n.exports},80:function(t,a,i){"use strict";var e={name:"Pagination",props:["pagination"]},s=(i(76),i(3)),n=Object(s.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-slidenav-container wide"},[this.pagination.hasPrev?a("router-link",{staticClass:"previous arrow",attrs:{to:this.pagination.prevLink,"uk-slidenav-previous":""}}):this._e(),this._v(" "),this.pagination.hasNext?a("router-link",{staticClass:"next arrow",attrs:{to:this.pagination.nextLink,"uk-slidenav-next":""}}):this._e()],1)}),[],!1,null,"8990df6e",null);a.a=n.exports},81:function(t,a,i){"use strict";var e=i(74);i.n(e).a},82:function(t,a,i){"use strict";var e=i(77);i.n(e).a},84:function(t,a,i){"use strict";i.r(a);i(33),i(32);var e={name:"Slide",props:["item"],methods:{calculateDate:function(t){var a=t.split("/");return new Date(a[1],a[2]-1,a[3]).toLocaleDateString("PL-pl",{year:"numeric",month:"long",day:"numeric"})}}},s=(i(81),i(3)),n={name:"Slider",components:{Slide:Object(s.a)(e,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("li",[i("img",{attrs:{src:t.$withBase("/"+t.item.frontmatter.image),alt:t.item.title,"uk-cover":""}}),t._v(" "),i("div",{staticClass:"uk-position-bottom-left uk-position-small"},[i("div",{staticClass:"uk-card uk-card-body uk-card-default"},[t._l(t.item.frontmatter.category,(function(a){return i("router-link",{attrs:{to:"/category/"+a}},[i("span",{staticClass:"uk-label"},[t._v(t._s(a.toLocaleUpperCase()))])])})),t._v(" "),i("h3",{staticClass:"uk-card-title"},[i("router-link",{staticClass:"uk-link-heading",attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),i("div",{staticClass:"tags"},t._l(t.item.frontmatter.tag,(function(a){return i("router-link",{attrs:{to:"/tag/"+a}},[t._v("\n                    #"+t._s(a)+"\n                ")])})),1),t._v("\n            "+t._s(t.calculateDate(t.item.path))+"\n        ")],2)])])}),[],!1,null,"b12bbc56",null).exports},computed:{filteredPosts:function(){return this.$site.pages.filter((function(t){return"post"===t.pid}))}}},r=Object(s.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"wide",attrs:{"uk-slideshow":"ratio: 8:3; autoplay: true; autoplay-interval: 5000"}},[a("ul",{staticClass:"uk-slideshow-items"},this._l(this.filteredPosts,(function(t){return a("Slide",{attrs:{item:t}})})),1),this._v(" "),a("ul",{staticClass:"uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"})])}),[],!1,null,"2c125b12",null).exports,l=i(79),o=i(80),u={components:{Slider:r,Masonry:l.a,Pagination:o.a}},c=(i(82),Object(s.a)(u,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("Slider"),t._v(" "),i("Masonry",{attrs:{posts:t.$pagination.pages,index:t.$pagination.paginationIndex}}),t._v(" "),i("pagination",{attrs:{pagination:t.$pagination}}),t._v(" "),i("div",{staticClass:"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light",attrs:{"data-src":t.$withBase("/about.jpg"),"uk-parallax":"bgy: -300","uk-img":""}},[i("div",{staticClass:"back"}),t._v(" "),i("h1",{staticClass:"uk-position-z-index"},[i("router-link",{staticClass:"uk-link-heading",attrs:{to:"/about"}},[t._v("Meet the team")])],1)])],1)}),[],!1,null,"7cae95d6",null));a.default=c.exports}}]);