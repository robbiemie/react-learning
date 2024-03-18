# useEffect

![alt text](image.png)

1. 无依赖项

```js

const UseEffectCom = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    // 1.初始化被调用
    // 2.组件状态更新被调用
    console.log('无依赖项 useEffect 被调用')
  });

  return (<div>
    <p>{value}</p>
    <button onClick={() => setValue(value + 1)}>+</button>
  </div>)
}
```
