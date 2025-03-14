// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   User
// } from 'firebase/auth';



import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBwlTI6nnIPrkqh9GXMRba1I7yKk9t6CeQ",
    authDomain: "fir-authentication-e3480.firebaseapp.com",
    projectId: "fir-authentication-e3480",
    storageBucket: "fir-authentication-e3480.firebasestorage.app",
    messagingSenderId: "54309725454",
    appId: "1:54309725454:web:233687cba70fc5195ce35f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signupForm = document.getElementById('signup-form') as HTMLFormElement;
const loginForm = document.getElementById('login-form') as HTMLFormElement;
const logoutBtn = document.getElementById('logout-btn') as HTMLButtonElement;
const welcomeMessage = document.getElementById('welcome-message') as HTMLParagraphElement;
const userInfoDiv = document.getElementById('user-info') as HTMLDivElement;
const authFormsDiv = document.getElementById('auth-forms') as HTMLDivElement;

signupForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();  // Stop loading !

    const email = (document.getElementById('signup-email') as HTMLInputElement).value;
    const password = (document.getElementById('signup-password') as HTMLInputElement).value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User signed up:', userCredential.user);
            signupForm.reset();
        })
        .catch((error) => {
            console.error('Error during sign up:', error);
            alert(error.message);
        });
});

loginForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const email = (document.getElementById('login-email') as HTMLInputElement).value;
    const password = (document.getElementById('login-password') as HTMLInputElement).value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
            loginForm.reset();
        })
        .catch((error) => {
            console.error('Error during login:', error);
            alert(error.message);
        });
});

logoutBtn.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log('User signed out');
        })
        .catch((error) => {
            console.error('Error during sign out:', error);
            alert(error.message);
        });
});

onAuthStateChanged(auth, (user: any | null) => {
    if (user) {
        welcomeMessage.textContent = `Welcome, ${user.email}`;
        userInfoDiv.style.display = 'block';
        authFormsDiv.style.display = 'none';
    } else {
        welcomeMessage.textContent = '';
        userInfoDiv.style.display = 'none';
        authFormsDiv.style.display = 'block';
    }
});