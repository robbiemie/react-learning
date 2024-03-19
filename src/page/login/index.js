import { useNavigate } from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  return (<div>
    登录页
    <button onClick={() => navigate('/article')}>查看详情</button>
  </div>)
}

export default LoginPage