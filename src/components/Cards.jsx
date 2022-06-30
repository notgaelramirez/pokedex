import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

const Cards = () => {

  const [pokemons, setData] = useState()

  const getData = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res=>setData(res.data.results))
      .catch(err=>console.log(err))
  }


  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      <article className='cards'>
        {pokemons?.map(pokemon =>
        <PokemonCard 
        pokemon={pokemon}
        />)}
      </article>
    </div>
  )
}

export default Cards