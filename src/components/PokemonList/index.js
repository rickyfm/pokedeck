import { Link } from 'react-router-dom';
import * as styles from './styles';
import usePokemon from '../../contexts/pokemon/Hooks'

function PokemonList() {
  const { pokemons } = usePokemon()
  return (
    <div css={styles.root}>
      <ul css={styles.list}>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
              <Link to={`/detail/${pokemon.name}`}>
                <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
                <span>{pokemon.name}</span>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
