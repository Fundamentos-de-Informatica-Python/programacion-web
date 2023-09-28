
function fetchPurchaseOrderData() {
	const params = new URLSearchParams(window.location.search)

	if (params.has("order_id")) {
		//axios.get(`https://purchase-orders-api.herokuapp.com/api/v1/purchase-orders/${params.get("order_id")}`)
		axios.get(`http://127.0.0.1:5000/api/v1/purchase-orders/${params.get("order_id")}`)
		.then(response => {
			setFormData(response.data);
		})
		.catch(error => {
			alert("No se puedo obtener los datos de la Orden de Compra");
			console.log(error);
		});
	} else {
		alert("Orden de Compra inexistente");
	}
}

function setFormData(purchaseData) {

	document.getElementById("order-date").value = purchaseData["order_date"];
	document.getElementById("order-id").value = purchaseData["order_id"];
	setStateOrder(purchaseData["state"]);
	document.getElementById("supplier").value = purchaseData["supplier"];
	document.getElementById("cuit-supplier").value = purchaseData["cuit_supplier"];
	setItemsOrder(purchaseData["items"]);
	document.getElementById("total").value = purchaseData["total"];
	document.getElementById("deadline").value = purchaseData["deadline"];
}

function setStateOrder(state) {
	switch(state) {
		case "Ordenado":
			document.getElementById("ord-state").checked = true;
			break;
		case "Completado":
			document.getElementById("com-state").checked = true;
			break;
		case "Cancelado":
			document.getElementById("can-state").checked = true;
			break;
 	}
}

function setItemsOrder(items) {
	for (let i=0 ; i<items.length ; i++) {
		addItemRow(items[i]["item"], items[i]["quantity"]);
	}
}

function addItemRow(item, quantity) {
	let itemsContainer = document.getElementById("items-container");
	let newDiv = document.createElement("div");
	let newItem = document.createElement("input");
	let newQuantity = document.createElement("input");
	let newButton = document.createElement("input");
	let rowId = Math.random().toString(36).slice(2);
	
	newDiv.id=rowId
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

	if (item !== undefined && quantity !== undefined) {
		newItem.value = item;
		newQuantity.value = quantity;
	}
	
	newDiv.appendChild(newItem);
	newDiv.appendChild(newQuantity);
	newDiv.appendChild(newButton);
	itemsContainer.appendChild(newDiv);
}

function removeItemRow(id) {
	let divItem = document.getElementById(id.substring(2));
	divItem.remove();
}

function editPurchaseOrder() {
	let orderDate = document.getElementById("order-date").value;
	let orderId = document.getElementById("order-id").value;
	let state = document.querySelector('input[name="state"]:checked').value;
	let supplier = document.getElementById("supplier").value;
	let cuitSupplier = document.getElementById("cuit-supplier").value;
	let items = getItems();
	let total = document.getElementById("total").value;
	let deadline = document.getElementById("deadline").value;

	//axios.put('https://purchase-orders-api.herokuapp.com/api/v1/purchase-orders/',
	axios.put(`http://127.0.0.1:5000/api/v1/purchase-orders/${orderId}`, 
	{
		"state": state,
		"items": items,
		"total": total,
	})
		.then(function (response) {
			let successMessage = document.getElementById("sucess-message");
			successMessage.innerHTML = `Orden de Compra [${response.data["order_id"]}] modificada`;
			successMessage.hidden = false;
		})
		.catch(function (error) {
			alert("No se puedo editar la Orden de Compra");
			console.log(error);
		});
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

fetchPurchaseOrderData();