const { getAllPlayer, addPlayer, updatePoint } = require("../controller/player.controller")

const playerRouter = (app)=>{
    app.get("/api/v1/player",getAllPlayer)
    app.post("/api/v1/player",addPlayer)
    app.put("/api/v1/player/:id",updatePoint)
}
module.exports={
    playerRouter
}