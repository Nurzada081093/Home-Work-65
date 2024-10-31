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
            <List component="ul" sx={{display: 'flex', justifyContent: 'space-between', width: '60%', marginLeft: 'auto'}}>
              <ListItem><NavLink to={'/'}>Home</NavLink></ListItem>
              <ListItem><NavLink to={'/pages/about'}>About</NavLink></ListItem>
              <ListItem><NavLink to={'/pages/history'}>History</NavLink></ListItem>
              <ListItem><NavLink to={'/pages/news'}>News</NavLink></ListItem>
              <ListItem><NavLink to={'/pages/contacts'}>Contacts</NavLink></ListItem>
              <ListItem><NavLink to={'/pages/comment'}>Comment</NavLink></ListItem>
              <ListItem><NavLink to={'/pages/admin'}>Admin</NavLink></ListItem>
            </List>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default ToolBar;