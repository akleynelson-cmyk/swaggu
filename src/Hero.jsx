import fashionVideo from "./assets/fashion-video.mp4";
import { useEffect, useState } from "react";

function Hero() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">

      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={fashionVideo}
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-content">

        <a
          href="/collections"
          className={`explore-btn ${showButton ? "show" : ""}`}
        >
          EXPLORE OUR COLLECTION
        </a>

      </div>

    </section>
  );
}

export default Hero;
