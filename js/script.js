// FUNGSI 1: MENGISI NAMA (Welcoming Speech)
function replaceName() {
  let name = prompt("Halo, selamat datang! Siapa nama Anda?", "");
  
  // Jika user klik cancel atau mengosongkan nama
  if (name == null || name == "") {
    document.getElementById("name").innerHTML = "Michael Sharon N";
  } else {
    document.getElementById("name").innerHTML = name;
  }
}

// Jalankan fungsi ganti nama tepat setelah halaman termuat
window.onload = function() {
  replaceName();
};

// FUNGSI 2: FORM HANDLING & VALIDATION
document.getElementById("contactForm2").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil data dari form
  const nama = document.getElementById("nama2").value;
  const tgl = document.getElementById("tgl2").value;
  const pesan = document.getElementById("pesan2").value;
  const jk = document.querySelector('input[name="jk"]:checked').value;

  // Mendapatkan waktu saat ini
  const fullDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const timeString = fullDate.toLocaleDateString('id-ID', options);

  // Update elemen waktu
  document.getElementById("currentTime").innerText = "Current time: " + timeString;

  // Menampilkan data ke kotak output
  const outputBox = document.getElementById("outputData");
  outputBox.innerHTML = `
    <div class="space-y-2 bg-white p-4 rounded border shadow-sm">
      <p><b>Nama :</b> ${nama}</p>
      <p><b>Tanggal Lahir :</b> ${tgl}</p>
      <p><b>Jenis Kelamin :</b> ${jk}</p>
      <p><b>Pesan :</b> <br><span class="text-gray-600">${pesan}</span></p>
    </div>
  `;

  // Opsional: Alert sukses
  alert("Terima kasih " + nama + ", pesan Anda berhasil ditampilkan!");
});