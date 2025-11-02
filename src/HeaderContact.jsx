import './HeaderContact.scss';
import fbIcon from './photoassets/facebook_Vector.svg';
import instagramIcon from './photoassets/instagram_Vector.svg';
import xTwitterIcon from './photoassets/x_Twitter_Vector.svg'

export const HeaderContact = () => {
  return(
    <>
      <div className='header-contact'>
        <p className='contact-firstline'>Bądź z nami na bieżąco</p>
        <div className="contact-secondline">
          <a href='https://www.facebook.com/chorkameralnyhibike'><img src={fbIcon} alt="facebook_Icon" /></a>
          <a href='https://www.instagram.com/hibike_choir/'><img src={instagramIcon} alt="Instagram_Icon" /></a>
          <a href='https://x.com/chorhibike'><img src={xTwitterIcon} alt="" /></a>
        </div>
      </div>
    </>
  )
}