(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(t,a,e){},201:function(t,a,e){},202:function(t,a,e){"use strict";var s=e(200);e.n(s).a},203:function(t,a,e){"use strict";var s=e(201);e.n(s).a},204:function(t,a,e){"use strict";e(63);var s={name:"Masonry",props:["posts"],methods:{calculateDate:function(t){var a=t.split("/");return new Date(a[1],a[2]-1,a[3]).toLocaleDateString("PL-pl",{year:"numeric",month:"long",day:"numeric"})}}},r=(e(202),e(3)),i=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-grid-medium uk-child-width-1-3@m",attrs:{"uk-grid":"masonry: true"}},t._l(t.posts,(function(a){return e("span",[e("div",{staticClass:"uk-card uk-card-default"},[a.frontmatter.image?e("img",{attrs:{src:t.$withBase(a.frontmatter.image),alt:a.title}}):t._e(),t._v(" "),e("div",{staticClass:"post-card"},[t._l(a.frontmatter.category,(function(a){return e("router-link",{attrs:{to:"/category/"+a}},[e("span",{staticClass:"uk-label"},[t._v(t._s(a.toLocaleUpperCase()))])])})),t._v(" "),e("h3",{staticClass:"uk-card-title"},[e("router-link",{staticClass:"uk-link-heading",attrs:{to:a.path}},[t._v(t._s(a.title))])],1),t._v("\n                "+t._s(t.calculateDate(a.path))+"\n                "),e("div",{staticClass:"tags"},t._l(a.frontmatter.tag,(function(a){return e("router-link",{attrs:{to:"/tag/"+a}},[t._v("\n                        #"+t._s(a)+"\n                    ")])})),1)],2)])])})),0)}),[],!1,null,"326a5291",null);a.a=i.exports},205:function(t,a,e){"use strict";var s={name:"Pagination",props:["pagination"]},r=(e(203),e(3)),i=Object(r.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-slidenav-container"},[this.pagination.hasPrev?a("router-link",{staticClass:"previous arrow",attrs:{to:this.pagination.prevLink,"uk-slidenav-previous":""}}):this._e(),this._v(" "),this.pagination.hasNext?a("router-link",{staticClass:"next arrow",attrs:{to:this.pagination.nextLink,"uk-slidenav-next":""}}):this._e()],1)}),[],!1,null,"282ce74a",null);a.a=i.exports},206:function(t,a,e){"use strict";var s=e(4),r=e(44)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),s(s.P+s.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(64)("find")},210:function(t,a,e){},212:function(t,a,e){"use strict";var s={name:"AuthorBox",props:["author"],methods:{getIconClassName:function(t){return"website"===t?"fas fa-globe":"fab fa-".concat(t)}}},r=e(3),i=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.author?e("article",{staticClass:"uk-comment"},[e("header",{staticClass:"uk-comment-header uk-grid-medium uk-flex-middle",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-auto"},[e("img",{staticClass:"uk-comment-avatar",attrs:{src:t.$withBase("/"+t.author.frontmatter.image),alt:t.author.frontmatter.id,width:"80",height:"80"}})]),t._v(" "),e("div",{staticClass:"uk-width-expand"},[e("h4",{staticClass:"uk-comment-title uk-margin-remove"},[t._v(t._s(t.author.frontmatter.full_name))]),t._v(" "),e("ul",{staticClass:"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top"},t._l(t.author.frontmatter.links,(function(a){return e("li",[e("a",{attrs:{href:a.link}},[e("i",{class:t.getIconClassName(a.icon)})])])})),0)])]),t._v(" "),e("div",{staticClass:"uk-comment-body"},[e("p",[t._v(t._s(t.author.frontmatter.description))])])]):t._e()}),[],!1,null,"0da36e56",null);a.a=i.exports},216:function(t,a,e){"use strict";var s=e(210);e.n(s).a},219:function(t,a,e){"use strict";e.r(a);e(63),e(206);var s=e(204),r=e(205),i={name:"Post",components:{AuthorBox:e(212).a,Masonry:s.a,Pagination:r.a},computed:{author:function(){var t=this;return this.$site.pages.find((function(a){return"author_meta"===a.pid&&t.$page.frontmatter.author===a.frontmatter.id}))},date:function(){var t=this.$page.path.split("/");return new Date(parseInt(t[1]),t[2]-1,parseInt(t[3])).toLocaleDateString("PL-pl",{year:"numeric",month:"long",day:"numeric"})}}},n=(e(216),e(3)),o=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post"},[e("header",{staticClass:"medium-wide"},[e("h1",[t._v(t._s(t.$page.title))]),t._v(" "),e("hr",{staticClass:"uk-divider-small"}),t._v(" "),e("div",{staticClass:"uk-text-meta uk-subnav uk-subnav-divider uk-margin-remove-top"},[e("li",[t._v(t._s(t.$page.readingTime.text))]),t._v(" "),e("li",[t._v("By "),e("router-link",{staticClass:"post-header-link",attrs:{to:"/author/"+this.$page.frontmatter.author}},[t._v(t._s(t.$page.frontmatter.author)+" ")])],1),t._v(" "),e("li",[t._v(t._s(t.date))]),t._v(" "),e("li",t._l(t.$page.frontmatter.category,(function(a){return e("router-link",{attrs:{to:"/category/"+a}},[t._v("\n                    "+t._s(a.toLocaleUpperCase())+"\n                ")])})),1)]),t._v(" "),e("hr",{staticClass:"uk-divider-small"}),t._v(" "),e("img",{staticClass:"uk-align-center",attrs:{src:t.$withBase(t.$page.frontmatter.image),alt:t.$page.title}})]),t._v(" "),e("div",{staticClass:"text-container"},[e("main",[e("Content")],1)]),t._v(" "),e("footer",{staticClass:"medium-wide"},[e("div",{staticClass:"tags"},[e("span",{staticClass:"uk-badge tags-header"},[t._v("TAGS:")]),t._v(" "),t._l(t.$page.frontmatter.tag,(function(a){return e("router-link",{attrs:{to:"/tag/"+a}},[e("span",{staticClass:"uk-badge tag"},[t._v(t._s(a))])])}))],2),t._v(" "),e("h3",[t._v("Share on social media:")]),t._v(" "),e("social-share")],1),t._v(" "),e("div",{staticClass:"wide"},[e("hr",{staticClass:"uk-divider-icon"}),t._v(" "),e("h3",[t._v("Author:")]),t._v(" "),e("AuthorBox",{attrs:{author:t.author}})],1)])}),[],!1,null,null,null);a.default=o.exports}}]);