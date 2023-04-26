import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type ButtonConexaoProps = {
  icon: React.ReactElement;
  texto: string;
};

const ButtonConexao = ({ icon, texto }: ButtonConexaoProps) => (
  <Card elevation={5}>
    <CardActionArea>
      <CardContent>
        <Stack spacing={1} alignItems="center" textAlign="center">
          <Icon color="primary" fontSize="large">{icon}</Icon>
          <Typography>{texto}</Typography>
        </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ButtonConexao;
