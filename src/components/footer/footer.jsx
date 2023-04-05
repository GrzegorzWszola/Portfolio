import './footer.css'

export default function footer (){
    return (
        <div className='portfolio__footer' data-aos='fade-up'>
            <div className="portfolio__footer-links">
                <a href="https://www.linkedin.com/in/grzegorz-wszo%C5%82a-7b520a267/">LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=100005325167291">Facebook</a>
                <a href="https://github.com/GrzegorzWszola">GitHub</a>
            </div>
            <div className='portfolio__footer-credits'>gif taken from <a href="https://www.newgrounds.com/art/view/gordonshier/samurai-idle-animation" target='_blank'> here </a></div>
            <div className='portfolio__footer-backtotop'><a href="#">Back to top</a></div>
        </div>
    )
}