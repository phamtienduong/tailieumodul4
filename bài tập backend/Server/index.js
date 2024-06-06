const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const { rootRouter } = require("./src/routers/rootRouter.routes")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
// Routes
rootRouter(app)
app.listen(8080,()=>{
    console.log("chay vao cong 8080");
})
