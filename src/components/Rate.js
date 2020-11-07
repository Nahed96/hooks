import React from 'react'

const Rate = ({rate}) => {
    let stars=[];
    for (let i=0;i<5;i++){
        if(i<rate)
            stars.push(<span style={{cursor:'pointer'}}>★</span> );
         else
            stars.push(<span style={{cursor:'pointer'}}>✩</span>);

        
    }
    return (
        <div>
            {stars}
        </div>
    )
}

export default Rate
