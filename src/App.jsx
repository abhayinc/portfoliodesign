import React from 'react'

import './App.css'
import Name from "./sections/Name.jsx";
import Intro from "./sections/Intro.jsx";
import Work from "./sections/Work.jsx";
import Contact from "./sections/Contact.jsx";
import Footers from "./sections/Footers.jsx";
import WhatOthersSay from "./sections/What-others-say.jsx";
import Header from "./sections/Header.jsx";



function App() {

    return (
        <>
            <div className="items-start bg-white flex flex-col  ">



                <Header/>
                <Name/>
                <Intro/>
                <Work/>
                <WhatOthersSay/>
                <Contact/>
                <Footers/>

            </div>
        </>
    );
}

export default App;
