// Fungsi untuk mendapatkan data karyawan dari localStorage
function getEmployeesFromStorage() {
    const storedData = localStorage.getItem('employeeData');
    return storedData ? JSON.parse(storedData) : [];
  }
  
  // Fungsi untuk menampilkan data karyawan di dashboard admin
  function displayEmployees() {
    const employees = getEmployeesFromStorage();
    const employeeList = document.getElementById('employeeList');
  
    if (employees.length === 0) {
      employeeList.innerHTML = '<p>Tidak ada data karyawan.</p>';
    } else {
      employeeList.innerHTML = ''; // Mengosongkan konten sebelum menambahkan data karyawan
  
      employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee');
        employeeDiv.innerHTML = `
          <p><strong>ID:</strong> ${employee.id}</p>
          <p><strong>Nama:</strong> ${employee.name}</p>
          <p><strong>Jabatan:</strong> ${employee.jobTitle}</p>
          <!-- Tambahkan informasi lainnya yang ingin ditampilkan -->
          <button onclick="deleteEmployee(${employee.id})">Hapus</button>
        `;
        employeeList.appendChild(employeeDiv);
      });
    }
  }
  
  // Fungsi untuk menghapus karyawan berdasarkan ID
  function deleteEmployee(employeeId) {
    let employees = getEmployeesFromStorage();
    employees = employees.filter(employee => employee.id !== employeeId);
    localStorage.setItem('employeeData', JSON.stringify(employees));
    displayEmployees();
  }
  
  // Panggil fungsi untuk menampilkan data karyawan saat halaman dimuat
  document.addEventListener('DOMContentLoaded', () => {
    displayEmployees();
  });
  