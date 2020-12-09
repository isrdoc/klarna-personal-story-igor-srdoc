import { ThemeProvider } from '@material-ui/core/styles'

import Header from './components/Header'
import Article from './components/Article'

import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Article>Article content</Article>
    </div>
  </ThemeProvider>
)

export default App
