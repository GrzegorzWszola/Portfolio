import './projects.css'
import { ProjectComp } from '../../reusable'
import gpt3_photo from '../../assets/gpt3.png'
import restaurant_photo from '../../assets/Restaurantapp.png'
import 'aos/dist/aos.css'

export default function projects (){
    return(
        <div className='portfolio__projects' id='projects'>
            <div className="portfolio__projects-header" data-aos='fade-right'>
                <h1>Projects</h1>
                <h2>Projects that i was able to do in short time of my codin experience. There will be more coming soon.</h2>
            </div>
            <div className='portfolio__projects-container' data-aos='fade-up'>
                <ProjectComp title='GPT-3 landig page' txt='Site made with the help of Youtube tutorial but helped me with understanding of basic React' link='https://grzegorzwszola.github.io/GPT-3/' img={gpt3_photo}/>
                <ProjectComp title='Restaurant App' txt='Basic site of a restaurant which i use to learn React Router Dom' link='https://github.com/GrzegorzWszola/Basic-Restaurant-App' img={restaurant_photo}/>
            </div>
        </div>
    )
}