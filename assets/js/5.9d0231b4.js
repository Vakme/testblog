(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{338:function(t,a,s){},339:function(t,a,s){},340:function(t,a,s){"use strict";s(338)},341:function(t,a,s){"use strict";s(339)},342:function(t,a,s){"use strict";s(42),s(32),s(116);var n={name:"Masonry",props:["posts"],methods:{calculateDate:function(t){var a=t.split("/");return new Date(a[1],a[2]-1,a[3]).toLocaleDateString("PL-pl",{year:"numeric",month:"long",day:"numeric"})}}},i=(s(340),s(7)),e=Object(i.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"uk-grid-medium uk-child-width-1-3@m",attrs:{"uk-grid":"masonry: true"}},t._l(t.posts,(function(a){return s("span",[s("div",{staticClass:"uk-card uk-card-default"},[a.frontmatter.image?s("img",{attrs:{src:t.$withBase(a.frontmatter.image),alt:a.title}}):t._e(),t._v(" "),s("div",{staticClass:"post-card"},[t._l(a.frontmatter.category,(function(a){return s("router-link",{attrs:{to:"/category/"+a}},[s("span",{staticClass:"uk-label"},[t._v(t._s(a.toLocaleUpperCase()))])])})),t._v(" "),s("h3",{staticClass:"uk-card-title"},[s("router-link",{staticClass:"uk-link-heading",attrs:{to:a.path}},[t._v(t._s(a.title))])],1),t._v("\n                "+t._s(t.calculateDate(a.path))+"\n                "),s("div",{staticClass:"tags"},t._l(a.frontmatter.tag,(function(a){return s("router-link",{attrs:{to:"/tag/"+a}},[t._v("\n                        #"+t._s(a)+"\n                    ")])})),1)],2)])])})),0)}),[],!1,null,"326a5291",null);a.a=e.exports},343:function(t,a,s){"use strict";var n={name:"Pagination",props:["pagination"]},i=(s(341),s(7)),e=Object(i.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-slidenav-container"},[this.pagination.hasPrev?a("router-link",{staticClass:"previous arrow",attrs:{to:this.pagination.prevLink,"uk-slidenav-previous":""}}):this._e(),this._v(" "),this.pagination.hasNext?a("router-link",{staticClass:"next arrow",attrs:{to:this.pagination.nextLink,"uk-slidenav-next":""}}):this._e()],1)}),[],!1,null,"282ce74a",null);a.a=e.exports},344:function(t,a,s){"use strict";var n={name:"AuthorBox",props:["author"],methods:{getIconClassName:function(t){return"website"===t?"fas fa-globe":"fab fa-".concat(t)}}},i=s(7),e=Object(i.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.author?s("article",{staticClass:"uk-comment"},[s("header",{staticClass:"uk-comment-header uk-grid-medium uk-flex-middle",attrs:{"uk-grid":""}},[s("div",{staticClass:"uk-width-auto"},[s("img",{staticClass:"uk-comment-avatar",attrs:{src:t.$withBase("/"+t.author.frontmatter.image),alt:t.author.frontmatter.id,width:"80",height:"80"}})]),t._v(" "),s("div",{staticClass:"uk-width-expand"},[s("h4",{staticClass:"uk-comment-title uk-margin-remove"},[t._v(t._s(t.author.frontmatter.full_name))]),t._v(" "),s("ul",{staticClass:"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top"},t._l(t.author.frontmatter.links,(function(a){return s("li",[s("a",{attrs:{href:a.link}},[s("i",{class:t.getIconClassName(a.icon)})])])})),0)])]),t._v(" "),s("div",{staticClass:"uk-comment-body"},[s("p",[t._v(t._s(t.author.frontmatter.description))])])]):t._e()}),[],!1,null,"0da36e56",null);a.a=e.exports},362:function(t,a,s){"use strict";s.r(a);s(200);var n=s(342),i=s(343),e={name:"Auhor",components:{AuthorBox:s(344).a,Masonry:n.a,Pagination:i.a},computed:{author:function(){var t=this;return this.$site.pages.find((function(a){return"author_meta"===a.pid&&t.$page.path==="/author/".concat(a.frontmatter.id,"/")}))}}},r=s(7),o=Object(r.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"wide"},[a("AuthorBox",{attrs:{author:this.author}}),this._v(" "),a("Masonry",{attrs:{posts:this.$pagination._matchedPages}}),this._v(" "),a("pagination",{attrs:{pagination:this.$pagination}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);