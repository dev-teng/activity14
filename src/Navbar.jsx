import {Outlet, Link} from 'react-router-dom';

function NavBar() {
    return (
      <main className='d-flex flex-column min-vh-100'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid bg-dark p-2">
            <Link className="navbar-brand text-white fw-bold" to="/">TNG Meatshop</Link>
        
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bg-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active text-white fw-bold" aria-current="page" to="about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="contact">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <Outlet />
      <footer className='p-3 text-center footer mt-auto fw-bold text-white bg-dark'>Copyright Allserved 2025</footer>
      </main>
    )
}

export default NavBar