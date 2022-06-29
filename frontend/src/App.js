import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Router>
      <div className="container">
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
      </div>
    </Router>
    </>
  );
}

export default App;
