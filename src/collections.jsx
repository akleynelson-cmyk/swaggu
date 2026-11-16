import "./collections.css";
import Shoes from './shoes.jsx';
import Tops from './Tops.jsx';
import Outerwear from './Outerwear.jsx';
import Bottoms from './Bottoms.jsx';
function Collections() {
  return (
    <div className="collections-page">

      <section className="collection-hero">

        <video
          className="collection-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/collection-hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="collection-overlay"></div>

        <h1>OUR COLLECTION</h1>

      </section>

{/* SWAGGU SHOES CATEGORY */}
      <Shoes />
      <Tops />
      <Outerwear />
      <Bottoms />
    </div>
  );
}

export default Collections;
