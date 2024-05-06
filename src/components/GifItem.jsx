/* eslint-disable react/prop-types */
import React from 'react'
export const GifItem = ({ title, url }) => {

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
