import Home from './Home.jsx'
import TranslinkApp from './projects/TranslinkApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<TranslinkApp />} />
      </Routes>
    </Router>
  )
}

export default App
