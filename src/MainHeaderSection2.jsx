import './MainContentSection.scss';
import logoAsobi from './photoassets/Wydarzenia/pobawmy sie/logo_asobi.png';
import fotoAsobi from './photoassets/Wydarzenia/pobawmy sie/foto_asobi_1.jpg'

const HeaderMain = ({text}) => {
  return(
    <header className='header-main'>
      {text}
    </header>
  )
}

const Headers = ({line1,line2}) => {
  return(
    <div className='subheaders'>
    <span> {line1} </span>
    <span> {line2} </span>
    </div>
    
  )
}


const TextContent = ({text}) =>{
  return(
    <div className="text-content">
      {text}
    </div>
  )
}


export const MainContentSection2 = () =>{
  return(
    <>
    <section className='main-content-section'>
      <div className='main-content-section-text'>
        <img src={logoAsobi} alt="logo-asobi"  />
        <HeaderMain text='Pobawmy się !'/>
        <TextContent text='Warsztaty zabawowe dla rodzin z dziećmi. '/>
        <Headers line1='Zabawy sensoryczne i relaksacyjna' line2='pentatonika dla dzieci żłobkowych'/>
        <Headers line1='Zabawy i zagadki językowe dla ' line2='przedszkolaków i szkolniaków z klas 1-3'/>
        <TextContent text='Warsztaty organizujemy w żłobkach, przedszkolach, szkołach podstawowych, kawiarniach familijnych, bibliotekach, warsztatowniach, miejscach rozwoju i integracji społecznej.'/>
        <TextContent text='Podczas warsztatów dostosowujemy się do wieku i wrażliwości naszych odbiorców.' />
      </div>
      <img src={fotoAsobi} alt="" className='main-content-section-photo'/>
    </section>
    </>
  )
}