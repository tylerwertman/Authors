import './App.css';
import {Routes, Route} from 'react-router-dom'
import AuthorsDash from './components/AuthorsDash';
import AuthorAdd from './components/AuthorAdd';
import AuthorEdit from './components/AuthorEdit';
import { useState } from 'react';

function App() {

  const [authors, setAuthors] = useState([])


  return (
    <div className="App">
      <h1>Favorite Authors:</h1>
      <Routes>
        <Route element= {<AuthorsDash authors={authors} setAuthors={setAuthors}/>} path="/"/>
        <Route element= {<AuthorAdd />} path="/create"/>
        <Route element= {<AuthorEdit/>} path="/edit/:id"/>
      </Routes>
    </div>
  );
}

export default App;
