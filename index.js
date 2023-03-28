// thêm mảng
var arrNumber = [];

function themMang(n) {
  arrNumber.push(n);
  return arrNumber;
}

document.getElementById("btnThemMang").onclick = function () {
  var nhapSo = +document.getElementById("nhap-so").value;

  var ketQua = themMang(nhapSo);

  document.getElementById("hienThiMang").innerHTML = ketQua;
};

// Bài 1:

document.getElementById("btnTinhTong").onclick = function (event) {
  event.preventDefault();
  var tong = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      tong += arrNumber[i];
    }
  }
  document.getElementById("tongSoDuong").innerHTML = tong;
};

//   Bài 2:

document.getElementById("btnDemSo").onclick = function (event) {
  event.preventDefault();
  var dem = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      dem++;
    }
  }
  document.getElementById("demSoDuong").innerHTML = dem;
};

//   Bài 3:

document.getElementById("btnTimSoNho").onclick = function (event) {
  event.preventDefault();
  var min = arrNumber[0];
  for (var i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }
  document.getElementById("timSoNhoNhat").innerHTML = min;
};

//   Bài 4:

document.getElementById("btnTimSoDuongNho").onclick = function (event) {
  event.preventDefault();
  min = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0 && arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }
  document.getElementById("timSoDuongNhoNhat").innerHTML = min;
};

//   Bài 5:

document.getElementById("btnTimSoChan").onclick = function (event) {
  event.preventDefault();
  var htmlOut = 0;
  for (var i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 == 0) {
      htmlOut = arrNumber[i];
      break;
    }
  }
  document.getElementById("timSoChanCuoiCung").innerHTML = htmlOut;
};

//   Bài 6:

document.getElementById("btnDoiCho").onclick = function (event) {
  event.preventDefault();
  var viTri_1 = +document.getElementById("nhap-so-1").value;
  var viTri_2 = +document.getElementById("nhap-so-2").value;

  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] == viTri_1) {
      var temp = arrNumber[viTri_1];
      arrNumber[viTri_1] = arrNumber[viTri_2];
      arrNumber[viTri_2] = temp;
    }
  }
  document.getElementById("doicho").innerHTML = arrNumber;
};

//   Bài 7:

document.getElementById("btnSapXep").onclick = function (event) {
  event.preventDefault();

  var arrNumberSort = _.sortBy(arrNumber);

  document.querySelector("#sapXep").innerHTML = arrNumberSort;
};

//   Bài 8:

function ktSNT(n) {
  let flag = 1;

  if (n < 2) return (flag = 0);

  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      flag = 0;
      break;
    }
    i++;
  }
  return flag;
}

document.getElementById("btnTimSo").onclick = function (event) {
  event.preventDefault();
  var htmlOut = 0;

  for (var i = 0; i < arrNumber.length; i++) {
    if (ktSNT(arrNumber[i]) == true) {
      htmlOut = arrNumber[i];
      break;
    }
  }

  document.getElementById("timSo").innerHTML = htmlOut;
};

// Bài 9:

document.getElementById("btnThemSo9").onclick = function () {
  var nhapSo = +document.getElementById("nhap-so-bai-9").value;

  var ketQua = themMang(nhapSo);

  document.getElementById("themSo9").innerHTML = ketQua;
};

document.getElementById("btnDemSoBai9").onclick = function () {
  var dem = 0;
  check = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    check = Number.isInteger(arrNumber[i]);
    if (check == true) {
      dem++;
    }
  }
  document.getElementById("demSoBai9").innerHTML = dem;
};

//   Bài 10:

document.getElementById("btnSoSanh10").onclick = function (event) {
  event.preventDefault();
  var htmlOut = "";
  var soam = 0;
  var soduong = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      soduong++;
    } else {
      soam++;
    }
  }

  if (soduong > soam) {
    htmlOut = "Số dương nhiều hơn số âm";
  } else if (soduong < soam) {
    htmlOut = "Số dương ít hơn số âm";
  } else {
    htmlOut = "Số dương và số âm bằng nhau";
  }
  document.getElementById("soSanh10").innerHTML = htmlOut;
};
