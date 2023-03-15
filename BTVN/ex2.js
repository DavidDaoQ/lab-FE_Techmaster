// Ví dụ
// Viết hàm sum tính và trả về kết quả
// tổng của 2 tham số a, b truyền vào
function sum(a, b) {
  const result = a + b;

  return result;
}

// Kiểm tra kết quả
console.log(`1 + 2 = ${sum(1, 2)}`);

// Bài tập

// 1. Viết hàm tìm số lớn nhất trong 3 số
// Hàm nhận vào 3 tham số a, b, c tương ứng là 3 số bất kỳ
// Kết quả trả về là giá trị lớn nhất trong 3 số (lưu ý trường hợp 2 hay 3 số bằng nhau)
function maxOfThree(a, b, c) {
  // Code
  let max = a; // Gán giá trị lớn nhất là a
  if (b > max) {
    // giá trị b lớn hơn giá trị max
    // thì sẽ gán là giá trị lớn nhất
    max = b;
  }
  if (c > max) {
    // giá trị c lớn hơn giá trị max
    // thì sẽ gán c là giá trị lớn nhất
    max = c;
  }
  return max; // Kết quả trả về
}
// Gọi hàm maxOfThree()
console.log(maxOfThree(2, 5, 9)); // Kết quả : Giá trị lớn nhất : 9
console.log(maxOfThree(12, 4, 9)); // Kết quả : Giá trị lớn nhất : 12

// 2. Viết hàm tìm ra mùa trong năm
// Hàm nhận vào tham số month tương ứng là một tháng trong năm (1-12)
// Kết quả trả về là mùa tương ứng với tháng
// - Nếu là tháng 12, 1, 2 kết quả là 'Winter'
// - Nếu là tháng 3, 4, 5 kết quả là 'Spring'
// - Nếu là tháng 6, 7, 8 kết quả là 'Summer'
// - Nếu là tháng 9, 10, 11 kết quả là 'Fall'
function findSeason(month) {
  // Code
  switch (month) {
    case 12:
    case 1:
    case 2: {
      console.log("Winter"); // giá trị trả về là winter
      //nếu dữ liệu nhập vào là 12, 1, 2.
      break;
    }

    case 3:
    case 4:
    case 5: {
      console.log("Spring"); // giá trị trả về là spring
      //nếu dữ liệu nhập vào là 3, 4, 5.
      break;
    }

    case 6:
    case 7:
    case 8: {
      console.log("Summer"); // giá trị trả về là summer
      //nếu dữ liệu nhập vào là 6, 7, 8.
      break;
    }

    case 9:
    case 10:
    case 11: {
      console.log("Fall"); // giá trị trả về là fall
      //nếu dữ liệu nhập vào là 9, 10, 11.
      break;
    }

    default: {
      console.log("Giá trị nhập vào không đúng!"); //giá trị trả về là "không đúng"
      //nếu giá trị không theo điều kiện ở trên.
      break;
    }
  }
  return month; // Kết quả trả về
}
// Gọi hàm findSeason()
console.log(findSeason(3)); // Kết quả : "Spring" và  "3"
console.log(findSeason(12)); // Kết quả : "Winter" và  "12"
console.log(findSeason(13)); // Kết quả : "Giá trị nhập vào không đúng!" và "13"

// 3. Viết hàm kiểm tra năm nhuận
// Hàm nhận vào tham số year là một năm bất kỳ
// Kết quả trả về là true hoặc false cho biết năm đó có phải là năm nhuận hay không
// Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho 4 và không chia hết cho 100,
// tuy nhiên ngoại lệ với các năm chia hết cho 100 vẫn được coi là năm nhuận nếu năm đó cũng chia hết cho 400
// Ví dụ
// - 2020 là năm nhuận vì chia hết cho 4 nhưng không chia hết cho 100
// - 2100 không phải năm nhuận vì chia hết cho 4 nhưng chia hết cho 100
// - 2000 là năm nhuận vì chia hết cho 100 nhưng cũng chia hết cho 400
function isLeafYear(year) {
  // Code
  return year % 4 == 0 || (year % 100 == 0 && year % 4 == 0);
  // Kết quả trả về năm nhuận
  //nếu năm đó chia hết cho 4 hoặc chia hết cho 400.
}
// Gọi hàm isLeafYear()
console.log(isLeafYear(2000)); // Kết quả trả về : true
console.log(isLeafYear(2002)); // Kết quả trả về : false
console.log(isLeafYear(2008)); // Kết quả trả về : true
console.log(isLeafYear(2106)); // Kết quả trả về : false

// 4. Viết hàm tìm ra số ngày trong 1 tháng
// Hàm nhận vào tham số month và year tương ứng là tháng (1-12) và năm bất kỳ
// Kết quả trả về là số ngày tương ứng trong tháng
// - Các tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày
// - Các tháng 4, 6, 9, 11 có 30 ngày
// - Tháng 2 có 29 ngày nếu là năm nhuận, nếu không là 28 ngày
function findDayOfMonth(month, year) {
  // Code
  switch (month) {
    case 2:
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return 29; // năm nhuận, tháng 2 có 29 ngày
      } else {
        return 28; // không phải năm nhuận, tháng 2 có 28 ngày
      }
    case 4:
    case 6:
    case 9:
    case 11:
      return 30; // tháng có 30 ngày
    default:
      return 31; // tháng có 31 ngày
  }
}
// Sử dụng hàm findDayOfMonth()
console.log(findDayOfMonth(2, 2023)); // Kết quả: 28 (tháng 2 năm 2023 có 28 ngày)
console.log(findDayOfMonth(5, 2020)); // Kết quả: 31 (tháng 5 năm 2020 có 31 ngày)

