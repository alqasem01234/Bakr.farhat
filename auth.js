// تهيئة فيربيز: استبدل القيم داخل firebaseConfig بالقيم الفعلية من إعدادات مشروع Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyDATuWFL00x7sGpzfNAlygtE1bYQ8OOChk",
  authDomain: "bakrfarhatsite.firebaseapp.com",
  projectId: "bakrfarhatsite",
  storageBucket: "bakrfarhatsite.firebasestorage.app",
  messagingSenderId: "977535530510",
  appId: "1:977535530510:web:89e187e4f12b7ec7f2ee5f",
  measurementId: "G-75QP5W9V96"
  // يمكن إضافة باقي القيم مثل storageBucket و messagingSenderId إذا احتجتها لاحقًا
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// عناصر DOM
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userInfo = document.getElementById('user-info');
const userEmailSpan = document.getElementById('user-email');
const authForms = document.getElementById('auth-forms');
const authError = document.getElementById('auth-error');

// وظيفة التسجيل
signupBtn.addEventListener('click', () => {
  const email = signupEmail.value;
  const password = signupPassword.value;
  auth.createUserWithEmailAndPassword(email, password)
    .catch(error => authError.textContent = error.message);
});

// وظيفة الدخول
loginBtn.addEventListener('click', () => {
  const email = loginEmail.value;
  const password = loginPassword.value;
  auth.signInWithEmailAndPassword(email, password)
    .catch(error => authError.textContent = error.message);
});

// وظيفة الخروج
logoutBtn.addEventListener('click', () => {
  auth.signOut();
});

// مراقبة حالة المستخدم
auth.onAuthStateChanged(user => {
  if (user) {
    userEmailSpan.textContent = user.email;
    userInfo.style.display = 'block';
    authForms.style.display = 'none';
    authError.textContent = '';
  } else {
    userInfo.style.display = 'none';
    authForms.style.display = 'block';
  }
});
