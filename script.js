body {
  margin: 0;
  padding: 0;
  min-height: 100vh; /* Diubah ke 100vh agar menutup penuh layar */
  background: linear-gradient(to bottom, #0f172a 0%, #1e293b 100%);
  background-attachment: fixed;
}

footer {
  background: transparent;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 40px;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

#form {
    /* 1. Mengubah warna form menjadi sedikit lebih terang dari background */
    background-color: #1e2640 !important; 
    
    border-radius: 12px;
    
    /* 2. Menambahkan garis tepi (border) tipis semi-transparan sebagai pembatas tegas */
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    
    /* 3. Mengganti glow biru dengan bayangan hitam pekat (Drop Shadow) agar form terlihat timbul */
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5), 
                0px 0px 50px rgba(0, 140, 255, 0.1) !important;
                
    transition: all 0.3s ease-in-out;
}

#form:hover {
    /* Saat di-hover, form sedikit terangkat dan bayangan hitamnya membesar */
    transform: translateY(-2px);
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.6), 
                0px 0px 60px rgba(0, 140, 255, 0.2) !important;
    border-color: rgba(59, 130, 246, 0.3) !important; /* Garis tepi menyala biru tipis */
}

/* MODIFIKASI UTAMA: Aturan dasar untuk semua kotak input */
.form-control {
    background-color: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    color: #ffffff !important;
    border-radius: 6px !important;
    transition: all 0.2s ease-in-out !important;
    caret-color: #3b82f6; /* Kursor ketik warna biru */
}

.form-control::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

/* Efek saat kursor mendekati kotak input (Hover) secara individual */
.form-control:hover {
    background-color: rgba(255, 255, 255, 0.09) !important;
    border-color: rgba(59, 130, 246, 0.6) !important;
}

/* Efek saat kotak input diklik/fokus aktif (Focus) */
.form-control:focus {
    background-color: rgba(15, 23, 42, 0.6) !important; /* Latar belakang menggelap transparan */
    border-color: #3b82f6 !important; /* Border biru cerah tegas */
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.6) !important; /* Efek neon menyala merata di tengah */
    outline: none !important;
}

#hasil {
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px dashed rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
} 

#hasil:hover {
    background-color: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.3);
}

#table {
    margin-top: 40px !important; /* Menjauhkan posisi tabel dari kotak form di atasnya */
    background-color: #0f172a !important; /* Diubah ke warna biru yang lebih gelap dari form (#1e293b) */
    border: 1px solid rgba(255, 255, 255, 0.08); /* Garis tepi tipis agar kotak tabel terlihat tegas */
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); /* Mengubah glow biru menjadi shadow gelap agar tidak tabrakan dengan form */
    transition: all 0.3s ease-in-out;
}

/* Efek saat tabel didekati kursor */
#table:hover {
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.5); /* Shadow menggelap untuk efek dimensi timbul */
    border-color: rgba(59, 130, 246, 0.3); /* Garis tepi tipisnya menyala biru lembut */
}

#tabelData tr:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.02) !important;
}

/* Efek hover interaktif saat baris tabel ditunjuk kursor */
#tabelData tr:hover {
    background-color: rgba(255, 255, 255, 0.05) !important;
    transition: background-color 0.2s ease;
}

#form:hover, #table:hover {
    box-shadow: 0px 0px 50px 5px rgba(0, 140, 255, 0.4);
} 

#btnHitung {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    border: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

#btnHitung:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
}

#btnHitung:focus {
    box-shadow: 0 0 12px rgba(37, 99, 235, 0.8) !important;
    outline: none;
}

#btnHitung:active {
    transform: scale(0.98);
}

.table th, .table td {
    padding: 15px 20px;
    vertical-align: middle;
    color: #ffffff !important; /* Memaksa teks tetap berwarna putih tajam */
    background-color: transparent !important; /* Menghilangkan warna putih bawaan Bootstrap */
}

/* Tambahkan ini untuk memastikan seluruh baris tabel berwarna gelap transparan */
#tabelData tr {
    background-color: rgba(255, 255, 255, 0.02) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

#btnHapus{
    background: linear-gradient(135deg, #eb2525 0%, #d81d1d 100%);
    border: none;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

#btnHapus:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(235, 37, 37, 0.4);
}

#btnHapus:focus {
    box-shadow: 0 0 12px rgba(235, 37, 37, 0.8) !important;
    outline: none;
}

#btnHapus:active {
    transform: scale(0.98);
}
