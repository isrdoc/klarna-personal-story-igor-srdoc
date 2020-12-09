import { ThemeProvider } from '@material-ui/core/styles'

import Header from './components/Header'

import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
    </div>
  </ThemeProvider>
)

export default App
