import { useContext } from 'react'

import Context from './Context'

const PokemonHooks = () => {
  const ctx = useContext(Context)

  return ctx
}

export default PokemonHooks
