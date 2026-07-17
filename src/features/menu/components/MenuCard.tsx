import type { MenuItem } from "../types/menu";
import styles from "./MenuCard.module.css";

interface MenuCardProps {
  item: MenuItem;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

function MenuCard({ item }: MenuCardProps) {
  return (
    <article
      className={`${styles.card} ${
        !item.isAvailable ? styles.unavailable : ""
      }`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={item.image}
          alt={item.name}
          className={styles.image}
          loading="lazy"
        />

        {item.badge && (
          <span className={styles.badge}>{item.badge}</span>
        )}

        {!item.isAvailable && (
          <span className={styles.soldOut}>Sold Out</span>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.information}>
          <h3 className={styles.name}>{item.name}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>

        <strong className={styles.price}>
          {formatPrice(item.price)}
        </strong>
      </div>
    </article>
  );
}

export default MenuCard;