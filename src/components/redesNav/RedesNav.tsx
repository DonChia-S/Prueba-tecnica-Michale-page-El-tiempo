import '../../scss/redesNav/redesNav.scss';

interface Redes{
    name: string,
    url: string
}

export default function RedesNav() {
    const Redes:Redes[] = [
        { name: 'whatsapp', url: 'https://api.whatsapp.com/send/?phone=573223090079&text&app_absent=0'},
        { name: 'facebook', url: 'https://www.facebook.com/eltiempo' },
        { name: 'twitter',  url: 'https://twitter.com/eltiempo' },
        { name: 'youtube',  url: 'https://www.youtube.com/user/ElTiempoPLAY' },
        { name: 'instagram', url: 'https://www.instagram.com/eltiempo/' }
      ]
    
  return (
    <ul>
        {
            Redes.map((red) => (
                <li key={red.name}>
                    <a aria-current="page" href={red.url} target='_blank'>
                        <i className={`fa-brands ${"fa-" + red.name} border rounded-5 p-1`}></i>
                    </a>
                </li>
            ))
        }
    </ul>
  )
}
