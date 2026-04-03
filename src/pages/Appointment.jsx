import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="appointment-page page animate-fade-in" style={{paddingTop: '100px'}}>
      
      <div className="container section">
        <div className="appointment-grid">
          
          <div className="appointment-image">
            <img src="/images/boutique.png" alt="Aura Bridal Boutique" />
          </div>

          <div className="appointment-form-container">
            <h1>Book Your Private Fitting</h1>
            <p className="appointment-subtitle">Experience our collection in an intimate, dedicated setting. Our stylists are here to guide your journey to the perfect dress.</p>

            <form className="appointment-form" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              {step === 1 ? (
                <>
                  <div className="form-group">
                    <label>Fitting Type</label>
                    <select required>
                      <option value="">Select an option</option>
                      <option value="in-store">In-Store Bridal Appointment (1.5 hrs)</option>
                      <option value="virtual">Virtual Consultation (45 mins)</option>
                      <option value="custom">Bespoke Design Meeting (2 hrs)</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Preferred Date</label>
                      <input type="date" required />
                    </div>
                    <div className="form-group">
                      <label>Time Preference</label>
                      <select required>
                        <option value="">Select</option>
                        <option>Morning (10am - 12pm)</option>
                        <option>Afternoon (1pm - 4pm)</option>
                        <option>Evening (5pm - 7pm)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Bride's Full Name</label>
                    <input type="text" placeholder="Your Name" required />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com" required />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>

                  <button type="submit" className="btn-primary w-100">Request Appointment</button>
                </>
              ) : (
                <div className="appointment-success">
                  <h3>Request Received</h3>
                  <p>Thank you. Our bridal concierge will contact you within 24 hours to confirm your fitting time.</p>
                  <button type="button" className="btn-secondary mt-3" onClick={() => setStep(1)}>Book Another Fitting</button>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Appointment;
