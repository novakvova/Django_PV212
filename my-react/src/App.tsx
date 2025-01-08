import {useEffect} from 'react'

import './App.css'
import Card from "./components/common/card";
import MyCarousel from "./components/common/mycarusel";
import {APP_ENV} from "./env";
import HomePage from "./pages/home";

function App() {

    useEffect(() => {
        console.log("Use Effect!");
    }, []);

    console.log("Render component :)", APP_ENV.REMOTE_BASE_URL);

    return (
        <>

            <HomePage />

            <button type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default
            </button>

            <MyCarousel />
            <Card/>
            <h1 className="text-center text-3xl font-bold underline">
                Hello world!
            </h1>
        </>
    )
}

export default App
