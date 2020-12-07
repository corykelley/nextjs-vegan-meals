import Link from 'next/link';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Plant Eater</h1>
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
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 2rem 0;

  ul {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
  }

  a {
    transition: 200ms color ease;

    :hover {
      color: red;
    }
  }
`;

export default Header;
