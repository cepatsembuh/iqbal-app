window.onload = loadData();

function loadData() {	
	var ref = new Firebase('https://dr-iqbal.firebaseio.com');
	ref.on('value', function(snapshot){
		data = snapshot.val().no_antrian;
		// document.write.getElementById('jumlah').innerHTML = data;
		alert(data)
	}); 
}