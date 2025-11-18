# Spice Garden Bistro - Restaurant Menu API

## 1. About the Restaurant

**Spice Garden Bistro** is a cozy fusion restaurant that blends classic Indian flavours with popular global dishes. From tandoor-grilled starters to cheesy pizzas and indulgent desserts, our menu is designed to satisfy every craving.

---

## 2. Project Description

This project is a **Restaurant Menu Display API** built using **Node.js** and **Express** with a simple frontend in **HTML/CSS/JavaScript**.

The API exposes three endpoints to:

- View the full menu
- View only vegetarian items
- View available menu categories with item counts

The frontend uses the `fetch()` API to consume these endpoints and display the data dynamically in the browser.

**Technologies Used:**

- Node.js
- Express.js
- HTML
- CSS
- Vanilla JavaScript (fetch API)

---

## 3. Menu Categories Available

The current menu supports the following categories:

- Appetizer  
- Main Course  
- Dessert  
- Beverage  

---

## 4. Project Structure

```text
restaurant-menu-api/
├── package.json        # Project metadata and dependencies
├── server.js           # Express server and API endpoints
├── .gitignore          # Files/folders ignored by Git
├── README.md           # Project documentation
└── public/
    └── index.html      # Frontend HTML/CSS/JS for menu display
```

---

## 5. API Documentation

### 5.1 GET `/menu`

- **Method:** `GET`
- **Description:** Returns all menu items.

**Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Wood-fired pizza with fresh tomato, basil and mozzarella."
  },
  {
    "id": 2,
    "name": "Chicken Tikka Masala",
    "category": "Main Course",
    "price": 420,
    "isVegetarian": false,
    "description": "Tender chicken cooked in a rich, creamy tomato gravy."
  }
]
```

---

### 5.2 GET `/menu/vegetarian`

- **Method:** `GET`
- **Description:** Returns only vegetarian menu items.

**Sample Response:**

```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Wood-fired pizza with fresh tomato, basil and mozzarella."
  },
  {
    "id": 3,
    "name": "Paneer Tikka",
    "category": "Appetizer",
    "price": 260,
    "isVegetarian": true,
    "description": "Spiced cottage cheese cubes grilled in a tandoor."
  }
]
```

---

### 5.3 GET `/menu/categories`

- **Method:** `GET`
- **Description:** Returns all unique categories and number of items in each.

**Sample Response:**

```json
{
  "categories": [
    {
      "name": "Appetizer",
      "itemCount": 2
    },
    {
      "name": "Main Course",
      "itemCount": 2
    },
    {
      "name": "Dessert",
      "itemCount": 1
    },
    {
      "name": "Beverage",
      "itemCount": 1
    }
  ]
}
```

---

## 6. Installation & Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/restaurant-menu-api.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd restaurant-menu-api
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the server**

   ```bash
   npm start
   ```

5. **Access the API endpoints**

   - Full menu: `http://localhost:3000/menu`
   - Vegetarian menu: `http://localhost:3000/menu/vegetarian`
   - Categories: `http://localhost:3000/menu/categories`

6. **Access the frontend**

   - Open your browser and visit:  
     `http://localhost:3000/`

---

## 7. Features

- Node.js + Express-based REST API
- In-memory menu data with multiple categories
- Dedicated endpoint for vegetarian items
- Categories endpoint with item counts
- Simple, responsive HTML page
- Data fetched using JavaScript `fetch()` API
- Vegetarian items clearly marked with a green badge
- Prices displayed in Indian Rupees (₹)
- Basic error handling on the frontend

---

## 8. GitHub Repository Link

> Replace this with your actual link after pushing the project.

`https://github.com/your-username/restaurant-menu-api`

---

## 9. Author Information

- **Name:** Meer Mohammed Saif
```

