import React from 'react'
import { Link } from 'react-router-dom'

const Slider = ({title, size, btn}) => {
  return (
    <div id="slider" className={size}>
        <h1>{title}</h1>
        {btn &&
            <Link to={'/blog'} className="btn-white">{btn}</Link>
        }
    </div>
  )
}

export default Slider
