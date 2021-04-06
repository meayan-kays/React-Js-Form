import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import Menu from './Components/Menu';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Menu />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
