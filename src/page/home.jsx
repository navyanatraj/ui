//importing css
import "../component/css/styles.css"

//importing images
import facebook from "../component/images/facebook.svg"
import twitter from "../component/images/twitter.svg"
import youtube from "../component/images/youtube.svg"
import chatbot from "../component/images/chatbot.svg"
import orgi_logo from "../component/images/orgi-logo.png"


export default function Home() {
    return(
        <>
  <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,shrink-to-fit=no"
  />
  <meta name="description" content="#" />
  <title>Office of the Registrar General, India - ORGI</title>
  <link rel="icon" href="#" type="image/png" />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
  />

  <header className="app-header">
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <ul className="social-icons">
        <li>
          <i>
            <img src={facebook} />
          </i>
        </li>
        <li>
          <i>
            <img src={twitter} />
          </i>
        </li>
        <li>
          <i>
            <img src={youtube} />
          </i>
        </li>
      </ul>
      <div className="collapse navbar-collapse" id="navbarMobile">
        <ul className="navbar-nav">
          <li className="nav-item no-border hide-xs ml-10">
            <span className="badge badge-light">
              <a className="nav-link" href="#">
                {" "}
                A-
              </a>
            </span>
          </li>
          <li className="nav-item no-border hide-xs">
            <span className="badge badge-light">
              <a className="nav-link" href="#">
                {" "}
                A
              </a>
            </span>
          </li>
          <li className="nav-item no-border hide-xs">
            <span className="badge badge-light">
              <a className="nav-link" href="#">
                {" "}
                A+
              </a>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <section className="wrapper logo-spacer">
    <div className="container">
      <img src={orgi_logo} className="logo-img img-fluid" />
    </div>
  </section>
  <header className="bg-section-dark main-menu" id="header-main">
    <nav
      className="navbar navbar-main navbar-expand-lg navbar-dark"
      id="navbar-main"
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-main-collapse"
          aria-controls="navbar-main-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse navbar-collapse-overlay"
          id="navbar-main-collapse"
        >
          <div className="position-relative">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-main-collapse"
              aria-controls="navbar-main-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
          </div>
          <ul className="navbar-nav">
            <li className="nav-item nav-item-spaced">
              <a className="nav-link" href="#" style={{color:"white", padding:"4px 8px"}}>
                About Us
              </a>
            </li>
            <li className="nav-item nav-item-spaced">
              <a className="nav-link" href="#" style={{color:"white", padding:"4px 8px"}}>
                Our Divisions
              </a>
            </li>
            <li className="nav-item nav-item-spaced">
              <a className="nav-link" href="#" style={{color:"white", padding:"4px 8px"}}>
                Data &amp; Resources
              </a>
            </li>
            <li className="nav-item nav-item-spaced">
              <a className="nav-link" href="#" style={{color:"white", padding:"4px 8px"}}>
                Media
              </a>
            </li>
            <li className="nav-item nav-item-spaced">
              <a className="nav-link" href="#" style={{color:"white", padding:"4px 8px"}}>
                Acts &amp; Rules
              </a>
            </li>
            <li className="nav-item nav-item-spaced">
              <a className="nav-link" href="#" style={{color:"white", padding:"4px 8px"}}>
                RTI
              </a>
            </li>
            <li className="nav-item nav-item-spaced">
              <a className="nav-link" href="#" style={{color:"white", padding:"4px 8px"}}>
                Employee Corner
              </a>
            </li>
            <li className="nav-item nav-item-spaced">
              <a className="nav-link" href="#" style={{color:"white", padding:"4px 8px"}}>
                Tender
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <section className="slice slice-lg pb-4 mb-5">
    <div className="container pt-5 pt-lg-7 pb-lg-9 pb-7">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-7 text-center">
          <h1 className="text-black">
            Welcome to <strong>ORGI</strong>
          </h1>
          <p className="lead text-black opacity-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-5">
            <a
              href="#"
              className="btn btn-primary btn-lg btn-icon d-lg-inline-block"
              style={{backgroundColor:"#004c97", borderColor:"#004c97"}}
            >
              <span className="btn-inner--text">Know More</span>
              <span className="btn-inner--icon play-icon">
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="30px"
                  height="30px"
                  viewBox="0 0 72 72"
                  enableBackground="new 0 0 72 72"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M48.5,36c0-4.688,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5c0,4.687-3.813,8.5-8.5,8.5S48.5,40.687,48.5,36z M61.5,36c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5S61.5,38.481,61.5,36z" />
                    </g>
                    <g>
                      <path d="M27.5,36c0-4.688,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5c0,4.687-3.813,8.5-8.5,8.5S27.5,40.687,27.5,36z M40.5,36c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5S40.5,38.481,40.5,36z" />
                    </g>
                    <g>
                      <path d="M6.5,36c0-4.688,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5c0,4.687-3.813,8.5-8.5,8.5S6.5,40.687,6.5,36z M19.5,36c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5S19.5,38.481,19.5,36z" />
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <div className="chatbotIcon">
    <img src={chatbot} />
  </div> */}
  <footer className="position-relative">
    <div className="footer pt-lg-7 footer-dark bg-dark">
      <div className="container pt-4">
        <div className="row align-items-center justify-content-md-between pb-4">
          <div className="col-md-12">
            <div className="copyright text-sm text-center">
              Website Developed &amp; Maintained by Office of the Registrar
              General &amp; Census Commissioner, India
              <br />
              ©2021 Office of the Registrar General India, All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

    )
}