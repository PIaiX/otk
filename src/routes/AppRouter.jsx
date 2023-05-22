import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import NotFound from '../pages/NotFound'
import Article from '../pages/Article'
import Catalog from '../pages/Catalog'
import Services from '../pages/Services'


const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />}/>
      <Route path="game" element={<Home/>} />
      <Route path="catalog" element={<Catalog/>} />
      <Route path="services" element={<Services/>} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/article" element={<Article/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;