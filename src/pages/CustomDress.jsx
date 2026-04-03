import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const CustomDress = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="custom-dress-page page animate-fade-in" style={{paddingTop: '100px'}}>
      <div className="container section text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>The Bespoke Experience</h1>
        <p style={{color: 'var(--color-text-light)', marginBottom: '3rem'}}>Co-create your dream gown with our master artisans. Your vision, brought to life through unparalleled craftsmanship.</p>

        <div className="custom-steps" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem'}}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{opacity: step === s ? 1 : 0.4, transition: 'opacity 0.3s'}}>
              <h3 style={{fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Step 0{s}</h3>
              <p style={{fontSize: '0.8rem', marginTop: '0.5rem'}}>{s === 1 ? 'Silhouette' : s === 2 ? 'Fabric' : 'Details'}</p>
            </div>
          ))}
        </div>

        <div className="custom-form" style={{textAlign: 'left', minHeight: '300px'}}>
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 style={{marginBottom: '1.5rem'}}>Choose Your Base Silhouette</h2>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                 <label style={{border: '1px solid var(--color-border)', padding: '2rem', cursor: 'pointer', textAlign: 'center'}}>
                    <input type="radio" name="silhouette" style={{marginBottom: '1rem'}}/>
                    <h4>A-Line Classic</h4>
                 </label>
                 <label style={{border: '1px solid var(--color-border)', padding: '2rem', cursor: 'pointer', textAlign: 'center'}}>
                    <input type="radio" name="silhouette" style={{marginBottom: '1rem'}}/>
                    <h4>Mermaid Drama</h4>
                 </label>
              </div>
            </div>
          )}

          {step === 2 && (
             <div className="animate-fade-in">
              <h2 style={{marginBottom: '1.5rem'}}>Select Premium Fabrics</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <label style={{display: 'flex', gap: '1rem', alignItems: 'center', border: '1px solid var(--color-border)', padding: '1.5rem'}}>
                  <input type="checkbox" />
                  <span>French Corded Lace</span>
                </label>
                <label style={{display: 'flex', gap: '1rem', alignItems: 'center', border: '1px solid var(--color-border)', padding: '1.5rem'}}>
                  <input type="checkbox" />
                  <span>Heavy Silk Crepe</span>
                </label>
                <label style={{display: 'flex', gap: '1rem', alignItems: 'center', border: '1px solid var(--color-border)', padding: '1.5rem'}}>
                  <input type="checkbox" />
                  <span>Ethereal Tulle Overlay</span>
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
             <div className="animate-fade-in">
              <h2 style={{marginBottom: '1.5rem'}}>Submit Your Vision</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <textarea placeholder="Describe any specific details, inspirations, or heirloom elements you want to incorporate..." rows="5" style={{width: '100%', padding: '1rem', fontFamily: 'var(--font-sans)', border: '1px solid var(--color-border)', background: 'transparent'}}></textarea>
                <input type="email" placeholder="Email Address for Atelier Contact" style={{width: '100%', padding: '1rem', fontFamily: 'var(--font-sans)', border: '1px solid var(--color-border)', background: 'transparent'}} />
              </div>
            </div>
          )}
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3rem'}}>
           {step > 1 ? <button className="btn-secondary" onClick={() => setStep(step-1)}>Back</button> : <div></div>}
           {step < 3 ? <button className="btn-primary" onClick={() => setStep(step+1)}>Next Step <ChevronRight size={16} style={{verticalAlign: 'middle'}}/></button> : <button className="btn-primary" onClick={() => alert('Consultation Requested!')}>Submit to Atelier</button>}
        </div>

      </div>
    </div>
  );
};

export default CustomDress;
