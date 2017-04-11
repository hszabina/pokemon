var list = [
    {src: "images/1.png", name: "Kis dög 1"},
    {src: "images/2.png", name: "Kis dög 2"},
    {src: "images/3.png", name: "Kis dög 3"},
    {src: "images/4.png", name: "Kis dög 4"}
]

$( document ).ready(function() {
    var container = $(".pocemon-container");
    
    $.each(list, function(index, value){
        var item = document.createElement("div");
        $(item).addClass("pocemon-item");
        var img = document.createElement("img");
        $(img).attr("src", value.src);
        $(img).addClass("kisdogok");
        var title = document.createElement("span");
        title.textContent = value.name;
        item.append(img, title);
        container.append(item);
    });
});