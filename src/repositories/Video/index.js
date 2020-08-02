import URL_BACKEND from '../../config';

const URL_VIDEOS = `${URL_BACKEND}/videos`;

function create(object) {
	return fetch(`${URL_VIDEOS}?_embed=videos`, {
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

export default { create };
