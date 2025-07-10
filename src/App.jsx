import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import Coin from "./pages/Coin/Coin.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";




const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coin/:coinId" element={<Coin />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;