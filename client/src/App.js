import './App.css';
import {Routes, Route} from 'react-router-dom'
import AuthorsDash from './components/AuthorsDash';
import AuthorAdd from './components/AuthorAdd';
import AuthorEdit from './components/AuthorEdit';
import { useState } from 'react';

function App() {

  const [authors, setAuthors] = useState([])

  const [author, setAuthor] = useState({
    name: ""
})


  return (
    <div className="App">
      <h1>Favorite Authors:</h1>
      <Routes>
        <Route element= {<AuthorsDash authors={authors} setAuthors={setAuthors}/>} path="/"/>
        <Route element= {<AuthorAdd author={author} setAuthor={setAuthor}/>} path="/create"/>
        <Route element= {<AuthorEdit author={author}/>} path="/edit/:id"/>
      </Routes>
    </div>
  );
}

export default App;
