import React, {Component} from 'react';
import MixedContent from "./MixedContent";
import Banner from "./Banner";
import ListView from "./ListView";
import Carousel from "./Carousel";
import Focused from "./Focused";
import EntryContent from "./EntryContent";



class Content extends Component {
    render() {
        return (
            <div className="site-content">
                <div className="rishi-container" data-strech="none">
                    <div className=" main-content-wrapper clear rishi-spacing-both">
                        <main id="primary" className="site-main">
                            <div className="rishi-container-wrap">
                                <article id="post-120"
                                         className="post-120 page type-page status-publish hentry rishi-post no-post-thumbnail"
                                         itemType="https://schema.org/CreativeWork" itemScope="">
                                    <div className="entry-content" itemProp="text">
                                        <EntryContent/>
                                        <Focused/>
                                        <Carousel/>
                                        <ListView/>
                                        <Banner/>
                                        <MixedContent/>
                                    </div>
                                </article>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;