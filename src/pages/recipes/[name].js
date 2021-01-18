import { useRouter } from 'next/router';
import styled from '@emotion/styled';

export default function Recipe({ recipeName, data }) {
	const router = useRouter();
	const { name } = router.query;

	console.log('this is from gsp', data.results);

	return (
		<>
			{data.results.map((recipe) => (
				<h1>{recipe.title}</h1>
			))}
		</>
	);
}

export const getStaticPaths = async () => {
	return {
		paths: [{ params: { name: 'pasta' } }, { params: { name: 'greek' } }],
		fallback: true,
	};
};

export const getStaticProps = async ({ params }) => {
	const request = await fetch(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_SECRET}&diet=vegan&addRecipeInformation=true&query=${params.name}`
	);

	const data = await request.json();

	return {
		props: {
			data,
		},
	};
};
