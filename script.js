//your code here
const nameInput = document.getElementById('item-name-input')
const priceInput = document.getElementById('item-price-input')
const addButton = document.getElementById('add')
let totalPrice = 0 
function addToCart() {
	const row = document.createElement('tr')
	const name = document.createElement('td')
	const price = document.createElement('td')
	name.innerText = nameInput.value
	price.innerText = priceInput.value
	row.appendChild(name)
	row.appendChild(price)
	table.appendChild(row)     
	console.log(table)
	updateTotal()
	nameInput.value = ''
	priceInput.value = ''
} 
function updateTotal() {
	totalPrice += parseInt(priceInput.value)
	total.innerText = totalPrice
}
add.addEventListener('click',addToCart)