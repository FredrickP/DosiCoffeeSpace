import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundImage} />
      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>
          Coffee <span>·</span> Food <span>·</span> Community
        </p>

        <h1 className={styles.title}>
          Your everyday
          <br />
          <em>pause.</em>
        </h1>

        <p className={styles.description}>
          Kopi yang diracik perlahan, makanan yang menghangatkan,
          dan ruang untuk cerita yang panjang.
        </p>

        <div className={styles.actions}>
          <a href="#menu" className={styles.primaryButton}>
            Explore Our Menu
            <span aria-hidden="true">→</span>
          </a>

          <a href="#space" className={styles.secondaryButton}>
            Discover the Space
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className={styles.meta}>
        <span>Jakarta · Indonesia</span>
        <span>Est. 2026</span>
      </div>

      <a
        href="#story"
        className={styles.scrollIndicator}
        aria-label="Lihat cerita DOSI"
      >
        <span />
      </a>
    </section>
  );
}

export default HeroSection;