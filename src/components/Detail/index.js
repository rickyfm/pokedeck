import { Link } from 'react-router-dom';
import * as styles from './styles';
import usePokemon from '../../contexts/pokemon/Hooks'
import axios from 'axios';

function PokemonDetail() {
  const { pokemonDetail, setPokemonDetail } = usePokemon()

  return (
    <div css={styles.root}>
        <h1>{pokemonDetail.name}</h1>
        <div className="image"><img src={pokemonDetail.sprites.front_default} /></div>
        <div className="header">
          <span className="baseExperience">Base Experience : {pokemonDetail.base_experience}</span>
        </div>
        <div className="text">stats : </div>
        <ul css={styles.stats}>
        {pokemonDetail.stats.map(stat => (
          <li key={stat.stat.name}>
                <div>{stat.stat.name}</div>
                <div>{stat.base_stat}</div>
          </li>
        ))}
        </ul>
        <div className="text">types : </div>
        <ul css={styles.stats}>
        {pokemonDetail.types.map(type => (
          <li key={type.type.name}>
                <div>{type.type.name}</div>
          </li>
        ))}
        </ul>
    </div>
  );
}

export default PokemonDetail;
