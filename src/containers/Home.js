import { useEffect } from 'react';
import usePokemon from '../contexts/pokemon/Hooks'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import PokemonList from '../components/PokemonList/index';
import LoadMore from '../components/LoadMore/index';
function Home() {
  const { pokemons, setPokemons, pagination, setPagination } = usePokemon()

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      .then(res => {
          const { data : {results, next, previous} } = res;
          setPokemons(results);
          setPagination({
              next,
              previous
          });
      })
  }, [])

  return (
    <Layout>
      <PokemonList/>
      <LoadMore/>
    </Layout>
  );
}

export default Home;
