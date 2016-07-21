var ref = new Firebase('https://dr-iqbal.firebaseio.com');

function loadData() {	
	ref.on('value', function(snapshot){
		data = snapshot.val().no_antrian;
		alert('Jumlah Pasien: ' + data)
	}); 
}