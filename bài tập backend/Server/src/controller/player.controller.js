const { getAllPlayerMySQL, addPlayerMySql, incrementPoint, decrementPoint } = require("../repository/player.repository");

async function getAllPlayer(req,res) {
    try {
        const result = await getAllPlayerMySQL()
        res.status(200).json({
            message:"oki na",
            result,
        })
    } catch (error) {
        console.log(error);
    }
}
async function addPlayer(req,res) {
    try {
        const {namePlayer} = req.body
        const result = await addPlayerMySql(namePlayer)
        res.status(200).json({
            message:"Them thanh cong",
            result
        })
    } catch (error) {
        console.log(error);
    }
}
async function updatePoint(req,res) {
    const {id}=req.params;
    const {check} = req.body
    if (check =="increment") {
        await incrementPoint(id)
    }else{
        await decrementPoint(id)
    }
    const result = await getAllPlayerMySQL()
    res.status(200).json({
        message: "Cap nhat thanh cong",
         result
    })

    
}
module.exports={
    getAllPlayer,
    addPlayer,
    updatePoint
}