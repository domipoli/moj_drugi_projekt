import { MainIntro } from './MainIntro'
import { MainIntroFooter } from './MainIntroFooter'
import { MainContent } from './MainContent'

import './Main-style.scss'

export function Main () {
  return (
    <div className="main-main">
      <MainIntro />
      <MainIntroFooter />
      <MainContent />
    </div>
   
  )
}