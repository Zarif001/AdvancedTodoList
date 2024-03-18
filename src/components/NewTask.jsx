import React from 'react'
import { useRef } from 'react';

export default function NewTask({onAdd}) {
    const tasks = useRef()
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };
    const handleClick = () =>{
        if(tasks.current.value === ''){
            return alert('Error')
        }
        const enteredTask = tasks.current.value
        onAdd(enteredTask)
        tasks.current.value = ''

       
    }
  return (
    <div className="flex items-center gap-4">
      <input onKeyPress={handleKeyPress} ref={tasks} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
}
