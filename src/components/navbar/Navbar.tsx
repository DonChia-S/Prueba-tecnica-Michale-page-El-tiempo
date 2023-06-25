import { useState } from 'react';
import SecondNavbar from '../secondNavbar/SecondNavbar';
import '../../scss/navbar/navbar.scss';
import RedesNav from '../redesNav/RedesNav';

export default function Navbar() {

  const [displayLogo, setDisplayLogo] = useState(false);   

  window.onscroll = () => {
      window.scrollY > 50 ? setDisplayLogo(true) : setDisplayLogo(false);
    //   console.log(window.scrollY);
  };

  return (
    <>
        <header className='fixed-top'>
            <nav className="navbar navbar-expand-lg bg-primary" style={{ padding: 0 + "px" }}>
                <div className="container-fluid">
                    <div className="d-flex justify-content-start align-items-center">
                        <button className="navbar-toggler text-white" style={{ border: 'none', }} type="button" data-bs-toggle="collapse" data-bs-target="#nav-responsive" aria-controls="nav-responsive" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <a className="navbar-brand d-lg-none ms-2" href='../'>
                            <img alt="El Tiempo" src="/logo-white.png" width="30%" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <a className="nav-link text-white" aria-current="page" href="#">
                                <i className="fa-solid fa-magnifying-glass border border-white rounded-3 p-2"></i>
                            </a>
                            <a className="nav-link text-white" aria-current="page" href="#">
                                <div className="border border-white rounded-4 d-flex align-items-center py-2 px-3">
                                    <span className="text-uppercase fw-bolder">secciones</span>
                                    <i className="fa-solid fa-bars ms-2" style={{ fontSize: 1 + 'rem' }}></i>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse text-center col-5">
                        <a className={`navbar-brand mt-1 mb-2 ${displayLogo == true ? "d-none d-lg-block" : "d-none"}`} href="#">
                            <img alt="El Tiempo" src="/logo-white.png" width="22%"/>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <a className="nav-link text-white" aria-current="page" href="#">
                                <div id='btn-suscription' className="rounded-4 d-flex align-items-center py-2 px-3">
                                    <span className="text-uppercase"><b className='fw-bolder'>suscribete x $900</b> 1er mes</span>  
                                </div>
                            </a>
                            <div className="vr bg-white text-white border-white"></div>
                            <a className="nav-link text-white" aria-current="page" href="#">
                                <div className="border border-white rounded-4 d-flex align-items-center py-2 px-3">
                                    <i className="fa-solid fa-user me-2" style={{ fontSize: 1 + 'rem' }}></i>
                                    <span className="text-uppercase fw-bolder">iniciar sesión</span>
                                </div>
                            </a>
                            <a className="nav-link text-white" aria-current="page" href="#">
                                <div className="border border-primary rounded-4 d-flex align-items-center py-2 px-3">
                                    <i className="fa-solid fa-star me-2" style={{ fontSize: 1 + 'rem' }}></i>
                                    <span className="text-uppercase fw-bolder">mis noticias</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div id="nav-responsive" className="collapse text-center d-lg-none bg-white col-12">
                    <div className="input-group my-3 px-2 bg-gray">
                        <span className="input-group-text" id="basic-addon1">
                            <i className='fas fa-search'></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Noticias de Colombia y el mundo" aria-label="search" aria-describedby="basic-addon1"/>
                    </div>
                    <div className='my-1'>
                        <ul className="list-group list-group-flush text-start p-2">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div id='redes' className='d-flex border-top border-2 border-primary pt-3'>
                        <p className='text-primary text-uppercase'>síguenos en:</p>
                        <RedesNav />
                    </div>
                </div>
            </nav>
        </header>
        <SecondNavbar isVisible={ displayLogo } />
    </>
  )
}

