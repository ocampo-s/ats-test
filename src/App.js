import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Services from './routes/Services'
import Contact from './routes/Contact'
import NoMatch from './routes/NoMatch'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/nomatch' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;