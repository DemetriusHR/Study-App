import React, { useCallback, useMemo } from 'react';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

type ButtonNavProps = {
  route: string;
  iconActived: React.ReactElement;
  iconDefault: React.ReactElement;
  children?: React.ReactElement | string;
};

type PropsButtonType = {
  variant: 'contained' | 'outlined';
  startIcon: React.ReactElement;
};

const ButtonNav = ({
  route,
  iconActived,
  iconDefault,
  children,
}: ButtonNavProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const propsButton: PropsButtonType = useMemo(() => {
    if (route === location.pathname) {
      return {
        variant: 'contained',
        startIcon: iconActived,
      };
    }

    return {
      variant: 'outlined',
      startIcon: iconDefault,
    };
  }, [location, route, iconActived, iconDefault]);

  const handleToRoute = useCallback(() => {
    navigate(route);
  }, [route, navigate]);

  return (
    <Button
      variant={propsButton.variant}
      startIcon={propsButton.startIcon}
      onClick={handleToRoute}
    >
      {children}
    </Button>
  );
};

export default ButtonNav;
