import notices from '../data/noticias.json';
import { useParams } from 'react-router-dom';
import '../scss/detailsNotice/detailsNotice.scss'

export default function DetailsNotice() {

    const {id} = useParams();
    let idNotice = parseInt(`${id}`);

    const [notice] = notices.filter((notice)=>notice.id == idNotice);

  return (
    <div id="detail" className="container">
        <div className="row detail-row mb-5">
            <div className="col-12 d-flex justify-content-center position-relative">
                <img src={ notice.image } className="object-fit-cover w-100 h-100" alt="..." />
                <div className="position-absolute top-50 start-0 text-break w-lg-50">
                    <h1 id="title-notice">
                        { notice.title }
                    </h1>
                </div>
            </div>
        </div>
        {
            notice.content.map((item) => (
                <div className="row my-5" key={item.image}>
                    <div className="col-12 d-flex flex-column align-items-center">
                        <div className="">
                            <p className='fs-5'>
                                { item.text }
                            </p>
                        </div>
                        <img src={ item.image } className="object-fit-cover w-50 h-75" alt="..." />
                    </div>
                </div>
            ))
        }
    </div>
  )
}
