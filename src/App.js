import { Header, About, Projects } from 'components';
import { useThemeContext } from './contexts/theme';

import './App.css';

const App = () => {
  const { themeName } = useThemeContext();

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default App;
