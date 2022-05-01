// Rutas para producto
const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// api/productos
router.post('/', pokemonController.createPokemon);
router.get('/', pokemonController.getPokemon);
router.put('/:id', pokemonController.updatePokemon);
router.get('/:id', pokemonController.getIdPokemon);
router.delete('/:id', pokemonController.deletePokemon);
router.post('/nuke', pokemonController.nuke);

module.exports = router;