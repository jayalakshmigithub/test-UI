import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  useTheme,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const navLinks = ["Home", "About us", "Portfolio", "News", "Contact us"];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
  <Box
    sx={{
      width: 250,
      height: '100%',
      background: 'rgba(0, 0, 0, 0.4)', 
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderLeft: '1px solid rgba(255, 255, 255, 0.18)',
      color: '#fff',
      fontFamily: 'Poppins',
    }}
    role="presentation"
    onClick={toggleDrawer(false)}
  >
    <List>
      {navLinks.map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                color: '#fff',
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "black" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Poppins",
            marginLeft: isMobile ? "10px" : "20px",
            marginTop: "20px",
            color: "white",
            fontWeight: "900",
            fontSize: isMobile ? "20px" : "25px",
          }}
        >
          LOGO
        </Typography>

        {!isMobile ? (
          <Box
            sx={{ display: "flex", gap: 6, marginTop: "20px", color: "white" ,marginRight:'35px'}}
          >
            {navLinks.map((link) =>
              link === "Contact us" ? (
                <Button
                  key={link}
                  variant="contained"
                  sx={{
                    fontFamily: "Poppins",
                    backgroundColor: "orange",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  {link}
                </Button>
              ) : (
                <Button
                  key={link}
                  color="inherit"
                  sx={{
                    fontFamily: "Poppins",
                    textTransform: "none",
                    position: "relative",
                    fontSize: "16px",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                      width: "calc(100% - 10px)",
                      height: "5px",
                      backgroundColor: "orange",
                      transform: "scaleX(0)",
                      transformOrigin: "right",
                      transition: "transform 0.3s ease",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: -2,
                      right: 0,
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "orange",
                      opacity: 0,
                      transform: "translateX(10px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                      transformOrigin: "left",
                    },
                    "&:hover::before": {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  }}
                >
                  {link}
                </Button>
              )
            )}
          </Box>
        ) : (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "white", fontFamily: "Poppins" }}
            >
              <MenuIcon />
            </IconButton>
           
            <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={toggleDrawer(false)}
  PaperProps={{
    sx: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  }}
>
  {drawerList}
</Drawer>

          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
