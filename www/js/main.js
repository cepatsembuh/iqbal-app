window.onload = loadData();
var ref = new Firebase('https://dr-iqbal.firebaseio.com');

function loadData() {	
	ref.on('value', function(snapshot){
		var data = snapshot.val().no_antrian,
		label = document.getElementById('jumlah');

		label.innerHTML = data
	}); 
}