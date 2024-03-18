import classNames from "classnames";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0)
  function update() {
    setTimeout(() => {
      setCount(count + 1);
    })
    setTimeout(() => {
      console.log(count)
    })
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={update}>点击</button>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <header className={classNames('sub-name', {'name-active': true})}>
        <Count/>
      </header>
    </div>
  );
}

export default App;
