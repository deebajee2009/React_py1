import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function handleSearchSubmit(e) {
  e.preventDefault();
  console.log(e.target[0].value);


}

const App=() => {
  return (
    <div >
      <Header  title="Images gallery"/>
      <Search  handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
