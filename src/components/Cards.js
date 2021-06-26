import React from 'react'
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ({ state, active, deaths, confirmed, recovered }) => {
  return (
    <div>
      <Grid container spacing={5} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography varaint="h1" color="textSecondary" guttterBottom>
              COUNTRY
            </Typography>
            <h2>India</h2>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" guttterBottom>
              ACTIVE
            </Typography>
            <h2>{active}</h2>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" guttterBottom>
              CONFIRMED
            </Typography>
            <h2>{confirmed}</h2>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" guttterBottom>
              RECOVERED
            </Typography>
            <h2>{recovered}</h2>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" guttterBottom>
              DEATHS
            </Typography>
            <h2>{deaths}</h2>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
