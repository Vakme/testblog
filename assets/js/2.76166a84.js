(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{338:function(t,a,e){},339:function(t,a,e){},340:function(t,a,e){"use strict";e(338)},341:function(t,a,e){"use strict";e(339)},342:function(t,a,e){"use strict";e(42),e(32),e(116);var r={name:"Masonry",props:["posts"],methods:{calculateDate:function(t){var a=t.split("/");return new Date(a[1],a[2]-1,a[3]).toLocaleDateString("PL-pl",{year:"numeric",month:"long",day:"numeric"})}}},s=(e(340),e(7)),n=Object(s.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-grid-medium uk-child-width-1-3@m",attrs:{"uk-grid":"masonry: true"}},t._l(t.posts,(function(a){return e("span",[e("div",{staticClass:"uk-card uk-card-default"},[a.frontmatter.image?e("img",{attrs:{src:t.$withBase(a.frontmatter.image),alt:a.title}}):t._e(),t._v(" "),e("div",{staticClass:"post-card"},[t._l(a.frontmatter.category,(function(a){return e("router-link",{attrs:{to:"/category/"+a}},[e("span",{staticClass:"uk-label"},[t._v(t._s(a.toLocaleUpperCase()))])])})),t._v(" "),e("h3",{staticClass:"uk-card-title"},[e("router-link",{staticClass:"uk-link-heading",attrs:{to:a.path}},[t._v(t._s(a.title))])],1),t._v("\n                "+t._s(t.calculateDate(a.path))+"\n                "),e("div",{staticClass:"tags"},t._l(a.frontmatter.tag,(function(a){return e("router-link",{attrs:{to:"/tag/"+a}},[t._v("\n                        #"+t._s(a)+"\n                    ")])})),1)],2)])])})),0)}),[],!1,null,"326a5291",null);a.a=n.exports},343:function(t,a,e){"use strict";var r={name:"Pagination",props:["pagination"]},s=(e(341),e(7)),n=Object(s.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uk-slidenav-container"},[this.pagination.hasPrev?a("router-link",{staticClass:"previous arrow",attrs:{to:this.pagination.prevLink,"uk-slidenav-previous":""}}):this._e(),this._v(" "),this.pagination.hasNext?a("router-link",{staticClass:"next arrow",attrs:{to:this.pagination.nextLink,"uk-slidenav-next":""}}):this._e()],1)}),[],!1,null,"282ce74a",null);a.a=n.exports},344:function(t,a,e){"use strict";var r={name:"AuthorBox",props:["author"],methods:{getIconClassName:function(t){return"website"===t?"fas fa-globe":"fab fa-".concat(t)}}},s=e(7),n=Object(s.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.author?e("article",{staticClass:"uk-comment"},[e("header",{staticClass:"uk-comment-header uk-grid-medium uk-flex-middle",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-auto"},[e("img",{staticClass:"uk-comment-avatar",attrs:{src:t.$withBase("/"+t.author.frontmatter.image),alt:t.author.frontmatter.id,width:"80",height:"80"}})]),t._v(" "),e("div",{staticClass:"uk-width-expand"},[e("h4",{staticClass:"uk-comment-title uk-margin-remove"},[t._v(t._s(t.author.frontmatter.full_name))]),t._v(" "),e("ul",{staticClass:"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top"},t._l(t.author.frontmatter.links,(function(a){return e("li",[e("a",{attrs:{href:a.link}},[e("i",{class:t.getIconClassName(a.icon)})])])})),0)])]),t._v(" "),e("div",{staticClass:"uk-comment-body"},[e("p",[t._v(t._s(t.author.frontmatter.description))])])]):t._e()}),[],!1,null,"0da36e56",null);a.a=n.exports},348:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},349:function(t,a,e){},354:function(t,a,e){var r=e(1),s=e(355);r({global:!0,forced:parseInt!=s},{parseInt:s})},355:function(t,a,e){var r=e(5),s=e(356).trim,n=e(348),i=r.parseInt,o=/^[+-]?0[Xx]/,u=8!==i(n+"08")||22!==i(n+"0x16");t.exports=u?function(t,a){var e=s(String(t));return i(e,a>>>0||(o.test(e)?16:10))}:i},356:function(t,a,e){var r=e(25),s="["+e(348)+"]",n=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),o=function(t){return function(a){var e=String(r(a));return 1&t&&(e=e.replace(n,"")),2&t&&(e=e.replace(i,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},357:function(t,a,e){"use strict";e(349)},360:function(t,a,e){"use strict";e.r(a);e(200),e(42),e(354),e(32),e(116);var r=e(342),s=e(343),n={name:"Post",components:{AuthorBox:e(344).a,Masonry:r.a,Pagination:s.a},computed:{author:function(){var t=this;return this.$site.pages.find((function(a){return"author_meta"===a.pid&&t.$page.frontmatter.author===a.frontmatter.id}))},date:function(){var t=this.$page.path.split("/");return new Date(parseInt(t[1]),t[2]-1,parseInt(t[3])).toLocaleDateString("PL-pl",{year:"numeric",month:"long",day:"numeric"})}}},i=(e(357),e(7)),o=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post"},[e("header",{staticClass:"medium-wide"},[e("h1",[t._v(t._s(t.$page.title))]),t._v(" "),e("hr",{staticClass:"uk-divider-small"}),t._v(" "),e("div",{staticClass:"uk-text-meta uk-subnav uk-subnav-divider uk-margin-remove-top"},[e("li",[t._v(t._s(t.$page.readingTime.text))]),t._v(" "),e("li",[t._v("By "),e("router-link",{staticClass:"post-header-link",attrs:{to:"/author/"+this.$page.frontmatter.author}},[t._v(t._s(t.$page.frontmatter.author)+" ")])],1),t._v(" "),e("li",[t._v(t._s(t.date))]),t._v(" "),e("li",t._l(t.$page.frontmatter.category,(function(a){return e("router-link",{attrs:{to:"/category/"+a}},[t._v("\n                    "+t._s(a.toLocaleUpperCase())+"\n                ")])})),1)]),t._v(" "),e("hr",{staticClass:"uk-divider-small"}),t._v(" "),e("img",{staticClass:"uk-align-center",attrs:{src:t.$withBase(t.$page.frontmatter.image),alt:t.$page.title}})]),t._v(" "),e("div",{staticClass:"text-container"},[e("main",[e("Content")],1)]),t._v(" "),e("footer",{staticClass:"medium-wide"},[e("div",{staticClass:"tags"},[e("span",{staticClass:"uk-badge tags-header"},[t._v("TAGS:")]),t._v(" "),t._l(t.$page.frontmatter.tag,(function(a){return e("router-link",{attrs:{to:"/tag/"+a}},[e("span",{staticClass:"uk-badge tag"},[t._v(t._s(a))])])}))],2),t._v(" "),e("h3",[t._v("Share on social media:")]),t._v(" "),e("social-share")],1),t._v(" "),e("div",{staticClass:"wide"},[e("hr",{staticClass:"uk-divider-icon"}),t._v(" "),e("h3",[t._v("Author:")]),t._v(" "),e("AuthorBox",{attrs:{author:t.author}})],1)])}),[],!1,null,null,null);a.default=o.exports}}]);