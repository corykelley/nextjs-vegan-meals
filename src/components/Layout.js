import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 88vw;
  max-width: 1050px;
  margin: 0 auto;

  main {
    min-height: 85vh;
  }
`;

export default Layout;
