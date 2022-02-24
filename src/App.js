import React from 'react';
import "./App.css"
import Video from './video.mp4'

function App() {
    return (
        <div className="App">
            <video width="320" height="240" autoplay >
                <source src={Video} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg"></source>
                </video>
        </div>
    );
}

export default App;