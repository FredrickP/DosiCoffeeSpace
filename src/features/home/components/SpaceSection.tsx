import styles from "./SpaceSection.module.css";

const facilities = [
  {
    number: "01",
    name: "Fast Wi-Fi",
  },
  {
    number: "02",
    name: "Power Outlets",
  },
  {
    number: "03",
    name: "Prayer Room",
  },
  {
    number: "04",
    name: "Pet Friendly Area",
  },
];

function SpaceSection() {
  return (
    <section id="space" className={styles.spaceSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.gallery}>
          <div className={styles.mainImageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
              alt="Interior utama DOSI Coffee & Space"
              className={styles.mainImage}
              loading="lazy"
            />

            <div className={styles.rating}>
              <div className={styles.ratingValue}>
                <span aria-hidden="true">★</span>
                <strong>4.9</strong>
              </div>

              <p>From 280+ happy guests</p>
            </div>
          </div>

          <div className={styles.secondaryImageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=85"
              alt="Area duduk yang nyaman di DOSI"
              className={styles.secondaryImage}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.content}>
          <p className="section-label">More Than a Coffee Shop</p>

          <h2 className={styles.title}>
            Come for coffee.
            <br />
            <em>Stay for the feeling.</em>
          </h2>

          <p className={styles.description}>
            Sudut yang tenang untuk fokus, meja panjang untuk berbagi, dan
            cahaya sore yang membuatmu ingin tinggal sedikit lebih lama.
          </p>

          <div className={styles.facilities}>
            {facilities.map((facility) => (
              <div
                key={facility.number}
                className={styles.facilityItem}
              >
                <span>{facility.number}</span>
                <p>{facility.name}</p>
              </div>
            ))}
          </div>

          <a href="#visit" className={styles.visitLink}>
            Plan Your Visit
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SpaceSection;