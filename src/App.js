
import { useState } from 'react';
import './App.css';
import Key from './components/Key';
import Keyh from './components/Keyh';
import Keyw from './components/Keyw';

function App() {
  const [operation, setOperation] = useState("")
  const [var1, setVar1] = useState("")
  const [var2, setVar2] = useState("")
  const [result ,setResult] = useState("0")

  function touchNum(num) {
    if (operation === "") {
      setVar1(var1 + num)
    } else {
      setVar2(var2 + num)
    }
  }
  function touchOpt(opt) {
    if (var1.length > 0 && var2.length === 0) {
      setOperation(opt)
    } else if (var1.length > 0){
      setVar1(result)
      setOperation(opt)
      setVar2("")
      //setResult("0")

    }

  }
  function total() {
    let result = 0;

    if (operation === "+") {
      result = Number(var1) + Number(var2)
    } else if(operation === "-"){
      result = Number(var1) - Number(var2)
    } else if(operation === "/"){
      result = Number(var1) / Number(var2)
    } else if(operation === "x"){
      result = Number(var1) * Number(var2)
    }
    setResult(result.toString())
    
  }
  function clear() {
    setResult("0")
    setVar1("")
    setVar2("")
    setOperation("")

  }
  return (
    <div className="App">
      <div className='tecladoDefault teclado'>
        <div className='pantalla'>
          <div className='display'>{var1 + operation + var2}</div>
          <div className='display'>{result}</div>
        </div>
        <div className='tecladoDefault tecladoNum'>
          <Key titel={"c"} click={clear} />
          <Key titel={"/"} click={() => touchOpt("/")} />
          <Key titel={"x"} click={() => touchOpt("x")} />
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
          <Key titel={","}click={() => touchNum(".")} />
        </div>
        <div className='tecladoDefault tecladoNum2' >
          <Key titel={"-"} click={() => touchOpt("-")} />
          <Keyh titel={"+"} click={() => touchOpt("+")} />
          <Keyh titel={"Enter"} click={total} />
        </div>

      </div>
    </div>
  );
}

export default App;
