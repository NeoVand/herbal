import { error } from '@sveltejs/kit';
import { getHerbById, herbs } from '$lib/data/herbs';
import type { PageLoad, EntryGenerator } from './$types';

// Generate entries for all herbs (required for static prerendering)
export const entries: EntryGenerator = () => {
	return herbs.map((herb) => ({
		id: herb.id
	}));
};

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

