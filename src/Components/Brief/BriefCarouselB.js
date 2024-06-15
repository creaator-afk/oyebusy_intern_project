import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BriefCarouselB extends Component {
    render() {
        return (
            <div className="content-carousel">
                <div><img src="./resources/img_7.png" alt="im" width="250" height="250"/></div>
                <div className="">
                    <h1>
                        Facts Everyone Should Know About Design
                    </h1>
                    <div><span><img src="./resources/person.svg" alt="p"/>Rishi</span><span><img
                        src="./resources/calender.svg" alt="cal"/></span></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
                        delectus
                        eum nostrum nulla omnis quis recusandae ullam! Ex inventore, quisquam.
                    </p>
                </div>
            </div>
        );
    }
}

BriefCarouselB.propTypes = {};

export default BriefCarouselB;