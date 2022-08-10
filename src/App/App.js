import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktails } from '../Redux/Thunk';
import './App.css';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  return <div className="App">hellobek</div>;
}

export default App;
