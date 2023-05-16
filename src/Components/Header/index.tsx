import React from 'react';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Notifications from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => (
  <Stack spacing={4} direction="row" alignItems="center">
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
  </Stack>
);

export default Header;
