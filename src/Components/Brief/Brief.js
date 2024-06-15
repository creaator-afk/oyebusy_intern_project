import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BriefCarousel from "./BriefCarousel";
import HeaderWithoutLine from "../Header/HeaderWithoutLine";
import BriefCarouselS from "./BriefCarouselS";
import BriefCard from "./BriefCard";
import BriefCarouselB from "./BriefCarouselB";

class Brief extends Component {
    render() {
        return (
            <div className="container">
                <div className="brief">
                    <div>
                        <HeaderWithoutLine/>
                        <div>
                            <div>
                                <BriefCarouselB/>
                                <BriefCarouselB/>
                                <BriefCarouselB/>
                                <BriefCarouselB/>
                                <BriefCarouselB/>
                                <div className="brief-button">
                                    <a>Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <HeaderWithoutLine/>
                            <BriefCard/>
                            <div>
                                <BriefCarouselS/>
                                <BriefCarouselS/>
                            </div>
                            <span>
                            <HeaderWithoutLine/>
                            <ul>
                                <li><a href="#link">Environment</a></li>
                                <li><a href="#link">Fashion</a></li>
                                <li><a href="#link">LifeStyle</a></li>
                                <li><a href="#link">Technology</a></li>
                            </ul>
                        </span>
                            <BriefCarousel/>
                            <BriefCarousel/>
                            <BriefCarousel/>
                            <BriefCarousel/>
                            <BriefCarousel/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Brief.propTypes = {};

export default Brief;