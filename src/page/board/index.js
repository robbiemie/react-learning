// useReducer

import { useReducer } from "react";

// 1. 定义 reducer 函数
function reducer(state, action) {
  switch(action.type) {
    case 'INC':
      return state + 1;
    case 'DESC':
      return state - 1;
    default: return state
  }
}



const Board = () => {
  // 2.组件中使用useReducer
  const [state, dispatch] = useReducer(reducer, 0)
  return (<div>
    board: { state }<br/>
    <button onClick={ () => dispatch({type: 'INC'})}>+1</button><br/>
    <button onClick={ () => dispatch({type: 'DESC'})}>-1</button><br/>
  </div>)
}

export default Board;