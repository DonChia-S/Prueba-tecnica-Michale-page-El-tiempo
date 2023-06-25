import '../../scss/tagsNav/tagsNav.scss';

export default function TagsNav() {

    const tags: string[] = [
        'opinión', 'colombia', 'bogotá', 'internacional', 'política', 'justicia', 
        'económia', 'deportes', 'cultura', 'tecnología', 'vida', 'salud', 'unidad investigativa'
      ]

  return (
    <div className="container-fluid">
        <nav className='row g-3 align-items-start'>
            <ul className="col-12 d-flex flex-nowrap align-items-start nav px-3">
                {
                    tags.map((tag)=>(
                        <li className="nav-item text-uppercase" key={tag}>
                            <a aria-current="page" href="#">{tag}</a>
                        </li>
                    ))
                }

                <li className="nav-item text-uppercase">
                    <a aria-current="page" href="#">
                        más
                        <i className="fa-solid fa-chevron-down ms-2"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>        
  )
}
