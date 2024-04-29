import React from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articles from './Articles'
import { useParams } from 'react-router-dom'

const Search = () => {

  const params = useParams();

  return (
    <div id='blog'>
    <Slider title={'Busqueda: '+params.search} size="slider-small"/>
    <div className='center'>
        <div id='content'>
        <Articles search={params.search}/>
        </div>
        <Sidebar blog={true}/>
    </div>
</div>
  )
}

export default Search