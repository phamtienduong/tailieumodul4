import {Express} from "express"
import { addProduct, getAllProduct, getProduct } from "../controller/product.controller"

export const productRouter = (app:Express)=>{
 app.get("/api/v1/product",getAllProduct)
 app.get("/api/v1/product/:id",getProduct)
 app.post("/api/v1/product/",addProduct)

}