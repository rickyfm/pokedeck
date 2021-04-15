import { Link } from 'react-router-dom';
import * as styles from './styles';
import usePokemon from '../../contexts/pokemon/Hooks'
import axios from 'axios';

function LoadMore() {
  const { pokemons, setPokemons, pagination, setPagination } = usePokemon()

  const handleLoadMore = () => {
    axios.get(pagination.next)
      .then(res => {
          const { data : {results, next, previous} } = res;
          console.log("paging", res);
          setPokemons([
            ...pokemons,
            ...results
          ]);
          setPagination({
              next,
              previous
          });
      })
  }

  return (
    <div css={styles.root}>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default LoadMore;
