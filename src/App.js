import { Header, About } from 'components';
import { useThemeContext } from './contexts/theme';

import './App.css';

const App = () => {
  const { themeName } = useThemeContext();

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
};

export default App;
