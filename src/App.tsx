import './App.css';
import { Link, Route, Routes } from 'react-router';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import HomePage from './pages/HomePage.tsx';
import FavoritesPage from './pages/FavoritesPage.tsx';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Recipe Viewer
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/favorites">
            Favorites
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: '10px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
