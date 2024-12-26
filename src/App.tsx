import './App.css';
import { useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router';
import { AppBar, Badge, Box, Button, Toolbar, Typography } from '@mui/material';
import type { RootState } from './store/store.ts';
import HomePage from './pages/HomePage.tsx';
import FavoritesPage from './pages/FavoritesPage.tsx';

function App() {
  const favoriteCounts = useSelector((state: RootState) => state.recipes.favorites.length);
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
          <Badge badgeContent={favoriteCounts} color={'warning'}>
            <Button color="inherit" component={Link} to="/favorites">
              Favorites
            </Button>
          </Badge>
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
