import { HeaderContact } from './HeaderContact';
import './Header.scss';
import { MobileCarousel } from './HeaderCarousel';


const Event =({ text, number})=> {

  return(
    <div className='header-event'>
      <span className='text'>{text}</span>
      <div className='number'>
        <span>{number}</span>
        </div>
    </div>
  )
}



export function Header () {
  
  return (<div className="header">
       
        <p className='header-firstLine'>
          Działamy już 10 lat
        </p>

        <p className='header-secondLine'>
          pod ręką dyrygentki Katarzyny Jaskóleckiej
        </p>

      <div className='header-events'>
          <Event text='Zaśpiewałysmy na wydarzeniach' number='50'/>
          <Event text='Zorganizowałyśmy warsztatów piosenki japońskiej' number='57'/>
          <Event text='Odwiedziłysmy miast' number='14'/>
          <Event text='Wystawilismy autorskich spektakli' number='18'/>
      </div>

      <MobileCarousel />
      <HeaderContact />          

  </div>)
}