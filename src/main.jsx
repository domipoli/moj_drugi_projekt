import { MainIntro } from './MainIntro'
import { MainIntroFooter } from './MainIntroFooter'
import './Main.scss'
import { MainContent } from './MainContent'

export function Main () {
  return (
    <div className="main">
      <MainIntro />
      <MainIntroFooter />
      <MainContent />
    </div>
   
  )
}