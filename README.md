# SISTEM KOMUNIKASI BERBASIS DETEKSI EKSPRESI WAJAH MENGGUNAKAN FACE API  DAN TENSORFLOW JS UNTUK PENDERITA LUMPUH BADAN DAN PITA SUARA RUSAK

Sebuah aplikasi yang dapat membuat proses komunikasi antara penderita lumpuh badan dan pihak anggota keluarga menjadi lebih fleksibel tanpa harus berada di ruangan yang sama.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hagendodo/app-face-saver.git

2. Install Dependencies Frontend
   <br>Pastikan berada di root directory
   ```bash
   cd frontend
   npm i

3. Install Dependecies Backend
  <br>Pastikan berada di root directory
  ```bash
     cd backend
     npm i
```

4. Import Database
  - Buka PhpMyAdmin
  - Pilih menu Import dibagian atas
  - Import file facesaver.sql

5. Ganti TELEGRAM_CHAT_ID
   <br>ubah pada file .env di folder bakcend.
   <br>Cara mendapatkan TELEGRAM_CHAT_ID:
   <br><a href="https://diyusthad.com/2022/03/how-to-get-your-telegram-chat-id.html">Lihat Disini</a>

7. Run the Backend App
  Pastikan berada di root directory
  ```bash
     cd backend
     npm run devStart
   ```
7. Run the Frontend App
  Pastikan berada di root directory
  ```bash
     cd frontend
     npm run dev
```
