// server.js
// Main Express server for Restaurant Menu Display API

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// In-memory menu data
const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    price: 350,
    isVegetarian: true,
    description: "Wood-fired pizza with fresh tomato, basil and mozzarella."
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    category: "Main Course",
    price: 420,
    isVegetarian: false,
    description: "Tender chicken cooked in a rich, creamy tomato gravy."
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Appetizer",
    price: 260,
    isVegetarian: true,
    description: "Spiced cottage cheese cubes grilled in a tandoor."
  },
  {
    id: 4,
    name: "Tandoori Chicken",
    category: "Appetizer",
    price: 380,
    isVegetarian: false,
    description: "Char-grilled chicken marinated in yogurt and spices."
  },
  {
    id: 5,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 150,
    isVegetarian: true,
    description: "Soft fried milk dumplings soaked in saffron sugar syrup."
  },
  {
    id: 6,
    name: "Masala Lemon Soda",
    category: "Beverage",
    price: 120,
    isVegetarian: true,
    description: "Chilled lemon soda with a tangy Indian masala twist."
  }
];

// Middleware: serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

/**
 * GET /menu
 * Purpose: Returns a list of all menu items
 */
app.get("/menu", (req, res) => {
  res.json(menuItems);
});

/**
 * GET /menu/vegetarian
 * Purpose: Returns only vegetarian menu items
 */
app.get("/menu/vegetarian", (req, res) => {
  const vegItems = menuItems.filter((item) => item.isVegetarian === true);
  res.json(vegItems);
});

/**
 * GET /menu/categories
 * Purpose: Returns all unique menu categories with item count
 */
app.get("/menu/categories", (req, res) => {
  const categoryCounts = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] += 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryCounts).map(
    ([name, itemCount]) => ({
      name,
      itemCount
    })
  );

  res.json({ categories });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
