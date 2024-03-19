import { createBrowserRouter } from "react-router-dom";
import AppPage from '../page/app'
import LoginPage from "../page/login";
import ArticlePage from "../page/article";
import LayoutPage from '../page/layout'
import AboutPage from '../page/about'
import BoardPage from '../page/board'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage/>,
    children: [{
      index: true, // 默认子路由 index: true
      element: <AboutPage/>
    }, {
      path: '/board',
      element: <BoardPage/>
    }]
  },
  {
    path: '/app',
    element: <AppPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/article/:id',
    element: <ArticlePage/>
  }, {
    path: '*',
    element: <div>404</div>
  }
])

export default router;