import React from 'react'

export default function Otp() {
  return (
    <div>
      <div class="container">
        <header>
          <i class="bx bxs-check-shield"></i>
        </header>
        <h4>Enter OTP Code</h4>
        <form action="#">
          <div class="input-field">
            <input type="number" />
            <input type="number"  />
            <input type="number"  />
            <input type="number"  />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
      </div>
    </div>
  );
}
