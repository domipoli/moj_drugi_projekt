import { MainIntro } from './MainIntro'
import { MainIntroFooter } from './MainIntroFooter'
import { MainContent } from './MainContent'

import './Main.scss'

export function Main () {
  return (
    <div className="main">
      <MainIntro />
      <MainIntroFooter />
      <MainContent />
    </div>
   
  )
}