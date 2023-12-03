// Fungsi untuk mendapatkan data karyawan dari localStorage
function getEmployeesFromStorage() {
  const storedData = localStorage.getItem('employeeData');
  return storedData ? JSON.parse(storedData) : [];
}

// Fungsi untuk menampilkan nama dan jabatan karyawan dalam dropdown
function populateEmployeeList() {
  const employees = getEmployeesFromStorage();
  const select = document.getElementById('employeeSelect');

  employees.forEach(employee => {
    const option = document.createElement('option');
    option.value = employee.id;
    option.textContent = `${employee.name} - ${employee.jobTitle}`; // Tambahkan jabatan disini
    select.appendChild(option);
  });
}


// Panggil fungsi untuk menampilkan nama karyawan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  populateEmployeeList();
});

// Logika untuk menangani proses absensi
function handleAttendance() {
  const selectedEmployeeId = document.getElementById('employeeSelect').value;
  const selectedEmployeeName = document.getElementById('employeeSelect').options[document.getElementById('employeeSelect').selectedIndex].text;
  
  if (selectedEmployeeId && selectedEmployeeName) {
    // Cek apakah sudah absen hari ini
    const attendanceData = localStorage.getItem('attendanceData') ? JSON.parse(localStorage.getItem('attendanceData')) : [];
    const today = new Date().toISOString().split('T')[0]; // Mengambil tanggal hari ini

    const hasAttendedToday = attendanceData.some(entry => entry.id === selectedEmployeeId && entry.date.includes(today));

    if (hasAttendedToday) {
      alert(`${selectedEmployeeName} telah absen hari ini.`);
    } else {
      alert(`${selectedEmployeeName} berhasil diabsen.`);

      // Menambahkan data kehadiran baru
      attendanceData.push({ id: selectedEmployeeId, name: selectedEmployeeName, date: new Date().toISOString() });

      // Menyimpan kembali data kehadiran ke localStorage
      localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
    }
  } else {
    alert('Pilih nama karyawan terlebih dahulu.');
  }
}

