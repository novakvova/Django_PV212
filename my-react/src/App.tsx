import {useEffect} from 'react'

import './App.css'

function App() {

    useEffect(() => {
        console.log("Use Effect!");
    }, []);

    console.log("Render component :)");

    return (
        <>
            <h1>Привіт React</h1>
        </>
    )
}

export default App
