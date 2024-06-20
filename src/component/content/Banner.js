import React, {Component} from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="wp-block-cover is-light"><span aria-hidden="true"
                                                           className="wp-block-cover__background has-background-dim-0 has-background-dim"></span><img
                data-rishi-lazy="https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner.jpg"
                loading="lazy"
                data-rishi-lazy-set="https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner.jpg 1170w, https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner-300x37.jpg 300w, https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner-1024x126.jpg 1024w, https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner-768x95.jpg 768w"
                data-object-fit="~" fetchPriority="high" decoding="async" width="1170"
                height="144" className="wp-block-cover__image-background wp-image-442"
                alt=""
                data-object-position="80% 100%"
                srcSet="https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner.jpg 1170w, https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner-300x37.jpg 300w, https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner-1024x126.jpg 1024w, https://rishidemos.com/magazine/wp-content/uploads/sites/47/2022/02/ads-banner-768x95.jpg 768w"
                sizes="(max-width: 1170px) 100vw, 1170px"/>
                <div
                    className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                    <div
                        className="wp-block-columns is-layout-flex wp-container-core-columns-layout-3 wp-block-columns-is-layout-flex">
                        <div
                            className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                        >
                            <p></p>
                            <h2 className="wp-block-heading has-text-align-left has-palette-color-2-color has-text-color"
                                id="checkout-my-recommended-gadgets"
                            >Checkout my
                                recommended gadgets</h2>
                            <p className="has-text-align-left has-palette-color-1-color has-text-color">
                                Subscribe and get 15% OFF.</p>
                        </div>
                        <div
                            className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                            <p></p>
                            <div
                                className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-layout-1 wp-block-buttons-is-layout-flex">
                                <div className="wp-block-button has-custom-font-size"
                                ><a
                                    className="wp-block-button__link has-white-color has-palette-color-3-background-color has-text-color has-background wp-element-button"
                                >learn More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;