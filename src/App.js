import classNames from "classnames";
import { useState, useRef } from "react";

const Count = () => {
  const [count, setCount] = useState(0)
  function update() {
    setCount(count + 1);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={update}>点击</button>
    </>
  )
}

// 受控表单
const Form = () => {
  const [value, setValue] = useState('')
  const domRef = useRef(null) // 获取dom元素

  function updateFormInput(e) {
    console.log(domRef.current)
    setValue(e.target.value)
  }

  return (<div>
    <input ref={domRef} value={value} onChange={(e) => updateFormInput(e)}/>
  </div>)
}
function App() {
  return (
    <div className="App">
      <header className={classNames('sub-name', {'name-active': true})}>
        <Count/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
