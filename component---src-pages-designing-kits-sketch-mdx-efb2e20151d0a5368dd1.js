"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[91677],{28399:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(67294),o=a(88650),i=a.n(o),l=a(1597),r=a(64905),s=a(68636),d=a(75900),c=a.n(d);var m=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:r,branch:s}=a||o,d=`${i}/edit/${s}${r}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},u=a(56328),h=a(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),r=t===o,s=new RegExp(`${o}/?(#.*)?$`),d=a.replace(s,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var g=k,b=a(17680),y=a(75387),f=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var x=e=>{let{pageContext:t,children:a,location:o,Title:d}=e;const{frontmatter:c={},relativePagePath:h,titleType:k}=t,{tabs:f,title:x,theme:T,description:A,keywords:v,date:N}=c,{interiorTheme:C}=(0,y.Z)(),{site:{pathPrefix:S}}=(0,l.useStaticQuery)("2456312558"),I=S?o.pathname.replace(S,""):o.pathname,L=f?I.split("/").filter(Boolean).slice(-1)[0]||i()(f[0],{lower:!0}):"",M=T||C;return n.createElement(s.Z,{tabs:f,homepage:!1,theme:M,pageTitle:x,pageDescription:A,pageKeywords:v,titleType:k},n.createElement(m,{title:d?n.createElement(d,null):x,label:"label",tabs:f,theme:M}),f&&n.createElement(g,{title:x,slug:I,tabs:f,currentTab:L}),n.createElement(b.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(w,{date:N})),n.createElement(u.Z,{pageContext:t,location:o,slug:I,tabs:f,currentTab:L}),n.createElement(r.Z,null))}},55113:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return w}});var n=a(45987),o=(a(67294),a(64983)),i=a(28399);const l=["components"],r={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=s("PageDescription"),c=s("InlineNotification"),m=s("AnchorLinks"),p=s("AnchorLink"),u=s("Row"),h=s("Column"),k=s("ResourceCard"),g=s("MdxIcon"),b=s("Caption"),y={_frontmatter:r},f=i.Z;function w(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,o.kt)(f,Object.assign({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Rapidly build beautiful and accessible experiences. The Carbon kit Sketch\ncontains all resources you need to get started.")),(0,o.kt)(c,{mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We no longer maintain or update Sketch libraries.")," The instructions and\nresources listed below may be outdated. We recommend you migrate to Figma to get\nthe most updated kits we offer.")),(0,o.kt)(m,{mdxType:"AnchorLinks"},(0,o.kt)(p,{mdxType:"AnchorLink"},"Get the kit"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Start designing"),(0,o.kt)(p,{mdxType:"AnchorLink"},"How to use"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Explore additional kits"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Info")),(0,o.kt)("h2",null,"Get the kit"),(0,o.kt)("h4",null,"1. ",(0,o.kt)("strong",{parentName:"h4"},"Install Sketch"),"."),(0,o.kt)("p",null,"To design with Carbon you must have the ",(0,o.kt)("strong",{parentName:"p"},"most recent version")," of\n",(0,o.kt)("a",{parentName:"p",href:"https://www.sketch.com/"},"Sketch")," installed."),(0,o.kt)("h4",null,"2. ",(0,o.kt)("strong",{parentName:"h4"},"Choose a theme"),"."),(0,o.kt)("p",null,"There are ",(0,o.kt)("a",{parentName:"p",href:"/guidelines/color/overview#themes"},"four Carbon themes"),", two light\n(White and Gray 10) and two dark (Gray 90 and Gray 100). Each theme lives in its\nown Sketch library. You can subscribe to as many libraries as you’d like."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{onClick:()=>fathom.trackGoal("P0OEN9TS",0),subTitle:"White theme",href:"sketch://add-library/cloud/557b75ff-67d3-41ab-ada5-fa25447218c1",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{onClick:()=>fathom.trackGoal("T7D1HJ3L",0),subTitle:"Gray 10 theme",href:"sketch://add-library/cloud/b4ea2a21-4b1a-4c64-99dc-a1365eff5d5f",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{onClick:()=>fathom.trackGoal("LYFJTPDE",0),subTitle:"Gray 90 theme",href:"sketch://add-library/cloud/a324c6dd-df97-435e-b79f-3a29e04922fc",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{onClick:()=>fathom.trackGoal("3XH0SIBJ",0),subTitle:"Gray 100 theme",href:"sketch://add-library/cloud/9d47a4fd-70dd-44ff-bc57-22c79da8e477",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",null,"3. ",(0,o.kt)("strong",{parentName:"h4"},"Bring in additional colors and icons"),"."),(0,o.kt)("p",null,"Additional color collections live in the IBM Design Language library. Icons live\nin two different libraries separated by size."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"IBM Design Language",href:"sketch://add-library/cloud/4f1cbe6c-6626-405e-8c46-a9ae41a30cba",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"IBM Icons (16px, 20px) library",href:"sketch://add-library/cloud/028e0598-591e-428c-a490-f6ec64b15ea7",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"IBM Icons (24px, 32px) library",href:"sketch://add-library/cloud/d530998a-c94c-4f1c-bc0e-c05417e067e3",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h4",null,"4. ",(0,o.kt)("strong",{parentName:"h4"},"Download the grid templates"),"."),(0,o.kt)("p",null,"Visit the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.sketch.com/s/3a3f3f2d-94d7-4c16-8e2e-88ba80a6382e"},"Sketch library"),"\npage and choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Download Document")," from the right-side panel."),(0,o.kt)("p",null,"Open the file in Sketch. Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"File → Save as Template"),". You can now\naccess the saved grid template at ",(0,o.kt)("inlineCode",{parentName:"p"},"File → New file from Template"),"."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"IBM Grid template",href:"https://www.sketch.com/s/3a3f3f2d-94d7-4c16-8e2e-88ba80a6382e",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"UI Shell template",href:"https://www.sketch.com/s/6a8e1d7b-f00a-4d8d-9d83-79ecf4dc12a0",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Start designing"),(0,o.kt)("p",null,"To get started with Carbon, familiarize yourself with the contents of each\nlibrary."),(0,o.kt)("h4",null,(0,o.kt)("strong",{parentName:"h4"},"Start with the grid"),"."),(0,o.kt)("p",null,"At the top of your screen, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"File → New file from Template")," and\nselect your grid template. You’ll always be able to find the template here."),(0,o.kt)("h4",null,(0,o.kt)("strong",{parentName:"h4"},"Icons and color swatches"),"."),(0,o.kt)("p",null,"Symbols from both the IBM Design Language library and the Carbon library are\naccessible from any Sketch document. Navigate to\n",(0,o.kt)("inlineCode",{parentName:"p"},"Insert → Symbols → Carbon Design System")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"IBM Design Language"),"."),(0,o.kt)("h4",null,(0,o.kt)("strong",{parentName:"h4"},"You’re all set"),"."),(0,o.kt)("p",null,"Refer to the content below for a more detailed breakdown of the kit, or head to\nSketch to begin designing."),(0,o.kt)("h2",null,"How to use"),(0,o.kt)(m,{small:!0,mdxType:"AnchorLinks"},(0,o.kt)(p,{mdxType:"AnchorLink"},"Grid"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Symbols"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Text styles"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Layer styles")),(0,o.kt)("h3",null,"Grid"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/guidelines/2x-grid/overview/"},"IBM 2x Grid")," is fundamental to everything we\ndesign. It is the geometric foundation of all the visual elements in the IBM\nDesign Language, from typography to columns, boxes, icons, and illustrations.\nThe grid provides structure and guidance for all creative decision-making."),(0,o.kt)("img",{src:"/78f2bcb634d36680d173463377316538/grid-2.gif",alt:"2x Grid overview"}),(0,o.kt)(b,{mdxType:"Caption"},"2x Grid overview"),(0,o.kt)("h4",null,"Getting started"),(0,o.kt)("p",null,"All designs should start with the 2x Grid. Once you\nhave ",(0,o.kt)("a",{parentName:"p",href:"/designing/kits/sketch/#get-the-kit"},"saved the grid")," as a template, in\nSketch navigate to ",(0,o.kt)("strong",{parentName:"p"},"File → New file from Template")," and select the\n",(0,o.kt)("inlineCode",{parentName:"p"},"IBM Grid template")," to open a new document with preset grid artboards. Either\nbegin working in the new file or copy/paste an artboard into your working file."),(0,o.kt)("h4",null,"Layout"),(0,o.kt)("p",null,"The grid layout feature controls and shows the 2x grid columns, gutters, and\npage margins. To create or edit the layout go to ",(0,o.kt)("strong",{parentName:"p"},"View → Canvas → Layout\nSettings…"),"."),(0,o.kt)("p",null,"To toggle seeing the 2x grid columns on an artboard go to ",(0,o.kt)("strong",{parentName:"p"},"View → Show layout"),"\nor use the keyboard shortcut  ",(0,o.kt)("inlineCode",{parentName:"p"},"Control+L"),"."),(0,o.kt)("h4",null,"Grid"),(0,o.kt)("p",null,"To toggle seeing the mini unit grid go to ",(0,o.kt)("strong",{parentName:"p"},"View → Show grid")," or use the\nkeyboard shortcut ",(0,o.kt)("inlineCode",{parentName:"p"},"Control+G"),"."),(0,o.kt)("h4",null,"Breakpoints"),(0,o.kt)("p",null,"The layout settings change depending on which size screen you are designing for.\nSee\n",(0,o.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/guidelines/2x-grid/overview/#breakpoints"},"breakpoints"),"."),(0,o.kt)("h3",null,"Basic grid"),(0,o.kt)("p",null,"This basic grid is not affected by any influencers and would simply react to the\nproduct’s breakpoints. Every layout and break points are included in the grid\ntemplate on the page labeled “Basic grid”."),(0,o.kt)("h3",null,"Grids with an influencer"),(0,o.kt)("p",null,"An influencer is a component that affects the content on the page. It can either\nappears on a page as the result of a user action or be part of your product’s\npage. These ",(0,o.kt)("a",{parentName:"p",href:"/guidelines/2x-grid/overview/#grid-influencers"},"influencers")," effect\nthe layout grid by scaling and resizing the columns and its content. You can\nfind an assortment of examples of grids with an influences in the grid template\nfile on the page labeled “Grid influencers”."),(0,o.kt)("h3",null,"Calculating the Sketch grid"),(0,o.kt)("h4",null,"Sketch layout settings"),(0,o.kt)("p",null,"Slide-in panels influence the page layout grid; below are some of the\nspecifications for panel combinations and how they impact the grid at all sizes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Breakpoint width","*"," = ",(0,o.kt)("strong",{parentName:"li"},"Artboard width")),(0,o.kt)("li",{parentName:"ul"},"Breakpoint gutter","*"," = ",(0,o.kt)("strong",{parentName:"li"},"Left and right outside margins")),(0,o.kt)("li",{parentName:"ul"},"Total panel width (“sidebar nav”) + Left outside margin + Right outside margin\n= ",(0,o.kt)("strong",{parentName:"li"},"Total margins")),(0,o.kt)("li",{parentName:"ul"},"Artboard width - Total margins = ",(0,o.kt)("strong",{parentName:"li"},"Total width")),(0,o.kt)("li",{parentName:"ul"},"Total panel width + Left margin = ",(0,o.kt)("strong",{parentName:"li"},"Offset"))),(0,o.kt)("p",null,"*","Since we are following the Carbon Design responsive guidelines, we referenced\n",(0,o.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/guidelines/2x-grid/implementation#responsive-options"},"this table"),"\nto determine our common breakpoint widths and respective gutter specs."),(0,o.kt)("h4",null,"Example"),(0,o.kt)("p",null,"Let’s say we want to create a custom grid for a new design that uses the extra\nsmall panel (256px wide) on our x-large 1312px breakpoint. Applying the formula\nabove, your calculations would look like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Breakpoint width (1312px) = 1312px wide artboard"),(0,o.kt)("li",{parentName:"ul"},"Breakpoint gutter (32px) = 32px Left outside margin and 32px Right outside\nmargin"),(0,o.kt)("li",{parentName:"ul"},"Total panel width (256px) + 16px Left + 16px Right = 288px Total margins"),(0,o.kt)("li",{parentName:"ul"},"Artboard width (1312px) - Total margins (272px) = ",(0,o.kt)("strong",{parentName:"li"},"1,056px Total width")),(0,o.kt)("li",{parentName:"ul"},"Total panel width (256px) + 16px Left = ",(0,o.kt)("strong",{parentName:"li"},"272px Offset"))),(0,o.kt)("p",null,"*","If the grid influencer would cause the content view size to be smaller than\n1056, then it would follow the next grid breakpoint setting the columns to 8.\nWhich also avoids columns that are smaller than 32."),(0,o.kt)("h3",null,"Symbols"),(0,o.kt)("p",null,"Carbon ",(0,o.kt)("a",{parentName:"p",href:"/components/overview"},"components"),", ",(0,o.kt)("a",{parentName:"p",href:"/contributing/add-ons"},"add-ons"),", and\n",(0,o.kt)("a",{parentName:"p",href:"/guidelines/icons/library"},"icons")," live in the design kit as Sketch symbols."),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABp0lEQVQoz42S627UMBCF9/3fBYlnoH+QqCiFVqtkndjOxZc4TmI7dbypLygEaFqQ4GhkzYz06cyMfEophbjFc9gixORD3Dsx/Xz3SOkl38tT8OECywzi2zP9nFFMBWh4Bpsc1ucCnwECFUGkQ6SDDcO0Q20HW4pJtz77k/e+aSrStkVR5gBS3hMmUNVQSghtKSWUUcYZ44xSAgDACNUINDVa1/UUQzTz7JzjnFUYKzWNg5ymMe6TvdY4TvM822XR2njvTyEErfVsdI67D1/JfTneFuobHNw8OWv8dTnCUo6Mca31OI4vsDGmpeLTfXb3cEGt+HLh727q9x/5zWMvRC+H4Xq9bs6TqutmmqZJqVewECLPcghLKXtC+d1j8ZBXANEsu0CE5qenlJK1VkqptVa/YWPMXhtjYgwpJbcsqAQdbfuODcOglFrXdes7tzu9hbfN5zn+OJRzDgDQ1LWU8rizc04p9RfnI7wsC8YVZ0z2fTzc/f9ga2FZdpwJIf7hbK11v+S9jzEui0UI1nUlZR8OstbuO2utN3j7sYfB4kEhhPiHjoN8B3wO4ZxWxz6sAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Carbon symbol menu navigation",title:"Carbon symbol menu navigation",src:"/static/d9fd6a26f1d812b3ea06faf9b500668b/3cbba/carbon-kit.png",srcSet:["/static/d9fd6a26f1d812b3ea06faf9b500668b/7fc1e/carbon-kit.png 288w","/static/d9fd6a26f1d812b3ea06faf9b500668b/a5df1/carbon-kit.png 576w","/static/d9fd6a26f1d812b3ea06faf9b500668b/3cbba/carbon-kit.png 1152w","/static/d9fd6a26f1d812b3ea06faf9b500668b/0b124/carbon-kit.png 1728w","/static/d9fd6a26f1d812b3ea06faf9b500668b/4ea69/carbon-kit.png 2304w","/static/d9fd6a26f1d812b3ea06faf9b500668b/df13e/carbon-kit.png 2720w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("h4",null,"Library menu navigation"),(0,o.kt)("p",null,"There are two kinds of symbols — library symbols and document symbols. Library\nsymbols are available in any Sketch document, while document symbols are\nspecific to the document in which they are found."),(0,o.kt)("p",null,"From the main menu select ",(0,o.kt)("strong",{parentName:"p"},"Insert → Symbols → Carbon Design System")," then\nselect the desired symbol to add onto your page."),(0,o.kt)("p",null,"Carbon symbols are built to be flexible, and designers should not detach symbols\nfrom the library. Once a symbol is detached, you will no longer receive updates\nas they are released."),(0,o.kt)("h4",null,"Structure"),(0,o.kt)("p",null,"Symbols are organized by component; after selecting a component, you’ll see the\nvariations and states of that component."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To add the whole component, select the desired variant and place it on your\nartboard.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For even more configurability, use the individual building blocks found under\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," folder within the symbol. Be sure your custom design adheres to\nour ",(0,o.kt)("a",{parentName:"p",href:"/guidelines/accessibility/overview"},"design guidelines"),"."))),(0,o.kt)("h3",null,"Text styles"),(0,o.kt)("p",null,"Text styles are based on typography rules defined by the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/language/elements/type-basics"},"IBM Design Language"),"."),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVQ4y3VTTW/TQBDdXwCXguBa+v/4C4g7VNwRF05UQkh1KwxSAalQ2lShrVPStLFjJ43tdRrvV5zESbz7UNy0UAojPb3VrPbNmx0NeUYIAT4QICfAGgE+EwALCAJ4BPkmAWoEfJ1g/znBwQuCT08ITl8SVFYJvjwm2HlK2MYqIe1q7c7X/cqrivPT3vzurtsV1/rpdaxqw7d2nYa1d3RifftRK1Gtu5bTbFvOWWAdNnyr1uxYR2fBunPqbTqnrTfVuveA+I3GvU7b78dxBL/VgucHSC5S0F4f590QCY1BkytQJL2kBKUULc9Du91Gt+Oh2wkK1wtWSMr4klLKz/McUUynfnBecKGKXp8V/ZQXAP4LLkQxyLLZaDyGlJLTOF4mCaVLQoiOUmpeVXuua8Kwa5IkMYIzAxgDYMFX50v0U2ZiSvX8LWNMRlH0iCRJUgpmAwW/e6G3q03sOS3UgxRHXmpOognq0dS4PW1OYg2/N4FSEtPpFJwLdM7PtRACnPPbgkF4oXedAEdnEZpdif0zZrbqY2wcDMzb7Y5Z2+nDrlIcH9fQjWIMBtncmZZS3hSUUpYtKyX1MFOAmX+RXnQ2jwnchoM0DiBTCkoTCCkxGo2glCpbFkJISulNQSmlnlc1xpRSesHjfALXdRHHMVjKcBXjy2HcFhRS+AvB6WAwKIwpLV7zdDIpjmu1Io7CgjNWaK3L/Hg8LqSUM6WUEUJwSuky6fV696WU6UIQWXbpcB5XPB9AZW8PvudBcH6dXzjEwqGmlK6QMAzvSilfD4fDrSzL3o+GQ3s2m9lFUZSstbZHo6F9eHhgt7ymndD4+l4pZTPGbM75xzRN34Vh+PB6bznnhDFG8jz/Y5d/49Cp/TP/N34BKRCHaeE/8a4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Text styles navigation",title:"Text styles navigation",src:"/static/a7b10d7946cfebaa49024c6c2b6c5bfd/3cbba/text-styles-1.png",srcSet:["/static/a7b10d7946cfebaa49024c6c2b6c5bfd/7fc1e/text-styles-1.png 288w","/static/a7b10d7946cfebaa49024c6c2b6c5bfd/a5df1/text-styles-1.png 576w","/static/a7b10d7946cfebaa49024c6c2b6c5bfd/3cbba/text-styles-1.png 1152w","/static/a7b10d7946cfebaa49024c6c2b6c5bfd/0b124/text-styles-1.png 1728w","/static/a7b10d7946cfebaa49024c6c2b6c5bfd/4ea69/text-styles-1.png 2304w","/static/a7b10d7946cfebaa49024c6c2b6c5bfd/df13e/text-styles-1.png 2720w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("h4",null,"Library menu navigation"),(0,o.kt)("p",null,"From the main menu select ",(0,o.kt)("strong",{parentName:"p"},"Insert → Text Styles → Carbon Design System")," to\ninsert a Carbon type token text style."),(0,o.kt)("p",null,"Text styles within components are carefully considered. We do not recommend\ndetaching the symbol to change default styles."),(0,o.kt)("h4",null,"Structure"),(0,o.kt)("p",null,"Carbon text styles in Sketch are organized similarly to symbols."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first text style level displays\n",(0,o.kt)("a",{parentName:"li",href:"/guidelines/themes/overview"},"theme options")," (i.e., white theme)."),(0,o.kt)("li",{parentName:"ul"},"The second level shows the ",(0,o.kt)("a",{parentName:"li",href:"/guidelines/typography/overview"},"Carbon type"),"\ntokens (i.e., body-long-01)."),(0,o.kt)("li",{parentName:"ul"},"The third level selects the type color, which is labeled with a\n",(0,o.kt)("a",{parentName:"li",href:"/guidelines/color/overview"},"Carbon color")," token name.")),(0,o.kt)("h3",null,"Layer styles"),(0,o.kt)("p",null,"Layer styles are color selections for any shape in Sketch."),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACiElEQVQ4y42SzW7TQBSFky0bVuV9eA0eAIkti74CW3ZIRUisuoANm24QLS20hiqN2qqJPY5/ErvjNLUTOx7HbmJ7fNBMEkibVGKkozOen2/uvb611y9f1Q+339QBrMk0zLqiKHXDMDbu/7ZQ326j/lZB/cXzJ7XPu+9qNc/zFJdSxbZtxTRNxbIs6UKO4yiu60rvdrtyTZxbzh2np1DHPKFut+G47pejw4OnNcu20LFMdHQdhBApjRDouo5Op/PXyWKt1Wrh8uIChOggWht6uwldvYSqauGvk5/ParzkJee8rKpKCsBci2+xt5RYZ4yVdrdXJklSxoyVjE1ylkwQx2O3YxhbNSxGVc2dpVOoVh+PjSy7g+f1MZlMMBqNwBjjwoMgoJqmbdWqqsJSYqR3M9DBaPFIhYf7WZbBda/R9zwkyUSAeZqmiKKIqqr6L8IlYHW+Ks4XwLsZeq4n6xozJqCcsQSMJVRtt1dTru6DHsuZ57jpU/SsDuIwwDSN+SxjSFlENaJvirCCDKbIUOZT5EWBJBVlGMP2C6jXGZRzih9NE6ctijMy4OdWhAvDp83T43VgVXE5bx/vwbg6Q5plIN0B9r418fEoxPvvIXYPfXzYv5Ha2ff5zr6PT8d9aquNdeCyVl8PGmg0r8DiMUbDQOQ6VzVDmkTwgyGiOEYYjXnCIrAooEQ3Nv+U2WyGaV6IwwjDEEEwBOdc1rUoSoRhBNu2MBwORf/xOGYYDkdU09RNKc/rqOkGVELkpSAIJBASWIjekz0oNB6PufgOw5ASQjZHKNywTDiugziO5cWHwBVJoOjDR4F5noOlCWjfk7Db29s1oHhoof8DJmMGf+DLGoq0NwEXfg/4B/04kO24rKYaAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Layer styles navigation example",title:"Layer styles navigation example",src:"/static/6aead45d8d7dfd9aab15360eb947b199/3cbba/layer-style-1.png",srcSet:["/static/6aead45d8d7dfd9aab15360eb947b199/7fc1e/layer-style-1.png 288w","/static/6aead45d8d7dfd9aab15360eb947b199/a5df1/layer-style-1.png 576w","/static/6aead45d8d7dfd9aab15360eb947b199/3cbba/layer-style-1.png 1152w","/static/6aead45d8d7dfd9aab15360eb947b199/392b1/layer-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)(b,{mdxType:"Caption"},"Use predetermined overrides when possible"),(0,o.kt)("h4",null,"Library menu navigation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/guidelines/color/overview"},"Color")," in Carbon is carefully considered, and we\ndiscourage custom layer styles."),(0,o.kt)("p",null,"The first layer is the theme selection (i.e., 01 White theme). The second layer\nis core Carbon color tokens (i.e., field-01) for the selected them. The\ninteraction state tokens are nested in a third layer under “state.”"),(0,o.kt)("h2",null,"Explore additional kits"),(0,o.kt)("h3",null,"Data visualization"),(0,o.kt)("p",null,"The Data visualization Sketch file includes basic and complex chart assets,\nalong with usage guidance, theming guidance, palettes, and sample layouts.\nYou’ll find even more guidance and assets in this file than on the site."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Data visualization Sketch file",href:"https://www.sketch.com/s/1a36060a-7a5d-4ddb-aab1-639caa1f74d4",actionIcon:"download",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Gatsby theme"),(0,o.kt)("p",null,"The Gatsby Sketch kit has all the components, patterns, and sample layouts that\nhave been developed by teams within the IBM ecosystem. The Gatsby theme site\nincludes the components, guidelines, and everything you need to create and\ncontribute to Carbon sites."),(0,o.kt)("h4",null,"Image production guidelines"),(0,o.kt)("p",null,"For anyone interested in contributing to the Carbon Design System website, or\nmaking images for their own Pattern Asset Library (PAL), we follow a set of\nguidelines to ensure consistency across the content in the Gatsby ecosystem. The\nimage production guidelines Sketch kit includes guidance, symbols and templates\nto help designers with every aspect of image creation and component specs."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Gatsby theme Sketch kit",href:"sketch://add-library/cloud/304313c1-29a8-4946-a6f0-51dbec953bc2",actionIcon:"download",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Image production guideline Sketch kit",href:"https://www.sketch.com/s/240226b0-f455-484d-b412-cfd13fb1bb39",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Native mobile"),(0,o.kt)("p",null,"These Carbon native mobile Sketch resources include everything you need to get\nyour iOS or Android project underway. Install the grid template, be inspired by\nthe patterns and examples, and get started with either the Light or Dark theme."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Light theme for mobile",href:"sketch://add-library/cloud/s/a3343128-adb6-489c-9e62-709d89ba76e9",actionIcon:"download",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Dark theme for mobile",href:"sketch://add-library/cloud/s/1f59f590-6915-47b0-bf06-6fd66209b3b3",actionIcon:"download",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"IBM Grid template for mobile",href:"https://www.sketch.com/s/42e694ee-4b37-41c9-8c8f-480e2415d9de",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"}))),(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Mobile patterns and examples",href:"https://www.sketch.com/s/f13d67b9-3116-4b50-a2e9-56148f1976b0",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Accessibility"),(0,o.kt)("p",null,"The IBM Accessibility kit includes checklists, bite-sized guidance, and handoff\nassets to make sure your designs are accessible for implementation."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"IBM Accessibility Sketch kit",href:"https://www.sketch.com/s/f0a04c0d-fb62-4d71-92c6-07c402f8cae7",actionIcon:"launch",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Carbon Mid-Fi Sketch kit"),(0,o.kt)("p",null,"This kit provides designers with a way to visualize concepts and test them out\nbefore committing to high-fidelity designs."),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Carbon Mid-Fi Sketch kit",href:"sketch://add-library/cloud/e888aa99-4d88-46a4-9b33-3a033e7f5ca2",actionIcon:"download",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("h3",null,"Text toolbar pattern library"),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(k,{subTitle:"Text toolbar pattern library",href:"sketch://add-library/cloud/f32b7e90-d97e-48ef-ae53-beabf75f5846",actionIcon:"download",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"sketch",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Info"),(0,o.kt)("p",null,"If you’re brand new to Sketch, they offer some great\n",(0,o.kt)("a",{parentName:"p",href:"https://www.sketchapp.com/docs/"},"tutorials and help docs"),"."),(0,o.kt)("h3",null,"Updates"),(0,o.kt)("p",null,"We make small adjustments and bug fixes to the kit on a regular basis. When we\nmake a change to any of the libraries, you will be notified via a red pop-up in\nthe top right corner of the Sketch window."),(0,o.kt)("p",null,"The updates are opt-in, however we recommend you keep your kit as up to date as\npossible. Once a change is accepted, you will not be able to revert to the\nprevious version."),(0,o.kt)("h3",null,"Migration"),(0,o.kt)("p",null,"The Sketch libraries work on a continous migration stategy. The v11 updates were\nmade in the same libraries that were used in v10. If your Carbon Sketch\nlibraries are up to date then they are using v11. If you do not wish to use v11\nyet then do not accept the library update pushed on 31 March 2022."),(0,o.kt)("h3",null,"Support"),(0,o.kt)("p",null,"Can’t find an answer to your question? Open up an issue on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues/new/choose"},"GitHub"),"."))}w.isMDXComponent=!0}}]);