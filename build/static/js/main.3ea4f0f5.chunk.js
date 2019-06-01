(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(18)},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(4),m=t.n(l),s=(t(16),t(17),function(e){return o.a.createElement("header",{className:"pokedex-header"},o.a.createElement("h1",{className:"pokedex-header__title"},"Pokedex"))}),r=t(5),i=t(6),c=t(8),u=t(7),k=t(1),d=t(9),p=t(2),g=t.n(p),h=function(e){return o.a.createElement(o.a.Fragment,null,!0===e.isLoadingAllPokemons?o.a.createElement(g.a,{className:"main-spiner",type:"balls",color:"#daed17",height:200,width:200,delay:300}):o.a.createElement("div",{className:"pokedex-wrap"},o.a.createElement("div",{className:"pokedex__pokemons"},e.pokemons.map(function(n){return o.a.createElement("div",{key:n.name||n.pokemon.name,className:"pokedex__pokemon",onClick:function(){return e.singlePokemon(void 0!==n.url?n.url.match(/pokemon\/\d+/g):n.pokemon.url.match(/pokemon\/\d+/g))}},window.innerWidth<500?o.a.createElement("a",{className:"pokedex__scroll",href:"#pokedex-info"},o.a.createElement("img",{src:"http://play.pokemonshowdown.com/sprites/xyani/".concat(n.name||n.pokemon.name,".gif"),alt:n.name||n.pokemon.name,className:"pokedex__pokemons-image"}),o.a.createElement("h3",{className:"pokedex__pokemons-name"},n.name||n.pokemon.name)):o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"http://play.pokemonshowdown.com/sprites/xyani/".concat(n.name||n.pokemon.name,".gif"),alt:n.name||n.pokemon.name,className:"pokedex__pokemons-image"}),o.a.createElement("h3",{className:"pokedex__pokemons-name"},n.name||n.pokemon.name)))})),0===+e.selectedPokemon?o.a.createElement("button",{className:"pokedex__limit",onClick:e.setLimit},"Load More"):o.a.createElement(o.a.Fragment,null)))},v=function(e){var n=e.singlePokemon,t=e.pokemonType;return o.a.createElement("table",{className:"pokemon-table"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Type"),o.a.createElement("td",null,t[0].type.name)),o.a.createElement("tr",null,o.a.createElement("td",null,"Attack"),o.a.createElement("td",null,n.stats[4].base_stat)),o.a.createElement("tr",null,o.a.createElement("td",null,"Defense"),o.a.createElement("td",null,n.stats[3].base_stat)),o.a.createElement("tr",null,o.a.createElement("td",null,"HP"),o.a.createElement("td",null,n.stats[5].base_stat)),o.a.createElement("tr",null,o.a.createElement("td",null,"SP Attack"),o.a.createElement("td",null,n.stats[2].base_stat)),o.a.createElement("tr",null,o.a.createElement("td",null,"SP Defense"),o.a.createElement("td",null,n.stats[1].base_stat)),o.a.createElement("tr",null,o.a.createElement("td",null,"Speed"),o.a.createElement("td",null,n.stats[0].base_stat)),o.a.createElement("tr",null,o.a.createElement("td",null,"Weight"),o.a.createElement("td",null,n.weight)),o.a.createElement("tr",null,o.a.createElement("td",null,"Total moves"),o.a.createElement("td",null,n.moves.length))))},E=function(e){var n=e.isLoading,t=e.singlePokemon,a=t.types.filter(function(e){return 1===e.slot});return o.a.createElement("div",{className:"pokedex-info",id:"pokedex-info"},!0===n?o.a.createElement(g.a,{type:"balls",color:"#daed17",height:100,width:200,className:"spiner",delay:300}):o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"http://play.pokemonshowdown.com/sprites/xyani/".concat(t.name,".gif"),alt:t.name,className:"pokedex-info__image"}),o.a.createElement("p",{className:"pokedex-info__name"},t.name),o.a.createElement(v,{pokemonType:a,singlePokemon:t})))},f="http://pokeapi.co/api/v2/pokemon/",P=[{value:"0",name:"all"},{value:"1",name:"normal"},{value:"2",name:"fighting"},{value:"3",name:"flying"},{value:"4",name:"poison"},{value:"5",name:"ground"},{value:"6",name:"rock"},{value:"7",name:"bug"},{value:"8",name:"ghost"},{value:"9",name:"steel"},{value:"10",name:"fire"},{value:"11",name:"water"},{value:"12",name:"grass"},{value:"13",name:"electric"},{value:"14",name:"psychic"},{value:"15",name:"ice"},{value:"16",name:"dragon"},{value:"17",name:"dark"},{value:"18",name:"fairy"},{value:"10001",name:"hi"}],y=function(e){var n=e.selectedPokemon,t=e.onChange;return o.a.createElement("label",{className:"label-type"},"\u0412\u0441\u0435 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u044b \u044d\u0442\u043e \u0442\u0438\u043f\u0430:",o.a.createElement("select",{value:n,name:"type",className:"main__selected",onChange:t},P.map(function(e){return o.a.createElement("option",{value:e.value,key:e.value},e.name)})))},_=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).state={limitPokemon:12,pokemons:[],singlePokemon:null,selectedPokemon:0,isLoadingAllPokemons:!1,isLoadingSinglePokemon:!1},t.setLimit=t.setLimit.bind(Object(k.a)(t)),t.getPokemonsFromServer=t.getPokemonsFromServer.bind(Object(k.a)(t)),t.getSinglePokemonFromServer=t.getSinglePokemonFromServer.bind(Object(k.a)(t)),t.handleChange=t.handleChange.bind(Object(k.a)(t)),t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({selectedPokemon:e.target.value})}},{key:"getPokemonsFromServer",value:function(){var e=this,n=this.state.limitPokemon;this.setState({isLoadingAllPokemons:!0}),fetch("".concat(f,"?limit=").concat(n)).then(function(e){return e.json()}).then(function(n){e.setState({pokemons:n.results,isLoadingAllPokemons:!1})})}},{key:"getSinglePokemonFromServer",value:function(e){var n=this,t=e[0].match(/\d+/g)[0];this.setState({isLoadingSinglePokemon:!0}),fetch("".concat(f).concat(t)).then(function(e){return e.json()}).then(function(e){return n.setState({singlePokemon:e,isLoadingSinglePokemon:!1})})}},{key:"componentWillMount",value:function(){this.getPokemonsFromServer()}},{key:"componentDidUpdate",value:function(e,n){var t=this,a=this.state,o=a.limitPokemon,l=a.selectedPokemon;o!==n.limitPokemon||l!==n.selectedPokemon&&0===+l?this.getPokemonsFromServer():l!==n.selectedPokemon&&0!==+l&&(this.setState({isLoadingAllPokemons:!0,singlePokemon:null}),fetch("".concat("http://pokeapi.co/api/v2/","type/").concat(l,"/")).then(function(e){return e.json()}).then(function(e){return t.setState({pokemons:e.pokemon,isLoadingAllPokemons:!1})}))}},{key:"setLimit",value:function(){this.setState(function(e){return{limitPokemon:e.limitPokemon+12}})}},{key:"render",value:function(){var e=this.state,n=e.pokemons,t=e.singlePokemon,a=e.selectedPokemon,l=e.isLoadingAllPokemons,m=e.isLoadingSinglePokemon;return o.a.createElement("main",{className:"main"},o.a.createElement(y,{selectedPokemon:a,onChange:this.handleChange}),o.a.createElement("div",{className:"main__block"},o.a.createElement(h,{singlePokemon:this.getSinglePokemonFromServer,setLimit:this.setLimit,pokemons:n,selectedPokemon:a,isLoadingAllPokemons:l}),null===t?o.a.createElement(o.a.Fragment,null):o.a.createElement(E,{isLoading:m,singlePokemon:t})))}}]),n}(o.a.Component),b=function(){return o.a.createElement("div",{className:"pokedex"},o.a.createElement(s,null),o.a.createElement(_,null))};var S=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.3ea4f0f5.chunk.js.map