import './Hero.css';

function Hero({ name, tagline }) {
  return (
    <section className="hero">
      <div className="hero__avatar">
        {/* put your photo in the /public folder as profile.jpg */}
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt={name}
          className="hero__avatar-img"
        />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">{name}</h1>
        <p className="hero__subtitle">{tagline}</p>
      </div>
    </section>
  );
}

export default Hero;