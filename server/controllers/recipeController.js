//dumby data
let recipes = [
    {
        id: 1,
        title: "Cheesy Cassarole",
        desc: "You know this is a mouth-water dish",
        directions: "Preheat oven to 350 degrees F. Lightly spray a 9x13-inch baking dish with cooking spray. Spread crushed chips out into the bottom of the prepared baking dish. Stir chicken, 1 cup Mexican cheese blend, salsa, cream of mushroom soup, cream of chicken soup, and sour cream together in a bowl. Pour chicken mixture over crushed chips into the baking dish.",
        img: "https://images-gmi-pmc.edge-generalmills.com/e36f36c9-0da1-4c6c-8b3e-2d7e82fc11a8.jpg"
    },
    {
        id: 2,
        title: "Baked Potato",
        desc: "An easy to create snack that everyone loves",
        directions: "Preheat oven to 350°. Prick potatoes all over with a fork and rub with oil; season generously with salt and pepper. Place potatoes directly on an oven rack and roast until very soft when squeezed and skin is crisp, 60–75 minutes. Cut open each potato; season with salt and pepper and top with butter, Parmesan, and/or chives.",
        img: "https://assets.bonappetit.com/photos/57adbcc353e63daf11a4de2e/16:9/w_2560,c_limit/perfect-baked-potato.jpg"
    },
    {
        id: 3,
        title: "Spicy Hotdogs",
        desc: "You've loved these since you were a child!",
        directions: "The hot dog is a true symbol of American ingenuity: hand-held, inexpensive, and basically stolen from another country and relabeled as American. And while not all hot dogs are created equal, there are some out there, hidden among the stadiums and food carts of the world, that are fit for a king.",
        img: "https://assets3.thrillist.com/v1/image/2771696/size/gn-gift_guide_variable_c.jpg"
    },
    {
        id: 4,
        title: "Chicken Adobo",
        desc: "Time to start talking to your filipino friends",
        directions: "In a large kettle combine the chicken, the vinegar, the garlic, the bay leaves, the peppercorns, and 1 cup water, bring the mixture to a boil, and simmer it, covered, for 20 minutes. Add the soy sauce and simmer the mixture, covered, for 20 minutes. Transfer the chicken with tongs to a plate and boil the liquid for 10 minutes, or until it is reduced to about 1 cup.",
        img: "https://assets.epicurious.com/photos/579f96a620ada1484ddf3038/master/pass/filipino-adobo-style-chicken.jpg"
    },
    {
        id: 5,
        title: "Waffle Love",
        desc: "This is not just a breakfast food, I love midnight waffle anyday",
        directions: "Preheat waffle iron. Beat eggs in large bowl with hand beater until fluffy. Beat in flour, milk, vegetable oil, sugar, baking powder, salt and vanilla, just until smooth. Spray preheated waffle iron with non-stick cooking spray. Pour mix onto hot waffle iron. Cook until golden brown. Serve hot.",
        img: "https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/waffles-i_13351.jpg"
    },
    {
        id: 6,
        title: "Mac and Cheese",
        desc: "I used to have this for every meal as a child",
        directions: "Classic Baked Macaroni and Cheese Recipe. Active Time. 22 Mins. Total Time. 47 Mins. Yield. 6 to 8 servings. The best stovetop mac and cheese! This recipe is like blue box mac and cheese, but made with real cheddar cheese. It's creamy, delicious and so easy to make!",
        img: "https://images-gmi-pmc.edge-generalmills.com/0d175828-384a-44eb-abbb-0500c07cf397.jpg"
    }
]

const getRecipes = (req, res) => {
    res.status(200).send(recipes)
}

const addRecipe = (req, res) => {
    const {title, desc, directions, img} = req.body
    let id

    if(recipes.length === 0){
        id = 1;
    } else {
        id = recipes[recipes.length - 1].id + 1
    }

    const newRecipe = {
        id, title, desc, directions, img
    }
    recipes.push(newRecipe);
    res.status(200).send(recipes)
}

const updateRecipe = (req, res) => {
    const {id} = req.params
    const {title, desc, directions, img} = req.body
    recipes = recipes.map(recipe => {
        if(recipe.id === +id) {
            recipe.title = title
            recipe.desc = desc
            recipe.directions = directions
            recipe.img = img
        }
        
        return recipe
    })
    res.status(200).send(recipes)
}

const deleteRecipe = (req, res) => {
    const {id} = req.params;
    recipes = recipes.filter(recipe => {
        if(recipe.id !== +id) return recipe;
    })
    res.status(200).send(recipes);
}

// export handler functions
module.exports = {
    getRecipes,
    addRecipe,
    updateRecipe,
    deleteRecipe
};