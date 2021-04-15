import React from 'react';

export default React.createContext({
  pokemons : [],
  setPokemons : () => null,
  pokemonDetail : {},
  setPokemonDetail : () => null,
  pagination : {
    next:null,
    previous:null
  },
  setPagination : () => null
})
