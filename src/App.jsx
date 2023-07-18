import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {

  const [theme, ColorMode] = useMode()

  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          {/* < Dashboard /> */}
          <ProfilePage />
        </div>
      </ThemeProvider>

    </ColorModeContext.Provider >
  )
}

export default App
