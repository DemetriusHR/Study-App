import React from 'react';
import CardMui from '@mui/material/Card';
import CardContentMui from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Card = styled(CardMui)({
  borderRadius: '10px',
});

const CardContent = styled(CardContentMui)((props) => ({
  paddingRight: props.theme.spacing(3),
  paddingLeft: props.theme.spacing(3),
  paddingTop: props.autoFocus ? props.theme.spacing(4) : props.theme.spacing(3),
  paddingBottom: props.autoFocus
    ? props.theme.spacing(4)
    : props.theme.spacing(3),
}));

const dia = ['DOM', 'SEG', 'TER', 'QUA', 'QUA', 'SEX', 'SÁB'];

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
  <Card elevation={5}>
    <CardActionArea onClick={onClick}>
      <CardContent autoFocus={diaSelecionado}>
        <Typography gutterBottom>{dia[data.getDay()]}</Typography>
        <Typography>{data.getDate()}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default DiaCalendario;
