import './procont.css'

export default function procont ({title, txt, img, link}) {
    return(
        <div className="portfolio__procont">
            <div className="portfolio__procont-container">
                    <h1>{title}</h1>
                    <h2>{txt}</h2>
                    <a href={link} target='_blank'>Check Page</a>
            </div>
            <div className='portfolio__procont-img'>
                <img src={img} alt="site_photo" />
            </div>
        </div>
    )
}