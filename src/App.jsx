import { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage(p => Math.min(p + 1, 4));
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 1));
  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="web-container">
      <div className="mobile-frame">
        {currentPage === 1 && <Welcome onLogin={() => goToPage(2)} onRegister={() => goToPage(3)} />}
        {currentPage === 2 && <Login />}
        {currentPage === 3 && <Register />}
        {currentPage === 4 && <Profile />}
      </div>
      
      <div className="navigation-controls">
        <button onClick={() => goToPage(1)} className="nav-btn" aria-label="Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>
        <button onClick={prevPage} className="nav-btn" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <span className="nav-text">{currentPage} of 4</span>
        <button onClick={nextPage} className="nav-btn" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Welcome({ onLogin, onRegister }) {
  return (
    <div className="page welcome-page">
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
      </div>
      <div className="welcome-buttons">
        <button className="btn btn-primary" onClick={onRegister}>Create Account</button>
        <button className="btn btn-secondary" onClick={onLogin}>Already Registered? Login</button>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="page form-page">
      <div className="page-header">
        <h1>Signin to your<br/>PopX account</h1>
        <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>
      </div>
      <div className="form-group">
        <div className="input-field">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>
        <div className="input-field">
           <label>Password</label>
           <input type="password" placeholder="Enter password" />
        </div>
      </div>
      <button className="btn btn-primary" style={{ marginTop: '20px' }}>Login</button>
    </div>
  );
}

function Register() {
  return (
    <div className="page form-page register-page">
      <div className="page-header">
        <h1>Create your<br/>PopX account</h1>
      </div>
      <div className="form-group scrollable-form">
        <div className="input-field">
          <label>Full Name<span className="required">*</span></label>
          <input type="text" defaultValue="Marry Doe" />
        </div>
        <div className="input-field">
          <label>Phone number<span className="required">*</span></label>
          <input type="text" defaultValue="Marry Doe" />
        </div>
        <div className="input-field">
          <label>Email address<span className="required">*</span></label>
          <input type="email" defaultValue="Marry Doe" />
        </div>
        <div className="input-field">
          <label>Password <span className="required">*</span></label>
          <input type="password" defaultValue="Marry Doe" />
        </div>
        <div className="input-field">
          <label>Company name</label>
          <input type="text" defaultValue="Marry Doe" />
        </div>
        
        <div className="agency-section">
          <label className="agency-label">Are you an Agency?<span className="required">*</span></label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="agency" defaultChecked />
              <span className="radio-custom"></span> Yes
            </label>
            <label className="radio-label">
              <input type="radio" name="agency" />
              <span className="radio-custom"></span> No
            </label>
          </div>
        </div>
      </div>

      <div className="register-button-container">
         <button className="btn btn-primary btn-block">Create Account</button>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="page profile-page">
      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <div className="avatar-container">
            <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="avatar" />
            <div className="camera-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            </div>
          </div>
          <div className="user-details">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <div className="profile-bio">
          <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-footer-space"></div>
        <div className="profile-divider-bottom"></div>
      </div>
    </div>
  );
}

export default App;
