
import initialphoto from'./photoassets/okladka.jpg';
import './Initial.scss';

function InitialText(){
  
  return(
    <div className='text_whole'>
      <div className='text_general'>Chór Kameralny Hibike</div>
      <div className="text_description1">Japońska muzyka</div>
      <div className="text_description1">tradycyjna i rozrywkowa</div>
      <div className="text_description">Warsztaty i spektakle</div>
    </div>
    
  )
}
export function Initial(){
  return (<div>
        <img src={initialphoto} alt="PhotoInitial" className='initialphoto' />
        <InitialText />
  </div>


  )
}