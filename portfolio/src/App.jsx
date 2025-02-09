import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

import Portfolio from './pages/Portfolio.jsx';
import Layout from './components/Layout.jsx';
const App = () => {

  return (
    <div>

      <Router>
        <Layout>
          <Routes>
            <Route path="" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>

    </div>
  )
}

export default App;
