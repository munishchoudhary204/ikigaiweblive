import React from 'react'
import "./button1.scss"
const button1 = ({title}) => {
    return (
        <div className="button">
    <span className="button__mask"></span>
    <span className="button__text">{title}</span>
    <span className="button__text button__text--bis">{title}</span>
  </div>
    )
}

export default button1
