const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pokedex: {
        type: String,
    },
    evolves_from: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Pokemon', PokemonSchema);