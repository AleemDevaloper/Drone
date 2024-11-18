import { useState } from "react";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/bootstrap/bootstrap.bundle.min.js";
import "./assets/scss/main.css";
import img1 from "./assets/images/img1.png";
import img2 from "./assets/images/img2.png";
import img3 from "./assets/images/img3.png";

import person1 from "./assets/images/person1.png";
import person2 from "./assets/images/person2.png";
import person3 from "./assets/images/person3.png";
import drone1 from "./assets/images/drone (1).png";
import drone2 from "./assets/images/drone (2).png";
import drone3 from "./assets/images/drone (3).png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="middel-area">
        <div className="container">
          <div className="row m-0 m-sm-4">
            <div className="col-lg-6 mt-lg-0 mt-2 text-center ">
              <div className="img">
                <img src={img1} alt="" />
                <div className="text px-4 px-lg-3 px-xl-5">
                  <h1 className="h1">Ultra Light</h1>
                  <p className="p">
                    Drone move faster with weighing component under 200 g
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-3 text-center ">
              <div className="img">
                <img src={img2} alt="" />
                <div className="text px-4 px-lg-3 px-xl-5">
                  <h1 className="h1-2">Best Resolution</h1>
                  <p className="p-2">
                    Take a beautiful view with best camera up to 4K Camera
                    Resolution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="middel my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <img src={img3} alt="" className="m-5" />
              </div>
            </div>

            <div className="col-lg-8 pt-3">
              <div className="m-3 mt-lg-5 mx-4">
                <h1 className="my-2 mt-lg-5">Why Drone Light?</h1>
                <p className="my-2 mx-2">
                  We provide a best self drone easy to use and operate. With
                  auto pilot, the device will take a beautiful view for the best
                  of flying operation.
                </p>
                <div className="my-5 text-center">
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="row">
                        <div className="col-6">
                        <h2>4K</h2>
                        <p>Camera Resolution</p>
                        </div>
                        <div className="col-6">
                        <h2>2 TB</h2>
                        <p>Storage Capacity</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="row">
                        <div className="col-6">
                        <h2>60 m/s</h2>
                        <p>Super Max Speed</p>
                        </div>
                        <div className="col-6">
                        <h2>30 mins</h2>
                        <p>Long Flight Time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-area">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="my-4">New Products</h1>
              <p className="px-lg-5">
              New innovation, best quality than before.
              Make every moment flying operation become unforgettable.
              </p>
            </div>
          </div>

          <div className="my-5">
            <div className="row">
              <div className="col-lg-4 p-lg-3 p-md-5 p-3">
              <div className="p-4">
              <img src={drone1} alt="img"/>
                <h3 className="my-4">Mini Drone</h3>
                <p>Powerful camera drone at an
                 affordable price range. Camera
                 up to 4K resolution, high speed, and optimize shots
                 automatically.</p>
                 <button type="submit" className="py-2 px-5 my-3">Get Now</button>
              </div>
                </div>
             
              <div className="col-lg-4 p-lg-3 p-md-5 p-3">
              <div className="p-4">
              <img src={drone2} alt="img"/> 
                 <h3 className="my-4">Drone Light</h3>
                 <p>Drone light is every creators dream.
                  Setting apperture manually and high
                  battery  performance. Drone light is
                  everything you need.</p>  
                  <button type="submit" className="py-2 px-5 my-3">Get Now</button> 
              </div>
               </div>
            
              <div className="col-lg-4 p-lg-3 p-md-5 p-3">
              <div className="p-4">
              <img src={drone3} alt="img"/> 
                 <h3 className="my-4">Phantom Drone</h3>
                 <p>Inspired by phantom, drone
                  can move faster and quickly like a ghost.
                  Focus on speed so you can investigate
                  environtment quickly.</p>   
                  <button type="submit" className="py-2 px-5 my-3">Get Now</button>    
              </div>
             </div>
            
            </div>
          </div>
        </div>
      </section>


      <section className="last-area m-2 my-5">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-7">
              <h1>What Our “Pilots Are Saying</h1>
            </div>
          </div>

          <div className="row my-4">

            {/* Card 1 */}
            <div className="col-lg-4 my-lg-2 my-3">
              <div className="card p-3">
                <p>
                  With high resolution camera, picture become clear and
                  beautiful. It’s so easy to operate drone.
                </p>
                <div className="row">
                  <div className="col-4">
                    <img src={person1} alt="" />
                  </div>
                  <div className="col-8">
                    <h5>Hugo Adams</h5>
                    <p>Content Creator</p>
                  </div>
                </div>
              </div>
            </div>
             {/* Card 2 */}
            <div className="col-lg-4 my-lg-2 my-3">
              <div className="card p-3">
                <p>
                Taking high view video become
               easy and faster. Battery performance
               really helping for making film.
                </p>
                <div className="row">
                  <div className="col-4">
                    <img src={person2} alt="" />
                  </div>
                  <div className="col-8">
                    <h5>Jennie Obrien</h5>
                    <p>Director Film</p>
                  </div>
                </div>
              </div>
            </div>
             {/* card 3 */}
            <div className="col-lg-4 my-lg-2 my-3">
              <div className="card p-3">
                <p>
                Making video content for my trip
                vlog so powerful and wonderful. 
                Best Quality.
                Love the video quality.
                </p>
                <div className="row">
                  <div className="col-4">
                    <img src={person3} alt="" />
                  </div>
                  <div className="col-8">
                    <h5>Lisa Millz</h5>
                    <p>Content WQCreator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
