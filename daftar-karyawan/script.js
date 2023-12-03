// Fungsi untuk memeriksa login admin
function checkAdminLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Pemeriksaan sederhana, ganti dengan verifikasi yang lebih aman di lingkungan produksi
    if (username === 'admin' && password === 'password') {
      // Jika login berhasil
      document.getElementById('loginMessage').innerText = 'Login berhasil!';
      // Simpan data admin ke localStorage
      const adminData = {
        username: username,
        role: 'admin' // Tambahkan data lain jika diperlukan
      };
      localStorage.setItem('adminData', JSON.stringify(adminData));
      // Lakukan pengalihan halaman ke dashboard atau halaman admin lainnya
      window.location.href = 'dashboard/dashboard-admin.html'; // Ganti dengan halaman tujuan setelah login berhasil
    } else {
      // Jika login gagal
      document.getElementById('loginMessage').innerText = 'Username atau password salah. Silakan coba lagi.';
    }
  }
  
  // Event listener untuk saat form login disubmit
  document.getElementById('loginForm').addEventListener('submit', checkAdminLogin);
  