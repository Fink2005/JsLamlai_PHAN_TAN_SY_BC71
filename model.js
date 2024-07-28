function sinhvien(ma, ten, email, matkhau, toan, ly, hoa) {
    this.ma = ma;
    this.ten = ten;
    this.email = email;
    this.matkhau = matkhau;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.tinhDTB = function () {
        return (this.toan + this.ly +this.hoa) / 3

    }
}