import React from 'react';
import { useState } from 'react'
import Context from './Context'

const PokemonProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState([])
  const [pokemonDetail, setPokemonDetail] = useState([])
  const [pagination, setPagination] = useState([])

  return (
    <Context.Provider
      value={{
        pokemons,
        setPokemons,
        pokemonDetail,
        setPokemonDetail,
        pagination,
        setPagination
      }}
    >
      <>{children}</>
    </Context.Provider>
  )
}

export default PokemonProvider
