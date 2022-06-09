"use strict";(self.webpackChunktuva_docs=self.webpackChunktuva_docs||[]).push([[7316],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return a?i.createElement(h,s(s({ref:t},u),{},{components:a})):i.createElement(h,s({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8237:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),s=["components"],o={sidebar_position:1},l="Claims",c={unversionedId:"data-sources/claims",id:"data-sources/claims",title:"Claims",description:"We are actively developing knowledge and code for claims pre-processing, which is the process of transforming claims data so it's ready for analytics and machine learning.  Check out our latest thinking on this process here.",source:"@site/docs/data-sources/claims.md",sourceDirName:"data-sources",slug:"/data-sources/claims",permalink:"/knowledge/data-sources/claims",draft:!1,editUrl:"https://github.com/tuva-health/knowledge_base/edit/main/docs/data-sources/claims.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Sources",permalink:"/knowledge/category/data-sources"},next:{title:"FHIR",permalink:"/knowledge/data-sources/fhir"}},u={},m=[{value:"What is Claims Data?",id:"what-is-claims-data",level:2},{value:"Claims Data Pre-processing",id:"claims-data-pre-processing",level:2},{value:"Analytic Uses of Claims Data",id:"analytic-uses-of-claims-data",level:2},{value:"References",id:"references",level:2}],d={toc:m};function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"claims"},"Claims"),(0,r.kt)("p",null,"We are actively developing knowledge and code for claims pre-processing, which is the process of transforming claims data so it's ready for analytics and machine learning.  Check out our latest thinking on this process ",(0,r.kt)("a",{parentName:"p",href:"https://miro.com/app/board/uXjVOvThMEo=/?share_link_id=354108018377"},"here"),"."),(0,r.kt)("p",null,"And we're actively looking for claims data experts to help us get this critical transformation layer right.  If you or someone you know could help, please reach out!"),(0,r.kt)("h2",{id:"what-is-claims-data"},"What is Claims Data?"),(0,r.kt)("p",null,"Claims data is the data that is generated when medical providers bill insurance companies for medical services.  There are two types of paper claims forms: UB-04 and CMS-1500.  Each paper claim form has a corresponding digial claim form: UB-04 is the 837i and CMS-1500 the 837p.  "),(0,r.kt)("p",null,"The following types of organizations use the UB-04 (837i) claim form: hospitals, skilled nursing facilities, hospice, and home health."),(0,r.kt)("p",null,"The following types of organizations use the CMS-1500 (837p) claim form: physician, labs, durable medical equipment, etc."),(0,r.kt)("p",null,"Claims are submitted by providers and organizations that bill on their behalf to clearing houses.  Clearing houses process the claims are perform basic checks to make sure the claim being submitted has been filled out properly.  The clearing house then passes the claim to the insurance company for final processing and adjudication (i.e. the process of determine a claim payment should or should not be made).  A resulting billing form is shared back with the provider, indicating whether payment will be made or the claim was denied."),(0,r.kt)("p",null,"Patient eligibility data is an additional critical subset of claims data.  It provides exact start and end dates indicating the specific time period a patient was eligible for insurance and therefore insurance would have paid for covered medical expenses.  Eligibility data is critical - without it you can't calculate population-level financial (PMPM) or utilization (PKPY) measures, which is of primary interest in most of value-based care analytics."),(0,r.kt)("p",null,"Almost all insurance companies retain a copy of the claims (and eligibility) data in a database.  Each company decides how to model this data on their own, and while the basic data elements are common, most of the schemas (i.e. how the data are modeled in tables in a database) for these datasets vary."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1TMMM1u8GTdWqxGcHALRtGMjcxBXQwBbWUW8pHL66W_E/edit?usp=sharing%C3%9F"},"input layer")," of the Claims Pre-processing Package from the Tuva Project to see what a relatively common claims data schema looks like."),(0,r.kt)("h2",{id:"claims-data-pre-processing"},"Claims Data Pre-processing"),(0,r.kt)("p",null,"Before claims data can be used in many of the most common value-based care or population-level use cases, it must first go through a transformation process.  This process involves the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating a member months table from eligibility data"),(0,r.kt)("li",{parentName:"ul"},"Adjusting and reversing claims"),(0,r.kt)("li",{parentName:"ul"},"Merging claims into encounters"),(0,r.kt)("li",{parentName:"ul"},"Assigning encounter types")),(0,r.kt)("p",null,"Creating the member months table..."),(0,r.kt)("p",null,"Adjusting and reversing claims..."),(0,r.kt)("p",null,"Merging claims into encounters..."),(0,r.kt)("h2",{id:"analytic-uses-of-claims-data"},"Analytic Uses of Claims Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Value-based Care Analytics"),(0,r.kt)("li",{parentName:"ul"},"Fraud, Waste, and Abuse"),(0,r.kt)("li",{parentName:"ul"},"Health Economics and Outcomes Research (HEOR) Studies"),(0,r.kt)("li",{parentName:"ul"},"Drug Development and Commercialization")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6wTohlWfwAo"},"Claims Data: Source and Processing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/datavant/the-fragmentation-of-health-data-8fa708109e13"},"The Fragmentation of Health Data by Travis May")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/the-claims-submission-pipeline-fbe8fb9c0f19"},"The Medical Claims Submission Pipeline by Guido Vivaldi"))))}p.isMDXComponent=!0}}]);