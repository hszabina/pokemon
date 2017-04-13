
function reqListener (data) {
    var container = $("#pocemon-container");
    container.empty();

    $.each(data, function(index, value) {
        var item = addPocemonItem(container, value) ;

        item.addEventListener("click", function(event) {
            var one = $("#one-pocemon");
            one.empty();
            var loader = document.createElement("img");
            $(loader).attr("src", "images/giphy.gif");
            one.append(loader);
            api.getDetails(value.id, function(data) {
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
    if (value.type.length == 1) {
        $(item).addClass(value.type[0] + "-left");
        $(item).addClass(value.type[0] + "-right");
    } else if (value.type.length == 2) {
        $(item).addClass(value.type[0] + "-left");
        $(item).addClass(value.type[1] + "-right");
    }
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
    
    var height = document.createElement("div");
    height.textContent = "Height: " + value.height;

    if (value.types.length == 1) {
        $(item).addClass(value.types[0].type.name + "-left");
        $(item).addClass(value.types[0].type.name + "-right");
    } else if (value.types.length == 2) {
        $(item).addClass(value.types[0].type.name + "-left");
        $(item).addClass(value.types[1].type.name + "-right");
    }

    item.append(img, title, weight, height);
    container.append(item);
}

$( document ).ready(function() {
    api.getList(reqListener);

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

    document.getElementsByClassName("next")[0].addEventListener("click", function(event) {
        var container = $("#pocemon-container");
        container.empty();
        api.getList(reqListener, 1);
    });
    document.getElementsByClassName("previous")[0].addEventListener("click", function(event) {
        var container = $("#pocemon-container");
        container.empty();
        api.getList(reqListener, -1);
    });
});