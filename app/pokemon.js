
function reqListener () {
    var container = $(".pocemon-container");
    container.empty();

    var response = JSON.parse(this.response)

    $.each(response.results, function(index, value){
        var item = document.createElement("div");
        $(item).addClass("pocemon-item");
        var img = document.createElement("img");
        var id = value.url.replace("http://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        $(img).attr("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png");
        $(img).addClass("kisdogok");
        var title = document.createElement("span");
        title.textContent = value.name;
        item.append(img, title);
        container.append(item);
    });
};

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://pokeapi.co/api/v2/pokemon/?limit=200");
oReq.send();