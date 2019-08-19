const express = require("express")
const cors = require('cors')

const recipesCtrl = require('./controllers/recipeController')

const app = express()

app.use(express.json())
app.use(cors())

// end points
app.get('/api/recipes', recipesCtrl.getRecipes);
app.post('/api/recipes', recipesCtrl.addRecipe);
app.put('/api/recipes/:id', recipesCtrl.updateRecipe);
app.delete('/api/recipes/:id', recipesCtrl.deleteRecipe);

//server is listenning on 8080 the proxy is moving the src from 3000 to 8080
const port = 8080
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})