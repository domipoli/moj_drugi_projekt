import './MainContentSection.scss';
import logoSing from './photoassets/Wydarzenia/zaspiewajmy/logo_utai.png';
import fotoUtai from './photoassets/Wydarzenia/zaspiewajmy/foto_utai_2.jpg'

const HeaderMain = ({text}) => {
  return(
    <header className='header-main'>
      {text}
    </header>
  )
}

const Headers = ({line1,line2}) => {
  return(
    <>
    <span> {line1} </span>
    <span> {line2} </span>
    </>
    
  )
}


const TextContent = ({text}) =>{
  return(
    <div className="text-content">
      {text}
    </div>
  )
}


export const MainContentSection1 = () =>{
  return(
    <>
    <section className='main-content-section'>
      <div className='main-content-section-text'>
        <img src={logoSing} alt="logo-utai"  />
        <HeaderMain text='Zaśpiewajmy !'/>
        <TextContent text='Warsztaty wokalne z piosenką japońską i emisją głosu dla każdego.'/>
        <TextContent text='Świetnie sprawdzą się na konwencie, w szkole średniej jako dodatkowe zajęcia muzyczne i na prywatnym wydarzeniu!' />
        <Headers line1='Jednorazowe warsztaty' line2='(1,5 - 2 godz.) '/>
        <TextContent text='Organizujemy w restauracji Pan Gar w Poznaniu 4 razy w roku.'/>
        <Headers line1='Cykliczne warsztaty 7+1' line2='(7 spotkań i finałowy koncert) '/>
        <TextContent text='Prowadzimy w Fundacji Przyjaźni Polsko-Japońskiej NAMI we Wrocławiu oraz latem w Domu Tramwajarza w Poznaniu.' />
      </div>
      <img src={fotoUtai} alt="" className='main-content-section-photo'/>
    </section>
    </>
  )
}