//your code here
const nameInput = document.getElementById('item-name-input')
const priceInput = document.getElementById('item-price-input')
const qtyInput = document.getElementById('item-qty-input')
const addButton = document.getElementById('add')
let totalPrice = 0 
function addToCart() {
	const row = document.createElement('tr')
	const name = document.createElement('td')
	const price = document.createElement('td')
	const qty = document.createElement('td')
	name.innerText = nameInput.value
	price.innerText = priceInput.value
	qty.innerText = qtyInput.value
	row.appendChild(name)
	row.appendChild(price)
	row.appendChild(qty)
	table.appendChild(row)     
	updateTotal()
	nameInput.value = ''
	priceInput.value = ''
	qtyInput.value = ''
} 
function updateTotal() {
	totalPrice += parseInt(priceInput.value)*parseInt(qtyInput.value)
	total.innerText = totalPrice
}
add.addEventListener('click',addToCart)