
function textUppercase(form) {
    var pokemonName = form.name;
    //alert("Nombre del pokémon XD: " + pokemonName.value);
    pokemonName.value = pokemonName.value.toUpperCase();
}

var lastValidType = "grass";

function validatePokemonType(form) {
    var pokemonType = form.type;
    //alert("Pokemon type: " + pokemonType.value);
    if(pokemonType.value == "electric") {
        alert("¡Tipo inválido!");
        pokemonType.value = lastValidType;
    }
    else {
        lastValidType = pokemonType.value;
    }
}

function swapSpacesInText(form, ch) {
    text = form.pokedexEntry;
    text.value = text.value.replace(" ", ch)
}