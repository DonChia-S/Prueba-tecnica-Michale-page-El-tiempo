
import UltimeNotice from '../components/ultimateNotice/UltimeNotice'
import { CarouselNotices } from '../sections/carouselOfNotices/CarouselNotices'
import '../scss/home/home.scss';

export default function Home() {
  return (
    <main className='container'>
        <UltimeNotice />
        <div className="row">
            <div className="col-12 mw-100 w-100">
                <img src="/banner-1.png" className='object-fit-cover' width={100 + '%'} height={100 + 'px'}  alt="..."/>
            </div>
        </div>
        <CarouselNotices />
    </main>
  )
}
