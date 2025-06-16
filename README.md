# Password Generator Super Kuat

Sebuah aplikasi web untuk menghasilkan password yang sangat kuat dengan berbagai opsi penyesuaian.

## Fitur Utama

- Menghasilkan password acak yang sangat kuat
- Panjang password dapat disesuaikan (8-64 karakter)
- Opsi untuk menyertakan/mengecualikan berbagai jenis karakter:
  - Huruf besar (A-Z)
  - Huruf kecil (a-z)
  - Angka (0-9)
  - Simbol (!@#$%^&*)
- Opsi lanjutan untuk meningkatkan keamanan:
  - Mengecualikan karakter yang mirip (i, l, 1, L, o, 0, O)
  - Mengecualikan simbol ambigu
- Indikator visual kekuatan password
- Tombol copy untuk menyalin password dengan mudah

## Tools yang Digunakan

- **Visual Studio Code** - Editor kode untuk pengembangan
- **HTML5** - Struktur dasar aplikasi web
- **CSS3** - Styling dan tampilan antarmuka
- **JavaScript** - Logika dan fungsi aplikasi
- **Git** (opsional) - Untuk version control

## Cara Instalasi

### Metode 1: Menggunakan Live Server di VS Code

1. Pastikan Anda telah menginstall [Visual Studio Code](https://code.visualstudio.com/)
2. Install ekstensi "Live Server" di VS Code
3. Clone atau download repository ini
4. Buka folder project di VS Code
5. Buka file `index.html`
6. Klik kanan pada file dan pilih "Open with Live Server"
7. Aplikasi akan terbuka di browser default Anda

### Metode 2: Membuka Langsung di Browser

1. Download repository ini
2. Ekstrak file zip jika diperlukan
3. Buka file `index.html` dengan browser favorit Anda (Chrome, Firefox, Edge, dll.)

### Metode 3: Menjalankan di Server Web

1. Upload semua file ke server web Anda
2. Akses melalui URL yang sesuai (contoh: `https://domain-anda.com/password-generator/index.html`)

## Cara Penggunaan

1. **Atur panjang password**:
   - Gunakan slider untuk memilih panjang password (8-64 karakter)

2. **Pilih jenis karakter**:
   - Centang opsi yang ingin Anda sertakan dalam password:
     - Huruf besar (A-Z)
     - Huruf kecil (a-z)
     - Angka (0-9)
     - Simbol (!@#$%^&*)

3. **Opsi lanjutan (opsional)**:
   - "Exclude Similar Characters" - menghilangkan karakter yang mirip
   - "Exclude Ambiguous Symbols" - menghilangkan simbol yang ambigu

4. **Generate password**:
   - Klik tombol "Generate Password" untuk membuat password baru

5. **Salin password**:
   - Klik tombol "Copy" untuk menyalin password ke clipboard
   - Password akan tersalin dan tombol akan berubah menjadi "Copied!" sementara

6. **Indikator kekuatan**:
   - Lihat indikator kekuatan password di bagian bawah
   - Warna akan berubah sesuai kekuatan password (Merah = Lemah, Kuning = Sedang, Hijau = Kuat)

## Tips Penggunaan

1. Untuk password terkuat:
   - Gunakan panjang minimal 16 karakter
   - Centang semua opsi karakter
   - Aktifkan opsi "Exclude Similar Characters"

2. Jika Anda membutuhkan password yang mudah diketik:
   - Nonaktifkan opsi simbol
   - Nonaktifkan opsi "Exclude Similar Characters"

3. Untuk password yang harus dimasukkan secara manual:
   - Pertimbangkan untuk menonaktifkan simbol ambigu
   - Gunakan panjang yang lebih pendek (12-16 karakter)

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan:
1. Fork repository
2. Buat branch fitur Anda (`git checkout -b fitur-baru`)
3. Commit perubahan Anda (`git commit -am 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
