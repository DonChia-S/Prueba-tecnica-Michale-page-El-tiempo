import { useEffect, useState } from 'react';
import '../../scss/secondNavbar/secondNavbar.scss'
import TagsNav from '../tagsNav/TagsNav';
import RedesNav from '../redesNav/RedesNav';

interface Props {
    isVisible: boolean
}


const SecondNavbar: React.FC<Props> = ({ isVisible }) =>  {

  let initialDate: Date = new Date();

  const [displaySection, setDisplaySection] = useState(true);

  useEffect(() => {
    isVisible == true ? setDisplaySection(false) : setDisplaySection(true);
  })
  
  return (
    <section className='d-none d-lg-block'>
        <div className={`pt-3 pb-2 border-bottom border-3 border-primary  ${displaySection == true ? 'd-none d-lg-block' : 'd-none'}`}>
            <div className={`container-fluid`}>
                <div className="row g-3 align-items-end">
                    <div className="col-2">
                        <p>
                            { initialDate.toDateString() }
                            <br />
                            <small>Últimas Noticias de Colombia y el Mundo.</small>
                        </p>
                    </div>
                    <div className="col-8">
                        <div className="text-center pb-2">
                            <img alt="El Tiempo" src="/logo-blue.png" width="35%"/>
                        </div>
                    </div>
                    <div className="col-2">
                        <RedesNav />
                    </div>
                </div>
            </div>
        </div>
        <div className={`pt-3 pb-1 border-bottom border-1 border-gray align-items-center ${displaySection == true ? 'd-none d-lg-block' : 'd-none'}`}>
            <TagsNav />
        </div>
    </section>
  )
}

export default SecondNavbar;