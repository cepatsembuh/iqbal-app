function submitForm() {
  // Firebase ref
  var ref = new Firebase("https://dr-iqbal.firebaseio.com/"),
      nomor = new Firebase("https://dr-iqbal.firebaseio.com/no_antrian");
  
  // Today date's
  var date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      right_now = year + '-' + month + '-' + day,
      today = ref.child(right_now);

  today.on  
}