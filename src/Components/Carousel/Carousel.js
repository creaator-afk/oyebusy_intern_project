import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Carousel extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-topics"><h2><span>Hot Topics</span></h2>
                    <div className="line"></div>
                    <div className="backdrop updates-button"><img src="./resources/back.svg" alt="b"/></div>
                    <div className="backdrop updates-button"><img src="./resources/forward.svg" alt="f"/></div>
                </div>
                <div className="content-carousel">
                    <div className="hero-card">
                        <div className="content-image">
                            <a className="content-post" href="//">
                                <img alt="" src="./resources/img_4.png" width="270" height="270"/>
                            </a>
                        </div>
                        <div className="content-details">
                            <a className="content-category" href="//">Environment</a>
                            <h3 className="content-title">Why should you be eating Organic ?</h3>
                            <span className="content-date">
                            <img src="./resources/person.svg" alt="p"/>
                            Rishi
                            <img src="./resources/calender.svg" alt="cal"/>
                            Feb 4 2022
                            <img src="./resources/zig.svg" alt="Z"/>8 min Read</span>
                        </div>
                    </div>
                    <div className="hero-card">
                        <div className="content-image">
                            <a className="content-post" href="//">
                                <img alt="" src="./resources/img_4.png" width="270" height="270"/>
                            </a>
                        </div>
                        <div className="content-details">
                            <a className="content-category" href="//">Environment</a>
                            <h3 className="content-title">Why should you be eating Organic ?</h3>
                            <span className="content-date">
                            <img src="./resources/person.svg" alt="p"/>
                            Rishi
                            <img src="./resources/calender.svg" alt="cal"/>
                            Feb 4 2022
                            <img src="./resources/zig.svg" alt="Z"/>8 min Read</span>
                        </div>
                    </div>
                    <div className="hero-card">
                        <div className="content-image">
                            <a className="content-post" href="//">
                                <img alt="" src="./resources/img_4.png" width="270" height="270"/>
                            </a>
                        </div>
                        <div className="content-details">
                            <a className="content-category" href="//">Environment</a>
                            <h3 className="content-title">Why should you be eating Organic ?</h3>
                            <span className="content-date">
                            <img src="./resources/person.svg" alt="p"/>
                            Rishi
                            <img src="./resources/calender.svg" alt="cal"/>
                            Feb 4 2022
                            <img src="./resources/zig.svg" alt="Z"/>8 min Read</span>
                        </div>
                    </div>
                    <div className="hero-card">
                        <div className="content-image">
                            <a className="content-post" href="//">
                                <img alt="" src="./resources/img_4.png" width="270" height="270"/>
                            </a>
                        </div>
                        <div className="content-details">
                            <a className="content-category" href="//">Environment</a>
                            <h3 className="content-title">Many nation are pursuing nuclear power as a means of reducing
                                emissions. </h3>
                            <span className="content-date">
                            <img src="./resources/person.svg" alt="p"/>
                            Rishi
                            <img src="./resources/calender.svg" alt="cal"/>
                            Feb 4 2022
                            <img src="./resources/zig.svg" alt="Z"/>8 min Read</span>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

Carousel.propTypes = {};

export default Carousel;