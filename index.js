const kuvat = [
  "kuvat/Kiralippu.png",
  "kuvat/kirasybau.png",
];

let nykyinenIndeksi = 0;

document.addEventListener("DOMContentLoaded", () => {
  const kuvaElementti = document.getElementById("kuva_vaihdos");

  kuvaElementti.addEventListener("click", () => {
    nykyinenIndeksi = (nykyinenIndeksi + 1) % kuvat.length;
    kuvaElementti.src = kuvat[nykyinenIndeksi];
  });
});