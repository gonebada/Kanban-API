function Column(id, name) {
	var self = this;

	this.id = id;
	this.name = name || 'No name given';

	if (event.target.classList.contains('add-card')) {
		//interfejs do tworzenia par klucz-wartość
		var data =new FormData();
		data.append('name', cardName);
		data.append('bootcamp_kanban_column_id',self.id);
		//post endpoint /CARD
		fetch(baseUrl + '/card', {
			method: 'POST',
			headers: myHeaders,
			body: data,
		})
			.then(function (resp) {
				return resp.json();

			})
			.then(function(resp){
				var card= new Card(resp.id,cardName);
				self.addCard(card);
			});
	}

}

Column.prototype = {
	addCard: function (card) {
		this.element.querySelector('ul').appendChild(card.element);
	},
	removeColumn: function () {
		var self = this;
		fetch(baseUrl + '/column/' + self.id, { method: 'DELETE', haaders: myHeaders })
			.then(function (resp) {
				return resp.json();
			})
			// usunięcie kolumny dopiero po uzyskaniu odpowiedzi z serwera. 
			.then(function (resp) {
				self.element.parentNode.removeChild(self.element);
			});
	}
};

