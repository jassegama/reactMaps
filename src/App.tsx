import {Button, CssBaseline, Grid, MenuItem, Select, ThemeProvider, } from "@mui/material";
import Navbar from "./components/Navbar";
import theme from "./theme";
import {styled} from "@mui/material/styles";
import { Loader } from "google-maps";
import { useEffect, useRef } from "react";
import { getCurrentPosition } from "./util/geolocation";

const GOOGLE_MAPS_API_KEY="AIzaSyD5bTiErpffNKJbEzGjB0TsBbqyeRjYeos";

const loader = new Loader(GOOGLE_MAPS_API_KEY);

const Form = styled('form')(({ theme  }) => ({margin: theme.spacing(1)}))
const MapContainer = styled('div')(({ theme }) => {
  return ({ width: "100%", height: "100%" });
})

function App() {
  const mapRef = useRef<google.maps.Map>()
  useEffect(() => {
    (async () => {
      await loader.load();
      const position = await getCurrentPosition({enableHighAccuracy: true})
      const divMap = document.getElementById('map') as HTMLDivElement;
      mapRef.current = new google.maps.Map(divMap, {zoom: 15, center: position})
    })();
  }, [])

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar />
        <Grid container style={{width : '100%', height: '100%'}}>
          <Grid item xs={12} sm={3}>
            <Form>
              <Select fullWidth  defaultValue={""}>
                <MenuItem value="">
                  <em>Select the rote</em>
                </MenuItem>
                <MenuItem value="">
                  Rote 1  
                </MenuItem>
              </Select>
              <div style={{textAlign: 'center', margin: theme.spacing(1)}}>
                <Button type="submit" variant="contained">Start Rote</Button>
              </div>
            </Form>
          </Grid>
          <Grid item xs={12} sm={9}>
            <MapContainer id="map"/>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
