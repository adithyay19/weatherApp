import { useEffect, useState } from 'react'
import { Card, CardHeader } from '@mui/material';
import './App.css'

function App() {
  const [lat, setLat] = useState(0.0);
  const [lon, setLon] = useState(0.0);
  const [loc, setLoc] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, [lat,lon]);

  return (
    <>
      <Card variant='outlined' sx={{maxWidth: 345, maxHeight: 500}}>
        <CardHeader
          title='Weather'
          subheader="~city~"
        />

        <h1>{lat}, {lon}</h1>
      </Card>
    </>
  )
}

export default App
