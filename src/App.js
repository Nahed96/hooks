import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import AddMovie from './components/AddMovie'
import './App.css';
import {data} from "./components/Data" 

import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState(data)

const AddNewMovie=(x)=>{setMovies([...movies,x])}
const [search,setSearch]=useState("")





 

  return (
    <div className='App'>
        <Navbar setSearch={setSearch}/>

     <MovieList movies={movies.filter(el=>el.name.includes(search.trim()))}/>
     <AddMovie AddNewMovie={AddNewMovie} />
    </div>
  )
}

export default App
