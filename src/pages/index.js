import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

export default function Home({ randomRecipe }) {
	const [recipeName, setRecipeName] = useState('');

	return (
		<>
			<StyledForm className='recipe-search'>
				<input
					type='text'
					value={recipeName}
					onChange={(e) => setRecipeName(e.target.value)}
				/>
				<Link href={`/recipes/${recipeName}`}>
					<button type='submit'>Find Recipe</button>
				</Link>
			</StyledForm>
			<section className='popular-recipes'>
				<h2>Try this recipe:</h2>
				<img src={randomRecipe.strMealThumb} alt={randomRecipe.strMeal} />
				<h3>{randomRecipe.strMeal}</h3>
			</section>
		</>
	);
}

export const getStaticProps = async () => {
	const request = await fetch(
		// `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_SECRET}&diet=vegan&addRecipeInformation=true`

		`https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan`
	);
	const data = await request.json();

	const randomNum = Math.floor(Math.random() * data.meals.length);

	const randomRecipe = data.meals[randomNum];

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
