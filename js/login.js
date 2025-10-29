// --- Form chuyển đổi ---
const btnShowLogin = document.getElementById("btnShowLogin");
const btnShowSignup = document.getElementById("btnShowSignup");
const formLogin = document.getElementById("formLogin");
const formSignup = document.getElementById("formSignup");

btnShowLogin.addEventListener("click", () => {
  formLogin.classList.remove("d-none");
  formSignup.classList.add("d-none");
  btnShowLogin.classList.add("btn-primary");
  btnShowSignup.classList.remove("btn-primary");
});

btnShowSignup.addEventListener("click", () => {
  formSignup.classList.remove("d-none");
  formLogin.classList.add("d-none");
  btnShowSignup.classList.add("btn-primary");
  btnShowLogin.classList.remove("btn-primary");
});

// --- Lấy các phần tử nav ---
const navLogin = document.getElementById("nav-login");
const navLogout = document.getElementById("nav-logout");
const navAccount = document.getElementById("nav-account");

// --- Kiểm tra trạng thái đăng nhập ---
function updateNavbar() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    navLogin.classList.add("d-none");
    navLogout.classList.remove("d-none");
    navAccount.classList.remove("d-none");
    navAccount.textContent = currentUser.username;
  } else {
    navLogin.classList.remove("d-none");
    navLogout.classList.add("d-none");
    navAccount.classList.add("d-none");
  }
}
updateNavbar();

// --- Xử lý đăng ký ---
formSignup.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  // Kiểm tra username trùng
  let usernameTaken = false;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === "currentUser") continue;
    const user = JSON.parse(localStorage.getItem(key));
    if (user.username === username) {
      usernameTaken = true;
      break;
    }
  }

  if (usernameTaken) {
    alert("Username đã tồn tại, vui lòng chọn tên khác!");
    return;
  }

  if (localStorage.getItem(email)) {
    alert("Email này đã được đăng ký!");
    return;
  }

  // Lưu tài khoản
  localStorage.setItem(email, JSON.stringify({ username, password }));
  alert("Đăng ký thành công! Vui lòng đăng nhập.");
  formSignup.reset();
  btnShowLogin.click();
});

// --- Xử lý đăng nhập ---
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const userData = localStorage.getItem(email);
  if (!userData) {
    alert("Email không tồn tại!");
    return;
  }

  const user = JSON.parse(userData);
  if (user.password !== password) {
    alert("Sai mật khẩu!");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  alert("Đăng nhập thành công!");
  updateNavbar();
  window.location.href = "../index.html";
});

// --- Đăng xuất ---
navLogout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("currentUser");
  alert("Đã đăng xuất!");
  updateNavbar();
  window.location.href = "../index.html";
});
