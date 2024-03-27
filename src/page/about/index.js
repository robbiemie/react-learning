import { useMemo, useState } from "react";

const fib = (n) => {
  if(n < 3) return 1
  console.log('触发计算')
  return fib(n - 1) + fib(n - 2);
}

const About = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // const result = fib(count1); // 非预期：count2 变更，也会触发计算
  const result = useMemo(() => {
    // 预期：只有 count1 发生变更，才会触发计算
    return fib(count1);
  }, [count1])
  console.log('触发渲染')
  return (<div>
    <p>about</p>
    <button onClick={() => setCount1(count1 + 1)}>count1: {count1}</button>
    <button onClick={() => setCount2(count2 + 1)}>count2: {count2}</button>
    {result}
  </div>)
}

export default About;