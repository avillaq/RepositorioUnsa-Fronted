import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
//import SearchResults from './pages/SearchResults';
//import Profile from './pages/Profile';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/resultados" element={<SearchResults />} />
        <Route path="/perfil" element={<Profile />} /> */}
      </Routes>
    </Router>
  )
}

export default App
