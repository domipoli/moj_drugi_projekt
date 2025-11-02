import "./App.scss";

import { Initial } from "./Initial";
import { Header } from "./Header";
import { Main } from "./MainCode";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function App() {
  return (
    <div className="app">
      <Initial />
      <Header />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
