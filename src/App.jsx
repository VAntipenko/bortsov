import React from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Reviews } from "./components/Reviews";
import { Catalog } from "./components/Catalog";
import { AboutUs } from "./components/AboutUs";
import { Clients } from "./components/Clients";
import { OurWork } from "./components/OurWork";
import { Question } from "./components/Question";
import { Services } from "./components/Services";
import { Contacts } from "./components/Contacts";
import { HowWeWork } from "./components/HowWeWork";
import { DepartureMaster } from "./components/DepartureMaster";

const App = () => {
    return (
        <div>
            <Header />
            <div className='wrapper'>
                <Catalog />
                <Services />
                <DepartureMaster />
                <HowWeWork />
                <AboutUs />
                <OurWork />
                <Reviews />
                <Clients />
                <Question />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
};

export default App;
