import { memo, useCallback, useState } from "react"

const Child = memo(() => {
  console.log('子组件触发渲染')
  return (<div>
    <p>子组件</p>
  </div>)
})

const Memo = () => {
  const [count, setCount] = useState(0)
  const handler =  useCallback(() => setCount(count + 1), [count]);
  return (<div>
    count: { count }<br/>
    <button onClick={handler}>+1</button><br/>
    <Child />
  </div>)
}

export default Memo;