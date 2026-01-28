import { auth } from "./firebase_config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// ====== CHUYỂN FORM ======
const btnShowLogin = document.getElementById("btnShowLogin");
const btnShowSignup = document.getElementById("btnShowSignup");
const formLogin = document.getElementById("formLogin");
const formSignup = document.getElementById("formSignup");

btnShowLogin.onclick = () => {
  formLogin.classList.remove("d-none");
  formSignup.classList.add("d-none");
};

btnShowSignup.onclick = () => {
  formSignup.classList.remove("d-none");
  formLogin.classList.add("d-none");
};

// ====== NAV ======
const navLogin = document.getElementById("nav-login");
const navLogout = document.getElementById("nav-logout");
const navAccount = document.getElementById("nav-account");

// ====== THEO DÕI ĐĂNG NHẬP ======
onAuthStateChanged(auth, (user) => {
  if (user) {
    navLogin.classList.add("d-none");
    navLogout.classList.remove("d-none");
    navAccount.classList.remove("d-none");
    navAccount.textContent = user.email;
  } else {
    navLogin.classList.remove("d-none");
    navLogout.classList.add("d-none");
    navAccount.classList.add("d-none");
  }
});

// ====== ĐĂNG KÝ ======
formSignup.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupEmail.value.trim();
  const password = signupPassword.value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Đăng ký thành công!");
    btnShowLogin.click();
  } catch (err) {
    alert(err.message);
  }
});

// ====== ĐĂNG NHẬP ======
formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginEmail.value.trim();
  const password = loginPassword.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Đăng nhập thành công!");
    window.location.href = "../index.html";
  } catch (err) {
    alert("Sai email hoặc mật khẩu!");
  }
});

// ====== ĐĂNG XUẤT ======
navLogout.addEventListener("click", async (e) => {
  e.preventDefault();
  await signOut(auth);
  alert("Đã đăng xuất!");
  window.location.href = "../index.html";
});
