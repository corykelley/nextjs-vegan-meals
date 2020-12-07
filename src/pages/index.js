import styled from '@emotion/styled';

export default function Home() {
  return (
    <>
      <StyledForm className='recipe-search'>
        <input type='text' />
        <button type='submit'>Find Recipe</button>
      </StyledForm>
      <section className='popular-recipes'>
        <h2>Popular Recipes</h2>
        <ul>
          <li>Recipe</li>
          <li>Recipe</li>
          <li>Recipe</li>
          <li>Recipe</li>
          <li>Recipe</li>
        </ul>
      </section>
    </>
  );
}

const StyledForm = styled.form`
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding: 0.65rem 0.5rem;
    border-radius: 10px;
    border: var(--grey) 1px solid;
    margin-bottom: 1rem;
    max-width: 500px;
    width: 100%;
  }

  button {
    max-width: 200px;
    padding: 0.65rem 0.5rem;
    border-radius: 10px;
    border: var(--grey) 1px solid;
    transition: 300ms;

    :hover {
      color: #fff;
      background-color: var(--black);
    }
  }
`;
