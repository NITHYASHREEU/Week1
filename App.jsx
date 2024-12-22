function TravelWebsite() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Travel Websites</h1>
        <p>Travel and Have a great Experience</p>
        <nav style={styles.navbar}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#destinations" style={styles.navLink}>Destinations</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#Login" style={styles.navLink}>Login</a>
          <a href="#Register" style={styles.navLink}>Register</a>
          <a href="#SignOut" style={styles.navLink}>SignOut</a>
        </nav>
      </header>

      

      <section id="home" style={styles.section}>
        <h2>Welcome to Our Travel Website</h2>
        <p>Discover amazing destinations and create unforgettable memories.</p>
      </section>

      <section id="destinations" style={styles.section}>
        <h2>Popular Destinations</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <img
              src="https://i.pinimg.com/736x/59/d8/75/59d8754eeb004956dfaeae590dac4e17.jpg"
              alt="Destination 1"
              style={styles.cardImage}
            />
            <h3>Switzer Land </h3>
            <p>The Swiss Confederation</p>
          </div>
          <div style={styles.card}>
            <img
              src="https://i.pinimg.com/736x/47/46/19/4746194e0036d8a5290191268bc362ab.jpg"
              alt="Destination 2"
              style={styles.cardImage}
            />
            <h3>London</h3>
            <p>The Big Smoke</p>
          </div>
          <div style={styles.card}>
            <img
              src="https://i.pinimg.com/736x/43/b5/15/43b5155bf16f95a48700056bddfb48a4.jpg"
              alt="Destination 3"
              style={styles.cardImage}
            />
            <h3>Dubai</h3>
            <p>City of Gold</p>
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2>About Us</h2>
        <p>We are passionate about travel and helping you explore the world.</p>
      </section>

      <section id="Login" style={styles.section}>
        <h2>Login</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input type="email" name="email" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>Password</label>
            <textarea name="message" required style={styles.textarea}></textarea>
          </div>
          <button type="login" style={styles.button}>Submit</button>
        </form>
      </section>
      <section id="Register" style={styles.section}>
        <h2>Register</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input type="email" name="email" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>Password</label>
            <textarea name="message" required style={styles.textarea}></textarea>
          </div>
          <button type="Signin" style={styles.button}>Signin</button>
        </form>
      </section>
      <section id="SignOut" style={styles.section}>
        <h2>Signout</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <p>Do u want to sign out!!</p>
          <button type="signout" style={styles.button}>SignOut</button>
          </div>
        </form>
      </section>
      

      <footer style={styles.footer}>
        <p>&copy; 2024 Travel Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    backgroundImage: 'url(bbb.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: 'black',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  },
  navbar: {
    marginTop: '1rem',
  },
  navLink: {
    margin: '0 1rem',
    color: '#fff',
    textDecoration: 'none',
  },
  section: {
    padding: '2rem',
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    width: '250px',
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    borderRadius: '8px',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'left',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    resize: 'none',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#f0f4f8',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  },
};

export default TravelWebsite;