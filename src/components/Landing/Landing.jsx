import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <>
    <section className={styles.hero} >
      {/* TOP NAV */}
      <nav className={styles.nav}>
        <img
          className={styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />

        <div className={styles.navRight}>
          <select className={styles.lang}>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button className={styles.signIn}>Sign In</button>
        </div>
      </nav>

      {/* OVERLAY CONTENT */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Unlimited movies, shows, and more</h1>
          <h2>Starts at ₹149. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className={styles.inputBox}>
            <input type="email" placeholder="Email address" />
            <button>Get Started ❯</button>
          </div>
        </div>
      </div>
    </section>
    <hr className={styles.curve} />
    </>

  );
}
