function openDrinksModal() {
  const modal = document.getElementById("drinksModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeDrinksModal() {
  const modal = document.getElementById("drinksModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("drinksModal");

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeDrinksModal();
    }
  });
});

function openSnacksModal() {
  const modal = document.getElementById("snacksModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeSnacksModal() {
  const modal = document.getElementById("snacksModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
  const snacksModal = document.getElementById("snacksModal");

  snacksModal.addEventListener("click", function (e) {
    if (e.target === snacksModal) {
      closeSnacksModal();
    }
  });
});

function openDessertModal() {
  const modal = document.getElementById("dessertModal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeDessertModal() {
  const modal = document.getElementById("dessertModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function () {
  const dessertModal = document.getElementById("dessertModal");

  dessertModal.addEventListener("click", function (e) {
    if (e.target === dessertModal) {
      closeDessertModal();
    }
  });
});

function openFoodModal() {
  document.getElementById("foodModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeFoodModal() {
  document.getElementById("foodModal").style.display = "none";
  document.body.style.overflow = "auto";
}

// FOOD DATA (FULL MENU)
const foodData = {

  sadhya: [
    "Kootucurry",
    "Aviyal",
    "Olan",
    "Thoran",
    "Injipulli",
    "Pickle",
    "Sambar",
    "Rasam",
    "Moru",
    "Paalada Pradhaman",
    "Papadam",
    "Rice",
    "Pazham",
    "Sarkara Upperi",
    "Parippu",
    "Ghee",
    "Kichadi",
    "Kalan",
    "Chena Varuthathu",
    "Table Paper",
    "Chukkuvellam",
    "Glass",
    "Naalikera (Coconut)"
  ],

  starters: [
    "Chicken Lollypop",
    "Crab Lollypop",
    "Chicken Balls",
    "Chicken Drumstick",
    "Prawn Thamboora",
    "Beef Ball",
    "Finger Fish",
    "Gobi Lollypop",
    "Mixed Keema Ball",
    "Finger Paneer",
    "Finger Chips",
    "Veg Wonton",
    "Baby Vada",
    "Baby Samosa"
  ],

  soups: [
    "Sweet Corn Veg Soup",
    "Hot & Sour Veg Soup",
    "Veg Noodles Soup",
    "Veg Clear Soup",
    "Cream of Veg Soup",
    "Sour Pepper Veg Soup",
    "Tomato Soup",
    "French Onion Soup",
    "Mushroom Soup",
    "Mulakathuvani Soup",
    "Sweet Corn Chicken Soup",
    "Hot & Sour Chicken Soup",
    "Chicken Clear Soup",
    "Cream of Chicken Soup",
    "Chicken Manchow Soup",
    "Hot & Sour Mutton Soup",
    "Sweet Corn Mutton Soup",
    "Mutton Clear Soup",
    "Cream of Mutton Soup",
    "Crab Soup"
  ],

  breads: [
    "Appam",
    "Idiyappam",
    "Pathiri Varieties",
    "Idly Varieties",
    "Dosa Varieties",
    "Puttu Varieties",
    "Seva",
    "Poori Masala",
    "Pongal",
    "Methi Chapathi",
    "Madakku Chapathi",
    "Porotta",
    "Coin Porotta",
    "Cylon Porotta",
    "Tandoor Porotta",
    "Stuffed Porotta",
    "Wheat Porotta",
    "Aloo Porotta",
    "Phulka",
    "Tandoor Roti",
    "Rumali Roti",
    "Naan",
    "Butter Naan",
    "Kulcha",
    "Butter Kulcha",
    "Bhatura"
  ],

  rice: [
    "Plain Rice",
    "Biriyani Rice",
    "Ghee Rice",
    "Curd Rice",
    "Coconut Rice",
    "Tomato Rice",
    "Jeera Rice",
    "Lemon Rice",
    "Gobi Pulao",
    "Veg Pulao",
    "Kashmiri Pulao",
    "Peas Pulao",
    "Methi Pulao",
    "Coriander Pulao",
    "Chicken Pulao",
    "Biriyani Dum Rice",
    "Veg Biriyani",
    "Chicken Biriyani",
    "Mutton Biriyani",
    "Hyderabadi Biriyani",
    "Fish Biriyani",
    "Prawn Fried Rice",
    "Chicken Fried Rice",
    "Mutton Fried Rice",
    "Egg Fried Rice",
    "Szechwan Fried Rice",
    "Thai Fried Rice",
    "Mixed Fried Rice",
    "Mushroom Fried Rice",
    "Vegetable Fried Rice"
  ],

  noodles: [
    "Veg Noodles",
    "Egg Noodles",
    "Chicken Noodles",
    "Mixed Noodles",
    "Mutton Noodles",
    "Fish Noodles",
    "Combination Noodles",
    "Hongkong Noodles (Veg)",
    "Szechwan Noodles (Veg)",
    "Szechwan Noodles (Chicken)",
    "American Choupsey (Veg)",
    "American Choupsey (Non-Veg)",
    "Chinese Choupsey"
  ],

  veg: [
    "Veg Kuruma",
    "Mixed Veg Curry",
    "Veg Stew",
    "Dal Fry",
    "Dal Tadka",
    "Dal Palak",
    "Dhum Aalu",
    "Aalu Mutter",
    "Aalu Gobi",
    "Kadai Vegetable",
    "Navarathna Kuruma",
    "Bhindi Masala",
    "Palak Paneer",
    "Malai Kofta",
    "Veg Jal Fry",
    "Channa Masala",
    "Mushroom Masala",
    "Baigan Masala",
    "Paneer Butter Masala",
    "Paneer Fry",
    "Paneer Shahi Kuruma",
    "Paneer Tikka Masala",
    "Paneer Mutter",
    "Paneer Kadai",
    "Crispy Vegetable",
    "Chilli Paneer",
    "Bhindi Fry",
    "Chilli Gobi",
    "Gobi Manjurian",
    "Mushroom Manjurian",
    "Baby Corn Manjurian",
    "Veg Manjurian"
  ],

  tandoor: [
    "Tandoori Pomfret",
    "Tandoori Prawns",
    "Tandoori Lobster",
    "Tandoori Chicken",
    "Chicken Tikka",
    "Fish Tikka",
    "Paneer Tikka",
    "Tangri Kabab",
    "Malai Kabab",
    "Hariyali Kabab",
    "Barah Kabab",
    "Reshmi Kabab",
    "Kalmi Kabab",
    "Seekh Kabab"
  ],

  poultry: [
    "Chicken Curry",
    "Chicken Masala",
    "Chicken Shahi Kuruma",
    "Chicken with Vegetable",
    "Chicken Kuruma",
    "Chicken Stew",
    "Chicken Bindalu",
    "Chicken Shajhani",
    "Chicken Hyderabadi",
    "Chicken Chettinad",
    "Chicken Rogan Josh",
    "Chicken Makhani",
    "Chicken Szechwan",
    "Chicken Mughlai",
    "Chicken Fry",
    "Chicken Roast",
    "Chicken 65",
    "Chicken Lollypop",
    "Spring Chicken Fry",
    "Duck Roast",
    "Chicken Tikka Masala",
    "Kaada Fry",
    "Dragon Chicken",
    "Chilli Chicken",
    "Ginger Chicken",
    "Garlic Chicken",
    "Butter Chicken",
    "Pepper Chicken",
    "Kadai Chicken",
    "Karakkudi Chicken",
    "Kozhi Varattiyathu"
  ],

  beef: [
    "Beef Fry",
    "Beef Pepper Fry",
    "Beef Coconut Fry",
    "Beef Roast",
    "Beef Ularthiyathu",
    "Beef Peralan",
    "Beef Masala",
    "Beef Chilly",
    "Beef Manchurian",
    "Beef Kuruma",
    "Beef Mappas",
    "Ginger Beef",
    "Garlic Beef",
    "Fried Beef",
    "Beef with Banana",
    "Sliced Beef with Vegetables"
  ],

  mutton: [
    "Mutton Curry",
    "Mutton Stew",
    "Mutton Kuruma",
    "Mutton Masala",
    "Mutton Roast",
    "Mutton Shahi Kuruma",
    "Mutton Mughlai",
    "Mutton Kadai",
    "Mutton Rogan Josh",
    "Mutton Chilly Fry",
    "Mutton Ularthiyathu",
    "Mutton Chops"
  ],

  arabian: [
    "Alfaham Chicken",
    "Shawai Chicken",
    "Alsa",
    "Kapsa",
    "Shawarma",
    "Stuffed Fish",
    "Stuffed Mutton",
    "Manthi Rice"
  ],

  seafood: [
    "Fish Masala",
    "Fish Roast",
    "Fish Molly",
    "Fish Tava Fry",
    "Fish Malabar",
    "Fish Finger",
    "Fish Mulakathithu",
    "Fish Varattiyathu",
    "Fish Pattichathu",
    "Fish Pollichathu",
    "Fish Peera",
    "Fish Manjurian",
    "Fish with Vegetable",
    "Chilli Fish",
    "Ginger Fish",
    "Garlic Fish",
    "Koonthal Fry",
    "Lobster Fry",
    "Kallumakkaya Fry",
    "Karimeen Mappas",
    "Crab Chilli Fry",
    "Crab Roast",
    "Baked Crab",
    "Chilli Prawns",
    "Ginger Prawns",
    "Garlic Prawns",
    "Prawn Fry",
    "Prawn Masala",
    "Tiger Prawns"
  ],

  thattukada: [
    "Bonda",
    "Churatta Puttu",
    "Puttu Biriyani",
    "Thattu Porotta",
    "Pazhampori",
    "Meen Peera",
    "Kappa Meen Curry",
    "Kappa Beef",
    "Kappa Biriyani"
  ]
};

// SHOW FOOD ITEMS
function showFood(category) {
  const list = foodData[category];
  const container = document.getElementById("foodList");

  container.innerHTML = `
    <ul>
      ${list.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function showFood(category, btn) {
  const list = foodData[category];
  const container = document.getElementById("foodList");

  // Update food list
  container.innerHTML = `
    <ul>
      ${list.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;

  // REMOVE active class from all buttons
  document.querySelectorAll(".food-btn").forEach(button => {
    button.classList.remove("active");
  });

  // ADD active class to clicked button
  btn.classList.add("active");
}

