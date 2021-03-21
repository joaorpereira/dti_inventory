import { persistor, store } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/routes'

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
            <Navbar />
            <Routes />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
