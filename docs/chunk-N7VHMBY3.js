import{b as a,d as s,h as b,i as h}from"./chunk-2LEE3OVX.js";import{D as k,K as I,e as o,f as l,j as p,k as d,o as u,t as f,u as g,v as C}from"./chunk-XDA6K6GO.js";var x=(e,t)=>({"margin-top":e,"margin-bottom":t}),y=class e{extraVerticalMargin=0;static \u0275fac=function(r){return new(r||e)};static \u0275cmp=d({type:e,selectors:[["app-loader"]],inputs:{extraVerticalMargin:"extraVerticalMargin"},decls:2,vars:5,consts:[[1,"loader"],[1,"loader__content"]],template:function(r,n){r&1&&(f(0,"div",0),C(1,"div",1),g()),r&2&&(p(),u(k(2,x,n.extraVerticalMargin+"px",n.extraVerticalMargin+"px")))},styles:[".loader__content[_ngcontent-%COMP%]{width:4rem;padding:.5rem;aspect-ratio:1;border-radius:50%;background:#8b0000;-webkit-mask:conic-gradient(rgba(0,0,0,0) 10%,#000),linear-gradient(#000 0 0) content-box;mask:conic-gradient(rgba(0,0,0,0) 10%,#000),linear-gradient(#000 0 0) content-box;-webkit-mask-composite:source-out;mask-composite:subtract;animation:_ngcontent-%COMP%_l3 1s infinite linear}.loader__content--with-margin[_ngcontent-%COMP%]{margin:3rem auto}@keyframes _ngcontent-%COMP%_l3{to{transform:rotate(1turn)}}"]})};var E=class e{transformDTOToSummary(t){return{id:t.idDrink,alcoholicStatus:t.strAlcoholic,category:t.strCategory,name:t.strDrink,thumbnail:`${t.strDrinkThumb}/${a.MEDIUM}`}}transformDTOToDetails(t){let r=this.transformIngredients(t);return{id:t.idDrink,alcoholicStatus:t.strAlcoholic,category:t.strCategory,name:t.strDrink,image:`${t.strDrinkThumb}/${a.LARGE}`,instructions:t.strInstructions,ingredients:r}}transformIngredients(t){let r=[];return Object.entries(t).reduce((n,[A,m])=>{let i=A.match(b);if(!i||!i[0]||!m)return n;let v=`${h}${i[1]}`,S=t[v]||"-";return n.push({name:m,measurement:S}),n},r)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"})};var c={production:!0,cockTailAPI:"https://www.thecocktaildb.com/api/json/v1/1"};var M=class e{httpClient=l(I);getAll(t=""){return this.httpClient.get(`${c.cockTailAPI}/${s.SEARCH}${t}`)}getById(t){return this.httpClient.get(`${c.cockTailAPI}/${s.LOOKUP}${t}`)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"})};export{E as a,M as b,y as c};
