
import DriveEtaIcon from "@mui/icons-material/DriveEta"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

function Navbar() {
return (
<AppBar position="static" enableColorOnDark>
          <Toolbar>
            <IconButton color="inherit" edge="start">
              <DriveEtaIcon />
            </IconButton>
            <Typography variant="h6">
              Queenstown Delivery
            </Typography>
          </Toolbar>
</AppBar>
)}

export default Navbar;