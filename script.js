let dataSiswa = []; // menampung sementara semua input

 

$("#btnHitung").click(function () { // event listener untuk tombol hitung

   // 1. Ambil nilai mentah dulu untuk pengecekan(validasi input)

    let nama = $("#nama").val().trim(); //trim untuk menghilangkan spasi di awal dan akhir input nama

 

    let valUh1 = $("#uh1").val();

    let valUh2 = $("#uh2").val();

    let valUh3 = $("#uh3").val();

    let valUts = $("#uts").val();

    let valUas = $("#uas").val();

 

    // 2. Cek apakah ada kolom yang kosong

    if (nama === "" || valUh1 === "" || valUh2 === "" || valUh3 === "" || valUts === "" || valUas === "") {

        alert("Mohon isi semua data (Nama dan semua Nilai) terlebih dahulu!");

        return; // Menghentikan fungsi agar tidak lanjut menghitung

    }

 

    // 3. Jika semua terisi, baru jalankan proses perhitungan (kode lama kamu)

    let uh1 = parseFloat(valUh1);

    let uh2 = parseFloat(valUh2);

    let uh3 = parseFloat(valUh3);

    let uts = parseFloat(valUts);

    let uas = parseFloat(valUas);

 

    let rata = (uh1 + uh2 + uh3 + uts + uas) / 5;

 

    let grade = "";

    let kategori = "";

 

    if (rata >= 90) { //logika untuk menentukan grade dan kategori berdasarkan rata-rata

        grade = "A";

        kategori = "Sangat Baik";

    } else if (rata >= 75) {

        grade = "B";

        kategori = "Baik";

    } else {

        grade = "C";

        kategori = "Cukup";

    }

 

    // Tampilkan ke card

    $("#hasil").html(`

        <strong>Keterangan:</strong> ${kategori}

    `);

 

    // Simpan ke array

    dataSiswa.push({ // dimasukkan ke array dataSiswa dengan format objek

        nama: nama,

        rata: rata.toFixed(2), // rata-rata dibulatkan ke 2 angka desimal

        grade: grade

    });

 

    tampilkanTabel();

});

 

function tampilkanTabel() {

    let isi = "";

 

    dataSiswa.forEach(function (item, index) { // untuk menyisir dataSiswa dan menampilkan ke tabel dengan format HTML

        isi += `

        <tr>

            <td>${item.nama}</td>

            <td>${item.rata}</td>

            <td>${item.grade}</td>

            <td>

                <button class="btn btn-danger btn-sm" id="btnHapus" onclick="hapusData(${index})">

                    Hapus

                </button>

            </td>

        </tr>

        `;

    });

 

    $("#tabelData").html(isi); // hasil akhir dari penyisiran dataSiswa dimasukkan ke dalam tbody dengan id tabelData untuk ditampilkan di halaman

}

 

function hapusData(index) {

    dataSiswa.splice(index, 1);

    tampilkanTabel();

}
