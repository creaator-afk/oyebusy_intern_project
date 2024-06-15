import React, {Component} from 'react';

class HeaderWithLine extends Component {
    render() {
        return (
            <div className="container-topics"><h2><span>Hot Topics</span></h2>
                <div className="line"></div>
                <div className="backdrop updates-button"><img src="./resources/back.svg" alt="b"/></div>
                <div className="backdrop updates-button"><img src="./resources/forward.svg" alt="f"/></div>
            </div>
        );
    }
}
export default HeaderWithLine;