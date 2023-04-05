import { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const Home = () => {
    return(
        <>
        <p><a href="#" className='portfolio__navbar-linkanime'>Home</a></p>
        <p><a href="#aboutme" className='portfolio__navbar-linkanime'>About me</a></p>
        <p><a href="#technology" className='portfolio__navbar-linkanime'>Technology</a></p>
        <p><a href="#projects" className='portfolio__navbar-linkanime'>Projects</a></p>
        <p><a href="#contact" className='portfolio__navbar-linkanime'>Contact</a></p>
        </>
    )
}

function navbar(){
    const [toggleMenu, setToggleMenu] = useState(false)

    return(
        <div className='portfolio__navbar'>
            <div className='portfolio__navbar-logo'>
                <h1>Portfolio.</h1>
            </div>
            <div className='portfolio__navbar-links'>
                <Home />
            </div>
            <div className="portfolio__navbar-list">
                {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} style={{color: 'var(--color-txt)'}}/>
                            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} style={{color: 'var(--color-txt)'}}/>
                }
                {toggleMenu && (
                    <div className="portfolio__navbar-list_container">
                        <div className="portfolio__navbar-list_links">
                            <Home/>
                        </div>
                    </div>     
                )
                }
            </div>
        </div>
    )
}

export default navbar