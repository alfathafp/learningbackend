// tugas 1: prompt untuk mengetahui jumlah saldo yang di inputkan user

// let saldoAwal = parseInt(prompt("masukan saldo awal!"));
// let hutang = parseInt(prompt("masukan jika ada hutang!"));
// let saldoTambahan = parseInt(prompt("masukan jika ada saldo tambahan!"));
// const saldoAkhir = saldoAwal + saldoTambahan - hutang;

// alert(`saldo akhir anda adalah: ${saldoAkhir}`);

// tugas 2: menentukan hari dan tanggal dari now
const dateNow = new Date().getDay();
let day;

switch (dateNow) {
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
  default:
    day = "sunday";
    break;
}

console.log(`hari ini adalah hari: ${day}`);
