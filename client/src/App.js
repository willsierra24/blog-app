import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getUser } from './redux/actions/authActions';
import './App.css';
import Home from './components/Home/Home';
import Headers from './components/Headers/Headers';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Error from './components/Error';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
  );
};

export default App; 