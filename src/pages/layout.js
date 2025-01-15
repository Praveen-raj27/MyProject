import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = (props) => {
  const navItems = ["Home", "Course", "Comments"];
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    navigate({ pathname: `/${item.toLocaleLowerCase()}` });
  };
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => handleNavigation(item)}
                key={item}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
              // <Link to={`/${item.toLocaleLowerCase()}`} class="list">
              //   {item}
              // </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Layout;
