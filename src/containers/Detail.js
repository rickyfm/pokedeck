import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import axios from 'axios';
import usePokemon from '../contexts/pokemon/Hooks'
import PokemonDetail from '../components/Detail/index';

function Detail() {
  const {name} = useParams()
  const { pokemonDetail, setPokemonDetail } = usePokemon()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
          console.log("detail", res.data)
          const { data } = res;
          setPokemonDetail(data);
      })
  }, [])

  if(!pokemonDetail.id){
    return 'Loading ....'
  }
  return (
    <Layout>
      <PokemonDetail/>
    </Layout>
  );
}

export default Detail;