// 5. Viết hàm tìm ra xếp loại của sinh viên theo điểm trung bình
// Hàm nhận vào tham số point là điểm trung bình của sinh viên
// Kết quả trả về là xếp loại tương ứng (A, B, C, D hoặc F)
// - Nếu điểm trung bình < 4.0 thì xếp loại 'F'
// - Nếu điểm trung bình < 5.5 thì xếp loại 'D'
// - Nếu điểm trung bình < 7.0 thì xếp loại 'C'
// - Nếu điểm trung bình < 8.5 thì xếp loại 'B'
// - Nếu điểm trung bình từ 8.5 đến 10 thì xếp loại 'A'
function calcGrade(point) {
  // Code
  if (point > 9) {
    //giả sử điểm trung bình lớn hơn 9
    //thì học sinh đó là học sinh xuất xắc
    return "A";
  } else if (point >= 8) {
    //giả sử điểm trung bình lớn hơn và bằng 8
    //thì học sinh đó là học sinh giỏi
    return "B";
  } else if (point >= 7) {
    //giả sử điểm trung bình lớn hơn và bằng 7
    //thì học sinh đó là học sinh khá
    return "C";
  } else if (point >= 4) {
    //giả sử điểm trung bình lớn hơn và bằng 4
    //thì học sinh đó là học sinh trung bình
    return "D";
  } else {
    //Học sinh có điểm trung bình thấp hơn 4
    //thì học sinh là học sinh yếu
    return "F";
  }
}
//gọi hàm calcGrade()
console.log(calcGrade(7.5)); // Kết quả trả về : C
console.log(calcGrade(8.5)); // Kết quả trả về : B
console.log(calcGrade(4.5)); // Kết quả trả về : D
console.log(calcGrade(9.5)); // Kết quả trả về : A

// 6. Viết hàm tính tiền cước taxi cho khách theo số kilomet đã di chuyển
// Hàm nhận vào tham số km là số kilomet đã di chuyển
// Kết quả trả về là tiền cước phải trả
// - Phí mở cửa cố định là 10.000đ
// - Giá cho 30km đầu tiên là 11.000đ/km
// - Từ kilomet thứ 31 giá là 9.500đ/km
// - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
// Ví dụ
// Tổng số km đã đi là 35, 30 km đầu tiên có giá 11.000đ, 5km tiếp theo có giá là 9.500đ
// Vậy tổng tiền là 10.000 (phí mở cửa) + 30 * 11.000đ + 5 * 9.500đ = 387.500đ
function calcTaxiFee(km) {
  // Code
  let phiMoCua = 10000; // khai báo phí mở cửa
  let phi30km = 11000; // khai báo phí 30km đầu tiền
  let tienPhi30km = phi30km * 30; // khai báo tổng tiền phí 30km đầu tiền
  let hon30km = 9500; // khai báo phí khi đi hơn 30km
  let tienHon30km = (km - 30) * 9500; // khai báo phí khi đi hơn 30km
  let tongTien = phiMoCua + tienPhi30km + tienHon30km; // khai báo tổng tiền
  return tongTien; // Trả về kết quả tổng tiền
}
// gọi tên hàm calcTaxiFee()
console.log(calcTaxiFee(34)); // Kết quả trả về : 378000
console.log(calcTaxiFee(38)); // Kết quả trả về : 416000
console.log(calcTaxiFee(42)); // Kết quả trả về : 454000
console.log(calcTaxiFee(22)); // Kết quả trả về : 264000

// 7. Viết hàm tìm nghiệm của phương trình bậc 2 ax^2 + bx + c = 0
// Hàm nhận vào 3 tham số a, b, c tương ứng là hệ số phương trình
// Kết quả trả về là nghiệm của phương trình
// - Nếu phương trình có vô số nghiệm thì trả về Infinity
// - Nếu phương trình vô nghiệm thì trả về null
// - Nếu phương trình có 1 nghiệm thì trả về giá trị đó
// - Nếu phương trình có 2 nghiệm thì trả về một mảng chứa 2 nghiệm, cú pháp như sau [x1, x2]
function solveEquation(a, b, c) {
  // Code
  let delta = b * b - 4 * a * c; // khai báo biến delta
  let x1, x2; // khai báo biến x1 và x2
  if (delta > 0) {
    // Giả sử delta lớn hơn 0 thì
    // phương trình có hai nghiệm x1 và x2
    x1 = -b - Math.sqrt(delta);
    x2 = -b + Math.sqrt(delta);
    return [x1, x2]; // trả về giá trị 2 nghiệm : x1 và x2
  } else if (delta == 0) {
    // Giả sử delta bằng 0 thì
    // phương trình có một nghiệm : x1 = x2
    return (x1 = x2 = -b / (2 * a));
  } else {
    // Giả sử delta nhỏ hơn 0 thì
    // phương trình vô nghiệm
    return "Vô nghiệm";
  }
}
// gọi hàm solveEquation()
console.log(solveEquation(-2, -1, 3)); // Kết quả trả về : [-4,6]
console.log(solveEquation(-2, -6, 8)); // Kết quả trả về : [-4,16]
console.log(solveEquation(-2, -1, 32)); // Kết quả trả về : [-15.03,17.03]
console.log(solveEquation(4, -4, 1)); // Kết quả trả về : 0.5
console.log(solveEquation(-1, -6, -9)); // Kết quả trả về : -3
console.log(solveEquation(2, -6, 12)); // Kết quả trả về : Vô nghiệm
