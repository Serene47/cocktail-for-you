import{a as w,b as B,c as A,d as $}from"./chunk-PCNE7SM6.js";import{g as f}from"./chunk-2LEE3OVX.js";import{A as l,C as E,E as _,F as k,H as L,J as T,O as F,a as x,b as D,e as O,f as d,i as y,j as i,k as C,l as m,m as s,p,q as M,r as P,s as S,t as n,u as a,v as g,y as I,z as o}from"./chunk-VIFWXIG5.js";var u=class e{cocktailDataService=d(B);cocktailAdapterService=d(w);cocktailDetails=new x;cocktailDetails$=this.cocktailDetails.asObservable();cocktailDetailsError=new x;cocktailDetailsError$=this.cocktailDetailsError.asObservable();cocktailDetailsLoading=new D(!1);cocktailDetailsLoading$=this.cocktailDetailsLoading.asObservable();fetchCocktailDetails(c){this.cocktailDetailsLoading.next(!0),this.cocktailDetailsError.next(null),this.cocktailDataService.getById(c).subscribe({next:t=>{if(this.cocktailDetailsLoading.next(!1),typeof t.drinks=="string"){this.cocktailDetailsError.next(f);return}if(!t.drinks||!t.drinks[0]){this.cocktailDetailsError.next(f);return}let r=this.cocktailAdapterService.transformDTOToDetails(t.drinks[0]);this.cocktailDetails.next(r)},error:()=>{this.cocktailDetailsLoading.next(!1),this.cocktailDetailsError.next(f)}})}static \u0275fac=function(t){return new(t||e)};static \u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"})};function V(e,c){if(e&1&&(n(0,"li",3)(1,"b",4),o(2),a(),n(3,"span",5),o(4),a()()),e&2){let t=c.$implicit;i(2),l(t.name),i(2),l(t.measurement)}}var h=class e{ingredients;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-cocktail-ingredients"]],inputs:{ingredients:"ingredients"},decls:6,vars:0,consts:[[1,"ingredients"],[1,"ingredients__title"],[1,"ingredients__content","ingredients-list"],[1,"ingredients-list__item","ingredient-item"],[1,"ingredient-item__name"],[1,"ingredient-item__measurement"]],template:function(t,r){t&1&&(n(0,"div",0)(1,"h4",1),o(2,"Ingredients"),a(),n(3,"ul",2),P(4,V,5,2,"li",3,M),a()()),t&2&&(i(4),S(r.ingredients))},styles:[".ingredients__title[_ngcontent-%COMP%]{margin-bottom:1rem}.ingredients-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:.5rem;list-style:none;background-color:#fcfcfc}.ingredients-list__item[_ngcontent-%COMP%]{border-bottom:1px solid #aaa}.ingredients-list__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.ingredient-item[_ngcontent-%COMP%]{display:flex;padding:.5rem}.ingredient-item__name[_ngcontent-%COMP%], .ingredient-item__measurement[_ngcontent-%COMP%]{flex-basis:50%}"],changeDetection:0})};var z=()=>["../../"];function G(e,c){if(e&1&&(g(0,"app-badge",7),_(1,"uppercase")),e&2){let t=I();s("label",k(1,2,t.alcoholicStatus))("variant",t.badgeVariant)}}function U(e,c){if(e&1&&(n(0,"div",2)(1,"h4",5),o(2),a(),n(3,"div",6),m(4,G,2,4,"app-badge",7),g(5,"img",8),n(6,"ul",9)(7,"li",10)(8,"span",11),o(9,"Category"),a(),n(10,"b",12),o(11),a()(),n(12,"li",10)(13,"span",11),o(14,"Glass type"),a(),n(15,"b",12),o(16),a()()()(),n(17,"div",13)(18,"h3",14),o(19),a(),n(20,"div",15)(21,"h4",16),o(22,"Recipe"),a(),n(23,"p",17),o(24),a()(),g(25,"app-cocktail-ingredients",18),a()()),e&2){let t=c;i(2),l(t.name),i(2),p(t.badgeVariant?4:-1),i(),s("src",t.image,y)("alt",t.name),i(6),l(t.category||"-"),i(5),l(t.glassType||"-"),i(3),l(t.name),i(5),l(t.instructions),i(),s("ingredients",t.ingredients)}}function K(e,c){e&1&&(n(0,"p",3),o(1),a()),e&2&&(i(),l(c))}function q(e,c){e&1&&g(0,"app-loader",4),e&2&&s("extraVerticalMargin",64)}var R=class e{cocktailFacadeService=d(u);id;ngOnInit(){this.cocktailFacadeService.fetchCocktailDetails(this.id)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-cocktail-details"]],inputs:{id:"id"},decls:9,vars:11,consts:[[1,"navigation"],[1,"navigation__item","button","button-link","button-outline",3,"routerLink"],[1,"cocktail-card"],[1,"excuse-text"],[3,"extraVerticalMargin"],[1,"cocktail-card__title","cocktail-card__title--sm"],[1,"cocktail-card__highlights","cocktail-hightlights"],[1,"cocktail-highlights__status",3,"label","variant"],[1,"cocktail-highlights__image",3,"src","alt"],[1,"cocktail-highlights__meta","cocktail-meta"],[1,"cocktail-meta__item","meta-item"],[1,"meta-item__label"],[1,"meta-item__value"],[1,"cocktail-card__details"],[1,"cocktail-details__title","cocktail-card__title"],[1,"cocktail-details__instructions","cocktail-instructions"],[1,"cocktail-instructions__title"],[1,"cocktail-instructions__content"],[3,"ingredients"]],template:function(t,r){if(t&1&&(n(0,"div",0)(1,"a",1),o(2,"Back"),a()(),m(3,U,26,9,"div",2),_(4,"async"),m(5,K,2,1,"p",3),_(6,"async"),m(7,q,1,1,"app-loader",4),_(8,"async")),t&2){let v,b;i(),s("routerLink",E(10,z)),i(2),p((v=k(4,4,r.cocktailFacadeService.cocktailDetails$))?3:-1,v),i(2),p((b=k(6,6,r.cocktailFacadeService.cocktailDetailsError$))?5:-1,b),i(2),p(k(8,8,r.cocktailFacadeService.cocktailDetailsLoading$)?7:-1)}},dependencies:[L,h,A,F,$,T],styles:[".navigation[_ngcontent-%COMP%]{margin:1rem 0}.cocktail-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;padding:1.25rem;background-color:beige;border:1px solid #CD7F32;border-radius:.25rem}@media (min-width: 768px){.cocktail-card[_ngcontent-%COMP%]{flex-direction:row}.cocktail-card__highlights[_ngcontent-%COMP%], .cocktail-card__details[_ngcontent-%COMP%]{flex-basis:50%}}@media (min-width: 992px){.cocktail-card__highlights[_ngcontent-%COMP%]{flex-basis:45%}.cocktail-card__details[_ngcontent-%COMP%]{flex-basis:55%}}.cocktail-card__title[_ngcontent-%COMP%]{color:#8b0000;display:none}.cocktail-card__title--sm[_ngcontent-%COMP%]{display:block}@media (min-width: 768px){.cocktail-card__title[_ngcontent-%COMP%]{display:block}.cocktail-card__title--sm[_ngcontent-%COMP%]{display:none}}.cocktail-highlights__status[_ngcontent-%COMP%]{float:right;margin-bottom:1rem}.cocktail-highlights__image[_ngcontent-%COMP%]{width:100%;aspect-ratio:1;vertical-align:bottom}.cocktail-highlights__meta[_ngcontent-%COMP%]{margin-top:1rem}.cocktail-meta[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:.5rem;list-style:none;background-color:#fcfcfc}.cocktail-meta__item[_ngcontent-%COMP%]{border-bottom:1px solid #aaa}.cocktail-meta__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.meta-item[_ngcontent-%COMP%]{display:flex;padding:.5rem}.meta-item__label[_ngcontent-%COMP%], .meta-item__value[_ngcontent-%COMP%]{flex-basis:50%}.cocktail-details__title[_ngcontent-%COMP%]{margin-bottom:1rem;margin-top:.5rem}.cocktail-details__instructions[_ngcontent-%COMP%], .cocktail-instructions__title[_ngcontent-%COMP%]{margin-bottom:1rem}.cocktail-instructions__content[_ngcontent-%COMP%]{line-height:1.5}.excuse-text[_ngcontent-%COMP%]{margin:2rem 0;font-size:1.25rem;text-align:center;color:#aaa}"],changeDetection:0})};export{R as CocktailDetailsComponent};
