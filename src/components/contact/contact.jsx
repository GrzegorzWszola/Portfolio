import './contact.css'

export default function contact (){
    return (
        <div className='portfolio__contact' id='contact' data-aos='fade-up'>
            <div className="portfolio__contact-container">
                <h1>Contact</h1>
                <form action="https://formsubmit.co/grzegorzwszola1@gmail.com"  target='_blank' method='POST' className='portfolio__contact-form'>
                    <input type="text" name='name' className='portfolio__contact-form_input' placeholder='Name' required/>
                    <input type="email" name='email' className='portfolio__contact-form_input' placeholder='Email Adress' required/>
                    <textarea placeholder="Your Message" className="portfolio__contact-form_input" name="message" rows="5" required></textarea>
                    <div className="button">
                        <button type="submit" className="porfolio__contact-form_btn">Submit Form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}