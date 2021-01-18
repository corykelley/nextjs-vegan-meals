import { useRouter } from 'next/router';
import styled from '@emotion/styled';

export default function Recipe({ recipeData }) {
	const router = useRouter();
	const { name } = router.query;

	return (
		<>
			<h1>Hello</h1>
			<h1>this is just testing a dyanmic route</h1>
			<i>{name}</i>
		</>
	);
}
