import './MainContentSection.scss';
import logoHanashi from './photoassets/Wydarzenia/porozmawiajmy/logo_hanashi_przyciete.png';
import fotoHanashi from './photoassets/Wydarzenia/porozmawiajmy/foto_hanashi_2.jpg'

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


export const MainContentSection3 = () =>{
  return(
    <>
    <section className='main-content-section'>
      <div className='main-content-section-text'>
        <img src={logoHanashi} alt="logo-utai"  />
        <HeaderMain text='Porozmawiajmy !'/>
        <TextContent text='Przestrzeń dla tych, którzy chcą porozmawiać po japońsku.'/>
        <TextContent text='Spotkania organizowane cyklicznie w pubie Coś Innego w Poznaniu. Uczestniczą w nich zarówno Japończycy, japoniści jak i osoby uczące się japońskiego.' />
        <TextContent text='Chcesz ubogacić swoje wydarzenie o takie elementy jak: możliwość zamawiania w barze w języku japońskim, kalambury, czółko, mafia po japońsku? Napisz do nas!!'/>
      </div>
      <img src={fotoHanashi} alt="" className='main-content-section-photo'/>
    </section>
    </>
  )
}