import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonCard = ({pokemon}) => {

  const [pokeInfo, setPokeInfo] = useState()
  useEffect(() => {
    axios.get(pokemon?.url)
      .then(res=>setPokeInfo(res.data))
  }, [])
  

  return (
      <div className='card'>
        <p className='name'>{pokemon?.name}</p>
        <img 
        className='pokemon-img'
        src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
      </div>
  )
}

export default PokemonCard 