import ReservationForm from "./components/ReservationForm";
import styles from "./ReservationPage.module.css";

function ReservationPage() {
  return (
    <section id="visit" className={styles.reservationSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.information}>
          <div>
            <p className="section-label">Come Say Hello</p>

            <h2 className={styles.title}>
              See you at
              <br />
              <em>DOSI.</em>
            </h2>

            <p className={styles.description}>
              Datang untuk menikmati kopi, menyelesaikan pekerjaan, atau
              menghabiskan waktu bersama orang-orang terdekat.
            </p>
          </div>

          <div className={styles.details}>
            <article className={styles.detailItem}>
              <span className={styles.detailNumber}>01</span>

              <div>
                <h3>Location</h3>
                <p>Jakarta Selatan, Indonesia</p>
                <small>Exact location will be announced soon.</small>
              </div>
            </article>

            <article className={styles.detailItem}>
              <span className={styles.detailNumber}>02</span>

              <div>
                <h3>Opening Hours</h3>

                <div className={styles.schedule}>
                  <p>
                    <span>Monday – Friday</span>
                    <strong>07:00 – 22:00</strong>
                  </p>

                  <p>
                    <span>Saturday – Sunday</span>
                    <strong>08:00 – 23:00</strong>
                  </p>
                </div>
              </div>
            </article>

            <article className={styles.detailItem}>
              <span className={styles.detailNumber}>03</span>

              <div>
                <h3>Contact</h3>
                <p>WhatsApp reservation coming soon.</p>
                <small>@dosicoffeespace</small>
              </div>
            </article>
          </div>

          <p className={styles.note}>
            For reservations of more than eight guests, please contact
            our team directly.
          </p>
        </div>

        <div id="reservation" className={styles.formCard}>
          <div className={styles.formHeading}>
            <p>Reserve Your Table</p>
            <span>It only takes a minute</span>
          </div>

          <ReservationForm />
        </div>
      </div>
    </section>
  );
}

export default ReservationPage;