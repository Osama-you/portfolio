import { useThemeContext } from './contexts/theme';
import './App.css';

const App = () => {
  const { themeName } = useThemeContext();

  return (
    <div className={`${themeName} app`}>
      <main />
    </div>
  );
};

export default App;
