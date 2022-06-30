import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import {Link, Route, Routes} from 'react-router-dom'
import PokemonPage from './PokemonPage'

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
        
        <Link className='cards link' to='/pokedex/unico'>
          {pokemons?.map(pokemon =>
        <PokemonCard 
        pokemon={pokemon}
        />)}
        </Link>
        
        <Routes>
          <Route path='/pokedex/unico' element={<PokemonPage/>}/>
        </Routes>
      </article>
    </div>
  )
}

export default Cards