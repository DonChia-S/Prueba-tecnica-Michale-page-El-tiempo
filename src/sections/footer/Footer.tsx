import '../../scss/footer/footer.scss';
import RedesNav from '../../components/redesNav/RedesNav';

export default function Footer() {
  return (
    <footer className='container-fluid bg-gray'>
        <div className="row px-1 pt-3 pt-lg-4 pb-lg-5 border-lg-bottom border-3 border-primary justify-content-between">
          <div className="col-12 col-lg-3 align-items-end">
            <div className='text-end'>
              <img src='/logo-blue.png' />
            </div>
            <div className="d-flex flex-column align-items-end mt-4">
              <div>
                <small className='text-body-secondary fw-normal my-1' style={{ fontSize: .75 + 'rem' }}>SÍGUENOS EN: </small>
                <RedesNav />
              </div>
            </div>
          </div>
          <div className="col-2">
            <ul className='d-flex flex-column text-body fw-bolder text-uppercase text-secondary'>
              <li><a>ayuda</a></li>
              <li><a>aviso de privacidad</a></li>
              <li><a>Términos y condiciones</a></li>
              <li><a>Política de Cookies</a></li>
              <li><a>Mapa del Sitio</a></li>
              <li><a>Conoce Nuestros Portales</a></li>
            </ul>
          </div>
          <div className="col-2">
            <ul className='d-flex flex-column text-body fw-bolder text-uppercase text-secondary'>
              <li><a>Servicio al Cliente</a></li>
              <li><a>Línea Ética</a></li>
              <li><a>Club EL Tiempo Vivamos</a></li>
              <li><a>RSS</a></li>
              <li><a>Cursos El Tiempo</a></li>
              <li><a>Casa Editorial El Tiempo</a></li>
            </ul>
          </div>
          <div className="col-2">
            <ul className='d-flex flex-column text-body fw-bolder text-uppercase text-secondary'>
              <li><a>Colecciones El Tiempo</a></li>
              <li><a>Paute con nosotros</a></li>
              <li><a>Trabaje con nosotros</a></li>
              <li><a>Publicidad Política Pagada</a></li>
              <li><a>Suscribirse</a></li>
              <li><a>Reversión de Pago</a></li>
            </ul>
          </div>
          <div className="col-2">
            <ul className='d-flex flex-column text-body fw-bolder text-uppercase text-secondary'>              
              <li className='mb-2'>MIEMBRO DE: </li>
                <ul className='d-flex flex-column'>
                  <li><a>Grupo de Diarios de América </a></li>
                  <li><a>Asociación Colombiana de </a></li>
                  <li><a>Medios de Información Interactive Advertisement Bureau</a></li>
                  <li><a>Superintendencia de Industria y Comercio</a></li>
                </ul>
            </ul>
          </div>
        </div>
        <div className="row my-lg-4">
          <div className="col-12 col-lg-10 offset-lg-1 text-start text-lg-center">
            <p className='fw-normal text-body-secondary'>
              COPYRIGHT © 2023 EL TIEMPO Casa Editorial NIT. 860.001.022-7. Prohibida su reproducción total o parcial, así como su traducción a cualquier idioma sin autorización escrita de su titular.
              <br />
              ELTIEMPO.com todas las noticias principales de Colombia y el Mundo
            </p>
          </div>
        </div>
    </footer>
  )
}
