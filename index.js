const kuvat = [
  "kuva1.jpg",
  "kuva2.jpg",
  "kuva3.jpg"
];

let nykyinenIndeksi = 0;

document.addEventListener("DOMContentLoaded", () => {
  const kuvaElementti = document.getElementById("vaihtokuva");

  kuvaElementti.addEventListener("click", () => {
    nykyinenIndeksi = (nykyinenIndeksi + 1) % kuvat.length;
    kuvaElementti.src = kuvat[nykyinenIndeksi];
  });
});