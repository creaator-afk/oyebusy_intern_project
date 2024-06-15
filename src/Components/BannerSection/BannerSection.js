import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BannerSection extends Component {
    render() {
        return (
            <section className="banner-section-container container">
                <div className="hero-card">
                    <div className="hero-image">
                        <a className="banner-post" href="//">
                            <img alt="" src="./resources/img_12.png" width="250" height="250"/>
                        </a>
                    </div>
                    <div className="banner-details">
                        <div><h3 className="content-title">The Hidden Mystery Behind Fashion</h3>
                            <p>Subscribe and get 15%off</p></div>
                        <div><a className="content-category" href="//">Fashion</a></div>
                    </div>
                </div>
            </section>
        );
    }
}

BannerSection.propTypes = {};

export default BannerSection;