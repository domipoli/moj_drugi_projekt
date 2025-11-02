import './MainContentSection.scss';
import posterCat from './photoassets/Spektakle/mukashi mukashi/kot kasia.jpg'
import photo_mukashi1 from './photoassets/Spektakle/mukashi mukashi/foto_mukashi_1.jpg'
import photo_mukashi2 from './photoassets/Spektakle/mukashi mukashi/foto_mukashi_2.jpg'

const HeaderMain = ({text, color}) => {
  return(
    <header className={`header-main ${color}`}>
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

export const MainContentSection5 = () =>{
  return(
    <section className='main-content-section'>
      <div className='main-content-section-inner'>
        <img src={posterCat} alt="poster Cat" className='poster'/>
        <HeaderMain text= 'Mukashi, mukashi...' color='green'/>
        <HeaderMain text= 'Spektakle oparte na baśniach i legendach japońskich' color='grey' />
        <TextContent text= 'Stawiamy na interakcje z młodą publicznością - nasza dyrygentka, jako pedagog i instruktor zajęć umuzykalniających, jest w tym temacie specjalistką!' />

        <ul className='text-content'> W repertuarze mamy dwa tytuły:
          <li>"O chłopcu, który lubił malować koty" dla dzieci</li>
          <li>"Papierowe żurawie" dla młodzieży</li>
        </ul>
        <TextContent text='Spektakle organizujemy w szkołach, przedszkolach, bibliotekach, domach kultury.' />

        
      </div>
      <img src={photo_mukashi1} alt="mukashi1" className='photo-bottom'/>
      <img src={photo_mukashi2} alt="mukashi2" className='photo-bottom'/>
    </section>
  )
}