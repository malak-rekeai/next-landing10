import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <div>
        <h1>Our Works</h1>
        <h2>{params.category}</h2>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default page