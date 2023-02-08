import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import NewAnnonces from "../Components/NewAnnonces";
import Footer from "../Components/Footer";
import FormInput from "../Components/FormInput";





function Home() {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            {/* Navbar */}
            <Navbar callback={() => setVisible(true)} />
            {/* Hero */}
            <Hero />
            {/* NewAnnonces */}
            <NewAnnonces />
            {/* Footer */}
            <Footer />
        </div>




    )

}

export default Home;