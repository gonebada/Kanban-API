/*==============================
POST /column
------------------------------
Request:
name: string - name of the column to create
------------------------------
Response:
{
   id: int
}*/

var board = {
    name: 'Tablica Kanban',
    addColumn: function(column) {
      this.element.appendChild(column.element);
      initSortable(column.id); //About this feature we will tell later
    },
    element: document.querySelector('#board .column-container')
};

document.querySelector('#board .create-column').addEventListener('click', function() {
    var name = prompt('Enter a column name');
    var data = new FormData();
    data.append('name', name);
    fetch(baseUrl + '/column',{
        method: 'POST',
        headers: myHeaders,
        body: data,
    })
    .then(function(resp){
        return resp.json();
    })
    .then(function(resp){
        //first column with id then table with column
        var column = new Column(resp.id,name);
        board.addColumn(column);
    })
});
	
function initSortable(id) {
  	var el = document.getElementById(id);
  	var sortable = Sortable.create(el, {
    	group: 'kanban',
    	sort: true
  	});
}