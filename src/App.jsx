import Home from './Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TranslinkApp from './projects/TranslinkApp'
import PersonalWebsite from './projects/PersonalWebsite.jsx'
import ComputerRetail from './projects/ComputerRetail.jsx';
import VoxelEngine from './projects/VoxelEngine.jsx';

function App() {
    
  return (
    <Router>
      <Routes>
        <Route path="/PersonalWebsite" element={<Home />} />
        <Route path="/contact" element={<Home />} />

        <Route path="/project1" element={<TranslinkApp />} />
        <Route path="/project2" element={<VoxelEngine />} />
        <Route path="/project3" element={<ComputerRetail />} />
        <Route path="/project4" element={<PersonalWebsite />} />
      </Routes>
    </Router>
  )
}

export default App
