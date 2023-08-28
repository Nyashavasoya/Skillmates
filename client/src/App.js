import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './components/Home';
import UserProfile from './UserProfile';
function App() {
  return (
    <div>
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/user/:username" element={<UserProfile />} />

           <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />


         </Routes>
       </Router>
    </div>
   );
}

export default App;
