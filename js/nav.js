// ======== ẨN/HIỆN LOGIN - LOGOUT - ACCOUNT ========

// Giả lập dữ liệu đăng nhập (sau này bạn sẽ thay bằng login thật)
let username = JSON.parse(localStorage.getItem("currentUser"))?.username;

// Lấy phần tử
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const accountLink = document.getElementById("account-link");
const accountName = document.getElementById("account-name");

// Hàm cập nhật giao diện dựa theo trạng thái đăng nhập
function updateNavbar() {
  if (username) {
    // Đã đăng nhập
    loginBtn.classList.add("d-none");
    logoutBtn.classList.remove("d-none");
    accountLink.classList.remove("d-none");
    accountName.textContent = username;
  } else {
    // Chưa đăng nhập
    loginBtn.classList.remove("d-none");
    logoutBtn.classList.add("d-none");
    accountLink.classList.add("d-none");
  }
}

// Khi nhấn logout
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("currentUser");
  username = null;
  updateNavbar();
});

// Cập nhật khi load trang
updateNavbar();
