import "./comapnion-gen.css"
import "./elementor.css"
import "./media-query.css"
import "./main.css"
import "./root.css"
import "./style.min.css"
import "./style(1).min.css"
import "./tablet.css"
import "./ui-color.css"
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Content from "./component/content/Content";

function App() {
    return (
        // <Provider store={store}>
            <div>
                <body
                    className="home page-template-default page page-id-120 wp-custom-logo wp-embed-responsive postx-page default-layout rishi-has-blocks full-width elementor-default elementor-kit-3"
                    itemType="https://schema.org/WebPage" itemScope="">
                <div id="main-container" className="site">
                    <a className="skip-link screen-reader-text" href="#">Skip to
                        content</a>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
                </body>
            </div>
        // </Provider>

    );
}

export default App;
