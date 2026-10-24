
/* =========================
   1. ELEMENTS
========================= */
const form = document.querySelector("#nilaiForm");
const inputNama = document.querySelector("#nama");
const inputUH1 = document.querySelector("#uh1");
const inputUH2 = document.querySelector("#uh2");
const inputUH3 = document.querySelector("#uh3");
const inputUTS = document.querySelector("#uts");
const inputUAS = document.querySelector("#uas");

const tabel = document.querySelector("#dataNilai");
const hasil = document.querySelector("#hasil");
const tombolHitung = document.querySelector("#hitung");

let dataSiswa = JSON.parse(
    localStorage.getItem("rekapNilaiSiswa") || "[]"
);

let editId = null;

/* =========================
   2. VALIDASI DAN NILAI
========================= */
function ambilNilai() {
    const nilai = [
        inputUH1.value,
        inputUH2.value,
        inputUH3.value,
        inputUTS.value,
        inputUAS.value
    ].map(Number);

    if (
        !inputNama.value.trim() ||
        [inputUH1, inputUH2, inputUH3, inputUTS, inputUAS]
            .some(input => input.value.trim() === "")
    ) {
        alert("Mohon isi nama dan semua nilai terlebih dahulu.");
        return null;
    }

    if (nilai.some(n => !Number.isFinite(n) || n < 0 || n > 100)) {
        alert("Nilai harus berupa angka antara 0 sampai 100.");
        return null;
    }

    return {
        nama: inputNama.value.trim(),
        uh1: nilai[0],
        uh2: nilai[1],
        uh3: nilai[2],
        uts: nilai[3],
        uas: nilai[4]
    };
}

function hitungRataRata(siswa) {
    return (
        siswa.uh1 +
        siswa.uh2 +
        siswa.uh3 +
        siswa.uts +
        siswa.uas
    ) / 5;
}

function tentukanGrade(rata) {
    if (rata >= 90) return "A";
    if (rata >= 80) return "B";
    if (rata >= 70) return "C";
    return "D";
}

function simpanData() {
    localStorage.setItem(
        "rekapNilaiSiswa",
        JSON.stringify(dataSiswa)
    );
}

/* =========================
   3. TAMPILKAN HASIL
========================= */
function tampilkanHasil(siswa) {
    const rata = hitungRataRata(siswa);
    const grade = tentukanGrade(rata);

    hasil.textContent =
        `${siswa.nama} — Rata-rata: ${rata.toFixed(2)} | Grade: ${grade}`;
}

/* =========================
   4. RENDER TABEL
========================= */
function renderTabel() {
    tabel.replaceChildren();

    if (dataSiswa.length === 0) {
        const baris = document.createElement("tr");
        const kolom = document.createElement("td");

        kolom.colSpan = 4;
        kolom.textContent = "Belum ada data siswa.";
        kolom.style.textAlign = "center";
        kolom.style.padding = "24px";

        baris.append(kolom);
        tabel.append(baris);
        return;
    }

    dataSiswa.forEach(siswa => {
        const baris = document.createElement("tr");
        const rata = hitungRataRata(siswa);
        const grade = tentukanGrade(rata);

        const kolomNama = document.createElement("td");
        kolomNama.textContent = siswa.nama;

        const kolomRata = document.createElement("td");
        kolomRata.textContent = rata.toFixed(2);

        const kolomGrade = document.createElement("td");
        const badge = document.createElement("span");

        badge.className = "grade " +
            (grade === "A" ? "grade-a" :
             grade === "B" ? "grade-b" :
             grade === "C" ? "grade-c" : "grade-d");

        badge.textContent = grade;
        kolomGrade.append(badge);

        const kolomAksi = document.createElement("td");
        const tombolEdit = document.createElement("button");
        const tombolHapus = document.createElement("button");

        const wadahAksi = document.createElement("div");
        wadahAksi.className = "action-buttons";

        tombolEdit.type = "button";
        tombolEdit.textContent = "Edit";
        tombolEdit.className = "btn-edit";
        tombolEdit.addEventListener("click", () => editSiswa(siswa.id));

        tombolHapus.type = "button";
        tombolHapus.textContent = "Hapus";
        tombolHapus.className = "btn-delete";
        tombolHapus.addEventListener("click", () => hapusSiswa(siswa.id));

        wadahAksi.append(tombolEdit, tombolHapus);
        kolomAksi.append(wadahAksi);

        baris.append(
            kolomNama,
            kolomRata,
            kolomGrade,
            kolomAksi
        );

        tabel.append(baris);
    });
}

/* =========================
   5. TAMBAH / EDIT SISWA
========================= */
form.addEventListener("submit", event => {
    event.preventDefault();

    const siswa = ambilNilai();

    if (!siswa) return;

    if (editId !== null) {
        const index = dataSiswa.findIndex(
            item => item.id === editId
        );

        if (index !== -1) {
            dataSiswa[index] = {
                ...dataSiswa[index],
                ...siswa
            };
        }

        editId = null;
        tombolHitung.textContent = "Hitung";
    } else {
        dataSiswa.push({
            id: crypto.randomUUID(),
            ...siswa
        });
    }

    tampilkanHasil(siswa);
    simpanData();
    renderTabel();
    form.reset();
});

/* =========================
   6. EDIT DATA
========================= */
function editSiswa(id) {
    const siswa = dataSiswa.find(item => item.id === id);

    if (!siswa) return;

    inputNama.value = siswa.nama;
    inputUH1.value = siswa.uh1;
    inputUH2.value = siswa.uh2;
    inputUH3.value = siswa.uh3;
    inputUTS.value = siswa.uts;
    inputUAS.value = siswa.uas;

    editId = id;
    tombolHitung.textContent = "Simpan Perubahan";

    form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    inputNama.focus();
}

/* =========================
   7. HAPUS DATA
========================= */
function hapusSiswa(id) {
    const siswa = dataSiswa.find(item => item.id === id);

    if (!siswa) return;

    if (!confirm(`Hapus data ${siswa.nama}?`)) return;

    dataSiswa = dataSiswa.filter(item => item.id !== id);

    if (editId === id) {
        editId = null;
        form.reset();
        tombolHitung.textContent = "Hitung";
    }

    simpanData();
    renderTabel();

    hasil.textContent = dataSiswa.length
        ? "Data berhasil diperbarui."
        : "Belum ada data siswa.";
}

/* =========================
   8. HITUNG TANPA MENYIMPAN
========================= */
tombolHitung.addEventListener("click", () => {
    const siswa = ambilNilai();

    if (siswa) {
        tampilkanHasil(siswa);
    }
});

/* =========================
   9. LOAD DATA AWAL
========================= */
renderTabel();
