
import { useState } from "react";
import styles from "./Landing.module.css";

export default function Landing() {
  const [signIn, setSignIn] = useState(false); // 1. Add state

  return (
    <>
      <section className={styles.hero}>
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
            {/* 2. Add onClick to show the Sign In form */}
            <button 
              className={styles.signIn} 
              onClick={() => setSignIn(true)}
            >
              Sign In
            </button>
          </div>
        </nav>

        {/* OVERLAY CONTENT */}
        <div className={styles.overlay}>
          <div className={styles.content}>
            
            {/* 3. Conditional Rendering: Show Form OR Landing Text */}
            {signIn ? (
              <div className={styles.signupScreen}>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                
                <h4>
                  <span className={styles.gray}>New to Netflix? </span>
                  <span 
                    className={styles.link} 
                    onClick={() => setSignIn(false)}
                  >
                   Sign up now.
                  </span>
                </h4>
              </div>
            ) : (
              <>
                <h1>Unlimited movies, shows, and more</h1>
                <h2>Starts at ₹149. Cancel anytime.</h2>
                <p>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>

                <div className={styles.inputBox}>
                  <input type="email" placeholder="Email address" />
                  <button onClick={() => setSignIn(true)}>Get Started ❯</button>
                </div>
              </>
            )}
            
          </div>
        </div>
      </section>
      <hr className={styles.curve} />
    </>
  );
}