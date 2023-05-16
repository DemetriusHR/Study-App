import React, { useCallback, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Notifications from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

import Navigation from '../Navigation';

const IconButtonMenu = styled(IconButton)((props) => ({
  display: 'none',
  [props.theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawer(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawer(false);
  }, []);

  return (
    <Stack spacing={4} direction="row" alignItems="center">
      <IconButtonMenu title="menu" onClick={openDrawer}>
        <Menu />
      </IconButtonMenu>
      <TextField
        id="input-search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        title="campo de texto de pesquisa no aplicativo inteiro"
        fullWidth
      />
      <IconButton color="primary" title="notificações">
        <Notifications />
      </IconButton>
      <IconButton color="primary" title="conta">
        <AccountCircleIcon />
      </IconButton>
      <Drawer anchor="left" open={drawer} onClose={closeDrawer}>
        <Navigation />
      </Drawer>
    </Stack>
  );
};

export default Header;
