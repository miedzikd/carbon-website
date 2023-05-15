"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[14956],{28399:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),r=a(88650),i=a.n(r),l=a(1597),o=a(64905),s=a(68636),d=a(75900),m=a.n(d);var p=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:o,branch:s}=a||r,d=`${i}/edit/${s}${o}/src/pages${t}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},c=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),o=t===r,s=new RegExp(`${r}/?(#.*)?$`),d=a.replace(s,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var k=h,b=a(17680),f=a(75387),y=a(50041);var N=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:r,Title:d}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=t,{tabs:y,title:w,theme:v,description:C,keywords:x,date:T}=m,{interiorTheme:B}=(0,f.Z)(),{site:{pathPrefix:E}}=(0,l.useStaticQuery)("2456312558"),I=E?r.pathname.replace(E,""):r.pathname,M=y?I.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",D=v||B;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:D,pageTitle:w,pageDescription:C,pageKeywords:x,titleType:h},n.createElement(p,{title:d?n.createElement(d,null):w,label:"label",tabs:y,theme:D}),y&&n.createElement(k,{title:w,slug:I,tabs:y,currentTab:M}),n.createElement(b.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(N,{date:T})),n.createElement(c.Z,{pageContext:t,location:r,slug:I,tabs:y,currentTab:M}),n.createElement(o.Z,null))}},5116:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return f}});var n=a(45987),r=(a(67294),a(64983)),i=a(28399);const l=["components"],o={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=s("PageDescription"),m=s("AnchorLinks"),p=s("AnchorLink"),u=s("Row"),c=s("Column"),g=s("ResourceCard"),h=s("MdxIcon"),k={_frontmatter:o},b=i.Z;function f(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,r.kt)(b,Object.assign({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Welcome to Carbon! If you’re just starting out designing with Carbon, you’re in\nthe right place. Here’s a checklist of everything you need to get up and\nrunning.")),(0,r.kt)(m,{mdxType:"AnchorLinks"},(0,r.kt)(p,{mdxType:"AnchorLink"},"Step 1: Learn about Carbon"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Step 2: Access the tools"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Step 3: Get the Figma design kits"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Step 4: Review our usage guidance"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Step 5: Explore foundational guidance"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Step 6: Connect with us")),(0,r.kt)("h2",null,"Step 1: Learn about Carbon"),(0,r.kt)("p",null,"By adopting Carbon, designers gain a collection of reusable assets to design\nwebsites and user interfaces quickly and efficiently."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/language/"},"IBM Design Language")," is the visual\nexpression of IBM’s brand, including color, type scale, the grid, and more.\nCarbon translates the design language into code for building digital\nexperiences."),(0,r.kt)("p",null,"This is done through elements such as color tokens, type tokens, and spacing\ntokens that are meant to be applied to all sorts of digital experiences through\nguidance and components."),(0,r.kt)("h2",null,"Step 2: Access the tools"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For IBMers only:")),(0,r.kt)("p",null,"IBMers should get a license for Figma, our primary design kit tool. You may also\naccess tools we no longer support, Sketch, Adobe XD, and Axure, by heading to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://w3.ibm.com/design/toolbox/"},"Design Toolbox"),". However, we no longer\nmaintain or update the kits for these tools. We recommend you migrate to Figma\nto get the most updated kits we offer."),(0,r.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(c,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(g,{subTitle:"Get Figma",href:"https://w3.ibm.com/design/toolbox/?&_ga=2.49792614.1500760159.1682969477-2020417520.1680805833#/ui-design-tools/figma/README",actionIcon:"launch",mdxType:"ResourceCard"},(0,r.kt)(h,{name:"figma",mdxType:"MdxIcon"})))),(0,r.kt)("h2",null,"Step 3: Get the Figma design kits"),(0,r.kt)("p",null,"We maintain the core Carbon kits in ",(0,r.kt)("a",{parentName:"p",href:"/designing/kits/figma"},"Figma"),". These kits\ninclude all the Carbon core components and styles for reuse in your product and\nweb experiences. By using the kits you will automatically receive updates made\nto the Carbon libraries, ensuring your designs stay up-to-date with the latest\nreleases. This allows you to speak the same language and have shared\nfunctionality expectations as your developers in the hand-off and development\ncycle."),(0,r.kt)("p",null,"Head on over to the ",(0,r.kt)("a",{parentName:"p",href:"/designing/kits/figma"},"Design kits")," section and follow the\ninstructions to get set up with Figma."),(0,r.kt)("h3",null,"Core design kits"),(0,r.kt)("p",null,"Everyone using Carbon should use the following Figma core design kits as a\nstarting point for building user interfaces. This brings consistency and speed,\nallowing teams to focus on solving more specific user tasks. Core design kits\ninclude elements, core components, wireframes, and guidelines."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("th",{parentName:"tr",align:null},"Design kit"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IBM Brand"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/PkUl9UBuvA41GPpyl84NBc/Pictograms---IBM-Design-Language"},"IBM Pictograms")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Elements"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/J5c0d85dSJn9JnBhSYYLmD/Icons---IBM-Design-Language?node-id=129%3A2"},"IBM Icons")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Elements"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/rK06GY6bvEfokuzrFGdtWB/(v11)-Text-Styles---IBM-Design-Language?node-id=129%3A2"},"v11 Text styles")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Elements"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/Gvwx2RnAZzDKTjVuC5xOlO/Color-Styles---IBM-Design-Language?node-id=129%3A2"},"IBM Color palette")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Elements"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Carbon Core"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/YAnB1jKx0yCUL29j6uSLpg/(v11-BETA)-White-Theme---Carbon-Design-System"},"v11 White theme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UI"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/0sd447WTcazDI6Dq9tjXOe/(v11-BETA)-Gray-10-Theme---Carbon-Design-System"},"v11 Gray 10 theme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UI"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/fH8rkv1VUTw5pvFDvO1kPO/(v11-BETA)-Gray-90-Theme---Carbon-Design-System"},"v11 Gray 90 theme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UI"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/XhRIHF6qGiJQaJ5eOSSBRm/(v11-BETA)-Gray-100-Theme---Carbon-Design-System"},"v11 Gray 100 theme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UI"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accessibility"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.figma.com/file/zJlvN4TRbslRtyjFuxIDom/IBM-Accessibility-Design-Kit?node-id=0%3A1"},"Accessibility toolkit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Guidelines"))))),(0,r.kt)("p",null,"The links in the table for Figma Libraries are preview only. Some of the Figma\nkits are for internal IBMers. To learn more about installing Figma Libraries and\navailable external libraries visit the Figma tutorial\n",(0,r.kt)("a",{parentName:"p",href:"/designing/kits/figma"},"Figma tutorial"),"."),(0,r.kt)("h3",null,"Additional design assets"),(0,r.kt)("p",null,"Support for v11 Figma kits are prioritized, but\n",(0,r.kt)("a",{parentName:"p",href:"https://next.carbondesignsystem.com/design-kits?q=v10&tool%5B%5D=figma"},"Figma v10 kits"),"\nare also available with limited support. Visit the\n",(0,r.kt)("a",{parentName:"p",href:"https://next.carbondesignsystem.com/design-kits"},"design kit catalog")," to see a\ncomprehensive list of all design kits, including v10 Figma kits and kits for\ntools that are no longer maintained. In\n",(0,r.kt)("a",{parentName:"p",href:"/designing/design-resources/"},"Other resources"),", you’ll find links to icon\nlibraries, color palettes, plugins, and more."),(0,r.kt)("h2",null,"Step 4: Review our usage guidance"),(0,r.kt)("p",null,"Our usage guidance is detailed and thorough, and you’ll learn a lot about the\nsystem by reading through the components and patterns documentation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/components/overview"},"Components"),": Carbon provides in-depth design usage and\nstyle guidance for all components. It’s important to be familiar with this\nadditional UX and visual guidance when you are designing with our components.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/patterns/overview"},"Patterns"),": We also offer a range of key patterns—best\npractice solutions for how a user achieves a goal. These design patterns have\nbeen harvested from products built with Carbon, and have been reviewed and\napproved for use by the Carbon governance team."))),(0,r.kt)("h2",null,"Step 5: Explore foundational guidance"),(0,r.kt)("p",null,"The following sites provide guidance for creating experiences that are\nconsistent, provide an interoperability of experience with other offerings, and\nrepresent IBM as a company."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Some of this content is accessible to IBMers only.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Resource")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"What you’ll find")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.ibm.com/brand/"},"IBM Brand Center")),(0,r.kt)("td",{parentName:"tr",align:null},"Home base for the IBM Brand story, visual brand elements, guidelines, and assets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.ibm.com/brand/experience-guides"},"IBM Brand Systems")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation of the rationale behind every visual and verbal detail for IBM businesses, audiences, categories, and offerings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.ibm.com/design/language/"},"IBM Design Language")),(0,r.kt)("td",{parentName:"tr",align:null},"IBM’s design philosophy and principles that govern and guide every experience designed by IBM.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ibmdocs-test.mybluemix.net/docs/en/ibm-style?_ga=2.139068405.716538948.1649782752-687898146.1623775061"},"IBM Style")),(0,r.kt)("td",{parentName:"tr",align:null},"A central reference that ensures all IBM content for external audiences is grammatically correct, clear, consistent, appropriate for global audiences, and easy to translate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://w3.ibm.com/design/experience-standards/"},"IBM Experience Standards")),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a shared definition of our standards at IBM, a way to measure excellence, and actionable ways to improve product or service experiences.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.ibm.com/able/"},"IBM Accessibility")),(0,r.kt)("td",{parentName:"tr",align:null},"Discipline-specific direction on how to make your product more accessible.")))),(0,r.kt)("h2",null,"Step 6: Connect with us"),(0,r.kt)("h3",null,"Join us and the Carbon community"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For IBMers only:")," If you have a question about any aspect of the kits or tools,\nyou can reach out to us on Slack and use that as a way to connect with your\nfellow designers. Chances are someone has had a similar problem to you and will\njump in to help you out."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/messages/C0M053VPT/"},"#carbon-design-system")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/C046Y0YUD"},"#carbon-components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ibm-studios.slack.com/archives/CJUGA7P6H"},"#carbon-tutorial"))),(0,r.kt)("p",null,"And be sure to sign up for the latest Carbon news at\n",(0,r.kt)("a",{parentName:"p",href:"https://ibm-studios.slack.com/archives/CJ35H36MP"},"#carbon-announcements"),"."),(0,r.kt)("h3",null,"Learn about what we’re doing"),(0,r.kt)("p",null,"You can find out about Carbon’s latest changes and future plans on the\n",(0,r.kt)("a",{parentName:"p",href:"/all-about-carbon/releases/"},"Releases")," page."),(0,r.kt)("p",null,"If you have questions, here are all the ways to ",(0,r.kt)("a",{parentName:"p",href:"/help/contact-us"},"contact us"),"."),(0,r.kt)("h3",null,"Join us at a meetup"),(0,r.kt)("p",null,"Attend one of our ",(0,r.kt)("a",{parentName:"p",href:"/whats-happening/meetups"},"meetups")," to connect with us and\nlevel up your skills. The bi-weekly design playback is great for getting\nfeedback on work in progress from a group of designers and design leaders\ndedicated to your success."),(0,r.kt)("p",null,"If there’s something in particular you’re interested in, we’d love to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new/choose"},"hear from you"),"."),(0,r.kt)("h3",null,"Learn about the benefits"),(0,r.kt)("p",null,"Learn more about the\n",(0,r.kt)("a",{parentName:"p",href:"/all-about-carbon/who-uses-carbon/"},"benefits of using Carbon")," as a designer,\nand how Carbon benefits all members of a product team."))}f.isMDXComponent=!0}}]);