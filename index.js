sinhVienList = []
console.log(sinhVienList)
var data = localStorage.getItem("sinhVienList_JSON");

var svne = JSON.parse(data);

for (var index = 0; index < svne.length; index++) {
    var data = svne[index];
    var sv = new sinhvien(
      data.ma,
      data.ten,
      data.email,
      data.matkhau,
      data.toan,
      data.ly,
      data.hoa
    );
    sinhVienList.push(sv);
  }
render()

function render() {
   var show = ""
   for(index = 0; index < sinhVienList.length; index++) {
    var sv = sinhVienList[index]
    var plusString =  `<tr>
        <td>${sv.ma}</td>
        <td>${sv.ten}</td>
        <td>${sv.email}</td>
        <td>${sv.tinhDTB()}</td>
        <td>
        <button onclick="deletene('${sv.ma}')" class="btn btn-primary">
        Xoa
        </button>
        <button onclick="suane('${sv.ma}')" class="btn btn-warning">
        sua
        </button>
        </td>
    </tr> `
    show += plusString
   }
   document.getElementById("tbodySinhVien").innerHTML = show
}
function add() {
    var get = information();
    sinhVienList.push(get);
    console.log("🚀  ~  sinhVienList:",  sinhVienList)
    var jsonsv = JSON.stringify(sinhVienList);
    localStorage.setItem("sinhVienList_JSON", jsonsinhVienList);
    render()
}



function deletene(ma) { 
    for(index = 0; index < sinhVienList.length; index++) {
        if ( sinhVienList[index].ma == ma) {

            ma = index
           sinhVienList.splice(ma,1)
           var jsonsinhVienList = JSON.stringify(sinhVienList);
           localStorage.setItem("sinhVienList_JSON", jsonsinhVienList);
        }
    }
    render()
}


function suane(ma) {
     var viTri =  sinhVienList.findIndex(function (item) {
        return item.ma = ma
     })
if(viTri != -1) {
    var sv = sinhVienList[viTri]
    document.getElementById("ma").value = sv.ma
    document.getElementById("ten").value = sv.ten
     document.getElementById("email").value = sv.email
    document.getElementById("matkhau").value = sv.matkhau
    document.getElementById("toan").value  = sv.toan
    document.getElementById("ly").value = sv.ly
    document.getElementById("hoa").value = sv.hoa
    document.getElementById("ma").setAttribute("readonly", true);
    
    var jsonsinhVienList = JSON.stringify(sinhVienList);
    localStorage.setItem("sinhVienList_JSON", jsonsinhVienList);
}

    
}


function capnhat() {
    var sv = information();
    var viTri = sinhVienList.findIndex(function (item) {
      return item.ma == sv.ma;
    });
    sinhVienList[viTri] = sv;
    var jsonsinhVienList = JSON.stringify(sinhVienList);
    localStorage.setItem("sinhVienList_JSON", jsonsinhVienList);
    render();
  }