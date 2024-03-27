import { memo, useState } from "react"

const Child = memo(() => {
  console.log('子组件触发渲染')
  return (<div>
    <p>子组件</p>
  </div>)
})

const Board = () => {
  const [count, setCount] = useState(0)
  return (<div>
    count: { count }<br/>
    <button onClick={ () => setCount(count + 1)}>+1</button><br/>
    <Child />
  </div>)
}

export default Board;