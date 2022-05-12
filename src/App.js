
import { useState } from 'react';
import './App.css';
import Key from './components/Key';
import Keyh from './components/Keyh';
import Keyw from './components/Keyw';

function App() {
  const [operation, setOperation] = useState("")
  const [var1, setVar1] = useState("")
  const [var2, setVar2] = useState("")
  const [result, setResult] = useState("0")
  const [error, setError] = useState("")

  function maxSize(){
    if((var1 + operation + var2).length>20 ||result.length>20){
      setError("muy largo")
    }
  }

  function touchNum(num) {
    if (operation === "") {
      setVar1(var1 + num)
    } else {
      setVar2(var2 + num)
    }
    maxSize()
  }
  function touchOpt(opt) {
    if (var1.length > 0 && var2.length === 0) {
      setOperation(opt)
    } else if (var1.length > 0) {
      setVar1(total())
      setOperation(opt)
      setVar2("")
    } else if (var1.length === 0 && opt === "-") {
      setVar1(var1 + opt)
    }
    maxSize()
  }
  function total() {
    let result = 0;
    try {
      if (operation === "+") {
        result = Number(var1) + Number(var2)
      } else if (operation === "-") {
        result = Number(var1) - Number(var2)
      } else if (operation === "/") {
        result = Number(var1) / Number(var2)
      } else if (operation === "x") {
        result = Number(var1) * Number(var2)
      }
      if (isNaN(result)) {
        setError("resultado NAN")
      }
      setResult(result.toString())
      maxSize()
    } catch (error) {
      setError(error)
    }

    return result.toString()
  }
  function clear() {
    setResult("0")
    setVar1("")
    setVar2("")
    setOperation("")
    setError("")

  }
  return (
    <div className="App">
      
      <div className='tecladoDefault teclado'>
      <div className='myName'> By Samuel</div>
        <div className='pantalla'>
          <div className='display'>{(error?.length > 0) ? "Error" : (var1 + operation + var2)}</div>
          <div className='display'>{(error?.length > 0) ? error : (result)}</div>
        </div>
        <div className='tecladoDefault tecladoNum'>
          <Key titel={"AC"} click={clear} type="clear"/>
          <Key titel={"/"} click={() => touchOpt("/")} type="funtion" />
          <Key titel={"X"} click={() => touchOpt("x")} type="funtion"/>
          <Key titel={"7"} click={() => touchNum("7")} />
          <Key titel={"8"} click={() => touchNum("8")} />
          <Key titel={"9"} click={() => touchNum("9")} />
          <Key titel={"4"} click={() => touchNum("4")} />
          <Key titel={"5"} click={() => touchNum("5")} />
          <Key titel={"6"} click={() => touchNum("6")} />
          <Key titel={"1"} click={() => touchNum("1")} />
          <Key titel={"2"} click={() => touchNum("2")} />
          <Key titel={"3"} click={() => touchNum("3")} />
          <Keyw titel={"0"} click={() => touchNum("0")} />
          <Key titel={","} click={() => touchNum(".")} />
        </div>
        <div className='tecladoDefault tecladoNum2' >
          <Key titel={"-"} click={() => touchOpt("-")} type="funtion"/>
          <Keyh titel={"+"} click={() => touchOpt("+")} type="funtion"/>
          <Keyh titel={"Enter"} click={total} type="funtion"/>
        </div>

      </div>
    </div>
  );
}

export default App;
