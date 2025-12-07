import { error } from '@sveltejs/kit';
import { getHerbById } from '$lib/data/herbs';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const herb = getHerbById(params.id);

	if (!herb) {
		error(404, {
			message: 'Herb not found'
		});
	}

	return {
		herb
	};
};

