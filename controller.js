function information() {
  var ma =  document.getElementById("ma").value 
  var ten =  document.getElementById("ten").value 
  var email =  document.getElementById("email").value 
  var matkhau =  document.getElementById("matkhau").value 
  var toan =  document.getElementById("toan").value *1
  var ly =  document.getElementById("ly").value *1
  var hoa =  document.getElementById("hoa").value *1

    var sv = new sinhvien(ma, ten, email, matkhau, toan, ly, hoa)
    return sv
}