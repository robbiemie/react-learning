import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  return (<div>
    登录页
    <button onClick={() => navigate('/article?id=1&name=ok')}>查看详情</button>
    <button onClick={() => navigate('/article/1?name=ok')}>查看详情2</button>
  </div>)
}

export default LoginPage