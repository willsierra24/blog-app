import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import Home from './components/Home';
import Headers from './components/Headers';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Error from './components/Error';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App; 