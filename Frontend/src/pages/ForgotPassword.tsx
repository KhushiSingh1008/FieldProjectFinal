import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // Reuse auth styling

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus('loading');
      setMessage('Sending password reset email...');

      // Import resetPassword function from authService
      const { resetPassword } = await import('../services/authService');
      await resetPassword(email);
      
      setStatus('success');
      setMessage('Password reset email sent successfully! Please check your email.');
    } catch (error) {
      setStatus('error');
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while sending password reset email. Please try again later.';
      setMessage(errorMessage);
      console.error('Forgot password error:', error);
    }
  };

  const handleGoToLogin = () => {
    navigate('/AuthPage');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Forgot Password</h2>
          <p className="auth-subtitle">Enter your email to reset your password</p>
        </div>

        {status !== 'success' ? (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>

            {status === 'error' && <p className="error-message">{message}</p>}

            <button
              type="submit"
              className="submit-button"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Reset Password'}
            </button>

            <div className="form-footer">
              <button
                type="button"
                onClick={handleGoToLogin}
                className="link-button"
              >
                Back to Login
              </button>
            </div>
          </form>
        ) : (
          <div className="auth-content">
            <p className="success-message">{message}</p>
            <button
              type="button"
              onClick={handleGoToLogin}
              className="submit-button"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 