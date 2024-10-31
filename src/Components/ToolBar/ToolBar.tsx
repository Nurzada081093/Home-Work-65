import { AppBar, Box, IconButton, List, ListItem, Toolbar, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const ToolBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: 'black'}}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <NavLink to={'/'} style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '20px 0'}}>
              <img style={{width: '80px', marginRight: '20px'}} src="https://wm-551003.oml.ru/d/log.png" alt="My coffee"/>
              <Typography variant="h6" component="div" sx={{flexGrow: 1, fontSize: '23px', fontWeight: 600, fontStyle: 'oblique'}}>
                My Coffee
              </Typography>
            </NavLink>
            <List component="ul" sx={{marginLeft: 'auto', width: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
              <ListItem sx={{width: '100px'}}>
                <NavLink
                  to={'/'}
                  style={({ isActive }) => ({
                    color: isActive ? 'lightcyan' : 'inherit',
                    fontSize: isActive ? '20px' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal',
                    textDecoration: 'none',
                  })}
                >
                  Home
                </NavLink>
              </ListItem>
              <ListItem sx={{ width: '100px'}}>
                <NavLink
                  to={'/pages/about'}
                  style={({ isActive }) => ({
                    color: isActive ? 'lightcyan' : 'inherit',
                    fontSize: isActive ? '20px' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal',
                    textDecoration: 'none',
                  })}
                >
                  About
                </NavLink>
              </ListItem>
              <ListItem sx={{width: '100px' }}>
                <NavLink
                  to={'/pages/history'}
                  style={({ isActive }) => ({
                    color: isActive ? 'lightcyan' : 'inherit',
                    fontSize: isActive ? '20px' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal',
                    textDecoration: 'none',
                  })}
                >
                  History
                </NavLink>
              </ListItem>
              <ListItem sx={{ width: '100px' }}>
                <NavLink
                  to={'/pages/news'}
                  style={({ isActive }) => ({
                    color: isActive ? 'lightcyan' : 'inherit',
                    fontSize: isActive ? '20px' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal',
                    textDecoration: 'none',
                  })}
                >
                  News
                </NavLink>
              </ListItem>
              <ListItem sx={{width: '100px' }}>
                <NavLink
                  to={'/pages/contacts'}
                  style={({ isActive }) => ({
                    color: isActive ? 'lightcyan' : 'inherit',
                    fontSize: isActive ? '20px' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal',
                    textDecoration: 'none',
                  })}
                >
                  Contacts
                </NavLink>
              </ListItem>
              <ListItem sx={{width: '100px'}}>
                <NavLink
                  to={'/pages/comment'}
                  style={({ isActive }) => ({
                    color: isActive ? 'lightcyan' : 'inherit',
                    fontSize: isActive ? '20px' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal',
                    textDecoration: 'none',
                  })}
                >
                  Comment
                </NavLink>
              </ListItem>
              <ListItem sx={{width: '100px' }}>
                <NavLink
                  to={'/pages/admin'}
                  style={({ isActive }) => ({
                    color: isActive ? 'lightcyan' : 'inherit',
                    fontSize: isActive ? '20px' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal',
                    textDecoration: 'none',
                  })}
                >
                  Admin
                </NavLink>
              </ListItem>
            </List>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default ToolBar;

