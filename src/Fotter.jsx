import './assets/scss/main.css'
import './assets/bootstrap/bootstrap.min.css'
import './assets/bootstrap/bootstrap.bundle.min.js'
import logo from './assets/images/Logo.png'
function Fotter() {
    return(
        <>
        <footer>
            <div className="container-md">
                <section className="footer m-xl-3">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="p-lg-3 py-3 py-md-0">
                               <div className="row py-3 py-md-0">
                                <div className="col-xl-4 col-lg-5 col-sm-2 col-3 d-flex justify-content-end align-items-center">  <img src={logo} alt="" />
                                </div>
                                <div className="col-xl-8 col-lg-4 col-sm-10 col-8"> <h2>autodrone</h2>
                                </div>
                              
                               </div>
                               <p>Look up the sky and beautiful
                               world easily.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-lg-3">
                             <h3>Explore</h3> 
                             <ul>
                                 <li>Our Services</li>
                                 <li>Specification</li>
                                 <li>Refund</li>
                                 <li>Playlist</li>
                            </ul> 
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-lg-3">
                             <h3>Account</h3> 
                             <ul>
                                 <li>My Account</li>
                                 <li>Top Benefit</li>
                                 <li>How-to Tutorials</li>
                                 <li>Moment</li>
                             </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="p-lg-3">
                              <h3>Office</h3>
                              <ul>
                                 <li>+021 2208 1996</li>
                                 <li>SCBD, Jakarta</li>
                                 <li>No.2 (Autodrone)</li>
                                 <li>support@autodrone.id</li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
            <div className="row">
                    <div className="col-lg-12 text-center">
                        <p> &copy; copyright protected 2024. All rights reserved. Made by Muhammad Aleem</p>
                    </div>
                </div>
        </footer>
        </>
    )
}
export default Fotter