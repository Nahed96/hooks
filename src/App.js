import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import AddMovie from './components/AddMovie'
import './App.css';
import {data} from "./components/Data" 
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList';
import { Route } from 'react-router';
import Description from './components/Description';

function App() {
  const [movies, setMovies] = useState(data)

const AddNewMovie=(x)=>{setMovies([...movies,x])}
const [search,setSearch]=useState("")





 

  return (
    <div className='App'>
      <Route exact path='/'></Route>
      <Route exact path='/movies' render={(props) => <Description{...props}/>}></Route>
        <Navbar setSearch={setSearch}/>

     <MovieList movies={movies.filter(el=>el.name.includes(search.trim()))}/>
     <AddMovie AddNewMovie={AddNewMovie} />
   
    </div>
  )
}

export default App
