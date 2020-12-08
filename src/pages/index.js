import styled from '@emotion/styled';

export default function Home({ randomRecipe }) {
  return (
    <>
      <StyledForm className='recipe-search'>
        <input type='text' />
        <button type='submit'>Find Recipe</button>
      </StyledForm>
      <section className='popular-recipes'>
        <h2>Try this recipe:</h2>
        <img src={randomRecipe.image} alt={randomRecipe.title} />
        <h3>{randomRecipe.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: randomRecipe.summary }} />
        {/* TODO setup button and on click grab recipe id and generate page where user can see step by step to create dish. */}
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const request = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_SECRET}&diet=vegan&addRecipeInformation=true`
  );
  const data = await request.json();

  const randomNum = Math.floor(Math.random() * data.results.length);

  const randomRecipe = data.results[randomNum];

  return {
    props: { randomRecipe },
  };
};

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
