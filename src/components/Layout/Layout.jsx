import StyledContainer from '../StyledContainer/StyledContainer';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const { Outlet } = require('react-router-dom'); 

const Layout = () => {
  return (
    <StyledContainer >
      <Header/>
      <main style={{flexGrow:1}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer/>
    </StyledContainer>
  );
};
export default Layout;
