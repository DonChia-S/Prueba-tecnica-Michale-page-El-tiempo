import Notices from '../../data/noticias.json';
import CardNotices from "../../components/cardNotice/CardNotices";
import Carousel from 'react-bootstrap/Carousel';

export const CarouselNotices = () => {

   const notices = Notices;
  
  return (
    <div className='row my-4' style={{ zIndex: 1 }}>
        <div className='col-12 d-flex justify-content-center'>
            <Carousel fade={true} controls={false} indicators={false} touch={true} interval={5000}>
                {
                    notices.map((notice)=>(
                        <Carousel.Item key={notice.id}>
                            <a href={`/notice/${notice.tag}/${notice.title}/${notice.id}#detail`} style={{ textDecoration: "none" }}>
                                <CardNotices notice={ notice }/>
                            </a>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    </div>
  )
}
