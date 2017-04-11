
function reqListener () {
    var container = $(".pocemon-container");
    container.empty();

    var response = JSON.parse(this.response)

    $.each(response.results, function(index, value){
        var item = document.createElement("div");
        $(item).attr("id", value.name);
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

$( document ).ready(function() {
    document.getElementById("search").addEventListener("input", function(event) {
        var value = this.value;
        $.each($(".pocemon-item"), function(index, item) {
            if ($(item).attr("id").indexOf(value) != -1) {
                $(item).removeClass("hidden");
            } else {
               $(item).addClass("hidden");
            }
        });
    });
});