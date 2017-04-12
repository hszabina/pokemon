           
function getList(callback, from, to) {
    from = from || 0;
    to = to || (from + 10);
    var url = "https://pokeapi.co/api/v2/pokemon/?limit=" + (to - from) + "&offset=" + from;
    fetch(url).then(function(response) {
        return response.json().then(function(response) {
            var data = {};
            response.results.forEach(function(element) {
                var one = {};
                var id = element.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
                var src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/" + id + ".png"
                one.id = id;
                one.src = src;
                one.name = element.name;
                one.type = [];
                data[element.name] = one;
            });

            /*var promise;
            promises = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(
                i => fetch('https://pokeapi.co/api/v2/type/'+i).then(r => r.json())
            );

            Promise.all(promises).then(results => {
                results.forEach( (result, i) => {
                    var name = result.name;
                    result.pokemon.forEach( (poci, j) => {
                        data[poci.pokemon.name] && data[poci.pokemon.name].type.push(name);
                    });
                });
            }).then(function(){*/
                callback(data);
            /*});*/
            
       });
    })
}

function getTypes(callback) {
    from = from || 0;
    to = to || (from + 10);
    var url = "https://pokeapi.co/api/v2/type/";
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