import Link from 'next/link';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Plant Eater © 2020</p>
      <nav>
        <ul>
          <li>
            <Link href='#'>
              <a>Search</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>Browse</a>
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 2.5rem 0;

  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export default Footer;
