import './frontpage.css'
import gif from '../../assets/samurai.gif'

export default function frontpage() {
    return (
        <div className='portfolio__frontpage'>
            <div className='portfolio__frontpage-header'>
                <h2 style={{animation: 'slideUp 1s ease forwards'}}>Hi my name is</h2>
                <h1>Grzegorz Wszoła</h1>
                <h2 style={{animation: 'slideDown 1s ease forwards'}}>and I am a begginer Front-End Developer</h2>
                <div className='portfolio__frontpage-icons'>
                    <a style={{animation: 'slideDown 1s ease forwards'}} href="https://www.linkedin.com/in/grzegorz-wszo%C5%82a-7b520a267/" target='_blank'><i className='bx bxl-linkedin-square' ></i></a>
                    <a style={{animation: 'slideDown 2s ease forwards'}} href="https://www.facebook.com/profile.php?id=100005325167291" target='_blank'><i className='bx bxl-facebook-square' ></i></a>
                    <a style={{animation: 'slideDown 3s ease forwards'}} href="https://github.com/GrzegorzWszola" target='_blank'><i className='bx bxl-github'></i></a>
                </div>
            </div>
            <div className='portfolio__frontpage-gif'><img src={gif} alt="samurai_gif"/></div> {/* https://www.newgrounds.com/art/view/gordonshier/samurai-idle-animation */}
        </div>
    )
}