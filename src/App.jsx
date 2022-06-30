import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import PokemonCard from './components/PokemonCard'
import Careers from './components/Careers'
import About from './components/About'
import Cards from './components/Cards'


function App() {

  return (
    <div className="App">
      <nav className='nav'>
        <Link className='link-h1' to='/'>
          <h1>
            pokedex
          </h1>
        </Link>
        <ul className='nav-ul'>
          <li className='nav-li'><Link className='link' to='/'>Home</Link></li>
          <li className='nav-li'><Link className='link' to='/pokemons'>Pokemons</Link></li>
          <li className='nav-li'><Link className='link' to='/careers'>Careers</Link></li>
          <li className='nav-li'><Link className='link' to='/about'>About</Link></li>
        </ul>
      </nav>

      <article>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pokemons' element={<Cards />}/>
          <Route path='/careers' element={<Careers />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </article>
    </div>
  )
}

export default App
