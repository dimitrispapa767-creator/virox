import './index.css'

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      
      {/* Header */}
      <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ 
          fontSize: '1.8rem', 
          fontWeight: '900', 
          letterSpacing: '3px', 
          color: 'var(--accent-color)',
          textShadow: '0 0 15px rgba(168, 85, 247, 0.4)' 
        }}>
          VIROX.
        </h1>
      </nav>

      {/* Hero Section */}
      <main style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '1rem', lineHeight: '1.1' }}>
          Your Brand.<br />Built and Launched.
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
          Το απόλυτο οικοσύστημα για νέα clothing brands. <br />
          Premium blanks, μεταξοτυπίες και επαγγελματικό e-shop από 25€.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={{ padding: '0.8rem 2.5rem', fontSize: '1rem', fontWeight: 'bold', backgroundColor: 'var(--accent-color)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', boxShadow: '0 4px 14px 0 rgba(168, 85, 247, 0.39)' }}>
            Ξεκίνα το Brand σου
          </button>
        </div>
      </main>

      {/* Pricing Section */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>Επίλεξε το πλάνο σου</h3>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          
          {/* SaaS Plan */}
          <div style={{ border: '1px solid #222', padding: '2rem', borderRadius: '8px', width: '300px', backgroundColor: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--accent-color)' }}></div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Start-Up Model</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>25€ <span style={{fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)'}}>εφάπαξ</span></p>
            <p style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1.5rem', fontWeight: 'bold' }}>+ 9€ / μήνα</p>
            <ul style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '2', listStyle: 'none' }}>
              <li>✓ Στήσιμο E-shop</li>
              <li>✓ Hosting & Συντήρηση</li>
              <li>✓ Πρόσβαση σε Blanks & Στάμπες</li>
            </ul>
            <button style={{ width: '100%', padding: '0.8rem', backgroundColor: 'var(--text-primary)', color: 'var(--bg-color)', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Επιλογή</button>
          </div>

          {/* Buyout Plan */}
          <div style={{ border: '1px solid #222', padding: '2rem', borderRadius: '8px', width: '300px', backgroundColor: '#0a0a0a' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Ownership Model</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>150€ <span style={{fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)'}}>εφάπαξ</span></p>
            <p style={{ fontSize: '1.2rem', color: 'transparent', marginBottom: '1.5rem' }}>.</p> 
            <ul style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '2', listStyle: 'none' }}>
              <li>✓ Full Custom E-shop</li>
              <li>✓ Παράδοση Κώδικα</li>
              <li>✓ Πρόσβαση σε Blanks & Στάμπες</li>
            </ul>
            <button style={{ width: '100%', padding: '0.8rem', backgroundColor: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--text-secondary)', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Επιλογή</button>
          </div>

        </div>
      </section>

      {/* Merch Production Section */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '5rem 2rem', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Από την Οθόνη, στο Ύφασμα.</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.8' }}>
            Δεν φτιάχνουμε μόνο το site σου. Σου δίνουμε απευθείας πρόσβαση στην παραγωγή για να βγάλεις το πρώτο σου drop χωρίς να ψάχνεις προμηθευτές.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Premium Blanks</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Υψηλής ποιότητας t-shirts και hoodies σε τιμές χονδρικής που αντέχουν στον χρόνο.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Μεταξοτυπίες</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Η πιο κλασική και ανθεκτική μέθοδος εκτύπωσης για ένα επαγγελματικό, retail-ready αποτέλεσμα.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Low Minimums</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Δεν χρειάζεται να παραγγείλεις χιλιάδες κομμάτια. Ιδανικό για νέα streetwear brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Lead Form Section */}
      <section style={{ padding: '5rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Let's Build It.</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Συμπλήρωσε τα στοιχεία σου και θα επικοινωνήσουμε μαζί σου μέσα σε 24 ώρες για να στήσουμε το brand σου.</p>
        </div>

        {/* Web3Forms Action */}
        <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Το δικό σου API Key */}
          <input type="hidden" name="access_key" value="66368fe9-65ec-40ec-b013-50a10581658d" />
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="text" 
              name="Όνομα_Πελάτη"
              placeholder="Το Όνομά σου" 
              required
              style={{ flex: 1, padding: '1rem', backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px', color: '#fff', outline: 'none' }}
            />
            <input 
              type="text" 
              name="Όνομα_Brand"
              placeholder="Όνομα Brand (Προαιρετικό)" 
              style={{ flex: 1, padding: '1rem', backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px', color: '#fff', outline: 'none' }}
            />
          </div>
          <input 
            type="email" 
            name="Email"
            placeholder="Το Email σου" 
            required
            style={{ padding: '1rem', backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px', color: '#fff', outline: 'none' }}
          />
          <textarea 
            name="Μήνυμα"
            placeholder="Πες μας λίγα λόγια για το τι θέλεις να φτιάξεις (π.χ. 30 T-shirts και Start-Up site)..." 
            rows="5"
            required
            style={{ padding: '1rem', backgroundColor: '#111', border: '1px solid #333', borderRadius: '4px', color: '#fff', outline: 'none', resize: 'vertical' }}
          ></textarea>
          <button 
            type="submit"
            style={{ padding: '1rem', fontSize: '1.1rem', fontWeight: 'bold', backgroundColor: 'var(--accent-color)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }}
          >
            Αποστολή Request
          </button>
        </form>
      </section>

      {/* Updated Footer Section */}
      <footer style={{ 
        borderTop: '1px solid #111', 
        padding: '3rem 2rem', 
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{ 
          fontSize: '1.4rem', 
          fontWeight: '900', 
          letterSpacing: '2px', 
          color: '#fff' 
        }}>
          VIROX<span style={{ color: 'var(--accent-color)' }}>.</span>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          flexWrap: 'wrap' 
        }}>
          <a 
            href="mailto:virox.gr@gmail.com" 
            style={{ 
              color: 'var(--text-secondary)', 
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            virox.gr@gmail.com
          </a>
          <a 
            href="https://www.tiktok.com/@virox.gr" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: 'var(--text-secondary)', 
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            TikTok
          </a>
        </div>

        <p style={{ color: '#444', fontSize: '0.8rem', marginTop: '1rem' }}>
          &copy; 2026 VIROX. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App