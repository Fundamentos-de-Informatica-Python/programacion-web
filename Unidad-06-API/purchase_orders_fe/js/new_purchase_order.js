
function addItemRow() {
	let itemsContainer = document.getElementById("items-container");
	let newDiv = document.createElement("div");
	let newItem = document.createElement("input");
	let newQuantity = document.createElement("input");
	let newButton = document.createElement("button");
	let rowId = Math.random().toString(36).slice(2);
	
	newDiv.id = rowId
	newItem.type = "text";
	newItem.placeholder = "Artículo";
	newItem.id = "i-" + rowId;
	newQuantity.type = "number";
	newQuantity.placeholder = "Cantidad";
	newQuantity.style = "width: 55px";
	newQuantity.id = "q-" + rowId;
	newButton.type = "button";
	newButton.innerHTML = "-";
	newButton.id = "b-" + rowId;
	newButton.className = "button button-items-delete";
	newButton.setAttribute("onclick", "removeItemRow(this.id)");
	
	newDiv.appendChild(newItem);
	newDiv.appendChild(newQuantity);
	newDiv.appendChild(newButton);
	itemsContainer.appendChild(newDiv);
}

function removeItemRow(id) {
	let divItem = document.getElementById(id.substring(2));
	divItem.remove();
}

function getItems() {
	let items = [];
	let item = {};
	let itemDiv = document.getElementById("items-container").getElementsByTagName("div");
	for (let i=0; i<itemDiv.length; i++) {
		let inputs = itemDiv[i].getElementsByTagName("input");
		item = {
			"item": inputs[0].value,
			"quantity": inputs[1].value
		};
		items.push(item);
	}
	return items;
}

function createPurchaseOrder() {
	let orderDate = document.getElementById("order-date").value;
	let state = document.querySelector('input[name="state"]:checked').value;
	let supplier = document.getElementById("supplier").value;
	let cuitSupplier = document.getElementById("cuit-supplier").value;
	let items = getItems();
	let total = document.getElementById("total").value;
	let deadline = document.getElementById("deadline").value;

	//axios.post('https://purchase-orders-api.herokuapp.com/api/v1/purchase-orders/',
	axios.post('http://127.0.0.1:5000/api/v1/purchase-orders/',
	{
		"order_date": orderDate,
		"state": state,
		"supplier": supplier,
		"cuit_supplier": cuitSupplier,
		"items": items,
		"total": total,
		"deadline": deadline,
	})
		.then(function (response) {
			let successMessage = document.getElementById("sucess-message");
			document.getElementById("order-id").value = response.data["order_id"];
			successMessage.innerHTML = `Orden de Compra [${response.data["order_id"]}] creada`;
			successMessage.hidden = false;
		})
		.catch(function (error) {
			alert("No se puedo guardar la Orden de Compra");
			console.log(error);
		});
}
