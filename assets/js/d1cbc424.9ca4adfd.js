"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[8386],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},l="Translate your site",i={unversionedId:"tutorial-avatars/tutorial-avatars-extras/translate-your-site",id:"tutorial-avatars/tutorial-avatars-extras/translate-your-site",title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/tutorial-avatars/tutorial-avatars-extras/translate-your-site.md",sourceDirName:"tutorial-avatars/tutorial-avatars-extras",slug:"/tutorial-avatars/tutorial-avatars-extras/translate-your-site",permalink:"/docs/tutorial-avatars/tutorial-avatars-extras/translate-your-site",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/tutorial-avatars/tutorial-avatars-extras/translate-your-site.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manage Docs Versions",permalink:"/docs/tutorial-avatars/tutorial-avatars-extras/manage-docs-versions"},next:{title:"Tracking Modules",permalink:"/docs/category/tracking-modules"}},s={},u=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"translate-your-site"},"Translate your site"),(0,n.kt)("p",null,"Let's translate ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),(0,n.kt)("h2",{id:"configure-i18n"},"Configure i18n"),(0,n.kt)("p",null,"Modify ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",(0,n.kt)("inlineCode",{parentName:"p"},"fr")," locale:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),(0,n.kt)("h2",{id:"translate-a-doc"},"Translate a doc"),(0,n.kt)("p",null,"Copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",(0,n.kt)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),(0,n.kt)("p",null,"Translate ",(0,n.kt)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),(0,n.kt)("h2",{id:"start-your-localized-site"},"Start your localized site"),(0,n.kt)("p",null,"Start your site on the French locale:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),(0,n.kt)("p",null,"Your localized site is accessible at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/fr/"},"http://localhost:3000/fr/")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In development, you can only use one locale at a same time.")),(0,n.kt)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),(0,n.kt)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),(0,n.kt)("p",null,"Modify the ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,n.kt)("p",null,"The locale dropdown now appears in your navbar:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Locale Dropdown",src:a(2796).Z,width:"370",height:"302"})),(0,n.kt)("h2",{id:"build-your-localized-site"},"Build your localized site"),(0,n.kt)("p",null,"Build your site for a specific locale:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),(0,n.kt)("p",null,"Or build your site to include all the locales at once:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}p.isMDXComponent=!0},2796:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"}}]);