import React from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import TIB_LOGO from '../assets/logos/TIB_Logo_EN_WM_W.SVG';
import DFG_LOGO from '../assets/logos/dfg_logo_schriftzug_weiss_foerderung_en.gif';

export const Footer = () => (
  <Grid container style={{ backgroundColor: '#2b3c46' }} sx={{ paddingTop: 4 }}>
    <Grid item xs={12} sm={12} md={8} style={{ margin: 'auto' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Link href="https://www.dfg.de/en/index.jsp" target="_blank" rel="noopener noreferrer" color="#fff">
            <img src={DFG_LOGO} alt="DFG Logo" className="footer-logo" style={{ height: '110px', width: '300px' }} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" color="white">
            ABOUT
          </Typography>
          <hr className="me-5" />
          <Link component={RouterLink} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/PrivacyPolicy'} color="#fff">
            Privacy Policy
          </Link>
          <br />
          <Link component={RouterLink} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/TermsOfUse'} color="#fff">
            Terms of use
          </Link>
          <br />

          <Link component={RouterLink} to={process.env.REACT_APP_PROJECT_SUB_PATH + '/imprint'} color="#fff">
            Imprint
          </Link>
          <br />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6" color="white">
            RESOURCES
          </Typography>
          <hr className="me-5" />
          <Link href={process.env.REACT_APP_PROJECT_SUB_PATH + '/api'} color="#fff">
            Documentation
          </Link>
          <br />
          <Link href="https://service.tib.eu/ts4tib/swagger-ui.html" target="_blank" rel="noopener noreferrer" color="#fff">
            API
          </Link>
          <br />
          <Link href="https://gitlab.com/TIBHannover/terminology/tib-terminology-service-issue-tracker" target="_blank" rel="noopener noreferrer" color="#fff">
            GitLab Issue Tracker
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="white">
            PROVIDED BY
          </Typography>
          <hr className="me-5" />
          <Link href="https://www.tib.eu/en/" target="_blank" rel="noopener noreferrer" color="#fff">
            <img src={TIB_LOGO} alt="TIB Logo" style={{ height: '110px', width: '300px' }} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
