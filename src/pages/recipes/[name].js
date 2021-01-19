import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';

export default function Recipe({ data }) {
	const router = useRouter();

	console.log(data);

	return (
		<>
			{data.results.length === 0 ? (
				<Link href='/'>
					Oops, we didn't find anything, click me to try again!
				</Link>
			) : (
				data.results.map((meal) => (
					<StyledRecipe key={meal.title}>
						<div className='recipe-image'>
							<Image
								src={meal.image}
								alt={meal.title}
								height={200}
								width={200}
								layout='fixed'
							/>
						</div>
						<div className='recipe-info'>
							<h1>{meal.title}</h1>
							<div dangerouslySetInnerHTML={{ __html: meal.summary }}></div>
							<div className='recipe-details'>
								<span>
									<b>Serves: </b>
									<i>{meal.servings}</i>
								</span>
								<span>
									<b>Ready in only: </b>
									<i>{meal.readyInMinutes} minutes!</i>
								</span>
								<span>
									<b>Health Score: </b>
									<i>{meal.healthScore}</i>
								</span>
							</div>
						</div>
					</StyledRecipe>
				))
			)}
		</>
	);
}

export const getStaticPaths = async () => {
	const request = await fetch(
		`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_SECRET}&diet=vegan&addRecipeInformation=true`
	);
	const results = await request.json();

	const paths = await results.results.map((result) => ({
		params: { name: result.title },
	}));

	return {
		paths,
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

const StyledRecipe = styled.article`
	display: flex;
	flex-direction: row;
	padding: 0.7rem 1rem;
	margin: 0.1rem auto 0.5rem;
	gap: 1.5rem;
	border: 3px solid #222;
	border-radius: 3px;
	justify-content: space-between;
	align-items: center;

	.recipe-info h1 {
		margin-bottom: 0.4rem;
	}

	.recipe-image {
		width: 200px;
		height: 200px;
	}

	.recipe-details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 1rem;
		background-color: #222;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 3px;
	}
`;
