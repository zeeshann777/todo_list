import React from 'react'

const Navbar = (props) => {
  return (
    <div className= 'w-full h-20 bg-orange-500 text-center'>
      <h1>{props.heading}</h1>
    </div>
  )
}

export default Navbar
