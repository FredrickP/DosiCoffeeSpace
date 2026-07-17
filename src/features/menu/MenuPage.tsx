import { useMemo, useState } from "react";
import MenuCard from "./components/MenuCard";
import { menuCategories, menuItems } from "./data/menuData";
import type { MenuCategory } from "./types/menu";
import styles from "./MenuPage.module.css";

type SelectedCategory = MenuCategory | "all";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>("all");

  const filteredMenu = useMemo(() => {
    if (selectedCategory === "all") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <section id="menu" className={styles.menuSection}>
      <div className="container">
        <div className={styles.heading}>
          <div>
            <p className="section-label">Explore Our Menu</p>

            <h2 className={styles.title}>
              Made to become
              <br />
              your <em>usual.</em>
            </h2>
          </div>

          <p className={styles.headingDescription}>
            Dari racikan signature DOSI hingga comfort food untuk menemani
            setiap cerita.
          </p>
        </div>

        <div
          className={styles.filters}
          role="group"
          aria-label="Filter kategori menu"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.filterButton} ${
                selectedCategory === category.id
                  ? styles.filterButtonActive
                  : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <p className={styles.result}>
          Showing {filteredMenu.length} menu items
        </p>

        <div className={styles.menuGrid}>
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuPage;