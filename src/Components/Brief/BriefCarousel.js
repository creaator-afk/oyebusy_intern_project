import React, {Component} from 'react';

class BriefCarousel extends Component {
    render() {
        return (
            <div className="content-carousel">
                <div><img src="./resources/img_7.png" alt="im" width="100" height="100"/></div>
                <div className="">Facts Everyone Should Know About Design
                    <div><span><img src="./resources/person.svg" alt="p"/>Rishi</span><span><img
                        src="./resources/calender.svg" alt="cal"/></span></div>
                </div>
            </div>
        );
    }
}

export default BriefCarousel;