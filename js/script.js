// -------------------------
// WELCOME MODAL
// -------------------------
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("welcomeModal");
  const input = document.getElementById("modalNameInput");
  const submitBtn = document.getElementById("modalSubmitBtn");
  const nameSpan = document.getElementById("name");

  // Tampilkan modal
  modal.classList.remove("hidden");

  // Fokus input
  input.focus();

  // Fungsi submit modal
  submitBtn.addEventListener("click", function() {
    let name = input.value.trim();
    if (name === "") {
      nameSpan.innerText = "Michael Sharon N";
    } else {
      nameSpan.innerText = name;
    }
    modal.classList.add("hidden"); // sembunyikan modal
  });

  // Tekan Enter di input untuk submit
  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") submitBtn.click();
  });
});

// -------------------------
// FORM HANDLING
// -------------------------
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
