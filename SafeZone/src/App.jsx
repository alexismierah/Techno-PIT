import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
