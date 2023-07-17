import React from 'react';
import { Container, Grid } from '@mui/material';
import HeaderComponent from './Header.layout';
import CopyRight from '../../components/CopyRight';
import Footer from './Footer';
import AppHeader from './components/AppBar';
import MiniDrawer from './components/SideBar';

const AppLayout = ({ children }) => {
  return (
    <Grid container>
      {/* <Grid item xs={12}> */}
      {/* {Header Component} */}
      {/* <HeaderComponent /> */}
      {/* <AppHeader /> */}
      {/* </Grid> */}
      <Grid item xs={12}>
        <MiniDrawer />
      </Grid>
      <Grid item xs={12}>
        <Container fixed minWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Grid>
      {/* Your footer component goes here */}
      <Grid item xs={12} maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
        {/* <CopyRight sx={{ pt: 4 }} /> */}
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AppLayout;
