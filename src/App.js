import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import PropTypes from 'prop-types';




const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <div>
        <Navbar />
        {/* <LoadingBar height={3} color='#f11946' progress={progress} /> */}
        <Routes>
          <Route exact path="/" element={<News /*setProgress={setPogress}*/ key="Home" pageSize={pageSize} country="in" category={"general"} />}></Route>
          <Route exact path="/Business" element={<News key="Business" pageSize={pageSize} country="in" category={"Business"} />}></Route>
          <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={pageSize} country="in" category={"Entertainment"} />}></Route>
          <Route exact path="/Health" element={<News key="Health" pageSize={pageSize} country="in" category={"Health"} />}></Route>
          <Route exact path="/Science" element={<News key="Science" pageSize={pageSize} country="in" category={"Science"} />}> </Route>
          <Route exact path="/Sports" element={<News key="Sports" pageSize={pageSize} country="in" category={"Sports"} />}></Route>
          <Route exact path="/Technology" element={<News key="Technology" pageSize={pageSize} country="in" category={"Technology"} />}></Route>
          <Route exact path="/general" element={<News key="general" pageSize={pageSize} country="in" category={"general"} />}></Route>
          {/* <Route exact path="/about" element={<News key={"about"} pageSize={pageSize} country="in" category={"about"} />}></Route> */}
        </Routes>
      </div>
    </Router >
  )
}
export default App
