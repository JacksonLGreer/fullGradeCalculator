import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
