import React from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articles from './Articles'

const Home = () => {
  return (
    <div id='home'>
        <Slider title="Bienvenido slider" size="slider-big" btn="Blog"/>
        <div className='center'>
            <div id='content'>
                <h1 className='subheader'>Ultimos articulos</h1>
                <Articles home={true}/>
            </div>
            <Sidebar />
        </div>
    </div>

  )
}

export default Home