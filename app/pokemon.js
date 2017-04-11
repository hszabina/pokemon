
function reqListener () {
    var container = $(".pocemon-container");
    container.empty();

    var response = JSON.parse(this.response)

    $.each(response.results, function(index, value){
        var item = document.createElement("div");
        $(item).attr("id", value.name);
        $(item).addClass("pocemon-item");
        var img = document.createElement("img");
        var url = value.url;
        var id = value.url.replace("http://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
        $(img).attr("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png");
        $(img).addClass("kisdogok");
        var title = document.createElement("span");
        title.textContent = value.name;
        item.append(img, title);
        container.append(item);

        document.getElementById(value.name).addEventListener("click", function(event) {
            var one = $("#one-pocemon");
            one.empty();
            var loader = document.createElement("img");
            $(loader).attr("src", "images/giphy.gif");
            one.append(loader);
            fetch(url).then(function(response) {
                return response.json().then(function(data){
                    one.empty();
                    var weight = document.createElement("span");
                    weight.textContent = "Weight: " + data.weight;
                    item.append(img, weight);
                    one.append(item);
                });
            });
        });
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