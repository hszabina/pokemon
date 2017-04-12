
function reqListener (data) {
    var container = $(".pocemon-container");
    container.empty();

    $.each(data, function(index, value) {
        var item = addPocemonItem(container, value) ;

        item.addEventListener("click", function(event) {
            var one = $("#one-pocemon");
            one.empty();
            var loader = document.createElement("img");
            $(loader).attr("src", "images/giphy.gif");
            one.append(loader);
            getDetails(value.id, function(data) {
                one.empty();
                addPocemonDetails(one, data) ;
            });
        });
    });
};


function addPocemonItem(container, value) {
    var item = document.createElement("div");
    $(item).attr("id", value.name);
    $(item).addClass("pocemon-item");
    var img = document.createElement("img");
    $(img).attr("src", value.src);
    $(img).addClass("kisdogok");
    var title = document.createElement("span");
    title.textContent = value.name;
    $(title).addClass("villogo");
    item.append(img, title);
    container.append(item);
    return item;
}

function addPocemonDetails(container, value) {
    var item = document.createElement("div");
    var img = document.createElement("img");
    $(img).attr("src", value.src);
    $(img).addClass("kisdogok");
    var title = document.createElement("div");
    title.textContent = value.name;
    var weight = document.createElement("div");
    weight.textContent = "Weight: " + value.weight;

    item.append(img, title, weight);
    container.append(item);
}

$( document ).ready(function() {
    getList(reqListener);

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