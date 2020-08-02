import URL_BACKEND from '../../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

function getAll() {
	return fetch(`${URL_CATEGORIES}`).then(async (response) => {
		if (response.ok) {
			const res = await response.json();
			return res;
		}

		throw new Error('Error Unknow');
	});
}

function getAllWithVideos() {
	return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
		if (response.ok) {
			const res = await response.json();
			return res;
		}

		throw new Error('Error Unknow');
	});
}

function create(object) {
	return fetch(`${URL_CATEGORIES}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(object),
	}).then(async (response) => {
		if (response.ok) {
			const res = await response.json();
			return res;
		}

		throw new Error('Error Unknow on register');
	});
}

export default { getAll, getAllWithVideos, create };
