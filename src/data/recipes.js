export const recipes = [
    {
        id: 1,
        title: "Classic Roman Pasta Carbonara",
        cuisine: "Italian",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=800",
        description: "Experience the true taste of Rome with this authentic Carbonara. No cream, just the richness of farm-fresh eggs, sharp Pecorino Romano, and crispy Guanciale. A masterpiece of simplicity and technique.",
        time: "25 min",
        difficulty: "Medium",
        rating: 4.9,
        calories: "650 kcal",
        ingredients: [
            "400g Spaghetti or Rigatoni",
            "4 Large Fresh Eggs (yolks preferred)",
            "200g Pecorino Romano cheese, finely grated",
            "150g Guanciale (cured pork jowl), cubed",
            "Freshly ground black pepper (generous amount)"
        ],
        instructions: [
            "Bring a large pot of salted water to a boil. Add pasta and cook until al dente.",
            "While pasta cooks, crisp the guanciale in a large pan over medium heat until golden and fat has rendered. Remove from heat but keep the fat.",
            "In a bowl, whisk eggs and grated Pecorino until it forms a thick paste. Add a splash of pasta water to temper the eggs.",
            "Toss the hot pasta directly into the pan with the guanciale fat (off heat).",
            "Pour the egg mixture over the pasta, tossing vigorously to create a creamy emulsion without scrambling the eggs.",
            "Serve immediately, topped with crispy guanciale bits and extra fresh cracked pepper."
        ],
        tips: "Never add cream! The creaminess comes from the emulsion of egg, cheese, and starchy pasta water."
    },
    {
        id: 2,
        title: "Premium Sushi Platter",
        cuisine: "Japanese",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
        description: "A celebration of fresh seafood. This platter features delicate Nigiri and precision-rolled Maki, highlighting the umami of the ocean paired with perfectly seasoned vinegared rice.",
        time: "50 min",
        difficulty: "Hard",
        rating: 4.9,
        calories: "450 kcal",
        ingredients: [
            "2 cups Sushi Rice (short-grain)",
            "3 tbsp Rice Vinegar",
            "Fresh Sashimi-grade Salmon and Tuna",
            "1 Ripe Avocado, sliced",
            "Nori Seaweed Sheets",
            "Soy Sauce, Wasabi, and Pickled Ginger for serving"
        ],
        instructions: [
            "Rinse rice until water runs clear. Cook and season with vinegar, sugar, and salt mixture while fanning to cool.",
            "Slice fish against the grain into rectangular strips for Nigiri or long strips for Maki.",
            "For Nigiri: Form a small oval of rice in your hand, dab wasabi on the fish, and press gently onto the rice.",
            "For Maki: Place nori on a bamboo mat, spread rice thinly, add filling, and roll tightly.",
            "Slice rolls with a sharp, wet knife and arrange artistically."
        ],
        tips: "Keep your hands moist with water to prevent rice from sticking."
    },
    {
        id: 3,
        title: "Authentic Tacos Al Pastor",
        cuisine: "Mexican",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800",
        description: "The king of tacos. Thinly sliced pork marinated in dried chilies and spices, roasted with pineapple for a perfect sweet and savory balance.",
        time: "2 hr",
        difficulty: "Medium",
        rating: 4.8,
        calories: "300 kcal per serving",
        ingredients: [
            "1kg Pork Shoulder, thinly sliced",
            "3 tbsp Achiote Paste",
            "1/2 cup Pineapple Juice",
            "Fresh Pineapple slices",
            "Small Corn Tortillas",
            "White Onion and Cilantro, chopped",
            "Salsa Verde"
        ],
        instructions: [
            "Blend achiote, pineapple juice, and spices to make the marinade. Coat pork slices and marinate for at least 4 hours.",
            "Stack pork slices tightly (spit-roast style if possible, or pan sear in batches) and cook until charred edges appear.",
            "Roast pineapple chunks until caramelized.",
            "Warm tortillas on a griddle.",
            "Serve pork on tortillas topped with pineapple, onion, cilantro, and a squeeze of lime."
        ],
        tips: "The pineapple enzyme helps tenderize the meat, so don't marinate for more than 24 hours."
    },
    {
        id: 4,
        title: "Creamy Chicken Tikka Masala",
        cuisine: "Indian",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
        description: "Tender charred chicken pieces swimming in an incredible rich, creamy, and spiced tomato sauce. A global favorite for a reason.",
        time: "1 hr 15 min",
        difficulty: "Medium",
        rating: 4.8,
        calories: "550 kcal",
        ingredients: [
            "800g Chicken Thighs, cut into chunks",
            "1 cup Plain Yogurt",
            "2 tbsp Garam Masala",
            "1 can Crushed Tomatoes",
            "1 cup Heavy Cream",
            "Fresh Ginger and Garlic paste",
            "Fenugreek leaves (Kasuri Methi)"
        ],
        instructions: [
            "Marinate chicken in yogurt, ginger, garlic, and spices for 1 hour.",
            "Grill or broil chicken until charred spots appear (don't worry if not fully cooked inside).",
            "In a pot, sauté spices in butter, add tomatoes and simmer until thickened.",
            "Stir in cream and fenugreek leaves.",
            "Add chicken to the sauce and simmer for 15 minutes until tender."
        ],
        tips: "Dried Fenugreek leaves are the secret ingredient that gives the specialized 'restaurant' flavor."
    },
    {
        id: 5,
        title: "Classic French Coq au Vin",
        cuisine: "French",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800",
        description: "A rustic French masterpiece. Chicken slowly braised in red Burgundy wine with lardons, mushrooms, and pearl onions.",
        time: "2.5 hr",
        difficulty: "Hard",
        rating: 4.7,
        calories: "600 kcal",
        ingredients: [
            "Whole Chicken, cut into 8 pieces",
            "1 bottle Red Wine (Burgundy or Pinot Noir)",
            "200g Lardons or thick Bacon",
            "20 Pearl Onions, peeled",
            "250g Cremini Mushrooms",
            "Fresh Thyme and Bay Leaves"
        ],
        instructions: [
            "Marinate chicken in wine overnight (optional but recommended).",
            "Fry lardons in a dutch oven until crisp, remove. Brown chicken in the fat.",
            "Remove chicken, sauté mushrooms and onions.",
            "Return chicken and lardons, pour in the wine marinade and beef stock.",
            "Simmer gently for 1.5 hours until chicken is falling off the bone.",
            "Thicken sauce with a beurre manié (butter and flour mix) if needed."
        ],
        tips: "Use a good wine that you would drink; the flavor concentrates as it cooks."
    },
    {
        id: 6,
        title: "Street-Style Pad Thai",
        cuisine: "Thai",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=800",
        description: "The ultimate stir-fry noodle dish. Sweet, sour, savory, and spicy flavors balanced perfectly with fresh herbs and crunchy peanuts.",
        time: "35 min",
        difficulty: "Medium",
        rating: 4.7,
        calories: "500 kcal",
        ingredients: [
            "200g Rice Stick Noodles",
            "150g Shrimp or Firm Tofu",
            "2 Eggs",
            "1 cup Bean Sprouts",
            "Sauce: Tamarind paste, Fish sauce, Palm sugar",
            "Garnish: Crushed Peanuts, Lime wedges, Chili flakes"
        ],
        instructions: [
            "Soak noodles in warm water until flexible but firm.",
            "Mix sauce ingredients ensuring a balance of sour, salty, and sweet.",
            "Sear shrimp/tofu in a hot wok. Push to side.",
            "Crack eggs into wok and scramble loosely.",
            "Add noodles and sauce, stir-frying constantly until noodles absorb the liquid.",
            "Toss in bean sprouts and garlic chives.",
            "Serve hot with a squeeze of lime and peanuts."
        ],
        tips: "Don't boil the noodles! Soaking them prevents them from becoming mushy in the wok."
    },
    {
        id: 7,
        title: "Traditional Greek Horiatiki Salad",
        cuisine: "Greek",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
        description: "No lettuce, just quality ingredients. Juicy tomatoes, crisp cucumbers, sharp onions, and a block of creamy feta cheese.",
        time: "15 min",
        difficulty: "Easy",
        rating: 4.6,
        calories: "350 kcal",
        ingredients: [
            "4 Ripe Tomatoes, roughly chopped",
            "1 Cucumber, sliced half-moons",
            "1 Red Onion, thinly sliced",
            "1 block Feta Cheese (sheep's milk)",
            "Kalamata Olives",
            "Extra Virgin Olive Oil",
            "Dried Oregano"
        ],
        instructions: [
            "Combine tomatoes, cucumber, and onion in a bowl.",
            "Add olives.",
            "Place the large block of feta on top.",
            "Drizzle generously with olive oil suitable for dressings.",
            "Sprinkle dried oregano over the cheese."
        ],
        tips: "Serve closely with crusty bread to soak up the tomato juices and olive oil."
    },
    {
        id: 8,
        title: "Sichuan Kung Pao Chicken",
        cuisine: "Chinese",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800",
        description: "A famous Sichuan dish combining tender chicken cubes with the crunch of peanuts and the tingling heat of Sichuan peppercorns.",
        time: "30 min",
        difficulty: "Medium",
        rating: 4.7,
        calories: "480 kcal",
        ingredients: [
            "300g Chicken Thigh, diced",
            "1/2 cup Roasted Peanuts",
            "8-10 Dried Red Chilies",
            "1 tsp Sichuan Peppercorns",
            "Scallions (white and green parts)",
            "Sauce: Soy sauce, Black vinegar, Sugar, Cornstarch"
        ],
        instructions: [
            "Marinate chicken with soy sauce and cornstarch.",
            "Prepare the sauce in a small bowl.",
            "Fry peppercorns and chilies in oil until fragrant to infuse the oil.",
            "Add chicken and stir-fry until opaque.",
            "Add aromatics (ginger, garlic, scallion whites).",
            "Pour in sauce and toss until glazed.",
            "Stir in peanuts and finish."
        ],
        tips: "Have all ingredients prepped ('mise en place') before heating the wok; the cooking happens fast."
    },
    {
        id: 9,
        title: "Valencian Seafood Paella",
        cuisine: "Spanish",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800",
        description: "The essence of Spanish cooking. Saffron-infused rice cooked in a wide pan with fresh seafood, absorbing the ocean's flavors.",
        time: "1.5 hr",
        difficulty: "Hard",
        rating: 4.9,
        calories: "550 kcal",
        ingredients: [
            "2 cups Bomba or Arborio Rice",
            "Large pinch of Saffron threads",
            "Mussels, Clams, and Large Shrimp",
            "1L Fish Stock (hot)",
            "Smoked Paprika (Pimentón)",
            "Sofrito (Grated tomato, garlic, onion)"
        ],
        instructions: [
            "Infuse warm stock with saffron.",
            "Sauté shrimp and set aside. Cook the sofrito in the paella pan.",
            "Add rice and paprika, toasting slightly.",
            "Pour in stock. DO NOT STIR from this point on.",
            "Simmer until rice absorbs liquid. Arrange mussels and claims in the last 10 minutes.",
            "Raise heat for 2 minutes at the end to form 'socarrat' (crispy bottom)."
        ],
        tips: "The socarrat is the best part! Listen for a crackling sound at the end of cooking."
    },
    {
        id: 10,
        title: "Dolsot Bibimbap",
        cuisine: "Korean",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800",
        description: "A sizzling hot stone bowl of rice topped with colorful vegetables, marinated beef, and a raw egg that cooks against the hot stone.",
        time: "45 min",
        difficulty: "Medium",
        rating: 4.8,
        calories: "600 kcal",
        ingredients: [
            "Short-grain rice",
            "Bulgogi marinated beef",
            "Spinach, blanched and seasoned",
            "Bean Sprouts",
            "Julienned carrots and zucchini",
            "1 Egg per bowl",
            "Gochujang (Korean chili paste)"
        ],
        instructions: [
            "Sauté vegetables separately with sesame oil and salt.",
            "Cook marinated beef quickly in a hot pan.",
            "Heat a stone bowl (Dolsot) until piping hot, coat inside with sesame oil.",
            "Add rice, pressing against sides to crisp.",
            "Arrange toppings in sections. Crack egg in center.",
            "Serve while sizzling; mix everything together before eating."
        ],
        tips: "If you don't have a stone bowl, a cast iron skillet works great for getting that crispy rice crust."
    },
    {
        id: 11,
        title: "Hanoi Style Pho Bo",
        cuisine: "Vietnamese",
        image: "https://images.unsplash.com/photo-1582878826618-c05326eff935?auto=format&fit=crop&q=80&w=800",
        description: "A soul-warming noodle soup. The broth is simmered for hours with charred spices and bone marrow to achieve a crystal clear depth of flavor.",
        time: "3+ hrs",
        difficulty: "Hard",
        rating: 4.9,
        calories: "400 kcal",
        ingredients: [
            "2kg Beef Leg Bones (rich in marrow)",
            "Charred Ginger and Onion",
            "Spice bag: Star Anise, Cinnamon, Cloves, Cardamom",
            "Fish Sauce",
            "Flat Rice Noodles",
            "Thinly sliced Raw Sirloin",
            "Fresh Herbs: Thai Basil, Cilantro, Mint"
        ],
        instructions: [
            "Parboil bones for 10 mins to clean impurities. Rinse well.",
            "Simmer bones with charred aromatics and spice bag for at least 6-8 hours.",
            "Season broth with fish sauce and rock sugar.",
            "Assemble bowls: noodles, raw beef slices, plenty of onions.",
            "Pour boiling broth over everything to cook the meat instantly.",
            "Serve with herbs and lime."
        ],
        tips: "The clarity of the broth is key. Simmer gently and never let it reach a rolling boil."
    },
    {
        id: 12,
        title: "Crispy Falafel Wrap",
        cuisine: "Lebanese",
        image: "https://images.unsplash.com/photo-1593001840414-7460dd124d25?auto=format&fit=crop&q=80&w=800",
        description: "Golden brown chickpea fritters, crunchy on the outside and fluffy green on the inside. Served in pita with tart pickles and creamy tahini.",
        time: "1 hr",
        difficulty: "Medium",
        rating: 4.6,
        calories: "450 kcal",
        ingredients: [
            "2 cups Dried Chickpeas (soaked overnight)",
            "1 bunch Parsley and Cilantro",
            "1 Onion & 4 Garlic cloves",
            "Spices: Cumin, Coriander, Cayenne",
            "Pita Bread",
            "Tahini Sauce",
            "Turnip pickles"
        ],
        instructions: [
            "Pulse soaked chickpeas (raw, not canned!) with herbs/spices in a processor until coarse meal forms.",
            "Chill mixture for 30 mins.",
            "Form into balls or patties.",
            "Deep fry at 350°F (175°C) until deep brown.",
            "Stuff into pita with veggies and drench in tahini."
        ],
        tips: "Never use canned chickpeas for falafel; they are too wet and will disintegrate during frying."
    },
    {
        id: 13,
        title: "The Ultimate Cheeseburger",
        cuisine: "American",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
        description: "Simplicity done perfectly. A smash-style patty with a crusty sear, gooey American cheese, and fresh crunch, held together by a soft potato bun.",
        time: "20 min",
        difficulty: "Easy",
        rating: 4.8,
        calories: "700 kcal",
        ingredients: [
            "80/20 Ground Beef chuck",
            "Potato Buns, toasted",
            "American Cheese slices",
            "Iceberg Lettuce, shredded",
            "Tomato slices",
            "Special Sauce (Mayo, Ketchup, Relish)"
        ],
        instructions: [
            "Form loose balls of cold ground beef.",
            "Place on screaming hot cast iron plain.",
            "Smash flat with a spatula to maximize surface area contact.",
            "Season heavily with salt and pepper.",
            "Flip once crust is dark brown. Add cheese immediately.",
            "Stack on toasted bun with sauce and toppings."
        ],
        tips: "The 'smash' creates the Maillard reaction, giving you that steak-house flavor crust."
    },
    {
        id: 14,
        title: "Royal Lamb Tagine",
        cuisine: "Moroccan",
        image: "https://images.unsplash.com/photo-1511690656952-34342d5c2895?auto=format&fit=crop&q=80&w=800",
        description: "A feast for the senses. Tender lamb shank slow-cooked with aromatic Ras el Hanout, sweet apricots, and crunchy almonds.",
        time: "2.5 hr",
        difficulty: "Medium",
        rating: 4.8,
        calories: "600 kcal",
        ingredients: [
            "1kg Lamb Shoulder or Shank",
            "2 Onions, sliced",
            "1 tbsp Ras el Hanout spice blend",
            "1 cup Dried Apricots",
            "1/2 cup Blanched Almonds",
            "Preserved Lemon",
            "Couscous for serving"
        ],
        instructions: [
            "Rub lamb with spices.",
            "Sauté onions in the tagine base (or dutch oven).",
            "Add lamb and brown on all sides.",
            "Add water/stock to 1/3 height of meat, cover and simmer low for 1.5 hours.",
            "Add apricots and cook 30 mins more.",
            "Top with toasted almonds and preserved lemon strips."
        ],
        tips: "The conical shape of a Tagine pot circulates steam back down, keeping the meat incredibly moist."
    }
];
