import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  

  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route exact path="/" element={<BlogPostList/>} >
            
          </Route>
          <Route path="/post/:id" element={<BlogPostDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
