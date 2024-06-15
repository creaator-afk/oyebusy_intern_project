import React, {Component} from 'react';

class HeroCard extends Component {
    render() {
        return (
            <div className="hero-card">
                <div className="hero-image">
                    <a className="content-post" href="//">
                        <img alt="" src="./resources/img.png" width="250" height="250"/>
                    </a>
                </div>
                <div className="content-details">
                    <a className="content-category" href="//">Fashion</a>
                    <h3 className="content-title">The Hidden Mystery Behind Fashion</h3>
                    <span className="content-date">
                                    <img src="./resources/calender.svg" alt="cal"/>
                                    Feb 4 2022
                                </span>
                </div>
            </div>
        );
    }
}

export default HeroCard;