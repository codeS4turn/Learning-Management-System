
import './App.css'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Homepage from './components/homepage/Homepage'
import { useMode,ColorModeContext } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes,Route } from 'react-router-dom'
import Signup from './components/Register/signup'


function App() {
  //  const [theme , colorMode]=useMode()

  return (
    // <ColorModeContext.Provider value={colorMode}>
    // <ThemeProvider theme={theme}>
    // <CssBaseline/>
    <div className='app'>  
        <main className='content'>
    
    <Routes>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/signup' element={<Signup/>} />
    
    </Routes>   

    
    </main>
    </div>
    // </ThemeProvider>
    //  </ColorModeContext.Provider>
      
  )
}

export default App
