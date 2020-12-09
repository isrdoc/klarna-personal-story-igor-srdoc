import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  article: {
    minHeight: '90vh',
  },
})

const Article = ({ children }) => {
  const classes = useStyles()
  return <article className={classes.article}>{children}</article>
}

export default Article
