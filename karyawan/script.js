function displayCurrentEmployeeData() {
    const currentEmployeeId = localStorage.getItem('currentEmployeeId');
    if (currentEmployeeId) {
      // Di sini, Anda bisa mengambil data karyawan berdasarkan ID dari penyimpanan (misalnya: local storage)
      const employees = JSON.parse(localStorage.getItem('employeeData'));
      const currentEmployee = employees.find(employee => employee.id === parseInt(currentEmployeeId));
  
      if (currentEmployee) {
        // Tampilkan data karyawan pada halaman karyawan.html
        document.getElementById('employeeName').innerText = currentEmployee.name;
        document.getElementById('employeeJobTitle').innerText = currentEmployee.jobTitle;
        // Tambahkan kode untuk menampilkan data karyawan lainnya pada elemen HTML yang sesuai
      } else {
        // Jika data karyawan dengan ID yang sesuai tidak ditemukan
        console.log('Data karyawan tidak ditemukan');
      }
    } else {
      // Jika tidak ada ID karyawan yang tersimpan, maka redirect atau lakukan tindakan lain
      // Misalnya, arahkan kembali ke halaman input data karyawan
      window.location.href = 'tambah-karyawan/tambah-karyawan.html'; // Ganti dengan URL halaman input data karyawan Anda
    }
  }
  
  // Panggil fungsi untuk menampilkan data karyawan saat halaman karyawan dimuat
  document.addEventListener('DOMContentLoaded', () => {
    displayCurrentEmployeeData();
  });
  // Fungsi untuk menangani aksi absen saat tombol diklik
function handleAbsence() {
    // Di sini, Anda dapat menambahkan logika untuk melakukan absensi, misalnya mengirimkan data absensi ke server atau menyimpan status absensi ke dalam penyimpanan
  
    // Contoh: Menampilkan pesan bahwa absensi berhasil
    alert('Anda telah melakukan absensi.');
  }
  
  // Event listener untuk tombol absensi
  const absenceButton = document.getElementById('absenceButton');
  if (absenceButton) {
    absenceButton.addEventListener('click', handleAbsence);
  }
  