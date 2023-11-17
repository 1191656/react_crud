import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './components/users/Index.jsx';
import Creat from './components/users/Creat.jsx';
import Detalis from './components/users/Detalis.jsx';
import Edit from './components/users/Edit.jsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/user/index' element={<Index />} />
      <Route path='/user/create' element={<Creat />} />
      <Route path='/user/:id' element={<Detalis />} />
      <Route path='/user/edit/:id' element={<Edit/>} />
      <Route path='*' element={<h2>User not found</h2>} />
    </Routes>
  )
}
