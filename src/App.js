import './App.css';
import './primary.css'
import {Component} from "react";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Content from "./Components/Content/Content";
import Carousel from "./Components/Carousel/Carousel";
import BannerSection from "./Components/BannerSection/BannerSection";
import Brief from "./Components/Brief/Brief";
import Description from "./Components/Description/Description";

function App() {
    return (
        <div>
            <HeroSection/>
            <Content/>
            <Carousel/>
            <BannerSection/>
            <Description/>
            <Brief/>
            <Footer/>
        </div>);
}

export default App;
