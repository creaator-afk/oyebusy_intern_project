import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeaderWithLine from "./HeaderWIthLine";
import ContentSection from "./ContentSection";
import ContentCard from "./ContentCard";
import ContentCarousel from "./ContentCarousel";

class Content extends Component {
    render() {
        return (
            <div className="container content">
                <div className="justified-content-3">
                    <HeaderWithLine/>
                    <ContentSection/>
                </div>
                <div>
                    <HeaderWithLine/>
                    <ContentCard/>
                    <ContentCarousel/>
                </div>
            </div>
        );
    }
}

Content.propTypes = {};

export default Content;