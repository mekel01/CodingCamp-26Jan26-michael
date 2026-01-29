// WELCOMING NAME
document.getElementById("name").innerText =
  "Michael Sharon Nathanael";

// FORM 
document.getElementById("contactForm2").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama2").value;
  const tgl = document.getElementById("tgl2").value;
  const pesan = document.getElementById("pesan2").value;
  const jk = document.querySelector('input[name="jk"]:checked');

  const time = new Date().toString();
  document.getElementById("currentTime").innerText =
    "Current time : " + time;

  document.getElementById("outputData").innerHTML = `
    <p><b>Nama :</b> ${nama}</p>
    <p><b>Tanggal Lahir :</b> ${tgl}</p>
    <p><b>Jenis Kelamin :</b> ${jk ? jk.value : "-"}</p>
    <p><b>Pesan :</b> ${pesan}</p>
  `;
});
