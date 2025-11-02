import './MainIntroFooter.scss';
import youTubeLogo from './photoassets/YouTube_Vector.svg'

export const MainIntroFooter = () =>{
  return(
    <div className='main-intro-footer'>
      <div>
        <span>Posłuchaj nas na</span>
        <span>Youtube</span>
      </div>
      <a href='https://www.youtube.com/channel/UC9DStXNc8oicastzbilOHOQ'><img src={youTubeLogo} alt='youTubeLogo'/></a>
      
    </div>
  )
}