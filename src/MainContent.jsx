import './MainContent.scss';
import { MainContentSection1 } from './MainContentSection1';
import { MainContentSection3 } from './MainContentSection3';
import { MainContentSection4 } from './MainContentSection4';
import { MainContentSection5 } from './MainContentSection5';
import { MainContentSection6 } from './MainContentSection6';
import { MainContentSection2 } from './MainContentSection2';

export const MainContent = () => {
  return(
    <div className='main-content'>
      <header>
        <div>
          <span>Wydarzenia dla dzieci</span>
          <span> i dorosłych</span> 
        </div>
      </header>
        <MainContentSection1 />
        <MainContentSection2 />
        <MainContentSection3 />
        <MainContentSection4 />
      <header>
        <div>
          <span>Autorskie spektakle</span>
        </div>
      </header>
        <MainContentSection5 />
        <MainContentSection6 />
    </div>
  )
}