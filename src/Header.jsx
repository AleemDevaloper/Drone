import './assets/scss/main.css'
import './assets/bootstrap/bootstrap.min.css'
import './assets/bootstrap/bootstrap.bundle.min.js'
import logo from './assets/images/Logo.png'
import icon from './assets/images/Vector.png'
import bg1 from './assets/images/bg1.jpg'
function upper() {
    return(
        <>
        <section className="upper pt-2 pb-5">
        <header id="header mb-lg-3">
        <nav className="navbar navbar-dark navbar-expand-lg bg-transparent bg-body-dark">
          <div className="container">
            <a className="navbar-brand fs-4" href="/"><img src={logo} alt=""/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav d-flex justify-content-center align-items-center flex-grow-1 mb-2 mb-lg-0">
        <li class="nav-item mx-lg-3">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item mx-lg-3">
          <a class="nav-link" href="/">GALLERY</a>
        </li>
        <li class="nav-item mx-lg-3">
          <a class="nav-link" href="/">PRODUCTS</a>
        </li>
        <li class="nav-item mx-lg-3">
          <a class="nav-link" href="/">REVIEW</a>
        </li>
        <li class="nav-item mx-lg-3">
          <a class="nav-link" href="/">SUPPORT</a>
        </li>
        
      </ul>
      <form class="d-flex justify-content-center align-items-center" role="search">
        <img src={icon} alt="" srcset="" />
      </form>
    </div>
          </div>
        </nav>
        </header>

        <div className="text-area pb-5 mt-5">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="my-2 mr-2">Representing Drone Light </h1>
            <p className='mb-4'>Look up the  sky and beautiful world with simple navigation.
            Just record anmd get a lot memories to share, lighlty and fast like a lightning</p>
            <button type="submit" className="px-5 py-2 rounded">Get Now</button>
            <img src={bg1} alt="" />
          </div>
        </div>
        </section>  
        </>
    );
}

export default upper