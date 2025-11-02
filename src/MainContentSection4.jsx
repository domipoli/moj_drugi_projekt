import './MainContentSection.scss';
import logoYomi from './photoassets/Wydarzenia/poczytajmy/logo_yomi_przyciete.png';
import fotoYomi from './photoassets/Wydarzenia/poczytajmy/foto_yomi_2.jpg'

const HeaderMain = ({text}) => {
  return(
    <header className='header-main'>
      {text}
    </header>
  )
}

const TextContent = ({text}) =>{
  return(
    <div className="text-content">
      {text}
    </div>
  )
}


export const MainContentSection4 = () =>{
  return(
    <>
    <section className='main-content-section'>
      <div className='main-content-section-text'>
        <img src={logoYomi} alt="logo-utai"  />
        <HeaderMain text='Poczytajmy !'/>
        <TextContent text='Spotkania z japońską literaturą okraszone dawką japońskiej muzyki'/>
        <TextContent text='Znajdziecie nas w poznańskiej księgarni Skład Kulturalny' />
        <TextContent text='Jesteśmy otwarte na wszelkie pomysły w tym temacie od księgarni i bibliotek' />
      </div>
      <img src={fotoYomi} alt="" className='main-content-section-photo'/>
    </section>
    </>
  )
}