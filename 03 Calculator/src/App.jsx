import { useState } from 'react'
import './App.css'


const App=()=>{
  const [input,setInput]=useState('');
  const [result,setResult]=useState('');

  const handleClick=(value)=>{
    setInput(input+value)
  };

  const handleClear=()=>{
    setInput('');
    setResult('');
  };

  const handleCalculate=()=>{
    try{
      setResult(eval(input));
    }catch(error){
      setResult('Error')
    }
  }
  return(
    <>
      <div className='App'>
        <div className='calculator'>
          <input type='text' value={input} readOnly></input>
          <input type='text' value={result} readOnly></input>
          <div className='buttons'>
  
            <button onClick={()=>{handleClick('1')}}>1</button>
            <button onClick={()=>{handleClick('2')}}>2</button>
            <button onClick={()=>{handleClick('3')}}>3</button>
            <button onClick={()=>{handleClick('+')}}>+</button>
            <button onClick={()=>{handleClick('4')}}>4</button>
            <button onClick={()=>{handleClick('5')}}>5</button>
            <button onClick={()=>{handleClick('6')}}>6</button>
            <button onClick={()=>{handleClick('-')}}>-</button>
            <button onClick={()=>{handleClick('7')}}>7</button>
            <button onClick={()=>{handleClick('8')}}>8</button>
            <button onClick={()=>{handleClick('9')}}>9</button>
            <button onClick={()=>{handleClick('*')}}>*</button>
            <button onClick={()=>{handleClick('0')}}>0</button>
            <button onClick={()=>{handleClick('.')}}>.</button>

            <button onClick={handleCalculate}>=</button>
            <button onClick={()=>{handleClick('/')}}>/</button>
            <button onClick={handleClear}></button>
          </div>
  
        </div>
      </div>
    </>
  )
};

export default App
