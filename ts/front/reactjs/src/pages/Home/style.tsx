import styled from 'styled-components';

export const Container = styled.div`
  section {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    a {
      img {
        margin: 25px 0;
        width: 100px;
      }
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;

  align-items: flex-start;
  justify-content: center;

  a {
    margin: 0 5px;
  }
`;
