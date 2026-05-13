window.MENU_DATA = [
  {
    id: "vorspeisen",
    category: { de: "Vorspeisen", en: "Starters" },
    items: [
      {
        name: { de: "Bruschetta Classica", en: "Bruschetta Classica" },
        description: {
          de: "Geröstetes Brot mit Tomaten, Basilikum, Knoblauch und Olivenöl.",
          en: "Toasted bread with tomatoes, basil, garlic and olive oil."
        },
        price: "6,90 €",
        image: "assets/img/food/bruschetta.png",
        tags: ["vegetarian", "popular"],
        allergens: ["Gluten"],
        available: true
      },
      {
        name: { de: "Mediterraner Vorspeisenteller", en: "Mediterranean starter plate" },
        description: {
          de: "Oliven, gegrilltes Gemüse, Hirtenkäse, Dip und Brot.",
          en: "Olives, grilled vegetables, feta-style cheese, dip and bread."
        },
        price: "10,90 €",
        image: "assets/img/food/starter.png",
        tags: ["vegetarian"],
        allergens: ["Milch", "Gluten"],
        available: true
      }
    ]
  },
  {
    id: "hauptgerichte",
    category: { de: "Hauptgerichte", en: "Main dishes" },
    items: [
      {
        name: { de: "Hähnchenspieß vom Grill", en: "Grilled chicken skewer" },
        description: {
          de: "Mit Reis, Salat und hausgemachtem Joghurt-Dip.",
          en: "With rice, salad and homemade yogurt dip."
        },
        price: "14,90 €",
        image: "assets/img/food/grill-plate.png",
        tags: ["popular"],
        allergens: ["Milch"],
        available: true
      },
      {
        name: { de: "Lachsfilet mit Kräutern", en: "Salmon fillet with herbs" },
        description: {
          de: "Schonend gegrillt, serviert mit Gemüse und Kartoffeln.",
          en: "Gently grilled, served with vegetables and potatoes."
        },
        price: "18,90 €",
        image: "assets/img/food/salmon.png",
        tags: [],
        allergens: ["Fisch"],
        available: true
      }
    ]
  },
  {
    id: "pizza",
    category: { de: "Pizza", en: "Pizza" },
    items: [
      {
        name: { de: "Pizza Margherita", en: "Pizza Margherita" },
        description: {
          de: "Tomatensauce, Mozzarella und frisches Basilikum.",
          en: "Tomato sauce, mozzarella and fresh basil."
        },
        price: "8,90 €",
        image: "assets/img/food/pizza.png",
        tags: ["vegetarian"],
        allergens: ["Gluten", "Milch"],
        available: true
      },
      {
        name: { de: "Pizza Sucuk", en: "Pizza Sucuk" },
        description: {
          de: "Tomatensauce, Käse, Sucuk, Paprika und Zwiebeln.",
          en: "Tomato sauce, cheese, sucuk, peppers and onions."
        },
        price: "11,90 €",
        image: "assets/img/food/pizza-sucuk.png",
        tags: ["spicy", "popular"],
        allergens: ["Gluten", "Milch"],
        available: true
      }
    ]
  },
  {
    id: "doener",
    category: { de: "Döner", en: "Doner" },
    items: [
      {
        name: { de: "Döner Tasche", en: "Doner sandwich" },
        description: {
          de: "Fladenbrot mit Fleisch, Salat und Sauce nach Wahl.",
          en: "Flatbread with meat, salad and sauce of your choice."
        },
        price: "7,50 €",
        image: "assets/img/food/doener.png",
        tags: ["popular"],
        allergens: ["Gluten", "Milch"],
        available: true
      },
      {
        name: { de: "Falafel Tasche", en: "Falafel sandwich" },
        description: {
          de: "Knusprige Falafel mit Salat, Sesamsauce und frischen Kräutern.",
          en: "Crispy falafel with salad, sesame sauce and fresh herbs."
        },
        price: "6,90 €",
        image: "assets/img/food/falafel.png",
        tags: ["vegan", "vegetarian"],
        allergens: ["Sesam", "Gluten"],
        available: true
      }
    ]
  },
  {
    id: "burger",
    category: { de: "Burger", en: "Burgers" },
    items: [
      {
        name: { de: "Classic Burger", en: "Classic burger" },
        description: {
          de: "Rindfleisch, Salat, Tomate, Gurke, Zwiebeln und Burgersauce.",
          en: "Beef, lettuce, tomato, cucumber, onions and burger sauce."
        },
        price: "10,90 €",
        image: "assets/img/food/burger.png",
        tags: ["popular"],
        allergens: ["Gluten", "Ei", "Senf"],
        available: true
      },
      {
        name: { de: "Veggie Burger", en: "Veggie burger" },
        description: {
          de: "Gemüsepatty, Salat, Tomate, Gurke und hausgemachte Sauce.",
          en: "Vegetable patty, lettuce, tomato, cucumber and homemade sauce."
        },
        price: "9,90 €",
        image: "assets/img/food/veggie-burger.png",
        tags: ["vegetarian"],
        allergens: ["Gluten", "Ei"],
        available: true
      }
    ]
  },
  {
    id: "salate",
    category: { de: "Salate", en: "Salads" },
    items: [
      {
        name: { de: "Gemischter Salat", en: "Mixed salad" },
        description: {
          de: "Blattsalat, Tomaten, Gurken, Paprika, Mais und Hausdressing.",
          en: "Leaf salad, tomatoes, cucumbers, peppers, corn and house dressing."
        },
        price: "7,90 €",
        image: "assets/img/food/salad.png",
        tags: ["vegetarian"],
        allergens: ["Senf"],
        available: true
      },
      {
        name: { de: "Grillhähnchen Salat", en: "Grilled chicken salad" },
        description: {
          de: "Großer Salat mit gegrilltem Hähnchen, Kräutern und Brot.",
          en: "Large salad with grilled chicken, herbs and bread."
        },
        price: "11,90 €",
        image: "assets/img/food/chicken-salad.png",
        tags: [],
        allergens: ["Gluten"],
        available: true
      }
    ]
  },
  {
    id: "desserts",
    category: { de: "Desserts", en: "Desserts" },
    items: [
      {
        name: { de: "Tiramisu im Glas", en: "Tiramisu in a glass" },
        description: {
          de: "Cremiges Dessert mit Kaffee, Mascarpone und Kakao.",
          en: "Creamy dessert with coffee, mascarpone and cocoa."
        },
        price: "5,90 €",
        image: "assets/img/food/tiramisu.png",
        tags: ["popular"],
        allergens: ["Milch", "Ei", "Gluten"],
        available: true
      },
      {
        name: { de: "Baklava", en: "Baklava" },
        description: {
          de: "Süßes Gebäck mit Nüssen und Sirup.",
          en: "Sweet pastry with nuts and syrup."
        },
        price: "4,90 €",
        image: "assets/img/food/baklava.png",
        tags: ["vegetarian"],
        allergens: ["Gluten", "Nüsse"],
        available: true
      }
    ]
  },
  {
    id: "getraenke",
    category: { de: "Getränke", en: "Drinks" },
    items: [
      {
        name: { de: "Hausgemachte Limonade", en: "Homemade lemonade" },
        description: {
          de: "Mit Zitrone, Minze und wenig Zucker.",
          en: "With lemon, mint and a touch of sugar."
        },
        price: "4,20 €",
        image: "assets/img/food/lemonade.png",
        tags: ["vegan"],
        allergens: [],
        available: true
      },
      {
        name: { de: "Ayran", en: "Ayran" },
        description: {
          de: "Erfrischendes Joghurtgetränk.",
          en: "Refreshing yogurt drink."
        },
        price: "2,50 €",
        image: "assets/img/food/ayran.png",
        tags: [],
        allergens: ["Milch"],
        available: true
      }
    ]
  }
];
