// Mendapatkan data karyawan dari penyimpanan (localStorage)
function getEmployeesFromStorage() {
  const storedData = localStorage.getItem('employeeData');
  return storedData ? JSON.parse(storedData) : [];
}

// Menyimpan data karyawan ke penyimpanan (localStorage)
function saveEmployeesToStorage(employees) {
  localStorage.setItem('employeeData', JSON.stringify(employees));
}

// Fungsi untuk menampilkan data karyawan
function displayEmployees() {
  const employees = getEmployeesFromStorage();
  // Implementasi logika untuk menampilkan data karyawan, misalnya dalam bentuk tabel atau daftar
}
function displayNotification() {
  const notification = document.getElementById('notification');
  notification.innerText = 'Karyawan baru berhasil ditambahkan!';
  notification.style.display = 'block';

  // Sembunyikan pemberitahuan setelah beberapa detik (opsional)
  setTimeout(() => {
    notification.style.display = 'none';
  }, 5000); // Pesan akan disembunyikan setelah 5 detik (5000 milidetik)
}
// Fungsi untuk menambahkan karyawan baru
function addNewEmployee(event) {
  event.preventDefault();

  const newName = document.getElementById('employeeName').value.trim();
  const newJobTitle = document.getElementById('employeeJobTitle').value.trim();
  const newAddress = document.getElementById('employeeAddress').value.trim();
  const newEmail = document.getElementById('employeeEmail').value.trim();
  const newPhoneNumber = document.getElementById('employeePhoneNumber').value.trim();
  const newSocialMedia = document.getElementById('employeeSocialMedia').value.trim();
  const newBio = document.getElementById('employeeBio').value.trim();

  if (newName && newJobTitle && newAddress && newEmail && newPhoneNumber && newSocialMedia && newBio) {
    const employees = getEmployeesFromStorage();
    const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
    
    const newEmployee = { 
      id: newId, 
      name: newName,
      jobTitle: newJobTitle,
      address: newAddress,
      email: newEmail,
      phoneNumber: newPhoneNumber,
      socialMedia: newSocialMedia,
      bio: newBio
    };
    
    employees.push(newEmployee);
    saveEmployeesToStorage(employees);

    localStorage.setItem('currentEmployeeId', newId);

    // Arahkan ke halaman karyawan
    window.location.href = '../karyawan/karyawan.html'; 

    // Tambahkan logika untuk menampilkan karyawan setelah ditambahkan
    displayEmployees();

    alert('Karyawan baru berhasil ditambahkan!');
    document.getElementById('employeeName').value = '';
    document.getElementById('employeeJobTitle').value = '';
    document.getElementById('employeeAddress').value = '';
    document.getElementById('employeeEmail').value = '';
    document.getElementById('employeePhoneNumber').value = '';
    document.getElementById('employeeSocialMedia').value = '';
    document.getElementById('employeeBio').value = '';
  } else {
    alert('Silakan lengkapi semua informasi karyawan.');
  }
}

// Event listener untuk saat form disubmit (menambah karyawan)
document.getElementById('newEmployeeForm').addEventListener('submit', addNewEmployee);

// Panggil fungsi untuk menampilkan karyawan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  displayEmployees();
});
