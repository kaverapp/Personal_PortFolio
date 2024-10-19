import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,BrowserRouter,createBrowserRouter, Route,createRoutesFromElements } from "react-router-dom";

import './index.css'
import { Layout } from './components/Layout.jsx';
import { About, Home,Contact,Github, Portfolio } from '@/components/index.js';
import ErrorBoundary  from './components/ErrorBoundary.jsx';
import { gitHubLoader } from '@/components/Github/Github.jsx';
import ErrorPage from './utils/error_page_util.jsx';

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}> 
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/github'
      loader={gitHubLoader}
      element={<Github/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
    <RouterProvider router={router} />
    </ErrorBoundary>
    
  </StrictMode>,
)
//47:23 / 1:04:34

