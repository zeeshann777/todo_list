import React from 'react'

const Todooutput = (props) => {
  return (
    <div className='w-[300px] h-[500px] mt-5 ml-5 bg-orange-300'>
      {props.Task}
    </div>
  )
}

export default Todooutput
