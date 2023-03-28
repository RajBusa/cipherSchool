import Navbar from './Navbar'
import Profile from './Profile'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router >    
      <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  )
}

export default App