import { forwardRef, memo, useCallback, useEffect, useRef, useState } from "react"

const Child = memo(() => {
  console.log('子组件触发渲染')
  return (<div>
    <p>子组件</p>
  </div>)
})

const ChildInput = forwardRef((props, ref) => {
  return (<input type="text" ref={ref}/>)
})

const Memo = () => {
  const [count, setCount] = useState(0)
  const handler =  useCallback(() => setCount(count + 1), [count]);
  const inputRef = useRef(null)
  useEffect(() => {
    console.log(inputRef)
  }, [inputRef])
  return (<div>
    count: { count }<br/>
    <button onClick={handler}>+1</button><br/>
    <Child />
    <ChildInput ref={inputRef}/>
  </div>)
}

export default Memo;