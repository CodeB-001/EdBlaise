import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contacts/Contact';
import Navbar from './Components/Navbar/Navbar';
// import Social from './Components/Social/Social';

import Login from './Components/Logino/Login';
import RegistrationForm from './Components/Register/RegistrationForm';
import Support  from './Components/Support/Support';


function App() {
  return (
    <div >
      <Router>
         <div className='flex items-center gap-60'>
          
             <Navbar />
          {/* <Social /> */}
          </div>
        
        <Routes className="flex items-center">
        
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Services/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/support' element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<RegistrationForm/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App