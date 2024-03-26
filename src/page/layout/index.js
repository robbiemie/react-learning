import { Link, Outlet } from "react-router-dom"
const Layout = () => {
  return (<div>
    <p>布局</p>
    <Link to="/about">about</Link> - <Link to="/board">board</Link> - <Link to="/login">login</Link>
    {/* 子容器 */}
    <Outlet/>
  </div>)
}

export default Layout;