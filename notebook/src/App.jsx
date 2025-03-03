import React, { useEffect } from 'react'
// 前后端分离 前端独立的路由功能
import {
  HashRouter as Router, 
  // es6 模块化语法
  // BrowserRouter as Router, // hash #, history /
  Routes,
  Route
} from 'react-router-dom'
import routes from '@/router'
import { ConfigProvider, Button } from 'zarm';
// import 'zarm/dist/zarm.css'; // vite-plugin-style-import 自动引入css

import NavBar from './components/NavBar'
export default function App() {
 
  return (<>
    <ConfigProvider primaryColor='#007fff'>
      <Router>
          <Routes>
            { routes.map(route => <Route key={route.path} path={route.path} element={<route.component />}/>)}
          </Routes>
          <Button theme="primary">Hello World!</Button>
      </Router>
    </ConfigProvider>
     <NavBar showNav={true}/>
     </>
  )
}