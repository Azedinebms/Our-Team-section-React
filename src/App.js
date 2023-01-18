import React, { Component } from 'react';
import {BrowserRouter,  Routes,  Route, NavLink} from "react-router-dom";
import './components/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';

class App extends Component {



  render() {
    return (
      <BrowserRouter>

          <div className="container">
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>

      </BrowserRouter>

    );
  }
}

export default App;
