import {
  Header,
  About,
  Projects,
  Skills,
  ScrollToTop,
  Footer,
  Contact,
} from 'components';
import { useThemeContext } from './contexts/theme';

import './App.css';

const App = () => {
  const { themeName } = useThemeContext();

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
