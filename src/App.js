import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import OurPartners from './pages/OurPartners';
import OurSolutions from './pages/OurSolution'
import GetInTouch from './pages/GetInTouch';
import Team from './pages/Team'
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/oursolution' element={<OurSolutions />} />
          <Route path='/Ourpartners' element={<OurPartners />} />
          <Route path='/team' element={<Team />} />
          <Route path='/getintouch' element={<GetInTouch />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
