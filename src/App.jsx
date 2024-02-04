import './App.css'
import { Navbar, Todoinput, Todooutput } from './Components'
import { useState } from 'react';
function App() {
  var [task,settask] = useState("");
  
  const updatetask = (enteredtask)=>{
    settask(enteredtask);
    console.log(task)
  }
  return (
    <div>
      <Navbar heading="Todolist"/>
      <div className='flex flex-row justify-center items-center mt-10 gap-32'>
        <Todoinput  updatetask={updatetask}/>
        <Todooutput Task={task}/>
      </div>

    </div>
  )
}

export default App
