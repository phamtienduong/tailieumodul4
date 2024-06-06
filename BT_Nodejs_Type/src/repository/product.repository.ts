import { addProduct } from './../controller/product.controller';
import db from "../config/db.config"

export const getAllProductMySQL = async()=>{
    try {
        const [products] = await db.execute("select * from products")
        return products ;
    } catch (error) {
        console.log(error);
    }
}
export const getProductMySQL = async(productId:number)=>{
    try {
        const [products] = await db.execute("select * from products where productId = ?",[productId])
        return products;
    } catch (error) {
        console.log(error);
    }
}
export const addProductMySQL = async(nameProduct:string,image:string,origin:string,categoryId:number)=>{
    try {
         const [products]= await db.execute("insert into products (nameProduct,image,origin,categoryId) values (?,?,?,?)",[nameProduct,image,origin,categoryId])
         return products
    } catch (error) {
        console.log(error);
    }

}
