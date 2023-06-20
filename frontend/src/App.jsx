import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx';
import EditGame from './components/EditGame.jsx';
import EditQuestion from './components/EditQuestion.jsx';
function App () {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editgame" element={<EditGame />} />
          <Route path="/editquestion" element={<EditQuestion />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
