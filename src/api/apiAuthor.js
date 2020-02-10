//https://fakerestapi.azurewebsites.net/api/Authors
//https://fakerestapi.azurewebsites.net/api/Authors/52

const BASE_URL = "https://fakerestapi.azurewebsites.net/api";
const apiBook = {
	getAuthors: () => {
		// FETCH
		const url = `${BASE_URL}/Authors/`
		return fetch(url, {
			method: 'GET',
		}).then(response => response.json())
			.catch(error => console.error('Error:', error))
	},
	getAuthorDetails: (authorId) => {
		// FETCH
		const url = `${BASE_URL}/Authors/${authorId}`
		return fetch(url, {
			method: 'GET',
		}).then(response => response.json())
			.catch(error => console.error('Error:', error))
	}
}

export default apiBook;