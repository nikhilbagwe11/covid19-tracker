import React from 'react'
import {
  Typography,
  AppBar,
  CardActions,
  CardMedia,
  CssBaseline,
  Toolbar,
  Container,
} from '@material-ui/core'
import { LiveTv } from '@material-ui/icons'
import CovidData from './components/CovidData'

export default function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LiveTv />
          <Typography variant="h6">Covid19 Tracker</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              🔴 LIVE Covid19 Tracker
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              You can watch live covid data of India and updates regarding to it
              on our website.
            </Typography>
          </Container>
        </div>
      </main>
      <CovidData />
    </>
  )
}
