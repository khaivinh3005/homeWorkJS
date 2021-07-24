/**
 * Input:
 * Nhập 1 số có 2 chữ số (vd: 23);
 * 
 * Thực hiện:
 * B1: Tạo biến input , giaTriPhanChuc , giaTriPhanDu , output 
 * B2: Gán giá trị cho input
 * B3: tách số hàng chục theo công thức:
 *  giaTriPhanChuc = Math.floor(input/10);
 * B4: lấy số phần dư theo công thức:
 *  giaTriPhanDu = input % 10;
 * B5: giá trị output = giaTriPhanChuc + giaTriPhanDu
 * B6: In giá trị output ra console; 
 *
 * Output
 * Tổng 2 số đã nhập output (23 => 2+3 =5)
 */


var input = 23;
var output = 0;

// Công thức rút gọn
output = Math.floor(input/10) + input % 10;
console.log("Tổng 2 số vừa nhập là " + output)