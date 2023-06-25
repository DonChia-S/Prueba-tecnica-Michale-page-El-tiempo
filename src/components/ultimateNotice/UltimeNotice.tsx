import '../../scss/ultimateNotice/ultimateNotice.scss'

export default function UltimeNotice() {
  return (
    <div className='row ultimate-row'>
        <div className='col-12 d-flex justify-content-center'>
            <div className="card mb-3" style={{ maxWidth: 540 + 'px' }}>
                <div className="row g-0">
                    <div className="col-12 col-md-5">
                        <div className="card-header bg-danger text-white text-uppercase fw-bolder">
                            <div className="d-flex align-items-center">
                                <i className="fa-brands fa-nfc-directional me-2"></i>
                                <span className='border-end border-2 pe-3'>Lo último</span>
                            </div>
                        </div>
                        <div className="card-body border-bottom border-2 border-dark pb-4">
                            <h5 className="card-title fw-bolder fs-3">
                            <span id="suscription-badge" className="badge text-bg-success mx-1 align-middle">
                                Suscription
                                <i className="fa-solid fa-lock ms-2"></i>
                            </span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.
                            </h5>
                            <p className="card-text">
                                Maecenas sed enim ut sem viverra aliquet. Diam in arcu cursus euismod quis viverra.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7 d-none d-lg-block">
                        <img src="https://picsum.photos/650/300?random=1" className='object-fit-cover'  alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
