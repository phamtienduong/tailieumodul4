import express from "express"
import bodyParser from "body-parser"
import { productRouter } from "./src/router/product.routes"
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
productRouter(app)
const PORT:number=7800
app.listen(PORT,()=>{
    console.log("Server is running on port 7800");
})
