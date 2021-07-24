/**
 * Input:
 * ChieuDai
 * ChieuRong
 * 
 * Thực hiện:
 * B1: Tạo biến ChieuDai , ChieuRong , dienTich , chuVi
 * B2: Gán giá trị cho ChieuDai,ChieuRong
 * B3: Tính dienTich , ChuVi
 * B4: In giá trị ra console
 * 
 * Output:
 * DienTich
 * ChuVi
 */

var chieuDai = 5;
var chieuRong = 3;
var dienTich = 0;
var chuVi = 0;

dienTich = chieuDai*chieuRong;
chuVi = (chieuDai + chieuRong) * 2;

console.log("Diện tích hình chữ nhật là " + dienTich);
console.log("Chu vi hình chữ nhật là " + chuVi);