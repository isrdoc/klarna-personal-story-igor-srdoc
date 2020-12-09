import klarnaLogo from '../../assets/img/Klarna_Logo_black.svg'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: 75,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 81,
    paddingLeft: 25,
    position: 'relative',
    top: 3,
  },
}))

const Header = () => {
  const classes = useStyles()
  const { toolbar, title, logo } = classes

  return (
    <header>
      <AppBar position="fixed" color="transparent">
        <Toolbar className={toolbar}>
          <Typography variant="h6" className={title}>
            <img className={logo} src={klarnaLogo} alt="Klarna Logo" />
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
