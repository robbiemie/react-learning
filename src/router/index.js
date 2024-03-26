import { lazy, Suspense } from 'react'
import { createBrowserRouter } from "react-router-dom";

import LoginPage from "@/page/login";
import ArticlePage from "@/page/article";
import LayoutPage from '@/page/layout'
import AboutPage from '@/page/about'
// 异步路由
const BoardPage = lazy(() => import('@/page/board'));
const AppPage = lazy(() => import('@/page/app'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage/>,
    children: [{
      path: '/about',
      element: <AboutPage/>
    }, {
      path: '/board',
      element: <Suspense fallback="loading... 请等待"><BoardPage/></Suspense>
    }]
  },
  {
    index: true,
    element: <Suspense><AppPage/></Suspense>
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