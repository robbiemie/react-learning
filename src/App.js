import classNames from "classnames";
import { useState } from "react";

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

  function updateFormInput(e) {
    setValue(e.target.value)
  }

  return (<div>
    <input value={value} onChange={(e) => updateFormInput(e)}/>
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
