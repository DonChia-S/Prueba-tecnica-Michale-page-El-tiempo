import 'bootstrap';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home';
import DetailsNotice from './pages/DetailsNotice';
import './scss/styles.scss';
import Footer from './sections/footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/notice/:tag/:title/:id",
    element: <DetailsNotice />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Navbar />
        <RouterProvider router={router} />
      <Footer />
      <a id='btn-what' className='btn btn-success text-white rounded-circle px-3'>
        <i className="fa-brands fa-whatsapp"></i>
      </a>
  </React.StrictMode>,
)
