import './MainIntro.scss';


export const MainIntro = () => {
  return(
    <div className='main-intro'>
      <div className="main-intro-header">
        Nasz repertuar
      </div>
      <section className='main-intro-panels-both'>
        <div className="main-intro-panel main-intro-panel-left">
          <header>
            <div >Muzyka</div>
            <div >rozrywkowa</div> 
          </header>
          <div className='content-left'>
            <div className='content-left-first'>
              <div>
                <span>Muzyka z filmów</span>
                <span>pełnometrażowych</span>
              </div>
             
            </div>
            <div className='content-left-second'>
              <div>
                <span>Openingi i endingi </span>
                <span>z anime</span>
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="main-intro-panel main-intro-panel-right">
          <header>
          <div >Muzyka</div>
          <div >tradycyjna</div> 
          </header>
          <div className='content-right'>
            <div className='content-right-first'>
              <div>
                <span>Kołysanki</span>
              </div>
             
            </div>
            <div className='content-right-second'>
              <div>
                <span>Piosenki dziecięce </span>
              </div>
              
            </div>
            <div className='content-right-third'>
              <div>
                <span>Poezja </span>
              </div>
            </div>
            <div className='content-right-fourth'>
              <div>
                <span>Pieśń min'you </span>
              </div> 
            </div>
          </div>
        </div>
      </section>
        
    </div>
  )
}