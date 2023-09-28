
function editPurchaseOrder(id) {
	let queryParams = { "order_id": id };
	var searchParams = new URLSearchParams(queryParams);

	console.log("Button clicked: " + id);
	document.location = `./edit_purchase_order.html?${searchParams}`;
}

function getPurchaseOrders() {
	//axios.get('https://purchase-orders-api.herokuapp.com/api/v1/purchase-orders/')
	axios.get('http://127.0.0.1:5000/api/v1/purchase-orders/')
		.then(function (response) {
			for (let i=0 ; i<response.data.length ; i++) {
				addTableDataRow(response.data[i]);
			}
			document.getElementById("data-loder").hidden = true;
			document.getElementById("purchase-table").hidden = false;
		})
		.catch(function (error) {
			console.log(error);
			alert("No se puedo obtener las Ordenes de Compra");
	});
}

function addTableDataRow(purchaseOrder) {
	let purOrdTableBody = document.getElementById('purchase-table').getElementsByTagName('tbody')[0];
	let row = purOrdTableBody.insertRow(-1);

	let cell0 = row.insertCell(0);
	cell0.innerHTML = purchaseOrder.order_date;

	let cell1 = row.insertCell(1);
	cell1.innerHTML = purchaseOrder.order_id;

	let cell2 = row.insertCell(2);
	cell2.innerHTML = purchaseOrder.state;

	let cell3 = row.insertCell(3);
	cell3.innerHTML = purchaseOrder.supplier;

	let cell4 = row.insertCell(4);
	cell4.innerHTML = purchaseOrder.cuit_supplier;

	let cell5 = row.insertCell(5);
	cell5.appendChild(rederItemsData(purchaseOrder.items))

	let cell6 = row.insertCell(6);
	cell6.innerHTML = purchaseOrder.total;

	let cell7 = row.insertCell(7);
	cell7.innerHTML = purchaseOrder.deadline;
	
	addEditButton(row, purchaseOrder.order_id);
}

function rederItemsData(items) {
	let itemsTable = document.createElement("table");
	var itemsTableBody = document.createElement("tbody");
	itemsTable.id = "items-table";
	itemsTable.appendChild(itemsTableBody);
	
	for (var i=0 ; i<items.length ; i++) {
		var rowItems = itemsTableBody.insertRow(-1);
		let itemCell1 = rowItems.insertCell(0);
		itemCell1.innerHTML = items[i].item;

		let itemCell2 = rowItems.insertCell(1);
		itemCell2.innerHTML = items[i].quantity;
	}
	return itemsTable;
}

function addEditButton(row, orderId) {
	let cell = row.insertCell(-1);
	let button = document.createElement("input");
	button.id = orderId;
	button.className = "button button-action";
	button.type = "submit";
	button.value = "Editar";
	button.setAttribute("onclick", "editPurchaseOrder(this.id)")
	cell.appendChild(button);
}


/* Esta función se ejecuta inmediatamente luego de cargar el DOM. La misma es la responsable de
realizar una API call al Servicio Mock y llenar los datos en la tabla de Ordenes de Compra */
getPurchaseOrders();