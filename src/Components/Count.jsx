import React from 'react';
import '../stylesheets/count.css'

function Count({ numClics }){
    return(
        <div className='counter'>
            {numClics}
        </div>
    );
}
export default Count;