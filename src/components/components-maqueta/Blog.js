import React from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

const Blog = () => {

  return (
    <div id='blog'>
        <Slider title="Blog" size="slider-small"/>
        <div className='center'>
            <div id='content'>
            <Articles />
            </div>
            <Sidebar blog={true}/>
        </div>
    </div>
  )
}

export default Blog