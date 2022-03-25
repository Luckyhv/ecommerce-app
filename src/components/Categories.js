import React from 'react'
import {categories} from '../data'
import Categoryitem from './Categoryitem'
import './Categories.css'

function Categories() {
  return (
    <div className='cat'>
      {categories.map((item)=>(
          <Categoryitem item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Categories
