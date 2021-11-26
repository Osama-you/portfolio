import { Header } from 'components';
import { useThemeContext } from './contexts/theme';

import './App.css';

const App = () => {
  const { themeName } = useThemeContext();

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main />
    </div>
  );
};

export default App;
