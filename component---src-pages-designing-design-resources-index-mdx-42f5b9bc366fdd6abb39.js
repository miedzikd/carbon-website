"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[92039],{28399:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(67294),o=a(88650),i=a.n(o),s=a(1597),l=a(64905),c=a(68636),r=a(75900),m=a.n(r);var d=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:c}=a||o,r=`${i}/edit/${c}${l}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:r},"Edit this page on GitHub"))):null},g=a(56328),p=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===o,c=new RegExp(`${o}/?(#.*)?$`),r=a.replace(c,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${r}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component);var h=b,k=a(17680),y=a(75387),f=a(50041);var A=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:a,location:o,Title:r}=e;const{frontmatter:m={},relativePagePath:p,titleType:b}=t,{tabs:f,title:x,theme:C,description:T,keywords:w,date:I}=m,{interiorTheme:v}=(0,y.Z)(),{site:{pathPrefix:N}}=(0,s.useStaticQuery)("2456312558"),E=N?o.pathname.replace(N,""):o.pathname,R=f?E.split("/").filter(Boolean).slice(-1)[0]||i()(f[0],{lower:!0}):"",M=C||v;return n.createElement(c.Z,{tabs:f,homepage:!1,theme:M,pageTitle:x,pageDescription:T,pageKeywords:w,titleType:b},n.createElement(d,{title:r?n.createElement(r,null):x,label:"label",tabs:f,theme:M}),f&&n.createElement(h,{title:x,slug:E,tabs:f,currentTab:R}),n.createElement(k.Z,{padded:!0},a,n.createElement(u,{relativePagePath:p}),n.createElement(A,{date:I})),n.createElement(g.Z,{pageContext:t,location:o,slug:E,tabs:f,currentTab:R}),n.createElement(l.Z,null))}},60170:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return y}});var n=a(45987),o=(a(67294),a(64983)),i=a(28399);const s=["components"],l={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},r=c("PageDescription"),m=c("AnchorLinks"),d=c("AnchorLink"),u=c("Row"),g=c("Column"),p=c("ResourceCard"),b=c("MdxIcon"),h={_frontmatter:l},k=i.Z;function y(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,o.kt)(k,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Everything you need to work with Carbon, including Figma libraries and\ntemplates, color palettes, GitHub repos, and design tools.")),(0,o.kt)(m,{mdxType:"AnchorLinks"},(0,o.kt)(d,{mdxType:"AnchorLink"},"Introduction"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Elements"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Fonts"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Data visualization"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Gatsby theme"),(0,o.kt)(d,{mdxType:"AnchorLink"},"GitHub repos"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Native mobile"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Accessibility"),(0,o.kt)(d,{mdxType:"AnchorLink"},"Prototyping tools")),(0,o.kt)("h2",null,"Introduction"),(0,o.kt)("p",null,"This page includes Figma kits, tools, templates, and plugins that have been\ncreated to help you get up and running. For a comprehensive list of kits,\nexplore the\n",(0,o.kt)("a",{parentName:"p",href:"https://next.carbondesignsystem.com/design-kits"},"design kit catalog"),"."),(0,o.kt)("p",null,"To use the Figma libraries you’ll find here, you need a Figma license. IBMers\ncan follow instructions in the\n",(0,o.kt)("a",{parentName:"p",href:"https://w3.ibm.com/design/toolbox/?_ga=2.66930222.1444443535.1682545160-2098201107.1682093352#/ui-design-tools/figma/README"},"Design Toolbox"),"\nto get a license. To get started with Figma, visit the\n",(0,o.kt)("a",{parentName:"p",href:"/designing/kits/figma"},"Design kits")," page."),(0,o.kt)("h2",null,"Elements"),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"IBM Icons",href:"https://www.figma.com/file/J5c0d85dSJn9JnBhSYYLmD/Icons---IBM-Design-Language?node-id=129%3A2",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"}))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"IBM Pictograms",href:"https://www.figma.com/file/PkUl9UBuvA41GPpyl84NBc/Pictograms---IBM-Design-Language",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"}))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"IBM Design Language Color Palette",href:"https://www.figma.com/file/Gvwx2RnAZzDKTjVuC5xOlO/Color-Styles---IBM-Design-Language?node-id=129%3A2",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"}))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Carbon v11 Text Styles",href:"https://www.figma.com/file/rK06GY6bvEfokuzrFGdtWB/(v11)-Text-Styles---IBM-Design-Language?node-id=129%3A2",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"}))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"RGB color palettes (.ase and .clr)",href:"https://github.com/carbon-design-system/carbon/raw/v10/packages/colors/artifacts/IBM_Colors.zip",actionIcon:"download",mdxType:"ResourceCard"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"560px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEX0lEQVQ4y43La0xTBxgG4K8tLa0QJAooajduFmETkaFRIpvOOAYCBhggLJItSoz8MHG4QrnIRRgIyEWNiUaHk2Qu2dyAFdzAIDgQaItAD723IK29AKGn9rQUzjmlS2XZD/dnb54f75e8H9hsdtd/s/7WRl1/10ZsNjtYrdjbxbrT+X/8E5fLZcUwsFisLpeLJJ0E8S6SdJKEE8edBO4+cZwkcJdjdc3hcOA4bjajsLyMulzOBSN+vZaoLSfu3iSe8InzZ8j8XPL+bbKq1B4XjcXHYg/b7RmnXsdEPY079ABBDGtrDqNpEZYWl10uQqddu3iOOJdDVHCJjnY8fj8Rt5eo5hF52RgNUCag12rsIe8/AfjOk9Hw4sWs3W7Vag1gMi0513Htq9XLBWTBV2RNKfHjQ/z4wfWjH63XlpFf59pYgPlQV2oqF0OC2gAavFmtfw2rUIt5dk4LRuMCQawtLth/+Ql71IHxu2wiAXb3NnrnFtr/h7Xz8VLdVePVCkV3t6y+vqeo6LcrV7rEiMZoWlCp50CvN5LO1RnEEhGm3Bkgjz8829o8y97+LHDrswv5SMGFvu3+5YEBZ6qrOw7E5vlt/Tw4KG3oucBoMskVKtDpDCTpmHyJ+rLkAFJOkLq6Ug3wFKAvM02SkX4PIA0g/ZtL93btSgU4wGB80tc/ojfoJVI5aLV6gliZmjKztyl8mLKYvZqGes1m1oA349npzOHML2rp1Gwm/cuiovvhu7PotKNbfBP7+kfmdTpkRgpa3Wub3b60ZJ0QmoVj5ulJdG4OFQmXBgdfDQ5NDT0X/c4f5vcMj45N/dk3zOcP9vYOiRGpUqWeRmZgXvvaarVZLG9WVrAVB2a3W20227J5UTWrVKiUCpVKpVGrNGq5UqVUa1QaN6lcIZUrJ6cR0Gp1Nsz9bEatZrPljQUzGBcQiUw8I5uRuiESKSKRSWQbxU0ik0nlislpMcjl80ajVa9H9XrUYMA0Gr1AJB4XigUiRDCBjI5PjQmmx4Xi0fGpcaH4XwIRMjI6AR/HDUSFi6M/EEVHIlGRveFhdZzQuj2cBk5oXch7Nftjb0RGNEbuaYyOaQvnXOOE1XPC6sN314cG1x2MvQ47AnpoMOZJEXpAJ5VSAnCJzblxtlHO9Cw7nPI4o3CUzWnLLhEm5g94eVcCXKZSuDQKF+DbAL9yCGb3eNMnfZhdLEapF7OECoWfnu4ufmTad6T9WFZnNneUHdp88c7csaxOb1YZ04PHopdsYpQwqDx2YBUE7+xn0XpZ9FIWncf04HlvKj97bSav6mVumcDfvza/UZJZOHK+WXY8l++7udKTVsxk8FgMHp1avCuwEnYEPAAo96BwacCjANfLqzLi0Pd0RsmHcT/si+84kt61JaDuYOLPh0/96rP5KgW4NEqxB6UYoGibXwXk5txMPtmSmtKWmtKamtKaktySlNCUmtqalNCUlNCUeKIxObE56TN3SXHPWjckn2zJOX3rb0Ef48Z7nYqTAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ase",title:"ase",src:"/static/cde57da39cf470f47832ecc5eb6899c0/adc5b/ase.png",srcSet:["/static/cde57da39cf470f47832ecc5eb6899c0/7fc1e/ase.png 288w","/static/cde57da39cf470f47832ecc5eb6899c0/adc5b/ase.png 560w"],sizes:"(max-width: 560px) 100vw, 560px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Color contrast checker",href:"https://marijohannessen.github.io/color-contrast-checker/",mdxType:"ResourceCard"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFB0lEQVQ4ywXBf1DXhR3H8Tff71eD7xd28UP/mHaaDOmP4PYPYMvSoivTtLtNuC+htDZp1QSGXrZC7xabeIonP5ztx4G6AL0mZExQw9CssBEy9RRoU/GLaLRAnSSifD6f13OPh7VPBaxr0qxjwuw0Cb77ns+Grlq0M+bP965GN+vfwYjOxE7pVOyUPglF1Brdon3+VfqrRVPlN1Uk+rTejLeijHUBs4ZJs0N3LYpfmF0gaHcdf653L3hZtxJgZBYMzoO+FOiZDyfnQfss9EEiqgsNqsofVnnIWGFGiUXxepTZhxNma54yayPeetxpVd/qQeTNgYlHHY1lOrq20NN/FknnFkmnFno6lulwMM1h7xzYEY82Ta/VxhlGmhlrzWwXCb4/EbTd7rSqIyTQx3xnnAyXqafR+HLpvyulSFj0h8XpHPHpculQNno/01V1qkNZInpjei1vhIziJJ+tdX32myl/boUepIn5zmdaoAjPM6WwmFyDbhbB9XXo0jo4VwRdhXA4TzQsherHpI2pDoXxkBPIY6XfLHnYonO84OVS5lCrDPcjnqdXqzRKEXLL0J3NaLQShipRfwV0l8HRImhcLaqXQlmmyy/nworQFdItxlKmfPmPK4ECHnU26WnqFFaHivhav2OCarhfj/7XCN80oov1cLoGjr4LjcWwI0+8lQ2vpDs8lwRZgQILecG/JzObZ5XhFPICFVqjfZTRpRqu0YjrtcHdTjTWCVfaUG8THK2Bv22EbYVi/QqUn+Vo8WxIi2mxoFIuzCWDx7XEzVG+SimhSps5qDrO6BC3+Cc4feh2PxrqhtPtqH0Pqt8CfyiBtbniZ096LEiGeXH9FqfsSAorWaxfeWHeppRKtqmOBg5yXJ9xUQPcYwwmbqDBPtT1CWpuhJ2V6J1SeCWMlizySEuBGXFDFqeCoRRKWKRyL6w/sk77qeRjGtVDpy7Rxy1GHY/7NzwYuAnH+1DTMbT9fVi/FeWVoMW5HvMXwg9+NGQhvX1hHltZqDo3Ry0q4gQVOke9rtLGHbrvQ/8IRAbg9lfgHnZgz3ew5SwqOYJyd4snKzwl/xrF5vRbtGoPzGIvmWpzlquLQvWrjG+p0T2aJqD9uug8K06dEAPtYmQf3KkFb9MkvDosvdiNslodPfQexJR/aH41r0rUEdL0lZOti+RxQ8Wew7u3oSYidp8RTR1wYJ84vkf8q1ZcKhejJTD5EtIz30P6ZYekk2ha68tmXlt0SGcH53CFTMbdpVNi9Rgqvig29ogtH0Nlg6jeIRq2iPZN8EWJOF8gRZaJm1m4Uw97KPbmEHYqaH6um18j4XhNkHoP57ERtHRA5H2JCg9DcYNYvx02bICtxVD3qmh+STq2DLp/Ig08IudaAowHWHU74JklDn/jC42O2/TvqU0cFqnn5WR+jpv9D7Fir5S7HeW9ifILUFGOVP4i2vkMNGTJbX1Ezokk6H1AuwZisd6Zt3xmI5iBzfgOm35WtfHHYW6LSK+Xk7UN54k35S0ukJ56Fv30CbzXFuC8k46z9WH4c4L44AHtOvlD2UnDPjWZRY26ZoNulHVioV5ZoEV5ob9wJWkzzC6F5AJIfQ5S0yEzGZY9BKuToDSWoc0B8vfHYjsN6zCivvTJLBDBos5j9rUsqQdf4ABmvyUmsIGCmJ9zMHYJw3E/xombiTM7pGsZMXz0QoCXlxvB3wdk+2fiazWs2Yd1TMP+D6lROFXIUQ5nAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"color contrast icon",title:"color contrast icon",src:"/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png",srcSet:["/static/0221b06df5d630131fb1efd656f319b3/59afc/color-contrast-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,o.kt)("h2",null,"Fonts"),(0,o.kt)("p",null,"Carbon uses the open-source typeface ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ibm/plex"},"IBM Plex")," –\ncarefully designed to meet IBM’s needs as a global technology company and\nreflect IBM’s spirit, beliefs, and design principles."),(0,o.kt)("h2",null,"Data visualization"),(0,o.kt)("p",null,"The Data visualization kit includes basic and complex chart assets, along with\nusage guidance, theming guidance, palettes, and sample layouts."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Figma kit coming soon",href:"",disabled:!0,actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Gatsby theme"),(0,o.kt)("p",null,"The Gatsby Figma kit has all the components, patterns, and sample layouts that\nhave been developed by teams within the IBM ecosystem. The Gatsby theme site\nincludes the components, guidelines, and everything you need to create and\ncontribute to Carbon sites."),(0,o.kt)("h3",null,"Image production guidelines"),(0,o.kt)("p",null,"For anyone interested in contributing to the Carbon Design System website, or\nmaking images for their own Pattern Asset Library (PAL), we follow a set of\nguidelines to ensure consistency across the content in the Gatsby ecosystem. The\nimage production guidelines Sketch kit includes guidance, symbols and templates\nto help designers with every aspect of image creation and component specs."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Gatsby theme kit",href:"https://www.figma.com/file/9arERt9v8YZVMDn7AYdmZt/Gatsby-Design-Kit",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"}))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Gatsby theme Carbon site",href:"https://gatsby.carbondesignsystem.com/",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)("img",{src:"/b35bb12e5b3c28c136e7daccb9c0dea3/gatsby.svg",alt:"Gatsby icon"}))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Image production guideline kit",href:"https://www.figma.com/file/XQqHxu38CiY3Vx1iHdafIa/Image-production-guidelines?t=1KJWmXlChFC7BoKT-6",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"GitHub repos"),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Carbon design kit",href:"https://github.com/carbon-design-system/carbon-design-kit",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"github",mdxType:"MdxIcon"}))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"IBM Design Language and Icon Kits",href:"https://github.com/IBM/design-kit",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"github",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Native mobile"),(0,o.kt)("p",null,"The native mobile kits include everything you need to get your iOS or Android\nproject underway."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Figma kit coming soon",disabled:!0,href:"",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Accessibility"),(0,o.kt)("p",null,"The IBM Accessibility kit includes checklists, bite-sized guidance, and handoff\nassets to make sure your designs are accessible for implementation."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"IBM Accessibility kit",href:"https://www.figma.com/file/zJlvN4TRbslRtyjFuxIDom/IBM-Accessibility-Design-Kit?node-id=0%3A1",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)("img",{src:"/c76290791c894e0dee815b7978a1ebe1/figma.svg",alt:"Figma icon"}))),(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Stark accessibility checker",href:"https://www.figma.com/community/plugin/732603254453395948/Stark",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Prototyping tools"),(0,o.kt)("h3",null,"Carbon Mid-Fi kit"),(0,o.kt)("p",null,"This kit provides designers with a way to visualize concepts and test them out\nbefore committing to high-fidelity designs."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Figma kit coming soon",disabled:!0,href:"",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"figma",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Invision Freehand kit"),(0,o.kt)("p",null,"A Carbon wireframe kit for Invision Freehand is available for teams to create\nlow fidelity wireframes. This kit is maintained by the Cloud PAL community."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Invision Freehand kit",href:"https://pages.github.ibm.com/cdai-design/cloud-pal/resources/resources/#invision-freehand-kit",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"64px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC3UlEQVQ4y6VV+0sUURSef6OfoyDS3u6OqyRFBv2QRbmJqbMurqFkLyhJUmKJHhJUJEFB9UMUFIgQSRRWENKTMOxhuzuzq+7qbj7yubu6qztf3HNnZmfdCqELF+65c853v/Pde84IslVyKaKUkPMdUERJVUSHqrD1Mqas+cv5ElsnFavkEkxgKc2JB9iqkWH/HdSIZViCDiZrJ9KpbL35IGSr9E9QzVfVYgmDMVRl0QDjjlsq0L/nBJRCJ2RL5TKYcgyGJZg0U5WCavjWHUCk+QbYmH3xgcCzUsxecwzRoQoZHwud8K0vw9jV+wQ491WBbK2ifZo2B9ihxrRlMxfMJzHNvGtL4c0pRVBqRqC4Ht4cO9lsynkVlIE+mb2UdZqhpQr+bbWYfPQcUx0vMdXehaCjhdKfefYG053dCNWew/Cxy4h9+o7pJ68R2NXAJTExFfQn4ttQhlCNG6oKYww1XEL03RfDjn38hmRk3LBnut6TRJT+UoY68GB5E1LzCSyMTsC/o45OZoFsMFa+jeUIn75OdmIwTGBZKdNGgZP0YymxEe3uIZ1YQDI0QnsD+0/Cs3I3Qi432fHPHq6jzfEHhoUccOJeJzmPtT2EZ1UJglIL2fNKyPAZv9lOe7/uPoZn9d6MqspImQkc7/WRM9Ozb0UxRq/wJzTV8QreXDs99HjPD+7jPAulqAb+7Yf488q65SIXFqejSM0n0V9yHEOHL2JhfJKCf7pvwbtmHwI767E4G0MqNodg5RnM9QUwYG+Eb1M5Mc1iyG6SjVQiiejbXixG41w/eyOvb0uV4cPGxIOnGTctmGpYZQIzBiMX7iDS1AZlaw2Gj7Ri+GhrWqe8CviL6zBy/jbCp64RCaOhmGvZ2Myr1KrFTroYVSFK6YqyaD65dqOWdVICa46mXqjyJuFMP1a9brVbNN4c91FNYLx9UafV+5m4vE6d2X3S/ZQarPIfvwDyZXeggbHfyW8nny3qGWxsWAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Invision icon",title:"Invision icon",src:"/static/a9f17d9e5ef17f4711af3c212b5c6fb0/512a8/invision.png",srcSet:["/static/a9f17d9e5ef17f4711af3c212b5c6fb0/512a8/invision.png 64w"],sizes:"(max-width: 64px) 100vw, 64px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,o.kt)("h3",null,"Carbon UI Builder"),(0,o.kt)("p",null,"Carbon UI Builder is a visual tool that allows users to assemble product pages\nand layout modules using Carbon Components in a fraction of the time it usually\ntakes."),(0,o.kt)("p",null,"Pages can be exported as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Images for presentations"),(0,o.kt)("li",{parentName:"ul"},"Live demo apps for user testing"),(0,o.kt)("li",{parentName:"ul"},"Production-quality code that can be easily incorporated in an existing\nproduct’s frontend")),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(p,{subTitle:"Carbon UI Builder",href:"https://builder.carbondesignsystem.com/",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"145px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAC4jAAAuIwF4pT92AAADyklEQVQ4y3VVW2gcVRj+Zze1ItoHsQgSW0HxBsWi4KuXFnxQUGOQPTv/EDQkRmPO/202otGmq0mqbaEq9dotimlia6qoUaFmo9nN7mZm50ysF6wigpeHlqhPPhSpF1Zmd3azCe2BH86ZOXzz/d/3nTNE5xgCkIjUSovEw7Wur8O5VXsf7TnnaAA0C4iJSEzXQc/TwJVNIKCtZV6rs7NaqVjLvEOL/CJAVYA3tMjFTcZAnf3ZQBsAeqW2asCLgMYF2K6BExr4R4DhCJBaJVg1IhArAn1eA1WdSn0yMDi0Wa/WtFuL/CnArxq4rRW0OfhzQ48+uZNSvd3WkOoknRrUg70P3NKzO0s9Y69S9+jB9Y8MZdrSDzutGi8IUIkI1CQi9gJi1xB7huwvjxMXltrs0rfU/coU3X/sp63JicWX7NcL7erlMqmdn5E9lotrSa2PunlcA8WodavmuNMEDCz75y+IFww5c+YS/sA7ak97Z5KH3B9U1j2t9pdHVDYgNbZAfU/sWSeiQ5bjGihFcaq3XANzjcVLATk/BjEummHOmTM843v2dOWG5IRHKut2qv3lU2pv6aQaW7j39myVtKRChqMiUlyloeMFVsjScc2F7AXHuWR+55zptD/2yZ6uUHLCi6kDi5To/4bU3tIONbrwn8rMH+xLPxsCPqcBv9GyXgXoBdexa/7iSrCJ8yY0KW6/W4mpt8ukXluMJ7rmLLWrSImnC30qk1/uH3wqbDOlgfeaDCMNrajtaxwvOOW4pt35KiCnZCznQ5/4wDwlXnApMV6MdzzzPalM4R6VyeeqtZOlz9dIX9Ca31aG17JrfmPXbAodZ89YXDC1jen+LnrosX00gDRRtUr7VDOzjVw2Tk3EsO50yHCZXXOFY4L686IhnUpFX6+Z0CMycLWI3q2BNzUwJSKIcrmiYRSb69k1fzhLwYYwOjzrr7MPV+jWapUG0kONMG/XGNygga5QPxEZ0cBdzZtpjcuXshec5pKZ4U/NRv7IJzvrk/NWPnbnd1USPRAyDM/zrIgcFWBEgMsE6F0bm3oOg4C4EmzhoilzzvzNM/6OB2fnKTnlkTNZiPUPZ0IW2wS4T4CEAHcI0K6Bm1ddYc2TUjYW+wE5BUOc8zt4xj9pT1eWk5PuNnVkiV7cWDNiWIDNAhwSoCDA1wLsWhsbshcNcammY4zn/BjPGkpm82S/4+2xp9zO5OEK3e3+G4p+uQAXCbBFgBsFuEmAq5pON24bp2iI50OWAfGJJeJjfpzfN2RPe5ScdCl5xFhhXPSaG7r1N9Aw5X8st4BtwgVucQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Carbon UI Builder Icon",title:"Carbon UI Builder Icon",src:"/static/c1eb5d789f76ba16f0efd8ec5ea02617/d19ec/carbon-ui-builder.png",srcSet:["/static/c1eb5d789f76ba16f0efd8ec5ea02617/d19ec/carbon-ui-builder.png 145w"],sizes:"(max-width: 145px) 100vw, 145px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))))}y.isMDXComponent=!0}}]);