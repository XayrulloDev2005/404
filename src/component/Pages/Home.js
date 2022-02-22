import React from 'react';
import Saidbar from './Saidbar';
function Home() {
    return (
        <div style={{display : 'flex'}}>
            
           <div style={{width:'25%', }}><Saidbar style={{marginLeft: '500px'}}/></div>
           <div id="imh1" style={{width: '75%',height: 525,color: 'white', padding :'50px', textAlign: 'center'}}>
               <h1 style={{marginTop: '200px'}}>Hi, My name is Hayrullo</h1>
               <h2>I am  Uzbek programmer</h2>
               </div>
          
        </div>
    );
}

export default Home;