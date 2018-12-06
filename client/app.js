import React from 'react'
import {Navbar, Menubar, Contactbar} from './components'
import Routes from './routes'
import {Grid} from 'semantic-ui-react'

const App = () => {
  return (
    <Grid padded stackable columns={2}>
      <Grid.Row style={{height: '4vh'}}>
        <Navbar />
      </Grid.Row>

      <Grid.Row>
        <Grid.Column style={{width: '96%', margin: '0px', padding: '0px'}}>
          <Menubar />
          <Routes />
        </Grid.Column>
        <Grid.Column style={{width: '4%'}}>
          <Contactbar />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default App
