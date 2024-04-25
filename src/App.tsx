
import AppRouter from './app/routes/AppRouter';
import { AppConfig } from './core/config/app_config';

function App() {

  AppConfig.initialize();

  return (
    <AppRouter />
  )
}

export default App
