//1) 
function palindromo(texto) {
	texto = texto.replace(/ /g, "").toLowerCase()
	for (let i = 0; i < texto.length; i++) {
		if (texto[i] !== texto[texto.length - i - 1]) {
			return false;
		}
	}
	return true;
}

console.log(palindromo("Lavan esa base naval"))
console.log(palindromo("Esto no es un palindromo"))

//2)
function calcularMultiplosSiete(numEnteros) {
	let multiplo = 7;
	let arrayMultiplos = []
	//let arrayNoMultiplos = []

	for (let i = 0; i < numEnteros.length; i++) {
		let resto = numEnteros[i] % multiplo;
		if (resto === 0)
			arrayMultiplos.push(numEnteros[i])
		else
			arrayNoMultiplos.push(numEnteros[i])

	}
	console.log(`Múltiplos de 7: ${arrayMultiplos} `);
	//console.log(`No múltiplos de 7: ${arrayNoMultiplos} `);
}
const ejemplo = [1, 8, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14]
calcularMultiplosSiete(ejemplo)

//3)
function sumaNumeroEntero(numEnteros) {
	let resultado = 0
	for (let i = 0; i < numEnteros.length; i++) {
		let resto = numEnteros[i] % 1;
		if (resto === 0)
			resultado = resultado + numEnteros[i]
		else
			return null

	}
	console.log(`Suma de numeros enteros: ${resultado} `);
}
const ejemploCorrecto = [1, 8, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14]
const ejemploNull = [1, 8, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14, 3.14, 25.5]
sumaNumeroEntero(ejemploCorrecto)
sumaNumeroEntero(ejemploNull)

//4) Respuesta c: La asignación de obj a obj3 no es válida

//5) Respuesta d: Ninguna es correcta

//6)
const persona = {
	"name": "John",
	"surname": "Doe",
	"age": "30",
	"country": "Spain",
	"city": "Madrid",
	"employed": "true",
	"dni": "00000000A",
}

function devolverNuevaPersona(persona) {
	let nuevaPersona = {}

	for (const prop in persona) {
		if (prop === 'name' || prop === 'dni')
			nuevaPersona[prop] = persona[prop]
	}
	return nuevaPersona
}
devolverNuevaPersona(persona)

//7)
const persona2 = {
	"name": "John",
	"surname": "Doe",
	"age": "30",
	"country": "Spain",
	"city": "Madrid",
	"employed": "true",
	"dni": "00000000A",
}

function devolverOtraPersona(persona) {
	let nuevaPersona = {}
	for (let prop in persona) {
		if (prop == 'employed' || prop == "dni")
			nuevaPersona[prop] = persona[prop]
	}
	return nuevaPersona
}
devolverOtraPersona(persona2)

//8)
(() => {
	const getTodos = () => {
		return fetch('https://jsonplaceholder.typicode.com/todos/')
			.then(response => response.json())
			.then(json => console.log(json))
			.catch(error => console.log(error));
	}
	getTodos();
})();
// RESPUESTA: por disponibilidad no lo pude testear...
(() => {
	async function getTodos() {
		return fetch('https://jsonplaceholder.typicode.com/todos/')
			.then(response => response.json())
			.then(json => console.log(json))
			.catch(error => console.log(error));
	}
	async function main() {
		return todos = await getTodos()
	}
	main()
})();