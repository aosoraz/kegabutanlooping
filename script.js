let N = parseInt(prompt("Masukkan nilai N: "));
let frm = N + N + 1;
let angka = N;

for (i = 0; i < frm; i++) {
  for (j = 0; j < frm; j++) {
    if (j == 0 || i == 0 || i == frm-1 || j == frm-1) {
      document.write("*&nbsp;")
    } else if ((i+j) % 2 == 0) {
      angka = angka % 10;
      document.write(angka + "&nbsp;");
      angka++;
    } else {
      document.write("&nbsp;&nbsp;&nbsp;");
    }
  }
  document.write("<br>");
}