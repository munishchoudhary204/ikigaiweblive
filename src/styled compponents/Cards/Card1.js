import React from 'react'
import "./Card1.css"
const Card1 = ({title,content}) => {
    return (
        <div className="card position-absolute top-50 start-50 p-5 border-none">
 
  <h2>{title}</h2>
  <p>{content}</p>
 
</div>
    )
}

export default Card1
