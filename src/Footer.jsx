import './Footer.scss';
import emailIcon from './photoassets/Email_Vector.svg';
import phoneIcon from './photoassets/Phone_Vector.svg';

import fbIcon from './photoassets/facebook_Vector.svg';
import instaIcon from './photoassets/instagram_Vector.svg';
import ytIcon from './photoassets/YouTube_Vector.svg';
import xIcon from './photoassets/x_Twitter_Vector.svg';

export const Footer = () => {
  return(
    <div className="footer">
      <div className='footer-wrapper'>
     
        <section className='footer-top'>
          <p>Chór Kameralny Hibike</p>
          <div>
            <img src={emailIcon} alt="emailIcon" />
            <span>biuro@chorkameralnyhibike.com</span>
          </div>
          <div>
            <img src={phoneIcon} alt="phoneIcon" />
            <span>+48 739 920 779</span>
          </div>
        </section>
        <section className='footer-middle'>
          <div className="icon-wrapper">
            <a href="https://www.facebook.com/chorkameralnyhibike">
              <img src={fbIcon} alt="facebook" />
            </a>

            <a href="https://www.instagram.com/hibike_choir/">
              <img src={instaIcon} alt="instagram" />
            </a>

            <a href="https://www.youtube.com/channel/UC9DStXNc8oicastzbilOHOQ">
              <img src={ytIcon} alt="youtube" />
            </a>
                     
            <a href="https://x.com/chorhibike">
              <img src={xIcon} alt="x twitter" />
            </a>
          </div>
          
            <a href="https://chorhibike.cupsell.pl">
              Sklepik: https://chorhibike.cupsell.pl
            </a>
          
        </section>
        <section className='footer-bottom'>
          <p>Zdjęcia: Radosław Borowicz, Maciej Zakrzewski</p>
          <p>Ilustracje: Marta Słotwińska</p>
          <p>Projekt i realizacja strony: Dominika Polińska</p>
        </section>
      </div>
    </div>
  )
}