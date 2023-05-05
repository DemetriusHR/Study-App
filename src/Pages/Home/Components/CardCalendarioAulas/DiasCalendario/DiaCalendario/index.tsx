import React from 'react';
import CardMui from '@mui/material/Card';
import CardContentMui from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Card = styled(CardMui)((props) => ({
  borderRadius: '10px',
  backgroundColor: props.autoFocus
    ? props.theme.palette.primary.light
    : props.theme.palette.background.paper,
  color: props.autoFocus
    ? props.theme.palette.background.paper
    : props.theme.palette.text.primary,
}));

const CardContent = styled(CardContentMui)((props) => ({
  minWidth: 'fit-content',
  paddingRight: props.theme.spacing(2.6),
  paddingLeft: props.theme.spacing(2.6),
  paddingTop: props.autoFocus ? props.theme.spacing(2.6) : props.theme.spacing(1),
  paddingBottom: props.autoFocus
    ? props.theme.spacing(2.6)
    : props.theme.spacing(1),
}));

const dia = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

type DiaCalendarioProps = {
  data: Date;
  diaSelecionado?: boolean;
  onClick: () => void;
};

const DiaCalendario = ({
  data,
  diaSelecionado = false,
  onClick,
}: DiaCalendarioProps) => (
  <Card elevation={5} autoFocus={diaSelecionado}>
    <CardActionArea onClick={onClick}>
      <CardContent autoFocus={diaSelecionado}>
        <Typography gutterBottom>{dia[data.getDay()]}</Typography>
        <Typography>{data.getDate()}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default DiaCalendario;
