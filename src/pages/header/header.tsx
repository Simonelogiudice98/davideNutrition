import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import logo from "../../assets/img/davide_nutrition_circle_pad60.svg";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReactCountryFlag from "react-country-flag";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{
            bgcolor: `#000000`,
            color: "#eaeaea",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem",
          }}
          elevation={0}
        >
          <Toolbar disableGutters sx={{ px: 2 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={logo}
                alt=""
                width="90px"
                height="90px"
                style={{ border: "2px solid #FFD700", borderRadius: "100%" }}
              />
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ mr: 2, fontSize: 40, color: "#FFD700" }}
              >
                <LanguageIcon fontSize="inherit" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    /* i18n.changeLanguage('it'); */
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <ReactCountryFlag
                      countryCode="IT"
                      svg
                      style={{ width: 20, height: 14, borderRadius: 2 }}
                      title="Italiano"
                    />
                  </ListItemIcon>
                  <ListItemText primary="Italiano" />
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    /* i18n.changeLanguage('en'); */
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <ReactCountryFlag
                      countryCode="GB"
                      svg
                      style={{ width: 20, height: 14, borderRadius: 2 }}
                      title="English"
                    />
                  </ListItemIcon>
                  <ListItemText primary="English" />
                </MenuItem>
              </Menu>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, fontSize: 40, color: "#FFD700" }}
              >
                <MenuIcon fontSize="inherit" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
