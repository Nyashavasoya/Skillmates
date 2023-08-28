import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './components/Home';
import UserProfile from './UserProfile';
import Login from './login';
import Register from './register';


function App() {
  return (
    <div>
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/user/:username" element={<UserProfile />} />
           <Route path="/login.js" element={<Login />} />
           <Route path="/register.js" element={<Register />} />
         </Routes>
       </Router>
    </div>
   );
}

export default App;
