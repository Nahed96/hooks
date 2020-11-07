import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Rate from './Rate.js'

const MovieCard=({movie})=> (
    
<div className="container">

// ... component class
return {
	// .. return
  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    //ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '300px', height: '300px' }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        backgroundColor: '#41669d',
      }}
    >
      
    <h1>{movie.name}</h1>
    <img style={{
      width:'80px',
      height:'100px',
      padding:'10px 10px 10px 10px'
    }} src={movie.image}/>
    <p>{movie.date}</p>

    </FrontSide>
    <BackSide
      style={{ backgroundColor: '#175852'}}>
     <p>{movie.description} </p>
  <div><Rate rate={movie.rate}/></div>
    </BackSide>
  </Flippy>
}
   
  
</div>
           
            
       
    )


export default MovieCard 
