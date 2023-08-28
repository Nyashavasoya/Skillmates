import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './components/Home';
import UserProfile from './UserProfile';
function App() {
  return (
    <div>
       <Router>
         <Routes>
           <Route index element={<Home />} />
           <Route path="/user/:username" element={<UserProfile />} />
         </Routes>
       </Router>
    </div>
   );
}

export default App;
