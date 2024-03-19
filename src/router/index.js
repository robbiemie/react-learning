import { createBrowserRouter } from "react-router-dom";
import AppPage from '../page/app'
import LoginPage from "../page/login";
import ArticlePage from "../page/article";


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/article',
    element: <ArticlePage/>
  }
])

export default router;