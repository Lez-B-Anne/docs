"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[9878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,y=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return a?r.createElement(y,i(i({ref:t},s),{},{components:a})):r.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={},i="Binary Parameters",o={unversionedId:"tutorial-avatars/tutorial-avatars-extras/parameters/types/binary",id:"version-v4.0.0/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary",title:"Binary Parameters",description:"Nearly all VRCFaceTracking expression parameters can be used as a Binary parameter. Exceptions are listed in the Parameters list above.",source:"@site/versioned_docs/version-v4.0.0/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary.md",sourceDirName:"tutorial-avatars/tutorial-avatars-extras/parameters/types",slug:"/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary",permalink:"/docs/v4.0.0/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/versioned_docs/version-v4.0.0/tutorial-avatars/tutorial-avatars-extras/parameters/types/binary.md",tags:[],version:"v4.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Types",permalink:"/docs/v4.0.0/category/types"},next:{title:"Float Parameters",permalink:"/docs/v4.0.0/tutorial-avatars/tutorial-avatars-extras/parameters/types/float"}},p={},d=[{value:"Unique Binary Parameters",id:"unique-binary-parameters",level:3}],s={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"binary-parameters"},"Binary Parameters"),(0,n.kt)("p",null,"Nearly all VRCFaceTracking expression parameters can be used as a Binary parameter. Exceptions are listed in the Parameters list above."),(0,n.kt)("p",null,"Binary parameters are a set of parameters which take advantage of the binary counting system in order to save space inside of the VRC Avatar Descriptor's parameters. All Binary parameters are able to be smoothed using animation transitions, so if you are looking to compact your face tracking setup, Binary parameters are a good solution for that purpose."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You can use the ",(0,n.kt)("a",{parentName:"strong",href:"https://github.com/regzo2/BinaryParameterTool/releases"},"Binary Parameter Tool"),", a Unity Editor plugin, to create animation layers that a Binary parameter can be used with. Highly recommended as creating the animation layers for a Binary parameter is very tedious.")),(0,n.kt)("p",null,"Binary parameters can also control a single Float parameter inside of an animator to be able to interface with Blend Trees and other Float-exclusive fields inside an Animator, using animations that control a Float parameter. The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/regzo2/BinaryParameterTool/releases"},"Binary Parameter Tool")," can generate these as well."),(0,n.kt)("p",null,"Example of a Binary Parameter compatible animation layer:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/XpkB0Fp.png",alt:null})),(0,n.kt)("p",null,"Example of a single transition from AnyState to a State (in this case: JawForward1):"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/15a4OmM.png",alt:null})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name (",(0,n.kt)("strong",{parentName:"th"},"Case Sensitive"),")"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"~~~1")),(0,n.kt)("td",{parentName:"tr",align:null},"(Float Parameter) 2",(0,n.kt)("sup",null,"0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"~~~2")),(0,n.kt)("td",{parentName:"tr",align:null},"(Float Parameter) 2",(0,n.kt)("sup",null,"1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"~~~4")),(0,n.kt)("td",{parentName:"tr",align:null},"(Float Parameter) 2",(0,n.kt)("sup",null,"2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"~~~8")),(0,n.kt)("td",{parentName:"tr",align:null},"(Float Parameter) 2",(0,n.kt)("sup",null,"3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"~~~X")),(0,n.kt)("td",{parentName:"tr",align:null},"(Float Parameter) 2",(0,n.kt)("sup",null,"X"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"~~~Negative")),(0,n.kt)("td",{parentName:"tr",align:null},"(Negative bit for Combined Lip Parameters)")))),(0,n.kt)("h3",{id:"unique-binary-parameters"},"Unique Binary Parameters"),(0,n.kt)("p",null,"The following Binary parameters are setup differently compared to their Float counterparts."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"EyeLidExpanded")," will return the value of a Blink when ",(0,n.kt)("inlineCode",{parentName:"li"},"EyeWidenToggle")," is false, and returns the value of Eye Widen when ",(0,n.kt)("inlineCode",{parentName:"li"},"EyeWidenToggle")," is true."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"EyeLidExpandedSqueeze")," functions exactly as ",(0,n.kt)("inlineCode",{parentName:"li"},"EyeLidExpanded"),", but also returns the value of Eye Squeeze when ",(0,n.kt)("inlineCode",{parentName:"li"},"EyeSqueezeToggle")," is true.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter Name (",(0,n.kt)("strong",{parentName:"th"},"Case Sensitive"),")"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("sup",null,"1"),(0,n.kt)("inlineCode",{parentName:"td"},"LeftEyeLidExpandedX")),(0,n.kt)("td",{parentName:"tr",align:null},"LeftEyeLidExpanded 2",(0,n.kt)("sup",null,(0,n.kt)("strong",{parentName:"td"},"X")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"LeftEyeWidenToggle")),(0,n.kt)("td",{parentName:"tr",align:null},"LeftEyeWiden Widen State")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("sup",null,"1"),(0,n.kt)("inlineCode",{parentName:"td"},"RightEyeLidExpandedX")),(0,n.kt)("td",{parentName:"tr",align:null},"RightEyeLidExpanded 2",(0,n.kt)("sup",null,(0,n.kt)("strong",{parentName:"td"},"X")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"RightEyeWidenToggle")),(0,n.kt)("td",{parentName:"tr",align:null},"RightEyeWiden Widen State")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("sup",null,"1"),(0,n.kt)("inlineCode",{parentName:"td"},"CombinedEyeLidExpandedX")),(0,n.kt)("td",{parentName:"tr",align:null},"CombinedEyeLidExpanded 2",(0,n.kt)("sup",null,"X"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"CombinedEyeWidenToggle")),(0,n.kt)("td",{parentName:"tr",align:null},"CombinedEyeWiden Widen State")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("sup",null,"1"),(0,n.kt)("inlineCode",{parentName:"td"},"LeftEyeLidExpandedSqueezeX")),(0,n.kt)("td",{parentName:"tr",align:null},"LeftEyeLidExpandedSqueeze 2",(0,n.kt)("sup",null,"X"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"LeftEyeSqueezeToggle")),(0,n.kt)("td",{parentName:"tr",align:null},"LeftEyeSqueeze Squeeze State")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("sup",null,"1"),(0,n.kt)("inlineCode",{parentName:"td"},"RightEyeLidExpandedSqueezeX")),(0,n.kt)("td",{parentName:"tr",align:null},"RightEyeLidExpandedSqueeze 2",(0,n.kt)("sup",null,"X"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"RightEyeSqueezeToggle")),(0,n.kt)("td",{parentName:"tr",align:null},"RightEyeSqueeze Squeeze State")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("sup",null,"1"),(0,n.kt)("inlineCode",{parentName:"td"},"CombinedEyeLidExpandedSqueezeX")),(0,n.kt)("td",{parentName:"tr",align:null},"CombinedEyeLidExpandedSqueeze 2",(0,n.kt)("sup",null,"X"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"CombinedEyeSqueezeToggle")),(0,n.kt)("td",{parentName:"tr",align:null},"CombinedEyeSqueeze Squeeze State")))),(0,n.kt)("sup",null,"1")," **X** Represents an up-to number of params, so you would have 1, 2, 4, ... , **X** Binary parameters.")}u.isMDXComponent=!0}}]);