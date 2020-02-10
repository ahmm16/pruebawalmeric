//https://fakerestapi.azurewebsites.net/api/Books/
//https://fakerestapi.azurewebsites.net/api/Books/23

const BASE_URL = "https://fakerestapi.azurewebsites.net/api";
const apiBook = {
	getBooks: () => {
		// FETCH
		const url = `${BASE_URL}/Books/`
		return fetch(url, {
			method: 'GET',
		}).then(response => response.json())
			.catch(error => console.error('Error:', error))
	},
	getBookDetails: (bookId) => {
		// FETCH
		const url = `${BASE_URL}/Books/${bookId}`
		return fetch(url, {
			method: 'GET',
		}).then(response => response.json())
			.catch(error => console.error('Error:', error))
	}
}

export default apiBook;