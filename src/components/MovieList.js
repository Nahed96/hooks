import { findByLabelText } from '@testing-library/react'
import React from 'react'
import Description from './Description'
//import {Data} from './Data'
import MovieCard from './MovieCard'

const MovieList=({movies})=> {
    
    return (
        <div style={{
            display :'flex',
            justifyContent:'space-evently',
            flexDirection:'row',
            flexWrap:'wrap',
    
        }} > 
            {movies.map((el,i)=>(
            <MovieCard movie={el} key={i} />
           
             ) )}
        </div>
    )
}

export default MovieList
