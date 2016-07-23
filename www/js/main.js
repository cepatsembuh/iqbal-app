window.onload = loadData()
var ref = new Firebase('https://dr-iqbal.firebaseio.com');

function loadData() {	
	ref.on('value', function(snapshot){
		data = snapshot.val().no_antrian;
		document.write.getElementById('jumlah').innerHTML = data;
	}); 
}