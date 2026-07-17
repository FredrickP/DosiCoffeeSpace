import type {
  MenuCategoryOption,
  MenuItem,
} from "../types/menu";

export const menuCategories: MenuCategoryOption[] = [
  {
    id: "all",
    label: "All Menu",
  },
  {
    id: "signature",
    label: "DOSI Signature",
  },
  {
    id: "espresso",
    label: "Espresso Based",
  },
  {
    id: "manual-brew",
    label: "Manual Brew",
  },
  {
    id: "non-coffee",
    label: "Non Coffee",
  },
  {
    id: "food",
    label: "Food & Bites",
  },
];

export const menuItems: MenuItem[] = [
  // DOSI Signature
  {
    id: 1,
    name: "DOSI Aren Latte",
    description:
      "Espresso house blend, fresh milk, dan house-made palm sugar.",
    price: 32000,
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
    badge: "Signature",
    isAvailable: true,
  },
  {
    id: 2,
    name: "DOSI Creamy Black",
    description:
      "Cold brew dengan sentuhan vanilla cream yang lembut.",
    price: 34000,
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    badge: "Best Seller",
    isAvailable: true,
  },
  {
    id: 3,
    name: "DOSI Cloud",
    description:
      "Espresso, fresh milk, dan salted cream foam yang ringan.",
    price: 36000,
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    badge: "Recommended",
    isAvailable: true,
  },

  // Espresso Based
  {
    id: 4,
    name: "Espresso",
    description:
      "Single shot espresso dengan house beans pilihan DOSI.",
    price: 22000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 5,
    name: "Americano",
    description:
      "Espresso dengan air panas untuk rasa yang bersih dan bold.",
    price: 26000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 6,
    name: "Café Latte",
    description:
      "Espresso dengan steamed milk dan lapisan microfoam.",
    price: 30000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 7,
    name: "Cappuccino",
    description:
      "Perpaduan seimbang antara espresso, steamed milk, dan foam.",
    price: 30000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 8,
    name: "Café Mocha",
    description:
      "Espresso, chocolate, steamed milk, dan creamy foam.",
    price: 34000,
    category: "espresso",
    image:
      "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },

  // Manual Brew
  {
    id: 9,
    name: "V60",
    description:
      "Manual brew dengan karakter rasa bersih dan aroma yang kompleks.",
    price: 32000,
    category: "manual-brew",
    image:
      "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?auto=format&fit=crop&w=900&q=85",
    badge: "Recommended",
    isAvailable: true,
  },
  {
    id: 10,
    name: "Japanese Iced Coffee",
    description:
      "Manual brew langsung di atas es dengan rasa yang bright dan segar.",
    price: 34000,
    category: "manual-brew",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 11,
    name: "Vietnam Drip",
    description:
      "Kopi dengan condensed milk yang manis, tebal, dan creamy.",
    price: 30000,
    category: "manual-brew",
    image:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },

  // Non Coffee
  {
    id: 12,
    name: "Matcha Latte",
    description:
      "Premium matcha dengan fresh milk, tersedia panas atau dingin.",
    price: 34000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=900&q=85",
    badge: "Best Seller",
    isAvailable: true,
  },
  {
    id: 13,
    name: "Chocolate",
    description:
      "Rich chocolate dengan fresh milk dan tekstur yang creamy.",
    price: 32000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 14,
    name: "Lychee Tea",
    description:
      "Teh melati, buah leci, dan citrus untuk rasa yang menyegarkan.",
    price: 30000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 15,
    name: "Strawberry Milk",
    description:
      "Fresh milk dengan house-made strawberry compote.",
    price: 32000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1568901839119-631418a3910d?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    isAvailable: true,
  },

  // Food & Bites
  {
    id: 16,
    name: "Butter Croissant",
    description:
      "Croissant berlapis dengan aroma butter, dipanggang setiap pagi.",
    price: 28000,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 17,
    name: "DOSI Kaya Toast",
    description:
      "Roti panggang, homemade kaya, butter, dan telur setengah matang.",
    price: 32000,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    badge: "Signature",
    isAvailable: true,
  },
  {
    id: 18,
    name: "Chicken Sandwich",
    description:
      "Grilled chicken, lettuce, tomato, cheese, dan house sauce.",
    price: 45000,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=85",
    isAvailable: true,
  },
  {
    id: 19,
    name: "DOSI Fried Rice",
    description:
      "Nasi goreng racikan DOSI dengan ayam, telur, dan acar.",
    price: 48000,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    badge: "Recommended",
    isAvailable: true,
  },
];