import React from "react";
import "./styles.css";
import ReactPlayer from "react-player";
function App() {
  let cher1 = "cher1.jpg";
  let cher2 = "cher2.jpg";
  let cher3 = "cher0.jpg";
  let face = "face.jpg";

  let mjlogo = "mjlogo.png";
  let github = "github.png";

  return (
    <div className="app">
      <header>
        <h1>Face Recognition Wheelchair Control</h1>
      </header>
      <main>
        <section>
          <div class="contact-icons">
            <a
              href="https://mahmoud-jouny.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mjlogo} alt="Screenshot 1" />
            </a>

            <a
              href="https://github.com/mhmodjoney"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </section>
        <section>
          <h2>Project Overview</h2>
          <p>
            Welcome to the Face Recognition Wheelchair Control project! This
            innovative application combines facial recognition technology with
            wheelchair control, allowing individuals with limited mobility to
            navigate their environment effortlessly.
          </p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Real-time facial recognition</li>
            <li>Intuitive gesture-based controls</li>
            <li>Adaptive obstacle detection and avoidance</li>
            <li>Customizable user profiles</li>
          </ul>
        </section>
        <section>
          <h2>Demo Video</h2>
          <div style={{ height: "400px" }}>
            <ReactPlayer
              url="face.mp4"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </section>
        <section>
          <h2>Screenshots</h2>
          <div className="screenshot-grid">
            <img src={cher1} alt="Screenshot 1" />
            <img src={cher3} alt="Screenshot 2" />
            <img src={cher2} alt="Screenshot 3" />
            <img src={face} alt="Screenshot 3" />
          </div>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Thank you for your interest in our project! For more information or
            inquiries, please reach out to us at{" "}
            <a href="mailto:mahmoudjouny99@gmail.com">
              mahmoudjouny99@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()}
          <a href="https://mahmoud-jouny.onrender.com/">Mahmoud Jouny.</a> All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
