// FUNGSI 1: MENGISI NAMA (Welcoming Speech)
function replaceName() {
  // Menggunakan timeout kecil agar prompt tidak muncul sebelum CSS termuat sempurna
  setTimeout(() => {
    let name = prompt("Halo, selamat datang! Siapa nama Anda?", "");
    
    const nameElement = document.getElementById("name");
    
    // Validasi: Jika user klik cancel (null) atau mengosongkan nama
    if (name === null || name.trim() === "") {
      nameElement.innerHTML = "Michael Sharon N";
    } else {
      nameElement.innerHTML = name;
    }
  }, 500); 
}

// DOMContentLoaded untuk trigger prompt
document.addEventListener("DOMContentLoaded", function() {
  replaceName();
});

// FUNGSI 2: FORM HANDLING & VALIDATION (Sama seperti sebelumnya)
document.getElementById("contactForm2").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama2").value;
  const tgl = document.getElementById("tgl2").value;
  const pesan = document.getElementById("pesan2").value;
  const jk = document.querySelector('input[name="jk"]:checked')?.value || "-";

  const fullDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const timeString = fullDate.toLocaleDateString('id-ID', options);

  document.getElementById("currentTime").innerText = "Current time: " + timeString;

  const outputBox = document.getElementById("outputData");
  outputBox.innerHTML = `
    <div class="space-y-2 bg-white p-4 rounded border shadow-sm border-l-4 border-blue-500">
      <p><b>Nama :</b> ${nama}</p>
      <p><b>Tanggal Lahir :</b> ${tgl}</p>
      <p><b>Jenis Kelamin :</b> ${jk}</p>
      <p><b>Pesan :</b> <br><span class="text-gray-600 italic">"${pesan}"</span></p>
    </div>
  `;

  alert("Terima kasih " + nama + ", pesan Anda berhasil ditampilkan!");
  this.reset(); 
});