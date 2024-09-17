// Logo.js
import React from 'react';
import { styled } from '@mui/system';

const LogoImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  width: '5%',
});

export const Logo = () => {
  return <LogoImage src="/TIB_Logo_W_W.SVG" alt="Logo" />;
};
