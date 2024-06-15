import React, {Component} from 'react';
import HeroCard from "./HeroCard";
import Header from "./Header";

class HeroSection extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <section className="hero-section-container container">
                        <HeroCard/>
                        <HeroCard/>
                        <HeroCard/>
                    </section>
                </div>
            </div>
        );
    }
}

export default HeroSection;