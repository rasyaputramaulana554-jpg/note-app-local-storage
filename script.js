function inputdata(event) {
  event.preventDefault();

  let data1 = document.getElementById("note").value;
  let data2 = document.getElementById("label").value;

  if(data1 === "" || data2 === "") {
    alert("Data tidak boleh kosong!");
    return;
  }

  // Ambil data dari localStorage
  let siswa = JSON.parse(localStorage.getItem("siswa"));

  // Pastikan siswa berbentuk array
  if (!Array.isArray(siswa)) {
    siswa = [];
  }

  // Tambahkan data baru
  siswa.push({
    note: data1,
    label: data2,
  });

  // Simpan kembali
  localStorage.setItem("siswa", JSON.stringify(siswa));

  // Tampilkan data
  tampilkan();

  // Kosongkan input
  document.getElementById("note").value = "";
  document.getElementById("label").value = "";
}

// Menampilkan data
function tampilkan() {
  let data = JSON.parse(localStorage.getItem("siswa"));

  // Pastikan data berupa array
  if (!Array.isArray(data)) {
    data = [];
  }

  const ul = document.getElementById("data-tampil");

  ul.innerHTML = "";

  data.forEach(function (item, i) {
    const li = document.createElement("li");

    li.innerHTML =
      item.note +
      " - " +
      item.label +
      ' <button onclick="hapusSatu(' +
      i +
      ')">Hapus</button>';

    ul.appendChild(li);
  });
}

// Menghapus satu data
function hapusSatu(index) {
  let data = JSON.parse(localStorage.getItem("siswa"));

  if (!Array.isArray(data)) {
    data = [];
  }

  data.splice(index, 1);

  localStorage.setItem("siswa", JSON.stringify(data));

  tampilkan();
}

// Menghapus semua data
function deletedata() {
  localStorage.removeItem("siswa");

  tampilkan();
}

// Jalankan saat halaman dibuka
tampilkan();