var list = [
{
  "id": 1,
  "name": "Bulbasaur",
  "type": [ "grass", "posion" ],
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
},
{
  "id": 5,
  "name": "Charmeleon",
  "type": [ "fire" ],
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
},
{
  "id": 15,
  "name": "Beedrill",
  "type": [ "bug", "posion" ],
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
},
{
  "id": 193,
  "name": "Yanma",
  "type": [ "bug", "flying" ],
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
},
{
  "id": 152,
  "name": "Chikorita",
  "type": [ "grass" ],
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
},
];

$( document ).ready(function() {
    var container = $(".pocemon-container");
    
    $.each(list, function(index, value){
        var item = document.createElement("div");
        $(item).addClass("pocemon-item");
        var img = document.createElement("img");
        $(img).attr("src", value.sprite);
        $(img).addClass("kisdogok");
        var title = document.createElement("span");
        title.textContent = value.name;
        item.append(img, title);
        container.append(item);
    });
});