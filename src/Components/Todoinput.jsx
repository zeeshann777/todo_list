import React from 'react'

const Todoinput = (props) => {
  return (
    <div className=' flex-row w-[300px] h-[500px] mt-5 ml-5 bg-red-400 pt-[200px]'>
        <div className='flex flex-col justify-center  gap-8 items-center'>
              <input className='rounded-[10px] w-[250px] h-[50px]' id="enteredtask" placeholder='enter your task'/>
              <button className=' rounded-[20px] w-[100px] h-[50px] bg-white' 
                onClick={()=>{
                  var value = document.getElementById("enteredtask").value;
                  props.updatetask(value);
                }}
              >Enter</button>
            
        </div>
    </div>
  )
}

export default Todoinput
