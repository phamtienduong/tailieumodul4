import { Request, Response } from "express"
import { addProductMySQL, getAllProductMySQL, getProductMySQL } from "../repository/product.repository"

export const getAllProduct = async(req:Request,res:Response)=>{
    const products = await getAllProductMySQL()
    res.status(201).json({
        message:"Lấy thành công",
        data:products
    })
}
export const getProduct = async(req:Request,res:Response)=>{
    const id:number =+req.params.id
    const products = await getProductMySQL(id)
    res.status(201).json({
        message:"Lấy thành công",
        data:products
    })
}
export const addProduct = async (req:Request,res:Response)=>{
    try {
    const {nameProduct,image,origin,categoryId}=req.body
        const result=await addProductMySQL(nameProduct,image,origin,categoryId)
        if(!result){
            res.status(500).json({
                message: "Có lỗi khi thêm sản phẩm",
              });
            } else {
              res.status(201).json({
                message: "Thêm sản phẩm thành công",
                result,
              });
            }
    } catch (error) {
        console.log(error);
    }
}

