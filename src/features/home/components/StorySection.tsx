import styles from "./StorySection.module.css";

function StorySection() {
  return (
    <section id="story" className={styles.story}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className="section-label">Welcome to DOSI</p>

          <h2 className={styles.title}>
            A little corner
            <br />
            that feels like <em>home.</em>
          </h2>
        </div>

        <div className={styles.description}>
          <p>
            DOSI lahir dari keyakinan sederhana: hari yang baik sering kali
            dimulai dari secangkir kopi dan orang-orang yang tepat.
          </p>

          <p>
            Kami menyajikan kopi pilihan dari dataran tinggi Sidikalang,
  comfort food yang familiar, dan suasana hangat untuk bekerja,
  bercakap, atau sekadar berhenti sejenak.
          </p>

          <a href="#space" className={styles.storyLink}>
            Cerita kami
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85"
            alt="Barista DOSI sedang menyiapkan kopi"
            className={styles.image}
            loading="lazy"
          />

          <div className={styles.imageBadge}>
            <strong>Sidikalang</strong>
            <span>Our signature beans</span>
          </div>
        </div>

        <div className={styles.values}>
          <article className={styles.valueItem}>
            <span>01</span>
            <div>
              <h3>Thoughtfully Brewed</h3>
              <p>
                Setiap cangkir diracik dengan perhatian terhadap rasa dan
                detail.
              </p>
            </div>
          </article>

          <article className={styles.valueItem}>
            <span>02</span>
            <div>
              <h3>Warmly Served</h3>
              <p>
                Pelayanan yang hangat untuk membuat setiap kunjungan terasa
                personal.
              </p>
            </div>
          </article>

          <article className={styles.valueItem}>
            <span>03</span>

            <div>
                <h3>Sidikalang Selection</h3>

                <p>
                Biji kopi pilihan dari dataran tinggi Sidikalang dengan karakter
                rasa yang kuat, hangat, dan berkesan.
                </p>
            </div>
            </article>
        </div>
      </div>
    </section>
  );
}

export default StorySection;