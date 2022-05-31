import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ImageUpload from './components/Home';
import NoMatch from "./components/NoMatch";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='*' element={<NoMatch />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/ImageUpload' element={<ImageUpload />} />
      </Routes>
    </Router>
  );
}

export default App;