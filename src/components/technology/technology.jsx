import './technology.css'
import laptop from '../../assets/laptop.svg'
import 'aos/dist/aos.css'

export default function technology (){
    return(
        <div className='portfolio__technology' id='technology'>
            <div className="portfolio__technology-header" data-aos='fade-right'>
                <div className="portfolio__technology-header_txt">
                    <h1>Technologies</h1>
                    <h2>I am learning how to use right now</h2>
                </div>
                <div className="portfolio__technology-header_img">
                    <img src={laptop} alt="laptop" />
                </div>
            </div>
            <div className="portfolio__technology-blocks">
                <div className="portfolio__technology-blocks_container">
                    <div className="portfolio__technology-blocks_card" data-aos='fade-down'>
                        <div>
                            <h1>Front-End</h1>
                            <h2>HTML, CSS, React</h2>
                        </div>
                        <div>
                            <p>Intermidate in HTML and CSS, Beginner in React and JavaScript</p>
                        </div>
                    </div>
                    <div className="portfolio__technology-blocks_card" data-aos='fade-down'>
                        <div>
                            <h1>Back-End</h1>
                            <h2>JavaScript</h2>
                        </div>
                        <div>
                            <p>I am a begginer in JS and have basic knowledge about how rest API's work</p>
                        </div>
                    </div>
                    <div className="portfolio__technology-blocks_card" data-aos='fade-down'>
                        <div>
                            <h1>Design</h1>
                            <h2>Figma</h2>
                        </div>
                        <div>
                            <p>I have small experience in figma (made few designs)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}