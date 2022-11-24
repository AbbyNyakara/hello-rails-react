import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from '../ConfigureStore';
import Greeting from './Greeting';


function App() {
  return(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;