(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(t,a,n){},201:function(t,a,n){},202:function(t,a,n){"use strict";var s=n(200);n.n(s).a},203:function(t,a,n){"use strict";var s=n(201);n.n(s).a},204:function(t,a,n){"use strict";n(63);var s={name:"Masonry",props:["posts"],methods:{calculateDate:function(t){var a=t.split("/");return new Date(a[1],a[2]-1,a[3]).toLocaleDateString("PL-pl",{year:"numeric",month:"long",day:"numeric"})}}},i=(n(202),n(3)),e=Object(i.a)(s,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"wide uk-grid-medium uk-child-width-1-3@m",attrs:{"uk-grid":"masonry: true"}},t._l(t.posts,(function(a){return n("span",[n("div",{staticClass:"uk-card uk-card-default"},[n("img",{attrs:{src:t.$withBase("/"+a.frontmatter.image),alt:a.title}}),t._v(" "),n("div",{staticClass:"post-card"},[t._l(a.frontmatter.category,(function(a){return n("router-link",{attrs:{to:"/category/"+a}},[n("span",{staticClass:"uk-label"},[t._v(t._s(a.toLocaleUpperCase()))])])})),t._v(" "),n("h3",{staticClass:"uk-card-title"},[n("router-link",{staticClass:"uk-link-heading",attrs:{to:a.path}},[t._v(t._s(a.title))])],1),t._v("\n                "+t._s(t.calculateDate(a.path))+"\n                "),n("div",{staticClass:"tags"},t._l(a.frontmatter.tag,(function(a){return n("router-link",{attrs:{to:"/tag/"+a}},[t._v("\n                        #"+t._s(a)+"\n                    ")])})),1)],2)])])})),0)}),[],!1,null,"2e9505d5",null);a.a=e.exports},205:function(t,a,n){"use strict";var s={name:"Pagination",props:["pagination"]},i=(n(203),n(3)),e=Object(i.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-slidenav-container wide"},[this.pagination.hasPrev?a("router-link",{staticClass:"previous arrow",attrs:{to:this.pagination.prevLink,"uk-slidenav-previous":""}}):this._e(),this._v(" "),this.pagination.hasNext?a("router-link",{staticClass:"next arrow",attrs:{to:this.pagination.nextLink,"uk-slidenav-next":""}}):this._e()],1)}),[],!1,null,"8990df6e",null);a.a=e.exports},218:function(t,a,n){"use strict";n.r(a);var s=n(204),i=n(205),e={name:"Tag",components:{Masonry:s.a,Pagination:i.a}},r=n(3),o=Object(r.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("Masonry",{attrs:{posts:this.$pagination._matchedPages}}),this._v(" "),a("pagination",{attrs:{pagination:this.$pagination}})],1)}),[],!1,null,null,null);a.default=o.exports}}]);