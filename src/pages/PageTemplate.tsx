import { ReactNode } from 'react';
import { Grid } from '@mui/material';

type ChildrenProps = {
  children: ReactNode;
};

export const PageTemplate = ({ children }: ChildrenProps) => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ py: 4, px: 4 }}>
      <Grid item xs={12} md={8}>
        {children}
      </Grid>
    </Grid>
  );
};
