           
function getList(callback, from, to) {
    from = from || 0;
    to = to || (from + 10);
    var url = "https://pokeapi.co/api/v2/pokemon/?limit=" + (to - from) + "&offset=" + from;
    fetch(url).then(function(response) {
        return response.json().then(function(response) {
            var data = response.results;
            data.forEach(function(element) {
                var id = element.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
                var src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png"
                element.id = id;
                element.src = src;
            });
            callback(data);
       });
    })
}

function getTypes(callback, from, to) {
    from = from || 0;
    to = to || (from + 10);
    var url = "https://pokeapi.co/api/v2/type/?limit=" + (to - from) + "&offset=" + from;
    fetch(url).then(function(response) {
        return response.json().then(function(response) {
            var data = response.results;
            data.forEach(function(element) {
                var id = element.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
                element.id = id;
            });
            callback(data);
       });
    })
}

function getDetails(id, callback) {
    var url = "https://pokeapi.co/api/v2/pokemon/" + id;
    fetch(url).then(function(response) {
        return response.json().then(function(data) {
            var src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + data.id + ".png"
            data.src = src;
            callback(data);
        });
    })
}