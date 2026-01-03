// src/pages/auth.js
import { showModal } from '../components/modal.js';

// LOGIN PAGE
export async function Login() {
    return `
    <main class="auth-main">
      <div class="container auth-container">
        <h1 class="auth-title">Log in / sign up</h1>
        
        <div class="auth-form-wrapper">
          <form class="auth-form" id="loginForm">
            <div class="auth-form-group">
              <label class="auth-form-label">Email</label>
              <input 
                type="email" 
                class="auth-form-input" 
                placeholder="Enter your email address"
                id="loginEmail"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">Password</label>
              <input 
                type="password" 
                class="auth-form-input" 
                placeholder="Enter your password"
                id="loginPassword"
                required
              >
            </div>
            
            <a href="#/forgot-password" class="auth-forgot-link">forgot password?</a>
            
            <button type="submit" class="auth-submit-btn">
              Log in
            </button>
            
            <div class="auth-divider">
              <span>or</span>
            </div>
            
            <button type="button" class="auth-google-btn" id="googleSignInBtn">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z"/>
                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
              </svg>
              Sign in with Google
            </button>
            
            <button type="button" class="auth-signup-btn" id="goToSignupBtn">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </main>
  `;
}
// SIGNUP PAGE
export async function Signup() {
    return `
    <main class="auth-main">
      <div class="container auth-container">
        <h1 class="auth-title">Sign up</h1>
        
        <div class="auth-form-wrapper">
          <form class="auth-form" id="signupForm">
            <div class="auth-form-group">
              <label class="auth-form-label">Email</label>
              <input 
                type="email" 
                class="auth-form-input" 
                placeholder="Enter your email address"
                id="signupEmail"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">First name</label>
              <input 
                type="text" 
                class="auth-form-input" 
                placeholder="Enter your first name"
                id="signupFirstName"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">Last name</label>
              <input 
                type="text" 
                class="auth-form-input" 
                placeholder="Enter your last name"
                id="signupLastName"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">Password</label>
              <input 
                type="password" 
                class="auth-form-input" 
                placeholder="Enter your password"
                id="signupPassword"
                required
              >
            </div>
            
            <div class="auth-form-group">
              <label class="auth-form-label">Phone number</label>
              <input 
                type="tel" 
                class="auth-form-input" 
                placeholder="Enter your phone number"
                id="signupPhone"
              >
            </div>
            
            <button type="submit" class="auth-submit-btn">
              Create account
            </button>
            
            <div class="auth-divider">
              <span>or</span>
            </div>
            
            <button type="button" class="auth-google-btn" id="googleSignUpBtn">
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
                <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z"/>
                <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
              </svg>
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </main>
  `;
}
// Initialize auth pages
export function initAuth() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const goToSignupBtn = document.getElementById('goToSignupBtn');
    const googleSignInBtn = document.getElementById('googleSignInBtn');
    const googleSignUpBtn = document.getElementById('googleSignUpBtn');

    // Login form - FIXED VERSION
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Check if user already exists in localStorage
            const existingUser = localStorage.getItem('aura_user');

            if (existingUser) {
                // User exists - restore their data
                const userData = JSON.parse(existingUser);

                // Verify email matches (simple check)
                if (userData.email === email) {
                    // Just set logged in flag - DON'T overwrite user data
                    localStorage.setItem('aura_isLoggedIn', 'true');
                    showModal('Success', 'Welcome back, ' + userData.firstName + '!', 'success');

                    setTimeout(() => {
                        window.location.hash = '#/profile';
                    }, 1500);
                } else {
                    showModal('Error', 'Invalid email or password', 'error');
                    return;
                }
            } else {
                // No user found - show error
                showModal('Error', 'No account found. Please sign up first.', 'error');
                return;
            }
        });
    }

    // Signup form
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('signupEmail').value;
            const firstName = document.getElementById('signupFirstName').value;
            const lastName = document.getElementById('signupLastName').value;
            const password = document.getElementById('signupPassword').value;
            const phone = document.getElementById('signupPhone').value;

            if (password.length < 8) {
                showModal('Error', 'Password must be at least 8 characters long', 'error');
                return;
            }

            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                isLoggedIn: true,
                memberLevel: 'Silver',
                points: 0
            };

            localStorage.setItem('aura_user', JSON.stringify(userData));
            localStorage.setItem('aura_isLoggedIn', 'true');

            showModal('Success', 'Account created successfully!', 'success');

            setTimeout(() => {
                window.location.hash = '#/profile';
            }, 1500);
        });
    }

    // Go to signup button
    if (goToSignupBtn) {
        goToSignupBtn.addEventListener('click', () => {
            window.location.hash = '#/signup';
        });
    }

    // Google sign in (simulate)
    if (googleSignInBtn) {
        googleSignInBtn.addEventListener('click', () => {
            showModal('Info', 'Google Sign-In coming soon!', 'info');
        });
    }

    if (googleSignUpBtn) {
        googleSignUpBtn.addEventListener('click', () => {
            showModal('Info', 'Google Sign-Up coming soon!', 'info');
        });
    }
}

// Check if user is logged in
export function isLoggedIn() {
    return localStorage.getItem('aura_isLoggedIn') === 'true';
}

// Logout function
export function logout() {
    localStorage.removeItem('aura_isLoggedIn');
    showModal('Success', 'You have been logged out', 'success');

    setTimeout(() => {
        window.location.hash = '#/login';
    }, 1500);
}