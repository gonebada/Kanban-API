
// ADRESY DO KOMUNIKACJI Z SERWEREM
const baseUrl = 'https://kodilla.com/pl/bootcamp-api';
const myHeaders = {
	'X-Client-Id': '4273',
	'X-Auth-Token': 'c743fc94e3bcc83fdbf848c737751c56'
};


// ZAPYTANIE O ZASOB TABLICY
fetch(baseUrl + '/board', { headers: myHeaders })
	.then(function (resp) {
		return resp.json();
	})
	.then(function (resp) {
		setupColumns(resp.columns);
	});

//TWORZENIE KOLUMN 
function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}
// TWORZENIE KART DLA DANEJ KOLUMNY
function setupCards(col, Cards) {
	cards.forEach(function (card) {
		var cardObj = new Card(card.id, card.name);
		col.addCard(cardObj);
	})
}
function generateTemplate(name, data, basicElement) {
	var template = document.getElementById(name).innerHTML;
	var element = document.createElement(basicElement || 'div');

	Mustache.parse(template);
	element.innerHTML = Mustache.render(template, data);

	return element;
}
