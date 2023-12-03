// Mendapatkan data karyawan dari penyimpanan (localStorage)
function getEmployeesFromStorage() {
  const storedData = localStorage.getItem('employeeData');
  return storedData ? JSON.parse(storedData) : [];
}

// Mendapatkan data absensi dari penyimpanan (localStorage)
function getAttendanceData() {
  const storedData = localStorage.getItem('attendanceData');
  return storedData ? JSON.parse(storedData) : [];
}

// Menyimpan data absensi ke penyimpanan (localStorage)
function saveAttendanceData(attendanceData) {
  // Filter data absensi untuk menghapus nama karyawan yang duplicate
  const uniqueAttendanceData = [...new Map(attendanceData.map(item => [item.id, item])).values()];

  localStorage.setItem('attendanceData', JSON.stringify(uniqueAttendanceData));
}

// Fungsi untuk menampilkan data karyawan yang telah melakukan absensi
function displayAttendance() {
  const attendanceData = getAttendanceData();
  const employeeList = document.getElementById('employeeList');
  let html = '';

  attendanceData.forEach((attendedEmployee, index) => {
    html += `<tr>
                <td>${index + 1}</td>
                <td>${attendedEmployee.name}</td>
            </tr>`;
  });

  employeeList.innerHTML = html;
}

// Panggil fungsi untuk menampilkan data kehadiran saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  displayAttendance();
});


// Fungsi untuk mereset data kehadiran
function resetAttendanceData() {
  localStorage.removeItem('attendanceData');
  displayAttendance(); // Tampilkan ulang data kehadiran setelah mereset
}

// Logika untuk menangani proses absensi
function handleAttendance() {
  const employees = getEmployeesFromStorage();
  const attendanceData = getAttendanceData();
  const employeeId = document.getElementById('employeeSelect').value;
  const index = employees.findIndex(employee => employee.id === employeeId);

  if (index !== -1) {
    // Lakukan logika verifikasi dan simpan kehadiran
    // ...

    // Simpan data kehadiran ke local storage
    attendanceData.push({ id: employeeId, name: employees[index].name });
    saveAttendanceData(attendanceData);

    // Tampilkan ulang data kehadiran setelah proses absensi
    displayAttendance();
  } else {
    alert('Karyawan tidak ditemukan.');
  }
}

// Panggil fungsi untuk menampilkan data kehadiran saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  displayAttendance();
});
