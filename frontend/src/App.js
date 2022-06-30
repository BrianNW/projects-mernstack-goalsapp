import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

// With react Router 6, make sure there no other elements within the RouteS tag unless it's a RoutE tag.
function App() {
  return (
    <>
    <Router>
      <div className="container">        
        <Header />
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />          
          <Route path="/register" element={<Register />} />
        </Routes>
      
      </div>
    </Router>
    </>
  );
}

export default App;
