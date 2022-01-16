import * as React from "react"
import {Container, Box, TextField, createTheme, ThemeProvider, Grid, Paper} from "@material-ui/core"
import { Helmet } from "react-helmet"
import "./index.scss"
import * as colors from '../theme.module.scss'
import * as conversions from '../scripts/helpers'

const THEMEOBJ = {
  palette: {
    primary: {
      main: colors.accd,
      light: colors.bg,
      dark: colors.bgd
    },
    secondary: {
      main: colors.bgm,
      light: colors.accl,
      dark: colors.bgl
    }
  }
}
const theme = createTheme(THEMEOBJ)

// markup
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.fieldCallbackGenerator = this.fieldCallbackGenerator.bind(this);
  }
  fieldCallbackGenerator(field) {
    const self = this;
    return function(event) {
      self.setState({[field]: event.target.value})
    }
  }
  render() {
    return (
      <Container className="main">
        <Helmet>
          <meta charset="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300&display=swap" rel="stylesheet" />
          <title>Actual Base Converter</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <Box component="main">
            <h1>Actual Base Converter</h1><p className="author">By Faraz Malik</p>
          </Box>
          <Box>
            <p>
              An algorithmic base-to-base converter for all your eccentric base-converting needs. I made this since I couldn't find a converter for any bases except super common ones.
            </p>
            <p>
              For bases other than 2, 10, and 16, input them as a <strong>list of space-seperated base 10 integers.</strong> For example, 12 in base 10 would be "1 1" in base 11.
            </p>
          </Box>
          <Box>
            <div className="converttext">
              Convert <TextField id="num" label="Number to convert" variant="outlined" color="secondary" onInput={this.fieldCallbackGenerator("num", this)}/> in base <TextField id="origbase" label="Original Base" variant="outlined" color="secondary" onInput={this.fieldCallbackGenerator("origbase", this)}/> to <TextField id="convbase" label="Base to convert to" variant="outlined" color="secondary" onInput={this.fieldCallbackGenerator("convbase", this)}/>
            </div>
          </Box>
          <p>Result: (Read left to right, up to down)</p> 
          <Box>
            <Grid container direction="row" className="answerbox">
              {
                conversions.tenToBase(Number(this.state.num),
                Number(this.state.convbase)).reverse().map(function(value) {
                  return (
                  <Grid item xs={1}>
                    <Paper className="digit">{value}</Paper>
                  </Grid>
                  )
                })
              }
              
            </Grid>
          </Box>
        </ThemeProvider>

      </Container>
    )
  }
}

export default IndexPage
