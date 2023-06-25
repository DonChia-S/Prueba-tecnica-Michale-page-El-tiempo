
interface INotice{
    id: number,
    title: string,
    summary: string,
    tag: string,
    date: string,
    image: string
}

interface Props{
    notice: INotice,
}

const CardNotices: React.FC<Props> = ({ notice }) => {

    const { title, summary, tag, date, image } = notice;


  return (
    <div className="card mb-3" style={{ maxWidth: 540 + 'px' }}>
        <div className="row g-0">
            <div className="col-md-5 text-center">
                <div className="card-body border-bottom border-top border-2 border-gray py-2">
                    <div className="d-flex justify-content-center py-3 text-uppercase">
                        <span className="badge text-bg-primary mx-1">{ tag }</span>
                        <small className="text-body-tertiary fw-bolder mx-1">{ date }</small>
                    </div>
                    <h5 className="card-title fw-bolder fs-3">
                        <span id="suscription-badge" className="badge text-bg-success mx-1 align-middle">
                            Suscription
                            <i className="fa-solid fa-lock ms-2"></i>
                        </span>
                        { title }
                    </h5>
                    <p className="card-text">
                        { summary }
                    </p>
                </div>
            </div>
            <div className="col-md-7 d-none d-lg-block">
                <img src={ image } className='object-fit-cover'  alt="..." />
            </div>
        </div>
    </div>
  )
}

export default CardNotices;
