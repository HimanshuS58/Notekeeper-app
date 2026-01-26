import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateNote from './pages/CreateNote'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
      {/* Navbar */}
       <Navbar />

      {/* main */}
      <main className='flex-1 container mx-auto p-4'>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<CreateNote />} />
        </Routes>
      </main>


      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App