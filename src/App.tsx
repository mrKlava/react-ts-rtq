import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Navigation } from './components';
import {HomePage, FavoritesPage} from './pages';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/favorites' element={<FavoritesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
