const { playerRouter } = require("./player.routes")

const rootRouter = (app)=>{
    playerRouter(app)
}
module.exports={rootRouter};