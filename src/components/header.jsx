import React from 'react'
import pokeball from '../assets/pokeball.png'

function header() {
  return (
    <div className='header'>
      <img className='pokeballImage' src={pokeball} alt="" />
        <p className='text-white mypokedex ms-3'>My PokeDex</p>
    </div>
  )
}

export default header