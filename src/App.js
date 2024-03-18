import classNames from "classnames";
import { useState, useRef, createContext, useContext, useEffect } from "react";

// 创建一个 context
const MsgContext = createContext();

const Count = (props) => {
  const [count, setCount] = useState(0)
  console.log('count', props)
  function update() {
    setCount(count + 1);
  }
  return (
    <>
      <p>{count}</p>
      {/* children 用法 */}
      {props.children}
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
    <BCom/>
  </div>)
}

// 跨层组件通信
const BCom = (props) => {
  // 使用 useContext 接收跨层的数据
  const msg = useContext(MsgContext)
  return (<div>
    b component, {msg}
  </div>)
}

const UseEffectCom = () => {
  const [value, setValue] = useState(0)
  // 1. 不传依赖项
  useEffect(() => {
    // 1.初始化被调用
    // 2.组件状态更新被调用
    console.log('无依赖项 useEffect 被调用')
  });

  // 2.传空数组
  useEffect(() => {
    console.log('只在初始化时调用')
  }, [])

  // 3.传入依赖项
  useEffect(() => {
    console.log('value 值变更了')
  }, [value])
  return (<div>
    <p>{value}</p>
    <button onClick={() => setValue(value + 1)}>+</button>
  </div>)
}

const ClearEffect = () => {
  const [ count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count + 1);
      console.log('倒计时启动')
    }, 1000)

    return () => {
      clearInterval(timer);
    }
  })
  return (<div>
    clear
  </div>)
}

const useToggle = (visible = true) => {
  const [value, setValue] = useState(visible);

  const toggle = () => setValue(!value);

  return {
    value,
    toggle
  }
}

const CustomHookCom = () => {
  const { value, toggle } = useToggle(true);
  return (<div>
    { value && <div>是否可见</div> }
    <button onClick={toggle}>切换</button>
  </div>)
}


function App() {
  const msg = 'this is msg text.'
  const [flag, setFlag] = useState(true);
  return (
    <div className="App">
      {/* Provider 为所有子组件提供数据 */}
      <MsgContext.Provider value={msg}>
        <header className={classNames('sub-name', {'name-active': true})}>
          <Count name={'count'}>
            <p>this is children.</p>
          </Count>
          <Form/>
        </header>
        <UseEffectCom/>
        {flag && <ClearEffect/>}
        <button onClick={() => setFlag(false)}>卸载</button>
        <CustomHookCom/>
      </MsgContext.Provider>
    </div>
  );
}

export default App;
