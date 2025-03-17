import{a as F,b as w,c as T}from"./chunk-N7VHMBY3.js";import{g as C}from"./chunk-2LEE3OVX.js";import{A as l,C as I,E as k,F as f,H as E,O as L,a as h,b as D,e as O,f as s,i as M,j as i,k as m,l as p,m as d,p as _,q as y,r as P,s as S,t as n,u as a,v as g,z as o}from"./chunk-XDA6K6GO.js";var u=class e{cocktailDataService=s(w);cocktailAdapterService=s(F);cocktailDetails=new h;cocktailDetails$=this.cocktailDetails.asObservable();cocktailDetailsError=new h;cocktailDetailsError$=this.cocktailDetailsError.asObservable();cocktailDetailsLoading=new D(!1);cocktailDetailsLoading$=this.cocktailDetailsLoading.asObservable();fetchCocktailDetails(c){this.cocktailDetailsLoading.next(!0),this.cocktailDetailsError.next(null),this.cocktailDataService.getById(c).subscribe({next:t=>{if(this.cocktailDetailsLoading.next(!1),typeof t.drinks=="string"){this.cocktailDetailsError.next(C);return}if(!t.drinks||!t.drinks[0]){this.cocktailDetailsError.next(C);return}let r=this.cocktailAdapterService.transformDTOToDetails(t.drinks[0]);this.cocktailDetails.next(r)},error:()=>{this.cocktailDetailsLoading.next(!1),this.cocktailDetailsError.next(C)}})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"})};function j(e,c){if(e&1&&(n(0,"li",3)(1,"b",4),o(2),a(),n(3,"span",5),o(4),a()()),e&2){let t=c.$implicit;i(2),l(t.name),i(2),l(t.measurement)}}var x=class e{ingredients;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-cocktail-ingredients"]],inputs:{ingredients:"ingredients"},decls:6,vars:0,consts:[[1,"ingredients"],[1,"ingredients__title"],[1,"ingredients__content","ingredients-list"],[1,"ingredients-list__item","ingredient-item"],[1,"ingredient-item__name"],[1,"ingredient-item__measurement"]],template:function(t,r){t&1&&(n(0,"div",0)(1,"h4",1),o(2,"Ingredients"),a(),n(3,"ul",2),P(4,j,5,2,"li",3,y),a()()),t&2&&(i(4),S(r.ingredients))},styles:[".ingredients__title[_ngcontent-%COMP%]{margin-bottom:1rem}.ingredients-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:.5rem;list-style:none;background-color:#fcfcfc}.ingredients-list__item[_ngcontent-%COMP%]{border-bottom:1px solid #aaa}.ingredients-list__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.ingredient-item[_ngcontent-%COMP%]{display:flex;padding:.5rem}.ingredient-item__name[_ngcontent-%COMP%], .ingredient-item__measurement[_ngcontent-%COMP%]{flex-basis:50%}"]})};var R=()=>["../../"];function N(e,c){if(e&1&&(n(0,"div",2)(1,"h4",5),o(2),a(),n(3,"div",6),g(4,"img",7),n(5,"ul",8)(6,"li",9)(7,"span",10),o(8,"Category"),a(),n(9,"b",11),o(10),a()(),n(11,"li",9)(12,"span",10),o(13,"Alcoholic Status"),a(),n(14,"b",11),o(15),a()()()(),n(16,"div",12)(17,"h3",13),o(18),a(),n(19,"div",14)(20,"h4",15),o(21,"Recipe"),a(),n(22,"p",16),o(23),a()(),g(24,"app-cocktail-ingredients",17),a()()),e&2){let t=c;i(2),l(t.name),i(2),d("src",t.image,M)("alt",t.name),i(6),l(t.category),i(5),l(t.alcoholicStatus),i(3),l(t.name),i(5),l(t.instructions),i(),d("ingredients",t.ingredients)}}function z(e,c){e&1&&(n(0,"p",3),o(1),a()),e&2&&(i(),l(c))}function V(e,c){e&1&&g(0,"app-loader",4),e&2&&d("extraVerticalMargin",64)}var B=class e{cocktailFacadeService=s(u);id;ngOnInit(){this.cocktailFacadeService.fetchCocktailDetails(this.id)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-cocktail-details"]],inputs:{id:"id"},decls:9,vars:11,consts:[[1,"navigation"],[1,"navigation__item","button","button-link","button-outline",3,"routerLink"],[1,"cocktail-card"],[1,"excuse-text"],[3,"extraVerticalMargin"],[1,"cocktail-card__title","cocktail-card__title--sm"],[1,"cocktail-card__highlights","cocktail-hightlights"],[1,"cocktail-highlights__image",3,"src","alt"],[1,"cocktail-highlights__meta","cocktail-meta"],[1,"cocktail-meta__item","meta-item"],[1,"meta-item__label"],[1,"meta-item__value"],[1,"cocktail-card__details"],[1,"cocktail-details__title","cocktail-card__title"],[1,"cocktail-details__instructions","cocktail-instructions"],[1,"cocktail-instructions__title"],[1,"cocktail-instructions__content"],[3,"ingredients"]],template:function(t,r){if(t&1&&(n(0,"div",0)(1,"a",1),o(2,"Back"),a()(),p(3,N,25,8,"div",2),k(4,"async"),p(5,z,2,1,"p",3),k(6,"async"),p(7,V,1,1,"app-loader",4),k(8,"async")),t&2){let v,b;i(),d("routerLink",I(10,R)),i(2),_((v=f(4,4,r.cocktailFacadeService.cocktailDetails$))?3:-1,v),i(2),_((b=f(6,6,r.cocktailFacadeService.cocktailDetailsError$))?5:-1,b),i(2),_(f(8,8,r.cocktailFacadeService.cocktailDetailsLoading$)?7:-1)}},dependencies:[E,x,T,L],styles:[".navigation[_ngcontent-%COMP%]{margin:1rem 0}.cocktail-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;padding:1.25rem;background-color:beige;border:1px solid #CD7F32;border-radius:.25rem}@media (min-width: 768px){.cocktail-card[_ngcontent-%COMP%]{flex-direction:row}.cocktail-card__highlights[_ngcontent-%COMP%], .cocktail-card__details[_ngcontent-%COMP%]{flex-basis:50%}}@media (min-width: 992px){.cocktail-card__highlights[_ngcontent-%COMP%]{flex-basis:45%}.cocktail-card__details[_ngcontent-%COMP%]{flex-basis:55%}}.cocktail-card__title[_ngcontent-%COMP%]{color:#8b0000;display:none}.cocktail-card__title--sm[_ngcontent-%COMP%]{display:block}@media (min-width: 768px){.cocktail-card__title[_ngcontent-%COMP%]{display:block}.cocktail-card__title--sm[_ngcontent-%COMP%]{display:none}}.cocktail-highlights__image[_ngcontent-%COMP%]{width:100%;aspect-ratio:1;vertical-align:bottom}.cocktail-highlights__meta[_ngcontent-%COMP%]{margin-top:1rem}.cocktail-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:.5rem;list-style:none;background-color:#fcfcfc}.cocktail-meta__item[_ngcontent-%COMP%]{border-bottom:1px solid #aaa}.cocktail-meta__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.meta-item[_ngcontent-%COMP%]{display:flex;padding:.5rem}.meta-item__label[_ngcontent-%COMP%], .meta-item__value[_ngcontent-%COMP%]{flex-basis:50%}.cocktail-details__title[_ngcontent-%COMP%]{margin-bottom:1rem;margin-top:.5rem}.cocktail-details__instructions[_ngcontent-%COMP%], .cocktail-instructions__title[_ngcontent-%COMP%]{margin-bottom:1rem}.cocktail-instructions__content[_ngcontent-%COMP%]{line-height:1.5}.excuse-text[_ngcontent-%COMP%]{margin:2rem 0;font-size:1.25rem;text-align:center;color:#aaa}"]})};export{B as CocktailDetailsComponent};
