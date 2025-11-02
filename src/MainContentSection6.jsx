import './MainContentSection.scss';
import posterJapanInSounds from './photoassets/Spektakle/japonia w dzwiekach i gestach/PLAKAT.jpg'
import photo_japInSounds1 from './photoassets/Spektakle/japonia w dzwiekach i gestach/foto_jap_2.jpg'
import photo_japInSounds2 from './photoassets/Spektakle/japonia w dzwiekach i gestach/foto_jap_3.jpg'

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

export const MainContentSection6 = () =>{
  return(
    <section className='main-content-section'>
      <div className='main-content-section-inner'>
        <img src={posterJapanInSounds} alt="poster Japan In Sounds" className='poster'/>
        <HeaderMain text= 'Japonia w dźwiękach i gestach' color='purple'/>
        <HeaderMain text= 'Spektakle edukacyjne łączące warstwę muzyczną i wizualną, zanurzające publiczność w kulturę Japoni' color='grey' />
      
        <ul className='text-content'>Do współpracy przy tym projekcie zaprosiłyśmy jak dotąd:
          <li>japoński Teatr KOBITO RAKUGO </li>
          <li>kwartet smyczkowy LILIA QUARTET</li>
          <li>Zespół Koła Artystyczno-Naukowego Studentów Rytmiki Akademii Muzycznej im. I. J. Paderewskiego w Poznaniu</li>
        </ul>
        <TextContent text='Razem stanęliśmy na scenach w Poznaniu, Lesznie, Wrocławiu, Krakowie i Opolu.' />

        
      </div>
      <img src={photo_japInSounds1} alt="Japan in sounds" className='photo-bottom'/>
      <img src={photo_japInSounds2} alt="Japan in sounds" className='photo-bottom'/>
    </section>
  )
}