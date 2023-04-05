import './aboutme.css'
import 'aos/dist/aos.css'

export default function aboutme () {
    return(
        <div className='portfolio__aboutme' id='aboutme'>
            <div className='portfolio__aboutme-header'>
                <h1 data-aos='fade-down'>About Me</h1>
            </div>
            <div className="portfolio__aboutme-text">
                <div className='portfolio__aboutme-text_basicinfo' data-aos='fade-right'>
                    <h2 className='header' data-aos='fade-right'>Basic info</h2>
                    <p><span className='basicinfo-sectionheader' >Name: </span>Grzegorz Wszoła</p>  
                    <p><span className='basicinfo-sectionheader' >Age: </span>19</p>
                    <p><span className='basicinfo-sectionheader' >Education: </span>about to finish highschool</p>
                    <p><span className='basicinfo-sectionheader' >Hobby: </span>playing games, coding</p>
                    <p><span className='basicinfo-sectionheader' >Good traits: </span>English C1/B2, Patient, Easy Learner</p>
                    <p><span className='basicinfo-sectionheader'>Bad traits: </span>Sometimes lazy, Messy</p>
                </div>
                <div className="portfolio__aboutme-text_fromme">
                    <h2 className="header" data-aos='fade-left'>From Me</h2>
                    <p data-aos='fade-left'>I am a really ambitious front-end developer and UI designer without any experience yet but I am willing to learn as much as I can throughout my internship.</p>
                </div>
            </div>
        </div>
    )
}