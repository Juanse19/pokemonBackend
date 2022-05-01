const Pokemon = require("../models/Pokemon");
var seedPokemon = require('../seeds/pokemon');

exports.createPokemon = async (req, res) => {

    try {
        let pokemon;

        // Creamos nuestro producto
        pokemon = new Pokemon(req.body);

        await pokemon.save();
        res.send(pokemon);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.nuke = async (req, res) => {
    // Pokemon.remove({}, function (err, deletePokemon) {
    //   err ? res.status(500).json({ error: err.message }) :
        
    //   });
    Pokemon.create(seedPokemon, function (err, createPokemon) {
        err ? res.status(500).json({ error: err.message }) :
          res.redirect('/pokemon');
      });
  },

exports.getPokemon = async (req, res) => {

    try {
 
        const pokemon = await Pokemon.find();
        res.json(pokemon)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.updatePokemon = async (req, res) => {

    try {
        const { name, pokedex, evolves_from, image } = req.body;
        let pokemon = await Pokemon.findById(req.params.id);

        if(!pokemon) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        pokemon.name = name;
        pokemon.pokedex = pokedex;
        pokemon.evolves_from = evolves_from;
        pokemon.image = image;

        pokemon = await Pokemon.findOneAndUpdate({ _id: req.params.id },pokemon, { new: true} )
        res.json(pokemon);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.getIdPokemon = async (req, res) => {

    try {
        let pokemon = await Pokemon.findById(req.params.id);

        if(!pokemon) {
            res.status(404).json({ msg: 'No existe el pokemon' })
        }
       
        res.json(pokemon);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.deletePokemon = async (req, res) => {

    try {
        let pokemon = await Pokemon.findById(req.params.id);

        if(!pokemon) {
            res.status(404).json({ msg: 'No existe el pokemon' })
        }
       
        await Pokemon.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Pokemon eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}