export default function Recipe({ recipeName, data }) {
	return (
		<>
			{data.meals.map((recipe) => (
				<article key={recipe.strMeal}>
					<img src={recipe.strMealThumb} alt={recipe.strMeal} />
					<h1>{recipe.strMeal}</h1>
					<p>{recipe.strInstructions}</p>
				</article>
			))}
		</>
	);
}

export const getStaticPaths = async () => {
	const request = await fetch(
		// `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_SECRET}&diet=vegan&addRecipeInformation=true&`

		`https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan`
	);
	const results = await request.json();

	const paths = await results.meals.map((result) => ({
		params: { name: result.strMeal },
	}));

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	const request = await fetch(
		// `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_SECRET}&diet=vegan&addRecipeInformation=true&query=${params.name}`

		`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`
	);
	const data = await request.json();

	console.log('this is data', data);

	return {
		props: {
			data,
		},
	};
};
