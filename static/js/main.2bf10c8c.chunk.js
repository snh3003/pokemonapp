(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{25:function(e,n,a){e.exports=a(35)},33:function(e,n,a){},35:function(e,n,a){"use strict";a.r(n);var t=a(3),m=a.n(t),r=a(18),c=a.n(r),l=a(24),o=a(8),s=a(15);function i(e){var n=e.pokemon;return m.a.createElement("div",{className:"pokemon"},m.a.createElement("div",{className:"pokemon__name"},m.a.createElement("p",null,n.name)),m.a.createElement("div",{className:"pokemon__meta"},m.a.createElement("span",null,n.maxHP),m.a.createElement("span",null,n.maxCP)),m.a.createElement("div",{className:"pokemon__image"},m.a.createElement("img",{src:n.image,alt:n.name})),m.a.createElement("div",{className:"pokemon__attacks"},n.attacks.special.slice(0,3).map((function(e){return m.a.createElement("span",{key:"".concat(e.name,"-").concat(e.damage)},e.name)}))))}var p=a(19),u=a(12);function k(){var e=Object(p.a)(["\n    query pokemons($first: Int!) {\n        pokemons(first: $first) {\n            id\n            name\n            image\n            maxHP\n            maxCP\n            attacks {\n                special {\n                    name\n                    damage\n                }\n            }\n        }   \n    }\n"]);return k=function(){return e},e}var E=a.n(u)()(k());function d(){var e=Object(s.a)(E,{variables:{first:20}}).data,n=(e=void 0===e?{}:e).pokemons,a=void 0===n?[]:n;return m.a.createElement("div",{className:"container"},a&&a.map((function(e){return m.a.createElement(i,{key:e.id,pokemon:e})})))}a(33);function v(){var e=new l.a({uri:"https://graphql-pokemon.now.sh"});return m.a.createElement("div",null,m.a.createElement("center",null,m.a.createElement("h1",null,"Pokemon App"),m.a.createElement("p",null," It takes sometime to display the elements!!!")),m.a.createElement(o.a,{client:e},m.a.createElement("main",null,m.a.createElement(d,null))))}c.a.render(m.a.createElement(v,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.2bf10c8c.chunk.js.map